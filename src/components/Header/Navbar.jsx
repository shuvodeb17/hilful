import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import second from "../../assets/site/logo.jpg";
import AOS from "aos";
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

import "aos/dist/aos.css"; // You can also use <link> for styles
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-navBg py-3 sticky top-0 left-0 w-full z-30">
        <div className="my-container flex justify-between items-center px-2">
          <div>
            <img className="h-10 object-cover" src={second} alt="" />
          </div>
          <div className="sm:flex items-center gap-3 hidden">
            <li className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white">
              <NavLink
                to={"/"}
                onClick={toggleNav}
                className={({ isActive }) =>
                  isActive ? "active dot" : "inActive"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white cursor-pointer">
              services
              <div className="hidden group-hover:block absolute top-[25px] left-0 bg-white  rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
                <Link
                  onClick={toggleNav}
                  to="/seo"
                  className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                >
                  SEO
                </Link>
                <Link
                  onClick={toggleNav}
                  to="/web-development"
                  className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                >
                  web development
                </Link>
                <Link
                  onClick={toggleNav}
                  to="/graphics-design"
                  className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                >
                  graphics design
                </Link>
                <Link
                  onClick={toggleNav}
                  to="/digital-marketing"
                  className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                >
                  digital marketing
                </Link>
              </div>
            </li>

            <li className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white">
              <NavLink
                to={"/about-us"}
                onClick={toggleNav}
                className={({ isActive }) =>
                  isActive ? "active dot" : "inActive"
                }
              >
                about us
              </NavLink>
            </li>

            <li className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white">
              <NavLink
                to={"/contact-us"}
                onClick={toggleNav}
                className={({ isActive }) =>
                  isActive ? "active dot" : "inActive"
                }
              >
                contact us
              </NavLink>
            </li>
          </div>

          <p
            className="text-white sm:hidden text-2xl cursor-pointer"
            onClick={toggleNav}
          >
            <RiMenu4Fill />
          </p>
        </div>
      </nav>

      {/* MOBILE MENU  */}

      <div
        className={`block sm:hidden bg-black/90 fixed z-50 top-0 right-0 max-w-screen-sm w-full pb-4 text-center h-screen space-y-3  transition-all backdrop-blur-md ${
          showNav ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <span
          className="absolute top-4 right-4 text-white text-2xl w-8 h-8 bg-rose-500 rounded-full grid place-content-center cursor-pointer"
          onClick={toggleNav}
        >
          <MdClose className="p-1 font-semibold" />
        </span>
        <div className="pt-[5rem] space-y-4">
          <li className="list-none relative group w-max mx-auto">
            <NavLink
              onClick={toggleNav}
              to={"/"}
              className="uppercase text-zinc-100 font-semibold hover:text-white"
            >
              home
            </NavLink>
          </li>

          <li className="list-none relative group w-max mx-auto cursor-pointer text-zinc-50 font-semibold text-lg">
            SERVICES
            <div className="absolute top-3 -right-[8rem] bg-navBg border border-zinc-700 rounded-md z-10 space-y-3  translate-y-3 transition-all hidden group-hover:block drop-shadow-md py-4 px-2 ">
              <Link
                to={"/seo"}
                onClick={toggleNav}
                className="text-sm px-3 flex flex-col w-max text-zinc-50 transition-all font-medium capitalize hover:text-btnBg "
              >
                SEO
              </Link>
              <Link
                to={"/web-development"}
                onClick={toggleNav}
                className="text-sm px-3 flex flex-col w-max text-zinc-50 transition-all font-medium capitalize hover:text-btnBg "
              >
                web development
              </Link>
              <Link
                to={"/graphics-design"}
                onClick={toggleNav}
                className="text-sm px-3 flex flex-col w-max text-zinc-50 transition-all font-medium capitalize hover:text-btnBg "
              >
                graphics design
              </Link>
              <Link
                to={"/digital-marketing"}
                onClick={toggleNav}
                className="text-sm px-3 flex flex-col w-max text-zinc-50 transition-all font-medium capitalize hover:text-btnBg "
              >
                digital marketing
              </Link>
            </div>
          </li>

          <li className="list-none relative group w-max mx-auto">
            <NavLink
              onClick={toggleNav}
              to={"/about-us"}
              className="uppercase text-zinc-100 font-semibold hover:text-white"
            >
              about us
            </NavLink>
          </li>

          <li className="list-none relative group w-max mx-auto">
            <NavLink
              onClick={toggleNav}
              to={"/contact-us"}
              className="uppercase text-zinc-100 font-semibold hover:text-white"
            >
              contact us
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
