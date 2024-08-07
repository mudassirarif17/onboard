import React from 'react'
import cross from "./assets/newcroos.png";


const Modal = ({toggleModal}) => {
  return (
    <div className='flex justify-center items-center h-[100vh] custom-transition z-20 '>

      <div className="modal mx-auto bg-[#F1F7FA] h-[55vh] w-[45vw] rounded-lg">
            <div className="top-side w-[90%] mx-auto flex justify-between items-center my-4">
                <h1 className='font-semibold text-xl'>Add Subject</h1>
                <img className='cursor-pointer' onClick={toggleModal} src={cross} alt="" />
            </div>
            <hr className='bg-gray-400'/>

        <div className="inputs my-8">
            <div className='flex flex-col'> 
                <label className='ml-7 font-semibold text-sm' htmlFor="">Select Subject</label>
                <input type="text" className='placeholder-padding ml-7 w-[90%] rounded-lg h-10 mt-2 text-sm' />
            </div>

            <div className='flex flex-col my-5'> 
                <label className='ml-7 font-semibold text-sm' htmlFor="">Select Subject Level</label>
                <input type="text" className='placeholder-padding ml-7 w-[90%] rounded-lg h-10 mt-2 text-sm' />
            </div>

        </div>

        <div className="btns w-[90%] mx-auto flex justify-between">
            <button className='border-2 border-[#38B6FF] text-[#38B6FF] font-semibold text-md px-4 py-1 rounded-lg'>Cancel</button>
            <button className='bg-[#38B6FF] text-white font-semibold text-md px-4 py-1 rounded-lg'>Add</button>
        </div>

      </div>
    </div>
  )
}

export default Modal
