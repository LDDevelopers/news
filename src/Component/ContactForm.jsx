import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="my-8">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            FullName*
          </label>
          <div className=" mt-2 rounded-md shadow-sm">
            <input
              required
              type="text"
              name="fullname"
              id="fullname"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="my-8">
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Company*
          </label>
          <div className=" mt-2 rounded-md shadow-sm">
            <input
              required
              type="text"
              name="company"
              id="company"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="my-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Email Id*
          </label>
          <div className=" mt-2 rounded-md shadow-sm">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="massage"
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Message*
          </label>
          <div className=" mt-2 rounded-md shadow-sm">
            <textarea
              required
              cols="30"
              rows="5"
              name="massage"
              id="massage"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              placeholder="message"
            />
          </div>
        </div>
        <div className="bg-cyan-600 mt-9 p-3 rounded-md text-white text-lg">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };
