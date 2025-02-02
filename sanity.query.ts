import { groq } from "next-sanity";
import { client } from "./sanityClient";

export async function getFoodData() {
    return client.fetch(
        groq`
        *[_type=="food"]{
         name,
         price,
         description,
         category,
         quantity,
         "imageURL":image.asset->url
         
        }
        `
    )
}
export async function getChefData() {
    return client.fetch(
        groq`
        *[_type=="chef"]{
        name,
        position,
        experience,
        specialty,
        description,
        available,
        "imageURL":image.asset->url
        }   
        `
    )
}