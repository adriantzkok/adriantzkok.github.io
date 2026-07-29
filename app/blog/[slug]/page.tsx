import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { PageContainer } from "@/components/PageContainer";

function extractByline(content: string) {
  const byline = content.match(/^\s*By\s+([^\r\n]+)\s*(?:\r?\n)+/i);

  if (!byline) {
    return { author: "Adrian Kok", content };
  }

  return {
    author: byline[1].trim(),
    content: content.slice(byline[0].length),
  };
}

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Adrian K`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);

  if (!post) {
    notFound();
  }

  const { author, content } = extractByline(post.content);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageContainer className="py-12 sm:py-16">
        <Link
          href="/blog"
          className="inline-flex text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          ← Back to blog
        </Link>

        <div className="mt-10 grid gap-14 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 xl:gap-24">
          <article className="min-w-0">
            <header className="border-b border-border pb-10 sm:pb-12">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <p className="font-medium text-foreground">
                  <span className="text-muted-foreground">Written by </span>
                  {author}
                </p>
                <time dateTime={post.date} className="text-muted-foreground">
                  {formattedDate}
                </time>
              </div>
            </header>

            <MarkdownRenderer content={content} className="mt-10 sm:mt-14" />
          </article>

          <aside
            aria-label="Blog post navigation"
            className="self-start border-t border-border pt-8 lg:sticky lg:top-28 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              More posts
            </p>
            <nav className="mt-5">
              <ul className="space-y-1">
                {posts.map((listedPost) => {
                  const isCurrent = listedPost.slug === post.slug;

                  return (
                    <li key={listedPost.slug}>
                      {isCurrent ? (
                        <div
                          aria-current="page"
                          className="border-l-2 border-foreground py-2 pl-3"
                        >
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Current
                          </span>
                          <p className="mt-1 text-sm font-medium leading-5 text-foreground">
                            {listedPost.title}
                          </p>
                        </div>
                      ) : (
                        <Link
                          href={`/blog/${listedPost.slug}`}
                          className="group block border-l border-border py-2 pl-3 transition-colors hover:border-foreground"
                        >
                          <time
                            dateTime={listedPost.date}
                            className="text-xs text-muted-foreground"
                          >
                            {new Date(listedPost.date).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" },
                            )}
                          </time>
                          <p className="mt-1 text-sm leading-5 text-foreground/75 transition-colors group-hover:text-foreground">
                            {listedPost.title}
                          </p>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link
              href="/blog"
              className="mt-6 inline-flex text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              All posts →
            </Link>
          </aside>
        </div>
      </PageContainer>
    </main>
  );
}
