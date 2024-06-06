"use client";

import { Message, useChat } from "ai/react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatComponent = () => {
  const [lastMessage, setLastMessage] = useState("");
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  function getLastNonUserMessage(messages: Message[]) {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role !== "user") {
        return messages[i].content;
      }
    }
    return "";
  }

  useEffect(() => {
    setLastMessage(getLastNonUserMessage(messages));
  }, [messages]);

  return (
    <div className="mx-auto w-full max-w-md py-8 flex flex-col stretch">
      <form
        className=" mb-8 flex gap-2 items-end w-full justify-center"
        onSubmit={handleSubmit}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="mquestion">Ask any question about me :</Label>
          <Input
            type="text"
            value={input}
            id="question"
            placeholder="question"
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit">Ask</Button>
      </form>
      <div className=" relative border-2 rounded-xl p-4 text-lg drop-shadow-2xl ">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={nightOwl}
                  wrapLines={true}
                  wrapLongLines={true}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {lastMessage}
        </Markdown>
      </div>
    </div>
  );
};

export default ChatComponent;
