import SectionTitle from "../shared/SectionTitle";

import aboutImg from "../../assets/about.png";
import team1 from "../../assets/Team1.png";
import Expertise from "./Expertise";

import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const About = () => {
  return (
    <section className="bg-white py-6 my-4">
      <div className="my-container">
        <div>
          <SectionTitle text={"about us"} number={"01"} />
        </div>

        <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
          <h2 className="text-[30px] sm:text-[40px] md:text-[45px] text-center font-semibold leading-tight text-navBg">
            Award-winning Company seen and used by millions around the world.
          </h2>

          <p className="text-sm sm:text-base text-p-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
        </div>

        {/* images */}

        <div className="grid gap-4 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-7 py-6">
          <div className="overflow-hidden rounded-md border border-zinc-100">
            <img
              src={aboutImg}
              alt="about image"
              loading="lazy"
              className=" hover:scale-105 transition-all"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-zinc-100">
            <img
              src={aboutImg}
              alt="about image"
              loading="lazy"
              className=" hover:scale-105 transition-all"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-zinc-100">
            <img
              src={aboutImg}
              alt="about image"
              loading="lazy"
              className=" hover:scale-105 transition-all"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-zinc-100">
            <img
              src={aboutImg}
              alt="about image"
              loading="lazy"
              className=" hover:scale-105 transition-all"
            />
          </div>
        </div>

        {/* project info  */}

        <div className="grid gap-6 sm:grid-cols-2 py-6">
          {/* left   */}
          <div>
            <div className="sm:w-max ">
              <SectionTitle text={"our story"} number={"02"} />
            </div>

            <div className="sm:pr-20 text-center sm:text-left">
              <h2 className="text-3xl text-navBg sm:text-4xl font-bold mb-4">
                From Startups to Titans of Industry
              </h2>
              <p className="text-sm text-p-text">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense of gay
                produce excited perceived do an a china mean its so ye when in
                explained Hearts am next over match mr partiality not shoud
                latter thus as out no passed forming middleton exercise up
              </p>
            </div>
          </div>
          {/* right */}
          <div className="bg-[#f4a261] p-4 rounded-md drop-shadow-sm h-max">
            <div className="my-6 pb-6 grid gap-3 grid-cols-2">
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">150+</p>
                <p className="text-zinc-800 font-medium">Project Delivered</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">120+</p>
                <p className="text-zinc-800 font-medium">Professional</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">170+</p>
                <p className="text-zinc-800 font-medium">Happy Client</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">2y+</p>
                <p className="text-zinc-800 font-medium">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise  */}
        <Expertise num={"03"} />

        {/* team members  */}

        <div className="my-4 py-4">
          <div>
            <div>
              <SectionTitle text={"meet our team"} number={"04"} />
            </div>

            <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
              <h1 className="text-[30px] sm:text-[40px] md:text-[45px] text-center font-semibold leading-tight text-navBg">
                Teamwork is the only way we work
              </h1>
              <p className="text-sm sm:text-base text-p-text  text-center">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable.
              </p>
            </div>

            {/* teams avatar */}
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
              <div className="relative rounded-md overflow-hidden group">
                <img
                  src={team1}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                  <div className="text-center">
                    <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                      Redwan
                    </h2>
                    <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                      MERN Stack Developer
                    </h3>

                    <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoFacebook />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoLinkedin />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-md overflow-hidden group">
                <img
                  src={team1}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                  <div className="text-center">
                    <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                      Redwan
                    </h2>
                    <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                      MERN Stack Developer
                    </h3>

                    <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoFacebook />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoLinkedin />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-md overflow-hidden group">
                <img
                  src={team1}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                  <div className="text-center">
                    <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                      Redwan
                    </h2>
                    <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                      MERN Stack Developer
                    </h3>

                    <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoFacebook />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoLinkedin />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-md overflow-hidden group">
                <img
                  src={team1}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                  <div className="text-center">
                    <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                      Redwan
                    </h2>
                    <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                      MERN Stack Developer
                    </h3>

                    <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoFacebook />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoLinkedin />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                      >
                        <BiLogoTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
