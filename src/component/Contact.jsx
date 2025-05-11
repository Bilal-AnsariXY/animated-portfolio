import React from 'react'
const Contact = () => {
  return (
    <div name = 'Contact' className='h-full w-full flex items-center justify-center my-5'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-bold text-3xl'>Contact Me</h1>
        <form className='flex flex-col space-y-8'>
          <input type="text" className='border rounded-xl p-2 ' placeholder='Enter Your Name' />
          <textarea placeholder='Write the Query' className='border rounded-xl p-2'></textarea>
          <button className='border rounded-xl p-2 bg-green-200'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
