import React from 'react';
import logo from "./assets/logo.png";
import front from "./assets/front.png";
import back from "./assets/back.png";
import finish from "./assets/finish.png";
import plus from "./assets/cross.png";
import Modal from './Modal'



const Home = () => {

  const showModal = () =>{
    let list = document.getElementById("modal").classList.contains('hidden')
    if(list){
      document.getElementById("modal").classList.remove("hidden");
    }else{
      document.getElementById("modal").classList.add("hidden");
    }
  }

  return (
    <div className=''>
      <div className='bg-gradient-to-t from-white to-[#99daff] w-full h-[15vh]]'>
        <div className="top-s mx-auto w-[80vw] h-[15vh] flex justify-between items-center relative">
          <div className='bg-[#38B6FF] w-[40px] h-[40px] rounded-full'></div>
          <div className='bg-[#38B6FF] w-[50px] h-[50px] rounded-full'></div>
          <div className='flex left-6 rounded-xl absolute top-10 w-[76vw] h-[50px] justify-center shadow-xl items-center bg-[#ffffff70]'>
            <img className='h-[30px]' src={ logo } alt="logo" />
          </div>
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



        <div className="mid-btm w-[92vw] mx-auto mt-[32px] flex">

          <div className="mid-btm-left w-[46vw] flex justify-center  relative">
            <img className='z-20 h-[400px]' src={ front } alt="" />
            <div className='bg-gradient-to-b from-white to-[#38B6FF] w-[400px] h-[400px] rounded-full absolute top-4'></div>
          </div>

          <div className="mid-btm-right w-[46vw] relative">
            <div className="docs">
              <h1 className='font-semibold text-xl'>Subjects & Pricing</h1>
              <p className='text-sm font-light py-3'>Lorem ipsum dolor sit amet consectetur. Amet.</p>

              <div className="inp-box bg-[#F1F7FA] rounded-xl h-[330px] w-[85%] shadow-xl">
                <div className='flex items-center justify-between w-[95%]'>
                  <div className=''>
                    <h1 className='ml-7 text-lg font-semibold pt-3'>Add Subject</h1>
                    <p className='ml-7 font-semibold text-sm'>Please click on + to Add Subjects</p>
                  </div>
                  <button onClick={showModal} className='bg-[#FFFFFF] w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                      <img src={ plus } alt="" />
                  </button>
                </div>

                <div className='mt-10 flex flex-col'>
                  <label className='ml-7 font-semibold' htmlFor="">Select Curriculum</label>
                  <input type="text" className='w-[90%] mx-auto rounded-lg h-8 mt-2' />
                </div>

                <div className='mt-2 flex flex-col '>
                  <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-1 ">
                      <label className='ml-7 font-semibold' htmlFor="">Hours / week</label>
                      <input type="number" className='placeholder-padding ml-7 rounded-lg h-8 mt-2 text-sm' placeholder='Mention Hours' />
                    </div>
                    <div class="col">
                      <label className='ml-7 font-semibold' htmlFor="">Hours / week</label>
                      <div className='flex'>
                        <input type="text" className='placeholder-padding w-[100px] ml-7 rounded-lg h-8 mt-2 text-sm' placeholder='AED' />
                        <input type="text" className='placeholder-padding ml-7 rounded-lg h-8 mt-2 text-sm' placeholder='Mention rates' />
                      </div>
                    </div>


                  </div>
                </div>

                <div className="btn flex justify-between w-[90%] mx-auto my-8">
                  <div className="left flex items-center space-x-2">
                    <div className='bg-[#FFFFFF] w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                      <img src={ back } alt="" />
                    </div>
                    <h1 className='font-semibold'>Back</h1>
                  </div>
                  <div className="right flex items-center space-x-2">
                    <h1 className='font-semibold text-[#38B6FF]'>Finish</h1>
                    <div className='bg-[#FFFFFF] w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                      <img src={ finish } alt="" />
                    </div>
                  </div>
                </div>

                <div className='bg-[#38B6FF] w-[40px] h-[40px] rounded-full absolute -bottom-3 -left-4 -z-10'></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Modal */}
      <div id="modal" className="hidden">
        <Modal toggleModal={showModal}/>
      </div>
    </div>

  )
}

export default Home
