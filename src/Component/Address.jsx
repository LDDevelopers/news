import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Address = () => {
  return (
    <address className="p-6 w-full ">
      <h1 className="my-6 font-bold lg:text-xl text-cyan-400">
        We are happy to answer all your questions
      </h1>
      <div className="flex justify-start items-start p-5 border-2 rounded-md my-6 gap-3">
        <span className="text-2xl text-cyan-600 ">
          <HiLocationMarker />
        </span>
        <p className="text-md text-start">
          3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
          Bengaluru, Karnataka 560061
        </p>
      </div>
      <div className="flex justify-start items-center p-5 border-2 rounded-md my-6 gap-3">
        <span className="text-2xl text-cyan-600 ">
          <FiPhoneCall />
        </span>
        <p className="text-md text-start">080 2666 6421</p>
      </div>
      <div className="flex justify-center p-5 border-2 rounded-md my-6 gap-3">
        <span className="text-2xl text-cyan-600">
          <FiMail />
        </span>
        <p className="text-md text-start">
          3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
          Bengaluru, Karnataka 560061
        </p>
      </div>
    </address>
  );
};

export { Address };
