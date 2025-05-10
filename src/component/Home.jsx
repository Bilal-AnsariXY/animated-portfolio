import React from 'react'
import { ReactTyped,Typed } from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import mypic from '../public/mypic.jpg'
const Home = () => {
  return (
    <>
        <div className=' flex  flex-col-reverse mt-30 md:flex-row lg:flex-row  sm:mt-30 md:mt-10 sm:flex-col-reverse items-center  h-screen justify-evenly  w-full m-5'>
            <div className='w-[50%]'>
                <p className='font-bold'>Welcome in My Feed</p>
                <h1 className='font-bold text-4xl'>Hello, I'm a <span> </span>
                    {/* <span className='text-green-700'>Devloper</span> */}
                     <ReactTyped
                        className='text-green-700'
                        strings={[' Devloper',' Programer',' Coder']}
                        typeSpeed={40}
                        backSpeed={40}
                        loop={true}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia rerum ut! Adipisci animi, necessitatibus quam suscipit non repellat repellendus, voluptate tempora architecto harum omnis vitae natus molestiae voluptatibus blanditiis.</p>
                <div className='md:flex-row lg:flex-row flex-col  flex justify-between mt-5 items-center'>
                    <div className='m-5 flex items-center  flex-col justify-between' >
                        <p className='font-medium text-md'>Avalible on</p>
                        <div className='flex space-x-3'>
                            <FaFacebook className='h-5 w-5'/>
                            <FaLinkedin className='h-5 w-5'/>
                            <FaYoutube className='h-5 w-5'/>
                            <FaTelegram className='h-5 w-5'/>
                        </div>
                    </div>
                    <div className='m-5 flex items-center  flex-col justify-between'>
                        <p className='font-medium text-md'>Currently Working on</p>
                        <div className='flex space-x-3'>
                            <FaReact className='h-5 w-5'/>
                            <IoLogoJavascript className='h-5 w-5'/>
                            <FaCss3Alt className='h-5 w-5'/>
                            <FaHtml5 className='h-5 w-5'/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <img className='h-70 w-70 rounded-full ' src= {mypic} alt='myImage' />
            </div>
            
        </div>
    </>
  )
}
export default Home
