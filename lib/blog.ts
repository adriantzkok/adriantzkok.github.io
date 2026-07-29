import { neon } from "@neondatabase/serverless";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
  content: string;
};

function getSql() {
  const connectionString =
    process.env.DATABASE_URL ?? process.env.NEXT_PUBLIC_DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  return neon(connectionString);
}

function toPost(row: Record<string, unknown>): BlogPost {
  return {
    slug: String(row.slug ?? ""),
    title: String(row.title ?? "Untitled"),
    excerpt: String(row.excerpt ?? ""),
    date: row.published_at
      ? new Date(row.published_at as string | Date).toISOString()
      : new Date().toISOString(),
    tags: Array.isArray(row.tags) ? row.tags.map(String) : [],
    published: Boolean(row.published),
    content: String(row.content ?? ""),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const sql = getSql();

  if (!sql) {
    return [];
  }

  const rows = await sql`
    SELECT slug, title, excerpt, content, published, published_at, tags
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC, created_at DESC
  `;

  return rows.map(toPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const sql = getSql();

  if (!sql) {
    return null;
  }

  const rows = await sql`
    SELECT slug, title, excerpt, content, published, published_at, tags
    FROM blog_posts
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `;

  if (!rows.length) {
    return null;
  }

  return toPost(rows[0]);
}
