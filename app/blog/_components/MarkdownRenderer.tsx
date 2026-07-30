"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        "markdown-content prose prose-neutral max-w-none dark:prose-invert",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          a: ({ ...props }) => (
            <Link
              href={String(props.href ?? "#")}
              className="break-words text-primary underline underline-offset-4 [overflow-wrap:anywhere]"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="break-words rounded bg-muted px-1.5 py-0.5 text-sm [overflow-wrap:anywhere]"
                {...props}
              >
                {children}
              </code>
            ) : (
              <pre className="overflow-x-auto rounded-lg border border-border bg-muted/60 p-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          p: ({ children }) => (
            <p className="my-4 leading-8 text-foreground/90">{children}</p>
          ),
          h1: ({ children }) => (
            <h1 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-primary/40 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>
          ),
          table: ({ children }) => (
            <div className="markdown-table my-6 overflow-x-auto rounded-md border border-border">
              <table className="m-0 min-w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-r border-border bg-muted/70 px-4 py-3 text-left font-semibold last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-r border-border px-4 py-3 align-top last:border-r-0">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
