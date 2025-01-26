"use client";
import { useState, useEffect } from "react";
import Image from "next/image";



import { getChefData } from "../../sanity.query"
export default function Chef(){
    interface ChefData {
        _id: string;
        imageURL: string;
        name:string
        experience:string;
        description:string; 
        available:boolean;  
        position: string;
        specialty:string;
    }
    const [chefData, setChefData] = useState<ChefData[]>([]);

      useEffect(() => {
        async function fetchData() {
          const data = await getChefData();
          setChefData(data);
        }
        fetchData();
        }, []);
        console.log(chefData);
    return(
        <div>
            {Array.isArray(chefData ) &&  chefData.map((chef, index)  => (
                <div key={index}>
                    <p>{chef.imageURL && <Image width={305} height={375} src={chef.imageURL} alt="image" className='xl:h-[300px] lg:h-[200px] md:h-[200px]' ></Image>}</p>
                    <p>{chef.name}</p>
                    <p>{chef.description}</p>
                    <p>{chef.experience}</p>
                    <p>{chef.available}</p>
                    <p>{chef.position}</p>
                    <p>{chef.specialty}</p>                  
                        
                        
                        
                </div>
                    
                    
                ))}
        </div>  
    )
}