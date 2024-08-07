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
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>01</h1>
              <h1 className='text-black font-semibold mt-3'>About</h1>
            </div>
           
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div className=''>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>02</h1>
              <h1 className='text-black font-semibold mt-3'>Profile</h1>
            </div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>03</h1>
              <h1 className='text-black font-semibold mt-3'>Education</h1>
            </div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px]'></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>04</h1>
              <h1 className='text-black font-semibold mt-3'>Video</h1>
            </div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>05</h1>
              <h1 className='text-black font-semibold mt-3'>Availability</h1>
            </div>
            
          </div>
          <div className='bg-[#38B6FF] w-[100px] h-[2px] '></div>

          <div>
            <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center'>
              <h1 className='text-white font-semibold mt-8'>06</h1>
              <h1 className='text-black font-semibold mt-3'>Subjects</h1>
            </div>
          </div>
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
