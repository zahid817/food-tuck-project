"use client";
import Link from 'next/link'
import Image from 'next/image'
import H1 from "@/images/productsImages/H1.png"
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Footer from "@/components/footer"


export default function Home() {
    return (
            <section className="bg-white w-full">
            <div className="relative w-full h-[300px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                   <h1 className=' text-white text-[80px] font-semibold'>Home</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        
                        <h1 className='text-white'>Home
                        </h1>
                           
                        <span className='text-white' ></span>                                    
                    </div>
                
                
                  {/* Starter Menu */}
                 <div className='ml-[50px] mt-10 w-[400px] h-[100px] mb-[1000px]'>
                   <Image src={H1} alt="H1"></Image>
                 </div>
                
                
                
                
                
                
                
                
                  <div className="absolute top-[4000px] ">
                     <Footer/>
                  </div> 
               </div>
            </div>
        </section>
    )
}