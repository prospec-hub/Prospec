"use client";

import type { Section } from "@/app/student-portal/page";
import { OverviewContent } from "./content/overview-content";
import { IncidentsContent } from "./content/incidents-content";
import { DeploymentsContent } from "./content/deployments-content";
import { PerformanceContent } from "./content/performance-content";
import { ErrorsContent } from "./content/errors-content";
import { SlaContent } from "./content/sla-content";
import { OncallContent } from "./content/oncall-content";
import { ServicesContent } from "./content/services-content";
import { PostmortemsContent } from "./content/postmortems-content";
import { SettingsContent } from "./content/settings-content";
import { ProfileContent } from "./content/profile-content";
import { AcademicsContent } from "./content/academics-content";
import { FinanceContent } from "./content/finance-content";
import { LearningContent } from "./content/learning-content";
import { AttendanceContent } from "./content/attendance-content";
import { TimetableContent } from "./content/timetable-content";
import { ExamsContent } from "./content/exams-content";
import { ResultsContent } from "./content/results-content";
import { PlaceholderContent } from "./content/placeholder-content";
import { LibraryContent } from "./content/library-content";
import { PlacementContent } from "./content/placement-content";
import { HostelContent } from "./content/hostel-content";
import { DocumentsContent } from "./content/documents-content";
import { CommunicationContent } from "./content/communication-content";
import { AIAssistantContent } from "./content/ai-assistant-content";
import { TransportContent } from "./content/transport-content";
import { EventsContent } from "./content/events-content";
import { GrievanceContent } from "./content/grievance-content";
import { RequestsContent } from "./content/requests-content";
import { WellnessContent } from "./content/wellness-content";
import { RewardsContent } from "./content/rewards-content";
import { Bell, Calendar, RefreshCw, Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainContentProps {
  activeSection: Section;
}

const sectionConfig: Record<Section, { title: string; subtitle: string; icon?: React.ReactNode }> = {
  overview: {
    title: "Welcome Back, Alex",
    subtitle: "Here's your academic overview for this semester",
  },
  academics: {
    title: "Academics",
    subtitle: "Courses, credits, and academic performance",
  },
  attendance: {
    title: "Attendance",
    subtitle: "Track your class and lab attendance",
  },
  timetable: {
    title: "Timetable",
    subtitle: "Your daily schedule and class timings",
  },
  learning: {
    title: "Learning Management System",
    subtitle: "Course materials, lectures, and study resources",
  },
  assignments: {
    title: "Assignments & Projects",
    subtitle: "Submission tracker and graded work",
  },
  exams: {
    title: "Examinations",
    subtitle: "Exam schedules, hall tickets, and results",
  },
  results: {
    title: "Results",
    subtitle: "Semester results and performance analytics",
  },
  finance: {
    title: "Fees & Finance",
    subtitle: "Manage your fees, payments, and financial aid",
  },
  library: {
    title: "Library Services",
    subtitle: "Search books, manage reservations, and access resources",
  },
  hostel: {
    title: "Hostel Management",
    subtitle: "Room details, mess menu, and facilities",
  },
  transport: {
    title: "Transport Services",
    subtitle: "Bus tracking, routes, and pickup alerts",
  },
  placement: {
    title: "Placement & Career Development",
    subtitle: "Job opportunities, internships, and career guidance",
  },
  documents: {
    title: "Documents & Certificates",
    subtitle: "Download official documents and certificates",
  },
  requests: {
    title: "Leave & Requests",
    subtitle: "Submit and track leave and other requests",
  },
  events: {
    title: "Events & Clubs",
    subtitle: "Campus events, clubs, and community activities",
  },
  communication: {
    title: "Communication",
    subtitle: "Announcements, messages, and discussion boards",
  },
  grievance: {
    title: "Grievance System",
    subtitle: "File complaints and track resolutions",
  },
  wellness: {
    title: "Health & Wellness",
    subtitle: "Medical services, counseling, and fitness activities",
  },
  rewards: {
    title: "Rewards & Achievements",
    subtitle: "Badges, certificates, and participation rewards",
  },
  profile: {
    title: "Profile",
    subtitle: "Manage your personal and academic information",
  },
  settings: {
    title: "Settings",
    subtitle: "Account settings and preferences",
  },
  support: {
    title: "Help & Support",
    subtitle: "FAQs, tutorials, and customer support",
  },
  incidents: {
    title: "Pending Assignments",
    subtitle: "Tasks due soon and submissions waiting for grades",
  },
  deployments: {
    title: "Academics",
    subtitle: "Courses, credits, and academic performance",
  },
  performance: {
    title: "Attendance",
    subtitle: "Track your class and lab attendance",
  },
  errors: {
    title: "Assignments & Projects",
    subtitle: "Submission tracker and graded work",
  },
  sla: {
    title: "Timetable",
    subtitle: "Your schedule and class timings",
  },
  oncall: {
    title: "Placements",
    subtitle: "Placement opportunities and internships",
  },
  services: {
    title: "Student Services",
    subtitle: "Access academic, administrative, and support services",
  },
  postmortems: {
    title: "Fees & Finance",
    subtitle: "Fee status, payments, and financial aid",
  },
  notifications: {
    title: "Notifications",
    subtitle: "Your updates and alerts",
  },
  "ai-assistant": {
    title: "AI Academic Assistant",
    subtitle: "Your intelligent companion for learning, assignments, and career guidance",
  },
};

export function MainContent({ activeSection }: MainContentProps) {
  const config = sectionConfig[activeSection];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewContent />;
      case "academics":
        return <AcademicsContent />;
      case "attendance":
        return <AttendanceContent />;
      case "timetable":
        return <TimetableContent />;
      case "learning":
        return <LearningContent />;
      case "assignments":
        return <PlaceholderContent title="Assignments & Projects" description="Submission tracker and graded work" />;
      case "exams":
        return <ExamsContent />;
      case "results":
        return <ResultsContent />;
      case "finance":
        return <FinanceContent />;
      case "library":
        return <LibraryContent />;
      case "hostel":
        return <HostelContent />;
      case "transport":
        return <PlaceholderContent title="Transport Services" description="Bus tracking, routes, and pickup alerts" />;
      case "placement":
        return <PlacementContent />;
      case "documents":
        return <DocumentsContent />;
      case "requests":
        return <PlaceholderContent title="Leave & Requests" description="Submit and track leave and other requests" />;
      case "events":
        return <PlaceholderContent title="Events & Clubs" description="Campus events, clubs, and community activities" />;
      case "communication":
        return <CommunicationContent />;
      case "grievance":
        return <GrievanceContent />;
      case "wellness":
        return <PlaceholderContent title="Health & Wellness" description="Medical services, counseling, and fitness activities" />;
      case "rewards":
        return <PlaceholderContent title="Rewards & Achievements" description="Badges, certificates, and participation rewards" />;
      case "events":
        return <EventsContent />;
      case "requests":
        return <RequestsContent />;
      case "transport":
        return <TransportContent />;
      case "wellness":
        return <WellnessContent />;
      case "rewards":
        return <RewardsContent />;
      case "ai-assistant":
        return <AIAssistantContent />;
      case "profile":
        return <ProfileContent />;
      case "settings":
        return <SettingsContent />;
      case "support":
        return <PlaceholderContent title="Help & Support" description="FAQs, tutorials, and customer support" />;
      case "incidents":
        return <IncidentsContent />;
      case "deployments":
        return <DeploymentsContent />;
      case "performance":
        return <PerformanceContent />;
      case "errors":
        return <ErrorsContent />;
      case "sla":
        return <SlaContent />;
      case "oncall":
        return <OncallContent />;
      case "services":
        return <ServicesContent />;
      case "postmortems":
        return <PostmortemsContent />;
      case "notifications":
        return <PlaceholderContent title="Notifications" description="Your updates and alerts" />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
      {/* Header */}
      <header className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm shrink-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {config.title}
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">{config.subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button
            type="button"
            className="relative p-2 rounded-lg hover:bg-muted transition-colors group"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </button>

          {/* Refresh */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-muted transition-colors group"
            aria-label="Refresh"
          >
            <RefreshCw className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </button>

          {/* User Avatar */}
          <button className="ml-4 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
            <span className="text-sm font-bold text-primary">AR</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div key={activeSection} className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
