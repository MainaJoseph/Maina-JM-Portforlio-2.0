import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Image from "next/image";

interface BadgeProps {
  className?: string;
}

export function Top(): JSX.Element {
  return (
    <div className="relative hidden md:block overflow-hidden w-full mt-[-200px]">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      <div className="relative z-10">
        <MacbookScroll
          title={
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  Be Ready To Be
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
                  Blown Away
                </span>
              </h2>

              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-20"></div>
                <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  No kidding.
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-20"></div>
              </div>

              <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                Experience cutting-edge development with innovative solutions
                that push boundaries
              </p>
            </div>
          }
          badge={
            <Link
              href="https://github.com/MainaJoseph"
              className="group transform transition-all duration-300 hover:scale-110"
            >
              <Badge className="transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </Link>
          }
          src="/linear.webp"
          showGradient={false}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Enhanced Badge component
const Badge: React.FC<BadgeProps> = ({ className }): JSX.Element => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl hover:bg-white/15 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Image
            src="/git.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
        </div>

        <div className="relative">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
        </div>
      </div>

      <div className="h-4 w-px bg-white/30"></div>

      <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        JM
      </span>
    </div>
  );
};

export default Top;
