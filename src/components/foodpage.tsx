"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";



import { getFoodData } from "../../sanity.query"
export default function Food() {
    interface FoodData {
        _id: string;
        imageURL: string;
        name: string
        price: number;
        description: string;
    }
    const [foodData, setFoodData] = useState<FoodData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getFoodData();
            setFoodData(data);
        }
        fetchData();
    }, []);
    console.log(foodData);
    return (
        <section>
            <div>
                {Array.isArray(foodData) && foodData.map((food) => (
                    <Link key={food._id} href={{
                        pathname:'/foodpage',
                        query: { food: JSON.stringify(foodData) }
                        }}>
                        
                        <p>{food.imageURL && <Image width={305} height={375} src={food.imageURL} alt="image" className='xl:h-[300px] lg:h-[200px] md:h-[200px]' ></Image>}</p>
                        <p>{food.name}</p>
                        <p>{food.description}</p>
                        <p>${food.price}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}