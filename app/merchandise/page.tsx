"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Heart,
  Star,
  ArrowLeft,
  Plus,
  Minus,
  Zap,
  FlameIcon as Fire,
  Sparkles,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"

const merchandise = [
  {
    id: 1,
    name: "IGNITE Fire Hoodie",
    price: 1299,
    originalPrice: 1599,
    image: "/placeholder.svg?height=600&width=400&text=🔥+Premium+Fire+Hoodie+Black",
    category: "Apparel",
    rating: 4.8,
    reviews: 124,
    colors: ["Black", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Premium quality hoodie with flame graphics and IGNITE 2025 branding. Made with 100% organic cotton for ultimate comfort.",
    features: ["100% Organic Cotton", "Unisex Design", "Limited Edition", "Flame Graphics", "Premium Quality"],
    trending: true,
    newDrop: false,
  },
  {
    id: 2,
    name: "Neon Glow Tee",
    price: 699,
    originalPrice: 899,
    image: "/placeholder.svg?height=600&width=400&text=⚡+Neon+Glow+Tee+Electric+Blue",
    category: "Apparel",
    rating: 4.6,
    reviews: 89,
    colors: ["Neon Green", "Electric Blue", "Hot Pink"],
    sizes: ["S", "M", "L", "XL"],
    description: "Vibrant neon t-shirt that literally glows under UV light. Perfect for night events and parties.",
    features: ["Glow-in-Dark", "UV Reactive", "Moisture Wicking", "Breathable Fabric", "Neon Colors"],
    trending: false,
    newDrop: true,
  },
  {
    id: 3,
    name: "Champion Snapback",
    price: 499,
    originalPrice: 699,
    image: "/placeholder.svg?height=600&width=400&text=👑+Champion+Snapback+Gold+Logo",
    category: "Accessories",
    rating: 4.7,
    reviews: 156,
    colors: ["Black", "White", "Gold"],
    sizes: ["One Size"],
    description:
      "Adjustable snapback with holographic IGNITE logo. Premium fabric construction with embroidered details.",
    features: ["Holographic Logo", "Adjustable Fit", "Premium Fabric", "Embroidered Details", "Structured Crown"],
    trending: true,
    newDrop: false,
  },
  {
    id: 4,
    name: "Hydro Beast Bottle",
    price: 399,
    originalPrice: 549,
    image: "/placeholder.svg?height=600&width=400&text=💧+Smart+Hydro+Beast+Bottle+LED",
    category: "Accessories",
    rating: 4.9,
    reviews: 203,
    colors: ["Matte Black", "Neon Yellow", "Electric Blue"],
    sizes: ["750ml"],
    description: "Smart water bottle with temperature display and LED indicators. Keeps drinks cold for 24 hours.",
    features: ["Temperature Display", "LED Indicators", "24hr Cold", "BPA Free", "Smart Technology"],
    trending: false,
    newDrop: true,
  },
  {
    id: 5,
    name: "RGB Gaming Backpack",
    price: 2199,
    originalPrice: 2799,
    image: "/placeholder.svg?height=600&width=400&text=🎮+RGB+Gaming+Backpack+LED+Lights",
    category: "Accessories",
    rating: 4.8,
    reviews: 67,
    colors: ["RGB Black", "Cyber Blue"],
    sizes: ["One Size"],
    description: "LED-equipped backpack with customizable RGB lighting. Perfect for gamers and tech enthusiasts.",
    features: ["Customizable RGB", "USB Charging Port", "Laptop Compartment", "Anti-theft Design", "Water Resistant"],
    trending: true,
    newDrop: true,
  },
  {
    id: 6,
    name: "Flame Joggers",
    price: 1099,
    originalPrice: 1399,
    image: "/placeholder.svg?height=600&width=400&text=🔥+Flame+Joggers+Reflective+Pattern",
    category: "Apparel",
    rating: 4.5,
    reviews: 91,
    colors: ["Black", "Grey", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable joggers with reflective flame pattern. Perfect for workouts and casual wear.",
    features: ["Reflective Design", "Elastic Waistband", "Side Pockets", "Tapered Fit", "Moisture Wicking"],
    trending: false,
    newDrop: false,
  },
]

export default function MerchandisePage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState(merchandise[0])

  useEffect(() => {
    document.body.className = "merch-page"
    return () => {
      document.body.className = ""
    }
  }, [])

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [id, count]) => {
      const product = merchandise.find((p) => p.id === Number.parseInt(id))
      return sum + (product?.price || 0) * count
    }, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to IGNITE
              </Button>
            </Link>

            <motion.h1
              className="text-3xl font-black text-white font-bebas bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              MERCH STORE
            </motion.h1>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-black relative shadow-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                CART ({getTotalItems()})
                {getTotalItems() > 0 && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    {getTotalItems()}
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left side - Product List (Vertical Scroll) */}
        <div className="w-1/3 bg-black/40 backdrop-blur-sm border-r border-gray-800">
          <div className="p-6">
            <h2 className="text-2xl font-black text-white mb-6 font-bebas">Products</h2>
            <div className="space-y-4 vertical-scroll max-h-[calc(100vh-200px)] overflow-y-auto">
              {merchandise.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProduct(product)}
                  className={`cursor-pointer p-4 rounded-xl transition-all ${
                    selectedProduct.id === product.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50"
                      : "bg-gray-800/50 hover:bg-gray-700/50 border-2 border-transparent"
                  }`}
                >
                  <div className="flex gap-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-bold text-sm">{product.name}</h3>
                        <div className="flex gap-1">
                          {product.trending && (
                            <Badge className="bg-red-500 text-white text-xs">
                              <Fire className="h-2 w-2 mr-1" />
                              HOT
                            </Badge>
                          )}
                          {product.newDrop && (
                            <Badge className="bg-green-500 text-white text-xs">
                              <Sparkles className="h-2 w-2 mr-1" />
                              NEW
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-300">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-black">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="relative">
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {selectedProduct.trending && (
                      <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                        <Fire className="h-3 w-3 mr-1" />
                        TRENDING
                      </Badge>
                    )}
                    {selectedProduct.newDrop && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
                        <Sparkles className="h-3 w-3 mr-1" />
                        NEW DROP
                      </Badge>
                    )}
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold">
                        {Math.round(
                          ((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) *
                            100,
                        )}
                        % OFF
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <motion.button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm ${
                      wishlist.includes(selectedProduct.id)
                        ? "bg-red-500 text-white"
                        : "bg-black/30 text-white hover:bg-red-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-black text-white mb-4 font-bebas">{selectedProduct.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(selectedProduct.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-bold">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-gray-400">({selectedProduct.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-black text-yellow-400">₹{selectedProduct.price}</span>
                      {selectedProduct.originalPrice > selectedProduct.price && (
                        <span className="text-2xl text-gray-500 line-through">₹{selectedProduct.originalPrice}</span>
                      )}
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedProduct.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <Zap className="h-4 w-4 text-cyan-400" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Available Colors</h3>
                    <div className="flex gap-3">
                      {selectedProduct.colors.map((color, index) => (
                        <motion.div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-600 cursor-pointer"
                          style={{
                            backgroundColor: color.toLowerCase().includes("black")
                              ? "#000"
                              : color.toLowerCase().includes("white")
                                ? "#fff"
                                : color.toLowerCase().includes("red")
                                  ? "#ef4444"
                                  : color.toLowerCase().includes("blue")
                                    ? "#3b82f6"
                                    : color.toLowerCase().includes("green")
                                      ? "#10b981"
                                      : color.toLowerCase().includes("yellow")
                                        ? "#f59e0b"
                                        : color.toLowerCase().includes("pink")
                                          ? "#ec4899"
                                          : color.toLowerCase().includes("purple")
                                            ? "#8b5cf6"
                                            : "#6b7280",
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Sizes</h3>
                    <div className="flex gap-2">
                      {selectedProduct.sizes.map((size, index) => (
                        <motion.button
                          key={index}
                          className="px-4 py-2 border border-gray-600 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="flex gap-4">
                    {cart[selectedProduct.id] ? (
                      <div className="flex items-center gap-4 flex-1 bg-gray-800/50 rounded-xl p-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromCart(selectedProduct.id)}
                          className="text-white hover:bg-red-500/20 p-2 h-10 w-10"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="text-white font-bold text-xl px-4">{cart[selectedProduct.id]}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => addToCart(selectedProduct.id)}
                          className="text-white hover:bg-green-500/20 p-2 h-10 w-10"
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    ) : (
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={() => addToCart(selectedProduct.id)}
                          className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-black text-lg py-6 shadow-lg"
                        >
                          <ShoppingBag className="mr-2 h-6 w-6" />
                          ADD TO CART
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Cart Summary */}
      <AnimatePresence>
        {getTotalItems() > 0 && (
          <motion.div
            className="fixed bottom-6 right-6 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl z-50"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="h-5 w-5 text-yellow-400" />
                <p className="font-black text-lg">CART SUMMARY</p>
              </div>
              <p className="text-sm text-gray-400 mb-1">{getTotalItems()} items</p>
              <p className="text-2xl font-black text-yellow-400 mb-4">₹{getTotalPrice()}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black shadow-lg">
                  CHECKOUT NOW 🚀
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
