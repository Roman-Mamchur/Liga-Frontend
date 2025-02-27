const CHATWOOT_API_URL = process.env.NEXT_PUBLIC_CHATWOOT_API_URL;
const CHATWOOT_INBOX_IDENTIFIER =
  process.env.NEXT_PUBLIC_CHATWOOT_INBOX_IDENTIFIER;
const CHATWOOT_WEBSOCKET_URL = process.env.NEXT_PUBLIC_CHATWOOT_WEBSOCKET_URL;

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
    console.log("✅ WebSocket connected");

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

const setUpContact = async () => {
  if (!sessionStore.get("contactIdentifier")) {
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

    const data = await response.json();
    sessionStore.set("contactIdentifier", data.source_id);
    sessionStore.set("pubsubToken", data.pubsub_token);
  }
};

const setUpConversation = async () => {
  if (!sessionStore.get("contactConversation")) {
    const contactId = sessionStore.get("contactIdentifier");
    const response = await fetch(
      `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts/${contactId}/conversations`,
      {
        method: "POST",
      },
    );

    const data = await response.json();
    sessionStore.set("contactConversation", data.id);
  }
};

export const sendMessage = async (message: string, file?: File) => {
  const contactId = sessionStore.get("contactIdentifier");
  const conversationId = sessionStore.get("contactConversation");

  const formData = new FormData();
  formData.append("content", message);
  if (file) formData.append("attachments[]", file);

  await fetch(
    `${CHATWOOT_API_URL}/inboxes/${CHATWOOT_INBOX_IDENTIFIER}/contacts/${contactId}/conversations/${conversationId}/messages`,
    {
      method: "POST",
      body: formData,
    },
  );
};
