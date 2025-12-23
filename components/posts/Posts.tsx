import { Post } from "@/types/post";
import Link from "next/link";

export default async function Posts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`);
  const data: Post[] = await res.json();
  return (
    <div className="my-16 grid grid-cols-3 max-sm:grid-cols-1 gap-8 mx-8">
      {data.map((post) => (
        <div key={post.id || post.userId} className="relative">
          <div className="bg-black/10 p-5 rounded-lg">
            <h1 className="font-bold text-2xl mb-2 line-clamp-1">
              {post.title}
            </h1>
            <p className="my-3 text-justify line-clamp-3">{post.body}</p>
            <Link key={post.id} href={`/posts/${post.id}`}>
              <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
