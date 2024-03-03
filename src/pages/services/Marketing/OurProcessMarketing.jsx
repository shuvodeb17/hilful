import discover from "../../../assets/services/discover.png";
import development from "../../../assets/services/development.png";
import designing from "../../../assets/services/designing.png";
import maintenance from "../../../assets/services/maintenance.png";
import Service_Process_Card from "../Service_Process_Card";
import SectionTitle from "../../shared/SectionTitle";
const OurProcessMarketing = () => {
  const processes = [
    {
      title: "Market Research and Analysis      ",
      icon: discover,
      description:
        "Start by understanding your target audience, competitors, and industry trends. Research helps you identify opportunities and challenges, making it a crucial foundation for your digital marketing strategy",
    },
    {
      title: "Goal Setting and Strategy Development      ",
      icon: development,
      description:
        "Clearly define your marketing objectives, whether it's brand awareness, lead generation, or sales. Develop a comprehensive strategy that outlines the channels, tactics, and key performance indicators (KPIs) to achieve those goals",
    },
    {
      title: "Content Creation and Optimization      ",
      icon: designing,
      description:
        "Create valuable, engaging, and relevant content that resonates with your audience. Optimize it for search engines and user experience to drive organic traffic and establish your brand's authority",
    },
    {
      title: "Multi-Channel Promotion      ",
      icon: maintenance,
      description:
        "Utilize a mix of digital channels such as social media, email marketing, pay-per-click advertising, and content marketing to reach your audience where they are most active. Tailor your message to each platform for maximum impact",
    },
    {
      title: "Data Analysis and Optimization      ",
      icon: maintenance,
      description:
        "Regularly monitor the performance of your digital marketing efforts using analytics tools. Analyze the data to identify what's working and what's not, then make data-driven optimizations to improve results",
    },
    {
      title: "Conversion Tracking and Reporting      ",
      icon: maintenance,
      description:
        " Implement conversion tracking to measure the effectiveness of your campaigns. Provide regular reports to stakeholders, highlighting key insights and the progress toward your marketing goals",
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

export default OurProcessMarketing;
