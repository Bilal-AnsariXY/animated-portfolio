import React from 'react'

const Projects = () => {
  return (
   <div name = 'Projects' className=' h-full w-full flex mt-20 items-center justify-center'>
    <div className='flex-wrap m- h-full w-[80%] flex flex-col items-start'>
        <h1 className='font-bold text-3xl mb-5'>Projects</h1>
       
        <h2 className='text-green-700 text-xl font-semibold cursor-pointer' 
          onClick={() => {
            window.open("https://swiggy-clone-jet-eta.vercel.app/", "_blank");
          }}
        
        >Swiggy Clone  </h2>
        <p>
            A responsive frontend clone of Swiggy built using HTML, CSS, and JavaScript. It includes a homepage with featured restaurants, category-based filtering, and a cart UI. Focused on layout, design consistency, and responsiveness across devices.
        </p>
        <h2 className='text-green-700 text-xl font-semibold cursor-pointer' 
          onClick={() => {
            window.open("https://news-react-three-pi.vercel.app/", "_blank");
          }}
        >News App  </h2>
        <p>
          A dynamic News App built using HTML, CSS, and JavaScript with real-time news fetched from a public news API. It displays top headlines across various categories like technology, business, and sports. The UI is fully responsive and includes features like live updates, category filtering, and seamless API integration for a smooth user experience.
        </p>

        <h2 className='text-green-700 text-xl font-semibold cursor-pointer'
          onClick={() => {
            window.open("https://add-to-cart-react-beta.vercel.app/", "_blank");
          }}
        >Cart Facility</h2>
        <p>
            A frontend cart system implemented with JavaScript and local storage. Users can add, remove, and update product quantities. The UI reflects total price updates in real time and is styled using modern CSS layout techniques.
        </p>

        <h2 className='text-green-700 text-xl font-semibold cursor-pointer'
          onClick={() => {
            window.open("https://bilal-ansarixy.github.io/tic-tak-toe-js/", "_blank");
          }}
        >Tic Tac Toe</h2>
        <p>
            A classic Tic Tac Toe game developed using HTML, CSS, and JavaScript. Includes features like dynamic win detection, turn indication, and restart option. Styled with a modern UI and fully responsive design.
        </p>

        

        <h2 className='text-green-700 text-xl font-semibold'>Professional Experience</h2>
        <p>
            Participated in multiple frontend mini-projects and hackathons, contributing mainly to UI/UX design and responsive layouts. Gained hands-on experience with real-time collaboration and frontend debugging.
        </p>

        <h2 className='text-green-700 text-xl font-semibold'>Achievement and Awards</h2>
        <p>
            - Successfully completed 2+ frontend-focused projects.<br />
            - Earned positive feedback for UI design in college projects.<br />
            - Consistently met frontend project deadlines during collaborative tasks.
        </p>

        <h2 className='text-green-700 text-xl font-semibold' >Mission & Statement</h2>
        <p>
            To master frontend development by building modern, responsive, and user-friendly web interfaces. I aim to deliver clean, functional UI designs that offer a seamless experience and match industry standards.
        </p>
    </div>
</div>
  )
}

export default Projects
