import React from "react";
import devPhoto from '../assets/Ajong.jpeg';
import {FaWhatsapp, FaTwitter, FaInstagram, FaMailBulk, FaFacebook} from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="hero flex justify-between items-center bg-black h-[100vh] px-28 py-10">
      <div className="hero-1 text-white w-1/2 flex flex-col gap-4">
        <p className="text-lg">Hi! I am</p>
        <h1 className="text-4xl font-extrabold">Ajongafac Zinkeng Mbetem</h1>
        <h1 className="text-pink-400 text-4xl font-extrabold">
          Frontend Developer
        </h1>
        <br />
        <p className="text-justify">
          I offer other services like{" "}
          <strong className="font-bold text-pink-400">UI/UX designs</strong> and
          <strong className="font-bold text-pink-400">
            {" "}
            Graphic designs.{" "}
          </strong>
          <br />I specialize in building seamless web experiences, designing
          user-centric interfaces, and bringing brands to life with stunning
          visuals.
        </p>
         <div className="flex mt-3">
              <FaWhatsapp size={23} color="#fb64b6" className="m-2"/>
              <FaTwitter size={23} color="#fb64b6" className="m-2"/>
              <FaFacebook size={23} color="#fb64b6" className="m-2"/>
              <FaInstagram size={23} color="#fb64b6" className="m-2"/>
              <FaMailBulk size={23} color="#fb64b6" className="m-2"/>
                  </div>
      </div>

      <div className="hero-2 b-0 w-[40%] h-full">
       <img className="text-white w-full object-cover object-top h-full rounded-full shadow-xl shadow-pink-500" src={devPhoto} alt="Developer's photo"></img>
      </div>
    </div>
  );
}

export default HeroSection;
