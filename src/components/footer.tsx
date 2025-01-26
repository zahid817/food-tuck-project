
"use client";
import Image from "next/image"
import Link from "next/link"
import img1  from "@/images/productsImages/img1.png"
import Watch1  from "@/images/productsImages/Watch1.png"
// import { FacebookFilled } from "@ant-design/icons";
// import { Facebook } from "lucide-react"







export default function Footer() {
    return(
      <section className="bg-black w-[1370] h-[580px]  text-white ">
        <div className="flex ml-[300px] mt-[30px] ">
          <div className=" row mt-4 ">
            <h4 className="text-[24px]"><span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</h4>
            <p className="row text-[10px] pt-5 ">Dont wait make a smart & logical quote here. Its pretty easy.</p>
            <p className="border-b-[1px] border-yellow-300 p-2 w-[800px]"></p>
          </div>
          <div className="absolute ml-[400px] mt-[30px] flex">
            <label  >
              <input type="text" placeholder="Enter Your Email" className="bg-yellow-300 text-white h-[40px] w-[250px] " />
              <button className="bg-white text-[#FF9F0D] w-[200px] h-[40px] "><p>Subcribe Now</p></button>
            </label>
          </div>  
        </div>
        {/* About us */}
        <div className="flex ml-[200px] mt-[30px] ">
          <div className="row">
            <h4 className="font-bold">About Us </h4>
            <p className="pt-8">Corporate clients and leisure travelers hasbeen <br/> relying on Groundlink for dependablesafe, and <br/> professional chauffeured carservice in major <br/> cities across World.</p>
            <div className="flex pt-8">
              <Image src={Watch1} alt="image"></Image>
              <div className="flex flex-col pl-10">
                <p>Opening Houres</p>
                <p>Mon - Sat(8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
              
            </div>
          </div>
           {/* Useful Links */}
          <div className="flex ml-[100px]  ">
          <div className= "row ">
            <h4 className="font-bold ">Useful Links</h4>
            <Link href={"About"}>
            <p className="pt-8 ">About</p>
            </Link>
            <Link href={"news"}>
            <p className="pt-2">News</p>
            </Link>
            <Link href={"patners"}>
            <p className="pt-2">Patners</p>
            </Link>
            <Link href={"chef-page"}>
            <p className="pt-2"> Chef</p>
            </Link>
            <Link href={"Menu-page"}>
            <p className="pt-2"> Menu</p>
            </Link>
            <Link href={"Contact"}>
            <p className="pt-2">Contact</p>
            </Link>
          </div>
        </div>
         {/* Help? */}
        <div className="flex ml-[100px]  ">
          <div className= "row ">
            <h4 className="font-bold ">Help?</h4>
            <Link href={"Faq"}>
            <p className="pt-8 ">FAQ</p>
            </Link>
            <Link href={"term & condition"}>
            <p className="pt-2 ">Term & Condition</p>
            </Link>
            <Link href={"reporting"}>
            <p className="pt-2">Reporting</p>
            </Link>
            <Link href={"patners"}>
            <p className="pt-2">Patners</p>
            </Link>
            <Link href={"documentation"}>
            <p className="pt-2">Documentation</p>
            </Link>
            <Link href={"support policy"}>
            <p className="pt-2"> Support Policy</p>
            </Link>
            <Link href={"privacy"}>
            <p className="pt-2">Privacy</p>
            </Link>
          </div>
        </div>
         {/* Recent Post*/}
        <div className="flex ml-[100px]  ">
          <div className= "row ">
            <h4 className="font-bold ">Recent Post</h4>
            <div className="flex pt-8 text-[15px]">
              <Image src={img1} alt="image"></Image>
              <p className="pl-5">Is fastfood good for <br/> your body? <br/><span className="text-[12px]">February 28,2022</span></p>
            </div>
            <div className="flex pt-8">
              <Image src={img1} alt="image"></Image>
              <p className="pl-5 text-[15px]">Change your food habit <br/> With organic food <br/><span className="text-[12px]" >February 28,2022</span></p>
            </div>
            <div className="flex pt-8">
              <Image src={img1} alt="image"></Image>
              <p className="pl-5 text-[15px]">Do you like fastfood for <br/> your life? <br/><span className="text-[12px]">February 28,2022</span></p>
            </div>
          </div>
        </div>
        </div>
        <div className=" w-[1370px] h-[70px] bg-slate-600 mt-[30px]">
          <p className="pt-[30px]">Copyright © 2022 by Zahid Ullah Rights Reserved.</p>
          <div>
            
          </div>
        </div>
        
       
        
  
      </section>
    )
  }