import React from "react";
import { Address, ContactForm } from "../sever";

const Contact = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-6 place-content-center ">
        <div className="col-span-3 ">
          <Address />
        </div>
        <div className="col-span-3 p-6 my-6">
          <h2 className="text-4xl font-bold text-start text-cyan-400">
            Contact US
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export { Contact };
