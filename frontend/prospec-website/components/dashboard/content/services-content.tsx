"use client";

import {
  FileText,
  Users,
  Building,
  Heart,
  Briefcase,
  LogOut,
  Award,
  ShieldAlert,
  CheckCircle,
  Clock,
} from "lucide-react";

const services = [
  {
    category: "Academic Services",
    items: [
      {
        name: "Transcript Request",
        description: "Request official academic transcripts",
        status: "available",
        time: "2-3 working days",
        icon: FileText,
      },
      {
        name: "Certificate of Enrollment",
        description: "Proof of current enrollment",
        status: "available",
        time: "1 working day",
        icon: Award,
      },
      {
        name: "Academic Advising",
        description: "Meet with academic advisor",
        status: "available",
        time: "By appointment",
        icon: Users,
      },
      {
        name: "Course Override Request",
        description: "Request permission to exceed credit limits",
        status: "limited",
        time: "3-5 working days",
        icon: ShieldAlert,
      },
    ],
  },
  {
    category: "Administrative Services",
    items: [
      {
        name: "ID Card Replacement",
        description: "Get a replacement student ID card",
        status: "available",
        time: "Same day",
        icon: Briefcase,
      },
      {
        name: "Document Verification",
        description: "Get official documents verified",
        status: "available",
        time: "2-3 working days",
        icon: ShieldAlert,
      },
      {
        name: "Transfer Certificate",
        description: "Apply for transfer certificate",
        status: "available",
        time: "5-7 working days",
        icon: FileText,
      },
      {
        name: "Leave of Absence",
        description: "Request leave from institution",
        status: "available",
        time: "Variable",
        icon: LogOut,
      },
    ],
  },
  {
    category: "Student Support Services",
    items: [
      {
        name: "Counseling Services",
        description: "Mental health and personal counseling",
        status: "available",
        time: "By appointment",
        icon: Heart,
      },
      {
        name: "Disability Services",
        description: "Accommodations for students with disabilities",
        status: "available",
        time: "By request",
        icon: Users,
      },
      {
        name: "Career Services",
        description: "Career guidance and job placement",
        status: "available",
        time: "By appointment",
        icon: Briefcase,
      },
      {
        name: "Hostel Services",
        description: "Accommodation and hostel management",
        status: "available",
        time: "Ongoing",
        icon: Building,
      },
    ],
  },
];

const recentRequests = [
  {
    id: "REQ-2025-001",
    service: "Transcript Request",
    status: "Completed",
    date: "Jan 15, 2025",
    action: "Download",
  },
  {
    id: "REQ-2025-002",
    service: "Certificate of Enrollment",
    status: "Processing",
    date: "Jan 18, 2025",
    action: "Track",
  },
  {
    id: "REQ-2025-003",
    service: "ID Card Replacement",
    status: "Completed",
    date: "Jan 20, 2025",
    action: "Download",
  },
  {
    id: "REQ-2025-004",
    service: "Document Verification",
    status: "In Review",
    date: "Jan 22, 2025",
    action: "Track",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "available":
      return "bg-success/10 text-success";
    case "limited":
      return "bg-warning/10 text-warning";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function getRequestStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-success/20 text-success";
    case "Processing":
      return "bg-primary/20 text-primary";
    case "In Review":
      return "bg-warning/20 text-warning";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function ServicesContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      {/* Page Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Student Services</h2>
        <p className="text-muted-foreground">
          Access academic, administrative, and support services
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Completed Requests</p>
          <p className="text-2xl font-bold text-foreground">8</p>
          <p className="text-xs text-success">This Semester</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Pending Requests</p>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-primary">Awaiting Processing</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <Users className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Available Services</p>
          <p className="text-2xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground">Ready to Use</p>
        </div>
      </div>

      {/* Services by Category */}
      <div className="space-y-8">
        {services.map((serviceGroup, groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {serviceGroup.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceGroup.items.map((service, itemIdx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={itemIdx}
                    className="bg-card rounded-xl p-5 border border-border card-shadow hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(
                          service.status
                        )}`}
                      >
                        {service.status === "available"
                          ? "Available"
                          : "Limited Availability"}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {service.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.time}
                      </span>
                      <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors">
                        Request
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Requests */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Service Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Request ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Service
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Date
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
              {recentRequests.map((request) => (
                <tr key={request.id} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4 text-sm font-medium text-foreground">
                    {request.id}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground">
                    {request.service}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {request.date}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${getRequestStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-sm font-medium text-primary hover:underline">
                      {request.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support Contact */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-2">Need Help?</h3>
        <p className="text-muted-foreground mb-6">
          Can&apos;t find the service you need? Contact our student services office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
