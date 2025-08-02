"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft, Trophy, Upload, Users, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const eventDetails = {
  1: { name: "Thunder Court Championship", sport: "Basketball", fee: 500, icon: "🏀" },
  2: { name: "Goal Rush Tournament", sport: "Football", fee: 600, icon: "⚽" },
  3: { name: "Spike Masters Cup", sport: "Volleyball", fee: 400, icon: "🏐" },
  4: { name: "Speed Lightning Championship", sport: "Track & Field", fee: 300, icon: "🏃" },
  5: { name: "Aqua Warriors Challenge", sport: "Swimming", fee: 350, icon: "🏊" },
  6: { name: "Power Pull Battle", sport: "Tug of War", fee: 250, icon: "🪢" },
}

export default function EventRegistrationPage() {
  const params = useParams()
  const eventId = Number.parseInt(params.eventId as string)
  const event = eventDetails[eventId as keyof typeof eventDetails]

  const [step, setStep] = useState(1)
  const [registrationType, setRegistrationType] = useState<"individual" | "team">("team")
  const [formData, setFormData] = useState({
    // Team/Individual info
    teamName: "",
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    college: "",

    // Individual info
    participantName: "",
    participantEmail: "",
    participantPhone: "",

    // Additional details
    experience: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalConditions: "",

    // Team members (for team events)
    teamMembers: [{ name: "", email: "", phone: "" }],
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const addTeamMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, { name: "", email: "", phone: "" }],
    })
  }

  const removeTeamMember = (index: number) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter((_, i) => i !== index),
    })
  }

  const updateTeamMember = (index: number, field: string, value: string) => {
    const updatedMembers = formData.teamMembers.map((member, i) =>
      i === index ? { ...member, [field]: value } : member,
    )
    setFormData({ ...formData, teamMembers: updatedMembers })
  }

  const handleSubmit = () => {
    setStep(5) // Success step
  }

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 py-8">
      <div className="container mx-auto px-4">
        <Link href="/events">
          <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">{event.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white font-bebas">
                Register for <span className="text-yellow-400">{event.name}</span>
              </h1>
              <Badge className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                Registration Fee: ₹{event.fee}
              </Badge>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= i ? "bg-yellow-400 text-black" : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((step - 1) / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Registration Type</span>
              <span>Details</span>
              <span>Team/Members</span>
              <span>Payment</span>
            </div>
          </div>

          <Card className="bg-gray-800/90 border-gray-700">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Choose Registration Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                          registrationType === "team"
                            ? "border-yellow-400 bg-yellow-400/20"
                            : "border-gray-600 hover:border-gray-500"
                        }`}
                        onClick={() => setRegistrationType("team")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Users className="h-12 w-12 text-yellow-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Team Registration</h4>
                        <p className="text-gray-400">Register as a team with multiple members</p>
                        <Badge className="mt-3 bg-yellow-400/20 text-yellow-400">Recommended for {event.sport}</Badge>
                      </motion.div>

                      <motion.div
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                          registrationType === "individual"
                            ? "border-cyan-400 bg-cyan-400/20"
                            : "border-gray-600 hover:border-gray-500"
                        }`}
                        onClick={() => setRegistrationType("individual")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <User className="h-12 w-12 text-cyan-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Individual Registration</h4>
                        <p className="text-gray-400">Register as an individual participant</p>
                        <Badge className="mt-3 bg-cyan-400/20 text-cyan-400">Solo Warrior</Badge>
                      </motion.div>
                    </div>

                    <Button
                      onClick={nextStep}
                      className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3"
                    >
                      Continue <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {registrationType === "team" ? "Team Details" : "Participant Details"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {registrationType === "team" ? (
                        <>
                          <div>
                            <Label htmlFor="teamName" className="text-white">
                              Team Name *
                            </Label>
                            <Input
                              id="teamName"
                              value={formData.teamName}
                              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="Enter your team name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="captainName" className="text-white">
                              Captain Name *
                            </Label>
                            <Input
                              id="captainName"
                              value={formData.captainName}
                              onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="Enter captain name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="captainEmail" className="text-white">
                              Captain Email *
                            </Label>
                            <Input
                              id="captainEmail"
                              type="email"
                              value={formData.captainEmail}
                              onChange={(e) => setFormData({ ...formData, captainEmail: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="captain@email.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="captainPhone" className="text-white">
                              Captain Phone *
                            </Label>
                            <Input
                              id="captainPhone"
                              value={formData.captainPhone}
                              onChange={(e) => setFormData({ ...formData, captainPhone: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <Label htmlFor="participantName" className="text-white">
                              Full Name *
                            </Label>
                            <Input
                              id="participantName"
                              value={formData.participantName}
                              onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="participantEmail" className="text-white">
                              Email *
                            </Label>
                            <Input
                              id="participantEmail"
                              type="email"
                              value={formData.participantEmail}
                              onChange={(e) => setFormData({ ...formData, participantEmail: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="participantPhone" className="text-white">
                              Phone *
                            </Label>
                            <Input
                              id="participantPhone"
                              value={formData.participantPhone}
                              onChange={(e) => setFormData({ ...formData, participantPhone: e.target.value })}
                              className="bg-gray-700/50 border-gray-600 text-white"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </>
                      )}
                      <div className="md:col-span-2">
                        <Label htmlFor="college" className="text-white">
                          College/Institution *
                        </Label>
                        <Input
                          id="college"
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white"
                          placeholder="Enter your college name"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="experience" className="text-white">
                          Experience Level
                        </Label>
                        <Textarea
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white"
                          placeholder="Describe your experience in this sport..."
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button onClick={prevStep} variant="outline" className="flex-1 bg-transparent">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={nextStep}
                        className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {registrationType === "team" ? "Team Members" : "Emergency Contact"}
                    </h3>

                    {registrationType === "team" ? (
                      <div className="space-y-6">
                        {formData.teamMembers.map((member, index) => (
                          <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-white font-semibold">Member {index + 1}</h4>
                              {index > 0 && (
                                <Button
                                  onClick={() => removeTeamMember(index)}
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-400 hover:text-red-300"
                                >
                                  Remove
                                </Button>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <Input
                                value={member.name}
                                onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                                className="bg-gray-700/50 border-gray-600 text-white"
                                placeholder="Member name"
                              />
                              <Input
                                type="email"
                                value={member.email}
                                onChange={(e) => updateTeamMember(index, "email", e.target.value)}
                                className="bg-gray-700/50 border-gray-600 text-white"
                                placeholder="member@email.com"
                              />
                              <Input
                                value={member.phone}
                                onChange={(e) => updateTeamMember(index, "phone", e.target.value)}
                                className="bg-gray-700/50 border-gray-600 text-white"
                                placeholder="Phone number"
                              />
                            </div>
                          </div>
                        ))}
                        <Button
                          onClick={addTeamMember}
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        >
                          + Add Team Member
                        </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="emergencyContact" className="text-white">
                            Emergency Contact Name *
                          </Label>
                          <Input
                            id="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                            className="bg-gray-700/50 border-gray-600 text-white"
                            placeholder="Emergency contact name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyPhone" className="text-white">
                            Emergency Contact Phone *
                          </Label>
                          <Input
                            id="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                            className="bg-gray-700/50 border-gray-600 text-white"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="medicalConditions" className="text-white">
                            Medical Conditions (if any)
                          </Label>
                          <Textarea
                            id="medicalConditions"
                            value={formData.medicalConditions}
                            onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
                            className="bg-gray-700/50 border-gray-600 text-white"
                            placeholder="Any medical conditions we should know about..."
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <Label className="text-white mb-4 block">Upload Documents</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400 text-sm">College ID Card</p>
                          <Button variant="ghost" size="sm" className="mt-2 text-cyan-400">
                            Choose File
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400 text-sm">Medical Certificate</p>
                          <Button variant="ghost" size="sm" className="mt-2 text-cyan-400">
                            Choose File
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button onClick={prevStep} variant="outline" className="flex-1 bg-transparent">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={nextStep}
                        className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Payment & Confirmation</h3>

                    <div className="bg-gray-700/30 rounded-lg p-6 mb-6">
                      <h4 className="text-white font-semibold mb-4">Registration Summary</h4>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                          <span>Event:</span>
                          <span className="text-yellow-400">{event.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Type:</span>
                          <span className="capitalize">{registrationType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Fee:</span>
                          <span className="text-green-400">₹{event.fee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Processing Fee:</span>
                          <span>₹50</span>
                        </div>
                        <hr className="border-gray-600" />
                        <div className="flex justify-between font-bold text-white">
                          <span>Total Amount:</span>
                          <span className="text-yellow-400">₹{event.fee + 50}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Payment Method</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border-2 border-yellow-400 bg-yellow-400/20 rounded-lg">
                          <div className="text-center">
                            <div className="text-2xl mb-2">💳</div>
                            <p className="text-white font-semibold">UPI/Card</p>
                            <p className="text-gray-400 text-sm">Instant payment</p>
                          </div>
                        </div>
                        <div className="p-4 border-2 border-gray-600 rounded-lg hover:border-gray-500 cursor-pointer">
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏦</div>
                            <p className="text-white font-semibold">Net Banking</p>
                            <p className="text-gray-400 text-sm">Secure transfer</p>
                          </div>
                        </div>
                        <div className="p-4 border-2 border-gray-600 rounded-lg hover:border-gray-500 cursor-pointer">
                          <div className="text-center">
                            <div className="text-2xl mb-2">📱</div>
                            <p className="text-white font-semibold">Wallet</p>
                            <p className="text-gray-400 text-sm">Quick pay</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button onClick={prevStep} variant="outline" className="flex-1 bg-transparent">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold"
                      >
                        Pay ₹{event.fee + 50} & Register
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <Trophy className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-4xl font-bold text-white mb-4">Registration Successful! 🎉</h3>
                    <p className="text-gray-400 mb-6 text-lg">Welcome to {event.name}! You're all set to compete.</p>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-lg font-bold mb-6">
                      <p className="text-xl mb-2">Registration ID</p>
                      <p className="text-2xl">
                        #IG2025{eventId}
                        {Math.floor(Math.random() * 1000)}
                      </p>
                    </div>
                    <div className="space-y-4 text-gray-300">
                      <p>✅ Payment confirmed</p>
                      <p>✅ Registration email sent</p>
                      <p>✅ Event details shared</p>
                    </div>
                    <Link href="/events">
                      <Button className="mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-black font-bold">
                        View All Events
                      </Button>
                    </Link>

                    {/* Confetti effect */}
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: (Math.random() - 0.5) * 600,
                          y: Math.random() * -300,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 3,
                          delay: Math.random() * 1,
                        }}
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
