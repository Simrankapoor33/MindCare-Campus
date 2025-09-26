"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const MessageCircleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
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

interface Student {
  id: string
  name: string
  email: string
  department: string
  year: string
  wellnessScore: number
  lastActive: string
  sessionsCompleted: number
  riskLevel: "low" | "medium" | "high"
  status: "active" | "inactive" | "at-risk"
  avatar?: string
}

const mockStudents: Student[] = [
  {
    id: "STU001",
    name: "Priya Sharma",
    email: "priya.sharma@university.edu",
    department: "Computer Science",
    year: "3rd Year",
    wellnessScore: 85,
    lastActive: "2 hours ago",
    sessionsCompleted: 12,
    riskLevel: "low",
    status: "active",
  },
  {
    id: "STU002",
    name: "Raj Patel",
    email: "raj.patel@university.edu",
    department: "Engineering",
    year: "2nd Year",
    wellnessScore: 45,
    lastActive: "1 day ago",
    sessionsCompleted: 3,
    riskLevel: "high",
    status: "at-risk",
  },
  {
    id: "STU003",
    name: "Meera Reddy",
    email: "meera.reddy@university.edu",
    department: "Medicine",
    year: "4th Year",
    wellnessScore: 72,
    lastActive: "5 hours ago",
    sessionsCompleted: 8,
    riskLevel: "medium",
    status: "active",
  },
  {
    id: "STU004",
    name: "Arjun Singh",
    email: "arjun.singh@university.edu",
    department: "Business",
    year: "1st Year",
    wellnessScore: 68,
    lastActive: "3 days ago",
    sessionsCompleted: 5,
    riskLevel: "medium",
    status: "inactive",
  },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("all")

  const getRiskColor = (level: string) => {
    switch (level) {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "inactive":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      case "at-risk":
        return "text-red-400 bg-red-400/10 border-red-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || student.department === selectedDepartment
    const matchesRiskLevel = selectedRiskLevel === "all" || student.riskLevel === selectedRiskLevel

    return matchesSearch && matchesDepartment && matchesRiskLevel
  })

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <UsersIcon />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,847</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +12% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <HeartIcon />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,923</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +8% this month
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
            <div className="text-2xl font-bold text-red-400">127</div>
            <p className="text-red-400 text-sm flex items-center gap-1">
              <TrendingDownIcon />
              -5% this month
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
            <div className="text-2xl font-bold text-white">73%</div>
            <Progress value={73} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Student Management</CardTitle>
          <CardDescription className="text-purple-200">
            Search, filter, and manage student mental health profiles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon />
              <Input
                placeholder="Search students by name, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-300"
              />
            </div>
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
              </SelectContent>
            </Select>
            <Select value={selectedRiskLevel} onValueChange={setSelectedRiskLevel}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-32">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <DownloadIcon />
              <span className="ml-2">Export</span>
            </Button>
          </div>

          {/* Student List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={student.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-purple-600 text-white">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-medium">{student.name}</h3>
                      <p className="text-purple-200 text-sm">{student.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-purple-200 border-purple-300 text-xs">
                          {student.department}
                        </Badge>
                        <Badge variant="outline" className="text-purple-200 border-purple-300 text-xs">
                          {student.year}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-white font-medium">{student.wellnessScore}%</div>
                      <p className="text-purple-200 text-xs">Wellness Score</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{student.sessionsCompleted}</div>
                      <p className="text-purple-200 text-xs">Sessions</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={`${getRiskColor(student.riskLevel)} border text-xs`}>
                        {student.riskLevel} risk
                      </Badge>
                      <Badge className={`${getStatusColor(student.status)} border text-xs`}>{student.status}</Badge>
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
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Last Active: {student.lastActive}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-200">Wellness Progress:</span>
                      <Progress value={student.wellnessScore} className="h-2 w-24" />
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
