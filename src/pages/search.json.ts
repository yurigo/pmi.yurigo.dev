import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/[<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const GET: APIRoute = async () => {
  const entries = await getCollection("course");
  const sorted = entries.sort((a, b) => a.data.order - b.data.order);

  const index = sorted.map((entry) => ({
    slug: entry.slug,
    title: entry.data.title,
    section: entry.data.section,
    description: entry.data.description ?? "",
    body: stripMarkdown(entry.body ?? ""),
  }));

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
