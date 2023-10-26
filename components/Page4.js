import React from 'react'

const Page4 = () => {
  return (
    <div className="page4 h-screen w-full flex flex-col md:flex-row items-center bg-[#C4BCB3] justify-between">
  <div className="page4-left w-full md:w-[65%] h-[50vh] md:h-full py-5 md:py-[80px] px-5 md:px-[5%]">
    <img className='h-full w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg" alt="" />
  </div>
  <div className="page4-right w-full md:w-[35%] h-full md:py-[80px] px-5 md:px-[5%]">
    <p className='text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-domain font-thin text-[#2f2f2f] mb-2 md:mb-[50px] leading-[6]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad praesentium molestiae, quam perspiciatis odit ut quis mollitia deleniti at! Temporibus magnam nulla esse optio atque minus facilis repudiandae est!
    </p>
    <div className="group oval flex items-center justify-center flex-nowrap h-[80px] md:h-[120px] w-full rounded-[50%] bg-[#CAC1B6] border-[1px] border-solid border-[#2f2f2fc6] overflow-hidden mt-2 md:mt-0">
      <img
        className='h-[20px] md:h-[40px] transform translate-x-[-100%] transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[76%]'
        src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
        alt=""
      />
      <h1 className='transform translate-x-[-50%] text-4xl ml-20 md:text-4xl  lg:text-5xl md:mr-10 font-canopee font-thin w-full h-full flex items-center justify-center transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[120%]'>
        All Work
      </h1>
    </div>
  </div>
</div>

  
    
  
  )
}

export default Page4