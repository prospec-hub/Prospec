"use client";

import {
  Home,
  Users,
  Utensils,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  DollarSign,
  Wifi,
  Zap,
  Droplet,
} from "lucide-react";

const roomDetails = {
  hostel: "Boys Hostel A",
  block: "C",
  room: "305",
  floor: "3rd",
  capacity: 2,
  currentOccupants: 2,
  checkInDate: "June 15, 2024",
  roomType: "Double Occupancy",
  status: "Active",
};

const messMenu = [
  {
    day: "Monday",
    breakfast: "Idli, Sambar, Chutney",
    lunch: "Rice, Dal Fry, Chicken Curry, Vegetables",
    dinner: "Chapati, Aloo Gobi, Dhal",
  },
  {
    day: "Tuesday",
    breakfast: "Dosa, Chutney",
    lunch: "Rice, Curd Rice, Vegetable Biryani",
    dinner: "Chapati, Paneer Butter Masala, Salad",
  },
  {
    day: "Wednesday",
    breakfast: "Poha, Jalebi",
    lunch: "Rice, Sambar, Rasam, Fish Curry",
    dinner: "Puri, Chickpea Masala, Vegetables",
  },
  {
    day: "Thursday",
    breakfast: "Upma, Chutney",
    lunch: "Rice, Dal, Butter Chicken, Vegetables",
    dinner: "Chapati, Tandoori Paneer, Cucumber Salad",
  },
];

const facilities = [
  { name: "WiFi Access", status: "Active", icon: Wifi },
  { name: "Hot Water", status: "24/7", icon: Droplet },
  { name: "Electricity Backup", status: "Available", icon: Zap },
  { name: "Laundry Service", status: "Mon, Wed, Fri", icon: Utensils },
  { name: "Common Room", status: "Open 8 AM - 10 PM", icon: Users },
  { name: "Sports Ground", status: "Available", icon: CheckCircle },
];

const complaints = [
  {
    id: "COMP-001",
    issue: "Water supply issue in bathroom",
    date: "Jan 28, 2025",
    status: "Resolved",
    priority: "High",
  },
  {
    id: "COMP-002",
    issue: "WiFi connectivity problems",
    date: "Jan 29, 2025",
    status: "In Progress",
    priority: "Medium",
  },
];

export function HostelContent() {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Hostel Management</h2>
        <p className="text-muted-foreground">
          Manage your accommodation and access hostel facilities
        </p>
      </div>

      {/* Room Details Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Room Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-muted-foreground">Hostel</span>
              <span className="font-semibold text-foreground">{roomDetails.hostel}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-muted-foreground">Block</span>
              <span className="font-semibold text-foreground">{roomDetails.block}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-muted-foreground">Room Number</span>
              <span className="font-semibold text-foreground">{roomDetails.room}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-muted-foreground">Floor</span>
              <span className="font-semibold text-foreground">{roomDetails.floor}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-muted-foreground">Room Type</span>
              <span className="font-semibold text-foreground">{roomDetails.roomType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/20 text-success">
                {roomDetails.status}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Room Occupancy</span>
              </div>
              <span className="font-semibold text-foreground">
                {roomDetails.currentOccupants}/{roomDetails.capacity}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Check-in Date</span>
              </div>
              <span className="font-semibold text-foreground">{roomDetails.checkInDate}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Dues</span>
              </div>
              <span className="font-semibold text-success">Paid</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Warden Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">warden@hostel.edu</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Office Hours</p>
              <p className="font-semibold text-foreground">6 PM - 8 PM Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Available Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{facility.name}</p>
                    <p className="text-xs text-muted-foreground">{facility.status}</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mess Menu */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Mess Menu</h3>
        <div className="space-y-4">
          {messMenu.map((day) => (
            <div key={day.day} className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-2">{day.day}</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Breakfast</p>
                  <p className="text-foreground">{day.breakfast}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Lunch</p>
                  <p className="text-foreground">{day.lunch}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Dinner</p>
                  <p className="text-foreground">{day.dinner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complaints */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Complaints</h3>
        <div className="space-y-3">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="flex items-start justify-between p-4 rounded-lg bg-muted/30 border border-border"
            >
              <div>
                <h4 className="font-semibold text-foreground">{complaint.issue}</h4>
                <p className="text-xs text-muted-foreground">{complaint.date}</p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-1 ${
                    complaint.status === "Resolved"
                      ? "bg-success/20 text-success"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {complaint.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full px-4 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
          File New Complaint
        </button>
      </div>
    </div>
  );
}
