"use client";

import { Calendar, FileText, AlertCircle } from "lucide-react";

const exams = [
  { subject: "Data Structures", code: "CS101", date: "Feb 18, 2025", time: "09:00 AM", room: "A-Lab", status: "Scheduled" },
  { subject: "Web Development", code: "CS201", date: "Feb 20, 2025", time: "02:00 PM", room: "B-Lab", status: "Scheduled" },
  { subject: "Database Management", code: "CS301", date: "Feb 22, 2025", time: "10:00 AM", room: "C-Lab", status: "Scheduled" },
];

export function ExamsContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Examinations</h2>
        <p className="text-muted-foreground">View exam schedules and download hall tickets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Upcoming Exams</p>
          <p className="text-2xl font-bold text-foreground">3</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Exam Duration</p>
          <p className="text-2xl font-bold text-foreground">3 Days</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Exams</h3>
        {exams.map((exam, idx) => (
          <div key={idx} className="bg-card rounded-xl p-5 border border-border card-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{exam.subject}</h4>
                <p className="text-sm text-muted-foreground">{exam.code}</p>
              </div>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">{exam.status}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {exam.date} at {exam.time}
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Room: {exam.room}
              </span>
            </div>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90">
              Download Hall Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
