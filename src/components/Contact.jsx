import React from 'react'
import Navbar from '../components/Navbar';
import { FaInbox, FaPhone, FaLocationPin } from 'react-icons/fa6';
import devphoto from "../assets/Ajong.jpeg";


const contactList = [
    {
        address: "Physical address",
        sub_address: "Fougerole, Yaounde",
        country: "Cameroon"

    }
]

function Contact (){
    return (<>

    <div className='bg-gray-950'>
    <Navbar />

    <div className='address_cards flex mt-15 pl-28 justify-center'>
        <div className='border-2 border-pink-400 rounded-sm gap-4 mr-12 bg-gray-700 h-60 w-60 text-white text-center'>
            
            <FaLocationPin size={23} color='white'/>
            <h3><strong>Physical address</strong></h3>
            <p>Fougerole, Yaounde</p>
            <p>Cameroon</p>
        </div>

        <div className='border-2 border-pink-400 rounded-sm gap-4 mr-12 bg-gray-700 h-60 w-60 text-white text-center'>
            <FaInbox size={23} color='white'/>
            <h3><strong>E-mail</strong></h3>
            <p>ajongafaczinkeng@gmail.com</p>
        </div>

        <div className='border-2 border-pink-400 rounded-sm gap-4 bg-gray-700 h-60 w-60 text-white text-center'>
            <FaPhone size={23} color='white'/>
            <h3><strong>Phone Number</strong></h3>
            <p>+237 682743056</p>
            <p>+237 670421187</p>
        </div>

    </div>


    <h1>I am the contact page</h1>

      <div className="hero flex justify-between items-center gap-16 bg-gray-900 px-5 lg:px-28  min-h-[650px]">
            <div className="hero-2 w-1/2 h-full">
              <img
                className="text-white h-full w-full object-cover object-top rounded-xl"
                src={devphoto}
                alt="Developer's photo"
              ></img>
            </div>
    
            <div className="hero-1 h-full text-white w-1/2 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg text-pink-400">Get in Touch</p>
                  <h1 className="text-3xl font-bold">Contact Me</h1> <br />
                  <hr className="w-26 text-pink-400"/>
                </div>
                 <h1 className="text-white text-5xl font-extrabold">
          Let's talk about your project
        </h1>
        <div className="message h-full bg-black">
            <form action="" className="ml-4 flex flex-col">
            <p className="font-bold"></p>
                <input type="E-mail" className="mt-4 h-8 bg-white rounded-xl w-80 text-pink-700" placeholder="Name" /> <br/>
                <input type="E-mail" className="mt-4 h-8 bg-white rounded-xl w-80 text-pink-700" placeholder="E-mail" /> <br/>
                <input type="text" className="h-20 rounded-sm bg-white text-pink-700 " placeholder="Comment or Message" />
                <button className="btn text-center font-bold bg-pink-400 text-white shadow-lg rounded-lg h-8 w-25 mt-3 ">
              Submit
            </button>
            </form>
        </div>
              </div>
              <div className="flex justify-start items-start">
              </div>
            </div>
          </div>
</div>
    </>
    )
}


export default Contact;