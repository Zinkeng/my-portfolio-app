import React from "react";
import {list} from "./text";
import { FaFaceFlushed } from "react-icons/fa6";
import { IconBase } from "react-icons";


function Services() {
  return (
    <div className="pl-28 bg-gray-900">
      <p className="text-lg text-pink-400 ">What I do</p>
      <h1 className="text-4xl font-bold text-white">My Services</h1> <br />
      <hr className="w-26 text-pink-400" />
      <div className="cards ">
        <div className="card-1 flex ">
          {list.map((item, index) => {
            const Icon = item.icon; // Create a variable for the component
            return (
              <div key={index} className="flex flex-col border-pink-400 border-2 p-4 ml-0 mr-12 m-4 w-56 gap-4 h-56 text-white">
                <Icon size={24} color="white" /> {/* Render it as a component */}
                <h1 className="text-bold text-center">{item.title}</h1>

                <p>{item.description}</p>
                {/* <button className="btn align-middle text-center text-white mt-4 shadow-lg shadow-pink-500 rounded-lg p-3 border-t hover:shadow-2xl hover:shadow-pink-500 hover:border-pink-500">
              Show More
            </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
