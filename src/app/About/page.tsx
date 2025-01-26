"use client";
import Link from 'next/link'
import Image from "next/image"
import heroImage2 from "@/images/productsImages/heroImage2.png"
import Aboutus from "@/images/productsImages/aboutus.png"
 import Whychose from "@/images/productsImages/wcu.png"
 import MarkHenry from "@/images/productsImages/Mark Henry.png"
 import LuckyHelen from "@/images/productsImages/Lucky Helen.png"
 import MoonHenry from "@/images/productsImages/Moon Henry.png"
 import TomMonrow from "@/images/productsImages/Tom Monrow.png"
 import Ellipse6 from "@/images/productsImages/Ellipse 6.png"
import Footer from "@/components/footer"


 export default function About(){
    return(
        <section className="bg-white w-full">
        <div className="relative w-full h-[400px]">
            <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
            <div className=' absolute inset-0 flex items-center justify-center'>
                <h1 className=' text-white text-[80px] font-semibold'>About Us</h1>
                <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                    <Link href={"/"}>
                    <h1 className='text-white'>Home
                    </h1>
                    </Link>    
                    <span className='text-white' >/</span>
                    <span className='text-[#FF9F0D]'>About</span>              
                    
                </div>
               
                
            </div>
             
        </div> 
        {/* //aboutus */}
        <div>
           <div className='ml-[0px] w-[400px] h-[5px] pt-[10px] '> </div>
            <Image src={Aboutus} alt="aboutus"></Image>
        </div>
           

        <div className="bg-white">
            <div className="absolute top-[600px] left-[800px]">
                <p className="font-semibold text-[#FF9F0D]"> About us</p>
                <p className="font-extrabold text-[30px] text-black"> Food is an important part  <br/> Of a balanced Diet</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br/> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br/> vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>      
            </div>
        </div>
           
           
           {/* //Whychose */}
           
          <div>
            <div className='ml-[0px] w-[400px] h-[5px] pt-[100px] '> </div>
            <Image src={Whychose} alt="wcu"></Image>
          </div>
          
          {/* Team Member */}
          
          <div className="bg-[#FF9F0D] h-[300px]  text-white ">
           <div className="flex ml-[0px] mt-[10px] ">
           <div className=" row mt-4 ">
          </div>
          
          <div className="flex pl-[600px]  mt-[30px] ">
            <h4 className="text-[30px]">Team Member</h4> 
            <div className="row">
            </div> 
            </div>
            <div className="absolute ml-[570px] mt-[80px] flex">
             <p className="row text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Varius sed pharetra dictum
                neque massa congue.</p>
            </div>
            
            {/* MarkHenry */}
            <div className='ml-[10px] w-[400px] h-[10px] absolute top-[2350px] '>
                <Image src={MarkHenry} alt="Mark Henry"></Image>
            </div>   
            <div className=" absolute font-[10px] text-black top-[2750px] ml-[120px]">
                <p className="text-[15px]">Mark Henry</p>
            </div>
            <div className=" absolute font-[10px] text-black top-[2770px] ml-[135px]">
                <p className="text-[15px]">Owner</p>
            </div>
             {/*LuckyHelen */}
            <div className='ml-[350px] w-[400px] h-[10px] absolute top-[2350px] '>
                <Image src={LuckyHelen} alt="Lucky Helen"></Image>
            </div> 
            <div className=" absolute font-[10px] text-black top-[2750px] ml-[455px]">
                <p className="text-[15px]">Lucky Helen</p>
            </div>
            <div className=" absolute font-[10px] text-black top-[2770px] ml-[475px]">
                <p className="text-[15px]">Chef</p> 
            </div>
             {/* MoonHenry */} 
           <div className='ml-[680px] w-[400px] h-[10px] absolute top-[2350px] '>
              <Image src={MoonHenry} alt="Moon Henry"></Image>
           </div> 
           <div className=" absolute font-[10px] text-black top-[2750px] ml-[815px]">
                <p className="text-[15px]">Moon Henry</p>
            </div>
            <div className=" absolute font-[10px] text-black top-[2770px] ml-[835px]">
                <p className="text-[15px]">Founder</p> 
            </div> 
             
            {/* TomMonrow */} 
            <div className='ml-[1010px] w-[400px] h-[10px] absolute top-[2350px] '>
              <Image src={TomMonrow} alt="Tom Monrow"></Image>
            </div>
            <div className=" absolute font-[10px] text-black top-[2750px] ml-[1035px]">
                <p className="text-[15px]">Tom Monrow</p>
            </div>
            <div className=" absolute font-[10px] text-black top-[2770px] ml-[1035px]">
                <p className="text-[15px]">Specialist</p> 
            </div> 
            <div className=" text-[#FF9F0D] absolute font-[10px] top-[2870px] ml-[11px]">
                <p className="text-[15px]">Testimonials</p> 
            </div>
            <div className=" text-black -[#FF9F0D] absolute font-[10px] top-[2900px] ml-[15px]">
            <h4 className="font-semibold text-[30px]"> What our client are saying</h4>
            </div> 
            
            <div className='ml-[430px] w-[400px] h-[10px] absolute top-[2950px] '>
              <Image src={Ellipse6} alt="Ellipse 6"></Image>
            </div>
            <div className=" text-black -[#FF9F0D] absolute font-[10px] top-[3100px] ml-[160px]">
             <p className="text-[15px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque<br/>    
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat<br/>  pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac<br/>  dapibus sit eu velit in consequat.</p>
            </div>
            
            <div className=" text-black -[#FF9F0D] absolute font-[10px] top-[3240px] ml-[400px]">
              <h4 className="font-semibold text-[30px]"> Alamin Hasan</h4>
            </div> 
           
            <div className=" text-black -[#FF9F0D] absolute font-[10px] top-[3280px] ml-[440px]">
              <h4 className=" text-[15px]"> Food Specialist</h4>
            </div> 
       
            <div className=" text-black -[#FF9F0D] absolute font-[10px] top-[3300px] ml-[250px]">
            <h4 className="font-semibold text-[50px]"> Our Food Menu</h4>
            </div>  
               
        </div>
                
        
          </div>
          <div className="absolute ml-[400px] mt-[30px] flex">
          </div>

         <div className="absolute top-[3450px] ">
         <Footer/>
         </div>
      
        
      </section>
       )
 }
  
