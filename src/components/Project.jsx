import React from "react";
import devphoto from "../assets/Ajong.jpeg";


function Project() {
  return (
    <div className="bg-black pl-28 flex justify-between align-middle items-center gap-16 px-5 lg:px-28  min-h-[400px]">
      <div className="text">
        <h1 className="text-white text-7xl font-extrabold">
          Which of my Services do you need?
        </h1> <br/>
        <p className="text-white">
          Are you in need of my development or my design skills? Just contact me
        </p>
        <button className="btn align-middle text-center text-white mt-4 shadow-lg shadow-pink-500 rounded-lg p-3 border-t hover:shadow-2xl hover:shadow-pink-500 hover:border-pink-500">
              Contact Me
            </button>
      </div>

      <div className="photo w-1/2 h-full">
        <img
          className="text-white h-full w-full object-cover object-top rounded-xl"
          src={devphoto}
          alt="Developer's photo"
        ></img>
      </div>
    </div>
  );
}

export default Project;
