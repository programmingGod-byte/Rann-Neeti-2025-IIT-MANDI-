"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight, ChevronLeft, Trophy } from "lucide-react"

const sports = [
  { name: "Basketball", icon: "🏀", fee: "₹500" },
  { name: "Football", icon: "⚽", fee: "₹600" },
  { name: "Volleyball", icon: "🏐", fee: "₹400" },
  { name: "Track & Field", icon: "🏃", fee: "₹300" },
  { name: "Swimming", icon: "🏊", fee: "₹350" },
  { name: "Tug of War", icon: "🪢", fee: "₹250" },
]

export default function RegistrationForm() {
  const [step, setStep] = useState(1)
  const [selectedSport, setSelectedSport] = useState("")
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    college: "",
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = () => {
    // Simulate registration success
    setStep(4)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center text-white mb-16 font-bebas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the <span className="text-yellow-400">Battle</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
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
                animate={{ width: `${((step - 1) / 2) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <Card className="bg-gray-800/80 border-gray-700">
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
                    <h3 className="text-2xl font-bold text-white mb-6">Choose Your Sport</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {sports.map((sport) => (
                        <motion.div
                          key={sport.name}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedSport === sport.name
                              ? "border-yellow-400 bg-yellow-400/20"
                              : "border-gray-600 hover:border-gray-500"
                          }`}
                          onClick={() => setSelectedSport(sport.name)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="text-3xl mb-2">{sport.icon}</div>
                          <div className="text-white font-bold">{sport.name}</div>
                          <div className="text-gray-400 text-sm">{sport.fee}</div>
                        </motion.div>
                      ))}
                    </div>
                    <Button
                      onClick={nextStep}
                      disabled={!selectedSport}
                      className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
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
                    <h3 className="text-2xl font-bold text-white mb-6">Team Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="teamName" className="text-white">
                          Team Name
                        </Label>
                        <Input
                          id="teamName"
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Enter team name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="captainName" className="text-white">
                          Captain Name
                        </Label>
                        <Input
                          id="captainName"
                          value={formData.captainName}
                          onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Enter captain name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Enter email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="college" className="text-white">
                          College
                        </Label>
                        <Input
                          id="college"
                          value={formData.college}
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Enter college name"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
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
                    <h3 className="text-2xl font-bold text-white mb-6">Upload ID Card</h3>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                      <div className="text-4xl mb-4">📄</div>
                      <p className="text-gray-400 mb-4">Drag and drop your college ID card or click to browse</p>
                      <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                        Choose File
                      </Button>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button onClick={prevStep} variant="outline" className="flex-1 bg-transparent">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
                      >
                        Complete Registration
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
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
                      <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Registration Complete!</h3>
                    <p className="text-gray-400 mb-6">
                      Welcome to IGNITE 2025! You've successfully registered for {selectedSport}.
                    </p>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-lg font-bold">
                      Registration ID: #IG2025{Math.floor(Math.random() * 10000)}
                    </div>
                    {/* Confetti effect */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: (Math.random() - 0.5) * 400,
                          y: Math.random() * -200,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 2,
                          delay: Math.random() * 0.5,
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
    </section>
  )
}
