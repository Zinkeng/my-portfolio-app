import React from "react";
import devphoto from "../assets/Ajong.jpeg";

const subheadings = [
  {
    Name: "Ajongafac Zinkeng Mbetem",
    Address: "Yaounde, Cameroon",
    Phone: "+237 682743056",
    Email: "ajongafaczinkeng@gmail.com",
    Github: "link: https://github.com/Zinkeng"
  }
];

function About() {
  return (<>
    <div className="hero flex justify-between items-center bg-gray-900 px-28 pt-0">
      <div className="hero-2 w-1/2 flex gap-4  h-full mt-10">
        <img
          className="text-white"
          src={devphoto}
          alt="Developer's photo"
        ></img>
      </div>

        
      <div className="hero-1 h-screen text-white w-1/2 pl-28 ml-0 pb-0">
        <p className="text-lg text-pink-400">Discover</p>
        <h1 className="text-4xl font-bold">About Me</h1> <br/>
        <hr className="w-26 text-pink-400"/>
        <br />
        <p className="text-justify">
          My name is Ajongafac Zinkeng Mbetem. I am a Software engineer, UI/UX
          Designer and a Graphic Designer, based in Yaounde, Cameroon. I’m very
          passionate and dedicated to my work. With over two years of
          professional experience, I have acquired the skills necessary to build
          great and premuim websites, applications and softwares. I am
          particularly interested in open souce community projects and projects
          that brings about innovation in the Cameroon tech space and beyond.
        </p>
      </div>
      
      <div className="my-details text-white">
        {subheadings.map((item, index) => {
            return (<>
                <li>
                    Name: {item.Name}
                </li>
                <li>
                Address: {item.Address}
            </li>
            <li>
                Phone: {item.Phone}
            </li>
            <li>
                Email: {item.Email}
            </li>
            <li>
                Github: {item.Github}
            </li>
            </>
            );
        }) }
      </div>
      </div>
      <button className="btn align-middle text-c">Download CV</button>

      </>
  );
}

export default About;
