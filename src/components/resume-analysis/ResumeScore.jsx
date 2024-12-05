import React from "react";
import { TrendingUp, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Progress } from "../ui/progress";

function ResumeScore({ score = 9 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(score), 500);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div>
      <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-indigo-100 dark:border-gray-700 shadow-xl shadow-indigo-100/20 dark:shadow-none transform transition-all duration-300">
        
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
          Resume Score
        </h2>
        
        {/* Circlular Progress Bar Resume Score */}
        <div>
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32">
              <circle
                className="text-muted-foreground"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
              />
              <circle
                className="text-primary"
                strokeWidth="8"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * ((100 - progress) / 100)}
                strokeLinecap="round"
                stroke="indigo"
                fill="transparent"
                r="56"
                cx="64"
                cy="64"
                style={{
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
              />
            </svg>
            <div className="absolute text-4xl font-bold">{`${Math.round(
              progress
            )}`}</div>
          </div>
          <Progress value={progress} className="hidden" />
        </div>
        

        <div className="space-y-4 mt-5">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 transform transition-all duration-300 hover:-translate-x-1">
            <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
            Your resume is looking great!
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 transform transition-all duration-300 hover:-translate-x-1">
            <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              3 quick wins identified
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumeScore;
