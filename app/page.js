"use client"
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Page1 from '@/components/Page1';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';
import Page5 from '@/components/Page5';


export default function Home() {
  
 

  return (
    <div className="main bg-[#222] overflow-x-hidden scroll-smooth " >
      <Page1 />
      <Page2 />
     <Page3 />
     <Page4 />
     <Page5 />
     
      <div className="page6 h-[50px] w-full bg-[#C4BCB3] py-[30px] "></div>
    </div>
  );
}
