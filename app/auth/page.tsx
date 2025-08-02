"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Sparkles, Zap, Trophy, Target } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    document.body.className = "auth-page"
    return () => {
      document.body.className = ""
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Auth submitted:", formData)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Sports Gen Z Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920&text=Gen+Z+Sports+Arena+Basketball+Court+Neon+Lights"
          alt="Sports Arena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Floating neon elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-60" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Branding */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <Link href="/">
            <motion.div whileHover={{ x: -5 }} className="mb-8">
              <Button
                variant="ghost"
                className="text-cyan-400 hover:text-white bg-black/30 backdrop-blur-sm border border-cyan-500/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to IGNITE
              </Button>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-lg"
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-black text-white mb-6 font-bebas leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                IGNITE
              </span>
              <br />
              <span className="text-yellow-400">2025</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join the ultimate sports festival where champions are born and legends are made.
              <span className="text-cyan-400 font-bold"> Ready to ignite your passion?</span>
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Live Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">₹50L+ Prizes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Auth Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <Card className="bg-black/60 border-gray-700/50 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="flex justify-center gap-3 mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Trophy className="h-6 w-6 text-yellow-400" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Zap className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      <Target className="h-6 w-6 text-purple-400" />
                    </motion.div>
                  </motion.div>

                  <motion.h2
                    className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {isLogin ? "Welcome Back!" : "Join the Arena"}
                  </motion.h2>
                  <motion.p
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    {isLogin ? "Ready to compete? 🔥" : "Create your champion profile ⚡"}
                  </motion.p>
                </div>

                {/* Toggle buttons */}
                <div className="relative bg-gray-800/50 rounded-2xl p-1 mb-8 backdrop-blur-sm">
                  <motion.div
                    className="absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600"
                    animate={{
                      left: isLogin ? "4px" : "50%",
                      width: "calc(50% - 4px)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <div className="relative flex">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                        isLogin ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
                        !isLogin ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label htmlFor="name" className="text-white flex items-center gap-2 mb-2 font-semibold">
                          <User className="h-4 w-4 text-purple-400" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12 rounded-xl backdrop-blur-sm"
                          placeholder="Enter your name"
                          required={!isLogin}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <Label htmlFor="email" className="text-white flex items-center gap-2 mb-2 font-semibold">
                      <Mail className="h-4 w-4 text-cyan-400" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 rounded-xl backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-white flex items-center gap-2 mb-2 font-semibold">
                      <Lock className="h-4 w-4 text-yellow-400" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12 rounded-xl backdrop-blur-sm pr-12"
                        placeholder="Enter password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label
                          htmlFor="confirmPassword"
                          className="text-white flex items-center gap-2 mb-2 font-semibold"
                        >
                          <Lock className="h-4 w-4 text-pink-400" />
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20 h-12 rounded-xl backdrop-blur-sm"
                          placeholder="Confirm password"
                          required={!isLogin}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full py-4 font-black text-lg h-14 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-cyan-500/25"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      {isLogin ? "Enter the Arena 🚀" : "Join the Champions 💪"}
                    </Button>
                  </motion.div>
                </form>

                {/* Social login */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-black/60 text-gray-400 font-semibold">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 h-12 rounded-xl backdrop-blur-sm"
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700 h-12 rounded-xl backdrop-blur-sm"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                        Twitter
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {isLogin && (
                  <div className="mt-6 text-center">
                    <motion.a
                      href="#"
                      className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Forgot password? 🔑
                    </motion.a>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
