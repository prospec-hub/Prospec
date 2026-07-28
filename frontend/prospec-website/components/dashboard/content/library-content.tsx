"use client";

import {
  Search,
  BookOpen,
  Clock,
  AlertCircle,
  Download,
  RefreshCw,
  Bookmark,
  Globe,
} from "lucide-react";

const recentBorrowings = [
  {
    id: "BOOK-001",
    title: "Data Structures & Algorithms",
    author: "Thomas H. Cormen",
    borrowDate: "Jan 15, 2025",
    dueDate: "Feb 15, 2025",
    daysRemaining: 18,
    status: "Active",
  },
  {
    id: "BOOK-002",
    title: "Advanced Mathematics",
    author: "Richard Courant",
    borrowDate: "Jan 20, 2025",
    dueDate: "Feb 20, 2025",
    daysRemaining: 23,
    status: "Active",
  },
  {
    id: "BOOK-003",
    title: "Database Systems",
    author: "Abraham Silberschatz",
    borrowDate: "Dec 10, 2024",
    dueDate: "Jan 10, 2025",
    daysRemaining: -13,
    status: "Overdue",
  },
];

const availableResources = [
  {
    id: "RES-001",
    title: "MATLAB Programming",
    type: "E-Book",
    downloads: 342,
    rating: 4.8,
  },
  {
    id: "RES-002",
    title: "Python for Data Science",
    type: "Video Course",
    downloads: 1200,
    rating: 4.9,
  },
  {
    id: "RES-003",
    title: "Web Development with React",
    type: "E-Book",
    downloads: 856,
    rating: 4.7,
  },
  {
    id: "RES-004",
    title: "Machine Learning Fundamentals",
    type: "Video Course",
    downloads: 2150,
    rating: 4.8,
  },
];

const reserves = [
  {
    id: "RESERVE-001",
    book: "Operating Systems Concepts",
    position: 3,
    estimatedWait: "5-7 days",
  },
  {
    id: "RESERVE-002",
    book: "Discrete Mathematics",
    position: 1,
    estimatedWait: "2-3 days",
  },
];

export function LibraryContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Library Services</h2>
        <p className="text-muted-foreground">
          Access books, e-resources, and manage your borrowings
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Books Borrowed</p>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-primary">Active</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <Clock className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Borrowing Limit</p>
          <p className="text-2xl font-bold text-foreground">5 / 8</p>
          <p className="text-xs text-success">3 slots available</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-warning/10">
              <AlertCircle className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Overdue Items</p>
          <p className="text-2xl font-bold text-warning">1</p>
          <p className="text-xs text-warning">13 days overdue</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Bookmark className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Reserved Books</p>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-muted-foreground">In queue</p>
        </div>
      </div>

      {/* Search & Catalog */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Search Catalog</h3>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search books, authors, ISBN..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Active Borrowings */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Borrowings</h3>
        <div className="space-y-3">
          {recentBorrowings.map((book) => (
            <div
              key={book.id}
              className="flex items-start justify-between p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{book.title}</h4>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                  <span>Borrow Date: {book.borrowDate}</span>
                  <span>Due: {book.dueDate}</span>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    book.status === "Active"
                      ? "bg-success/20 text-success"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {book.status}
                </span>
                <p className="text-sm font-medium text-foreground mt-2">
                  {book.daysRemaining > 0
                    ? `${book.daysRemaining} days left`
                    : `${Math.abs(book.daysRemaining)} days overdue`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reserved Books */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Reserved Books</h3>
        <div className="space-y-3">
          {reserves.map((reserve) => (
            <div
              key={reserve.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border"
            >
              <div>
                <h4 className="font-semibold text-foreground">{reserve.book}</h4>
                <p className="text-sm text-muted-foreground">
                  Position {reserve.position} in queue
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  Estimated: {reserve.estimatedWait}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Resources */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Popular Digital Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableResources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{resource.title}</h4>
                <p className="text-xs text-muted-foreground">{resource.type}</p>
                <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                  <span>⭐ {resource.rating}</span>
                  <span>📥 {resource.downloads}</span>
                </div>
              </div>
              <button className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Download className="w-5 h-5 text-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Library Info */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-2">Library Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Operating Hours</p>
            <p className="font-semibold text-foreground">8:00 AM - 8:00 PM</p>
            <p className="text-xs text-muted-foreground">Monday - Saturday</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Contact</p>
            <p className="font-semibold text-foreground">library@institution.edu</p>
            <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-semibold text-foreground">Central Campus</p>
            <p className="text-xs text-muted-foreground">Building A, Ground Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
