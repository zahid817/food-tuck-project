// components/Hero.tsx
"use client";
import H1 from "@/images/productsImages/H1.png"
import heroImage from "@/images/productsImages/unsplash_qom5MPOER-I.png"
import Image from "next/image";
import Footer from "@/components/footer"


 export default function Hero() {
    return (
        <section>
            <div className="hero-section">
                <Image src={heroImage} alt="heroimage"  ></Image>
            </div>
           
           {/* Starter Menu */}
           <div className='ml-[0px] mt-0 w-full h-[100px] mb-[950px]'>
                   <Image src={H1} alt="H1"></Image>
                 </div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            <div className="absolute top-[1500px] ">
                <Footer/>
            </div> 

        </section>
    );
};


