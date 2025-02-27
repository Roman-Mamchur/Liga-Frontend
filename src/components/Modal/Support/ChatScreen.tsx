"use client";

import { initializeWebSocket, sendMessage } from "@/services/chatwoot";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPaperclip, FaPaperPlane, FaXmark } from "react-icons/fa6";

const ChatScreen = () => {
  const t = useTranslations("Modal.Support");

  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);
  const [messages, setMessages] = useState<
    {
      id: string;
      text: string;
      sender: "user" | "agent";
      attachments?: string[];
    }[]
  >([]);

  useEffect(() => {
    const handleNewMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "ping") return;

        if (
          data.message?.event === "message.created" &&
          data.message.data.message_type === 1
        ) {
          const messageId = data.message.data.id;
          const isUser = data.message.data.sender.type === "contact";

          setMessages((prev) => {
            if (prev.some((msg) => msg.id === messageId)) return prev;

            return [
              ...prev,
              {
                id: messageId,
                text: data.message.data.content,
                sender: isUser ? "user" : "agent",
                attachments: data.message.data.attachments?.map(
                  (att: { data_url: string }) => att.data_url,
                ),
              },
            ];
          });
        }
      } catch {
        console.error("Invalid message received:", event.data);
      }
    };

    const ws = initializeWebSocket(handleNewMessage);

    return () => {
      ws?.close();
    };
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const removeFile = () => {
    setFile(undefined);
    setPreview(null);
  };

  const handleSendMessage = async () => {
    if (!message.trim() && !file) return;

    const tempMessageId = `temp-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      {
        id: tempMessageId,
        text: message,
        sender: "user",
        attachments: preview ? [preview] : [],
      },
    ]);

    setMessage("");
    removeFile();

    const textarea = document.getElementById(
      "messageInput",
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = "40px";
    }

    await sendMessage(message, file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    // Auto-expand textarea height
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div
        id="content"
        className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-3"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`rounded p-2 md:max-w-72 ${
              msg.sender === "user"
                ? "self-end bg-primary text-white"
                : "self-start bg-card text-foreground"
            }`}
          >
            <p className="whitespace-pre-wrap">{msg.text}</p>
            {msg.attachments?.map((att, i) => (
              <Image
                key={i}
                src={att}
                alt="Attachment"
                width={150}
                height={150}
                sizes="100vw"
                priority={true}
                className={`${msg.text && "mt-2"} h-auto w-full max-w-xs rounded`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="border-t">
        {/* Image Preview */}
        {preview && (
          <div className="relative mx-auto mt-4 flex w-fit justify-center rounded bg-card">
            <Image
              src={preview}
              alt="Preview"
              width={150}
              height={150}
              className="rounded"
            />
            <button
              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white"
              onClick={removeFile}
            >
              <FaXmark className="size-3" />
            </button>
          </div>
        )}
        {/* Message Input */}
        <div className="flex items-center p-4">
          <textarea
            id="messageInput"
            className="max-h-40 min-h-[40px] flex-1 resize-none overflow-hidden rounded border p-2"
            placeholder={t("messagePlaceholder")}
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            className="ml-2 p-2 text-gray-500 hover:text-gray-800"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <FaPaperclip />
          </button>
          <button
            className="ml-2 rounded bg-primary p-2 text-white"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
