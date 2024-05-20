import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/lappy.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "My Portfolio 2.0",
    des: "Crafting Ideas into Reality, One Innovation at a Time",
    img: "/port.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://mainajm254.vercel.app/",
  },
  {
    id: 3,
    title: "WallMart Clone",
    des: "Walmart Clone with NEXT.JS 14! (Intercepting & Parallel Routes, Oxylabs, Shadcn, Zustand",
    img: "/wally.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://wally-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Spotify Clone",
    des: "A Spotify clone built using Next.js 13.4, TypeScript, Supabase, Stripe, React, and Tailwind CSS.",
    img: "/spotify.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://spotify-clone-delta-azure.vercel.app/",
  },
  {
    id: 5,
    title: "Kippra Annual Conference",
    des: "This Conference brings together delegates comprising officials from national and county governments, representatives of national authorities from the regional blocs, regional think tanks, as well as development partners, civil society and special interest groups.",
    img: "/kip.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://kippra-conference.vercel.app/",
  },
  {
    id: 6,
    title: "Stack Airbnb Clone",
    des: "Welcome to the Full Stack Airbnb Clone project! This application is built using cutting-edge technologies, providing a seamless experience for users. Below, you'll find an overview of the technologies used and instructions on how to set up the project",
    img: "/air.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/MainaJoseph/airbnb-clone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Maina was an absolute pleasure. His professionalism, punctuality, and commitment to delivering exceptional results were evident throughout our project. Maina's enthusiasm for every aspect of development truly stands out. If you're looking to enhance your website and elevate your brand, Maina is the ideal partner.",
    name: "Muthoni Lucy",
    title: "Director of Alpha Tech",
    imgSrc: "/muthoni.png",
  },
  {
    quote:
      "Teaming up with Maina was a fantastic decision. His professionalism, creativity, and dedication to achieving outstanding results were evident throughout our collaboration. Maina's enthusiasm and expertise in her field are unmatched. If you're seeking someone who can bring fresh ideas and deliver exceptional outcomes, Lisa is the ideal partner.",
    name: "Michael Lusanga",
    title: "Chair Love & Hope",
    imgSrc: "/Michael.jpg",
  },
  {
    quote:
      "Partnering with Maina was a wonderful experience. His expertise, dependability, and drive for excellence were evident from start to finish. Maina's enthusiasm for every development phase is truly impressive. If you seek to elevate your website and enhance your brand, Maina is the partner you need",
    name: "Macharia",
    title: "Data Engineer ONA",
    imgSrc: "/mash.jpeg",
  },
  {
    quote:
      "Collaborating with Maina was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're looking to elevate your website and enhance your brand, Maina is the ideal partner.",
    name: "Juma Albert",
    title: "CEO NovaTech Technologies",
    imgSrc: "/juma.png",
  },
  {
    quote:
      "Working with Maina was a true pleasure. His expertise, punctuality, and commitment to outstanding results were apparent at every stage of our project. Maina's enthusiasm for all aspects of development is exceptional. If you want to enhance your website and elevate your brand, Maina is the ideal collaborator",
    name: "Francis Kosgei",
    title: "Senior Software Dev Upstream Tech",
    imgSrc: "/kosgei.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Github.",
    img: "/gitty.svg",
    nameImg: "/Github.svg",
  },
  {
    id: 7,
    name: "NextJS.",
    img: "nextty.png",
    nameImg: "/nextjs.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev ",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "FullStack Developer",
    desc: "Developed and maintained user-facing features using modern stack technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/joseph-mainajm/",
  },
];
