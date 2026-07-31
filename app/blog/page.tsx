import { Suspense } from "react";
import { BlogPosts, BlogPostsSkeleton } from "./_components/BlogPosts";
import BlogPageClient from "./_components/BlogPageClient";

export const dynamic = "force-static";
export const revalidate = 60;

export default function BlogPage() {
  return (
    <BlogPageClient>
      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPosts />
      </Suspense>
    </BlogPageClient>
  );
}
