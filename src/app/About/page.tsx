"use client";
import Link from 'next/link';
import Image from "next/image";
import heroImage2 from "@/images/productsImages/heroImage2.png";
import Aboutus from "@/images/productsImages/aboutus.png";
import Whychose from "@/images/productsImages/wcu.png";
import MarkHenry from "@/images/productsImages/Mark Henry.png";
import LuckyHelen from "@/images/productsImages/Lucky Helen.png";
import MoonHenry from "@/images/productsImages/Moon Henry.png";
import TomMonrow from "@/images/productsImages/Tom Monrow.png";
import Ellipse6 from "@/images/productsImages/Ellipse 6.png";
import Footer from "@/components/footer";

export default function About() {
    return (
        <section className="bg-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[400px]">
                <Image src={heroImage2} alt="Hero Image" layout='fill' objectFit='cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                    <h1 className='text-[40px] sm:text-[60px] md:text-[80px] font-semibold'>About Us</h1>
                    <div className='flex gap-2 text-lg mt-2'>
                        <Link href="/">
                            <span className='cursor-pointer'>Home</span>
                        </Link>
                        <span>/</span>
                        <span className='text-[#FF9F0D]'>About</span>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
                <Image src={Aboutus} alt="About Us" className="w-full md:w-1/2" />
                <div className="md:w-1/2">
                    <p className="text-[#FF9F0D] font-semibold">About us</p>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">Food is an important part of a balanced diet</h2>
                    <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum...</p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto px-4 py-10">
                <Image src={Whychose} alt="Why Choose Us" className="w-full" />
            </div>

            {/* Team Members Section */}
            <div className="bg-[#FF9F0D] text-white py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">Team Members</h2>
                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { image: MarkHenry, name: "Mark Henry", role: "Owner" },
                        { image: LuckyHelen, name: "Lucky Helen", role: "Chef" },
                        { image: MoonHenry, name: "Moon Henry", role: "Founder" },
                        { image: TomMonrow, name: "Tom Monrow", role: "Specialist" }
                    ].map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={member.image} alt={member.name} className="w-32 h-32 rounded-full" />
                            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-[#FF9F0D] text-lg font-semibold">Testimonials</h2>
                <h3 className="text-2xl font-bold text-black">What our clients are saying</h3>
                <div className="flex flex-col items-center mt-6">
                    <Image src={Ellipse6} alt="Client Image" className="w-16 h-16 rounded-full" />
                    <p className="text-gray-500 mt-4 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum...</p>
                    <h4 className="mt-4 text-lg font-semibold">Alamin Hasan</h4>
                    <p className="text-sm">Food Specialist</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
}

