"use client"
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Page1 from '@/components/Page1';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';


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
     <Page4 />
      
      <div className="page5 h-[110px] w-full bg-[#C4BCB3] py-[30px] whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide border-y-[1px] border-solid border-[#2f2f2f]">
        <h1 className='pg5-heading text-7xl font-domain font-thin inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px] '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>

      </div>
      <div className="page6 h-[50px] w-full bg-[#C4BCB3] py-[30px] "></div>
    </div>
  );
}
