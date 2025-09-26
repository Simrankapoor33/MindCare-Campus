"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Clock, Star, MapPin, Video, Phone, MessageSquare, Search } from "lucide-react"

interface Therapist {
  id: string
  name: string
  title: string
  specialization: string[]
  languages: string[]
  rating: number
  experience: number
  location: string
  sessionTypes: string[]
  availability: string[]
  price: number
  image: string
  bio: string
}

const mockTherapists: Therapist[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    title: "Clinical Psychologist",
    specialization: ["Anxiety", "Depression", "Student Stress"],
    languages: ["English", "Hindi", "Punjabi", "Urdu"],
    rating: 4.9,
    experience: 8,
    location: "Delhi",
    sessionTypes: ["Video Call", "Phone Call", "In-Person"],
    availability: ["Mon 2-6 PM", "Wed 10-4 PM", "Fri 1-5 PM"],
    price: 1500,
    image: "/placeholder.svg?height=100&width=100&text=PS",
    bio: "Specialized in helping students manage academic stress and anxiety. Fluent in multiple Indian languages.",
  },
  {
    id: "2",
    name: "Dr. Raj Patel",
    title: "Counseling Psychologist",
    specialization: ["Relationship Issues", "Self-Esteem", "Career Guidance"],
    languages: ["English", "Gujarati", "Hindi", "Marathi"],
    rating: 4.8,
    experience: 12,
    location: "Mumbai",
    sessionTypes: ["Video Call", "Phone Call"],
    availability: ["Tue 9-1 PM", "Thu 3-7 PM", "Sat 10-2 PM"],
    price: 1200,
    image: "/placeholder.svg?height=100&width=100&text=RP",
    bio: "Experienced in career counseling and helping young adults navigate life transitions.",
  },
  {
    id: "3",
    name: "Dr. Meera Reddy",
    title: "Psychiatrist",
    specialization: ["ADHD", "Bipolar Disorder", "Medication Management"],
    languages: ["English", "Telugu", "Tamil", "Kannada", "Malayalam"],
    rating: 4.7,
    experience: 15,
    location: "Hyderabad",
    sessionTypes: ["Video Call", "In-Person"],
    availability: ["Mon 10-2 PM", "Wed 3-7 PM", "Fri 9-1 PM"],
    price: 2000,
    image: "/placeholder.svg?height=100&width=100&text=MR",
    bio: "Board-certified psychiatrist specializing in student mental health and medication management.",
  },
  {
    id: "4",
    name: "Dr. Arjun Singh",
    title: "Behavioral Therapist",
    specialization: ["Study Habits", "Procrastination", "Time Management"],
    languages: ["English", "Hindi", "Bengali", "Assamese", "Odia"],
    rating: 4.6,
    experience: 6,
    location: "Kolkata",
    sessionTypes: ["Video Call", "Phone Call", "In-Person"],
    availability: ["Tue 1-5 PM", "Thu 10-2 PM", "Sat 3-7 PM"],
    price: 1000,
    image: "/placeholder.svg?height=100&width=100&text=AS",
    bio: "Helps students develop effective study strategies and overcome procrastination.",
  },
  {
    id: "5",
    name: "Dr. Fatima Khan",
    title: "Clinical Psychologist",
    specialization: ["Trauma Therapy", "Cultural Identity", "Family Counseling"],
    languages: ["English", "Urdu", "Hindi", "Punjabi"],
    rating: 4.8,
    experience: 10,
    location: "Lucknow",
    sessionTypes: ["Video Call", "Phone Call", "In-Person"],
    availability: ["Mon 9-1 PM", "Wed 2-6 PM", "Sat 10-2 PM"],
    price: 1400,
    image: "/placeholder.svg?height=100&width=100&text=FK",
    bio: "Specializes in culturally sensitive therapy and helping students navigate identity issues.",
  },
  {
    id: "6",
    name: "Dr. Lakshmi Nair",
    title: "Counseling Psychologist",
    specialization: ["Academic Stress", "Social Anxiety", "Mindfulness"],
    languages: ["English", "Malayalam", "Tamil", "Kannada"],
    rating: 4.7,
    experience: 9,
    location: "Kochi",
    sessionTypes: ["Video Call", "Phone Call"],
    availability: ["Tue 10-2 PM", "Thu 1-5 PM", "Fri 3-7 PM"],
    price: 1300,
    image: "/placeholder.svg?height=100&width=100&text=LN",
    bio: "Expert in mindfulness-based therapy and helping students with academic pressures.",
  },
]

export default function TherapistBooking() {
  const [therapists, setTherapists] = useState<Therapist[]>(mockTherapists)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("Any specialization")
  const [selectedLanguage, setSelectedLanguage] = useState("Any language")
  const [selectedSessionType, setSelectedSessionType] = useState("Any type")
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    sessionType: "",
    concerns: "",
    emergencyContact: "",
  })

  // Filter therapists based on search criteria
  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch =
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialization.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesSpecialization =
      selectedSpecialization === "Any specialization" || therapist.specialization.includes(selectedSpecialization)
    const matchesLanguage = selectedLanguage === "Any language" || therapist.languages.includes(selectedLanguage)
    const matchesSessionType =
      selectedSessionType === "Any type" || therapist.sessionTypes.includes(selectedSessionType)

    return matchesSearch && matchesSpecialization && matchesLanguage && matchesSessionType
  })

  const handleBooking = () => {
    // Mock booking logic
    console.log("Booking session with:", selectedTherapist?.name, bookingData)
    alert("Session booked successfully! You will receive a confirmation email shortly.")
    setSelectedTherapist(null)
    setBookingStep(1)
    setBookingData({
      date: "",
      time: "",
      sessionType: "",
      concerns: "",
      emergencyContact: "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5" />
            Find Your Therapist
          </CardTitle>
          <CardDescription className="text-purple-200">
            Search and filter certified mental health professionals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="search" className="text-white">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
            </div>

            <div>
              <Label htmlFor="specialization" className="text-white">
                Specialization
              </Label>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any specialization">Any specialization</SelectItem>
                  <SelectItem value="Anxiety">Anxiety</SelectItem>
                  <SelectItem value="Depression">Depression</SelectItem>
                  <SelectItem value="Student Stress">Student Stress</SelectItem>
                  <SelectItem value="Relationship Issues">Relationship Issues</SelectItem>
                  <SelectItem value="Career Guidance">Career Guidance</SelectItem>
                  <SelectItem value="ADHD">ADHD</SelectItem>
                  <SelectItem value="Trauma Therapy">Trauma Therapy</SelectItem>
                  <SelectItem value="Cultural Identity">Cultural Identity</SelectItem>
                  <SelectItem value="Family Counseling">Family Counseling</SelectItem>
                  <SelectItem value="Academic Stress">Academic Stress</SelectItem>
                  <SelectItem value="Social Anxiety">Social Anxiety</SelectItem>
                  <SelectItem value="Mindfulness">Mindfulness</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="language" className="text-white">
                Language
              </Label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any language">Any language</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="Bengali">Bengali</SelectItem>
                  <SelectItem value="Tamil">Tamil</SelectItem>
                  <SelectItem value="Telugu">Telugu</SelectItem>
                  <SelectItem value="Gujarati">Gujarati</SelectItem>
                  <SelectItem value="Marathi">Marathi</SelectItem>
                  <SelectItem value="Punjabi">Punjabi</SelectItem>
                  <SelectItem value="Kannada">Kannada</SelectItem>
                  <SelectItem value="Malayalam">Malayalam</SelectItem>
                  <SelectItem value="Urdu">Urdu</SelectItem>
                  <SelectItem value="Odia">Odia</SelectItem>
                  <SelectItem value="Assamese">Assamese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="sessionType" className="text-white">
                Session Type
              </Label>
              <Select value={selectedSessionType} onValueChange={setSelectedSessionType}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any type">Any type</SelectItem>
                  <SelectItem value="Video Call">Video Call</SelectItem>
                  <SelectItem value="Phone Call">Phone Call</SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Therapist List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTherapists.map((therapist) => (
          <Card key={therapist.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={therapist.image || "/placeholder.svg"} />
                  <AvatarFallback className="bg-purple-500 text-white text-lg">
                    {therapist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-white text-lg">{therapist.name}</CardTitle>
                  <CardDescription className="text-purple-200">{therapist.title}</CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{therapist.rating}</span>
                    </div>
                    <span className="text-purple-200 text-sm">•</span>
                    <span className="text-purple-200 text-sm">{therapist.experience} years exp</span>
                    <span className="text-purple-200 text-sm">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-purple-200" />
                      <span className="text-purple-200 text-sm">{therapist.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">₹{therapist.price}</div>
                  <div className="text-purple-200 text-sm">per session</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200 text-sm">{therapist.bio}</p>

              <div className="space-y-2">
                <div>
                  <span className="text-white text-sm font-medium">Specializations:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {therapist.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-white text-sm font-medium">Languages:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {therapist.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-purple-200 border-purple-300">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-white text-sm font-medium">Session Types:</span>
                  <div className="flex gap-2 mt-1">
                    {therapist.sessionTypes.includes("Video Call") && <Video className="w-4 h-4 text-green-400" />}
                    {therapist.sessionTypes.includes("Phone Call") && <Phone className="w-4 h-4 text-blue-400" />}
                    {therapist.sessionTypes.includes("In-Person") && (
                      <MessageSquare className="w-4 h-4 text-purple-400" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-white/20 text-white">
                    <DialogHeader>
                      <DialogTitle>{therapist.name}</DialogTitle>
                      <DialogDescription className="text-purple-200">
                        {therapist.title} • {therapist.experience} years experience
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-purple-200">{therapist.bio}</p>
                      <div>
                        <h4 className="font-medium mb-2">Availability:</h4>
                        <ul className="space-y-1">
                          {therapist.availability.map((slot, index) => (
                            <li key={index} className="text-sm text-purple-200 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {slot}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                      onClick={() => setSelectedTherapist(therapist)}
                    >
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-white/20 text-white max-w-md">
                    <DialogHeader>
                      <DialogTitle>Book Session with {selectedTherapist?.name}</DialogTitle>
                      <DialogDescription className="text-purple-200">Step {bookingStep} of 3</DialogDescription>
                    </DialogHeader>

                    {bookingStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="sessionType" className="text-white">
                            Session Type
                          </Label>
                          <Select
                            value={bookingData.sessionType}
                            onValueChange={(value) => setBookingData({ ...bookingData, sessionType: value })}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Choose session type" />
                            </SelectTrigger>
                            <SelectContent>
                              {selectedTherapist?.sessionTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="date" className="text-white">
                            Preferred Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingData.date}
                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>

                        <div>
                          <Label htmlFor="time" className="text-white">
                            Preferred Time
                          </Label>
                          <Select
                            value={bookingData.time}
                            onValueChange={(value) => setBookingData({ ...bookingData, time: value })}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Choose time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button
                          onClick={() => setBookingStep(2)}
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          disabled={!bookingData.sessionType || !bookingData.date || !bookingData.time}
                        >
                          Next
                        </Button>
                      </div>
                    )}

                    {bookingStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="concerns" className="text-white">
                            What would you like to discuss?
                          </Label>
                          <Textarea
                            id="concerns"
                            placeholder="Briefly describe your concerns or what you'd like to work on..."
                            value={bookingData.concerns}
                            onChange={(e) => setBookingData({ ...bookingData, concerns: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                          />
                        </div>

                        <div>
                          <Label htmlFor="emergency" className="text-white">
                            Emergency Contact
                          </Label>
                          <Input
                            id="emergency"
                            placeholder="Emergency contact number"
                            value={bookingData.emergencyContact}
                            onChange={(e) => setBookingData({ ...bookingData, emergencyContact: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setBookingStep(1)}
                            className="flex-1 border-white/20 text-white hover:bg-white/10"
                          >
                            Back
                          </Button>
                          <Button
                            onClick={() => setBookingStep(3)}
                            className="flex-1 bg-purple-600 hover:bg-purple-700"
                            disabled={!bookingData.concerns || !bookingData.emergencyContact}
                          >
                            Review
                          </Button>
                        </div>
                      </div>
                    )}

                    {bookingStep === 3 && (
                      <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-lg space-y-2">
                          <h4 className="font-medium text-white">Booking Summary</h4>
                          <div className="text-sm text-purple-200 space-y-1">
                            <p>
                              <strong>Therapist:</strong> {selectedTherapist?.name}
                            </p>
                            <p>
                              <strong>Date:</strong> {bookingData.date}
                            </p>
                            <p>
                              <strong>Time:</strong> {bookingData.time}
                            </p>
                            <p>
                              <strong>Type:</strong> {bookingData.sessionType}
                            </p>
                            <p>
                              <strong>Fee:</strong> ₹{selectedTherapist?.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setBookingStep(2)}
                            className="flex-1 border-white/20 text-white hover:bg-white/10"
                          >
                            Back
                          </Button>
                          <Button onClick={handleBooking} className="flex-1 bg-green-600 hover:bg-green-700">
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTherapists.length === 0 && (
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="text-center py-8">
            <p className="text-white">No therapists found matching your criteria.</p>
            <p className="text-purple-200 text-sm mt-2">Try adjusting your filters or search terms.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
