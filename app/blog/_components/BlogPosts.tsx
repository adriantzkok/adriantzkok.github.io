import { notFound } from "next/navigation";
import { getPostsPage } from "@/lib/blog";
import BlogPostsClient from "./BlogPostsClient";

type BlogPostsProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export async function BlogPosts({ searchParams }: BlogPostsProps) {
  const { page: pageParam } = await searchParams;
  const requestedPage =
    typeof pageParam === "string" ? Number.parseInt(pageParam, 10) : 1;
  const result = await getPostsPage(requestedPage);

  if (result.totalPages > 0 && result.page > result.totalPages) {
    notFound();
  }

  return <BlogPostsClient {...result} />;
}

export function BlogPostsSkeleton() {
  return (
    <div
      className="grid gap-6 md:grid-cols-2"
      role="status"
      aria-label="Loading blog posts"
    >
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="min-h-64 animate-pulse rounded-2xl border border-border/70 bg-card/70 p-5 sm:rounded-[2rem] sm:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-7 w-20 rounded-full bg-muted" />
          </div>
          <div className="mt-6 h-7 w-3/4 rounded bg-muted" />
          <div className="mt-5 space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-11/12 rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
          </div>
          <span className="sr-only">Loading posts...</span>
        </div>
      ))}
    </div>
  );
}