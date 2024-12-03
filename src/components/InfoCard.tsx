import { motion } from "framer-motion"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface InfoCardProps {
  icon: LucideIcon
  label: string
  value: string
  delay?: number
}

export function InfoCard({ icon: Icon, label, value, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay }}
      className="bg-[#010144]/50 rounded-xl p-6 backdrop-blur-xl border border-blue-900/20"
    >
      <div className="flex items-center gap-2 text-blue-400 mb-2">
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="text-white text-xl font-medium">{value}</div>
    </motion.div>
  )
}

