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

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
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

const UserCheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L6.5 8.84L2 13.34L3.5 14.84L6.5 11.84L10.5 13.84L17.83 6.5L20.5 9.17L22 7.67L21 9Z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

interface Therapist {
  id: string
  name: string
  email: string
  specialization: string
  experience: string
  rating: number
  activeClients: number
  totalSessions: number
  availability: "available" | "busy" | "offline"
  status: "active" | "on-leave" | "inactive"
  lastActive: string
  avatar?: string
  credentials: string[]
}

const mockTherapists: Therapist[] = [
  {
    id: "THR001",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    specialization: "Anxiety & Depression",
    experience: "8 years",
    rating: 4.9,
    activeClients: 24,
    totalSessions: 1247,
    availability: "available",
    status: "active",
    lastActive: "Online now",
    credentials: ["PhD Psychology", "Licensed Therapist", "CBT Certified"],
  },
  {
    id: "THR002",
    name: "Dr. Michael Chen",
    email: "michael.chen@university.edu",
    specialization: "Trauma & PTSD",
    experience: "12 years",
    rating: 4.8,
    activeClients: 18,
    totalSessions: 2156,
    availability: "busy",
    status: "active",
    lastActive: "2 hours ago",
    credentials: ["MD Psychiatry", "EMDR Certified", "Trauma Specialist"],
  },
  {
    id: "THR003",
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@university.edu",
    specialization: "Student Counseling",
    experience: "6 years",
    rating: 4.7,
    activeClients: 31,
    totalSessions: 892,
    availability: "available",
    status: "active",
    lastActive: "1 hour ago",
    credentials: ["MA Counseling", "Student Affairs Specialist", "Group Therapy"],
  },
  {
    id: "THR004",
    name: "Dr. James Wilson",
    email: "james.wilson@university.edu",
    specialization: "Addiction Recovery",
    experience: "15 years",
    rating: 4.6,
    activeClients: 12,
    totalSessions: 3421,
    availability: "offline",
    status: "on-leave",
    lastActive: "3 days ago",
    credentials: ["PhD Clinical Psychology", "Addiction Counselor", "SMART Recovery"],
  },
]

export default function TherapistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "busy":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      case "offline":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "on-leave":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      case "inactive":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const filteredTherapists = mockTherapists.filter((therapist) => {
    const matchesSearch =
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialization =
      selectedSpecialization === "all" || therapist.specialization === selectedSpecialization
    const matchesAvailability = selectedAvailability === "all" || therapist.availability === selectedAvailability

    return matchesSearch && matchesSpecialization && matchesAvailability
  })

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <UserCheckIcon />
              Total Therapists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +3 this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <HeartIcon />
              Available Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">23</div>
            <p className="text-purple-200 text-sm">Ready for sessions</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <CalendarIcon />
              Sessions Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +12% vs yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <StarIcon />
              Avg Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4.7</div>
            <Progress value={94} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Therapist Management</CardTitle>
          <CardDescription className="text-purple-200">
            Manage therapist profiles, schedules, and client assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon />
              <Input
                placeholder="Search therapists by name, email, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-300"
              />
            </div>
            <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-48">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specializations</SelectItem>
                <SelectItem value="Anxiety & Depression">Anxiety & Depression</SelectItem>
                <SelectItem value="Trauma & PTSD">Trauma & PTSD</SelectItem>
                <SelectItem value="Student Counseling">Student Counseling</SelectItem>
                <SelectItem value="Addiction Recovery">Addiction Recovery</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-32">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <DownloadIcon />
              <span className="ml-2">Export</span>
            </Button>
          </div>

          {/* Therapist List */}
          <div className="space-y-4">
            {filteredTherapists.map((therapist) => (
              <div key={therapist.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={therapist.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {therapist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-medium">{therapist.name}</h3>
                      <p className="text-purple-200 text-sm">{therapist.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-blue-200 border-blue-300 text-xs">
                          {therapist.specialization}
                        </Badge>
                        <Badge variant="outline" className="text-purple-200 border-purple-300 text-xs">
                          {therapist.experience}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-white font-medium flex items-center gap-1">
                        <StarIcon />
                        {therapist.rating}
                      </div>
                      <p className="text-purple-200 text-xs">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{therapist.activeClients}</div>
                      <p className="text-purple-200 text-xs">Active Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{therapist.totalSessions}</div>
                      <p className="text-purple-200 text-xs">Total Sessions</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={`${getAvailabilityColor(therapist.availability)} border text-xs`}>
                        {therapist.availability}
                      </Badge>
                      <Badge className={`${getStatusColor(therapist.status)} border text-xs`}>{therapist.status}</Badge>
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <CalendarIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Last Active: {therapist.lastActive}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-200">Credentials:</span>
                      <div className="flex gap-1">
                        {therapist.credentials.slice(0, 2).map((credential, index) => (
                          <Badge key={index} variant="outline" className="text-xs text-green-200 border-green-300">
                            {credential}
                          </Badge>
                        ))}
                        {therapist.credentials.length > 2 && (
                          <Badge variant="outline" className="text-xs text-purple-200 border-purple-300">
                            +{therapist.credentials.length - 2} more
                          </Badge>
                        )}
                      </div>
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
