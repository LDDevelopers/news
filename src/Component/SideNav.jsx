import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="absolute md:hidden bg-yellow-400  text-white top-20 right-0 left-0 p-5 z-40  ">
        <nav>
          <ul className="flex flex-col gap-4 cursor-pointer font-bold text-sm">
            <NavLink to="/">
              <li className="hover:border-2 p-2">Home</li>
            </NavLink>
            <NavLink to="about">
              <li className="hover:border-2 p-2">About</li>
            </NavLink>
            <NavLink to="contact">
              <li className="hover:border-2 p-2">Contact</li>
            </NavLink>
            <NavLink to="upload">
              <li className="hover:border-2 p-2">Upload</li>
            </NavLink>
            <NavLink to="login">
              <li className="hover:border-2 p-2">Login</li>
            </NavLink>
            <NavLink to="signup">
              <li className="hover:border-2 p-2">Signup</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
export { SideNav };
