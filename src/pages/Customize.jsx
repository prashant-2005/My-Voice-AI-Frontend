import React, { useContext, useRef, useState } from 'react'
import Card from '../card/Card.jsx'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/authBg.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";


const Customize = () => {

  const { serverURL,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage,
    setSelectedImage } = useContext(userDataContext)

    const Navigate = useNavigate()

  const inputImage = useRef()

  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#090956] flex items-center justify-center flex-col relative '>

      <IoIosArrowRoundBack className='absolute top-[30px] left-[30px] text-white w-[30px] h-[30px] cursor-pointer ' onClick={()=> Navigate("/")} />

      <h1 className='text-white text-[30px] text-center p-[15px] mb-[10px] '>Select your <span className='text-blue-200'>Assistant Image</span> </h1>

      <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[20px] '>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        {/* <div className={`w-[70px] h-[120px] lg:w-[140px] lg:h-[220px] bg-[#0f0f2a] border-2 border-[#0000ff6b] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input" ? "border-4 border-white shadow-2xl shadow-blue-950" : null}`} onClick={() => {
          inputImage.current.click()
          setSelectedImage("input")

        }}>

          {!frontendImage && <RiImageAddLine className='text-white w-[30px] h-[30px]' />}

          {frontendImage && <img src={frontendImage} className='h-full object-cover' />}

        </div> */}
        <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage} />
      </div>

      {selectedImage && <button className="min-w-[120px] h-[50px] text-black font-semibold text-[15px] bg-white rounded-full mt-[20px] cursor-pointer" onClick={()=>Navigate("/customize2")}>Next</button> }

      
    </div>
  )
}

export default Customize
