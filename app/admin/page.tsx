"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Custom SVG components
const UsersIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 6c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

const MessageCircleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
)

const mockMetrics = {
  totalStudents: 2847,
  activeUsers: 1923,
  atRiskStudents: 127,
  averageWellnessScore: 73,
  sessionsCompleted: 1456,
  communityEngagement: 68,
}

const wellnessData = [
  { month: "Jan", score: 65, sessions: 120, engagement: 45 },
  { month: "Feb", score: 68, sessions: 145, engagement: 52 },
  { month: "Mar", score: 71, sessions: 167, engagement: 58 },
  { month: "Apr", score: 69, sessions: 189, engagement: 61 },
  { month: "May", score: 73, sessions: 203, engagement: 68 },
  { month: "Jun", score: 76, sessions: 234, engagement: 72 },
]

const issueDistribution = [
  { name: "Anxiety", value: 35, color: "#8b5cf6" },
  { name: "Depression", value: 28, color: "#06b6d4" },
  { name: "Stress", value: 22, color: "#10b981" },
  { name: "Sleep Issues", value: 15, color: "#f59e0b" },
]

const languageUsage = [
  { language: "Hindi", users: 1247, percentage: 44 },
  { language: "English", users: 892, percentage: 31 },
  { language: "Tamil", users: 356, percentage: 13 },
  { language: "Bengali", users: 234, percentage: 8 },
  { language: "Telugu", users: 189, percentage: 7 },
]

const peakUsageHours = [
  { hour: "6 AM", usage: 12 },
  { hour: "8 AM", usage: 45 },
  { hour: "10 AM", usage: 78 },
  { hour: "12 PM", usage: 156 },
  { hour: "2 PM", usage: 189 },
  { hour: "4 PM", usage: 234 },
  { hour: "6 PM", usage: 298 },
  { hour: "8 PM", usage: 267 },
  { hour: "10 PM", usage: 198 },
  { hour: "12 AM", usage: 89 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <UsersIcon />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{mockMetrics.totalStudents.toLocaleString()}</div>
            <p className="text-green-400 text-sm">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <TrendingUpIcon />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{mockMetrics.activeUsers.toLocaleString()}</div>
            <p className="text-green-400 text-sm">+8% from last month</p>
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
            <div className="text-2xl font-bold text-red-400">{mockMetrics.atRiskStudents}</div>
            <p className="text-red-400 text-sm">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <HeartIcon />
              Avg Wellness Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{mockMetrics.averageWellnessScore}%</div>
            <Progress value={mockMetrics.averageWellnessScore} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Main Charts - Replaced with simple data displays */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wellness Trends */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-xl">Wellness Trends</CardTitle>
            <CardDescription className="text-purple-200 text-base">Monthly wellness score progression</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {wellnessData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-white font-semibold text-lg w-12">{data.month}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-200 text-sm font-medium">Score:</span>
                      <span className="text-white font-bold text-lg">{data.score}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-200 text-sm font-medium">Sessions:</span>
                      <span className="text-white font-semibold">{data.sessions}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={data.score} className="h-3 w-24" />
                      <span className="text-green-400 font-bold text-sm">{data.score}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Issue Distribution */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Common Issues</CardTitle>
            <CardDescription className="text-purple-200">Distribution of mental health concerns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {issueDistribution.map((issue, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: issue.color }} />
                    <span className="text-white font-medium">{issue.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={issue.value} className="h-2 w-24" />
                    <span className="text-purple-200 text-sm w-8">{issue.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Usage */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GlobeIcon />
              Language Usage
            </CardTitle>
            <CardDescription className="text-purple-200">Multi-language support analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {languageUsage.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span className="text-white font-medium">{lang.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={lang.percentage} className="h-2 w-20" />
                    <span className="text-purple-200 text-sm w-12">{lang.users}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Peak Usage Hours */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <ClockIcon />
              Peak Usage Hours
            </CardTitle>
            <CardDescription className="text-purple-200">Daily usage patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {peakUsageHours.map((hour, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white font-medium w-16">{hour.hour}</span>
                  <div className="flex items-center gap-3 flex-1">
                    <Progress value={(hour.usage / 298) * 100} className="h-2 flex-1" />
                    <span className="text-purple-200 text-sm w-12">{hour.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <CalendarIcon />
              Sessions This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">{mockMetrics.sessionsCompleted}</div>
            <p className="text-green-400 text-sm">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <MessageCircleIcon />
              Community Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">{mockMetrics.communityEngagement}%</div>
            <Progress value={mockMetrics.communityEngagement} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpenIcon />
              Resource Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">847</div>
            <p className="text-purple-200 text-sm">Resources accessed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
