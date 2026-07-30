import { Suspense } from "react";
import { BlogPosts, BlogPostsSkeleton } from "./_components/BlogPosts";
import BlogPageClient from "./_components/BlogPageClient";

export const revalidate = 60;

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  return (
    <BlogPageClient>
      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPosts searchParams={searchParams} />
      </Suspense>
    </BlogPageClient>
  );
}
