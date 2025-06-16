import { socialMedia } from "@/data";
import { Highlight } from "./ui/hero-highlight";
import ContactForm from "./contact-form";

const Footer = () => {
  return (
    <footer
      className="relative w-full pt-20 pb-10 overflow-hidden"
      id="contact"
      style={{ borderRadius: "10px" }}
    >
      {/* Enhanced background with dark blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#0a1428] to-[#0f1b38]/80" />

      {/* Animated background grid */}
      <div className="absolute left-0 -bottom-72 w-full min-h-96 opacity-30">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full" />
      </div>

      {/* Floating orbs for visual appeal */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Ready to Elevate{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your
            </span>{" "}
            Digital Presence?
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Let&apos;s collaborate and{" "}
            <Highlight className="text-white font-medium">
              bring your vision to life
            </Highlight>
            . I&apos;m here to help you achieve extraordinary results.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full mb-20">
          <ContactForm />
        </div>

        {/* Footer Bottom */}
        <div className="w-full max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm md:text-base">
              &copy; {new Date().getFullYear()} Joseph Maina. Crafted with
              passion.
            </p>

            <div className="flex items-center gap-4">
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="group w-12 h-12 cursor-pointer flex justify-center items-center backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={info.img || "/placeholder.svg"}
                    alt="social icon"
                    width={20}
                    height={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
