import React from "react";
import {FaWhatsapp, FaTwitter, FaInstagram, FaMailBulk, FaFacebook} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer text-white justify-between gap-16 bg-gray-900 px-5 lg:px-28  ">
      <p>Logo</p>
      <div className="footer-1 items-center align-middle justify-center flex">
        <div className="pages flex gap-16 font-medium align-middle">
          <div className="pages-1">
            <p>Home</p>
            <p>About Me</p>
            <p>Services</p>
          </div>

          <div className="pages-2">
            <p>Resume</p>
            <p>Portfolio</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="message border-l-2 border-pink-400">
            <form action="" className="ml-4 flex flex-col">Email <br/>
                <input type="E-mail" className=" mt-4 h-8 bg-gray-600 rounded-sm " placeholder="Please enter your email" /> <br/>
                <input type="text" className=" mt-4 h-15 rounded-sm bg-gray-600 " placeholder="Leave a message..." />
                <button className="btn text-center border-black font-bold bg-pink-400 text-black shadow-lg rounded-lg border-2 h-7 w-20">
              Submit
            </button>
            </form>
        </div>
      </div>

      <div className="flex justify-center mt-5">
      <FaWhatsapp size={23} color="#ffff"  className="m-2"/>
      <FaTwitter size={23} color="#ffff" className="m-2"/>
      <FaFacebook size={23} color="#ffff" className="m-2"/>
      <FaInstagram size={23} color="#ffff" className="m-2"/>
      <FaMailBulk size={23} color="#ffff" className="m-2"/>
          </div>
          <p className="text-center bg-black mt-5" >ALL RIGHTS RESERVED @Zinkeng @2025</p>
    </div>
  );
}

export default Footer;
