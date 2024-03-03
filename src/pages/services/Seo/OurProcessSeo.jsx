import discover from "../../../assets/services/discover.png";
import development from "../../../assets/services/development.png";
import designing from "../../../assets/services/designing.png";
import maintenance from "../../../assets/services/maintenance.png";
import Service_Process_Card from "../Service_Process_Card";
import SectionTitle from "../../shared/SectionTitle";
// import SectionTitle from "../../shared/SectionTitle";
const OurProcessSeo = () => {
  const processes = [
    {
      title: "Keyword Research and Analysis",
      icon: discover,
      description:
        "The foundation of SEO starts with thorough keyword research to identify the most relevant and high-traffic keywords for your website. Analyze their competition, search volume, and user intent to make informed decisions.",
    },
    {
      title: "On-Page Optimization",
      icon: development,
      description:
        "Optimize your website's on-page elements, including meta tags, content, images, and internal links, to ensure they align with your chosen keywords. This step aims to make your webpages more search engine-friendly and user-friendly.",
    },
    {
      title: "Technical SEO",
      icon: designing,
      description:
        "Address technical issues that may impact your website's visibility in search results. This includes optimizing site speed, improving mobile-friendliness, fixing crawl errors, and creating a sitemap.",
    },
    {
      title: "Content Creation and Marketing",
      icon: maintenance,
      description:
        "Develop high-quality and relevant content that appeals to your target audience. Share this content through various channels like blogs, social media, and email marketing to increase website authority and attract backlinks.",
    },
    {
      title: "Link Building",
      icon: maintenance,
      description:
        "Acquire quality backlinks from reputable websites to establish authority and trustworthiness in the eyes of search engines. Link building strategies include guest posting, outreach, and content partnerships.",
    },
    {
      title: "Monitoring and Analytics",
      icon: maintenance,
      description:
        "Continuously monitor your website's performance using analytics tools. Track your rankings, organic traffic, and conversion rates. Use this data to make informed adjustments and improvements to your SEO strategy.",
    },
  ];
  return (
    <section className="mt-[1em] space-y-10 lg:mt-[70px]">
      <div className="relative space-y-4">
      <div className=" text-center">
          <SectionTitle text={"our Process"} number={""} />
        </div>
        <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-1/2">
          The process we are working With Our SEO client Worldwide
        </h3>
        <p className="font-semibold text-center md:text-left lg:w-5/6">
        With a global reach, our SEO services cater to clients worldwide. Our systematic approach, spanning keyword research, on-page optimization, technical fine-tuning, and content creation, guarantees optimal online visibility. Join us for effective, tailored SEO solutions wherever you are
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
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

export default OurProcessSeo;
