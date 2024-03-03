import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Mern stack
import ashraful from '../../assets/update/Team/Web development/head.jpeg'
import redwan from '../../assets/update/Team/Web development/assistant-Head-Redwan-Islam.jpg'
import shuvo from '../../assets/update/Team/Web development/project-manager.png'

// digital marketer
import DMshohagh from '../../assets/update/Team/Digital marketing/team-head-mohammad-shohagh.jpg'
import DMnewaz from '../../assets/update/Team/Digital marketing/assistant-head-newaz-sheakh.jpg'
import DMSadika from '../../assets/update/Team/Digital marketing/project-manager-sadika-rahman.jpg'

// laravel
import LShakil from '../../assets/update/Team/Laravel team/Team-Head-Shakil-khan.jpg'
import LRaju from '../../assets/update/Team/Laravel team/assistant-head-Raju-sheikh.jpg'
import LSorif from '../../assets/update/Team/Laravel team/Project-Manager-md-shorfuddin-siam.jpg'

// graphics
import GImran from '../../assets/update/Team/Graphic design/head-imran-talukder.jpg'
import GAzizul from '../../assets/update/Team/Graphic design/assistant-team-head-azizul-islam.jpg'
import GImaranHossain from '../../assets/update/Team/Graphic design/project-manager-iIman-hossain.jpg'

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import SectionTitle from "../../pages/shared/SectionTitle";
// import SectionTitle from "../../pages/shared/SectionTitle";

const OurTeamInfo = ({ num }) => {
  return (
    <div className="py-4 mb-8">
      <div>
        <SectionTitle text={"meet our Department"} number={num} />
      </div>
      <div className="my-container">
        <div>
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            creativeEffect={true}
            modules={[Autoplay, Navigation, EffectCreative]}
          >
            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"Mern stack developers"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={ashraful}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Ashraful Islam</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      Department Head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={redwan}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Redwan Islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Assistant Department Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={shuvo}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Shuvo Deb</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"Laravel Developers"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={LShakil}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Shakil khan</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      Department Head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={LRaju}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Raju Sheikh</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Assistant Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={LSorif}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Shorfuddin Siam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"digital marketing"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={DMshohagh}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Mohammad Shohagh</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      Department Head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={DMnewaz}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Newaz Sheakh</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        Assistant Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={DMSadika}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Sadika Rahman</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"graphics design"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={GImran}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Imran Talukdar</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      Department Head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={GAzizul}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Azizul Islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        Assistant Department Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={GImaranHossain}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Iman Hossain</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeamInfo;
