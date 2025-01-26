"use client";
import Link from 'next/link'

import Image from 'next/image'
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Blogcard1 from "@/images/productsImages/Blog card 1.png"
import Blogcard2 from "@/images/productsImages/Blog card 2.png"
import Blogcard3 from "@/images/productsImages/Blog card 3.png"
import Blogcard4 from "@/images/productsImages/Blog card 4.png"
import Footer from "@/components/footer"



export default function Blog() {
    return (
            <section className="bg-white w-full">
            <div className="relative w-full h-[400px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                    <h1 className=' text-white text-[80px] font-semibold'>Blog List</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/Blog"}>
                        <h1 className='text-white'>Menu</h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-[#FF9F0D]'>Blog</span>              
                        
                    </div>
                   
                    
                </div>
                 
            </div>
           
            {/* Blog card 1*/}
            <div className='ml-[20px] w-[600px] h-[5px] pt-[20px] '>
                <Image src={Blogcard1} alt="Blog card 1"></Image>
                <div className=' absolute inset-0 flex items-center justify-center '></div>

                <div className=" absolute top-[900px] left-[20px]">
               <b> <h1 className="font-extrabold text-[20px] text-[#333333] border-b border-dashed border-gray-300 pb-3"> 10 Reasons To Do A Digital Detox Challenge</h1></b>
                <h1 className="font-normal text-sm mt-[15px] text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea<p className="text-center absolute left-[500px] top-[70px] "></p></h1> 
                <p className="font-normal text-sm mt-[15px] text-[#4F4F4F]">takimata sanctus est Lorem ipsum dolor sit amet... </p>    
                </div>
            
              
               {/* Blog card 2*/}
               <div className='ml-[10px] w-[600px] h-[5px] pt-[210px] '>
                <Image src={Blogcard2} alt="Blog card 2"></Image>
                <div className=' absolute inset-0 flex items-center justify-center '></div>
                </div>
                     
                <div
                 className=" absolute top-[1440px] left-[50px]">
                 <b> <h1 className="font-extrabold text-[20px] text-[#333333] border-b border-dashed border-gray-300 pb-3"> 10 Reasons To Do A Digital Detox Challenge</h1></b>
                <h1 className="font-normal text-sm mt-[15px] text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea<p className="text-center absolute left-[500px] top-[70px] "></p></h1> 
                <p className="font-normal text-sm mt-[15px] text-[#4F4F4F]">takimata sanctus est Lorem ipsum dolor sit amet... </p>    
               
               
               
                 {/* Blog card 3*/}
                 <div className='ml-[0px] w-[600px] h-[5px] pt-[50px] '>
                <Image src={Blogcard3} alt="Blog card 3"></Image>
                <div className=' absolute inset-0 flex items-center justify-center '></div>
                
                <div
                 className=" absolute top-[570px] left-[0px]">
                 <b> <h1 className="font-extrabold text-[20px] text-[#333333] border-b border-dashed border-gray-300 pb-3"> 10 Reasons To Do A Digital Detox Challenge</h1></b>
                <h1 className="font-normal text-sm mt-[15px] text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea<p className="text-center absolute left-[500px] top-[70px] "></p></h1> 
                <p className="font-normal text-sm mt-[15px] text-[#4F4F4F]">takimata sanctus est Lorem ipsum dolor sit amet... </p>    
                </div>

                {/* Blog card 4*/}
                <div className='ml-[0px] w-[600px] h-[5px] pt-[190px] '>
                <Image src={Blogcard4} alt="Blog card 4"></Image>
                <div className=' absolute inset-0 flex items-center justify-center '></div>
                
                <div
                 className=" absolute top-[1070px] left-[0px]">
                 <b> <h1 className="font-extrabold text-[20px] text-[#333333] border-b border-dashed border-gray-300 pb-3"> 10 Reasons To Do A Digital Detox Challenge</h1></b>
                <h1 className="font-normal text-sm mt-[15px] text-[#4F4F4F]">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea<p className="text-center absolute left-[500px] top-[70px] "></p></h1> 
                <p className="font-normal text-sm mt-[15px] text-[#4F4F4F]">takimata sanctus est Lorem ipsum dolor sit amet... </p>    
            </div>
            </div>
            </div>
            </div>
            
            </div>
            <div className="absolute top-[2650px] ">
            <Footer/>
            </div>

              
            </section>
         
    )
}