import { useState } from "react";
import {
  MessageCircle,
  Send,
  Loader2,
  User,
  Bot,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router";
import { useParams } from "react-router";

// Function to format AI responses with proper styling
const formatResponse = (text: string) => {
  if (!text) return text;

  // Split text into lines for processing
  const lines = text.split("\n");

  return lines.map((line, index) => {
    // Handle code blocks (lines starting with ```)
    if (line.trim().startsWith("```")) {
      const language = line.trim().substring(3).trim();
      return (
        <div key={index} className="my-4">
          <div className="bg-gray-900 text-gray-100 px-4 py-2 rounded-t-lg text-sm font-mono border-l-4 border-orange-500">
            <span className="text-orange-400 font-semibold">
              {language || "code"}
            </span>
          </div>
        </div>
      );
    }

    // Handle code content (lines that appear to be code)
    if (
      (line.trim() &&
        (line.includes("function ") ||
          line.includes("const ") ||
          line.includes("let ") ||
          line.includes("var ") ||
          line.includes("import ") ||
          line.includes("export ") ||
          line.includes("return ") ||
          line.includes("if (") ||
          line.includes("for (") ||
          line.includes("while (") ||
          line.includes("class ") ||
          line.includes("interface ") ||
          line.includes("type ") ||
          line.includes("{") ||
          line.includes("}") ||
          line.includes("[") ||
          line.includes("]") ||
          // line.includes("") ||
          line.includes("//") ||
          line.includes(".then") ||
          line.includes("Promise.") ||
          line.match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:]/))) ||
      line.match(/^\s*[<>]/)
    ) {
      return (
        <div
          key={index}
          className="bg-gray-900 text-gray-100 px-4 py-2 font-mono text-sm border-l-4 border-orange-500 overflow-x-auto"
        >
          <code className="">{line}</code>
        </div>
      );
    }

    // Handle inline code (text wrapped in backticks)
    if (line.includes("`") && !line.trim().startsWith("```")) {
      const parts = line.split(/(`[^`]+`)/g);
      const formattedLine = parts.map((part, partIndex) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          const codeText = part.slice(1, -1);
          return (
            <code
              key={partIndex}
              className="bg-gray-700 text-orange-300 px-2 py-1 rounded font-mono text-sm border border-gray-600"
            >
              {codeText}
            </code>
          );
        }
        return formatTextWithBold(part);
      });

      return (
        <div key={index} className="mb-2 text-gray-300">
          {formattedLine}
        </div>
      );
    }

    // Handle bold text **text**
    if (line.includes("**")) {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, partIndex) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={partIndex} className="font-bold text-orange-400">
              {boldText}
            </strong>
          );
        }
        return part;
      });

      // Check if this line contains a link
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [fullMatch, linkText, url] = linkMatch;
        const beforeLink = line.substring(0, line.indexOf(fullMatch));
        const afterLink = line.substring(
          line.indexOf(fullMatch) + fullMatch.length
        );

        return (
          <div key={index} className="mb-2 flex items-center">
            <span className="mr-2 text-orange-500">•</span>
            <div>
              {formatTextWithBold(beforeLink)}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-2 underline-offset-2 hover:decoration-orange-300 transition-colors duration-200 font-medium"
              >
                {linkText}
              </a>
              {formatTextWithBold(afterLink)}
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="mb-2">
          {formattedLine}
        </div>
      );
    }

    // Handle bullet points starting with *
    if (line.trim().startsWith("*")) {
      const content = line.trim().substring(1).trim();
      const linkMatch = content.match(
        /\*\*([^*]+)\*\*.*?\[([^\]]+)\]\(([^)]+)\)/
      );

      if (linkMatch) {
        const [, boldText, linkText, url] = linkMatch;
        const afterBold = content.substring(
          content.indexOf("**") + boldText.length + 4
        );
        const beforeLink = afterBold.substring(0, afterBold.indexOf("["));

        return (
          <div key={index} className="mb-3 flex items-start">
            <span className="text-orange-500 mr-3 mt-1 text-lg">•</span>
            <div className="flex-1">
              <strong className="font-bold text-orange-400">{boldText}</strong>
              <span className="text-gray-300">{beforeLink}</span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline decoration-2 underline-offset-2 hover:decoration-orange-300 transition-colors duration-200 font-medium ml-1"
              >
                {linkText}
              </a>
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="mb-2 flex items-start">
          <span className="text-orange-500 mr-3 mt-1">•</span>
          <span className="text-gray-300">{content}</span>
        </div>
      );
    }

    // Handle regular lines
    if (line.trim()) {
      return (
        <div key={index} className="mb-2 text-gray-300">
          {formatTextWithBold(line)}
        </div>
      );
    }

    // Empty lines for spacing
    return <div key={index} className="mb-2"></div>;
  });
};

// Helper function to format bold text within a line
const formatTextWithBold = (text: string) => {
  if (!text.includes("**")) return text;

  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-orange-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function ChatPagePerson() {
  const { personName } = useParams();
  const [message, setMessage] = useState("");
  const [streamResponse, setStreamResponse] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [conversation, setConversation] = useState<
    Array<{ type: "user" | "ai"; content: string }>
  >([]);

  const handleStreamChat = async () => {
    if (!message.trim()) return;

    // Add user message to conversation
    const userMessage = message;
    setConversation((prev) => [
      ...prev,
      { type: "user", content: userMessage },
    ]);
    setMessage("");
    setStreaming(true);
    setStreamResponse("");

    try {
      const res = await fetch("https://chaicode-chat-be.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage, mentor: personName }),
      });

      const reader = res?.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      while (true) {
        const { done, value }: any = await reader?.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.slice(6));
            fullResponse += data.content;
            setStreamResponse(fullResponse);
          }
        }
      }

      // Add AI response to conversation
      setConversation((prev) => [
        ...prev,
        { type: "ai", content: fullResponse },
      ]);
      setStreamResponse("");
    } catch (error: any) {
      const errorMessage = "Error: " + error.message;
      setStreamResponse(errorMessage);
      setConversation((prev) => [
        ...prev,
        { type: "ai", content: errorMessage },
      ]);
    }

    setStreaming(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleStreamChat();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link
                to="/"
                className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-gray-300" />
              </Link>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-100">
                Chaicode Chat
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {conversation.length === 0 && !streaming && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100 mb-2">
                Welcome to Chaicode Chat
              </h2>
              <p className="text-gray-400">
                Start a conversation by typing a message below
              </p>
            </div>
          )}

          {/* Render conversation */}
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[80%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"} items-start space-x-3`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 ml-3"
                      : "bg-gray-700 mr-3"
                  }`}
                >
                  {msg.type === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-300" />
                  )}
                </div>

                {/* Message Content */}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      : "bg-gray-800 border border-gray-700"
                  }`}
                >
                  {msg.type === "user" ? (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  ) : (
                    <div className="prose prose-sm max-w-3xl">
                      {formatResponse(msg.content)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Streaming Response */}
          {streaming && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] flex-row items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-700 mr-3">
                  <Bot className="w-4 h-4 text-gray-300" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-gray-800 border border-gray-700">
                  {streamResponse ? (
                    <div className="prose prose-sm max-w-none">
                      {formatResponse(streamResponse)}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">
                        AI is thinking...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 bg-gray-800 px-4 py-4">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
                rows={1}
                className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none max-h-32 overflow-y-auto"
                style={{ minHeight: "48px" }}
              />
            </div>

            <button
              onClick={handleStreamChat}
              disabled={streaming || !message.trim()}
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg hover:shadow-xl disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center flex-shrink-0"
            >
              {streaming ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
