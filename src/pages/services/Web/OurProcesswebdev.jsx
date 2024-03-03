import discover from "../../../assets/services/discover.png";
import development from "../../../assets/services/development.png";
import designing from "../../../assets/services/designing.png";
import maintenance from "../../../assets/services/maintenance.png";
import Service_Process_Card from "../Service_Process_Card";
import SectionTitle from "../../shared/SectionTitle";
const OurProcesswebdev = () => {
  const processes = [
    {
      title: "Project Discovery and Planning",
      icon: discover,
      description:
        "This initial phase involves understanding the client's goals, target audience, and project scope. It includes creating a detailed plan outlining features, timelines, and resources required for the website development project.",
    },
    {
      title: "Design and Wireframing",
      icon: development,
      description:
        "In this step, designers create wireframes and mockups of the website's layout, user interface, and visual elements. This stage defines the website's look and feel, ensuring it aligns with the client's brand and objectives.",
    },
    {
      title: "Front-End Development",
      icon: designing,
      description:
        "Front-end developers code the website's user interface using HTML, CSS, and JavaScript. They transform the design into a functional, interactive website that's accessible and responsive across various devices and browsers.",
    },
    {
      title: "Back-End Development",
      icon: maintenance,
      description:
        "TBack-end developers build the server-side functionality of the website. This includes database integration, server configuration, and the creation of dynamic features and logic required for user interactions.",
    },
    {
      title: "Testing and Quality Assurance",
      icon: maintenance,
      description:
        "This phase involves thorough testing to identify and rectify any issues, bugs, or inconsistencies on the website. Quality assurance ensures that the site functions correctly and meets the desired standards of performance, security, and user experience.",
    },
    {
      title: "Deployment and Maintenance",
      icon: maintenance,
      description:
        "The final step involves launching the website and making it publicly accessible. Regular maintenance and updates are crucial to keep the site secure, functional, and aligned with evolving technologies and user expectations.",
    },
  ];
  return (
    <section className="mt-8 space-y-10 lg:mt-[3em]">
      <div className="relative space-y-4">
        <div className="flex justify-center md:justify-start">
          <SectionTitle text={"our process"} number={""} />
        </div>
        <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-1/2">
          The process we are working With Our client Worldwide
        </h3>
        <p className="font-semibold text-center md:text-left lg:w-5/6">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {processes.map((item, index) => (
          <Service_Process_Card
            item={item}
            order={index + 1}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcesswebdev;
