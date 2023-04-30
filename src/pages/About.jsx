import React from "react";
import { AboutDetails, AddressCard } from "../sever";

const About = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="lg:grid grid-cols-6 ">
        <div className=" col-span-2 ">
          <AddressCard />
        </div>
        <div className="col-span-4">
          <AboutDetails />
        </div>
      </div>
    </div>
  );
};

export { About };
