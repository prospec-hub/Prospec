import type { LucideIcon } from "lucide-react"
import {
  GraduationCap,
  Users,
  BookOpen,
  Settings,
  BarChart3,
  Wallet,
  Briefcase,
  ShieldCheck,
  FileCheck,
  MessageSquare,
  Building2,
  Bus,
  BedDouble,
  Library,
  FlaskConical,
  Award,
  UserCog,
  Crown,
  Brain,
  ClipboardList,
  Calculator,
  Headphones,
} from "lucide-react"

export type AgentTag = "Active" | "Beta" | "Popular" | "Enterprise"

export interface AgentCategory {
  id: string
  name: string
  count: number
  accent: string // tailwind text color
  bg: string // tailwind bg tint
  ring: string // tailwind ring/border tint
  icon: LucideIcon
  blurb: string
}

export const agentCategories: AgentCategory[] = [
  {
    id: "admissions",
    name: "Admissions Agents",
    count: 5,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "border-blue-500/30",
    icon: GraduationCap,
    blurb: "Run the funnel from first enquiry to confirmed enrollment.",
  },
  {
    id: "academic",
    name: "Academic Agents",
    count: 6,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    ring: "border-indigo-500/30",
    icon: BookOpen,
    blurb: "Support faculty with planning, assessment and analytics.",
  },
  {
    id: "student",
    name: "Student Experience",
    count: 5,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    ring: "border-violet-500/30",
    icon: Users,
    blurb: "A 24×7 companion for every student, in every language.",
  },
  {
    id: "finance-hr",
    name: "Finance & HR",
    count: 4,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "border-emerald-500/30",
    icon: Wallet,
    blurb: "Automate fees, payroll, leave and employee support.",
  },
  {
    id: "administration",
    name: "Administration",
    count: 5,
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    ring: "border-purple-500/30",
    icon: Settings,
    blurb: "Approvals, compliance and documentation on autopilot.",
  },
  {
    id: "executive",
    name: "Executive Intelligence",
    count: 3,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "border-orange-500/30",
    icon: Crown,
    blurb: "Decision-grade intelligence for leadership.",
  },
]

export interface FeaturedAgent {
  id: string
  name: string
  role: string
  worksFor: string
  category: string
  icon: LucideIcon
  accent: string
  bg: string
  responsibilities: string[]
  systems: string[]
  kpis: { label: string; value: string }[]
  automation: number // 0-100
}

export const featuredAgents: FeaturedAgent[] = [
  {
    id: "student-success",
    name: "Student Success AI",
    role: "Student Support Executive",
    worksFor: "Students",
    category: "Student Experience",
    icon: Users,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    responsibilities: [
      "Attendance & timetable",
      "Fees & scholarships",
      "Exams & assignments",
      "Hostel & transport",
      "Career guidance",
    ],
    systems: ["ERP", "LMS", "Finance", "Hostel"],
    kpis: [
      { label: "Response Time", value: "2 sec" },
      { label: "Availability", value: "24×7" },
      { label: "Languages", value: "50+" },
    ],
    automation: 92,
  },
  {
    id: "admission-counselor",
    name: "Admission Counselor AI",
    role: "Admissions Officer",
    worksFor: "Admissions Department",
    category: "Admissions",
    icon: GraduationCap,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    responsibilities: [
      "Lead qualification",
      "Course recommendation",
      "Eligibility checking",
      "Document verification",
      "Counseling & follow-up",
    ],
    systems: ["CRM", "ERP", "Payment Gateway"],
    kpis: [
      { label: "Faster Funnel", value: "10×" },
      { label: "Availability", value: "24×7" },
      { label: "Conversion Lift", value: "+34%" },
    ],
    automation: 88,
  },
  {
    id: "faculty-assistant",
    name: "Faculty Assistant AI",
    role: "Academic Assistant",
    worksFor: "Faculty & Departments",
    category: "Academic",
    icon: BookOpen,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    responsibilities: [
      "Lesson plans",
      "Question papers",
      "Assessment & rubrics",
      "CO-PO mapping",
      "Academic reports",
    ],
    systems: ["LMS", "Exam System", "Knowledge Base"],
    kpis: [
      { label: "Time Saved", value: "3 hrs/wk" },
      { label: "Availability", value: "24×7" },
      { label: "Docs Generated", value: "1M+" },
    ],
    automation: 84,
  },
  {
    id: "finance-officer",
    name: "Finance AI",
    role: "Finance Operations Officer",
    worksFor: "Accounts & Finance",
    category: "Finance & HR",
    icon: Wallet,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    responsibilities: [
      "Fee collection & reminders",
      "Scholarship disbursal",
      "Payroll processing",
      "Budget tracking",
      "Reconciliation reports",
    ],
    systems: ["Finance ERP", "Payment Gateway", "HRMS"],
    kpis: [
      { label: "Collection Rate", value: "+27%" },
      { label: "Availability", value: "24×7" },
      { label: "Accuracy", value: "99.6%" },
    ],
    automation: 90,
  },
  {
    id: "placement-officer",
    name: "Placement AI",
    role: "Placement Coordinator",
    worksFor: "Training & Placement Cell",
    category: "Placements",
    icon: Briefcase,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    responsibilities: [
      "Resume building",
      "Mock interviews",
      "Employer relations",
      "Drive scheduling",
      "Placement analytics",
    ],
    systems: ["ERP", "Job Portals", "Email"],
    kpis: [
      { label: "Students Prepped", value: "50k+" },
      { label: "Availability", value: "24×7" },
      { label: "Placement Lift", value: "+22%" },
    ],
    automation: 80,
  },
  {
    id: "vice-chancellor",
    name: "Vice Chancellor AI",
    role: "Executive Intelligence",
    worksFor: "Leadership Office",
    category: "Executive Intelligence",
    icon: Crown,
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    responsibilities: [
      "Institution-wide dashboards",
      "Risk & retention alerts",
      "Accreditation readiness",
      "Predictive forecasting",
      "Decision briefings",
    ],
    systems: ["All ERP Modules", "Analytics", "Knowledge Base"],
    kpis: [
      { label: "Data Sources", value: "40+" },
      { label: "Availability", value: "24×7" },
      { label: "Insight Speed", value: "Instant" },
    ],
    automation: 95,
  },
]

export interface MarketplaceAgent {
  name: string
  icon: LucideIcon
  accent: string
  bg: string
  tag: AgentTag
}

export const marketplaceAgents: MarketplaceAgent[] = [
  { name: "Admissions AI", icon: GraduationCap, accent: "text-blue-400", bg: "bg-blue-500/10", tag: "Popular" },
  { name: "Faculty AI", icon: BookOpen, accent: "text-indigo-400", bg: "bg-indigo-500/10", tag: "Popular" },
  { name: "Finance AI", icon: Wallet, accent: "text-emerald-400", bg: "bg-emerald-500/10", tag: "Enterprise" },
  { name: "Placement AI", icon: Briefcase, accent: "text-blue-400", bg: "bg-blue-500/10", tag: "Active" },
  { name: "Research AI", icon: FlaskConical, accent: "text-violet-400", bg: "bg-violet-500/10", tag: "Beta" },
  { name: "Library AI", icon: Library, accent: "text-purple-400", bg: "bg-purple-500/10", tag: "Active" },
  { name: "Hostel AI", icon: BedDouble, accent: "text-orange-400", bg: "bg-orange-500/10", tag: "Active" },
  { name: "Transport AI", icon: Bus, accent: "text-emerald-400", bg: "bg-emerald-500/10", tag: "Active" },
  { name: "Compliance AI", icon: ShieldCheck, accent: "text-blue-400", bg: "bg-blue-500/10", tag: "Enterprise" },
  { name: "Examination AI", icon: ClipboardList, accent: "text-indigo-400", bg: "bg-indigo-500/10", tag: "Popular" },
  { name: "Analytics AI", icon: BarChart3, accent: "text-violet-400", bg: "bg-violet-500/10", tag: "Enterprise" },
  { name: "Recruitment AI", icon: UserCog, accent: "text-purple-400", bg: "bg-purple-500/10", tag: "Beta" },
]

// Icons used by the collaboration flow + hero network
export const flowIcons = {
  student: Users,
  admissions: GraduationCap,
  finance: Wallet,
  hr: UserCog,
  placement: Briefcase,
  administration: Building2,
  vc: Crown,
  faculty: BookOpen,
  analytics: BarChart3,
  knowledge: Brain,
  support: Headphones,
  exams: ClipboardList,
  library: Library,
  hostel: BedDouble,
  transport: Bus,
  compliance: ShieldCheck,
  finance2: Calculator,
  docs: FileCheck,
  message: MessageSquare,
  award: Award,
}
