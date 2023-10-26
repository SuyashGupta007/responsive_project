"use client"
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Page1 from '@/components/Page1';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';


export default function Home() {
  
  useEffect(() => {
  
    const t2 = gsap.timeline({ repeat: -1 })
    t2.fromTo(
      '.pg5-heading', 
      { x: '0%' },
      { x: '-100%', duration: 2, ease: 'power2.out' }
    );
      
   return () => {
      t2.kill();
      
     
    };
  });

  return (
    <div className="main bg-[#222] overflow-x-hidden scroll-smooth " >
      <Page1 />
      <Page2 />
     <Page3 />
      
      <div className="page4 h-screen w-full flex items-center bg-[#C4BCB3] justify-between ">
        <div className="page4-left  w-[65%] h-full py-[80px] px-[60px] ">
          <img className='h-full w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg" alt="" />
        </div>
        <div className="page4-right w-[35%] h-full  py-[80px] px-[60px]  ">
          <p className='text-3xl font-domain font-thin text-[#2f2f2f] mb-[50px] leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad praesentium molestiae, quam perspiciatis odit ut quis mollitia deleniti at! Temporibus magnam nulla esse optio atque minus facilis repudiandae est!</p>
          <div className="group oval flex items-center justify-center flex-nowrap h-[260px] w-full rounded-[50%] bg-[#CAC1B6] border-[1px] border-solid border-[#2f2f2fc6] overflow-hidden">
            <img
              className='h-[60px] transform translate-x-[-100%] transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[76%]'
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
              alt=""
            />
            <h1 className='transform translate-x-[-50%] text-6xl font-canopee font-thin w-full h-full flex items-center justify-center transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[120%]'>
              All Work
            </h1>
          </div>

        </div>
      </div>
      <div className="page5 h-[110px] w-full bg-[#C4BCB3] py-[30px] whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide border-y-[1px] border-solid border-[#2f2f2f]">
        <h1 className='pg5-heading text-7xl font-domain font-thin inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px] '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>

      </div>
      <div className="page6 h-[50px] w-full bg-[#C4BCB3] py-[30px] "></div>
    </div>
  );
}
