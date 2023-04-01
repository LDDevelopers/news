import { Link } from "react-router-dom";

const Header = () => {
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
                <Link>About</Link>
              </li>
              <li className="flex-1">
                <Link className="flex items-center justify-center gap-1">
                  <span>State</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </Link>
              </li>
              <li className="flex-1">
                <Link>Contact</Link>
              </li>
              <li className="flex-1">
                <Link>Upload</Link>
              </li>
              <li className="flex-1">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export { Header };
