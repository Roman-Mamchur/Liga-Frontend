"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSettings: {
      hideMessageBubble: boolean;
      position: string;
      locale: string;
      type: string;
    };
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const ChatwootWidget = () => {
  const locale = useLocale();

  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: locale,
      type: "standard",
    };

    // Paste the script from inbox settings except the <script> tag
    const script = document.createElement("script");
    script.src = "https://app.chatwoot.com/packs/js/sdk.js";
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "eGfAF2vAd6kCnu1LRxi5zSQ5",
        baseUrl: "https://app.chatwoot.com",
      });
    };

    document.head.appendChild(script);

    // Cleanup function to remove the script if the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, [locale]);

  return null;
};

export default ChatwootWidget;
