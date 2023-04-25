import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ListState } from "./ListState";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  const handleStateMenu = () => {
    setMenuFlag((flag) => !flag);
  };

  return (
    <>
      <div className="">
        <div className="wt-80 m-auto">
          <div className="flex flex-col justify-center items-center gap-5 bg-yellow-400 py-8">
            <figure className="">
              <img
                src="https://marketing.readwhere.com/epaper-logo/disha-daily-logo.png"
                alt=""
                className="max-w-2xl"
              />
            </figure>

            <div className="">
              <ul className="flex gap-10 text-2xl">
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
          <nav className="py-5 border-2 border-solid">
            <ul className="flex  ">
              <li className="flex-1">
                <Link to="/">Home</Link>
              </li>
              <li className="flex-1">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="flex-1 relative ">
                {menuFlag ? (
                  <Link
                    className="flex items-center justify-center gap-1"
                    onClick={handleStateMenu}
                  >
                    <span>State</span>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="flex items-center justify-center gap-1"
                    onClick={handleStateMenu}
                  >
                    <span>State</span>
                    <span>
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </Link>
                )}
                {menuFlag && <ListState />}
              </li>
              <li className="flex-1">
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li className="flex-1">
                <NavLink>Upload</NavLink>
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
