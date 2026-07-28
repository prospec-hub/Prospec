"use client";

import { useState } from "react";
import { Clock, CheckCircle, AlertCircle, Calendar, FileText, Search, Filter, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const assignments = [
  {
    id: "ASN-001",
    title: "Data Structures - Binary Trees Implementation",
    course: "CS 201 - Data Structures",
    dueDate: "Jan 20, 2025",
    daysLeft: 3,
    status: "pending",
    priority: "high",
    progress: 45,
    description: "Implement AVL tree with insertion and deletion operations",
    resources: ["Lecture Slides", "Code Template", "Test Cases"],
  },
  {
    id: "ASN-002",
    title: "Physics Lab Report - Simple Pendulum",
    course: "PHYS 101 - Basic Physics",
    dueDate: "Jan 18, 2025",
    daysLeft: 1,
    status: "pending",
    priority: "critical",
    progress: 20,
    description: "Write comprehensive lab report with analysis and conclusions",
    resources: ["Lab Manual", "Sample Format", "Data Sheet"],
  },
  {
    id: "ASN-003",
    title: "Literature Essay - Shakespearean Analysis",
    course: "ENG 150 - Literature",
    dueDate: "Jan 25, 2025",
    daysLeft: 8,
    status: "in-progress",
    priority: "medium",
    progress: 60,
    description: "Analyze themes in Hamlet and write 2000-word essay",
    resources: ["Text Excerpts", "Analysis Guide", "Citation Format"],
  },
  {
    id: "ASN-004",
    title: "Calculus Problem Set 5",
    course: "MATH 102 - Calculus I",
    dueDate: "Jan 22, 2025",
    daysLeft: 5,
    status: "pending",
    priority: "medium",
    progress: 30,
    description: "Complete 15 problems covering integration techniques",
    resources: ["Problem Statement", "Hints", "Solution Checker"],
  },
];

const priorityConfig = {
  critical: { label: "Critical", color: "bg-destructive text-destructive-foreground" },
  high: { label: "High", color: "bg-warning/20 text-warning" },
  medium: { label: "Medium", color: "bg-primary/20 text-primary" },
  low: { label: "Low", color: "bg-muted text-muted-foreground" },
};

const statusConfig = {
  pending: { label: "Pending", icon: AlertCircle, color: "text-warning" },
  "in-progress": { label: "In Progress", icon: Clock, color: "text-primary" },
  submitted: { label: "Submitted", icon: CheckCircle, color: "text-success" },
};

export function IncidentsContent() {
  const [selectedAssignment, setSelectedAssignment] = useState(assignments[0]);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredAssignments = filterStatus === "all" 
    ? assignments 
    : assignments.filter(a => a.status === filterStatus);

  const pendingCount = assignments.filter(a => a.status === "pending").length;
  const inProgressCount = assignments.filter(a => a.status === "in-progress").length;
  const submittedCount = assignments.filter(a => a.status === "submitted").length;
  const criticalCount = assignments.filter(a => a.priority === "critical").length;

  return (
    <div className="p-4 md:p-8 pb-12 space-y-8 bg-background/50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-foreground">Pending Assignments</h2>
          <p className="text-muted-foreground">Track and manage your course assignments</p>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Assignment
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-2">Pending</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-warning">{pendingCount}</p>
            <span className="text-xs text-warning">assignments</span>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-2">In Progress</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-primary">{inProgressCount}</p>
            <span className="text-xs text-primary">assignments</span>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-2">Submitted</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-success">{submittedCount}</p>
            <span className="text-xs text-success">assignments</span>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-2">Critical</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-destructive">{criticalCount}</p>
            <span className="text-xs text-destructive">due soon</span>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button className="px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assignments List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredAssignments.map((assignment) => {
            const StatusIcon = statusConfig[assignment.status as keyof typeof statusConfig].icon;
            return (
              <div
                key={assignment.id}
                onClick={() => setSelectedAssignment(assignment)}
                className={cn(
                  "p-5 rounded-xl border cursor-pointer transition-all",
                  selectedAssignment.id === assignment.id
                    ? "bg-primary/5 border-primary/30 shadow-md"
                    : "bg-card border-border hover:border-primary/20 hover:shadow-sm"
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground flex-1">{assignment.title}</h4>
                      <span className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap",
                        priorityConfig[assignment.priority as keyof typeof priorityConfig].color
                      )}>
                        {priorityConfig[assignment.priority as keyof typeof priorityConfig].label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">Progress</span>
                    <span className="text-xs text-muted-foreground">{assignment.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${assignment.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Due: {assignment.dueDate}
                    <span className={cn(
                      "ml-2 px-2 py-0.5 rounded-full font-medium",
                      assignment.daysLeft <= 1
                        ? "bg-destructive/20 text-destructive"
                        : assignment.daysLeft <= 3
                          ? "bg-warning/20 text-warning"
                          : "bg-success/20 text-success"
                    )}>
                      {assignment.daysLeft} day{assignment.daysLeft !== 1 ? "s" : ""} left
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <StatusIcon className={cn(
                      "w-4 h-4",
                      statusConfig[assignment.status as keyof typeof statusConfig].color
                    )} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assignment Details */}
        <div className="bg-card rounded-xl border border-border p-6 h-fit sticky top-20">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground flex-1">{selectedAssignment.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{selectedAssignment.course}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Due Date</p>
              <p className="font-semibold text-foreground text-sm">{selectedAssignment.dueDate}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Days Left</p>
              <p className={cn(
                "font-semibold text-sm",
                selectedAssignment.daysLeft <= 1 ? "text-destructive" : "text-foreground"
              )}>
                {selectedAssignment.daysLeft} day{selectedAssignment.daysLeft !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs text-muted-foreground mb-2">Progress</p>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${selectedAssignment.progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{selectedAssignment.progress}% Complete</p>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-2">Description</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{selectedAssignment.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-2">Resources</h4>
            <div className="space-y-2">
              {selectedAssignment.resources.map((resource, idx) => (
                <button
                  key={idx}
                  className="w-full p-2 text-left text-sm rounded-lg bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2 text-foreground"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  {resource}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Start Working
          </button>
        </div>
      </div>
    </div>
  );
}
