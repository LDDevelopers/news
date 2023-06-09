import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListState } from "./ListState";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { SideNav } from "./SideNav";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  const [sideFlag, setSideFlag] = useState(false);
  const handleStateMenu = () => {
    setMenuFlag((flag) => !flag);
  };
  const handleSideNav = () => {
    setSideFlag((flag) => !flag);
  };
  return (
    <>
      <div className="">
        <div className="wt-80 m-auto">
          <div className="flex flex-col justify-center items-center gap-5 bg-yellow-400 py-5">
            <figure className="">
              <NavLink to="/">
                <img
                  src="naradha2.png"
                  alt=""
                  className="max-w-sm object-cover w-full h-full"
                />
              </NavLink>
            </figure>

            <div className="">
              <ul className="flex gap-5 md:gap-10 md:text-lg p-7">
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands fa-whatsapp"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
          <nav className="py-2 border-2 border-solid">
            <div className="w-full pr-8 text-3xl md:hidden flex justify-center relative">
              {sideFlag ? (
                <button
                  onClick={handleSideNav}
                  className="flex justify-end ml-auto items-center rounded-md p-4 hover:border-2 focus:border-2"
                >
                  <RxCross1 />
                </button>
              ) : (
                <button
                  onClick={handleSideNav}
                  className="flex justify-end ml-auto items-center rounded-md p-4 hover:border-2 focus:border-2"
                >
                  <RxHamburgerMenu />
                </button>
              )}

              {sideFlag && <SideNav />}
            </div>
            <ul className="md:flex text-sm hidden">
              <li className="flex-1">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="flex-1">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="flex-1 relative ">
                {menuFlag ? (
                  <div
                    className="flex items-center justify-center gap-1"
                    onClick={handleStateMenu}
                  >
                    <span>State</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-center gap-1"
                    onClick={handleStateMenu}
                  >
                    <span>State</span>
                    <span>
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                )}
                {menuFlag && <ListState />}
              </li>
              <li className="flex-1">
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li className="flex-1">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export { Header };
