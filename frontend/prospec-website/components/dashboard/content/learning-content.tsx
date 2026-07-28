"use client";

import { BookOpen, Download, MessageSquare, Clock } from "lucide-react";

const courses = [
  {
    code: "CS101",
    name: "Data Structures & Algorithms",
    instructor: "Dr. Rajesh Kumar",
    materials: 24,
    lectures: 36,
    tasks: 8,
    progress: 75,
  },
  {
    code: "CS201",
    name: "Web Development",
    instructor: "Ms. Priya Sharma",
    materials: 18,
    lectures: 28,
    tasks: 5,
    progress: 60,
  },
  {
    code: "CS301",
    name: "Database Management",
    instructor: "Prof. Amit Singh",
    materials: 22,
    lectures: 32,
    tasks: 7,
    progress: 85,
  },
];

export function LearningContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Learning Management</h2>
        <p className="text-muted-foreground">
          Access course materials, lectures, and study resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
          <p className="text-2xl font-bold text-foreground">3</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Total Materials</p>
          <p className="text-2xl font-bold text-foreground">64</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Lectures Attended</p>
          <p className="text-2xl font-bold text-foreground">92</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Your Courses</h3>
        {courses.map((course) => (
          <div key={course.code} className="bg-card rounded-xl p-6 border border-border card-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-foreground">{course.name}</h4>
                <p className="text-sm text-muted-foreground">{course.code} • {course.instructor}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{course.progress}%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{course.lectures}</p>
                <p className="text-xs text-muted-foreground">Lectures</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{course.materials}</p>
                <p className="text-xs text-muted-foreground">Materials</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{course.tasks}</p>
                <p className="text-xs text-muted-foreground">Tasks</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                View Materials
              </button>
              <button className="flex-1 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Discussion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
