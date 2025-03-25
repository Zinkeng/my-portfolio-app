import React from 'react';
import devphoto from '../assets/Ajong.jpeg';

const subheadings = {
  Name: 'Ajongafac Zinkeng Mbetem',
  Address: 'Yaounde, Cameroon',
  Phone: '+237 682743056',
  Email: 'ajongafaczinkeng@gmail.com',
  Github: 'https://github.com/Zinkeng',
};

function About() {
  return (
    <>
      <div className="hero flex justify-between items-center gap-16 bg-gray-900 px-28 py-20 h-[90vh]">
        <div className="hero-2 w-1/2 h-full">
          <img
            className="text-white h-full w-full object-cover object-top rounded-xl"
            src={devphoto}
            alt="Developer's photo"></img>
        </div>

        <div className="hero-1 h-full text-white w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg text-pink-400">Discover</p>
              <h1 className="text-4xl font-bold">About Me</h1> <br />
              <hr className="w-26 text-pink-400" />
            </div>
            <p className="text-justify">
              My name is Ajongafac Zinkeng Mbetem. I am a Software engineer,
              UI/UX Designer and a Graphic Designer, based in Yaounde, Cameroon.
              I’m very passionate and dedicated to my work. With over two years
              of professional experience, I have acquired the skills necessary
              to build great and premuim websites, applications and softwares. I
              am particularly interested in open souce community projects and
              projects that brings about innovation in the Cameroon tech space
              and beyond.
            </p>
            <div className="my-details text-white flex flex-col gap-2 mt-5">
              <span>Name: {subheadings.Name}</span>
              <span>Address: {subheadings.Address}</span>
              <span>Phone: {subheadings.Phone}</span>
              <span>
                Email:{' '}
                <a
                  href={`mailto:${subheadings.Email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400">
                  {subheadings.Email}
                </a>
              </span>
              <span>
                Github:{' '}
                <a
                  href={subheadings.Github}
                  target="_blank"
                  className="text-pink-400">
                  {subheadings.Github}
                </a>
              </span>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <button className="btn align-middle text-center mt-4 shadow-lg shadow-pink-500 rounded-lg p-3 border-t hover:shadow-2xl hover:shadow-pink-500 hover:border-pink-500">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
