"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Tray,
  UserCircle,
  Stack,
  Kanban,
  SquaresFour,
  Users,
  DeviceMobile,
  MapPin,
  FileText,
  CaretDown,
  CaretRight,
  Lightning,
  MagnifyingGlass,
  Plus,
  Link,
  DotsThree,
  Sparkle,
  Gear,
  Question,
  Check,
} from "@phosphor-icons/react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  }
  const panelVariants = {
    hidden: { opacity: 0, x: 100, y: -80 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full border-r flex flex-col shrink-0"
        style={{ backgroundColor: "#0d1117", borderColor: "rgba(30,129,206,0.15)" }}
        variants={panelVariants}
      >
        <div className="p-3 border-b" style={{ borderColor: "rgba(30,129,206,0.15)" }}>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Lightning className="w-5 h-5" weight="fill" style={{ color: "#1e81ce" }} />
            <span className="text-white font-semibold text-sm tracking-tight">PROSPEC</span>
            <CaretDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" weight="bold" />
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <MagnifyingGlass className="w-3.5 h-3.5" weight="bold" />
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        <div className="px-3 space-y-0.5">
          <NavItem icon={Tray} label="AI Assistant Chat" badge={3} active />
          <NavItem icon={UserCircle} label="Student Query" />
        </div>

        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">AI Agents</div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Stack} label="Faculty AI" hasSubmenu />
            <NavItem icon={Kanban} label="Admissions AI" hasSubmenu />
            <NavItem icon={SquaresFour} label="Analytics Dashboard" hasSubmenu />
            <NavItem icon={Users} label="Knowledge Search" hasSubmenu />
          </div>
        </div>

        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Automation</div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={DeviceMobile} label="AI Agent Activity" color="#3ba3f5" />
            <NavItem icon={MapPin} label="Workflow Automation" color="#fb923c" />
            <NavItem icon={FileText} label="Voice Assistant" color="#34d399" />
          </div>
        </div>

        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Insights</div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Sparkle} label="Real-time AI Insights" hasSubmenu />
            <NavItem icon={Gear} label="Administration" hasSubmenu />
          </div>
        </div>

        <div className="p-3 border-t" style={{ borderColor: "rgba(30,129,206,0.15)" }}>
          <NavItem icon={Question} label="Help & Support" />
        </div>
      </motion.div>

      {/* Inbox List */}
      <motion.div
        className="w-[320px] h-full border-r flex flex-col shrink-0"
        style={{ backgroundColor: "rgba(13,17,23,0.6)", borderColor: "rgba(30,129,206,0.12)" }}
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "rgba(30,129,206,0.12)" }}>
          <h3 className="text-white font-semibold text-sm tracking-tight">AI Assistant Chat</h3>
          <button className="text-zinc-500 hover:text-white transition-colors">
            <Plus className="w-4 h-4" weight="bold" />
          </button>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <InboxItem id="STU-135" title="Admission status enquiry" subtitle="Student Query · resolved by AI" time="2h" avatar="https://i.pravatar.cc/32?img=1" status="in-progress" active />
          <InboxItem id="FAC" title="Faculty AI" subtitle="Question paper generated" time="1d" avatar="https://i.pravatar.cc/32?img=2" status="todo" isProject />
          <InboxItem id="FIN-159" title="Fee payment assistance" subtitle="Escalated to Finance AI" time="2d" avatar="https://i.pravatar.cc/32?img=3" status="bug" />
          <InboxItem id="ADM-498" title="Hostel allocation request" subtitle="Administration AI assigned" time="4h" avatar="https://i.pravatar.cc/32?img=4" status="todo" />
          <InboxItem id="EXM-160" title="Exam schedule clarification" subtitle="Answered from knowledge base" time="1w" avatar="https://i.pravatar.cc/32?img=5" status="bug" />
          <InboxItem title="Scholarship guidance" subtitle="AI recommendation sent" avatar="https://i.pravatar.cc/32?img=6" status="done" isProject />
          <InboxItem id="PLC-122" title="Placement drive registration" subtitle="Placement AI confirmed" time="1w" avatar="https://i.pravatar.cc/32?img=7" status="done" />
          <InboxItem title="Analytics Dashboard" subtitle="Real-time AI Insights updated" avatar="https://i.pravatar.cc/32?img=8" status="todo" isProject />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div
        className="flex-1 h-full flex flex-col overflow-hidden"
        style={{ backgroundColor: "#0a0a0f" }}
        variants={panelVariants}
      >
        <div className="px-5 py-3 border-b flex items-center justify-between shrink-0" style={{ borderColor: "rgba(30,129,206,0.12)" }}>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Student Services</span>
            <span className="text-zinc-600">›</span>
            <span style={{ color: "#34d399" }}>Admissions AI</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">STU-135</span>
          </div>
          <DotsThree className="w-4 h-4 text-zinc-500" weight="bold" />
        </div>

        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5 tracking-tight">Admission status enquiry</h2>

          <div className="rounded-lg p-4 text-[11px] font-mono mb-5 border" style={{ backgroundColor: "rgba(13,17,23,0.8)", borderColor: "rgba(30,129,206,0.2)" }}>
            <div className="space-y-2">
              <div>
                <span className="text-zinc-500">Student.</span>
                <span className="text-amber-300">query</span>
                <span className="text-zinc-400">{' "What is the status of my B.Tech application?"'}</span>
              </div>
              <div className="mt-3 text-zinc-600">{"// Resolved automatically by Admissions AI"}</div>
              <div>
                <span style={{ color: "#c084fc" }}>@AIResolved</span>
                <span className="text-zinc-400">(</span>
                <span style={{ color: "#22d3ee" }}>AdmissionsAI</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">source</span>
                <span className="text-zinc-400">: </span>
                <span className="text-orange-300">{'"ERP"'}</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">confidence</span>
                <span className="text-zinc-400">: </span>
                <span style={{ color: "#3ba3f5" }}>0.98</span>
                <span className="text-zinc-400">)</span>
              </div>
              <div>
                <span style={{ color: "#60a5fa" }}>status </span>
                <span className="text-amber-300">applicationStage</span>
                <span className="text-zinc-400"> = </span>
                <span style={{ color: "#22d3ee" }}>{'"Documents Verified"'}</span>
                <span className="text-zinc-400">;</span>
              </div>
              <div className="mt-3 text-zinc-400">
                Answer generated from <span style={{ color: "#34d399" }}>ERP&nbsp;records</span> and the admissions knowledge base, then sent to the student instantly.
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm mb-5">
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Plus className="w-4 h-4" weight="bold" />
              <span>Add follow-up task</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Link className="w-4 h-4" weight="bold" />
              <span>Linked ERP record</span>
            </div>
          </div>

          <div className="text-xs text-zinc-500 mb-5">
            <span className="text-zinc-600">#20319</span>
            <span> admissions/stu-135 application status auto-resolved from ERP</span>
          </div>

          <div className="pt-4 border-t border-zinc-800/50">
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Activity</div>
            <div className="space-y-3">
              <ActivityItem avatar="https://i.pravatar.cc/24?img=1" name="Admissions AI" action="moved from" from="Pending" to="Resolved" time="2 hours ago" />
              <ActivityItem avatar="https://i.pravatar.cc/24?img=2" name="Registrar" action="reviewed" from="AI resolution" time="1 hour ago" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "text-white" : "text-zinc-400 hover:text-zinc-300"
      }`}
      style={active ? { backgroundColor: "rgba(30,129,206,0.15)", border: "1px solid rgba(30,129,206,0.2)" } : {}}
    >
      <Icon className="w-4 h-4" weight={active ? "fill" : "regular"} style={{ color: color || (active ? "#3ba3f5" : undefined) }} />
      <span className="flex-1 text-xs tracking-tight">{label}</span>
      {badge && (
        <span className="text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1" style={{ backgroundColor: "#1e81ce" }}>
          {badge}
        </span>
      )}
      {hasSubmenu && <CaretRight className="w-3 h-3 text-zinc-600" weight="bold" />}
    </div>
  )
}

function InboxItem({
  id,
  title,
  subtitle,
  time,
  avatar,
  status,
  isProject,
  active,
}: {
  id?: string
  title: string
  subtitle?: string
  time?: string
  avatar: string
  status: string
  isProject?: boolean
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    "in-progress": "#f59e0b",
    todo: "#52525b",
    bug: "#ef4444",
    done: "#22c55e",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
      }`}
      style={active ? { borderLeft: "2px solid #1e81ce" } : {}}
    >
      <div className="flex items-start gap-3">
        <img src={avatar || "/placeholder.svg"} alt="" className="w-8 h-8 rounded-full shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-zinc-500 text-[10px]">{id}</span>}
            {isProject && <span className="text-[10px]" style={{ color: "#a78bfa" }}>Project</span>}
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColors[status] || "#52525b" }} />
          </div>
          <p className="text-white text-xs truncate leading-tight font-medium">{title}</p>
          {subtitle && <p className="text-zinc-500 text-[10px] mt-0.5 truncate">{subtitle}</p>}
        </div>
        {time && <span className="text-zinc-600 text-[10px] shrink-0">{time}</span>}
      </div>
    </div>
  )
}

function ActivityItem({
  avatar, name, action, from, to, time,
}: {
  avatar: string; name: string; action: string; from: string; to?: string; time: string
}) {
  return (
    <div className="flex items-start gap-2">
      <img src={avatar || "/placeholder.svg"} alt="" className="w-5 h-5 rounded-full" />
      <div className="flex-1">
        <p className="text-zinc-400 text-xs">
          <span className="text-white font-medium">{name}</span>
          <span className="text-zinc-500"> {action} </span>
          <span className="text-zinc-300">{from}</span>
          {to && (<><span className="text-zinc-500"> to </span><span className="text-zinc-300">{to}</span></>)}
        </p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}
