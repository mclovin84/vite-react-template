"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BehaviorPanelProps {
  title: string
  behaviors: string[]
  isOpen: boolean
  onClose: () => void
  color: string
}

const BehaviorPanel: React.FC<BehaviorPanelProps> = ({ title, behaviors, isOpen, onClose, color }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          className={`bg-gray-900/95 border-2 rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl`}
          style={{ borderColor: color, boxShadow: `0 0 20px ${color}40` }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color }}>
            {title}
          </h3>
          <div className="space-y-2">
            {behaviors.map((behavior, index) => (
              <div key={index} className="text-gray-300 flex items-center">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
                />
                {behavior}
              </div>
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 rounded border transition-all duration-200 hover:shadow-lg"
            style={{
              borderColor: color,
              color: color,
              boxShadow: `0 0 10px ${color}40`,
            }}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const CyberCelticPattern: React.FC<{ color: string; size: number; id: string }> = ({ color, size, id }) => (
  <svg width={size} height={size} className="absolute inset-0">
    <defs>
      <filter id={`glow-${id}`}>
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern id={`pattern-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M20,5 L35,20 L20,35 L5,20 Z M10,10 L30,10 M10,30 L30,30 M10,10 L10,30 M30,10 L30,30"
          stroke={color}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <circle cx="20" cy="20" r="3" fill={color} opacity="0.4" />
      </pattern>
    </defs>

    {/* Main ring structure */}
    <circle
      cx={size / 2}
      cy={size / 2}
      r={size / 2 - 20}
      fill="none"
      stroke={color}
      strokeWidth="2"
      filter={`url(#glow-${id})`}
      opacity="0.8"
    />

    {/* Inner pattern ring */}
    <circle cx={size / 2} cy={size / 2} r={size / 2 - 40} fill="none" stroke={color} strokeWidth="1" opacity="0.6" />

    {/* Celtic knot patterns */}
    <g stroke={color} strokeWidth="1.5" fill="none" filter={`url(#glow-${id})`} opacity="0.7">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x1 = size / 2 + Math.cos(angle) * (size / 2 - 60)
        const y1 = size / 2 + Math.sin(angle) * (size / 2 - 60)
        const x2 = size / 2 + Math.cos(angle) * (size / 2 - 30)
        const y2 = size / 2 + Math.sin(angle) * (size / 2 - 30)

        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} />
            <circle cx={x1} cy={y1} r="2" fill={color} />
          </g>
        )
      })}
    </g>

    {/* Tech grid overlay */}
    <rect x="0" y="0" width={size} height={size} fill={`url(#pattern-${id})`} opacity="0.3" mask="url(#ring-mask)" />

    <defs>
      <mask id="ring-mask">
        <rect width={size} height={size} fill="black" />
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 20} fill="white" />
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 80} fill="black" />
      </mask>
    </defs>
  </svg>
)

export default function ThreeCircles() {
  const [activePanel, setActivePanel] = useState<string | null>(null)

  const outerBehaviors = [
    "Perimeter Defense Protocols",
    "External Threat Detection",
    "Communication Array Management",
    "Environmental Scanning",
    "Resource Allocation Control",
  ]

  const middleBehaviors = [
    "Data Processing Hub",
    "Neural Network Coordination",
    "Memory Buffer Management",
    "Pattern Recognition Systems",
    "Adaptive Learning Protocols",
  ]

  const innerBehaviors = [
    "Core System Management",
    "Critical Decision Making",
    "Emergency Response Protocols",
    "Primary Objective Execution",
    "System Integrity Monitoring",
  ]

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background matrix effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-orange-900/20" />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/40 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main circles container */}
      <div className="relative w-[600px] h-[600px]">
        {/* Outer Circle */}
        <motion.div
          className="absolute inset-0 cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          onClick={() => setActivePanel("outer")}
        >
          <CyberCelticPattern color="#00ff88" size={600} id="outer" />
        </motion.div>

        {/* Middle Circle */}
        <motion.div
          className="absolute inset-[75px] cursor-pointer"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          onClick={() => setActivePanel("middle")}
        >
          <CyberCelticPattern color="#ffaa00" size={450} id="middle" />
        </motion.div>

        {/* Inner Circle */}
        <motion.div
          className="absolute inset-[150px] cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          onClick={() => setActivePanel("inner")}
        >
          <CyberCelticPattern color="#ff4400" size={300} id="inner" />
        </motion.div>

        {/* Static Labels */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-green-400 font-mono text-sm tracking-wider text-center">
          OUTER CIRCLE
          <div className="w-px h-8 bg-green-400/60 mx-auto mt-1" />
        </div>

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-amber-400 font-mono text-sm tracking-wider text-center">
          MIDDLE CIRCLE
          <div className="w-px h-8 bg-amber-400/60 mx-auto mt-1" />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-400 font-mono text-xs tracking-wider text-center">
          INNER
          <br />
          CIRCLE
        </div>

        {/* Center core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-500/20 border border-red-400 shadow-lg shadow-red-400/50" />
      </div>

      {/* Behavior Panels */}
      <BehaviorPanel
        title="Outer Circle Behaviors"
        behaviors={outerBehaviors}
        isOpen={activePanel === "outer"}
        onClose={() => setActivePanel(null)}
        color="#00ff88"
      />

      <BehaviorPanel
        title="Middle Circle Behaviors"
        behaviors={middleBehaviors}
        isOpen={activePanel === "middle"}
        onClose={() => setActivePanel(null)}
        color="#ffaa00"
      />

      <BehaviorPanel
        title="Inner Circle Behaviors"
        behaviors={innerBehaviors}
        isOpen={activePanel === "inner"}
        onClose={() => setActivePanel(null)}
        color="#ff4400"
      />
    </div>
  )
}