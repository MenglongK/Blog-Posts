import PostDetail from "@/components/posts/PostDetail";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PostDetail params={params} />;
}
