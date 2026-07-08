"use client";

import {
  FileText,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Plus,
  Filter,
} from "lucide-react";
import { useState } from "react";

const requestTypes = [
  { id: "leave", name: "Leave Requests", count: 2, color: "bg-primary/10" },
  { id: "bonafide", name: "Bonafide Certificate", count: 1, color: "bg-success/10" },
  { id: "transcript", name: "Transcript", count: 0, color: "bg-warning/10" },
  { id: "duplicate", name: "Duplicate Certificate", count: 0, color: "bg-primary/10" },
  { id: "conduct", name: "Conduct Certificate", count: 1, color: "bg-primary/10" },
  { id: "other", name: "Others", count: 0, color: "bg-primary/10" },
];

const myRequests = [
  {
    id: "REQ-001",
    type: "Leave Request",
    status: "Approved",
    date: "Jan 20, 2025",
    reason: "Personal emergency",
    fromDate: "Jan 22, 2025",
    toDate: "Jan 24, 2025",
    days: 3,
    approvedBy: "Dr. Rajesh Kumar",
    approvalDate: "Jan 20, 2025",
  },
  {
    id: "REQ-002",
    type: "Bonafide Certificate",
    status: "Pending",
    date: "Jan 18, 2025",
    purpose: "Bank account opening",
    estimatedCompletion: "Jan 25, 2025",
  },
  {
    id: "REQ-003",
    type: "Leave Request",
    status: "Rejected",
    date: "Jan 15, 2025",
    reason: "Medical checkup",
    fromDate: "Jan 17, 2025",
    toDate: "Jan 17, 2025",
    days: 1,
    rejectionReason: "Insufficient notice period",
    rejectedBy: "Dean of Students",
  },
  {
    id: "REQ-004",
    type: "Conduct Certificate",
    status: "Completed",
    date: "Jan 10, 2025",
    completedDate: "Jan 12, 2025",
  },
];

const requestStats = [
  { label: "Total Requests", value: "4", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Approved", value: "2", color: "bg-success/10", textColor: "text-success" },
  { label: "Pending", value: "1", color: "bg-warning/10", textColor: "text-warning" },
  { label: "Rejected", value: "1", color: "bg-destructive/10", textColor: "text-destructive" },
];

export function RequestsContent() {
  const [showNewForm, setShowNewForm] = useState(false);

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Leave & Document Requests</h2>
        <p className="text-muted-foreground">
          Submit and track your leave and certificate requests
        </p>
      </div>

      {/* Request Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {requestStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 border border-border card-shadow`}>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* New Request Form */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">New Request</h3>
        <button
          onClick={() => setShowNewForm(!showNewForm)}
          className="w-full px-4 py-3 border-2 border-dashed border-primary rounded-lg text-primary font-medium hover:bg-primary/5 transition-colors text-center flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Submit New Request
        </button>

        {showNewForm && (
          <div className="mt-6 pt-6 border-t border-border space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Request Type</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Request Type</option>
                <option>Leave Request</option>
                <option>Bonafide Certificate</option>
                <option>Transcript</option>
                <option>Duplicate Certificate</option>
                <option>Conduct Certificate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Reason / Purpose</label>
              <textarea
                placeholder="Detailed reason for your request"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">From Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">To Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
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
                Submit Request
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Request Types */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {requestTypes.map((type) => (
          <button
            key={type.id}
            className={`${type.color} rounded-lg p-4 border border-border hover:border-primary transition-all text-center`}
          >
            <p className="font-semibold text-foreground">{type.count}</p>
            <p className="text-xs text-muted-foreground mt-1">{type.name}</p>
          </button>
        ))}
      </div>

      {/* My Requests */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Requests</h3>
        <div className="space-y-4">
          {myRequests.map((request) => (
            <div
              key={request.id}
              className="p-5 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{request.type}</h4>
                  <p className="text-sm text-muted-foreground">ID: {request.id}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    request.status === "Approved"
                      ? "bg-success/20 text-success"
                      : request.status === "Pending"
                      ? "bg-primary/20 text-primary"
                      : request.status === "Completed"
                      ? "bg-success/20 text-success"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {request.status}
                </span>
              </div>

              {/* Leave Request Details */}
              {request.type === "Leave Request" && (
                <div className="space-y-2 mb-3 text-sm">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-muted-foreground">Reason</p>
                      <p className="font-medium text-foreground">{request.reason}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium text-foreground">{request.days} day(s)</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {request.fromDate} to {request.toDate}
                    </span>
                  </div>
                </div>
              )}

              {/* Bonafide Request Details */}
              {request.type === "Bonafide Certificate" && (
                <div className="space-y-2 mb-3 text-sm">
                  <p className="text-foreground">Purpose: <span className="font-medium">{request.purpose}</span></p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Estimated: {request.estimatedCompletion}
                  </p>
                </div>
              )}

              {/* Status Timeline */}
              <div className="p-3 rounded-lg bg-card border border-border text-sm">
                <div className="flex items-start gap-3">
                  {request.status === "Approved" && (
                    <>
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Approved</p>
                        <p className="text-xs text-muted-foreground">
                          by {request.approvedBy} on {request.approvalDate}
                        </p>
                      </div>
                    </>
                  )}
                  {request.status === "Pending" && (
                    <>
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Under Review</p>
                        <p className="text-xs text-muted-foreground">Requested on {request.date}</p>
                      </div>
                    </>
                  )}
                  {request.status === "Rejected" && (
                    <>
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Rejected</p>
                        <p className="text-xs text-muted-foreground">
                          Reason: {request.rejectionReason}
                        </p>
                      </div>
                    </>
                  )}
                  {request.status === "Completed" && (
                    <>
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Completed</p>
                        <p className="text-xs text-muted-foreground">on {request.completedDate}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Details
                </button>
                {request.status === "Completed" && (
                  <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ & Help */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-foreground mb-1">How long does a bonafide certificate take?</p>
            <p className="text-sm text-muted-foreground">Usually 3-5 working days from the date of request.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Can I withdraw my leave request?</p>
            <p className="text-sm text-muted-foreground">Yes, as long as it hasn&apos;t been approved yet. Contact the Dean of Students.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">What documents are needed for transcript request?</p>
            <p className="text-sm text-muted-foreground">Your student ID and a clear statement of purpose. Original documents will be dispatched by mail.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
