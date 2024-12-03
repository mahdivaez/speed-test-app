import React from "react";
import { motion } from "framer-motion";
import { Download, Upload, Activity } from 'lucide-react';
import { Button } from "./ui/Button";

interface ResultsViewProps {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  downloadSpeed,
  uploadSpeed,
  ping,
  jitter,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white text-center mb-8"
      >
        نتیجه تست سرعت دقیق با سرور تهران
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 backdrop-blur-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-cyan-400 mb-4">
            <Download className="w-5 h-5" />
            <span className="text-sm font-medium">سرعت دانلود</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {downloadSpeed.toFixed(2)}
            <span className="text-lg font-normal text-gray-400 mr-2">
              مگابیت بر ثانیه
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity:0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 backdrop-blur-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-purple-400 mb-4">
            <Upload className="w-5 h-5" />
            <span className="text-sm font-medium">سرعت آپلود</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {uploadSpeed.toFixed(2)}
            <span className="text-lg font-normal text-gray-400 mr-2">
              مگابیت بر ثانیه
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 backdrop-blur-xl border border-white/10"
        >
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-medium">جیتر</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {jitter.toFixed(2)}
            <span className="text-lg font-normal text-gray-400 mr-2">
              میلی‌ثانیه
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 backdrop-blur-xl border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-medium text-gray-400">زمان پاسخ دهی</div>
          <div className="text-sm font-medium text-white">{ping} میلی‌ثانیه</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400 w-20">کمترین</div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ delay: 0.5 }}
                className="h-full bg-cyan-500"
              />
            </div>
            <div className="text-sm text-white w-20 text-left">
              {(ping * 0.8).toFixed(1)}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400 w-20">میانگین</div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.6 }}
                className="h-full bg-purple-500"
              />
            </div>
            <div className="text-sm text-white w-20 text-left">{ping}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400 w-20">بیشترین</div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ delay: 0.7 }}
                className="h-full bg-emerald-500"
              />
            </div>
            <div className="text-sm text-white w-20 text-left">
              {(ping * 1.2).toFixed(1)}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-emerald-400 mb-4">
          وضعیت اینترنت شما مناسب برای بازی، نمایش تصویری و صوتی می باشد.
        </p>
        <Button className="bg-cyan-500 text-white px-8 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors">
          ورود
        </Button>
      </motion.div>
    </div>
  );
};