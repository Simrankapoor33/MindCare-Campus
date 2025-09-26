"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
)

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const BellIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </svg>
)

interface Alert {
  id: string
  studentId: string
  studentName: string
  issue: string
  description: string
  severity: "low" | "medium" | "high" | "critical"
  timestamp: string
  department: string
  status: "new" | "in-progress" | "resolved" | "dismissed"
  assignedTo?: string
}

const mockAlerts: Alert[] = [
  {
    id: "ALT001",
    studentId: "STU2847",
    studentName: "Anonymous Student",
    issue: "Multiple missed therapy sessions",
    description: "Student has missed 3 consecutive therapy appointments without notice. Last session was 2 weeks ago.",
    severity: "high",
    timestamp: "2 hours ago",
    department: "Engineering",
    status: "new",
  },
  {
    id: "ALT002",
    studentId: "STU1923",
    studentName: "Anonymous Student",
    issue: "Concerning community posts",
    description: "AI detected potentially harmful language in recent community forum posts. Requires human review.",
    severity: "critical",
    timestamp: "4 hours ago",
    department: "Medicine",
    status: "in-progress",
    assignedTo: "Dr. Sarah Johnson",
  },
  {
    id: "ALT003",
    studentId: "STU3456",
    studentName: "Anonymous Student",
    issue: "Low wellness score trend",
    description: "Wellness score has declined from 78% to 45% over the past 2 weeks. No recent therapy sessions.",
    severity: "medium",
    timestamp: "6 hours ago",
    department: "Business",
    status: "new",
  },
  {
    id: "ALT004",
    studentId: "STU7890",
    studentName: "Anonymous Student",
    issue: "Emergency keyword detected",
    description: "AI assistant detected emergency-related keywords in chat conversation. Immediate attention required.",
    severity: "critical",
    timestamp: "1 day ago",
    department: "Computer Science",
    status: "resolved",
    assignedTo: "Crisis Team",
  },
  {
    id: "ALT005",
    studentId: "STU5678",
    studentName: "Anonymous Student",
    issue: "Prolonged inactivity",
    description: "Student has not accessed the platform for 10 days. Last wellness check-in was 2 weeks ago.",
    severity: "medium",
    timestamp: "2 days ago",
    department: "Arts",
    status: "dismissed",
  },
]

export default function AlertsPage() {
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-500 bg-red-500/10 border-red-500"
      case "high":
        return "text-orange-500 bg-orange-500/10 border-orange-500"
      case "medium":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500"
      case "low":
        return "text-green-500 bg-green-500/10 border-green-500"
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "text-blue-400 bg-blue-400/10 border-blue-400"
      case "in-progress":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      case "resolved":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "dismissed":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangleIcon className="w-5 h-5 text-red-500" />
      case "high":
        return <AlertTriangleIcon className="w-5 h-5 text-orange-500" />
      case "medium":
        return <AlertTriangleIcon className="w-5 h-5 text-yellow-500" />
      case "low":
        return <BellIcon className="w-5 h-5 text-green-500" />
      default:
        return <BellIcon className="w-5 h-5 text-gray-500" />
    }
  }

  const filteredAlerts = mockAlerts.filter((alert) => {
    const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity
    const matchesStatus = selectedStatus === "all" || alert.status === selectedStatus
    const matchesDepartment = selectedDepartment === "all" || alert.department === selectedDepartment

    return matchesSeverity && matchesStatus && matchesDepartment
  })

  const alertCounts = {
    total: mockAlerts.length,
    new: mockAlerts.filter((a) => a.status === "new").length,
    critical: mockAlerts.filter((a) => a.severity === "critical").length,
    inProgress: mockAlerts.filter((a) => a.status === "in-progress").length,
  }

  return (
    <div className="space-y-6">
      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <BellIcon className="w-4 h-4" />
              Total Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{alertCounts.total}</div>
            <p className="text-purple-200 text-sm">All time</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <AlertTriangleIcon className="w-4 h-4 text-blue-400" />
              New Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{alertCounts.new}</div>
            <p className="text-purple-200 text-sm">Require attention</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <AlertTriangleIcon className="w-4 h-4 text-red-400" />
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">{alertCounts.critical}</div>
            <p className="text-purple-200 text-sm">Immediate action</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <ClockIcon className="w-4 h-4 text-yellow-400" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{alertCounts.inProgress}</div>
            <p className="text-purple-200 text-sm">Being handled</p>
          </CardContent>
        </Card>
      </div>

      {/* Alert Management */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Alert Management</CardTitle>
          <CardDescription className="text-purple-200">
            Monitor and respond to student mental health alerts
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="dismissed">Dismissed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Medicine">Medicine</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Alert List */}
          <div className="space-y-4">
            {filteredAlerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(alert.severity)}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-medium">{alert.issue}</h3>
                        <Badge className={`${getSeverityColor(alert.severity)} border text-xs`}>{alert.severity}</Badge>
                        <Badge className={`${getStatusColor(alert.status)} border text-xs`}>{alert.status}</Badge>
                      </div>
                      <p className="text-purple-200 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center gap-4 text-xs text-purple-300">
                        <span>Student ID: {alert.studentId}</span>
                        <span>Department: {alert.department}</span>
                        <span>Time: {alert.timestamp}</span>
                        {alert.assignedTo && <span>Assigned to: {alert.assignedTo}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <EyeIcon />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <MessageCircleIcon />
                    </Button>
                    {alert.severity === "critical" && (
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <PhoneIcon />
                      </Button>
                    )}
                    {alert.status === "new" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircleIcon />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
