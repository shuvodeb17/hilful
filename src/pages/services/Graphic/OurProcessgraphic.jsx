import discover from "../../../assets/services/discover.png";
import development from "../../../assets/services/development.png";
import designing from "../../../assets/services/designing.png";
import maintenance from "../../../assets/services/maintenance.png";
import Service_Process_Card from "../Service_Process_Card";
import SectionTitle from "../../shared/SectionTitle";
const OurProcessgraphic = () => {
  const processes = [
    {
      title: "Client Conceptualization",
      icon: discover,
      description:
        "Begin by understanding the client's requirements and objectives. Brainstorm ideas, create a design concept, and gather inspiration to establish the creative direction for the project",
    },
    {
      title: "Research and Visual Exploration      ",
      icon: development,
      description:
        "Dive into market research, trends, and competitor analysis. Explore various visual styles, color palettes, and typography options to refine the design concept and create a solid foundation",
    },
    {
      title: "Sketching and Drafting      ",
      icon: designing,
      description:
        "Develop rough sketches and drafts to visualize the design. This step allows for quick ideation and experimentation with different design elements, helping to narrow down the best ideas",
    },
    {
      title: "Digital Design and Refinement      ",
      icon: maintenance,
      description:
        "Transpose your sketches into digital design software. Create detailed, high-quality graphics, refining them based on feedback and design principles. Pay attention to color accuracy, typography, and visual hierarchy",
    },
    {
      title: "Client Review and Iteration      ",
      icon: maintenance,
      description:
        "Share the design with the client for feedback and revisions. Iterate on the design based on client input, making necessary adjustments to ensure the final product aligns with their vision and objectives",
    },
    {
      title: "Finalization and Delivery      ",
      icon: maintenance,
      description:
        "Complete the design, optimize it for various formats if needed, and deliver the final files to the client in the required formats. Ensure that the design is production-ready and meets all specifications",
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

export default OurProcessgraphic;
