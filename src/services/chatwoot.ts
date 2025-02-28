const CHATWOOT_API_URL = "https://app.chatwoot.com/public/api/v1";
const CHATWOOT_INBOX_IDENTIFIER = "xDmF6ibP5c9zKe9QBXapkeb5";
const CHATWOOT_WEBSOCKET_URL = "wss://app.chatwoot.com/cable";

const sessionStore = {
  get: (key: string) => sessionStorage.getItem(key),
  set: (key: string, value: string) => sessionStorage.setItem(key, value),
};

export const initializeWebSocket = (
  onMessage: (event: MessageEvent) => void,
) => {
  if (!CHATWOOT_WEBSOCKET_URL) {
    throw new Error("WebSocket URL is not defined");
  }
  const ws = new WebSocket(CHATWOOT_WEBSOCKET_URL);

  ws.addEventListener("message", onMessage);

  ws.addEventListener("open", async () => {
    await setUpContact();
    await setUpConversation();

    const pubsubToken = sessionStore.get("pubsubToken");
    if (pubsubToken) {
      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "RoomChannel",
            pubsub_token: pubsubToken,
          }),
        }),
      );
    }
  });

  return ws;
};

export const setUpContact = async () => {
  const contactIdentifier = sessionStore.get("contactIdentifier");

  if (!contactIdentifier) {
    try {
      const response = await fetch(
        `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "User",
            identifier: `user-${Date.now()}`,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create contact");
      }

      const data = await response.json();
      sessionStore.set("contactIdentifier", data.source_id);
      sessionStore.set("pubsubToken", data.pubsub_token);
    } catch (error) {
      console.error("Error setting up contact:", error);
      return null;
    }
  }

  return contactIdentifier;
};

const fetchPreviousMessages = async (conversationId: string) => {
  try {
    const response = await fetch(
      `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts/${sessionStore.get("contactIdentifier")}/conversations/${conversationId}/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATWOOT_API_KEY}`,
        },
      },
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching previous messages:", error);
    return [];
  }
};

export const setUpConversation = async () => {
  let conversationId: string | null = sessionStore.get("contactConversation");

  if (conversationId) {
    console.log("Conversation exists. Fetching previous messages...");
    return fetchPreviousMessages(conversationId);
  }

  try {
    const contactId = sessionStore.get("contactIdentifier");
    if (!contactId) {
      console.error("No contact ID found. Cannot set up conversation.");
      return null;
    }

    const response = await fetch(
      `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts/${contactId}/conversations`,
      {
        method: "POST",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to create conversation");
    }

    const data = await response.json();
    conversationId = data.id;

    if (conversationId) {
      sessionStore.set("contactConversation", conversationId);
      console.log("New conversation created. Skipping message fetch.");
      return [];
    } else {
      console.error("Received null conversationId from API.");
      return null;
    }
  } catch (error) {
    console.error("Error setting up conversation:", error);
    return null;
  }
};

export const sendMessage = async (message: string, file?: File) => {
  let contactId = sessionStore.get("contactIdentifier");
  let conversationId = sessionStore.get("contactConversation");

  if (!contactId) {
    console.warn("Contact ID missing. Setting up contact...");
    await setUpContact();
    contactId = sessionStore.get("contactIdentifier");
  }

  if (!contactId) {
    console.error("Failed to set up contact. Cannot send message.");
    return;
  }

  if (!conversationId) {
    console.warn("Conversation ID missing. Setting up conversation...");
    await setUpConversation();
    conversationId = sessionStore.get("contactConversation");
  }

  if (!conversationId) {
    console.error("Failed to set up conversation. Cannot send message.");
    return;
  }

  const formData = new FormData();
  formData.append("content", message);
  if (file) formData.append("attachments[]", file);

  try {
    const response = await fetch(
      `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts/${contactId}/conversations/${conversationId}/messages`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
