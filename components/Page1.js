"use client"
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import { useEffect } from 'react';


const Page1 = () => {
    useEffect(() => {
        const tl = gsap.timeline()
       
        tl.to(".page1", {
          y: "100vh",
          scale: 0.6,
          duration: 0
        })
        tl.to(".page1", {
          y: "30vh",
          duration: 1,
          delay: 1
        });
        tl.to(".page1", {
          y: "0vh",
          rotate: 360,
          scale: 1,
          duration: 0.7
        })
        
       
        return () => {
          tl.kill();
          
         
        };
      });
  return (
    <div className="page1 min-h-screen bg-[#C4BCB3] relative overflow-x-hidden">
  {/* Navbar */}
  <div className="nav h-16 md:h-20 lg:h-28 flex items-center justify-between py-2 md:py-3 px-4 md:px-8 border-b border-black border-solid">
    <h5 className='text-base md:text-lg lg:text-xl font-light w-2/5'>Amsterdam, NL</h5>
    <img src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg" alt="" className='h-10 lg:h-12 w-2/5' />
    <i className="ri-menu-3-line w-2/5 text-right "></i>
  </div>

  {/* Elements */}
  <div className='elems h-auto md:h-[430px] lg:h-[500px] flex flex-col md:flex-row items-center justify-between py-4 md:py-10 px-4 md:px-8 lg:px-14'>

    {/** Element 1 */}
    <div className="elem w-full md:w-[30%] h-full mb-6 md:mb-0">
      <div className="image-div h-2/5 md:h-3/5 w-full overflow-hidden hover:scale-[1.1] ">
        <img src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?" alt="" className='h-full w-full object-cover transition-all duration-[ease] delay-[0.5s] ' />
      </div>
      <h4 className='text-base md:text-lg lg:text-xl font-medium my-2.5 font-canopee'>AVRO | KO <span className='bg-orange-800 text-white font-thin text-xs md:text-sm lg:text-xl p-1 rounded'>NEW</span></h4>
      <p className='text-xs md:text-base lg:text-xl font-domain font-light text-[#656565] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi placeat doloribus dicta aliquam asperiores laboriosam reprehenderit vero cupiditate doloremque.</p>
    </div>

    {/** Element 2 */}
    <div className="elem w-full md:w-[30%] h-full border-r border-l border-solid px-4 md:px-7 lg:px-10 py-5 text-center border-x-gray-500 ">
      <h2 className='font-canopee text-xl md:text-4xl lg:text-7xl'>All Work!</h2>
      <h3 className='font-domain font-thin text-xs md:text-base lg:text-5xl my-3 md:my-5'>A Featured selection<br />the latest work-<br />of the last years</h3>
      <h6 className='font-domain text-xs md:text-base lg:text-xl font-thin '>Tip! Drag sideways to navigate</h6>
    </div>

    {/** Element 3 */}
    <div className="elem w-full md:w-[30%] h-full font-light">
      <div className="image-div h-2/5 md:h-3/5 w-full overflow-hidden hover:scale-[1.1]">
        <img src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?" alt="" className='h-full w-full object-cover  transition-all duration-[ease] delay-[0.5s]' />
      </div>
      <h4 className='text-base md:text-lg lg:text-xl font-medium my-2.5 font-canopee'>The roger hub <span className='bg-orange-800 text-white font-thin text-xs md:text-sm lg:text-xl p-1 rounded'>NEW</span></h4>
      <p className='text-xs md:text-base lg:text-xl font-domain font-light text-[#656565] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi placeat doloribus dicta aliquam asperiores laboriosam reprehenderit vero cupiditate doloremque.</p>
    </div>

  </div>

  {/* Title */}
  <h1 className='text-[35em] md:text-[570px] lg:text-[35em] font-canopee font-thin bg-[#1C1C19] text-[#C4BCB3] leading-[2.5rem] md:leading-[600px] lg:leading-[700px] width-[96%] mx-[2%] tracking-tight'>
    MIRANDA
  </h1>
</div>

  
  )
}

export default Page1