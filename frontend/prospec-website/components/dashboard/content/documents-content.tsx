"use client";

import {
  FileText,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Share2,
  Lock,
} from "lucide-react";

const documents = [
  {
    id: "DOC-001",
    name: "Admit Card - Semester 6",
    type: "Admit Card",
    issued: "Dec 20, 2024",
    expires: "Feb 28, 2025",
    status: "Active",
    size: "2.4 MB",
  },
  {
    id: "DOC-002",
    name: "Academic Transcript",
    type: "Transcript",
    issued: "Jan 15, 2025",
    expires: null,
    status: "Active",
    size: "1.8 MB",
  },
  {
    id: "DOC-003",
    name: "Degree Certificate",
    type: "Certificate",
    issued: "June 10, 2024",
    expires: null,
    status: "Available",
    size: "3.2 MB",
  },
  {
    id: "DOC-004",
    name: "ID Card Digital Copy",
    type: "Identification",
    issued: "July 2023",
    expires: "July 2026",
    status: "Active",
    size: "1.1 MB",
  },
  {
    id: "DOC-005",
    name: "Bonafide Certificate",
    type: "Certificate",
    issued: "Jan 25, 2025",
    expires: "April 25, 2025",
    status: "Active",
    size: "0.8 MB",
  },
];

const requestHistory = [
  {
    id: "REQ-001",
    document: "Official Transcript",
    requestDate: "Jan 20, 2025",
    status: "Ready for Download",
    downloadDate: "Jan 22, 2025",
  },
  {
    id: "REQ-002",
    document: "Experience Certificate",
    requestDate: "Jan 18, 2025",
    status: "Processing",
    downloadDate: null,
  },
  {
    id: "REQ-003",
    document: "Character Certificate",
    requestDate: "Jan 15, 2025",
    status: "Ready for Download",
    downloadDate: "Jan 17, 2025",
  },
];

export function DocumentsContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Documents & Certificates</h2>
        <p className="text-muted-foreground">
          Download official documents and request certificates
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center gap-3 p-4 rounded-lg border border-primary bg-primary/5 hover:bg-primary/10 transition-colors">
          <Plus className="w-5 h-5 text-primary" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Request Document</p>
            <p className="text-xs text-muted-foreground">Get official documents</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors">
          <Share2 className="w-5 h-5 text-muted-foreground" />
          <div className="text-left">
            <p className="font-semibold text-foreground">Share Document</p>
            <p className="text-xs text-muted-foreground">Generate shareable links</p>
          </div>
        </button>
      </div>

      {/* Available Documents */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Available Documents</h3>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-start justify-between p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">{doc.name}</h4>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground ml-7">
                  <span>{doc.type}</span>
                  <span>Size: {doc.size}</span>
                  <span>Issued: {doc.issued}</span>
                  {doc.expires && <span>Expires: {doc.expires}</span>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    doc.status === "Active"
                      ? "bg-success/20 text-success"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {doc.status}
                </span>
                <button className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Download className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request History */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Document Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Document
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Request Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {requestHistory.map((req) => (
                <tr key={req.id} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4 text-sm font-medium text-foreground">
                    {req.document}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {req.requestDate}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        req.status === "Ready for Download"
                          ? "bg-success/20 text-success"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {req.downloadDate ? (
                      <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                        <Download className="w-4 h-4" /> Download
                      </button>
                    ) : (
                      <span className="text-sm text-muted-foreground">Processing</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Guidelines */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-4">Document Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Processing Time
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Certificates: 2-3 working days</li>
              <li>• Transcripts: 1-2 working days</li>
              <li>• Digital documents: Immediate</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Important Notes
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All requests require verification</li>
              <li>• Physical copies available on request</li>
              <li>• Signed by authorized officials</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
        <p className="text-muted-foreground mb-4">
          Contact the Registrar's Office for document-related queries
        </p>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
          <button className="px-6 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
