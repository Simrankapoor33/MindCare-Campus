"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Heart, Brain, Star, TrendingUp, Moon, Sun } from "lucide-react"
import TherapistBooking from "@/components/therapist-booking"
import CommunityPlatform from "@/components/community-platform"
import ResourceHub from "@/components/resource-hub"
import AIAssistant from "@/components/ai-assistant"

export default function StudentDashboard() {
  const [theme, setTheme] = useState<"galaxy" | "space">("galaxy")
  const [language, setLanguage] = useState("en")

  // Mock data for wellness tracking
  const wellnessStreak = 7
  const moodScore = 75
  const weeklyProgress = 68

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "bn", name: "বাংলা" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
    { code: "ur", name: "اردو" },
    { code: "or", name: "ଓଡ଼ିଆ" },
    { code: "as", name: "অসমীয়া" },
  ]

  const recentActivities = [
    { type: "meditation", title: "Morning Meditation", duration: "10 min", completed: true },
    { type: "journal", title: "Daily Reflection", duration: "5 min", completed: true },
    { type: "therapy", title: "Session with Dr. Sharma", duration: "45 min", completed: false },
    { type: "community", title: "Peer Support Group", duration: "30 min", completed: true },
  ]

  const upcomingSessions = [
    { therapist: "Dr. Priya Sharma", time: "2:00 PM Today", type: "Individual Therapy" },
    { therapist: "Dr. Raj Patel", time: "10:00 AM Tomorrow", type: "Group Session" },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "galaxy"
          ? "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
          : "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
      }`}
    >
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MindCare Campus</h1>
                <p className="text-sm text-purple-200">Your Mental Wellness Journey</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm backdrop-blur-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-gray-800">
                    {lang.name}
                  </option>
                ))}
              </select>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "galaxy" ? "space" : "galaxy")}
                className="text-white hover:bg-white/10"
              >
                {theme === "galaxy" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>

              <Avatar>
                <AvatarImage src="/placeholder.svg?key=11ark" />
                <AvatarFallback className="bg-purple-500 text-white">AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Arjun!</h2>
          <p className="text-purple-200">Let's continue your wellness journey together</p>
        </div>

        {/* Wellness Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Wellness Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-1">{wellnessStreak} days</div>
              <p className="text-purple-200 text-sm">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Mood Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-2">{moodScore}%</div>
              <Progress value={moodScore} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-2">{weeklyProgress}%</div>
              <Progress value={weeklyProgress} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-white/20">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="sessions" className="text-white data-[state=active]:bg-white/20">
              Sessions
            </TabsTrigger>
            <TabsTrigger value="community" className="text-white data-[state=active]:bg-white/20">
              Community
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-white data-[state=active]:bg-white/20">
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activities</CardTitle>
                  <CardDescription className="text-purple-200">Your wellness activities this week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${activity.completed ? "bg-green-400" : "bg-yellow-400"}`}
                        />
                        <div>
                          <p className="text-white font-medium">{activity.title}</p>
                          <p className="text-purple-200 text-sm">{activity.duration}</p>
                        </div>
                      </div>
                      <Badge variant={activity.completed ? "default" : "secondary"}>
                        {activity.completed ? "Completed" : "Upcoming"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Sessions</CardTitle>
                  <CardDescription className="text-purple-200">Your scheduled therapy sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{session.therapist}</h4>
                        <Badge variant="outline" className="text-purple-200 border-purple-300">
                          {session.type}
                        </Badge>
                      </div>
                      <p className="text-purple-200 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {session.time}
                      </p>
                      <Button size="sm" className="mt-3 bg-purple-600 hover:bg-purple-700">
                        Join Session
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sessions">
            <TherapistBooking />
          </TabsContent>

          <TabsContent value="community">
            <CommunityPlatform />
          </TabsContent>

          <TabsContent value="resources">
            <ResourceHub />
          </TabsContent>
        </Tabs>

        <div className="fixed bottom-6 right-6">
          <AIAssistant />
        </div>
      </div>
    </div>
  )
}
