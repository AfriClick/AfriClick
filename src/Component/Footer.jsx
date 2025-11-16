import React from 'react'
import {motion} from "framer-motion";

const Footer = () => {
      const steps = [
        {
          icon: "fas fa-message",
          title: "hello@africlick.co.tz",
          text: "Write to us",
        },
        {
          icon: "fas fa-phone",
          title: "+255 (0) 000 000 000",
          text: "Call Us (TZ)",
        },
        {
          icon: "fas fa-house",
          title: "Dar es Salaam, Tanzania",
          text: "Our Office",
        },
      ];

    return (
        <div>
        
        <div className='py-6 bg-indigo-600'>
        <div>
        <div className="flex flex-col items-center justify-center text-center 
md:flex-row md:gap-6 
ipad:flex-col ipad:items-center ipad:gap-8 
px-4 mt-4 ipad:mt-6 md:mt-8 md:max-w-[80%] mx-auto gap-10">
  {steps.map((step, index) => (
    <React.Fragment key={index}>
     
      <div className="flex items-center gap-4 w-full ipad:w-full max-w-xs mx-auto text-left md:w-auto">
        <div className="inline-flex items-center justify-center bg-white/10 p-2 rounded-full">
          <i className={`${step.icon} text-white text-sm`}></i>
        </div>
        <div>
          <p className="text-sm text-white mt-0">{step.text}</p>
          <h1 className="font-medium text-white">{step.title}</h1>
        </div>
      </div>
      {index < steps.length - 1 && (
        <hr className="hidden ipad:hidden md:block w-px h-12 bg-gray-400 border-0" />
      )}
    </React.Fragment>
  ))}
</div>
            </div>
            <div className='flex justify-center items-center gap-4 ipad:4 md:gap-6 text-white text-2xl mt-12 mb-10'>
      <i class="fa-brands fa-facebook hover:text-gray-300"></i> 
      <i class="fa-brands fa-linkedin hover:text-gray-300"></i>
      <i class="fa-brands fa-instagram hover:text-gray-300"></i>
      <i class="fa-brands fa-youtube hover:text-gray-300"></i>
    </div>
    <p className=" flex justify-center items-center text-white cursor-pointer text-sm m-0">Copyright @ AfriClick Digital 2025 - All Right reserved.</p>
            </div>
        </div>
        
    )
}

export default Footer


