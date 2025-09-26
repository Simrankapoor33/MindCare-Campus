"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play, Pause, BookOpen, Headphones, Video, Clock, Star, Search, Download, Heart } from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  type: "video" | "audio" | "article" | "cultural"
  duration?: string
  author: string
  category: string
  language: string
  rating: number
  thumbnail: string
  content?: string
  audioUrl?: string
  videoUrl?: string
  tags: string[]
  isFavorite: boolean
}

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Mindful Breathing for Students",
    description: "Learn simple breathing techniques to manage exam stress and anxiety",
    type: "video",
    duration: "8 min",
    author: "Dr. Priya Sharma",
    category: "Stress Management",
    language: "English",
    rating: 4.8,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Breathing+Video",
    videoUrl: "/placeholder-video.mp4",
    tags: ["breathing", "stress", "mindfulness"],
    isFavorite: false,
  },
  {
    id: "2",
    title: "Guided Meditation for Sleep",
    description: "A soothing meditation to help you relax and fall asleep peacefully",
    type: "audio",
    duration: "15 min",
    author: "Meditation Master Arjun",
    category: "Sleep & Relaxation",
    language: "Hindi",
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Sleep+Audio",
    audioUrl: "/placeholder-audio.mp3",
    tags: ["sleep", "meditation", "relaxation"],
    isFavorite: true,
  },
  {
    id: "3",
    title: "Understanding Depression in Young Adults",
    description: "A comprehensive guide to recognizing and managing depression symptoms",
    type: "article",
    author: "Dr. Raj Patel",
    category: "Mental Health Education",
    language: "English",
    rating: 4.7,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Depression+Article",
    content: "Depression is a common mental health condition that affects millions of young adults...",
    tags: ["depression", "mental-health", "education"],
    isFavorite: false,
  },
  {
    id: "4",
    title: "Yoga Nidra for Inner Peace",
    description: "Traditional Indian practice of yogic sleep for deep relaxation",
    type: "cultural",
    duration: "20 min",
    author: "Guru Meera Devi",
    category: "Cultural Wellness",
    language: "Sanskrit/English",
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Yoga+Nidra",
    audioUrl: "/placeholder-yoga.mp3",
    tags: ["yoga", "cultural", "relaxation", "indian-tradition"],
    isFavorite: true,
  },
  {
    id: "5",
    title: "Building Resilience Through Adversity",
    description: "Learn how to bounce back from challenges and build mental strength",
    type: "video",
    duration: "12 min",
    author: "Life Coach Sneha",
    category: "Personal Development",
    language: "Hindi",
    rating: 4.6,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Resilience+Video",
    videoUrl: "/placeholder-resilience.mp4",
    tags: ["resilience", "strength", "personal-growth"],
    isFavorite: false,
  },
  {
    id: "6",
    title: "Ayurvedic Approaches to Mental Wellness",
    description: "Ancient Indian wisdom for maintaining mental and emotional balance",
    type: "article",
    author: "Dr. Ayurveda Specialist",
    category: "Cultural Wellness",
    language: "English",
    rating: 4.5,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Ayurveda+Article",
    content: "Ayurveda, the ancient Indian system of medicine, offers profound insights into mental wellness...",
    tags: ["ayurveda", "cultural", "holistic-health", "indian-tradition"],
    isFavorite: false,
  },
  {
    id: "7",
    title: "মানসিক স্বাস্থ্য এবং ছাত্রজীবন",
    description: "ছাত্রছাত্রীদের মানসিক স্বাস্থ্য রক্ষার উপায় এবং পরামর্শ",
    type: "article",
    author: "ডাক্তার রবীন্দ্র চক্রবর্তী",
    category: "Mental Health Education",
    language: "Bengali",
    rating: 4.6,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bengali+Article",
    content: "ছাত্রজীবনে মানসিক চাপ একটি সাধারণ বিষয়...",
    tags: ["mental-health", "bengali", "students"],
    isFavorite: false,
  },
  {
    id: "8",
    title: "மன நலம் மற்றும் மாணவர் வாழ்க்கை",
    description: "மாணவர்களுக்கான மன நல ஆலோசனைகள் மற்றும் வழிகாட்டுதல்",
    type: "video",
    duration: "15 min",
    author: "டாக்டர் பிரியா ராமன்",
    category: "Mental Health Education",
    language: "Tamil",
    rating: 4.7,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Tamil+Video",
    videoUrl: "/placeholder-tamil.mp4",
    tags: ["mental-health", "tamil", "guidance"],
    isFavorite: false,
  },
  {
    id: "9",
    title: "మానసిక ఆరోగ్యం మరియు విద్యార్థుల జీవితం",
    description: "విద్యార్థులకు మానసిక ఆరోగ్య సలహాలు మరియు మార్గదర్శకత్వం",
    type: "audio",
    duration: "18 min",
    author: "డాక్టర్ రాజేష్ రెడ్డి",
    category: "Mental Health Education",
    language: "Telugu",
    rating: 4.8,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Telugu+Audio",
    audioUrl: "/placeholder-telugu.mp3",
    tags: ["mental-health", "telugu", "students"],
    isFavorite: false,
  },
  {
    id: "10",
    title: "ಮಾನಸಿಕ ಆರೋಗ್ಯ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಜೀವಿತ",
    description: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಲಹೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ",
    type: "video",
    duration: "12 min",
    author: "ಡಾ. ಸುಮಿತ್ರಾ ನಾಯ್ಡು",
    category: "Mental Health Education",
    language: "Kannada",
    rating: 4.5,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Kannada+Video",
    videoUrl: "/placeholder-kannada.mp4",
    tags: ["mental-health", "kannada", "guidance"],
    isFavorite: false,
  },
  {
    id: "11",
    title: "മാനസിക ആരോഗ്യവും വിദ്യാർത്ഥി ജീവിതവും",
    description: "വിദ്യാർത്ഥികൾക്കുള്ള മാനസിക ആരോഗ്യ ഉപദേശങ്ങളും മാർഗനിർദേശങ്ങളും",
    type: "audio",
    duration: "16 min",
    author: "ഡോ. പ്രിയ മേനോൻ",
    category: "Mental Health Education",
    language: "Malayalam",
    rating: 4.6,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Malayalam+Audio",
    audioUrl: "/placeholder-malayalam.mp3",
    tags: ["mental-health", "malayalam", "students"],
    isFavorite: false,
  },
  {
    id: "12",
    title: "ذہنی صحت اور طلباء کی زندگی",
    description: "طلباء کے لیے ذہنی صحت کے مشورے اور رہنمائی",
    type: "article",
    author: "ڈاکٹر فاطمہ خان",
    category: "Mental Health Education",
    language: "Urdu",
    rating: 4.7,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Urdu+Article",
    content: "طلباء کی زندگی میں ذہنی دباؤ ایک عام بات ہے...",
    tags: ["mental-health", "urdu", "guidance"],
    isFavorite: false,
  },
]

export default function ResourceHub() {
  const [resources, setResources] = useState<Resource[]>(mockResources)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const categories = [
    "All Categories",
    "Stress Management",
    "Sleep & Relaxation",
    "Mental Health Education",
    "Cultural Wellness",
    "Personal Development",
  ]
  const languages = [
    "All Languages",
    "English",
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Gujarati",
    "Marathi",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Urdu",
    "Odia",
    "Assamese",
    "Sanskrit/English",
  ]
  const types = ["All Types", "video", "audio", "article", "cultural"]

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Categories" || resource.category === selectedCategory
    const matchesLanguage = selectedLanguage === "All Languages" || resource.language === selectedLanguage
    const matchesType = selectedType === "All Types" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesLanguage && matchesType
  })

  const toggleFavorite = (resourceId: string) => {
    setResources((prev) =>
      prev.map((resource) =>
        resource.id === resourceId ? { ...resource, isFavorite: !resource.isFavorite } : resource,
      ),
    )
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Mock audio/video control
    console.log(isPlaying ? "Pausing" : "Playing", selectedResource?.title)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "audio":
        return <Headphones className="w-4 h-4" />
      case "article":
        return <BookOpen className="w-4 h-4" />
      case "cultural":
        return <Star className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-500"
      case "audio":
        return "bg-green-500"
      case "article":
        return "bg-blue-500"
      case "cultural":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5" />
            Discover Resources
          </CardTitle>
          <CardDescription className="text-purple-200">
            Find videos, audio, articles, and cultural content for your mental wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
            >
              {languages.map((language) => (
                <option key={language} value={language} className="bg-gray-800">
                  {language}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
            >
              {types.map((type) => (
                <option key={type} value={type} className="bg-gray-800">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Resource Categories */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-white/10 border-white/20 backdrop-blur-sm">
          <TabsTrigger value="all" className="text-white data-[state=active]:bg-white/20">
            All Resources
          </TabsTrigger>
          <TabsTrigger value="favorites" className="text-white data-[state=active]:bg-white/20">
            Favorites
          </TabsTrigger>
          <TabsTrigger value="cultural" className="text-white data-[state=active]:bg-white/20">
            Cultural Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card
                key={resource.id}
                className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all"
              >
                <div className="relative">
                  <img
                    src={resource.thumbnail || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div
                    className={`absolute top-3 left-3 ${getTypeColor(resource.type)} text-white px-2 py-1 rounded-full text-xs flex items-center gap-1`}
                  >
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </div>
                  {resource.duration && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(resource.id)}
                    className={`absolute bottom-3 right-3 ${resource.isFavorite ? "text-red-400" : "text-white"} hover:bg-black/50`}
                  >
                    <Heart className={`w-4 h-4 ${resource.isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {resource.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs">{resource.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-white font-medium mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-purple-200 text-sm mb-3 line-clamp-2">{resource.description}</p>

                  <div className="flex items-center justify-between text-xs text-purple-200 mb-3">
                    <span>By {resource.author}</span>
                    <span>{resource.language}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-purple-200 border-purple-300">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => setSelectedResource(resource)}
                      >
                        {resource.type === "article" ? "Read Article" : "Play Content"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-white/20 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {getTypeIcon(selectedResource?.type || "article")}
                          {selectedResource?.title}
                        </DialogTitle>
                        <DialogDescription className="text-purple-200">
                          By {selectedResource?.author} • {selectedResource?.category}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4">
                        {selectedResource?.type === "video" && (
                          <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
                            <div className="text-center">
                              <Video className="w-16 h-16 text-white mb-4 mx-auto" />
                              <p className="text-white">Video Player Placeholder</p>
                              <Button onClick={handlePlayPause} className="mt-4 bg-purple-600 hover:bg-purple-700">
                                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                                {isPlaying ? "Pause" : "Play"}
                              </Button>
                            </div>
                          </div>
                        )}

                        {(selectedResource?.type === "audio" || selectedResource?.type === "cultural") && (
                          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8 text-center">
                            <Headphones className="w-16 h-16 text-white mb-4 mx-auto" />
                            <p className="text-white mb-4">Audio Player</p>
                            <div className="flex items-center justify-center gap-4">
                              <Button onClick={handlePlayPause} className="bg-purple-600 hover:bg-purple-700">
                                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                                {isPlaying ? "Pause" : "Play"}
                              </Button>
                              <span className="text-white text-sm">{selectedResource?.duration}</span>
                            </div>
                          </div>
                        )}

                        {selectedResource?.type === "article" && (
                          <div className="prose prose-invert max-w-none">
                            <p className="text-purple-200 leading-relaxed">
                              {selectedResource?.content ||
                                "Article content would be displayed here. This is a comprehensive guide covering various aspects of the topic with detailed explanations, practical tips, and actionable advice for students dealing with mental health challenges."}
                            </p>
                          </div>
                        )}

                        <div className="border-t border-white/20 pt-4">
                          <p className="text-purple-200 mb-3">{selectedResource?.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedResource?.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-purple-200 border-purple-300">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            onClick={() => toggleFavorite(selectedResource?.id || "")}
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Heart
                              className={`w-4 h-4 mr-2 ${selectedResource?.isFavorite ? "fill-current text-red-400" : ""}`}
                            />
                            {selectedResource?.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter((resource) => resource.isFavorite)
              .map((resource) => (
                <Card key={resource.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${getTypeColor(resource.type)} p-2 rounded-full`}>
                        {getTypeIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{resource.title}</h3>
                        <p className="text-purple-200 text-sm">{resource.author}</p>
                      </div>
                      <Heart className="w-5 h-5 text-red-400 fill-current" />
                    </div>
                    <p className="text-purple-200 text-sm mb-3">{resource.description}</p>
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      {resource.type === "article" ? "Read" : "Play"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter((resource) => resource.type === "cultural" || resource.category === "Cultural Wellness")
              .map((resource) => (
                <Card key={resource.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Cultural
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-white font-medium mb-2">{resource.title}</h3>
                    <p className="text-purple-200 text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between text-xs text-purple-200 mb-3">
                      <span>By {resource.author}</span>
                      <span>{resource.language}</span>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Explore Content</Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredResources.length === 0 && (
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="text-center py-8">
            <p className="text-white">No resources found matching your criteria.</p>
            <p className="text-purple-200 text-sm mt-2">Try adjusting your filters or search terms.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
