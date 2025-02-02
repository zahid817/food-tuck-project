
"use client";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/images/productsImages/img1.png";
import Watch1 from "@/images/productsImages/Watch1.png";


export default function Footer() {
  return (
    <section className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Support Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div>
            <h4 className="text-2xl font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
            </h4>
            <p className="text-sm pt-2">Don't wait, make a smart & logical quote here. It's pretty easy.</p>
            <div className="border-b border-yellow-300 my-4 w-full md:w-[600px]"></div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-yellow-300 text-black px-4 py-2 w-full md:w-[250px] rounded-l-md"
              />
              <button className="bg-white text-[#FF9F0D] px-4 py-2 rounded-r-md">Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* About Us */}
          <div>
            <h4 className="font-bold">About Us</h4>
            <p className="text-sm pt-4">Corporate clients and leisure travelers rely on us for safe, dependable, and professional service worldwide.</p>
            <div className="flex items-center pt-4">
              <Image src={Watch1} alt="Opening Hours" width={40} height={40} />
              <div className="pl-4">
                <p>Opening Hours</p>
                <p>Mon - Sat (8:00 - 6:00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold">Useful Links</h4>
            <div className="pt-4 flex flex-col space-y-2 text-sm">
              <Link href="/about">About</Link>
              <Link href="/news">News</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/chef-page">Chef</Link>
              <Link href="/menu-page">Menu</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Help? */}
          <div>
            <h4 className="font-bold">Help?</h4>
            <div className="pt-4 flex flex-col space-y-2 text-sm">
              <Link href="/faq">FAQ</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/reporting">Reporting</Link>
              <Link href="/support-policy">Support Policy</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>

          {/* Recent Post */}
          <div>
            <h4 className="font-bold">Recent Posts</h4>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <Image src={img1} alt="Post" width={50} height={50} />
                <p className="text-sm">Is fast food good for your body? <br /><span className="text-xs">Feb 28, 2022</span></p>
              </div>
              <div className="flex items-center space-x-4">
                <Image src={img1} alt="Post" width={50} height={50} />
                <p className="text-sm">Change your food habits with organic food <br /><span className="text-xs">Feb 28, 2022</span></p>
              </div>
              <div className="flex items-center space-x-4">
                <Image src={img1} alt="Post" width={50} height={50} />
                <p className="text-sm">Do you like fast food? <br /><span className="text-xs">Feb 28, 2022</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 border-t border-gray-600 pt-4 text-sm">
          <p>Copyright © 2022 by Zahid Ullah. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
