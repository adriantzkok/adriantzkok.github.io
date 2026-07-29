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

export type BlogPostSummary = Omit<BlogPost, "content">;

export type PaginatedPosts = {
  posts: BlogPostSummary[];
  page: number;
  pageSize: number;
  totalPosts: number;
  totalPages: number;
};

const DEFAULT_PAGE_SIZE = 8;
const MAX_PAGE_SIZE = 24;

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

function toPostSummary(row: Record<string, unknown>): BlogPostSummary {
  const { content: _content, ...post } = toPost(row);

  return post;
}

function normalizePositiveInteger(value: number, fallback: number) {
  return Number.isSafeInteger(value) && value > 0 ? value : fallback;
}

export async function getPostsPage(
  requestedPage = 1,
  requestedPageSize = DEFAULT_PAGE_SIZE,
): Promise<PaginatedPosts> {
  const sql = getSql();
  const page = normalizePositiveInteger(requestedPage, 1);
  const pageSize = Math.min(
    normalizePositiveInteger(requestedPageSize, DEFAULT_PAGE_SIZE),
    MAX_PAGE_SIZE,
  );

  if (!sql) {
    return { posts: [], page, pageSize, totalPosts: 0, totalPages: 0 };
  }

  const countRows = await sql`
    SELECT COUNT(*) AS total_count
    FROM blog_posts
    WHERE published = true
  `;
  const totalPosts = Number(countRows[0]?.total_count ?? 0);
  const offset = (page - 1) * pageSize;
  const rows = await sql`
    SELECT slug, title, excerpt, published, published_at, tags
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC, created_at DESC
    LIMIT ${pageSize}
    OFFSET ${offset}
  `;

  return {
    posts: rows.map(toPostSummary),
    page,
    pageSize,
    totalPosts,
    totalPages: Math.ceil(totalPosts / pageSize),
  };
}

export async function getRecentPosts(limit = 6): Promise<BlogPostSummary[]> {
  const sql = getSql();
  const normalizedLimit = Math.min(
    normalizePositiveInteger(limit, 6),
    MAX_PAGE_SIZE,
  );

  if (!sql) {
    return [];
  }

  const rows = await sql`
    SELECT slug, title, excerpt, published, published_at, tags
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC, created_at DESC
    LIMIT ${normalizedLimit}
  `;

  return rows.map(toPostSummary);
}

export async function getMorePosts(
  currentSlug: string,
  limit = 6,
): Promise<BlogPostSummary[]> {
  const sql = getSql();
  const normalizedLimit = Math.min(
    normalizePositiveInteger(limit, 6),
    MAX_PAGE_SIZE,
  );

  if (!sql) {
    return [];
  }

  const rows = await sql`
    SELECT slug, title, excerpt, published, published_at, tags
    FROM blog_posts
    WHERE published = true AND slug <> ${currentSlug}
    ORDER BY published_at DESC, created_at DESC
    LIMIT ${normalizedLimit}
  `;

  return rows.map(toPostSummary);
}

export async function getPublishedPostSlugs(): Promise<string[]> {
  const sql = getSql();

  if (!sql) {
    return [];
  }

  const rows = await sql`
    SELECT slug
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC, created_at DESC
  `;

  return rows.map((row) => String(row.slug));
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
