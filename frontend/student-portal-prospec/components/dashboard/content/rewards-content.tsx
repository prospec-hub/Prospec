"use client";

import {
  Award,
  Star,
  TrendingUp,
  Trophy,
  Zap,
  Lock,
  Share2,
  Download,
  Users,
  Target,
} from "lucide-react";

const badges = [
  {
    id: "BADGE-001",
    name: "Quick Learner",
    description: "Completed 5 courses in a semester",
    icon: "⚡",
    earned: true,
    earnedDate: "Dec 15, 2024",
    points: 100,
  },
  {
    id: "BADGE-002",
    name: "Code Master",
    description: "Perfect score in coding assignment",
    icon: "💻",
    earned: true,
    earnedDate: "Jan 10, 2025",
    points: 150,
  },
  {
    id: "BADGE-003",
    name: "Perfect Attendance",
    description: "100% attendance in a semester",
    icon: "✅",
    earned: false,
    requirement: "0% absence",
    progress: 95,
    points: 200,
  },
  {
    id: "BADGE-004",
    name: "Innovation Leader",
    description: "Won innovation or hackathon competition",
    icon: "🚀",
    earned: false,
    requirement: "Win competition",
    points: 300,
  },
  {
    id: "BADGE-005",
    name: "Event Enthusiast",
    description: "Attended 10+ campus events",
    icon: "🎉",
    earned: true,
    earnedDate: "Jan 20, 2025",
    points: 120,
  },
  {
    id: "BADGE-006",
    name: "Social Butterfly",
    description: "Joined 3 or more clubs",
    icon: "🦋",
    earned: false,
    requirement: "Join 3 clubs",
    progress: 66,
    points: 100,
  },
];

const achievements = [
  {
    id: "ACH-001",
    title: "Semester Topper",
    description: "Achieved CGPA above 4.0",
    date: "Dec 2024",
    category: "Academic",
  },
  {
    id: "ACH-002",
    title: "Bug Finder",
    description: "Found and fixed 5 critical bugs in assignments",
    date: "Jan 2025",
    category: "Technical",
  },
  {
    id: "ACH-003",
    title: "Presentation Master",
    description: "Won 1st place in tech presentation competition",
    date: "Jan 2025",
    category: "Presentation",
  },
];

const leaderboard = [
  { rank: 1, name: "Arjun Kapoor", points: 2850, badges: 8 },
  { rank: 2, name: "Sneha Patel", points: 2620, badges: 7 },
  { rank: 3, name: "Alex Roy", points: 2340, badges: 6 },
  { rank: 4, name: "Ravi Sharma", points: 2100, badges: 5 },
  { rank: 5, name: "Priya Singh", points: 1950, badges: 5 },
];

const certificates = [
  {
    id: "CERT-001",
    name: "Data Structures Mastery",
    issuer: "Department of Computer Science",
    date: "Jan 10, 2025",
  },
  {
    id: "CERT-002",
    name: "Workshop: Web Development Fundamentals",
    issuer: "Tech Innovation Lab",
    date: "Dec 20, 2024",
  },
  {
    id: "CERT-003",
    name: "Leadership Certification",
    issuer: "Student Development Center",
    date: "Dec 05, 2024",
  },
];

const rewardStats = [
  { label: "Total Points", value: "2340", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Badges Earned", value: "6/12", color: "bg-success/10", textColor: "text-success" },
  { label: "Achievements", value: "3", color: "bg-warning/10", textColor: "text-warning" },
  { label: "Leaderboard Rank", value: "#3", color: "bg-primary/10", textColor: "text-primary" },
];

export function RewardsContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Rewards & Achievements</h2>
        <p className="text-muted-foreground">
          Badges, certificates, and achievement milestones
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {rewardStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 border border-border card-shadow`}>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Badges & Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-6 rounded-lg border ${
                badge.earned
                  ? "border-border bg-muted/30 hover:border-primary/50"
                  : "border-border/50 bg-muted/10"
              } transition-all`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2 opacity-100">{badge.icon}</div>
                {!badge.earned && <Lock className="w-5 h-5 text-muted-foreground mx-auto" />}
              </div>

              <h4 className="font-semibold text-foreground text-center mb-1">{badge.name}</h4>
              <p className="text-xs text-muted-foreground text-center mb-3">
                {badge.description}
              </p>

              {badge.earned && (
                <div className="text-center mb-3">
                  <span className="text-xs bg-success/20 text-success px-3 py-1 rounded-full font-semibold">
                    ✓ Earned {badge.earnedDate}
                  </span>
                </div>
              )}

              {!badge.earned && badge.progress !== undefined && (
                <div className="mb-3">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden mb-1">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${badge.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    {badge.progress}% Complete
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{badge.requirement || "•"}</span>
                <span className="font-semibold text-primary">{badge.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Achievements</h3>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{achievement.date}</span>
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Points Leaderboard</h3>
        <div className="space-y-2">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-4 p-4 rounded-lg ${
                entry.rank === 3
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-muted/30 border border-border"
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : entry.rank}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{entry.name}</p>
                <p className="text-xs text-muted-foreground">{entry.badges} badges</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary text-lg">{entry.points}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
              <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-3">Issued: {cert.date}</p>
              <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Shop */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Rewards Shop</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Redeem your points for campus rewards and benefits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Canteen Voucher", points: 500, available: true },
            { name: "Library Premium Access", points: 800, available: true },
            { name: "Free Gym Membership", points: 1500, available: false },
            { name: "Internship Priority", points: 2000, available: false },
          ].map((reward, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${
                reward.available
                  ? "border-border bg-muted/30"
                  : "border-border/50 bg-muted/10 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-foreground">{reward.name}</h4>
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-primary">{reward.points}</p>
                <button
                  disabled={!reward.available}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    reward.available
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {reward.available ? "Redeem" : "Not Available"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">How Points Work</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Earn Points By</p>
              <p className="text-muted-foreground">Achieving badges, completing tasks, attending events, and more</p>
            </div>
          </div>
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Accumulate & Compete</p>
              <p className="text-muted-foreground">Points accumulate and are used for leaderboard rankings</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Users className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Redeem Rewards</p>
              <p className="text-muted-foreground">Use accumulated points to redeem campus rewards and benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
