import { postParam } from "@/lib/data/fetchPost";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await postParam(slug);
  return (
    <>
      <div className="relative my-16 mx-8">
        <div className="bg-black/10 p-5 rounded-lg">
          <h1 className="font-bold text-2xl mb-2 line-clamp-1">{post.title}</h1>
          <p className="my-3 text-justify line-clamp-3">{post.body}</p>
          <Link href="/dashboard/posts">
            <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
