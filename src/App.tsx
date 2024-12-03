import React, { useState, useEffect } from "react";
import { NavHeader } from "./components/NavHeader";
import { SpeedGauge } from "./components/SpeedGauge";
import { InfoCard } from "./components/InfoCard";
import { ResultsView } from "./components/ResultsView";
import { Download, Upload, Clock, Globe, MapPin } from 'lucide-react';
import { Button } from "./components/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/Select";

function App() {
  const [state, setState] = useState<"idle" | "testing" | "complete">("idle");
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    if (state === "testing") {
      const interval = setInterval(() => {
        setCurrentSpeed((prev) => {
          const newSpeed = prev + (Math.random() * 5 - 2);
          return Math.max(0, Math.min(200, newSpeed));
        });
      }, 100);

      setTimeout(() => {
        setState("complete");
        setDownloadSpeed(12.83);
        setUploadSpeed(11.8);
        setPing(45);
        setJitter(2.1);
        clearInterval(interval);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <NavHeader />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gradient">
            تست سرعت اینترنت
          </h1>
          <p className="text-gray-300 text-center mb-12">
            پس از انتخاب نوع تست با سرور مورد نظر، دکمه شروع را فشار دهید.
          </p>

          {/* Test Type Selector */}
          <div className="flex justify-center gap-6 mb-12">
            <Button variant="outline" className="text-white bg-white/10 border-white/20 hover:bg-white/20 transition-all">
              تست دقیق
            </Button>
            <Button variant="outline" className="text-gray-400 bg-transparent border-white/20 hover:bg-white/10 transition-all">
              تست سریع
            </Button>
          </div>

          {state === "complete" ? (
            <ResultsView
              downloadSpeed={downloadSpeed}
              uploadSpeed={uploadSpeed}
              ping={ping}
              jitter={jitter}
            />
          ) : (
            <>
              {/* Speed Gauge */}
              <SpeedGauge
                state={state}
                value={currentSpeed}
                onStart={() => setState("testing")}
              />

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto mt-12">
                {/* Right side */}
                <div className="col-span-3 flex flex-col gap-6">
                  <InfoCard
                    icon={Download}
                    label="سرعت دانلود"
                    value={state === "idle" ? "--" : `${currentSpeed.toFixed(2)} مگابیت بر ثانیه`}
                    delay={0.1}
                  />
                  <InfoCard
                    icon={Upload}
                    label="سرعت آپلود"
                    value={state === "testing" ? "در حال تست..." : "--"}
                    delay={0.2}
                  />
                  <InfoCard
                    icon={Clock}
                    label="زمان پاسخ دهی"
                    value="--"
                    delay={0.3}
                  />
                </div>

                {/* Left side */}
                <div className="col-span-3 flex flex-col gap-6">
                  <InfoCard
                    icon={Globe}
                    label="IP آدرس"
                    value="16.16.183.234"
                    delay={0.4}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="موقعیت مکانی"
                    value="شهر تهران"
                    delay={0.5}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="سرویس دهنده"
                    value="شاتل"
                    delay={0.6}
                  />
                </div>
              </div>

              {/* Location Selector */}
              <div className="max-w-xs mx-auto mt-8">
                <p className="text-gray-400 mb-2 text-sm text-center">استان</p>
                <Select defaultValue="تهران">
                  <SelectTrigger className="w-full bg-white/5 border-white/10 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-900 border-white/10 rounded-xl">
                    {["تهران", "کرج", "اهواز", "ترکیه", "آلمان"].map((location) => (
                      <SelectItem
                        key={location}
                        value={location}
                        className="text-white hover:bg-white/10"
                      >
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
