import React from 'react';
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div>

      <div className="top-s mx-auto w-[80vw] h-[15vh] flex justify-between items-center relative">
        <div className='bg-[#38B6FF] w-[40px] h-[40px] rounded-full'></div>
        <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full'></div>
        <div className='flex left-6 rounded-xl absolute top-10 w-[76vw] h-[50px] justify-center shadow-xl items-center bg-[#ffffff70]'>
          <img className='h-[30px]' src={logo} alt="logo" />
        </div>
      </div>

      <div className="mid my-4">

        <div className="mid-top flex  items-center w-[60vw]  mx-auto">
          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>01</h1></div>
           
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div className=''>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>02</h1></div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>03</h1></div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px]'></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>04</h1></div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>05</h1></div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white font-semibold'>06</h1></div>
          </div>
        </div>

        <div className="mid-btm-line w-[58vw]  mx-auto">
          <ul className='flex font-semibold space-x-[80px]'>
            <li className='text-sm'>About</li>

            <li className='text-sm '>Profile </li>

            <li className='text-sm '>Education</li>

            <li className='text-sm '>Video</li>

            <li className='text-sm '>Availability</li>

            <li className='text-sm '>Subjects</li>
          </ul>
        </div>

        <div className="mid-btm w-[92vw] h-[68.2vh] mx-auto">
          <div className="mid-btm-left w-[46vw]">

          </div>

          <div className="mid-btm-right w-[46vw]">

          </div>
        </div>

      </div>

    </div>

  )
}

export default App
