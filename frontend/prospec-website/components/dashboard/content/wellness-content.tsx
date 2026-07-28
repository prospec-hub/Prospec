"use client";

import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  FileText,
  Plus,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Smile,
  Dumbbell,
  Pill,
  Brain,
} from "lucide-react";
import { useState } from "react";

const wellnessServices = [
  { id: "medical", name: "Medical Services", count: 2, color: "bg-primary/10" },
  { id: "counseling", name: "Counseling", count: 1, color: "bg-success/10" },
  { id: "fitness", name: "Fitness", count: 0, color: "bg-warning/10" },
  { id: "nutrition", name: "Nutrition", count: 0, color: "bg-primary/10" },
  { id: "mental", name: "Mental Health", count: 1, color: "bg-primary/10" },
  { id: "dental", name: "Dental", count: 0, color: "bg-primary/10" },
];

const appointments = [
  {
    id: "APT-001",
    service: "General Checkup",
    doctor: "Dr. Priya Sharma",
    date: "Jan 25, 2025",
    time: "02:30 PM",
    status: "Confirmed",
    location: "Medical Center, Ground Floor",
    notes: "Blood pressure check, general health assessment",
  },
  {
    id: "APT-002",
    service: "Counseling Session",
    doctor: "Ms. Anjali Verma",
    date: "Feb 02, 2025",
    time: "03:00 PM",
    status: "Scheduled",
    location: "Counseling Office, 2nd Floor",
    notes: "Career counseling and stress management",
  },
];

const healthMetrics = [
  { label: "Last Checkup", value: "Jan 15, 2025", icon: Pill, color: "bg-primary/10" },
  { label: "BMI", value: "22.5 (Normal)", icon: TrendingUp, color: "bg-success/10" },
  { label: "Blood Group", value: "O+", icon: Heart, color: "bg-warning/10" },
  { label: "Fitness Level", value: "Good", icon: Dumbbell, color: "bg-primary/10" },
];

const fitnessPrograms = [
  {
    name: "Morning Yoga",
    schedule: "Mon, Wed, Fri - 06:30 AM",
    location: "Sports Complex",
    trainer: "Ms. Yoga Instructor",
    enrolled: true,
  },
  {
    name: "Gym Training",
    schedule: "Daily - 05:00 PM",
    location: "Fitness Center",
    trainer: "Mr. Fitness Coach",
    enrolled: false,
  },
  {
    name: "Swimming",
    schedule: "Tue, Thu - 04:00 PM",
    location: "Swimming Pool",
    trainer: "Mr. Swimming Coach",
    enrolled: false,
  },
];

const counselingServices = [
  {
    title: "Academic Counseling",
    description: "Guidance on course selection and career planning",
    icon: "🎓",
  },
  {
    title: "Career Counseling",
    description: "Career guidance and professional development",
    icon: "💼",
  },
  {
    title: "Mental Health Support",
    description: "Counseling for stress, anxiety, and emotional support",
    icon: "🧠",
  },
  {
    title: "Peer Support Groups",
    description: "Connect with peers for mutual support and guidance",
    icon: "👥",
  },
];

export function WellnessContent() {
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Health & Wellness</h2>
        <p className="text-muted-foreground">
          Medical services, counseling, fitness, and wellness programs
        </p>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {healthMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className={`${metric.color} rounded-xl p-5 border border-border card-shadow`}>
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
              <p className="font-semibold text-foreground">{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* Wellness Services */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {wellnessServices.map((service) => (
          <button
            key={service.id}
            className={`${service.color} rounded-lg p-4 border border-border hover:border-primary transition-all text-center`}
          >
            <p className="font-semibold text-foreground">{service.count}</p>
            <p className="text-xs text-muted-foreground mt-1">{service.name}</p>
          </button>
        ))}
      </div>

      {/* Appointments */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Appointments</h3>

        {/* Book Appointment */}
        <button
          onClick={() => setShowNewAppointment(!showNewAppointment)}
          className="w-full px-4 py-3 border-2 border-dashed border-primary rounded-lg text-primary font-medium hover:bg-primary/5 transition-colors text-center flex items-center justify-center gap-2 mb-4"
        >
          <Plus className="w-5 h-5" />
          Book New Appointment
        </button>

        {showNewAppointment && (
          <div className="p-6 border border-border rounded-lg bg-muted/30 mb-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Service</option>
                <option>General Checkup</option>
                <option>Dental</option>
                <option>Counseling</option>
                <option>Vaccination</option>
                <option>Eye Checkup</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
              <textarea
                placeholder="Any additional information for the doctor"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowNewAppointment(false)}
                className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        )}

        {/* Appointment List */}
        <div className="space-y-3">
          {appointments.map((apt) => (
            <div key={apt.id} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{apt.service}</h4>
                  <p className="text-sm text-muted-foreground">Dr. {apt.doctor}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    apt.status === "Confirmed"
                      ? "bg-success/20 text-success"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {apt.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {apt.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {apt.time}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {apt.location}
                </div>
              </div>

              <p className="text-xs text-muted-foreground bg-card rounded px-3 py-2 mb-3">
                {apt.notes}
              </p>

              <div className="flex gap-2 pt-2 border-t border-border">
                <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Reschedule
                </button>
                <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fitness Programs */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Fitness Programs</h3>
        <div className="space-y-3">
          {fitnessPrograms.map((program, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground">{program.name}</h4>
                {program.enrolled && (
                  <span className="text-xs bg-success/20 text-success px-2 py-1 rounded font-semibold">
                    Enrolled
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs mb-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {program.schedule}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {program.location}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {program.trainer}
                </div>
              </div>

              {!program.enrolled && (
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Enroll Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Counseling Services */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Counseling Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {counselingServices.map((service, idx) => (
            <button
              key={idx}
              className="p-4 rounded-lg border border-border bg-muted/30 hover:border-primary hover:bg-primary/5 transition-all text-left"
            >
              <div className="text-2xl mb-2">{service.icon}</div>
              <p className="font-semibold text-foreground">{service.title}</p>
              <p className="text-xs text-muted-foreground mt-2">{service.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Medical Records */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Medical Records</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground">General Checkup Report</p>
                <p className="text-xs text-muted-foreground mt-1">Jan 15, 2025</p>
              </div>
              <button className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground">Lab Test Results</p>
                <p className="text-xs text-muted-foreground mt-1">Jan 10, 2025</p>
              </div>
              <button className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Health Services Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Medical Center</p>
            <p className="text-xs text-muted-foreground mb-2">Admin Block, Ground Floor</p>
            <p className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91-080-1234-5678
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Emergency</p>
            <p className="text-xs text-muted-foreground mb-2">Available 24/7</p>
            <p className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91-9876-543-2109
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
