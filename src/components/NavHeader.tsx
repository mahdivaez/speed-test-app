import React from 'react';
import { Sun } from 'lucide-react';

export const NavHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-navy-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <a href="#" className="text-cyan-400 text-sm font-medium transition-colors hover:text-cyan-300">
            تست سرعت
          </a>
          <a href="#" className="text-gray-400 text-sm font-medium transition-colors hover:text-gray-300">
            دشبورد عمومی
          </a>
          <a href="#" className="text-gray-400 text-sm font-medium transition-colors hover:text-gray-300">
            پرسش و پاسخ
          </a>
          <a href="#" className="text-gray-400 text-sm font-medium transition-colors hover:text-gray-300">
            درباره ما
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
            <Sun className="w-5 h-5 text-gray-400" />
          </button>
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SPEEDTEST
          </div>
        </div>
      </div>
    </header>
  );
};