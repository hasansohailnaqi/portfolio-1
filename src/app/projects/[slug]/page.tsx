
import { client } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from "next/image"
async function getData(slug: string) {
    const query = `*[_type == "project" && slug.current =="${slug}"][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`;
    
    const data = await client.fetch(query);
    return data;
  }
  export const dynamic = "force-dynamic";
  export default async function ProjectPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const project = await getData(params.slug)
    
  return (
     <div>
    <header className="flex items-center justify-between mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
        
        View Project
      </a>
    </header>

    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={project.content} />
    </div>

    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>)
} 