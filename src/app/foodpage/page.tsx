"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import Image from "next/image";

interface FoodData {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}


export default function Foodlist() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FoodContent />
    </Suspense>
  );
}


function FoodContent() {
  const searchParams = useSearchParams();
  const [foodData, setFoodData] = useState<FoodData | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    try {
      const foodparam = searchParams.get('food');
      if (foodparam) {
        const parsedfood = JSON.parse(foodparam);
        setFoodData(parsedfood);
      }
    } catch (error) {
      console.error('Error loading product data:', error);
    }
  }, [searchParams]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (foodData) {
      const cart = localStorage.getItem("cartpage") || "[]";
      const cartItems: FoodData[] = JSON.parse(cart);

      const existingItemIndex = cartItems.findIndex((item) => item._id === foodData._id);

      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push({ ...foodData, quantity });
      }

      localStorage.setItem("cartpage", JSON.stringify(cartItems));
      router.push("/cartpage");
    }
  };

  // *** KEY CHANGE: Handle the initial null state ***
  if (foodData === null) {
    return null; // Or: return <div>Loading...</div>; if you want a quick initial loading message
  }

  return (
    <>

      <section className=" ">

        <Card className="flex-col md:flex-row gap-8 items-center bg-[#e9d5d6] ">

          <div className="flex flex-col md:flex-row w-full">

            <CardHeader className="w-full md:w-1/2 h-auto">

              {foodData && <Image width={305} height={375} src={foodData.imageURL} alt="image" className="w-full h-auto object-cover"></Image>}

            </CardHeader>

            <div className="flex flex-col md:w-1/2 mt-10">

              <CardTitle className='px-4 md:px-10 py-6 flex flex-col justify-center'>

                <p className="text-xl md:text-2xl font-semibold text-[#a71d20]">{foodData?.name}</p>

                <p className="py-2 text-lg md:text-xl">${foodData?.price}</p>

              </CardTitle>

              <CardDescription className="text-black text-sm md:text-base ml-10">

                <h1 className="font-semibold">Description</h1>

                <p className="my-4 md:my-6 ">{foodData?.description}</p>

                <div className="flex items-center ml-10">

                  <label htmlFor="quantity" className="mr-4 text-lg font-medium">

                    Quantity:

                  </label>

                  <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-500" min={1} />

                </div>

              </CardDescription>

              <CardDescription className="text-black text-sm md:text-base ml-10 gap-[200px] mb-">Features: {foodData?.description}



              </CardDescription>

              <button onClick={handleAddToCart} className="w-full md:w-[146px] h-[56px] bg-[#a71d20]  text-white mt-4 md:mt-11 ml-10">

                Add to cart

              </button>

              <button>

                {/* <Heart className="mt-4 md:mt-0 ml-10" onClick={handlewishlist} /> */}

              </button>



            </div>

          </div>

        </Card>

      </section>

    </>
  );
}

