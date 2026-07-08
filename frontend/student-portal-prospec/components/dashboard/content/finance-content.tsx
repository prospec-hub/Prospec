"use client";

import {
  DollarSign,
  CreditCard,
  Download,
  AlertCircle,
  CheckCircle,
  TrendingDown,
  Calendar,
  FileText,
} from "lucide-react";

const feeBreakdown = [
  {
    category: "Tuition Fee",
    amount: 50000,
    paid: 50000,
    dueDate: "2024-01-15",
    status: "paid",
  },
  {
    category: "Library Fee",
    amount: 2000,
    paid: 2000,
    dueDate: "2024-01-15",
    status: "paid",
  },
  {
    category: "Lab Fee",
    amount: 5000,
    paid: 5000,
    dueDate: "2024-01-15",
    status: "paid",
  },
  {
    category: "Sports Fee",
    amount: 1500,
    paid: 1500,
    dueDate: "2024-01-15",
    status: "paid",
  },
  {
    category: "Hostel Fee (Optional)",
    amount: 30000,
    paid: 30000,
    dueDate: "2024-02-15",
    status: "paid",
  },
];

const paymentHistory = [
  {
    date: "Jan 10, 2025",
    description: "Tuition Fee Payment",
    amount: 50000,
    method: "Online Transfer",
    receipt: "RCP-2025-001",
  },
  {
    date: "Jan 10, 2025",
    description: "Library & Lab Fees",
    amount: 7000,
    method: "Credit Card",
    receipt: "RCP-2025-002",
  },
  {
    date: "Jan 10, 2025",
    description: "Sports Fee",
    amount: 1500,
    method: "Online Transfer",
    receipt: "RCP-2025-003",
  },
  {
    date: "Jan 10, 2025",
    description: "Hostel Accommodation",
    amount: 30000,
    method: "Cheque",
    receipt: "RCP-2025-004",
  },
];

const scholarships = [
  {
    name: "Merit Scholarship",
    amount: 10000,
    status: "Active",
    validUntil: "2025-12-31",
  },
  {
    name: "Need-based Grant",
    amount: 5000,
    status: "Pending",
    validUntil: "2025-06-30",
  },
];

export function FinanceContent() {
  const totalFees = feeBreakdown.reduce((sum, item) => sum + item.amount, 0);
  const totalPaid = feeBreakdown.reduce((sum, item) => sum + item.paid, 0);
  const totalPending = totalFees - totalPaid;

  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      {/* Page Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Fees & Finance</h2>
        <p className="text-muted-foreground">
          Manage your fees, payments, and financial aid
        </p>
      </div>

      {/* Finance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Total Fees</p>
          <p className="text-2xl font-bold text-foreground mb-2">₹{totalFees.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Current Semester</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-success/10">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Amount Paid</p>
          <p className="text-2xl font-bold text-foreground mb-2">₹{totalPaid.toLocaleString()}</p>
          <p className="text-xs text-success">100% Complete</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-warning/10">
              <AlertCircle className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Amount Pending</p>
          <p className="text-2xl font-bold text-foreground mb-2">₹{totalPending.toLocaleString()}</p>
          <p className="text-xs text-success">All Paid</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border card-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <TrendingDown className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Active Scholarships</p>
          <p className="text-2xl font-bold text-foreground mb-2">₹{scholarships.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">2 Active</p>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Fee Breakdown</h3>
        <div className="space-y-3">
          {feeBreakdown.map((fee, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-foreground">{fee.category}</p>
                <p className="text-xs text-muted-foreground">Due: {fee.dueDate}</p>
              </div>
              <div className="text-right mr-4">
                <p className="font-semibold text-foreground">₹{fee.amount.toLocaleString()}</p>
                <p className="text-xs text-success">Paid: ₹{fee.paid.toLocaleString()}</p>
              </div>
              <span className="px-3 py-1 bg-success/20 text-success rounded-full text-xs font-semibold">
                Paid
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Payment History</h3>
          <div className="space-y-3">
            {paymentHistory.map((payment, idx) => (
              <div key={idx} className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{payment.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{payment.date}</p>
                  <p className="text-xs text-muted-foreground">Method: {payment.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">₹{payment.amount.toLocaleString()}</p>
                  <button className="text-xs text-primary hover:underline mt-1 flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarships & Grants */}
        <div className="bg-card rounded-xl p-6 border border-border card-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Scholarships & Financial Aid
          </h3>
          <div className="space-y-3">
            {scholarships.map((scholarship, idx) => (
              <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{scholarship.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Valid until: {scholarship.validUntil}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      scholarship.status === "Active"
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {scholarship.status}
                  </span>
                </div>
                <p className="text-lg font-semibold text-primary">
                  ₹{scholarship.amount.toLocaleString()}
                </p>
              </div>
            ))}
            <button className="w-full mt-4 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Apply for More Scholarships
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl p-6 border border-border card-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Make Payment</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">View Invoice</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <Download className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Download Receipt</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Fee Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
}
