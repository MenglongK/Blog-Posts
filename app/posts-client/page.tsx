import PostClient from "@/components/posts-client/PostsClient";
import { fetchPost } from "@/lib/data/fetchPost";

export default function Page() {
  return (
    <>
      <PostClient postsCient={fetchPost()} />
    </>
  );
}
