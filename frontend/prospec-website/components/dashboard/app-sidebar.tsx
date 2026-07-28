"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Section } from "@/app/student-portal/page";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  Zap,
  Settings,
  Search,
  Moon,
  GraduationCap,
  DollarSign,
  Users,
  Briefcase,
  Bell,
  MessageSquare,
  Home,
  Award,
  Heart,
  HelpCircle,
  AlertTriangle,
  Building,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AppSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

interface NavItem {
  id: Section;
  label: string;
  icon: LucideIcon;
  badge?: number;
  badgeColor?: "red" | "yellow" | "green";
}

const favorites: NavItem[] = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "incidents", label: "Pending Assignments", icon: ClipboardList, badge: 3, badgeColor: "red" },
];

const academicsMenu: NavItem[] = [
  { id: "deployments", label: "Academics", icon: GraduationCap },
  { id: "performance", label: "Attendance", icon: Calendar },
  { id: "sla", label: "Timetable", icon: Clock },
  { id: "oncall", label: "Learning", icon: BookOpen },
  { id: "errors", label: "Assignments", icon: ClipboardList },
  { id: "services", label: "Results", icon: Award },
];

const mainMenu: NavItem[] = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "ai-assistant", label: "AI Assistant", icon: Zap },
  { id: "academics", label: "Academics", icon: GraduationCap },
  { id: "attendance", label: "Attendance", icon: Calendar },
  { id: "timetable", label: "Timetable", icon: Clock },
  { id: "learning", label: "Learning (LMS)", icon: BookOpen },
  { id: "assignments", label: "Assignments", icon: ClipboardList },
  { id: "exams", label: "Exams", icon: Award },
  { id: "results", label: "Results", icon: FileText },
  { id: "finance", label: "Fees & Finance", icon: DollarSign },
  { id: "library", label: "Library", icon: BookOpen },
  { id: "hostel", label: "Hostel", icon: Building },
  { id: "transport", label: "Transport", icon: Briefcase },
  { id: "placement", label: "Placement & Career", icon: Briefcase },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "requests", label: "Leave & Requests", icon: FileText },
  { id: "events", label: "Events & Clubs", icon: Calendar },
  { id: "communication", label: "Communication", icon: MessageSquare, badge: 2 },
  { id: "grievance", label: "Grievance System", icon: AlertTriangle },
  { id: "wellness", label: "Health & Wellness", icon: Heart },
  { id: "rewards", label: "Rewards & Achievements", icon: Award },
  { id: "profile", label: "Profile", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "support", label: "Help & Support", icon: HelpCircle },
];

import { Clock } from "lucide-react";

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="hidden md:flex w-72 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex-col shrink-0 overflow-y-auto">
      {/* Logo */}
      <div className="h-20 px-6 flex items-center gap-3 border-b border-sidebar-border sticky top-0 bg-sidebar/95 backdrop-blur">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-bold text-sidebar-foreground text-base tracking-tight block">
            PROSPEC
          </span>
          <span className="text-xs text-sidebar-accent-foreground opacity-75">
            Student Portal
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-4">
        <button
          type="button"
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-sidebar-accent/30 hover:bg-sidebar-accent/50 transition-colors"
        >
          <Search className="w-4 h-4 text-sidebar-accent-foreground" />
          <span className="text-sm text-sidebar-accent-foreground flex-1 text-left">Search...</span>
          <kbd className="text-[10px] text-sidebar-accent-foreground opacity-50 font-mono">
            /
          </kbd>
        </button>
      </div>

      {/* Quick Access */}
      <div className="px-4 mb-3">
        <p className="px-2 mb-2 text-[11px] font-semibold text-sidebar-accent-foreground uppercase tracking-wider opacity-70">
          Quick Access
        </p>
        <nav className="space-y-0.5">
          {favorites.map((item) => (
            <NavButton
              key={`fav-${item.id}`}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => onSectionChange(item.id)}
            />
          ))}
        </nav>
      </div>

      {/* Main Menu */}
      <div className="px-4 flex-1">
        <p className="px-2 mb-2 text-[11px] font-semibold text-sidebar-accent-foreground uppercase tracking-wider opacity-70">
          Menu
        </p>
        <nav className="space-y-0.5">
          {mainMenu.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => onSectionChange(item.id)}
            />
          ))}
        </nav>
      </div>

      {/* Settings & User */}
      <div className="px-4 py-4 border-t border-sidebar-border/50 space-y-2 sticky bottom-0 bg-sidebar/95 backdrop-blur">
        <NavButton
          item={{ id: "settings", label: "Settings", icon: Settings }}
          isActive={activeSection === "settings"}
          onClick={() => onSectionChange("settings")}
        />
        
        {/* User Profile */}
        <div className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-sidebar-accent/30 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
            <span className="text-primary text-xs font-bold">AR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Alex Roy</p>
            <p className="text-xs text-sidebar-accent-foreground truncate">Student</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

interface NavButtonProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ item, isActive, onClick }: NavButtonProps) {
  const Icon = item.icon;
  
  const badgeColorClass = {
    red: "bg-destructive/25 text-destructive",
    yellow: "bg-warning/25 text-warning",
    green: "bg-success/25 text-success",
  };
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar",
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
          : "text-sidebar-accent-foreground hover:bg-sidebar-accent/40 hover:text-sidebar-foreground"
      )}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="flex-1 text-left">{item.label}</span>
      {item.badge && (
        <span
          className={cn(
            "text-xs font-semibold px-2 py-1 rounded-md",
            isActive
              ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
              : item.badgeColor 
                ? badgeColorClass[item.badgeColor]
                : "bg-sidebar-accent/50 text-sidebar-accent-foreground"
          )}
        >
          {item.badge}
        </span>
      )}
    </button>
  );
}
