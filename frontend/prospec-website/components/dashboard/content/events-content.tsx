"use client";

import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Ticket,
  Share2,
  Heart,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";

const upcomingEvents = [
  {
    id: "EVT-001",
    name: "Campus Technical Fest 2025",
    date: "Feb 15-17, 2025",
    time: "09:00 AM - 06:00 PM",
    location: "Main Auditorium & Grounds",
    category: "Festival",
    image: "🎉",
    registered: 245,
    capacity: 500,
    description: "Annual tech fest featuring coding competitions, hackathons, and tech talks",
    speakers: ["Dr. Rajesh Kumar", "Ms. Priya Sharma"],
    status: "Registration Open",
  },
  {
    id: "EVT-002",
    name: "Career Expo 2025",
    date: "Feb 22, 2025",
    time: "10:00 AM - 04:00 PM",
    location: "Convention Center",
    category: "Career",
    image: "💼",
    registered: 128,
    capacity: 300,
    description: "Meet top companies and explore job opportunities",
    speakers: ["HR Professionals from Top Companies"],
    status: "Registration Open",
  },
  {
    id: "EVT-003",
    name: "Robotics Workshop",
    date: "Feb 10, 2025",
    time: "02:00 PM - 05:00 PM",
    location: "Innovation Lab",
    category: "Workshop",
    image: "🤖",
    registered: 45,
    capacity: 60,
    description: "Hands-on workshop on robotics and automation",
    speakers: ["Prof. Vikram Singh"],
    status: "Closing Soon",
  },
];

const myEvents = [
  {
    id: "MY-EVT-001",
    name: "Tech Fest Opening Ceremony",
    date: "Feb 15, 2025",
    time: "09:00 AM",
    status: "Registered",
    ticketId: "TICKET-2025-001",
  },
  {
    id: "MY-EVT-002",
    name: "Web Development Workshop",
    date: "Feb 08, 2025",
    time: "03:00 PM",
    status: "Attended",
    certificate: "Issued",
  },
];

const eventCategories = [
  { name: "All Events", count: 24, color: "bg-primary/10" },
  { name: "Workshops", count: 8, color: "bg-success/10" },
  { name: "Festivals", count: 4, color: "bg-warning/10" },
  { name: "Seminars", count: 6, color: "bg-primary/10" },
  { name: "Sports", count: 3, color: "bg-primary/10" },
  { name: "Cultural", count: 3, color: "bg-primary/10" },
];

export function EventsContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Events & Clubs</h2>
        <p className="text-muted-foreground">
          Discover campus events, register, and manage your calendar
        </p>
      </div>

      {/* Event Categories */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {eventCategories.map((cat, idx) => (
          <button
            key={idx}
            className={`${cat.color} rounded-lg p-4 border border-border hover:border-primary transition-all text-center`}
          >
            <p className="font-semibold text-foreground">{cat.count}</p>
            <p className="text-xs text-muted-foreground mt-1">{cat.name}</p>
          </button>
        ))}
      </div>

      {/* My Events */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Events</h3>
        <div className="space-y-3">
          {myEvents.map((event) => (
            <div key={event.id} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{event.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date} at {event.time}
                  </p>
                  {event.ticketId && (
                    <p className="text-xs text-muted-foreground mt-1">Ticket: {event.ticketId}</p>
                  )}
                  {event.certificate && (
                    <p className="text-xs text-success mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {event.certificate}
                    </p>
                  )}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === "Registered"
                      ? "bg-primary/20 text-primary"
                      : "bg-success/20 text-success"
                  }`}
                >
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-5 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all">
              <div className="flex gap-4">
                <div className="text-4xl">{event.image}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg">{event.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  </div>
                  <p className="text-sm text-foreground mt-2">{event.description}</p>
                  {event.speakers.length > 0 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Speakers:</strong> {event.speakers.join(", ")}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    event.status === "Closing Soon"
                      ? "bg-warning/20 text-warning"
                      : "bg-success/20 text-success"
                  }`}
                >
                  {event.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors" title="Add to favorites">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors" title="Share">
                    <Share2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Calendar */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Event Calendar</h3>
        <div className="bg-muted/30 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">Interactive calendar view coming soon</p>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 font-semibold text-foreground">
                {day}
              </div>
            ))}
          </div>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View Full Calendar
          </button>
        </div>
      </div>

      {/* Event Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Events Attended</p>
          <p className="text-2xl font-bold text-foreground">8</p>
          <p className="text-xs text-muted-foreground">This semester</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <Ticket className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Registrations</p>
          <p className="text-2xl font-bold text-foreground">6</p>
          <p className="text-xs text-success">3 upcoming events</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-warning/10">
              <Star className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Certificates</p>
          <p className="text-2xl font-bold text-foreground">4</p>
          <p className="text-xs text-muted-foreground">Earned</p>
        </div>
      </div>

      {/* Clubs Directory */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Student Clubs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Coding Club", members: 156, logo: "💻" },
            { name: "Robotics Society", members: 89, logo: "🤖" },
            { name: "Photography Club", members: 124, logo: "📷" },
            { name: "Debate Society", members: 67, logo: "🎤" },
            { name: "Dance Club", members: 98, logo: "💃" },
            { name: "Entrepreneurship Club", members: 145, logo: "🚀" },
          ].map((club, idx) => (
            <button
              key={idx}
              className="p-4 rounded-lg border border-border bg-muted/30 hover:border-primary hover:bg-primary/5 transition-all text-left"
            >
              <div className="text-3xl mb-2">{club.logo}</div>
              <p className="font-semibold text-foreground">{club.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{club.members} members</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
