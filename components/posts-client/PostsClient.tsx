import Link from "next/link";
import { Button } from "../ui/button";
import { use } from "react";
import { Post } from "@/types/post";

export default function PostsClient({
  postsCient,
}: {
  postsCient: Promise<Post[]>;
}) {
  const data: Post[] = use(postsCient);

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
              <Button className="hover:cursor-pointer hover:scale-105 duration-400 bg-blue-700">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
