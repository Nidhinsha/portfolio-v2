import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I architect and build scalable backend systems using Node.js, TypeScript, and databases like MongoDB and MSSQL — ensuring high performance, security, and maintainability.",
  },
  {
    id: 2,
    title: "Frontend Engineering",
    description:
      "I develop responsive, interactive interfaces with React, Redux Toolkit, and MUI — focusing on usability, accessibility, and modern design aesthetics.",
  },
  {
    id: 3,
    title: "System Design & Integration",
    description:
      "I integrate complex systems, APIs, and microservices with a focus on modular architecture, ensuring smooth data flow, maintainability, and scalability.",
  },
  {
    id: 4,
    title: "DevOps & Deployment",
    description:
      "I implement CI/CD pipelines, containerization with Docker, and cloud deployment on platforms like GCP to ensure fast, reliable, and scalable software delivery.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in full-stack development — designing intuitive user
            interfaces and building powerful, reliable backends that scale with
            your business.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My focus is on creating digital solutions that combine clean design,
            efficient architecture, and seamless performance to deliver real
            impact.
          </p>
        </div>
        <a
          href="mailto:nidhinshavs@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
