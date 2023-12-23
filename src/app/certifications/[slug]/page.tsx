import { client } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from "next/image"
async function getData(slug: string) {
    const query = `*[_type == "certificate" && slug.current =="${slug}"][0]{
      _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    issue,
    content
    }`;
    
    const data = await client.fetch(query);
    return data;
  }
  export const dynamic = "force-dynamic";
  export default async function CertiPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const project = await getData(params.slug)
    
  return (
     <div>
      <div className="text-lg text-gray-700 mt-5 gap-4 px-4 py-4 bg-gray-100">
      <PortableText value={project.content} />
    </div>

    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>)
} 