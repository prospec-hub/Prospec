"use client";

import {
  MessageSquare,
  Bell,
  Megaphone,
  Search,
  Send,
  Heart,
  MessageCircle,
  Pin,
  Clock,
  Users,
} from "lucide-react";

const announcements = [
  {
    id: "ANN-001",
    title: "Campus Drive - TechCorp Solutions",
    sender: "Placement Office",
    date: "Jan 30, 2025",
    priority: "High",
    message:
      "TechCorp Solutions is conducting campus recruitment. Online registration open till Feb 2. Check placement portal for details.",
    pinned: true,
  },
  {
    id: "ANN-002",
    title: "Library Maintenance Notice",
    sender: "Library Staff",
    date: "Jan 29, 2025",
    priority: "Medium",
    message: "Library will be closed for maintenance on Feb 1-2. Normal operations resume from Feb 3.",
    pinned: false,
  },
  {
    id: "ANN-003",
    title: "Semester Examination Schedule Released",
    sender: "Academic Office",
    date: "Jan 28, 2025",
    priority: "High",
    message: "Exam schedule for Semester 6 is now available. Download from academics portal.",
    pinned: false,
  },
  {
    id: "ANN-004",
    title: "Hostel Accommodation - Spring Semester",
    sender: "Hostel Administration",
    date: "Jan 27, 2025",
    priority: "Medium",
    message: "Hostel accommodation for next semester opening. Apply online by Feb 15.",
    pinned: false,
  },
];

const discussions = [
  {
    id: "DISC-001",
    title: "Tips for Job Interview Preparation",
    category: "Career",
    author: "Prof. Sharma",
    replies: 24,
    views: 342,
    lastActivity: "2 hours ago",
  },
  {
    id: "DISC-002",
    title: "Project collaboration - Database Design",
    category: "Academics",
    author: "Class Admin",
    replies: 18,
    views: 156,
    lastActivity: "5 hours ago",
  },
  {
    id: "DISC-003",
    title: "Sports Day Registration Open",
    category: "Events",
    author: "Sports Committee",
    replies: 42,
    views: 589,
    lastActivity: "1 hour ago",
  },
];

const directMessages = [
  {
    id: "DM-001",
    sender: "Dr. Priya Singh",
    role: "Academic Advisor",
    lastMessage: "Let's discuss your semester plan on Tuesday.",
    timestamp: "1 hour ago",
    unread: true,
  },
  {
    id: "DM-002",
    sender: "Class Representative",
    role: "Student Leader",
    lastMessage: "Class meeting scheduled for Friday at 2 PM",
    timestamp: "3 hours ago",
    unread: false,
  },
  {
    id: "DM-003",
    sender: "Placement Coordinator",
    role: "Admin",
    lastMessage: "Your application for XYZ company has been forwarded.",
    timestamp: "Yesterday",
    unread: false,
  },
];

export function CommunicationContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Communication Center</h2>
        <p className="text-muted-foreground">
          Stay updated with announcements, discussions, and messages
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-4 border-b border-border">
        <button className="pb-3 px-4 font-medium text-foreground border-b-2 border-primary">
          Announcements
        </button>
        <button className="pb-3 px-4 font-medium text-muted-foreground hover:text-foreground transition-colors">
          Discussions
        </button>
        <button className="pb-3 px-4 font-medium text-muted-foreground hover:text-foreground transition-colors">
          Messages
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search announcements..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Announcements */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`p-5 rounded-lg border ${
              announcement.pinned
                ? "bg-primary/5 border-primary/30"
                : "bg-card border-border"
            } card-shadow hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                {announcement.pinned && (
                  <Pin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg mb-1">
                    {announcement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {announcement.sender} • {announcement.date}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                  announcement.priority === "High"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-warning/20 text-warning"
                }`}
              >
                {announcement.priority}
              </span>
            </div>
            <p className="text-foreground text-sm mb-3">{announcement.message}</p>
            <div className="flex items-center gap-4">
              <button className="text-xs font-medium text-primary hover:underline">
                Read More
              </button>
              <button className="text-xs font-medium text-muted-foreground hover:text-primary">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discussions Section */}
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Active Discussions</h3>
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-foreground">{discussion.title}</h4>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">
                {discussion.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Started by {discussion.author}</p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {discussion.replies} replies
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {discussion.views} views
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {discussion.lastActivity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Messages Section */}
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Direct Messages</h3>
        <div className="space-y-3">
          {directMessages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                msg.unread
                  ? "bg-primary/5 border-primary/30 hover:bg-primary/10"
                  : "bg-card border-border hover:bg-muted/30"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-foreground">{msg.sender}</h4>
                  <p className="text-xs text-muted-foreground">{msg.role}</p>
                </div>
                {msg.unread && (
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                )}
              </div>
              <p className="text-sm text-foreground mb-2">{msg.lastMessage}</p>
              <p className="text-xs text-muted-foreground">{msg.timestamp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Create Section */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20 mt-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">Start a Conversation</h3>
        <p className="text-muted-foreground mb-6">
          Have a question? Start a discussion or send a direct message to connect with peers and staff.
        </p>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Megaphone className="w-4 h-4" />
            New Discussion
          </button>
          <button className="px-6 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
