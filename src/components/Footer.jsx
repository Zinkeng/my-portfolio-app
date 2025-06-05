import React from "react";
import {FaWhatsapp, FaTwitter, FaInstagram, FaMailBulk, FaFacebook} from 'react-icons/fa'

function Footer() {
  return (
    <div>
    <div className="footer text-white justify-between gap-16 bg-gray-900 px-5 lg:px-28  ">
      <p>Logo</p>
      <div className="footer-1 items-center align-middle justify-center gap-30 flex">
        <div className="pages gap-16 font-light align-middle flex">
          <div className="pages-1 flex-col gap-16">
            <p>Home</p>
            <p>About Me</p>
            <p>Services</p>
          </div>

          <div className="pages-2 flex-col gap-16">
            <p>Resume</p>
            <p>Portfolio</p>
            <p>Blog</p>
          </div>

          <div className="justify-center mt-20" >
        <p>SOCIAL MEDIA</p>
      <div className="flex">
      <FaWhatsapp size={20} color="#ffff"  className="m-2"/>
      <FaTwitter size={20} color="#ffff" className="m-2"/>
      <FaFacebook size={20} color="#ffff" className="m-2"/>
      <FaInstagram size={20} color="#ffff" className="m-2"/>
      <FaMailBulk size={20} color="#ffff" className="m-2"/>
          </div>
          </div>
        </div>

        <div className="message flex">
          <div>
            <form action="" className="ml-4 flex flex-col">
            <p className="font-medium ">Leave a Message...</p>
                <input type="E-mail" className=" mt-4 h-8 bg-gray-600 rounded-sm w-80 " placeholder="Please enter your email" /> <br/>
                <input type="text" className="h-15 rounded-sm bg-gray-600 " placeholder="How can we help you?" />
            </form>

            <div>
            <button className="btn text-center font-bold bg-pink-400 text-white shadow-lg rounded-lg h-8 w-25 mt-3 ">
              Submit
            </button>
            </div>
            </div>
        </div>
      </div>

          
    </div>
    <div className="flex justify-between bg-black w-full px-28">
            <div>
          <p className="textt-center text-gray-400 mt-2" > Copyright @2025 AZM, All Rights Reserved.</p>
          </div>
          <div className="flex gap-16">
          <div>
          <p className="text-center text-gray-400 bg-black mt-2" > Privacy Policy</p>
          </div>
          <div>
          <p className="text-center text-gray-400 bg-black mt-2" > Terms of Use</p>
          </div>
          </div>
          </div>
    </div>
  );
}

export default Footer;
