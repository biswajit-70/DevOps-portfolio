import { motion } from "framer-motion";

export default function DevOpsInfinity() {
  const stages = [
    // DEV LOOP (LEFT) - Improved positioning
    { label: "PLAN", icon: "📋", x: 100, y: 70, color: "#06b6d4" },
    { label: "CODE", icon: "💻", x: 160, y: 50, color: "#3b82f6" },
    { label: "BUILD", icon: "🔨", x: 190, y: 110, color: "#8b5cf6" },
    { label: "TEST", icon: "🧪", x: 160, y: 170, color: "#ec4899" },

    // OPS LOOP (RIGHT) - Improved positioning
    { label: "RELEASE", icon: "📦", x: 230, y: 50, color: "#f97316" },
    { label: "DEPLOY", icon: "🚀", x: 290, y: 110, color: "#eab308" },
    { label: "OPERATE", icon: "⚙️", x: 230, y: 170, color: "#22c55e" }
  ];

  return (
    <div className="relative w-[420px] h-[220px] mx-auto">
      {/* DEVOPS INFINITY SVG */}
      <svg
        width="420"
        height="220"
        viewBox="0 0 420 220"
        className="absolute inset-0 drop-shadow-2xl"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Outer glow */}
        <motion.path
          d="
            M 60 110
            C 60 40, 180 40, 210 110
            C 240 180, 360 180, 360 110
            C 360 40, 240 40, 210 110
            C 180 180, 60 180, 60 110
          "
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="14"
          opacity="0.25"
          filter="blur(8px)"
        />

        {/* Main infinity path */}
        <motion.path
          d="
            M 60 110
            C 60 40, 180 40, 210 110
            C 240 180, 360 180, 360 110
            C 360 40, 240 40, 210 110
            C 180 180, 60 180, 60 110
          "
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Inner highlight */}
        <motion.path
          d="
            M 60 110
            C 60 40, 180 40, 210 110
            C 240 180, 360 180, 360 110
            C 360 40, 240 40, 210 110
            C 180 180, 60 180, 60 110
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity
          }}
        />
      </svg>

      {/* CI/CD STAGES */}
      {stages.map((stage, index) => (
        <motion.div
          key={stage.label}
          className="absolute"
          style={{
            left: stage.x,
            top: stage.y,
            transform: "translate(-50%, -50%)"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-lg opacity-50"
              style={{ backgroundColor: stage.color }}
            />

            {/* Badge */}
            <div
              className="relative px-3 py-1.5 rounded-full border backdrop-blur-sm flex items-center gap-1.5"
              style={{
                borderColor: stage.color,
                backgroundColor: `${stage.color}20`
              }}
            >
              <span className="text-sm">{stage.icon}</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: stage.color }}
              >
                {stage.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* CENTER TEXT */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          DevOps
        </h3>
        <p className="text-xs font-mono tracking-widest text-cyan-400">
          CONTINUOUS CI/CD
        </p>
      </motion.div>
    </div>
  );
}