import type { LucideIcon } from "lucide-react"
import {
  Sparkles, Brain, Server, ShieldCheck, GraduationCap, Building2, Users, Wallet,
  ClipboardList, BarChart3, Workflow, Plug, Lock, Layers, Mic, Database,
  Video, MonitorPlay, MapPin, Presentation, Compass, Handshake, Cpu,
} from "lucide-react"

export interface ExperienceCard {
  icon: LucideIcon
  accent: string
  bg: string
  title: string
  description: string
  duration: string
}

export const experienceCards: ExperienceCard[] = [
  {
    icon: Presentation,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Personalized Platform Walkthrough",
    description: "Explore the Prospec ecosystem based on your institution's structure, departments, and operational priorities.",
    duration: "30–45 Minutes",
  },
  {
    icon: Brain,
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    title: "AI Strategy Consultation",
    description: "Discuss how artificial intelligence can automate university operations while improving efficiency and student experiences.",
    duration: "20 Minutes",
  },
  {
    icon: Server,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Technical & Integration Review",
    description: "Understand deployment models, integrations, security architecture, implementation timelines, and migration strategies.",
    duration: "15 Minutes",
  },
]

export interface AgendaStep {
  no: string
  title: string
  items: string[]
}

export const agendaSteps: AgendaStep[] = [
  { no: "01", title: "Understanding Your Institution", items: ["Current systems", "Challenges", "Growth goals"] },
  { no: "02", title: "Platform Demonstration", items: ["Admissions", "Student Portal", "Faculty Workspace", "Administration", "AI Platform", "Analytics"] },
  { no: "03", title: "AI & Automation Showcase", items: ["Department AI", "Workflow Automation", "Knowledge AI", "Predictive Analytics", "Voice AI"] },
  { no: "04", title: "Integration Architecture", items: ["ERP", "LMS", "Finance", "HRMS", "APIs", "Identity Management"] },
  { no: "05", title: "Questions & Discussion", items: ["Technical", "Operational", "Commercial", "Implementation"] },
  { no: "06", title: "Next Steps", items: ["Proposal", "Deployment Plan", "Pilot Program", "Timeline"] },
]

export interface WhyCard {
  icon: LucideIcon
  accent: string
  bg: string
  title: string
  description: string
}

export const whyCards: WhyCard[] = [
  { icon: GraduationCap, accent: "text-blue-400", bg: "bg-blue-500/10", title: "University-Specific", description: "No generic presentations. Every demonstration reflects higher education workflows." },
  { icon: Sparkles, accent: "text-indigo-400", bg: "bg-indigo-500/10", title: "Live AI Experience", description: "Interact with real AI assistants and automation workflows." },
  { icon: Server, accent: "text-violet-400", bg: "bg-violet-500/10", title: "Enterprise Architecture Review", description: "Discuss integrations, deployment options, scalability, and security." },
  { icon: Handshake, accent: "text-emerald-400", bg: "bg-emerald-500/10", title: "Executive Consultation", description: "Receive recommendations aligned with your institution's priorities and transformation roadmap." },
]

export interface Metric {
  value: string
  label: string
}

export const metrics: Metric[] = [
  { value: "30–45 Min", label: "Average Demonstration" },
  { value: "100+", label: "Platform Capabilities" },
  { value: "8+", label: "Department Solutions" },
  { value: "24×7", label: "AI Platform" },
]

export const faqs = [
  { q: "Is the demo customized for our institution?", a: "Yes. Every demonstration is prepared around your institution's size, operational structure, existing systems, and objectives." },
  { q: "Who should attend?", a: "Vice Chancellors, Registrars, Directors, CIOs, IT Heads, Finance Officers, Admission Teams, Academic Leaders, and Digital Transformation Committees." },
  { q: "Is there any cost?", a: "No. The consultation and product demonstration are completely complimentary." },
  { q: "How long does the demonstration take?", a: "Most sessions last between 45 and 60 minutes, depending on the topics covered and the number of stakeholders attending." },
  { q: "Can we invite multiple team members?", a: "Absolutely. We encourage participation from both technical and administrative teams to ensure all questions are addressed." },
  { q: "Will we receive a proposal afterward?", a: "Yes. Based on your requirements, our team can provide a tailored implementation roadmap, recommended modules, estimated timeline, and commercial proposal." },
]

export const afterDemoTimeline = [
  "Demo Request",
  "Consultation Scheduled",
  "Personalized Demonstration",
  "Technical Discussion",
  "Solution Proposal",
  "Pilot Deployment",
  "Institution-wide Implementation",
]

export const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Enterprise Security" },
  { icon: Lock, label: "Private Deployment" },
  { icon: GraduationCap, label: "University-Focused" },
  { icon: Handshake, label: "Expert Consultation" },
]

// ---- Form options ----
export const institutionTypes = [
  "University", "Engineering College", "Medical College", "Private Institution",
  "Government Institution", "Autonomous College", "Other",
]

export const designations = [
  "Vice Chancellor", "Registrar", "Director", "Dean", "Principal",
  "Controller of Examination", "Finance Officer", "IT Head", "Admissions Head", "Other",
]

export const studentCounts = [
  "Less than 2,000", "2,000–5,000", "5,000–10,000", "10,000–25,000", "25,000+",
]

export const timeSlots = [
  "09:00 – 10:00", "10:00 – 11:00", "11:00 – 12:00", "12:00 – 13:00",
  "14:00 – 15:00", "15:00 – 16:00", "16:00 – 17:00", "17:00 – 18:00",
]

export interface InterestModule {
  id: string
  label: string
  icon: LucideIcon
  accent: string
}

export const interestModules: InterestModule[] = [
  { id: "admissions", label: "Admissions", icon: GraduationCap, accent: "text-blue-400" },
  { id: "student-portal", label: "Student Portal", icon: Users, accent: "text-violet-400" },
  { id: "faculty", label: "Faculty Management", icon: Presentation, accent: "text-indigo-400" },
  { id: "examination", label: "Examination", icon: ClipboardList, accent: "text-purple-400" },
  { id: "finance", label: "Finance", icon: Wallet, accent: "text-emerald-400" },
  { id: "ai-platform", label: "AI Platform", icon: Brain, accent: "text-blue-400" },
  { id: "ai-agents", label: "AI Agents", icon: Cpu, accent: "text-violet-400" },
  { id: "analytics", label: "Analytics", icon: BarChart3, accent: "text-orange-400" },
  { id: "automation", label: "Workflow Automation", icon: Workflow, accent: "text-indigo-400" },
  { id: "integrations", label: "Integrations", icon: Plug, accent: "text-teal-400" },
  { id: "security", label: "Security", icon: Lock, accent: "text-emerald-400" },
]

export interface MeetingMode {
  id: string
  label: string
  icon: LucideIcon
}

export const meetingModes: MeetingMode[] = [
  { id: "teams", label: "Microsoft Teams", icon: Users },
  { id: "meet", label: "Google Meet", icon: Video },
  { id: "zoom", label: "Zoom", icon: MonitorPlay },
  { id: "campus", label: "On Campus", icon: MapPin },
]

export const successSteps = [
  { label: "Request Received", done: true },
  { label: "Demo Assigned", done: true },
  { label: "Calendar Invitation", done: false },
  { label: "Personalized Agenda", done: false },
  { label: "Live Demonstration", done: false },
]

// icons re-exported for hero convenience
export const heroIcons = { Sparkles, Brain, Server, Layers, Mic, Database, Compass }
