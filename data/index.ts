import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
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
    title: "Currently building a Digital Market place with NextJS",
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
    title: "My Portfolio 2.0",
    des: "Crafting Ideas into Reality, One Innovation at a Time",
    img: "/port.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "https://portfolio.azuritek.com/",
  },
  {
    id: 2,
    title: "Nova E-shop",
    des: "Explore the stramline shopping process with Nova",
    img: "/nova.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/c.svg",
    ],
    link: "https://nova.azuritek.com/",
  },
  {
    id: 3,
    title: "Lynk",
    des: "Lynk is a cutting-edge video calling platform designed for personal and professional communication. Built with modern web technologies, it offers crystal-clear HD video calls, instant messaging, screen sharing, virtual backgrounds, and group calling features. The platform emphasizes user experience with intuitive controls and reliable performance across all devices",
    img: "/lynk.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://lynk.azuritek.com/",
  },
  {
    id: 4,
    title: "Cloud Bridge",
    des: "CloudBridge is a powerful cloud storage solution that enables users to upload, organize, and share files effortlessly. Built with modern web technologies, it offers drag-and-drop file uploads, real-time collaboration, advanced sharing permissions, file versioning, and cross-platform synchronization. The platform provides a Google Drive-like experience with enhanced security and performance features.",
    img: "/cloud.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://cloud.azuritek.com/",
  },

  {
    id: 5,
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
    title: "SOFTWARE ENGINEER INTERN @ ICTA",
    desc: "Developed responsive web applications using React.js and modern JavaScript frameworks. Collaborated with senior developers to implement user-friendly interfaces and optimize application performance. Gained hands-on experience in agile development methodologies and version control systems.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://icta.go.ke/",
  },
  {
    id: 2,
    title: "IT CONSULTANT @ KIPPRA",
    desc: "Designed and developed cross-platform mobile applications using Flutter framework for both iOS and Android platforms. Provided technical consultation on digital transformation initiatives and implemented scalable mobile solutions. Delivered training sessions on mobile app development best practices.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    link: "https://kippra.or.ke/",
  },
  {
    id: 3,
    title: "SOFTWARE ENGINEER @ TOVUTI GROUP",
    desc: "Building and maintaining user-friendly features using React.js, Node.js, and TypeScript. Implementing responsive design patterns and optimizing application performance for better user experience. Collaborating with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://tovutigroup.com/",
  },
  {
    id: 4,
    title: "FOUNDER AND CEO @ AZURI TECH",
    desc: "Founded and leading a technology startup focused on custom software development. I manage end-to-end product development from conception to deployment on app stores. I oversee a team of developers, handle client relationships, and establish strategic partnerships to drive business growth.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    link: "https://azuritek.com",
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
