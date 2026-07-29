import { notFound } from "next/navigation";
import { getPostsPage } from "@/lib/blog";
import BlogPageClient from "./_components/BlogPageClient";

export const revalidate = 60;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage =
    typeof pageParam === "string" ? Number.parseInt(pageParam, 10) : 1;
  const result = await getPostsPage(requestedPage);

  if (result.totalPages > 0 && result.page > result.totalPages) {
    notFound();
  }

  return <BlogPageClient {...result} />;
}
