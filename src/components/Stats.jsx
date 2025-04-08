import React, { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer"; // Detect when in viewport
import { FaPeopleGroup, FaBriefcase} from "react-icons/fa6";

function Stats(){

    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });  // Detect visibility
    
   useEffect(() => {
    if (inView) {
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount < 15) {
          currentCount += 1;
          setCount(currentCount);
        } else {
          clearInterval(interval);
        }
      }, 100); // Speed of counting

      return () => clearInterval(interval); // Cleanup function
    }
  }, [inView]);


    return(
        <div className='flex bg-black items-center justify-center gap-60 py-10'>
        <div>
            <FaPeopleGroup size={40} color="#fb64b6" className='ml-6'/>
            <p className='text-white text-4xl font-extrabold pl-5'>10</p>
            <h1 className='text-gray-500 text-2xl font-meduim'>Clients</h1>

        </div>

        <div>
        <FaBriefcase size={30} color="#fb64b6"  className="ml-8 "/>
        <p ref={ref} className='text-white text-4xl font-extrabold pl-5'>{count}+</p>
        <h1 className='text-gray-500 text-2xl font-meduim'>Projects</h1>

        </div>
        </div>
    )

}

export default Stats;