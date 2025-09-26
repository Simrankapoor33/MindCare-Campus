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

const FileTextIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z" />
  </svg>
)

const BrainIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.33 12.91c.09-.09.15-.2.15-.33s-.06-.24-.15-.33L15.88 6.8c-.09-.09-.2-.15-.33-.15s-.24.06-.33.15l-5.45 5.45c-.09.09-.15.2-.15.33s.06.24.15.33l5.45 5.45c.09.09.2.15.33.15s.24-.06.33-.15l5.45-5.45z" />
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

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
)

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

interface Assessment {
  id: string
  title: string
  type: "screening" | "diagnostic" | "progress" | "risk"
  category: string
  completions: number
  averageScore: number
  lastUpdated: string
  status: "active" | "draft" | "archived"
  duration: string
  questions: number
  riskLevel: "low" | "medium" | "high"
}

const mockAssessments: Assessment[] = [
  {
    id: "ASS001",
    title: "PHQ-9 Depression Screening",
    type: "screening",
    category: "Depression",
    completions: 1247,
    averageScore: 8.3,
    lastUpdated: "2 days ago",
    status: "active",
    duration: "5-10 min",
    questions: 9,
    riskLevel: "medium",
  },
  {
    id: "ASS002",
    title: "GAD-7 Anxiety Assessment",
    type: "screening",
    category: "Anxiety",
    completions: 892,
    averageScore: 6.7,
    lastUpdated: "1 day ago",
    status: "active",
    duration: "3-5 min",
    questions: 7,
    riskLevel: "low",
  },
  {
    id: "ASS003",
    title: "Stress Level Evaluation",
    type: "progress",
    category: "Stress Management",
    completions: 634,
    averageScore: 12.4,
    lastUpdated: "3 hours ago",
    status: "active",
    duration: "10-15 min",
    questions: 15,
    riskLevel: "medium",
  },
  {
    id: "ASS004",
    title: "Suicide Risk Assessment",
    type: "risk",
    category: "Crisis Intervention",
    completions: 89,
    averageScore: 3.2,
    lastUpdated: "1 hour ago",
    status: "active",
    duration: "15-20 min",
    questions: 12,
    riskLevel: "high",
  },
  {
    id: "ASS005",
    title: "Sleep Quality Index",
    type: "diagnostic",
    category: "Sleep Disorders",
    completions: 456,
    averageScore: 9.8,
    lastUpdated: "5 days ago",
    status: "active",
    duration: "8-12 min",
    questions: 19,
    riskLevel: "low",
  },
  {
    id: "ASS006",
    title: "Academic Stress Survey",
    type: "progress",
    category: "Academic Support",
    completions: 723,
    averageScore: 15.6,
    lastUpdated: "1 week ago",
    status: "draft",
    duration: "12-18 min",
    questions: 24,
    riskLevel: "medium",
  },
]

export default function AssessmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const getTypeColor = (type: string) => {
    switch (type) {
      case "screening":
        return "text-blue-400 bg-blue-400/10 border-blue-400"
      case "diagnostic":
        return "text-purple-400 bg-purple-400/10 border-purple-400"
      case "progress":
        return "text-green-400 bg-green-400/10 border-green-400"
      case "risk":
        return "text-red-400 bg-red-400/10 border-red-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

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
      case "draft":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400"
      case "archived":
        return "text-gray-400 bg-gray-400/10 border-gray-400"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400"
    }
  }

  const filteredAssessments = mockAssessments.filter((assessment) => {
    const matchesSearch =
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || assessment.type === selectedType
    const matchesCategory = selectedCategory === "all" || assessment.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || assessment.status === selectedStatus

    return matchesSearch && matchesType && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <FileTextIcon />
              Total Assessments
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
              <ClipboardCheckIcon />
              Completions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4,041</div>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUpIcon />
              +18% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <BrainIcon />
              High Risk Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">89</div>
            <p className="text-red-400 text-sm flex items-center gap-1">
              <TrendingDownIcon />
              -12% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <CalendarIcon />
              Avg Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">78%</div>
            <Progress value={78} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Assessment Management */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Assessment Management</CardTitle>
              <CardDescription className="text-purple-200">
                Manage mental health assessments, screenings, and evaluation tools
              </CardDescription>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <PlusIcon />
              <span className="ml-2">New Assessment</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon />
              <Input
                placeholder="Search assessments by title, category, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-300"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="diagnostic">Diagnostic</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="risk">Risk Assessment</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Depression">Depression</SelectItem>
                <SelectItem value="Anxiety">Anxiety</SelectItem>
                <SelectItem value="Stress Management">Stress Management</SelectItem>
                <SelectItem value="Crisis Intervention">Crisis Intervention</SelectItem>
                <SelectItem value="Sleep Disorders">Sleep Disorders</SelectItem>
                <SelectItem value="Academic Support">Academic Support</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <DownloadIcon />
              <span className="ml-2">Export</span>
            </Button>
          </div>

          {/* Assessment List */}
          <div className="space-y-4">
            {filteredAssessments.map((assessment) => (
              <div key={assessment.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-medium">{assessment.title}</h3>
                      <Badge className={`${getTypeColor(assessment.type)} border text-xs`}>{assessment.type}</Badge>
                      <Badge className={`${getStatusColor(assessment.status)} border text-xs`}>
                        {assessment.status}
                      </Badge>
                      <Badge className={`${getRiskColor(assessment.riskLevel)} border text-xs`}>
                        {assessment.riskLevel} risk
                      </Badge>
                    </div>
                    <p className="text-purple-200 text-sm mb-2">{assessment.category}</p>
                    <div className="flex items-center gap-6 text-sm text-purple-300">
                      <span>{assessment.questions} questions</span>
                      <span>{assessment.duration}</span>
                      <span>Last updated: {assessment.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-white font-medium">{assessment.completions.toLocaleString()}</div>
                      <p className="text-purple-200 text-xs">Completions</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{assessment.averageScore}</div>
                      <p className="text-purple-200 text-xs">Avg Score</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <EyeIcon />
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-purple-200 text-sm">Completion Rate:</span>
                      <Progress value={78} className="h-2 w-32" />
                      <span className="text-white text-sm">78%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-purple-200">
                      <span>ID: {assessment.id}</span>
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
