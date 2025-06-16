import { FaLocationArrow, FaCode, FaRocket } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      {/* Premium Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(147, 51, 234, 0.3)"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="rgba(59, 130, 246, 0.2)"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(236, 72, 153, 0.15)"
        />
      </div>

      <TracingBeam className="px-4 lg:px-8">
        <div className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="flex justify-center">
            <div className="max-w-7xl mx-auto text-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-purple-300 hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">
                  Available for new opportunities
                </span>
              </div>

              {/* Enhanced Text Animation */}
              <div className="space-y-6 mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
                  <TextGenerateEffect
                    words="Crafting Digital Experiences"
                    className="block"
                  />
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    That Inspire
                  </span>
                </h1>
              </div>

              {/* Enhanced Subtitle */}
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-light">
                  Hi! I&apos;m{" "}
                  <span className="font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Joseph Maina
                  </span>
                  , a passionate developer crafting innovative solutions from{" "}
                  <span className="inline-flex items-center gap-2 font-medium text-white">
                    Kenya
                    <Image
                      src="/Kenya.png"
                      alt="Kenya"
                      width={24}
                      height={24}
                      className="inline-block"
                    />
                  </span>
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  { icon: <FaCode />, label: "Full Stack Developer" },
                  { icon: <FaRocket />, label: "Innovation Focused" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-purple-400">{skill.icon}</span>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#about" className="group">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                    {/* Button */}
                    <MagicButton
                      title="Explore My Work"
                      icon={
                        <FaLocationArrow className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      }
                      position="right"
                      otherClasses="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 text-white font-medium rounded-xl border border-white/20 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    />
                  </div>
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 text-white font-medium rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Get In Touch
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-20 flex justify-center">
                <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Hero;
