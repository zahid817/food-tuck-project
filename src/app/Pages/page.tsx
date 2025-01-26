"use client";
import Link from 'next/link'

import Image from 'next/image'
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Footer from "@/components/footer"


export default function pages() {
    return (
            <section className="bg-white w-full">
            <div className="relative w-full h-[400px]">
            <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
            <div className=' absolute inset-0 flex items-center justify-center'>
            <h1 className=' text-white text-[60px] font-semibold'>404 Error</h1>
            <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                        <h1 className='text-white'>Home
                        </h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-yellow-500'>404</span>              
                        
            </div>
            <div className=" absolute top-[710px] left-[500px]">
            <div className='items-center justify-center'>
                <Link href={"/"}>
                 <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out">Go Back to home</button>
                </Link>
                </div>
                </div>
                <div className=" absolute top-[400px] left-[300px]">
            <div className='items-center justify-center'>
               <h1 className='font-extrabold text-[100px] text-yellow-500 ml-[200] '> 404</h1>
                </div>
               
                <h1 className=" font-bold text-[30px] text-[#333333] mt-[40px] mr-center " >Oops! Look likes something going wrong</h1> 
                <p className="font-normal text-sm mt-[10px] text-[#4F4F4F]">Page Cannot be found! we’ll have it figured out in no time. </p>
                <p className="font-normal text-sm mt-[10px] text-[#4F4F4F]">Menwhile, cheek out these fresh ideas</p>
                </div>
                <div className="absolute top-[1050px] ">
                 <Footer/>
                </div>
            </div>      
                
        </div>
        </section>
      
        
                 
    
   
    )

}