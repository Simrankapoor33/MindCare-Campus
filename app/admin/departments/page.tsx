"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
)

const TrendingDownIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 6c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

interface Department {
  id: string
  name: string
  head: string
  email: string
  totalStudents: number
  activeStudents: number
  atRiskStudents: number
  avgWellnessScore: number
  therapistsAssigned: number
  sessionsThisMonth: number
  budget: number
  status: "active" | "inactive" | "under-review"
  priority: "high" | "medium" | "low"
  lastUpdated: string
}

const mockDepartments: Department[] = [
  {
    id: "DEPT001",
    name: "Computer Science",
    head: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@university.edu",
    totalStudents: 847,
    activeStudents: 623,
    atRiskStudents: 34,
    avgWellnessScore: 78,
    therapistsAssigned: 8,
    sessionsThisMonth: 156,
    budget: 125000,
    status: "active",
    priority: "high",
    lastUpdated: "2 hours ago",
  },
  {
    id: "DEPT002",
    name: "Engineering",
    head: "Dr. Priya Mehta",
    email: "priya.mehta@university.edu",
    totalStudents: 692,
    activeStudents: 445,
    atRiskStudents: 28,
    avgWellnessScore: 72,
    therapistsAssigned: 6,
    sessionsThisMonth: 134,
    budget: 98000,
    status: "active",
    priority: "high",
    lastUpdated: "4 hours ago",
  },
  {
    id: "DEPT003",
    name: "Medicine",
    head: "Dr. Arun Gupta",
    email: "arun.gupta@university.edu",
    totalStudents: 534,
    activeStudents: 412,
    atRiskStudents: 45,
    avgWellnessScore: 65,
    therapistsAssigned: 12,
    sessionsThisMonth: 198,
    budget: 180000,
    status: "under-review",
    priority: "high",
    lastUpdated: "1 day ago",
  },
  {
    id: "DEPT004",
    name: "Business Administration",
    head: "Dr. Sunita Rao",
    email: "sunita.rao@university.edu",
    totalStudents: 423,
    activeStudents: 298,
    atRiskStudents: 15,
    avgWellnessScore: 81,
    therapistsAssigned: 5,
    sessionsThisMonth: 89,
    budget: 75000,
    status: "active",
    priority: "medium",
    lastUpdated: "6 hours ago",
  },
  {
    id: "DEPT005",
    name: "Liberal Arts",
    head: "Dr. Kavita Sharma",
    email: "kavita.sharma@university.edu",
    totalStudents: 351,
    activeStudents: 245,
    atRiskStudents: 12,
    avgWellnessScore: 84,
    therapistsAssigned: 4,
    sessionsThisMonth: 67,
    budget: 62000,
    status: "active",
    priority: "low",
    lastUpdated: "3 hours ago",
  },
]

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "inactive":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      case "under-review":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400 bg-red-400/10 border-red-400"
      case "medium":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      case "low":
        return "text-green-400 bg-green-400/10 border-green-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const filteredDepartments = mockDepartments.filter((dept) => {
    const matchesSearch =
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || dept.status === selectedStatus
    const matchesPriority = selectedPriority === "all" || dept.priority === selectedPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  const totalStudents = mockDepartments.reduce((sum, dept) => sum + dept.totalStudents, 0)
  const totalActiveStudents = mockDepartments.reduce((sum, dept) => sum + dept.activeStudents, 0)
  const totalAtRiskStudents = mockDepartments.reduce((sum, dept) => sum + dept.atRiskStudents, 0)
  const avgWellnessScore = Math.round(
    mockDepartments.reduce((sum, dept) => sum + dept.avgWellnessScore, 0) / mockDepartments.length,
  )

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <BuildingIcon />
              Total Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{mockDepartments.length}</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              All active
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <UsersIcon />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{totalStudents.toLocaleString()}</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +5% this semester
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <AlertTriangleIcon />
              At-Risk Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">{totalAtRiskStudents}</div>
            <p className="text-red-400 text-sm flex items-center gap-1">
              <TrendingDownIcon />
              -8% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <HeartIcon />
              Avg Wellness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{avgWellnessScore}%</div>
            <Progress value={avgWellnessScore} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Department Management</CardTitle>
          <CardDescription className="text-purple-200">
            Monitor and manage department mental health programs and resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon />
              <Input
                placeholder="Search departments by name, head, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-300"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-32">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <DownloadIcon />
              <span className="ml-2">Export</span>
            </Button>
          </div>

          {/* Department List */}
          <div className="space-y-4">
            {filteredDepartments.map((dept) => (
              <div key={dept.id} className="p-6 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold text-lg">{dept.name}</h3>
                      <Badge className={`${getStatusColor(dept.status)} border text-xs`}>{dept.status}</Badge>
                      <Badge className={`${getPriorityColor(dept.priority)} border text-xs`}>
                        {dept.priority} priority
                      </Badge>
                    </div>
                    <p className="text-purple-200 text-sm mb-1">
                      <span className="font-medium">Department Head:</span> {dept.head}
                    </p>
                    <p className="text-purple-200 text-sm">{dept.email}</p>
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
                      <SettingsIcon />
                    </Button>
                  </div>
                </div>

                {/* Department Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-white font-semibold">{dept.totalStudents}</div>
                    <p className="text-purple-200 text-xs">Total Students</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-green-400 font-semibold">{dept.activeStudents}</div>
                    <p className="text-purple-200 text-xs">Active Students</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-red-400 font-semibold">{dept.atRiskStudents}</div>
                    <p className="text-purple-200 text-xs">At-Risk Students</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-white font-semibold">{dept.avgWellnessScore}%</div>
                    <p className="text-purple-200 text-xs">Avg Wellness</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-blue-400 font-semibold">{dept.therapistsAssigned}</div>
                    <p className="text-purple-200 text-xs">Therapists</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-purple-400 font-semibold">{dept.sessionsThisMonth}</div>
                    <p className="text-purple-200 text-xs">Sessions/Month</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-purple-200">Student Engagement</span>
                      <span className="text-white">
                        {Math.round((dept.activeStudents / dept.totalStudents) * 100)}%
                      </span>
                    </div>
                    <Progress value={(dept.activeStudents / dept.totalStudents) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-purple-200">Wellness Score</span>
                      <span className="text-white">{dept.avgWellnessScore}%</span>
                    </div>
                    <Progress value={dept.avgWellnessScore} className="h-2" />
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Last Updated: {dept.lastUpdated}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-200">Budget: ₹{dept.budget.toLocaleString()}</span>
                      <span className="text-purple-200">ID: {dept.id}</span>
                    </div>
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
