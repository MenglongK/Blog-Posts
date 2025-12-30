import { Post } from "@/types/post";

export async function fetchPost() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`);
    const data: Post[] = await res.json();
    return data;
}

export async function postParam(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`);
  const data = await res.json();
  return data;
}