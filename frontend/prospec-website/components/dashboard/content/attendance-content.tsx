"use client";

import { AlertCircle, TrendingUp } from "lucide-react";

const subjects = [
  { code: "CS101", name: "Data Structures", total: 40, present: 38, percentage: 95 },
  { code: "CS201", name: "Web Development", total: 35, present: 32, percentage: 91 },
  { code: "CS301", name: "Database Management", total: 38, present: 38, percentage: 100 },
  { code: "CS401", name: "System Design", total: 32, present: 28, percentage: 87 },
];

export function AttendanceContent() {
  const overallAttendance = Math.round(
    subjects.reduce((acc, s) => acc + s.percentage, 0) / subjects.length
  );

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Attendance Tracking</h2>
        <p className="text-muted-foreground">
          Monitor your class attendance across all subjects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Overall Attendance</p>
          <p className="text-2xl font-bold text-foreground">{overallAttendance}%</p>
          <p className="text-xs text-success">Above 75% required</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Classes Attended</p>
          <p className="text-2xl font-bold text-foreground">{subjects.reduce((a, s) => a + s.present, 0)}</p>
          <p className="text-xs text-muted-foreground">This semester</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Total Classes</p>
          <p className="text-2xl font-bold text-foreground">{subjects.reduce((a, s) => a + s.total, 0)}</p>
          <p className="text-xs text-muted-foreground">Scheduled</p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">Attendance Requirement</p>
          <p className="text-sm text-muted-foreground">
            Maintain at least 75% attendance to be eligible for exams. Currently, all your subjects meet the requirement.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Subject-wise Attendance</h3>
        {subjects.map((subject) => (
          <div key={subject.code} className="bg-card rounded-xl p-5 border border-border card-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{subject.name}</h4>
                <p className="text-sm text-muted-foreground">{subject.code}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{subject.percentage}%</p>
                <p className="text-xs text-muted-foreground">{subject.present}/{subject.total}</p>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  subject.percentage >= 75 ? "bg-success" : "bg-warning"
                }`}
                style={{ width: `${subject.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
