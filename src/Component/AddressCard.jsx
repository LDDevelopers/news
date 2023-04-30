import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhoneCall, FiMail } from "react-icons/fi";
const AddressCard = () => {
  return (
    <div className="mt-9 p-7">
      <address className="  text-white p-4  bg-cyan-600 rounded-xl">
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-start items-start   gap-3">
            <span className="text-2xl ">
              <HiLocationMarker />
            </span>
            <p className="text-md text-start">
              3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
              Bengaluru, Karnataka 560061
            </p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="text-2xl ">
              <FiPhoneCall />
            </span>
            <p className="text-md text-start">080 2666 6421</p>
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="text-2xl ">
              <FiMail />
            </span>
            <p className="text-md text-start">
              3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
              Bengaluru, Karnataka 560061
            </p>
          </div>
        </div>
      </address>
    </div>
  );
};

export { AddressCard };
