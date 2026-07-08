"use client";

import { Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const chatMessages = [
  {
    id: 1,
    sender: "prospec",
    message: "Hi! I'm PROSPEC, your AI academic assistant. How can I help you today?",
    timestamp: "2:45 PM",
  },
  {
    id: 2,
    sender: "user",
    message: "I need help with my assignments",
    timestamp: "2:46 PM",
  },
  {
    id: 3,
    sender: "prospec",
    message: "I can help! Would you like assistance with understanding concepts, getting hints, or tracking your assignments?",
    timestamp: "2:46 PM",
  },
];

export function RightPanel() {
  return (
    <aside className="hidden lg:flex w-[280px] h-screen bg-card border-l border-border flex-col shrink-0 overflow-hidden">
      {/* PROSPEC AI Chatbot */}
      <div className="p-5 flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">PROSPEC</h3>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              Online
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2 text-sm",
                msg.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] px-3 py-2 rounded-lg",
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-foreground rounded-bl-none"
                )}
              >
                <p className="text-sm leading-tight">{msg.message}</p>
                <p className={cn(
                  "text-xs mt-1",
                  msg.sender === "user" 
                    ? "text-primary-foreground/70" 
                    : "text-muted-foreground"
                )}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask PROSPEC..."
            className="flex-1 px-3 py-2 text-sm rounded-lg bg-card border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="button"
            className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
