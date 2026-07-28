"use client";

import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  FileText,
} from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Data Structures & Algorithms",
    code: "CS-201",
    instructor: "Dr. John Smith",
    credits: 4,
    grade: "A",
    progress: 85,
  },
  {
    id: 2,
    name: "Web Development",
    code: "CS-205",
    instructor: "Prof. Sarah Johnson",
    credits: 3,
    grade: "A-",
    progress: 90,
  },
  {
    id: 3,
    name: "Database Management",
    code: "CS-301",
    instructor: "Dr. Michael Chen",
    credits: 4,
    grade: "B+",
    progress: 72,
  },
  {
    id: 4,
    name: "Software Engineering",
    code: "CS-401",
    instructor: "Prof. Emily Davis",
    credits: 3,
    grade: "A",
    progress: 95,
  },
  {
    id: 5,
    name: "Advanced Mathematics",
    code: "MATH-301",
    instructor: "Dr. Robert Wilson",
    credits: 4,
    grade: "B",
    progress: 68,
  },
];

const semesters = [
  { semester: "Fall 2024", sgpa: 3.85, cgpa: 3.78, courses: 5, status: "Current" },
  { semester: "Spring 2024", sgpa: 3.72, cgpa: 3.72, courses: 5, status: "Completed" },
  { semester: "Fall 2023", sgpa: 3.68, cgpa: 3.68, courses: 5, status: "Completed" },
];

export function AcademicsContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      {/* Page Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Academics</h2>
        <p className="text-muted-foreground">
          Manage your courses, grades, and academic progress
        </p>
      </div>

      {/* Academic Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Award className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Current SGPA</p>
          <p className="text-2xl font-bold text-foreground mb-2">3.85</p>
          <p className="text-xs text-success">Fall 2024</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Cumulative CGPA</p>
          <p className="text-2xl font-bold text-foreground mb-2">3.78</p>
          <p className="text-xs text-success">All Semesters</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <BookOpen className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Total Credits</p>
          <p className="text-2xl font-bold text-foreground mb-2">20</p>
          <p className="text-xs text-muted-foreground">Out of 120</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-warning/10">
              <Users className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Enrolled Courses</p>
          <p className="text-2xl font-bold text-foreground mb-2">5</p>
          <p className="text-xs text-muted-foreground">This Semester</p>
        </div>
      </div>

      {/* Semester History */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Semester History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Semester
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  SGPA
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  CGPA
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Courses
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {semesters.map((sem) => (
                <tr key={sem.semester} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4 text-sm text-foreground font-medium">
                    {sem.semester}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground">{sem.sgpa}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{sem.cgpa}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{sem.courses}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        sem.status === "Current"
                          ? "bg-primary/20 text-primary"
                          : "bg-success/20 text-success"
                      }`}
                    >
                      {sem.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Current Courses */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Current Courses</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl p-6 border border-border card-shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{course.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{course.code}</p>
                </div>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm font-semibold">
                  {course.grade}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>{course.credits} Credits</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-foreground">Progress</span>
                    <span className="text-xs text-muted-foreground">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Academic Calendar</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Course Materials</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Transcript</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Course Registration</span>
          </button>
        </div>
      </div>
    </div>
  );
}
