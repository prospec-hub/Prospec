"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Clock,
  BookOpen,
  Brain,
  TrendingUp,
  MessageSquare,
  Zap,
  BarChart3,
  Target,
  Lightbulb,
  Workflow,
} from "lucide-react";

const quickSuggestions = [
  {
    icon: BookOpen,
    title: "Study Guide",
    description: "Get personalized study materials",
  },
  {
    icon: Brain,
    title: "Homework Help",
    description: "Solve problems step-by-step",
  },
  {
    icon: TrendingUp,
    title: "Performance Analysis",
    description: "Review your academic progress",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Explore career opportunities",
  },
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "Smart Content Generation",
    description: "AI-powered study notes and summaries",
    badge: "NEW",
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Customized learning paths based on your performance",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Predict exam performance and identify weak areas",
  },
  {
    icon: Workflow,
    title: "Assignment Assistance",
    description: "Get guidance without giving away answers",
  },
  {
    icon: Lightbulb,
    title: "Interview Prep",
    description: "AI-powered mock interviews and feedback",
  },
  {
    icon: MessageSquare,
    title: "24/7 Chat Support",
    description: "Instant answers to academic questions",
  },
];

const conversationHistory = [
  {
    role: "user",
    message: "What should I study for the Data Structures exam?",
    timestamp: "2 hours ago",
  },
  {
    role: "assistant",
    message:
      'Based on your course materials and past performance, focus on: 1) Tree Traversal Algorithms - you scored 75% on similar topics. 2) Graph Algorithms - identified as a weaker area. 3) Dynamic Programming - recent class emphasis. I\'ve prepared a study guide covering these areas with practice problems.',
    timestamp: "2 hours ago",
  },
  {
    role: "user",
    message: "Can you help me with linked list implementation?",
    timestamp: "1 hour ago",
  },
  {
    role: "assistant",
    message:
      'Of course! I can guide you through linked list implementation. Would you like to: 1) See a detailed explanation of the concept, 2) Work through a step-by-step implementation, 3) Practice with example problems? What would help you most?',
    timestamp: "1 hour ago",
  },
];

export function AIAssistantContent() {
  const [message, setMessage] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold text-foreground">AI Academic Assistant</h2>
          <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary font-semibold">
            BETA
          </span>
        </div>
        <p className="text-muted-foreground">
          Your intelligent companion for learning, assignments, and career guidance
        </p>
      </div>

      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-card border border-border card-shadow hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {feature.badge && (
                  <span className="px-2 py-0.5 text-xs bg-success/20 text-success font-semibold rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Chat Interface */}
      <div className="bg-card rounded-xl border border-border overflow-hidden card-shadow">
        <div className="bg-primary/5 px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Chat with AI Assistant
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Ask questions about your courses, assignments, or career
          </p>
        </div>

        {/* Conversation History */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-background/30">
          {conversationHistory.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                <p className="text-muted-foreground">Start a conversation to get help</p>
              </div>
            </div>
          ) : (
            conversationHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.role === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Suggestions */}
        {conversationHistory.length === 0 && (
          <div className="px-6 py-4 bg-background/30 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3 font-medium">Quick options:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {quickSuggestions.map((suggestion, idx) => {
                const Icon = suggestion.icon;
                return (
                  <button
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm">
                        {suggestion.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {suggestion.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                    handleSend();
                  }
                }}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                placeholder="Ask me anything about your studies..."
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            💡 Pro tip: Be specific about what you need help with for better results
          </p>
        </div>
      </div>

      {/* Stats & Usage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Conversations</p>
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <Zap className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Problems Solved</p>
          <p className="text-2xl font-bold text-foreground">47</p>
          <p className="text-xs text-success">+8 this week</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-warning/10">
              <TrendingUp className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Learning Score</p>
          <p className="text-2xl font-bold text-foreground">78%</p>
          <p className="text-xs text-warning">+5% improvement</p>
        </div>
      </div>

      {/* AI Capabilities Info */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-4">What AI Can Help With</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Academic Support
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Explain concepts and theories</li>
              <li>• Create study guides and notes</li>
              <li>• Solve practice problems</li>
              <li>• Clarify difficult topics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Career & Growth
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Interview preparation</li>
              <li>• Resume review</li>
              <li>• Career path guidance</li>
              <li>• Skill development advice</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Limitations Note */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="font-semibold text-foreground mb-2">Please Note</h4>
        <p className="text-sm text-muted-foreground">
          AI Assistant is an educational tool designed to guide learning and provide explanations.
          It cannot submit assignments on your behalf. Always verify information with your course
          materials and instructors. For critical academic decisions, consult with your advisor.
        </p>
      </div>
    </div>
  );
}
