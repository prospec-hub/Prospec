"use client";

import { Clock, MapPin } from "lucide-react";

const weekSchedule = [
  {
    day: "Monday",
    classes: [
      { time: "09:00 - 10:30", subject: "Data Structures", code: "CS101", instructor: "Dr. Rajesh Kumar", room: "A-205", type: "Lecture" },
      { time: "10:30 - 11:30", subject: "Web Development", code: "CS201", instructor: "Ms. Priya Sharma", room: "A-210", type: "Lecture" },
      { time: "14:00 - 15:30", subject: "Database Management Lab", code: "CS301", instructor: "Prof. Amit Singh", room: "Lab-2", type: "Practical" },
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "10:00 - 11:30", subject: "System Design", code: "CS401", instructor: "Dr. Neha Patel", room: "A-301", type: "Lecture" },
      { time: "12:00 - 13:00", subject: "Web Development Lab", code: "CS201", instructor: "Ms. Priya Sharma", room: "Lab-1", type: "Practical" },
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "09:00 - 10:30", subject: "Data Structures Lab", code: "CS101", instructor: "Dr. Rajesh Kumar", room: "Lab-3", type: "Practical" },
      { time: "11:00 - 12:30", subject: "System Design", code: "CS401", instructor: "Dr. Neha Patel", room: "A-301", type: "Lecture" },
    ]
  },
];

export function TimetableContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Class Timetable</h2>
        <p className="text-muted-foreground">
          Your weekly schedule and class timings
        </p>
      </div>

      <div className="space-y-4">
        {weekSchedule.map((day) => (
          <div key={day.day}>
            <h3 className="text-lg font-semibold text-foreground mb-3">{day.day}</h3>
            <div className="space-y-3">
              {day.classes.map((cls, idx) => (
                <div key={idx} className="bg-card rounded-xl p-5 border border-border card-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{cls.subject}</h4>
                      <p className="text-sm text-muted-foreground">{cls.code} • {cls.instructor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cls.type === "Lecture" ? "bg-primary/20 text-primary" : "bg-success/20 text-success"
                    }`}>
                      {cls.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {cls.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {cls.room}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Important Dates</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-foreground">Mid Semester Exams</span>
            <span className="text-sm text-muted-foreground">Feb 15 - Mar 5, 2025</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-foreground">End Semester Exams</span>
            <span className="text-sm text-muted-foreground">Apr 20 - May 10, 2025</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground">Summer Break</span>
            <span className="text-sm text-muted-foreground">May 15 - Jun 30, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
