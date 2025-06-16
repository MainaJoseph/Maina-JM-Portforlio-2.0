// BentoGrid.jsx
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-6 lg:gap-8 mx-auto max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "TypeScript"];
  const rightLists = ["MongoDB", "NextJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "mainajm254@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div
      className={cn(
        "group/bento row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.08] backdrop-blur-3xl transition-all duration-500 hover:border-white/[0.15] hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col justify-between",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.6) 50%, rgba(15,23,42,0.9) 100%)",
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] pointer-events-none"></div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`${id === 6 && "flex justify-center"} h-full relative z-10`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition-all duration-300 relative md:h-full min-h-40 flex flex-col px-6 p-6 lg:p-12"
          )}
        >
          {/* Enhanced description styling */}
          <div className="font-sans font-light md:max-w-32 md:text-xs lg:text-base text-sm text-slate-300/80 z-10 mb-4">
            {description}
          </div>

          {/* Enhanced title styling */}
          <div className="font-sans text-xl lg:text-3xl max-w-96 font-bold z-10 bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent leading-tight">
            {title}
          </div>

          {/* Enhanced Github 3D globe */}
          {id === 2 && <GridGlobe />}

          {/* Enhanced Tech stack with modern styling */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-6 w-fit absolute -right-3 lg:-right-2 top-6">
              <div className="flex flex-col gap-4 md:gap-4 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="group/tech lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium
                    rounded-xl text-center bg-gradient-to-r from-slate-800/80 to-slate-700/80 
                    border border-white/[0.05] backdrop-blur-xl text-slate-200
                    hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-blue-900/40 
                    hover:border-purple-500/20 transition-all duration-300 hover:scale-105
                    shadow-lg hover:shadow-purple-500/10"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="group/tech lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium
                rounded-xl text-center bg-gradient-to-r from-slate-800/80 to-slate-700/80 
                border border-white/[0.05] backdrop-blur-xl text-slate-200
                hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-blue-900/40 
                hover:border-purple-500/20 transition-all duration-300 hover:scale-105
                shadow-lg hover:shadow-purple-500/10"
                >
                  MySQL
                </span>
              </div>

              <div className="flex flex-col gap-4 md:gap-4 lg:gap-3">
                <span
                  className="group/tech lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium
                rounded-xl text-center bg-gradient-to-r from-slate-800/80 to-slate-700/80 
                border border-white/[0.05] backdrop-blur-xl text-slate-200
                hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-blue-900/40 
                hover:border-purple-500/20 transition-all duration-300 hover:scale-105
                shadow-lg hover:shadow-purple-500/10"
                >
                  Vue.js
                </span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="group/tech lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium
                    rounded-xl text-center bg-gradient-to-r from-slate-800/80 to-slate-700/80 
                    border border-white/[0.05] backdrop-blur-xl text-slate-200
                    hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-blue-900/40 
                    hover:border-purple-500/20 transition-all duration-300 hover:scale-105
                    shadow-lg hover:shadow-purple-500/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced email copy section */}
          {id === 6 && (
            <div className="mt-8 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email Copied! 🎉" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-gradient-to-r !from-slate-900/90 !to-slate-800/90 !border-white/10"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
