import React, { useState } from 'react'
import mypic from '../public/mypic.jpg'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [clicked,setClicked] = useState(false);
    const [clicks,setClicks] = useState(false);
    const [arr,setArr] = useState([
        'Home','About','Projects','Exprience','Contact'
    ])
  return (
    <>
    <div className=  'lg:w-full   bg-white z-10 h-25 sm:h-30    md:h-18 w-full shadow-2xl  flex items-center fixed top-0 justify-between'>

        <div className='m-10 flex items-center justify-center space-x-5'>
            <img src={mypic} alt="My image" className='h-10 w-10  rounded-full'/>
            <div >
                <h1 className='font-bold text-2xl'>Bila<span className='text-green-700'>l</span></h1>
                <p className='font-semibold'>Web Devloper</p>
            </div>
        </div>

        <div className='m-10'>
            <ul className='hidden lg:flex  space-x-10'>
                {
                    arr.map((e,i)=>(
                        <li key={i}>
                           <Link to={e}
                           smooth={true}
                           duration={1000}
                           offset={-70}
                           activeClass='active'>
                           {e}
                           </Link> 
                        </li>
                    ))
                }
            </ul>
            
        </div>
        <div onClick={()=>{setClicked(!clicked)
            setClicks(!clicks)
        }} className='lg:hidden m-10'>
            {

                clicked ? <RxCross1 className='h-8 w-8 font-bold'/> : <AiOutlineMenu className='h-8 w-8 font-bold' />
            }

        </div>

    </div>
    {
        clicks && <div className='w-full h-full fixed top-0 items-center justify-center gap-4 text-black flex flex-col md:flex lg:hidden bg-white'>
            <ul className='space-y-4'>
                {
                    arr.map((e,i)=>(
                        <li className='text-2xl ' key={i}>
                        <Link onClick={()=>{setClicks(!clicks)
                            setClicked(!clicked);
                        }} to={e}
                           smooth={true}
                           duration={1000}
                           offset={-70}
                           activeClass='active'>
                           {e}
                           </Link> 
                        </li>
                    ))
                }
            </ul>
        </div>
    }
    </>
  )
}
export default Navbar