import Projects from "./Projects";
import rentAride from "../../assets/images/portfolio-images/rent-a-ride.png";
import beatit from "../../assets/images/portfolio-images/beatit.png";
import vw from "../../assets/images/portfolio-images/vw.png";
import marketplace from "../../assets/images/portfolio-images/marketplace.png";
import ordis from "../../assets/images/portfolio-images/ordis.png";
import creativista from "../../assets/images/portfolio-images/creativista.png";

const projectData = [
  {
    id: 1,
    image: marketplace,
    category: "Full Stack (MERN + Unity Integration)",
    title: "Ordis – Elderly Fall Detection & Monitoring System",
    description:
      "A MERN stack app integrated with Unity to enhance elderly safety. Detects falls, sends SMS alerts, stores incidents, and generates detailed reports for caregivers. Built with TypeScript, Node.js, and MongoDB for scalability and real-time monitoring.",
    link: "#!",
  },
  {
    id: 2,
    image: ordis,
    category: "Full Stack (MERN + Analytics)",
    title: "Infivr Analytics – Unity Data Management Platform",
    description:
      "A comprehensive platform to manage and visualize data from Unity applications. Includes user authentication, module uploads, session data tracking, and analytics dashboards. Developed using React, Node.js, TypeScript, and MongoDB.",
    link: "#!",
  },
  {
    id: 3,
    image: creativista,
    category: "Full Stack (Next.js + Tailwind)",
    title: "Creativista — Open-source AI Prompting Platform",
    description:
      "A modern open-source platform to discover, create and share AI prompts. Built with Next.js and Tailwind CSS (glassmorphism style). Features: Google auth (NextAuth), profile pages, prompt CRUD, tag search, copy-to-clipboard, responsive UI, and community sharing.",
    link: "#!",
  },
  {
    id: 4,
    image: vw,
    category: "Full Stack (MERN)",
    title: "Volkswagen Unity Admin Portal",
    description:
      "Admin portal for managing Unity-generated data, including user sessions and checklists. Features centralized data management, role-based access, and real-time tracking. Built using MongoDB, Express, React, and Node.js.",
    link: "#!",
  },
  {
    id: 5,
    image: rentAride,
    category: "Full Stack (MERN + AWS)",
    title: "Rent-A-Ride – Vehicle Rental Platform",
    description:
      "A rental and sales app for bikes with wishlist, geolocation-based search, and payment integration. Built using React, Redux Toolkit, MUI, Node.js, TypeScript, MongoDB, and AWS for file storage.",
    link: "https://beat-it.onrender.com/",
  },
  {
    id: 6,
    image: beatit,
    category: "Full Stack (Node.js + Handlebars)",
    title: "BeatIt – Shoe E-commerce Website",
    description:
      "E-commerce website built with Node.js, Express, MongoDB, and Handlebars. Implements order tracking, payment gateway, AJAX-based cart updates, and delivery management for a seamless user experience.",
    link: "https://beat-it.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/Nidhinsha/"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
