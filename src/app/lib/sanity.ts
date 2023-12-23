
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const client= createClient({
    projectId: "1zkhrsb1",
  dataset: "production",
    apiVersion:"2022-12-19",
    useCdn:true,
})
const builder = imageUrlBuilder(client) 
export function urlFor(source:any){
    return builder.image(source);
}