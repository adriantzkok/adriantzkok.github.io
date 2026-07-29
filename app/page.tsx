import HomePageClient from "@/components/HomePageClient";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getAllPosts();

  return <HomePageClient posts={posts.slice(0, 6)} />;
}
