import React from "react";
import { Address, ContactForm } from "../sever";

const Contact = () => {
  return (
    <div className="md:w-4/5 mx-auto p-7">
      <div className="lg:grid  lg:grid-cols-6 place-content-center ">
        <div className="col-span-3 p-6 my-9">
          <Address />
        </div>
        <div className="col-span-3 p-6 my-9">
          <h2 className="md:text-4xl font-bold text-start text-cyan-400">
            Contact US
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export { Contact };
