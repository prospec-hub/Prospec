"use client";

import {
  Bus,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Navigation,
  Users,
  Phone,
  Calendar,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const activeBuses = [
  {
    id: "BUS-001",
    routeName: "Route A - Campus to City Center",
    busNumber: "KB-01-BA-1234",
    driver: "Raj Kumar",
    phone: "+91-9876543210",
    currentLocation: "Near Science Block",
    nextStop: "Main Gate",
    eta: "5 mins",
    passengers: "32/45",
    status: "On Time",
  },
  {
    id: "BUS-002",
    routeName: "Route B - Hostel to Campus",
    busNumber: "KB-01-BA-1235",
    driver: "Priya Sharma",
    phone: "+91-9876543211",
    currentLocation: "Hostel Gate",
    nextStop: "Library",
    eta: "12 mins",
    passengers: "28/45",
    status: "On Time",
  },
  {
    id: "BUS-003",
    routeName: "Route C - City Center to Campus",
    busNumber: "KB-01-BA-1236",
    driver: "Vikram Singh",
    phone: "+91-9876543212",
    currentLocation: "MG Road",
    nextStop: "College Gate",
    eta: "18 mins",
    passengers: "40/45",
    status: "Delayed",
  },
];

const routes = [
  {
    id: "RT-001",
    name: "Route A - Campus to City Center",
    pickupPoints: ["Main Gate", "Science Block", "Library", "Sports Complex"],
    dropPoints: ["City Center", "Railway Station", "Bus Stand"],
    frequency: "Every 30 mins",
    fare: "₹20",
  },
  {
    id: "RT-002",
    name: "Route B - Hostel to Campus",
    pickupPoints: ["Hostel Gate", "Mess", "Sports Block"],
    dropPoints: ["Main Gate", "Admin Block", "Library"],
    frequency: "Every 20 mins",
    fare: "₹10",
  },
];

const passDetails = {
  passType: "Semester Pass",
  validFrom: "Jan 1, 2025",
  validUpto: "Jun 30, 2025",
  routes: ["Route A", "Route B", "Route C"],
  totalTrips: "120",
  tripsUsed: "45",
  status: "Active",
};

const transportStats = [
  { label: "Buses in Fleet", value: "12", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Active Routes", value: "6", color: "bg-success/10", textColor: "text-success" },
  { label: "On-Time Avg", value: "94%", color: "bg-primary/10", textColor: "text-primary" },
  { label: "Daily Passengers", value: "450+", color: "bg-warning/10", textColor: "text-warning" },
];

export function TransportContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Transport Services</h2>
        <p className="text-muted-foreground">
          Real-time bus tracking, routes, and passes
        </p>
      </div>

      {/* Transport Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {transportStats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded-xl p-5 border border-border card-shadow`}>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Active Buses - Real-time Tracking */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Live Bus Tracking</h3>
        <div className="space-y-4">
          {activeBuses.map((bus) => (
            <div key={bus.id} className="p-5 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{bus.routeName}</h4>
                  <p className="text-sm text-muted-foreground">Bus #{bus.busNumber}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    bus.status === "On Time"
                      ? "bg-success/20 text-success"
                      : "bg-warning/20 text-warning"
                  }`}
                >
                  {bus.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Current</p>
                    <p className="font-medium text-foreground">{bus.currentLocation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Navigation className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Next Stop</p>
                    <p className="font-medium text-foreground">{bus.nextStop}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">ETA</p>
                    <p className="font-medium text-foreground">{bus.eta}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Capacity</p>
                    <p className="font-medium text-foreground">{bus.passengers}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{bus.driver}</p>
                  <a href={`tel:${bus.phone}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    Call
                  </a>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Track on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Transport Pass */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/20 card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">My Transport Pass</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-card rounded-lg p-6 border border-border mb-4">
              <p className="text-sm text-muted-foreground mb-2">Pass Type</p>
              <p className="text-2xl font-bold text-foreground mb-4">{passDetails.passType}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Valid From</span>
                  <span className="font-medium text-foreground">{passDetails.validFrom}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Valid Upto</span>
                  <span className="font-medium text-foreground">{passDetails.validUpto}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="text-sm font-semibold px-2 py-1 bg-success/20 text-success rounded">Active</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Trip Usage</p>
              <p className="text-3xl font-bold text-foreground mb-2">
                {passDetails.tripsUsed}/{passDetails.totalTrips}
              </p>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-4">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${(passDetails.tripsUsed / passDetails.totalTrips) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">Trips Remaining: {passDetails.totalTrips - passDetails.tripsUsed}</p>
              <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Renew Pass
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Routes Information */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Available Routes</h3>
        <div className="space-y-4">
          {routes.map((route) => (
            <div key={route.id} className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-3">{route.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-2">Pickup Points</p>
                  <ul className="space-y-1">
                    {route.pickupPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-2">Drop Points</p>
                  <ul className="space-y-1">
                    {route.dropPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-success" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 mt-3 pt-3 border-t border-border">
                <span className="text-xs"><strong>Frequency:</strong> {route.frequency}</span>
                <span className="text-xs"><strong>Fare:</strong> {route.fare}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts & Notifications */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Service Alerts</h3>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Route A Delayed</p>
              <p className="text-sm text-muted-foreground mt-1">Route A experiencing 10-15 mins delay due to traffic</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Pass Renewal Reminder</p>
              <p className="text-sm text-muted-foreground mt-1">Your transport pass expires in 30 days. Renew now to avoid interruption</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Transport Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Transport Office</p>
            <p className="text-xs text-muted-foreground mb-2">Location: Admin Block, Ground Floor</p>
            <p className="text-sm font-medium text-foreground">+91-080-1234-5678</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Emergency Support</p>
            <p className="text-xs text-muted-foreground mb-2">24/7 assistance for transport emergencies</p>
            <p className="text-sm font-medium text-foreground">+91-9876-543-2109</p>
          </div>
        </div>
      </div>
    </div>
  );
}
