"use client";

import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  Send,
  Award,
  FileText,
} from "lucide-react";

const jobListings = [
  {
    id: "JOB-001",
    company: "TechCorp Solutions",
    position: "Software Engineer",
    location: "Bangalore, India",
    salary: "12-15 LPA",
    type: "Full-time",
    posted: "2 days ago",
    deadline: "Feb 10, 2025",
    views: 245,
    applications: 32,
    rating: 4.6,
  },
  {
    id: "JOB-002",
    company: "DataFlow Analytics",
    position: "Data Scientist",
    location: "Mumbai, India",
    salary: "14-18 LPA",
    type: "Full-time",
    posted: "5 days ago",
    deadline: "Feb 15, 2025",
    views: 189,
    applications: 28,
    rating: 4.8,
  },
  {
    id: "JOB-003",
    company: "CloudBase Inc",
    position: "DevOps Engineer",
    location: "Hyderabad, India",
    salary: "13-17 LPA",
    type: "Full-time",
    posted: "1 day ago",
    deadline: "Feb 08, 2025",
    views: 156,
    applications: 18,
    rating: 4.5,
  },
];

const placementStats = [
  { label: "Total Offers", value: "186", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Avg Package", value: "14.5 LPA", color: "bg-success/10", textColor: "text-success" },
  { label: "Highest Package", value: "28 LPA", color: "bg-warning/10", textColor: "text-warning" },
  { label: "Placement Rate", value: "94%", color: "bg-primary/10", textColor: "text-primary" },
];

const myApplications = [
  {
    id: "APP-001",
    company: "TechCorp",
    position: "Software Engineer",
    appliedDate: "Jan 25, 2025",
    status: "Interview Scheduled",
    interviewDate: "Feb 05, 2025",
  },
  {
    id: "APP-002",
    company: "DataFlow Analytics",
    position: "Data Scientist",
    appliedDate: "Jan 20, 2025",
    status: "Under Review",
    interviewDate: null,
  },
  {
    id: "APP-003",
    company: "WebDesigns Ltd",
    position: "Frontend Developer",
    appliedDate: "Jan 18, 2025",
    status: "Rejected",
    interviewDate: null,
  },
];

export function PlacementContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Placement & Career Development</h2>
        <p className="text-muted-foreground">
          Discover job opportunities and track your career progress
        </p>
      </div>

      {/* Placement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {placementStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 border border-border card-shadow`}>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* My Applications */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Applications</h3>
        <div className="space-y-3">
          {myApplications.map((app) => (
            <div
              key={app.id}
              className="flex items-start justify-between p-4 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{app.position}</h4>
                <p className="text-sm text-muted-foreground">{app.company}</p>
                <p className="text-xs text-muted-foreground mt-2">Applied: {app.appliedDate}</p>
                {app.interviewDate && (
                  <p className="text-xs text-success mt-1">
                    📅 Interview: {app.interviewDate}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    app.status === "Interview Scheduled"
                      ? "bg-success/20 text-success"
                      : app.status === "Under Review"
                      ? "bg-primary/20 text-primary"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Job Listings */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Job Openings</h3>
        <div className="space-y-4">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="p-5 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg">{job.position}</h4>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <span className="text-sm font-medium text-foreground">{job.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{job.posted}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {job.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Send className="w-4 h-4" />
                    {job.applications} applied
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-2">Deadline: {job.deadline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Resources */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Career Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <p className="font-semibold text-foreground mb-1">Resume Builder</p>
            <p className="text-sm text-muted-foreground">Create and optimize your resume</p>
          </button>
          <button className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <p className="font-semibold text-foreground mb-1">Interview Prep</p>
            <p className="text-sm text-muted-foreground">Practice common interview questions</p>
          </button>
          <button className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <p className="font-semibold text-foreground mb-1">Skill Assessment</p>
            <p className="text-sm text-muted-foreground">Evaluate your technical skills</p>
          </button>
          <button className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <p className="font-semibold text-foreground mb-1">Mentorship</p>
            <p className="text-sm text-muted-foreground">Connect with industry professionals</p>
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-4">Upcoming Campus Drives</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">TechCorp Campus Recruitment</p>
              <p className="text-sm text-muted-foreground">Feb 5-6, 2025</p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90">
              Register
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">DataFlow Analytics Drive</p>
              <p className="text-sm text-muted-foreground">Feb 12-13, 2025</p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
