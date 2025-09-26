"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Send, Bot, User, Heart, Brain, Lightbulb, Phone, AlertTriangle } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  type?: "text" | "suggestion" | "emergency" | "resource"
  suggestions?: string[]
  resources?: Array<{
    title: string
    type: string
    url: string
  }>
}

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  prompt: string
  category: "mood" | "stress" | "emergency" | "general"
}

const quickActions: QuickAction[] = [
  {
    id: "1",
    label: "I'm feeling anxious",
    icon: <Heart className="w-4 h-4" />,
    prompt: "I'm feeling anxious right now. Can you help me with some breathing exercises?",
    category: "mood",
  },
  {
    id: "2",
    label: "Study stress",
    icon: <Brain className="w-4 h-4" />,
    prompt: "I'm overwhelmed with my studies and feeling stressed. What can I do?",
    category: "stress",
  },
  {
    id: "3",
    label: "Can't sleep",
    icon: <Lightbulb className="w-4 h-4" />,
    prompt: "I'm having trouble sleeping. Can you suggest some relaxation techniques?",
    category: "mood",
  },
  {
    id: "4",
    label: "Need immediate help",
    icon: <Phone className="w-4 h-4" />,
    prompt: "I need immediate mental health support. This is urgent.",
    category: "emergency",
  },
]

const mockAIResponses = {
  anxiety: {
    content:
      "I understand you're feeling anxious right now. Let's try a simple breathing exercise together. Take a deep breath in for 4 counts, hold for 4, then exhale for 6. This activates your parasympathetic nervous system and can help calm your mind.",
    suggestions: [
      "Try the 4-4-6 breathing technique",
      "Practice progressive muscle relaxation",
      "Listen to calming music",
    ],
    resources: [
      { title: "Guided Breathing Exercise", type: "audio", url: "/breathing-guide" },
      { title: "Understanding Anxiety", type: "article", url: "/anxiety-guide" },
    ],
  },
  stress: {
    content:
      "Study stress is very common among students. Let's break this down into manageable steps. First, try the Pomodoro Technique - study for 25 minutes, then take a 5-minute break. This can help prevent overwhelm and maintain focus.",
    suggestions: ["Use the Pomodoro Technique", "Create a study schedule", "Take regular breaks"],
    resources: [
      { title: "Effective Study Techniques", type: "video", url: "/study-tips" },
      { title: "Managing Academic Pressure", type: "article", url: "/academic-stress" },
    ],
  },
  sleep: {
    content:
      "Sleep difficulties often stem from an overactive mind. Try creating a bedtime routine: dim the lights 1 hour before bed, avoid screens, and try some gentle stretching or meditation. Your mind needs time to wind down.",
    suggestions: ["Create a bedtime routine", "Try meditation before sleep", "Avoid screens 1 hour before bed"],
    resources: [
      { title: "Sleep Meditation", type: "audio", url: "/sleep-meditation" },
      { title: "Better Sleep Habits", type: "article", url: "/sleep-hygiene" },
    ],
  },
  emergency: {
    content:
      "I'm here to support you, and I want you to know that you're not alone. If you're having thoughts of self-harm or suicide, please reach out to a crisis helpline immediately. In India, you can contact AASRA at 91-22-27546669 or iCall at 022-25521111.",
    suggestions: [
      "Contact emergency services",
      "Reach out to a trusted friend or family member",
      "Visit the nearest hospital",
    ],
    resources: [
      { title: "Crisis Helplines in India", type: "resource", url: "/crisis-help" },
      { title: "Emergency Mental Health Support", type: "resource", url: "/emergency-support" },
    ],
  },
  default: {
    content:
      "Hello! I'm MindCare AI, your 24/7 mental wellness companion. I'm here to provide support, guidance, and resources for your mental health journey. How are you feeling today?",
    suggestions: ["Tell me about your mood", "I need study help", "I'm feeling stressed", "Share wellness tips"],
    resources: [],
  },
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: mockAIResponses.default.content,
      sender: "ai",
      timestamp: new Date(),
      type: "text",
      suggestions: mockAIResponses.default.suggestions,
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()
    let response = mockAIResponses.default

    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety") || lowerMessage.includes("worried")) {
      response = mockAIResponses.anxiety
    } else if (lowerMessage.includes("stress") || lowerMessage.includes("study") || lowerMessage.includes("exam")) {
      response = mockAIResponses.stress
    } else if (lowerMessage.includes("sleep") || lowerMessage.includes("tired") || lowerMessage.includes("insomnia")) {
      response = mockAIResponses.sleep
    } else if (lowerMessage.includes("urgent") || lowerMessage.includes("emergency") || lowerMessage.includes("help")) {
      response = mockAIResponses.emergency
    }

    return {
      id: Date.now().toString(),
      content: response.content,
      sender: "ai",
      timestamp: new Date(),
      type: response.resources.length > 0 ? "resource" : "suggestion",
      suggestions: response.suggestions,
      resources: response.resources,
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (action: QuickAction) => {
    setInputMessage(action.prompt)
    handleSendMessage()
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg relative"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-white/20 text-white max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="p-4 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-white">MindCare AI Assistant</DialogTitle>
                <p className="text-sm text-purple-200">Available 24/7 for mental health support</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-[60vh]">
          {/* Quick Actions */}
          <div className="p-4 border-b border-white/20">
            <p className="text-sm text-purple-200 mb-3">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action.id}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action)}
                  className={`border-white/20 text-white hover:bg-white/10 justify-start ${
                    action.category === "emergency" ? "border-red-400 text-red-400 hover:bg-red-400/10" : ""
                  }`}
                >
                  {action.icon}
                  <span className="ml-2 text-xs">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "ai" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-purple-500 text-white">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={`max-w-[80%] ${message.sender === "user" ? "order-first" : ""}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === "user" ? "bg-purple-600 text-white ml-auto" : "bg-white/10 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>

                    {message.type === "emergency" && (
                      <div className="mt-3 p-2 bg-red-500/20 border border-red-400 rounded-lg">
                        <div className="flex items-center gap-2 text-red-400 text-xs font-medium">
                          <AlertTriangle className="w-4 h-4" />
                          Emergency Resources Available
                        </div>
                      </div>
                    )}
                  </div>

                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-purple-200 hover:text-white hover:bg-white/10 text-xs h-auto p-2 justify-start"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}

                  {message.resources && message.resources.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-purple-200">Recommended resources:</p>
                      {message.resources.map((resource, index) => (
                        <Card key={index} className="bg-white/5 border-white/10">
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {resource.type}
                              </Badge>
                              <span className="text-white text-sm">{resource.title}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-purple-200 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>

                {message.sender === "user" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-blue-500 text-white">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-500 text-white">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white/10 text-white p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Press Enter to send)"
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-purple-200 mt-2">
              This AI assistant provides general mental health support. For emergencies, please contact professional
              help immediately.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
