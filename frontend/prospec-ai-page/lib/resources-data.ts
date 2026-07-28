import type { LucideIcon } from "lucide-react"
import {
  Brain, Rocket, Workflow, Database, Users, Crown,
  BookMarked, Code2, Plug, CloudCog, Settings,
  PlayCircle, GraduationCap, Award, MonitorPlay, Video, Presentation,
  FileBarChart, BarChart3, ClipboardCheck, TrendingUp, Lightbulb, Compass,
  BookOpen, HeartHandshake, LineChart,
  FileText, FileSpreadsheet, Map, Shield,
  Lock, ShieldCheck, BadgeCheck, Server, Activity,
  Search, Bell, ScrollText, Network, Calendar, Mail,
  LayoutGrid, CreditCard, Headphones,
} from "lucide-react"

export interface ResourceCard {
  title: string
  description?: string
  items?: string[]
  meta?: string
  icon: LucideIcon
  accent: string
  bg: string
}

export const featuredResources: ResourceCard[] = [
  { title: "AI in Higher Education", description: "Complete guide to implementing enterprise AI across universities.", icon: Brain, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Digital Transformation Playbook", description: "Step-by-step framework for modernizing institutional operations.", icon: Rocket, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "University Automation Handbook", description: "How universities reduce manual work using automation.", icon: Workflow, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Institutional Data Strategy", description: "Best practices for managing educational data securely.", icon: Database, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Student Experience Guide", description: "Design better digital experiences across the student lifecycle.", icon: Users, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Executive Decision Framework", description: "Using analytics and AI for institutional planning.", icon: Crown, accent: "text-orange-400", bg: "bg-orange-500/10" },
]

export const documentation: ResourceCard[] = [
  { title: "Product Documentation", description: "Complete platform documentation.", icon: BookMarked, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "API Reference", items: ["REST APIs", "Authentication", "Endpoints", "Examples"], icon: Code2, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Integration Guides", items: ["ERP", "LMS", "Finance", "HRMS", "Library"], icon: Plug, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Deployment Guides", items: ["Cloud", "Private Cloud", "On-premise", "Hybrid"], icon: CloudCog, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Administrator Manual", items: ["Configuration", "Permissions", "Security", "Roles"], icon: Settings, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "User Guides", items: ["Faculty", "Students", "Administration", "Management"], icon: Users, accent: "text-orange-400", bg: "bg-orange-500/10" },
]

export const learning: ResourceCard[] = [
  { title: "Getting Started", description: "Understand the Prospec ecosystem.", icon: PlayCircle, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "AI Academy", description: "Learn how AI transforms higher education.", icon: GraduationCap, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Best Practices", description: "Institutional implementation strategies.", icon: Award, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Product Tutorials", description: "Interactive learning experiences.", icon: MonitorPlay, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Webinar Library", description: "Expert sessions and product demonstrations.", icon: Video, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Video Walkthroughs", description: "Explore every module visually.", icon: Presentation, accent: "text-orange-400", bg: "bg-orange-500/10" },
]

export const research: ResourceCard[] = [
  { title: "Annual Higher Education Technology Report", meta: "2024 Edition", icon: FileBarChart, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Digital Campus Benchmark Study", meta: "Research", icon: BarChart3, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "AI Readiness Assessment Framework", meta: "Framework", icon: ClipboardCheck, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Student Experience Trends", meta: "Insights", icon: TrendingUp, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "University Innovation Report", meta: "Report", icon: Lightbulb, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Future of Campus Operations", meta: "Vision", icon: Compass, accent: "text-orange-400", bg: "bg-orange-500/10" },
]

export const successStories: ResourceCard[] = [
  { title: "Admissions Transformation", description: "How a university accelerated admissions with intelligent automation.", icon: GraduationCap, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Academic Process Modernization", description: "Improving operational efficiency across academic departments.", icon: BookOpen, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Student Service Excellence", description: "Delivering faster support and better student experiences.", icon: HeartHandshake, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Institutional Analytics", description: "Turning operational data into strategic insights.", icon: LineChart, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
]

export interface DownloadCard {
  title: string
  fileType: "PDF" | "Excel" | "PowerPoint"
  icon: LucideIcon
}

export const downloads: DownloadCard[] = [
  { title: "University Digital Transformation Checklist", fileType: "PDF", icon: FileText },
  { title: "AI Readiness Assessment", fileType: "Excel", icon: FileSpreadsheet },
  { title: "Campus Technology Planning Template", fileType: "PDF", icon: Map },
  { title: "Implementation Roadmap", fileType: "PDF", icon: Compass },
  { title: "Project Planning Toolkit", fileType: "PowerPoint", icon: Presentation },
  { title: "Security Overview", fileType: "PDF", icon: Shield },
]

export const compliance: ResourceCard[] = [
  { title: "Privacy Policy", icon: Lock, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Security Documentation", icon: ShieldCheck, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Compliance Overview", icon: BadgeCheck, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Data Governance", icon: Database, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Infrastructure", icon: Server, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Business Continuity", icon: Activity, accent: "text-orange-400", bg: "bg-orange-500/10" },
]

export const community: ResourceCard[] = [
  { title: "Knowledge Base", icon: Search, accent: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Product Updates", icon: Bell, accent: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Release Notes", icon: ScrollText, accent: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Developer Community", icon: Code2, accent: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Partner Network", icon: Network, accent: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Events", icon: Calendar, accent: "text-orange-400", bg: "bg-orange-500/10" },
  { title: "Newsletter", icon: Mail, accent: "text-teal-400", bg: "bg-teal-500/10" },
]

export interface Article {
  title: string
  category: string
  readTime: string
}

export const articles: Article[] = [
  { title: "AI Governance in Higher Education", category: "AI Strategy", readTime: "8 min read" },
  { title: "Building the Connected Campus", category: "Infrastructure", readTime: "6 min read" },
  { title: "Preparing Universities for the AI Era", category: "Leadership", readTime: "10 min read" },
  { title: "Modern Student Experience Strategies", category: "Student Success", readTime: "7 min read" },
  { title: "Institutional Intelligence Explained", category: "Analytics", readTime: "9 min read" },
  { title: "From ERP to Intelligent Campus", category: "Transformation", readTime: "5 min read" },
]

export interface FaqCategory {
  id: string
  label: string
  icon: LucideIcon
  faqs: { q: string; a: string }[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: "platform",
    label: "Platform",
    icon: LayoutGrid,
    faqs: [
      { q: "What is the Prospec platform?", a: "A unified AI operating system that connects every university department—admissions, academics, finance, administration and more—into one intelligent ecosystem." },
      { q: "Can we start with a single module?", a: "Yes. Every module works standalone, and you can expand across departments whenever you're ready." },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: ShieldCheck,
    faqs: [
      { q: "How is our data protected?", a: "Data is encrypted in transit and at rest, access is role-based, and every action is fully audit-logged. Your institution retains ownership of its data." },
      { q: "Do you support private AI deployment?", a: "Yes. Prospec can run in the cloud, private cloud, on-premise, or hybrid—so sensitive workloads stay within your control." },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: CloudCog,
    faqs: [
      { q: "How long does deployment take?", a: "Most institutions go live in weeks, following our structured Discovery → Configuration → Go Live framework." },
      { q: "Can it run on-premise?", a: "Yes—cloud, private cloud, on-premise, and hybrid deployments are all supported with centralized governance." },
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: Brain,
    faqs: [
      { q: "How is Prospec's AI trained?", a: "On your institutional knowledge and workflows—not public internet content—so answers reflect your policies, regulations and data." },
      { q: "Do administrators stay in control?", a: "Always. Sensitive actions can require human approval, and every AI decision is logged and reviewable." },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CreditCard,
    faqs: [
      { q: "How is Prospec priced?", a: "Enterprise pricing scales with your institution and the modules you deploy. Book a consultation for a tailored quote." },
      { q: "Is there a pilot option?", a: "Yes—many institutions begin with a single department pilot before rolling out campus-wide." },
    ],
  },
  {
    id: "implementation",
    label: "Implementation",
    icon: Rocket,
    faqs: [
      { q: "What does implementation involve?", a: "A guided framework: Discovery, Institution Assessment, Architecture Design, Data Migration, Integration, AI Configuration, Training, Go Live, and Continuous Optimization." },
      { q: "Do you help with data migration?", a: "Yes. Our team manages secure migration from your existing systems as part of onboarding." },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Plug,
    faqs: [
      { q: "What systems does Prospec connect to?", a: "ERP, LMS, HRMS, Finance, Library, Payment Gateways, Biometric, Email, SMS, WhatsApp, Microsoft 365, Google Workspace and REST APIs." },
      { q: "Can we use our own APIs?", a: "Yes. Open, governed REST APIs let your teams build and integrate custom workflows." },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: Headphones,
    faqs: [
      { q: "What support is included?", a: "Enterprise support with documentation, a knowledge base, AI Academy training, and a dedicated success team." },
      { q: "Is training provided?", a: "Yes—role-based training for faculty, students, administration and leadership is part of every rollout." },
    ],
  },
]
