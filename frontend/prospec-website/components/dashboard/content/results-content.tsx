"use client";

import { TrendingUp, Download } from "lucide-react";

const results = [
  { code: "CS101", name: "Data Structures", credits: 4, marks: 92, grade: "A+", gpa: 4.0 },
  { code: "CS201", name: "Web Development", credits: 3, marks: 88, grade: "A", gpa: 3.9 },
  { code: "CS301", name: "Database Management", credits: 4, marks: 95, grade: "A+", gpa: 4.0 },
  { code: "CS401", name: "System Design", credits: 3, marks: 85, grade: "A", gpa: 3.8 },
];

export function ResultsContent() {
  const cgpa = 3.9;
  const totalCredits = results.reduce((a, r) => a + r.credits, 0);

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Academic Results</h2>
        <p className="text-muted-foreground">View your grades and performance analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">CGPA</p>
          <p className="text-2xl font-bold text-foreground">{cgpa}</p>
          <p className="text-xs text-success">Excellent performance</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Total Credits</p>
          <p className="text-2xl font-bold text-foreground">{totalCredits}</p>
        </div>
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <p className="text-sm text-muted-foreground mb-1">Courses Completed</p>
          <p className="text-2xl font-bold text-foreground">{results.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Semester Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Credits</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Marks</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Grade</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">GPA</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.code} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-foreground">{result.name}</p>
                      <p className="text-xs text-muted-foreground">{result.code}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">{result.credits}</td>
                  <td className="py-3 px-4 font-medium text-foreground">{result.marks}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-success/20 text-success">
                      {result.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-foreground">{result.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Download Transcript
      </button>
    </div>
  );
}
