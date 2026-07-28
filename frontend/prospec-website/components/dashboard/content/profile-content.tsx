"use client";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Edit,
  Save,
  X,
  FileText,
  Shield,
} from "lucide-react";
import { useState } from "react";

export function ProfileContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    dob: "1999-05-15",
    address: "123 Student St, University City, State 12345",
    rollNumber: "CS21001",
    department: "Computer Science",
    batch: "2021-2025",
    cgpa: "3.78",
    enrollmentDate: "August 2021",
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Profile</h2>
          <p className="text-muted-foreground">
            Manage your personal and academic information
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Avatar and Basic Info */}
      <div className="bg-card rounded-xl p-8 border border-border card-shadow">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {profileData.firstName} {profileData.lastName}
            </h3>
            <p className="text-muted-foreground mb-4">
              Roll Number: <span className="text-foreground font-medium">{profileData.rollNumber}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Department</p>
                <p className="font-semibold text-foreground">{profileData.department}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Batch</p>
                <p className="font-semibold text-foreground">{profileData.batch}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">CGPA</p>
                <p className="font-semibold text-foreground">{profileData.cgpa}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
          {!isEditing ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">{profileData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">{profileData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="text-foreground font-medium">{profileData.address}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={editData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Address</label>
                <textarea
                  name="address"
                  value={editData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={2}
                />
              </div>
            </div>
          )}
        </div>

        {/* Personal Information */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
          {!isEditing ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Full Name</p>
                  <p className="text-foreground font-medium">
                    {profileData.firstName} {profileData.lastName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Date of Birth</p>
                  <p className="text-foreground font-medium">{profileData.dob}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Enrollment Date</p>
                  <p className="text-foreground font-medium">{profileData.enrollmentDate}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={editData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={editData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Academic Information */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Roll Number</p>
            <p className="text-lg font-semibold text-foreground">{profileData.rollNumber}</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Department</p>
            <p className="text-lg font-semibold text-foreground">{profileData.department}</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Batch</p>
            <p className="text-lg font-semibold text-foreground">{profileData.batch}</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">CGPA</p>
            <p className="text-lg font-semibold text-foreground">{profileData.cgpa}</p>
          </div>
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Security & Privacy
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <span className="text-foreground font-medium">Change Password</span>
            <span className="text-muted-foreground">&rarr;</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <span className="text-foreground font-medium">Two-Factor Authentication</span>
            <span className="px-2 py-1 bg-warning/20 text-warning text-xs font-semibold rounded">Not Enabled</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <span className="text-foreground font-medium">Privacy Settings</span>
            <span className="text-muted-foreground">&rarr;</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <span className="text-foreground font-medium">Manage Sessions</span>
            <span className="text-muted-foreground">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Edit Actions */}
      {isEditing && (
        <div className="flex gap-3 sticky bottom-8">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-success text-white rounded-lg font-medium hover:bg-success/90 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 px-6 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
