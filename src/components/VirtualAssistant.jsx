import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { faqItems, siteInfo } from "../const/index";

const WELCOME = `Hi! I'm Bauzytech's assistant. Ask me about services, pricing, tech stack, or how to get in touch.`;

function findAnswer(input) {
  const text = input.toLowerCase();

  for (const item of faqItems) {
    if (item.keywords.some((k) => text.includes(k))) {
      return item.answer;
    }
  }

  return `I'm not sure about that one — but you can ask me about services, pricing, tech stack, or reach ${siteInfo.name} directly on WhatsApp (+234 907 320 3200) or email (${siteInfo.email}).`;
}

export const VirtualAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: "user", text: trimmed };
    const botMsg = { from: "bot", text: findAnswer(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const quickQuestions = [
    "What services do you offer?",
    "What's your pricing?",
    "How can I contact you?",
  ];

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open virtual assistant"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-amber-400 shadow-lg shadow-black/40 cursor-pointer group"
      >
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-30" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black flex items-center justify-center text-[9px] font-black text-white">
              1
            </span>
          </>
        )}
        {open ? (
          <X className="relative text-black" size={26} />
        ) : (
          <MessageCircle className="relative text-black" size={26} />
        )}

        {/* Tooltip on hover — desktop only */}
        <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 border border-gray-700 text-white text-xs font-semibold px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Ask me anything
        </span>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-40 left-4 right-4 sm:left-auto sm:right-6 z-40 w-auto sm:w-96 max-w-full bg-black border border-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "min(26rem, 55vh)" }}
          >
            {/* Header */}
            <div className="bg-gray-950 border-b border-gray-800 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center font-black text-black shrink-0">
                B
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-sm leading-tight">
                  Bauzytech Assistant
                </p>
                <p className="text-gray-500 text-xs">
                  Usually replies instantly
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer p-1 -mr-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed px-4 py-2.5 rounded-lg ${
                      m.from === "user"
                        ? "bg-amber-400 text-black font-medium"
                        : "bg-gray-900 border border-gray-800 text-gray-300"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pt-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() =>
                        setMessages((prev) => [
                          ...prev,
                          { from: "user", text: q },
                          { from: "bot", text: findAnswer(q) },
                        ])
                      }
                      className="text-left text-xs text-amber-400 border border-gray-800 hover:border-amber-400 rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="border-t border-gray-800 p-3 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-950 border border-gray-800 focus:border-amber-400 outline-none text-white text-sm rounded-lg px-3 py-2 transition-colors duration-200"
              />
              <button
                type="submit"
                aria-label="Send"
                className="bg-amber-400 hover:bg-amber-300 text-black rounded-lg px-3 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
