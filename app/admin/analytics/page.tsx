"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

// Custom SVG components
const TrendingUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
)

const TrendingDownIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" />
  </svg>
)

const BarChartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
)

const PieChartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 6c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
)

// Mock analytics data
const analyticsData = {
  overview: {
    totalSessions: 15847,
    avgSessionDuration: 24.5,
    completionRate: 78.3,
    userRetention: 65.2,
    wellnessImprovement: 23.7,
    criticalAlerts: 12,
  },
  trends: [
    { period: "Week 1", sessions: 3200, wellness: 68, engagement: 72, alerts: 15 },
    { period: "Week 2", sessions: 3450, wellness: 71, engagement: 75, alerts: 12 },
    { period: "Week 3", sessions: 3680, wellness: 73, engagement: 78, alerts: 8 },
    { period: "Week 4", sessions: 3890, wellness: 76, engagement: 82, alerts: 5 },
    { period: "Week 5", sessions: 4120, wellness: 78, engagement: 85, alerts: 3 },
    { period: "Week 6", sessions: 4350, wellness: 81, engagement: 88, alerts: 2 },
  ],
  demographics: [
    { category: "Undergraduate", count: 1847, percentage: 65, avgWellness: 74 },
    { category: "Graduate", count: 692, percentage: 24, avgWellness: 78 },
    { category: "Faculty", count: 234, percentage: 8, avgWellness: 82 },
    { category: "Staff", count: 89, percentage: 3, avgWellness: 79 },
  ],
  interventions: [
    { type: "Peer Support", sessions: 2340, effectiveness: 87, cost: "Low" },
    { type: "Professional Therapy", sessions: 1890, effectiveness: 94, cost: "High" },
    { type: "Group Sessions", sessions: 1560, effectiveness: 82, cost: "Medium" },
    { type: "Self-Help Resources", sessions: 3420, effectiveness: 71, cost: "Low" },
    { type: "Crisis Intervention", sessions: 234, effectiveness: 96, cost: "High" },
  ],
  outcomes: [
    { metric: "Anxiety Reduction", baseline: 6.8, current: 4.2, improvement: 38 },
    { metric: "Depression Scores", baseline: 7.2, current: 4.8, improvement: 33 },
    { metric: "Sleep Quality", baseline: 4.1, current: 6.7, improvement: 63 },
    { metric: "Academic Performance", baseline: 6.9, current: 7.8, improvement: 13 },
    { metric: "Social Connection", baseline: 5.2, current: 7.1, improvement: 37 },
  ],
  riskFactors: [
    { factor: "Academic Stress", prevalence: 78, severity: "High", trend: "stable" },
    { factor: "Financial Concerns", prevalence: 45, severity: "Medium", trend: "increasing" },
    { factor: "Social Isolation", prevalence: 32, severity: "High", trend: "decreasing" },
    { factor: "Family Issues", prevalence: 28, severity: "Medium", trend: "stable" },
    { factor: "Health Problems", prevalence: 19, severity: "High", trend: "decreasing" },
  ],
}

export default function AnalyticsPage() {
  const [selectedMetric, setSelectedMetric] = useState("wellness")
  const [timeRange, setTimeRange] = useState("6weeks")

  return (
    <div className="space-y-8">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Advanced Analytics</h1>
          <p className="text-purple-200">Comprehensive insights into campus mental health trends</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wellness">Wellness Score</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="sessions">Sessions</SelectItem>
              <SelectItem value="alerts">Alert Trends</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4weeks">4 Weeks</SelectItem>
              <SelectItem value="6weeks">6 Weeks</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <DownloadIcon />
            <span className="ml-2">Export</span>
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <CalendarIcon />
              Total Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-white">{analyticsData.overview.totalSessions.toLocaleString()}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon />
              <span className="text-green-400 text-xs">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <ClockIcon />
              Avg Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-white">{analyticsData.overview.avgSessionDuration}m</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon />
              <span className="text-green-400 text-xs">+8.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <BarChartIcon />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-white">{analyticsData.overview.completionRate}%</div>
            <Progress value={analyticsData.overview.completionRate} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <UsersIcon />
              User Retention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-white">{analyticsData.overview.userRetention}%</div>
            <Progress value={analyticsData.overview.userRetention} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm flex items-center gap-2">
              <HeartIcon />
              Wellness Gain
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-green-400">+{analyticsData.overview.wellnessImprovement}%</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUpIcon />
              <span className="text-green-400 text-xs">Improving</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4zm4 0h-2v-4h2v4z" />
              </svg>
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-red-400">{analyticsData.overview.criticalAlerts}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingDownIcon />
              <span className="text-green-400 text-xs">-67%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trend Analysis */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChartIcon />
            Trend Analysis - {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}
          </CardTitle>
          <CardDescription className="text-purple-200">
            Weekly progression of key metrics over the selected time period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.trends.map((week, index) => {
              const value =
                selectedMetric === "wellness"
                  ? week.wellness
                  : selectedMetric === "engagement"
                    ? week.engagement
                    : selectedMetric === "sessions"
                      ? Math.round(week.sessions / 100)
                      : week.alerts
              const maxValue = selectedMetric === "sessions" ? 45 : selectedMetric === "alerts" ? 15 : 100

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white font-medium w-16">{week.period}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-200 text-sm">Sessions:</span>
                        <span className="text-white font-medium">{week.sessions.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-200 text-sm">Wellness:</span>
                        <span className="text-white font-medium">{week.wellness}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-200 text-sm">Engagement:</span>
                        <span className="text-white font-medium">{week.engagement}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={(value / maxValue) * 100} className="h-2 w-32" />
                    <span className="text-white font-medium w-12">
                      {value}
                      {selectedMetric === "sessions" ? "00" : selectedMetric === "alerts" ? "" : "%"}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Demographics & Interventions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demographics Analysis */}
        <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-400/30 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-white flex items-center gap-2 text-xl">
              <PieChartIcon />
              Demographics Analysis
            </CardTitle>
            <CardDescription className="text-purple-100 text-base">
              User distribution and wellness by category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {analyticsData.demographics.map((demo, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-400" />
                    <span className="text-white font-semibold text-xl">{demo.category}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-white font-bold text-2xl">{demo.count.toLocaleString()}</div>
                      <div className="text-purple-100 text-base">{demo.percentage}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-2xl">{demo.avgWellness}%</div>
                      <div className="text-purple-100 text-base">Wellness</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-purple-900/50 rounded-full h-3">
                  <div
                    className="bg-blue-400 h-3 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${demo.avgWellness}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Intervention Effectiveness */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Intervention Effectiveness</CardTitle>
            <CardDescription className="text-purple-200">
              Performance analysis of different support methods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.interventions.map((intervention, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        intervention.cost === "Low"
                          ? "bg-green-400"
                          : intervention.cost === "Medium"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                      }`}
                    />
                    <div>
                      <span className="text-white font-medium block">{intervention.type}</span>
                      <span className="text-purple-200 text-sm">{intervention.sessions} sessions</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-white font-medium">{intervention.effectiveness}%</div>
                      <div className="text-purple-200 text-sm">Effective</div>
                    </div>
                    <Progress value={intervention.effectiveness} className="h-2 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Outcomes & Risk Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clinical Outcomes */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Clinical Outcomes</CardTitle>
            <CardDescription className="text-purple-200">
              Measurable improvements in key wellness metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.outcomes.map((outcome, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{outcome.metric}</span>
                    <span className="text-green-400 font-bold">+{outcome.improvement}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-purple-200">Baseline: {outcome.baseline}</span>
                      <span className="text-white">Current: {outcome.current}</span>
                    </div>
                  </div>
                  <Progress value={outcome.improvement} className="h-2 mt-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Factor Analysis */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Risk Factor Analysis</CardTitle>
            <CardDescription className="text-purple-200">
              Prevalence and trends of mental health risk factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.riskFactors.map((risk, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{risk.factor}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          risk.severity === "High"
                            ? "bg-red-500/20 text-red-400"
                            : risk.severity === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {risk.severity}
                      </span>
                      <span
                        className={`text-xs ${
                          risk.trend === "increasing"
                            ? "text-red-400"
                            : risk.trend === "decreasing"
                              ? "text-green-400"
                              : "text-purple-200"
                        }`}
                      >
                        {risk.trend}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">{risk.prevalence}% prevalence</span>
                    <Progress value={risk.prevalence} className="h-2 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
