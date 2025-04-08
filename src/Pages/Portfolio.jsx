import React from 'react'
import Navbar from '../components/Navbar';


function Portfolio (){
    return <>
    <Navbar />
    <p className="text-lg text-pink-400 ">What I have done</p>
      <h1 className="text-4xl font-bold text-white">My Resume</h1> <br />
    <button className="btn align-middle text-center mt-4 shadow-lg shadow-pink-500 rounded-lg p-3 border-t hover:shadow-2xl hover:shadow-pink-500 hover:border-pink-500">
    Click to see my works
  </button>
  </>

}

export default Portfolio;