import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="sm:grid sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-3 lg:gap-2 my-12 mx-9">
        <div
          onClick={() => {
            navigate("news");
          }}
          className="mx-auto  cursor-pointer flex flex-col justify-center items-center max-w-md lg:col-span-1"
        >
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
        <div className="mx-auto flex flex-col max-w-md lg:col-span-1">
          <figure className="">
            <img src="/assests/newspaper.jpg" alt="" />
          </figure>

          <div>
            <span>Ts Main</span>
          </div>
        </div>
      </section>
    </>
  );
};

export { Home };
