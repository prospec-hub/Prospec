import type { LucideIcon } from "lucide-react"
import {
  Sparkles,
  Layers,
  Brain,
  Workflow,
  BarChart3,
  Mic,
  Code2,
  Users,
  GraduationCap,
  BookOpen,
  Wallet,
  UserCog,
  Building2,
  Briefcase,
  Crown,
  Search,
  Database,
  FileText,
  Languages,
  ShieldCheck,
  Plug,
  Landmark,
  Cpu,
  Stethoscope,
  Building,
  MapPin,
  Newspaper,
  BookOpenCheck,
  PlayCircle,
} from "lucide-react"

export interface NavMenuItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export interface NavPromo {
  eyebrow: string
  title: string
  cta: string
  href: string
  icon: LucideIcon
}

export interface NavMenu {
  label: string
  href: string
  accent: string // text color class
  bg: string // icon bg tint class
  ring: string // hover border tint class
  items: NavMenuItem[]
  promos: NavPromo[]
}

export const navMenus: NavMenu[] = [
  {
    label: "AI Platform",
    href: "/",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "hover:border-blue-500/40",
    items: [
      { title: "AI Overview", description: "The operating system for your institution.", href: "/#overview", icon: Sparkles },
      { title: "AI Workspace", description: "One workspace connecting every system.", href: "/#ai-workspace", icon: Layers },
      { title: "AI Knowledge Engine", description: "Institutional knowledge, instantly searchable.", href: "/#knowledge", icon: Brain },
      { title: "AI Automation", description: "Automate operations across every department.", href: "/#automation", icon: Workflow },
      { title: "AI Analytics", description: "Predictive insight into institutional performance.", href: "/#analytics", icon: BarChart3 },
      { title: "Voice AI", description: "Natural, conversational access to any system.", href: "/#ai-workspace", icon: Mic },
      { title: "AI APIs", description: "Build on Prospec with open, governed APIs.", href: "/#automation", icon: Code2 },
    ],
    promos: [
      { eyebrow: "Latest Updates", title: "AI Platform 2.0 is here", cta: "See what's new", href: "/", icon: Sparkles },
      { eyebrow: "Demo Video", title: "Watch the Platform Tour", cta: "Play video", href: "/", icon: PlayCircle },
    ],
  },
  {
    label: "AI Agents",
    href: "/ai-agents",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    ring: "hover:border-violet-500/40",
    items: [
      { title: "Student AI", description: "A 24×7 companion for every student.", href: "/ai-agents#featured-agents", icon: Users },
      { title: "Admissions AI", description: "Runs the funnel from enquiry to enrollment.", href: "/ai-agents#featured-agents", icon: GraduationCap },
      { title: "Faculty AI", description: "Lesson plans, papers and assessments.", href: "/ai-agents#featured-agents", icon: BookOpen },
      { title: "Finance AI", description: "Fees, payroll and budgets, automated.", href: "/ai-agents#featured-agents", icon: Wallet },
      { title: "HR AI", description: "Recruitment, leave and employee support.", href: "/ai-agents#featured-agents", icon: UserCog },
      { title: "Administration AI", description: "Approvals and documentation on autopilot.", href: "/ai-agents#featured-agents", icon: Building2 },
      { title: "Placement AI", description: "Resumes, interviews and employer relations.", href: "/ai-agents#featured-agents", icon: Briefcase },
      { title: "Executive AI", description: "Decision-grade intelligence for leadership.", href: "/ai-agents#featured-agents", icon: Crown },
    ],
    promos: [
      { eyebrow: "Latest Updates", title: "25+ agents now live", cta: "Meet the workforce", href: "/ai-agents", icon: Sparkles },
      { eyebrow: "Demo Video", title: "See agents collaborate", cta: "Play video", href: "/ai-agents#featured-agents", icon: PlayCircle },
    ],
  },
  {
    label: "Features",
    href: "/features",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    ring: "hover:border-indigo-500/40",
    items: [
      { title: "Intelligent Search", description: "Find anything, across every system, instantly.", href: "/features#search", icon: Search },
      { title: "Workflow Automation", description: "Automate repetitive university tasks.", href: "/features#automation", icon: Workflow },
      { title: "Predictive Analytics", description: "Forecast outcomes before they happen.", href: "/features#analytics", icon: BarChart3 },
      { title: "Knowledge Base", description: "Every policy and document, searchable.", href: "/features#knowledge-base", icon: Database },
      { title: "Document Intelligence", description: "Understand and process any document.", href: "/features#knowledge-base", icon: FileText },
      { title: "Multi-language AI", description: "Serve every student in their own language.", href: "/features#ai-assistant", icon: Languages },
      { title: "Security", description: "Enterprise-grade governance by design.", href: "/security", icon: ShieldCheck },
      { title: "Integrations", description: "Connect ERP, LMS, HRMS and more.", href: "/features#integrations", icon: Plug },
    ],
    promos: [
      { eyebrow: "Latest Updates", title: "50+ capabilities, one platform", cta: "Explore features", href: "/features", icon: Sparkles },
      { eyebrow: "Demo Video", title: "Feature walkthrough", cta: "Play video", href: "/features", icon: PlayCircle },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "hover:border-emerald-500/40",
    items: [
      { title: "Universities", description: "Institution-wide AI for multi-faculty campuses.", href: "/solutions", icon: Landmark },
      { title: "Engineering Colleges", description: "Purpose-built for technical education.", href: "/solutions", icon: Cpu },
      { title: "Medical Colleges", description: "Built for clinical and academic complexity.", href: "/solutions", icon: Stethoscope },
      { title: "Private Institutions", description: "Scalable AI for independent institutions.", href: "/solutions", icon: Building },
      { title: "Government Universities", description: "Compliance-ready AI at public scale.", href: "/solutions", icon: Building2 },
      { title: "Multi-campus", description: "One AI layer across every campus.", href: "/solutions", icon: MapPin },
    ],
    promos: [
      { eyebrow: "Latest Updates", title: "Built for every institution", cta: "See solutions", href: "/solutions", icon: Sparkles },
      { eyebrow: "Case Study", title: "DreamField's transformation", cta: "Read the story", href: "/solutions", icon: PlayCircle },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "hover:border-orange-500/40",
    items: [
      { title: "Documentation", description: "Guides and references for every module.", href: "/resources#documentation", icon: FileText },
      { title: "AI Academy", description: "Learn to deploy AI across your institution.", href: "/resources#learning", icon: GraduationCap },
      { title: "Case Studies", description: "How institutions transform with Prospec.", href: "/resources#success-stories", icon: BookOpenCheck },
      { title: "Blog", description: "Product updates and higher-ed AI insight.", href: "/resources", icon: Newspaper },
      { title: "API Docs", description: "Build and integrate with Prospec APIs.", href: "/resources#documentation", icon: Code2 },
    ],
    promos: [
      { eyebrow: "New", title: "AI Academy is now live", cta: "Start learning", href: "/resources#learning", icon: Sparkles },
      { eyebrow: "Demo Video", title: "Getting started with Prospec", cta: "Play video", href: "/resources", icon: PlayCircle },
    ],
  },
]
