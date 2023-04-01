import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="bg-white m-x-6">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1">
            <div className="group relative">
              <img
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                alt=""
                src="assests/bottle.jpg"
              />
              <div className="mt-4 w-full flex justify-center text-center">
                <div className="text-center">
                  <h3 className="text-sm text-gray-700">
                    <Link to="text-center">TS-Main</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                alt=""
                src="assests/bottle.jpg"
              />
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      TS-Main
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                alt=""
                src="assests/bottle.jpg"
              />
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      TS-Main
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <img
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                alt=""
                src="assests/bottle.jpg"
              />
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to="">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      TS-Main
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
