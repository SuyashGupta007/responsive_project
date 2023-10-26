import React from 'react'

const Page2 = () => {
  return (
    <div className='page2 h-full md:h-[180vh] w-full bg-[#C4BCB3] flex flex-col md:flex-row items-center justify-between py-8 md:py-20 px-4 md:px-8'>
  <div className="page2-left md:w-[40%] pr-4 md:pr-8 lg:pr-12 border-r border-solid border-[#222]">
    <h2 className='text-2xl md:text-5xl lg:text-7xl font-canopee text-center leading-[2.5rem] md:leading-[5rem] lg:leading-[7rem] font-thin' >
      Interactive <span className='text-3xl md:text-6xl lg:text-8xl font-[900]'>Artist!</span>
    </h2>
    <img className='h-1/2 md:h-[70%] w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg" alt="" />
    <p className='text-base md:text-xl font-sans text-[#2f2f2f] mt-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi, officia delectus consequatur sed nihil cupiditate, in impedit, fugit consequuntur eveniet! Odit, quaerat exercitationem sit ipsa odio minus numquam modi!
    </p>
  </div>
  <div className="page2-right md:w-[60%] px-4 md:px-8 lg:px-12">
    <img className='h-1/2 md:h-[70%] w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg" alt="" />
    <h1 className='font-canopee text-2xl md:text-5xl lg:text-8xl tracking-[-1px] font-thin '>
      <span>Digital Art Director</span> <span>Interactive Designer</span> <span>Creative Developer</span>
      <span className="block text-sm md:text-base lg:text-xl">Based in Amsterdam, NL.</span>
    </h1>
  </div>
</div>

  )
}

export default Page2