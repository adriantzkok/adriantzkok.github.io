import { getAllPosts } from "@/lib/blog";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogPageClient posts={posts} />;
}
