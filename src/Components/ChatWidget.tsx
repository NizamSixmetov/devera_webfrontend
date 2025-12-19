import { Bot, MessageCircle, Send, User, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatWidget = () => {
  const { t, i18n } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasAppeared, setHasAppeared] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getInitialMessages = useCallback((): Message[] => {
    try {
      const initialMessages = t("chat.initialMessages", {
        returnObjects: true,
      });

      if (Array.isArray(initialMessages)) {
        return initialMessages.map((text, index) => ({
          id: index + 1,
          text,
          sender: "bot" as const,
          timestamp: new Date(Date.now() - (300000 - index * 60000)),
        }));
      }

      return [
        {
          id: 1,
          text: "Hello! I'm Devera Support Bot. How can I help you today?",
          sender: "bot" as const,
          timestamp: new Date(Date.now() - 300000),
        },
        {
          id: 2,
          text: "Welcome to DEVERA IT Solutions! We're here to assist you.",
          sender: "bot" as const,
          timestamp: new Date(Date.now() - 240000),
        },
      ];
    } catch (error) {
      console.error("Error getting initial messages:", error);
      return [];
    }
  }, [t]);

  useEffect(() => {
    setMessages(getInitialMessages());
  }, [getInitialMessages, i18n.language]);

  useEffect(() => {
    if (messagesEndRef.current && isChatOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isChatOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAppeared(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: message.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setMessage("");

    setTimeout(() => {
      try {
        const responses = t("chat.responses", { returnObjects: true });

        let responseText: string;
        if (Array.isArray(responses) && responses.length > 0) {
          responseText =
            responses[Math.floor(Math.random() * responses.length)];
        } else {
          responseText =
            "Thank you for your message! We'll get back to you soon.";
        }

        const botResponse: Message = {
          id: messages.length + 2,
          text: responseText,
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);
      } catch (error) {
        console.error("Error getting bot responses:", error);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div ref={chatContainerRef}>
      <AnimatePresence>
        {isChatOpen ? (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:bg-transparent md:backdrop-blur-0"
              onClick={() => setIsChatOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed md:relative flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 
                         w-[calc(100vw-2rem)] md:w-[380px] 
                         h-[85vh] md:h-[500px] 
                         top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         md:top-auto md:left-auto md:right-0 md:bottom-0 md:transform-none 
                         overflow-hidden z-50"
              style={{
                maxWidth: "calc(100vw - 2rem)",
                maxHeight: "85vh",
              }}
            >
              {/* Chat Header */}
              <div className="bg-[#0A66C2] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">{t("chat.title")}</h3>
                    <p className="text-xs opacity-80">{t("chat.subtitle")}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label={t("contact.form.submitting") || "Close chat"}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] md:max-w-[80%] rounded-2xl p-3 ${
                          msg.sender === "user"
                            ? "bg-[#0A66C2] text-white rounded-br-none"
                            : "bg-white border border-gray-200 rounded-bl-none"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {msg.sender === "bot" ? (
                            <Bot size={14} className="text-[#0A66C2]" />
                          ) : (
                            <User size={14} className="text-white" />
                          )}
                          <span className="text-xs opacity-80">
                            {msg.sender === "bot"
                              ? t("chat.botName")
                              : t("chat.user")}
                          </span>
                          <span className="text-xs opacity-60">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm break-words">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t("chat.placeholder")}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent text-sm md:text-base"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="bg-[#0A66C2] text-white p-3 rounded-xl hover:bg-[#0550a0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    aria-label={t("contact.form.submit") || "Send message"}
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2 px-2">
                  {t("chat.availability")}
                </p>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{
              opacity: hasAppeared ? 1 : 0,
              scale: hasAppeared ? 1 : 0.5,
              y: hasAppeared ? 0 : 50,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(true)}
            className="bg-[#0A66C2] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#0550a0] transition-all"
            aria-label="Open chat"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
