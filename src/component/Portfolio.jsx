import React, { useState } from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
const Portfolio = () => {
    const [arr,setArr] = useState([
        {
            img : <FaReact size={80}/>,
            name : 'React'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <IoLogoJavascript size={80}/>,
            name : 'JavaScript'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaCss3Alt size={80}/>,
            name : 'CSS'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaCss3Alt size={80}/>,
            name : 'CSS'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaHtml5 size={80}/>,
            name : 'HTML'
        },
        {
            img : <FaCss3Alt size={80}/>,
            name : 'CSS'
        }
    ])
  return (
    <div className='h-full w-full flex flex-col items-center mt-10 justify-center'>
       
        
              <h1 className='font-bold text-4xl'>Exprience</h1>
      <div className='m-10  h-full w-[80%] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 '>
        {
            arr.map((e,i)=>(
                <>
                
                <div className='transition-all duration-[1000ms] ease-in-out hover:scale-105 hover:-translate-y-1 rounded-4xl
                mb-4 p-4 flex items-center flex-col border h-auto w-auto mr-4' key={i}>
                    {e.img}
                    <h1 className='font-semibold text-2xl'>
                        {
                            e.name
                        }
                    </h1>
                    <button className='rounded bg-green-200 border px-2 my-2'>More Details</button>
                </div>
                </>
            ))
        }
      </div>
    </div>
  )
}

export default Portfolio
