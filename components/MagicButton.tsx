// MagicButton.tsx
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="group relative inline-flex h-14 w-full md:w-64 md:mt-10 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {/* Enhanced Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#EC4899_25%,#3B82F6_50%,#8B5CF6_75%,#EC4899_100%)] group-hover:animate-[spin_1.5s_linear_infinite]" />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl
             bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 text-sm font-semibold text-white backdrop-blur-3xl gap-3 
             border border-white/10 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:via-slate-800 group-hover:to-slate-900 ${otherClasses}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {position === "left" && (
          <span className="transform transition-transform duration-200 group-hover:scale-110 text-purple-400">
            {icon}
          </span>
        )}

        <span className="relative z-10 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent font-medium">
          {title}
        </span>

        {position === "right" && (
          <span className="transform transition-transform duration-200 group-hover:translate-x-1 text-purple-400">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
