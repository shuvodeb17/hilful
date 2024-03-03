import SectionTitle from "../shared/SectionTitle";

import icon1 from "../../assets/shuttle 1.svg";
import icon2 from "../../assets/settings 1.svg";
import icon3 from "../../assets/support 1.svg";

const Expertise = ({ num }) => {
  return (
    <section className="my-8 bg-zinc-50 py-8 rounded-md drop-shadow-sm">
      <div className="my-container grid gap-8 sm:gap-4 sm:grid-cols-2">
        {/* left  */}
        <div className="pl-3">
          <div className="sm:w-max">
            <SectionTitle text={"our expertise"} number={num} />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold md:text-4xl text-navBg">
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p className="text-sm sm:text-base text-p-text">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>
        </div>
        {/* right  */}
        <div className="flex flex-col gap-3">
          {/* item 1  */}
          <div className="grid grid-cols-[40px,_1fr] gap-3 bg-pink-100/40 p-4 rounded-md">
            <div className="w-10 h-10 bg-rose-600/10 p-3 rounded-full">
              <img
                src={icon1}
                alt="icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-navBg font-semibold text-lg">
                On Time Delivery
              </h4>
              <p className="text-zinc-700">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>
          {/* item 2  */}
          <div className="grid grid-cols-[40px,_1fr] gap-3 bg-teal-100/40 p-4 rounded-md">
            <div className="w-10 h-10 bg-rose-600/10 p-3 rounded-full">
              <img
                src={icon2}
                alt="icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-navBg font-semibold text-lg">Best Quality</h4>
              <p className="text-zinc-700">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>
          {/* item 3  */}
          <div className="grid grid-cols-[40px,_1fr] gap-3 bg-orange-100/40 p-4 rounded-md">
            <div className="w-10 h-10 bg-rose-600/10 p-3 rounded-full">
              <img
                src={icon3}
                alt="icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-navBg font-semibold text-lg">
                Support Assist
              </h4>
              <p className="text-zinc-700">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
