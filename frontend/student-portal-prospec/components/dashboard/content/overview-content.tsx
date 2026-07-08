"use client";

import {
  BookOpen,
  Calendar,
  DollarSign,
  Award,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Briefcase,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";

const attendanceData = [
  { subject: "Math", percentage: 92, status: "Excellent" },
  { subject: "Physics", percentage: 85, status: "Good" },
  { subject: "Chemistry", percentage: 88, status: "Good" },
  { subject: "English", percentage: 95, status: "Excellent" },
  { subject: "History", percentage: 78, status: "Fair" },
];

const performanceData = [
  { month: "Aug", gpa: 3.6, target: 3.8 },
  { month: "Sep", gpa: 3.7, target: 3.8 },
  { month: "Oct", gpa: 3.65, target: 3.8 },
  { month: "Nov", gpa: 3.8, target: 3.8 },
  { month: "Dec", gpa: 3.85, target: 3.8 },
  { month: "Jan", gpa: 3.9, target: 3.8 },
];

const upcomingEvents = [
  { title: "Midterm Exams Begin", date: "Jan 15", type: "exam", status: "upcoming" },
  { title: "Project Submission Deadline", date: "Jan 10", type: "assignment", status: "urgent" },
  { title: "Guest Lecture - Data Science", date: "Jan 12", type: "event", status: "upcoming" },
];

const metrics = [
  {
    label: "Current CGPA",
    value: "3.90",
    change: "+0.15",
    trend: "up",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Attendance",
    value: "88%",
    change: "+5%",
    trend: "up",
    icon: Calendar,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Pending Tasks",
    value: "3",
    change: "-1",
    trend: "down",
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    label: "Fee Status",
    value: "Paid",
    change: "Current",
    trend: "stable",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

export function OverviewContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Welcome back, Alex Roy!
        </h2>
        <p className="text-muted-foreground">
          Here's your academic dashboard for the current semester
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="bg-card rounded-xl p-5 border border-border card-shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground mb-2">
                {metric.value}
              </p>
              <p className="text-xs text-success flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {metric.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GPA Progress Chart */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              GPA Progress
            </h3>
            <p className="text-sm text-muted-foreground">
              Performance tracking over semester
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ borderRadius: "8px" }} />
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="#2563EB"
                strokeWidth={2}
                dot={{ fill: "#2563EB", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#10b98150"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Overview */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Attendance Summary
            </h3>
            <p className="text-sm text-muted-foreground">
              Subject-wise attendance percentage
            </p>
          </div>
          <div className="space-y-3">
            {attendanceData.map((item) => (
              <div key={item.subject}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">
                    {item.subject}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.percentage >= 90
                        ? "bg-success"
                        : item.percentage >= 80
                          ? "bg-primary"
                          : "bg-warning"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Today&apos;s Schedule
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Mathematics</p>
                <p className="text-xs text-muted-foreground">09:00 - 10:30 | Room 401</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Physics Lab</p>
                <p className="text-xs text-muted-foreground">11:00 - 01:00 | Lab 2</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">English Class</p>
                <p className="text-xs text-muted-foreground">02:30 - 04:00 | Room 301</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Assignments */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Due Soon
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">CS Project</p>
                <p className="text-xs text-muted-foreground">Due: Jan 10</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Math Assignment</p>
                <p className="text-xs text-muted-foreground">Due: Jan 12</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Literature Essay</p>
                <p className="text-xs text-muted-foreground">Due: Jan 15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
              View Assignments
            </button>
            <button className="w-full px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors text-sm">
              Download Timetable
            </button>
            <button className="w-full px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors text-sm">
              Check Fee Status
            </button>
            <button className="w-full px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors text-sm">
              View Results
            </button>
          </div>
        </div>
      </div>

      {/* Announcements & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Latest Announcements
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Midterm Exam Schedule Released</p>
                <p className="text-xs text-muted-foreground mt-1">Today at 10:30 AM</p>
              </div>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">New</span>
            </div>
            <div className="flex gap-3 p-4 bg-success/5 rounded-lg hover:bg-success/10 transition-colors cursor-pointer">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Grades for Finals Released</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday at 2:45 PM</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-warning/5 rounded-lg hover:bg-warning/10 transition-colors cursor-pointer">
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Library Extended Hours This Week</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium">
            View All Announcements
          </button>
        </div>

        {/* Placement Updates */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Placement Updates
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">TechCorp Hiring Drive</p>
                <p className="text-xs text-muted-foreground">Java, Python | Deadline: Jan 20</p>
              </div>
              <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Active</span>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">FinanceHub Internship Program</p>
                <p className="text-xs text-muted-foreground">Finance, Analytics | Deadline: Jan 25</p>
              </div>
              <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Active</span>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">DataScience Solutions</p>
                <p className="text-xs text-muted-foreground">Data Science, ML | Deadline: Jan 18</p>
              </div>
              <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">Closing Soon</span>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium">
            Browse All Jobs
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">Books Issued</h4>
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-2">4</p>
          <p className="text-xs text-muted-foreground">2 due in next 7 days</p>
        </div>

        <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-6 border border-success/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">Events Attended</h4>
            <Calendar className="w-5 h-5 text-success" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-2">12</p>
          <p className="text-xs text-muted-foreground">+3 upcoming this month</p>
        </div>

        <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl p-6 border border-warning/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">Hostel Complaints</h4>
            <AlertCircle className="w-5 h-5 text-warning" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-2">1</p>
          <p className="text-xs text-muted-foreground">Under review (Est. 2 days)</p>
        </div>
      </div>
    </div>
  );
}
