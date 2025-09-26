"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageCircle, Share2, Calendar, MapPin, Plus, Filter, ThumbsUp, MessageSquare } from "lucide-react"

interface Post {
  id: string
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  comments: number
  tags: string[]
  isAnonymous: boolean
}

interface SupportGroup {
  id: string
  name: string
  description: string
  members: number
  category: string
  nextMeeting: string
  isOnline: boolean
  moderator: string
}

interface PeerMentor {
  id: string
  name: string
  year: string
  specialties: string[]
  rating: number
  avatar: string
  isOnline: boolean
  bio: string
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: "Priya S.",
    avatar: "/placeholder.svg?height=40&width=40&text=PS",
    content:
      "Just wanted to share that I finally managed to overcome my exam anxiety using the breathing techniques we discussed in our support group. Thank you everyone for the encouragement! 💙",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    tags: ["anxiety", "success-story", "breathing-techniques"],
    isAnonymous: false,
  },
  {
    id: "2",
    author: "Anonymous",
    avatar: "/placeholder.svg?height=40&width=40&text=A",
    content:
      "Feeling overwhelmed with assignments and social pressure. Anyone else going through similar struggles? Would love to hear how you cope.",
    timestamp: "4 hours ago",
    likes: 12,
    comments: 15,
    tags: ["stress", "academic-pressure", "support-needed"],
    isAnonymous: true,
  },
  {
    id: "3",
    author: "Raj M.",
    avatar: "/placeholder.svg?height=40&width=40&text=RM",
    content:
      "Sharing a mindfulness exercise that really helped me today. Take 5 minutes to focus on your breath and notice how your body feels. Small steps make a big difference!",
    timestamp: "6 hours ago",
    likes: 31,
    comments: 6,
    tags: ["mindfulness", "self-care", "tips"],
    isAnonymous: false,
  },
]

const mockSupportGroups: SupportGroup[] = [
  {
    id: "1",
    name: "Exam Anxiety Support",
    description: "A safe space for students dealing with test anxiety and academic stress",
    members: 45,
    category: "Academic Stress",
    nextMeeting: "Tomorrow 6:00 PM",
    isOnline: true,
    moderator: "Dr. Sharma",
  },
  {
    id: "2",
    name: "Mindful Students Circle",
    description: "Weekly mindfulness and meditation sessions for mental wellness",
    members: 32,
    category: "Mindfulness",
    nextMeeting: "Friday 4:00 PM",
    isOnline: false,
    moderator: "Peer Mentor Arjun",
  },
  {
    id: "3",
    name: "Social Anxiety Warriors",
    description: "Supporting each other through social challenges and building confidence",
    members: 28,
    category: "Social Anxiety",
    nextMeeting: "Sunday 3:00 PM",
    isOnline: true,
    moderator: "Dr. Patel",
  },
]

const mockPeerMentors: PeerMentor[] = [
  {
    id: "1",
    name: "Arjun Kumar",
    year: "Final Year",
    specialties: ["Academic Stress", "Time Management", "Study Techniques"],
    rating: 4.9,
    avatar: "/placeholder.svg?height=60&width=60&text=AK",
    isOnline: true,
    bio: "Computer Science student who overcame severe academic anxiety. Here to help fellow students.",
  },
  {
    id: "2",
    name: "Sneha Patel",
    year: "Third Year",
    specialties: ["Social Anxiety", "Self-Confidence", "Peer Relationships"],
    rating: 4.8,
    avatar: "/placeholder.svg?height=60&width=60&text=SP",
    isOnline: false,
    bio: "Psychology student passionate about helping others build confidence and social skills.",
  },
  {
    id: "3",
    name: "Rohit Singh",
    year: "Second Year",
    specialties: ["Depression Support", "Motivation", "Goal Setting"],
    rating: 4.7,
    avatar: "/placeholder.svg?height=60&width=60&text=RS",
    isOnline: true,
    bio: "Engineering student who found purpose through peer support. Specializes in motivation and goal achievement.",
  },
]

export default function CommunityPlatform() {
  const [activeTab, setActiveTab] = useState("feed")
  const [newPost, setNewPost] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleCreatePost = () => {
    if (newPost.trim()) {
      // Mock post creation
      console.log("Creating post:", { content: newPost, isAnonymous })
      setNewPost("")
      alert("Post shared successfully!")
    }
  }

  const handleJoinGroup = (groupId: string) => {
    console.log("Joining group:", groupId)
    alert("Successfully joined the support group!")
  }

  const handleConnectMentor = (mentorId: string) => {
    console.log("Connecting with mentor:", mentorId)
    alert("Connection request sent to peer mentor!")
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-white/10 border-white/20 backdrop-blur-sm">
          <TabsTrigger value="feed" className="text-white data-[state=active]:bg-white/20">
            Community Feed
          </TabsTrigger>
          <TabsTrigger value="groups" className="text-white data-[state=active]:bg-white/20">
            Support Groups
          </TabsTrigger>
          <TabsTrigger value="mentors" className="text-white data-[state=active]:bg-white/20">
            Peer Mentors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          {/* Create Post */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Share with Community
              </CardTitle>
              <CardDescription className="text-purple-200">
                Share your thoughts, experiences, or ask for support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What's on your mind? Share your thoughts, experiences, or ask for support..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 min-h-[100px]"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-white text-sm">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded"
                    />
                    Post anonymously
                  </label>
                </div>

                <Button
                  onClick={handleCreatePost}
                  disabled={!newPost.trim()}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community Posts */}
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-purple-500 text-white">
                        {post.isAnonymous
                          ? "A"
                          : post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-medium">{post.isAnonymous ? "Anonymous" : post.author}</span>
                        {post.isAnonymous && (
                          <Badge variant="secondary" className="text-xs">
                            Anonymous
                          </Badge>
                        )}
                        <span className="text-purple-200 text-sm">•</span>
                        <span className="text-purple-200 text-sm">{post.timestamp}</span>
                      </div>

                      <p className="text-white mb-4">{post.content}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-purple-200 border-purple-300 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-200 hover:text-white hover:bg-white/10"
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-200 hover:text-white hover:bg-white/10"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-200 hover:text-white hover:bg-white/10"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          {/* Search and Filter */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search support groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockSupportGroups.map((group) => (
              <Card key={group.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-lg">{group.name}</CardTitle>
                      <CardDescription className="text-purple-200 mt-1">{group.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {group.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-purple-200">
                      <Users className="w-4 h-4" />
                      {group.members} members
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      {group.isOnline ? (
                        <>
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          Online
                        </>
                      ) : (
                        <>
                          <MapPin className="w-4 h-4" />
                          In-person
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-white text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      Next Meeting
                    </div>
                    <p className="text-purple-200 text-sm">{group.nextMeeting}</p>
                    <p className="text-purple-200 text-xs mt-1">Moderated by {group.moderator}</p>
                  </div>

                  <Button
                    onClick={() => handleJoinGroup(group.id)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create New Group */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Support Group
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/20 text-white">
              <DialogHeader>
                <DialogTitle>Create New Support Group</DialogTitle>
                <DialogDescription className="text-purple-200">
                  Start a new support group for your community
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="groupName" className="text-white">
                    Group Name
                  </Label>
                  <Input
                    id="groupName"
                    placeholder="Enter group name..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>
                <div>
                  <Label htmlFor="groupDescription" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="groupDescription"
                    placeholder="Describe the purpose of your group..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Create Group</Button>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-6">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Peer Mentors</CardTitle>
              <CardDescription className="text-purple-200">
                Connect with experienced students who can provide guidance and support
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPeerMentors.map((mentor) => (
              <Card key={mentor.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <Avatar className="w-16 h-16 mx-auto mb-3">
                        <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-purple-500 text-white text-lg">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
                          mentor.isOnline ? "bg-green-400" : "bg-gray-400"
                        }`}
                      />
                    </div>

                    <h3 className="text-white font-medium">{mentor.name}</h3>
                    <p className="text-purple-200 text-sm">{mentor.year}</p>

                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(mentor.rating) ? "text-yellow-400" : "text-gray-600"}`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <span className="text-purple-200 text-sm ml-1">{mentor.rating}</span>
                    </div>
                  </div>

                  <p className="text-purple-200 text-sm mb-4 text-center">{mentor.bio}</p>

                  <div className="space-y-3">
                    <div>
                      <span className="text-white text-sm font-medium">Specialties:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mentor.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleConnectMentor(mentor.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!mentor.isOnline}
                    >
                      {mentor.isOnline ? "Connect Now" : "Currently Offline"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
