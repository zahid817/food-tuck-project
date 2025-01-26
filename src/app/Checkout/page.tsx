
import Link from 'next/link'

import Image from 'next/image'
import heroImage2 from "@/images/productsImages/heroImage2.png"


export default function Checkout(){
    return(
        <section>
            <div className="relative w-full h-[200px]">
                <Image  src={heroImage2} alt="image" layout='fill' objectFit='cover'></Image>
                <div className=' absolute inset-0 flex items-center justify-center'>
                    <h1 className=' text-white text-[80px] font-semibold'>Checkout</h1>
                    <div className=' absolute inset-0 flex items-center justify-center mt-28 ' >
                        <Link href={"/"}>
                        <h1 className='text-white'>Menu</h1>
                        </Link>    
                        <span className='text-white' >/</span>
                        <span className='text-[#FF9F0D]'>Blog</span>              
                        
                    </div>
                   
                    
                </div>
            </div>
                   <div>
                  <div className='mt-[80px] ml-[200px]'>
                      <h1>Shipment Address</h1>
                      <div className='  flex-col'>
                     
                    <form >
                        <div className='mt-[20px] '>
                            <label htmlFor="Firstname" >First Name </label>
                            <input id='Firstname' name='Firstname' required className= 'flex flex-row bg-slate-200 '></input>
                        </div> 
                        <div className='ml-[240px] flex-col'>
                            <label htmlFor="Lastname" >Last Name</label>
                            <br/>
                            <input id='LastFirstname' name='Lastname' required className=' bg-slate-200'></input>
                            <br/>
                        </div> 
                        <div className='mt-[20px] '>
                            <label htmlFor="Emailaddress" className="pt-[30px]">Email address</label>
                            <input id='Emailaddress' name='Emailaddress' required className='flex flex-row bg-slate-200'></input>
                            
                            <div className='ml-[240px] flex-col'>
                              <label htmlFor="Phonenumber">Phone Number</label>
                              <br/>
                              <input id='Phonenumber' name='Phonenumber' required className='bg-slate-200'></input>
                            </div>
                        </div>
                        <div className='mt-[10px]'>
                           <label htmlFor="Company" className="pt-[30px]">Company</label>
                           <input id='Company' name='Company' required className='bg-slate-200'></input>
                           <label htmlFor="Country">Country</label>
                           <input id='Country' name='Country' required className='bg-slate-200'></input>
                        </div>
                           <br/>
                        <div className='mt-[10px]'>
                           <label htmlFor="City">City</label>
                           <input id='City' name='City' required className='bg-slate-200'></input>
                           <label htmlFor="Zipcode">Zip Code</label>
                           <input id='Zipcode' name='Zipcode' required className='bg-slate-200'></input>
                        </div>
                           <br/>
                        <div className='mt-[10px]'>
                           <label htmlFor="Address1">Address 1</label>
                           <input id='FAddress1' name='FAddress1' required className='bg-slate-200'></input>
                           <label htmlFor="Address2">Address 2</label>
                           <input id='Address2' name='Address2' required className='bg-slate-200'></input>
                        </div>
                           <br/>
                        <div className='mt-[10px]'> 
                          <label htmlFor="Firstname">First Name</label>
                          <input id='Firstname' name='Firstname' required className='bg-slate-200'></input>
                          <label htmlFor="Firstname">First Name</label>
                          <input id='Firstname' name='Firstname' required className='bg-slate-200'></input>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <div>

            </div>
        </section>
    )
}