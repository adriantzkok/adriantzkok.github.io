import HomePageClient from "@/components/home/HomePageClient";
import { getRecentPosts } from "@/lib/blog";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getRecentPosts(6);

  return <HomePageClient posts={posts} />;
}
