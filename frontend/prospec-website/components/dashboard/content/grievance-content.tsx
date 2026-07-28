"use client";

import {
  AlertTriangle,
  Clock,
  CheckCircle,
  MessageSquare,
  Upload,
  Trash2,
  Eye,
  TrendingUp,
  User,
  Calendar,
  Tag,
} from "lucide-react";
import { useState } from "react";

const grievanceCategories = [
  { id: "academic", name: "Academic", count: 2, color: "bg-primary/10" },
  { id: "facilities", name: "Facilities", count: 1, color: "bg-success/10" },
  { id: "hostel", name: "Hostel", count: 0, color: "bg-warning/10" },
  { id: "transport", name: "Transport", count: 0, color: "bg-primary/10" },
  { id: "conduct", name: "Conduct", count: 0, color: "bg-primary/10" },
  { id: "other", name: "Other", count: 1, color: "bg-primary/10" },
];

const myGrievances = [
  {
    id: "GRV-001",
    title: "Marks Discrepancy in Physics Exam",
    category: "Academic",
    date: "Jan 22, 2025",
    status: "Under Review",
    priority: "High",
    description: "My marks were calculated incorrectly. I should have scored 85 marks but got 78.",
    lastUpdate: "Jan 24, 2025 - Coordinator assigned",
    attachments: 1,
    timeline: [
      { date: "Jan 22, 2025", status: "Submitted", by: "You" },
      { date: "Jan 23, 2025", status: "Acknowledged", by: "Admin" },
      { date: "Jan 24, 2025", status: "Assigned to Coordinator", by: "Dean" },
    ],
  },
  {
    id: "GRV-002",
    title: "Library Study Table Malfunction",
    category: "Facilities",
    date: "Jan 20, 2025",
    status: "Resolved",
    priority: "Medium",
    description: "The study table in the library has a broken leg and is unsafe to use.",
    lastUpdate: "Jan 22, 2025 - Repaired",
    resolution: "Table has been repaired and is now in use.",
    timeline: [
      { date: "Jan 20, 2025", status: "Submitted", by: "You" },
      { date: "Jan 21, 2025", status: "Acknowledged", by: "Facilities Team" },
      { date: "Jan 22, 2025", status: "Resolved", by: "Facilities Team" },
    ],
  },
  {
    id: "GRV-003",
    title: "Course Material Not Available",
    category: "Academic",
    date: "Jan 18, 2025",
    status: "Closed",
    priority: "Medium",
    description: "Course materials for Data Structures were not provided on time.",
    lastUpdate: "Jan 20, 2025 - Resolved",
    resolution: "All materials have been uploaded to the LMS.",
    timeline: [
      { date: "Jan 18, 2025", status: "Submitted", by: "You" },
      { date: "Jan 19, 2025", status: "Acknowledged", by: "Faculty" },
      { date: "Jan 20, 2025", status: "Resolved", by: "Faculty" },
    ],
  },
];

const escalationLevels = [
  { level: 1, name: "Department Coordinator", status: "Current", icon: "👤" },
  { level: 2, name: "Dean of Students", status: "Next", icon: "📋" },
  { level: 3, name: "Principal", status: "Final", icon: "🎓" },
];

const grievanceStats = [
  { label: "Total Grievances", value: "3", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Resolved", value: "1", color: "bg-success/10", textColor: "text-success" },
  { label: "In Progress", value: "1", color: "bg-warning/10", textColor: "text-warning" },
  { label: "Avg Resolution", value: "4 days", color: "bg-primary/10", textColor: "text-primary" },
];

export function GrievanceContent() {
  const [showNewForm, setShowNewForm] = useState(false);

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Grievance Redressal System</h2>
        <p className="text-muted-foreground">
          File complaints and track their resolution status
        </p>
      </div>

      {/* Grievance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {grievanceStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 border border-border card-shadow`}>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* File New Grievance */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">File a New Grievance</h3>
        <button
          onClick={() => setShowNewForm(!showNewForm)}
          className="w-full px-4 py-3 border-2 border-dashed border-primary rounded-lg text-primary font-medium hover:bg-primary/5 transition-colors text-center"
        >
          + New Grievance
        </button>

        {showNewForm && (
          <div className="mt-6 pt-6 border-t border-border space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Category</option>
                <option>Academic</option>
                <option>Facilities</option>
                <option>Hostel</option>
                <option>Transport</option>
                <option>Conduct</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                placeholder="Brief title of the grievance"
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                placeholder="Detailed description of the issue"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Attachments</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop files or click to upload
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supported: Images, PDF (Max 5MB)
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowNewForm(false)}
                className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Submit Grievance
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Grievance Categories */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {grievanceCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${cat.color} rounded-lg p-4 border border-border hover:border-primary transition-all text-center`}
          >
            <p className="font-semibold text-foreground">{cat.count}</p>
            <p className="text-xs text-muted-foreground mt-1">{cat.name}</p>
          </button>
        ))}
      </div>

      {/* My Grievances */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Grievances</h3>
        <div className="space-y-4">
          {myGrievances.map((grievance) => (
            <div
              key={grievance.id}
              className="p-5 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg">{grievance.title}</h4>
                  <p className="text-sm text-muted-foreground">ID: {grievance.id}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    grievance.status === "Under Review"
                      ? "bg-primary/20 text-primary"
                      : grievance.status === "Resolved"
                      ? "bg-success/20 text-success"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {grievance.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  {grievance.category}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {grievance.date}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      grievance.priority === "High"
                        ? "bg-destructive/20 text-destructive"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {grievance.priority} Priority
                  </span>
                </div>
                {grievance.attachments > 0 && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Upload className="w-4 h-4" />
                    {grievance.attachments} file
                  </div>
                )}
              </div>

              <p className="text-sm text-foreground mb-3">{grievance.description}</p>

              {/* Timeline */}
              <div className="bg-card rounded-lg p-4 mb-3">
                <p className="text-xs font-semibold text-muted-foreground mb-3">Timeline</p>
                <div className="space-y-2">
                  {grievance.timeline.map((entry, idx) => (
                    <div key={idx} className="flex gap-3 text-xs">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                        {idx < grievance.timeline.length - 1 && (
                          <div className="w-0.5 h-6 bg-border my-1" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{entry.status}</p>
                        <p className="text-muted-foreground">
                          {entry.date} by {entry.by}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {grievance.resolution && (
                <div className="p-3 rounded-lg bg-success/5 border border-success/20 mb-3">
                  <p className="text-xs font-semibold text-success mb-1">Resolution</p>
                  <p className="text-sm text-foreground">{grievance.resolution}</p>
                </div>
              )}

              <p className="text-xs text-muted-foreground mb-3">
                Last update: {grievance.lastUpdate}
              </p>

              <div className="flex gap-2 pt-3 border-t border-border">
                <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <button className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Escalation Process */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Escalation Process</h3>
        <div className="space-y-3">
          {escalationLevels.map((level) => (
            <div
              key={level.level}
              className={`p-4 rounded-lg border ${
                level.status === "Current"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-muted/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{level.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Level {level.level}: {level.name}</p>
                  <p className="text-xs text-muted-foreground">{level.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Grievances are escalated if not resolved within 7 days at each level. You can request escalation anytime during the process.
        </p>
      </div>

      {/* Support */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Grievance Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Grievance Cell</p>
            <p className="text-xs text-muted-foreground mb-2">Admin Block, 1st Floor</p>
            <p className="text-sm font-medium text-foreground">+91-080-1234-5678</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Email Support</p>
            <p className="text-xs text-muted-foreground mb-2">Monday to Friday, 09:00 AM - 05:00 PM</p>
            <p className="text-sm font-medium text-primary">grievance@college.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
