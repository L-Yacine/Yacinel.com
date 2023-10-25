import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mr-2 ">
        <Link
          to="/"
          className="flex items-center  gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[100px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <div
            className="flex flex-col flex-nowrap font-medium font-beckman 
                 tracking-[3px] cursor-pointer "
          >
            <h3 className="text-[#81238a] font-beckman text-lg font-bold">
              Yacine-L
            </h3>
            <p className="text-[#413f41] text-xs whitespace-nowrap">Software</p>
          </div>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-[#81238a]"
              } hover:text-[#9663f0] text-[21px] font-medium font-beckman 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="md:hidden flex flex-1 w-[80VW] justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-[#c9bcc9] opacity-[0.98] absolute rounded-xl
                top-0 left-0 w-[75vw] h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <Link
                to="/"
                className="flex items-center drop-shadow-2xl gap-2"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="sm:w-[100px] sm:h-[50px] w-[45px] h-[45px] object-contain"
                />
                <div
                  className="flex flex-col flex-nowrap font-medium font-beckman 
                 tracking-[3px] cursor-pointer "
                >
                  <h3 className="text-[#81238a] font-beckman text-lg font-bold">
                    Yacine-L
                  </h3>
                  <p className="text-[#413f41] text-xs whitespace-nowrap">
                    Software
                  </p>
                </div>
              </Link>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px] hover:divide-y hover:divide-violet-500"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-[#b32fb3]" : "text-[#000000]"
                    } text-[28px] font-bold font-beckman 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
