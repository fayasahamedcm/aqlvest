"use client";
import { useState } from "react";
import { articles } from "@/lib/content";
import { ArticleCard } from "./ui";
const filters = [
  "All guides",
  "Islamic investing",
  "Shariah methodologies",
  "Financial foundations",
  "Trading principles",
] as const;
export function LearningLibrary() {
  const [filter, setFilter] = useState<string>("All guides");
  const [query, setQuery] = useState("");
  const filtered = articles.filter(
    (a) =>
      (filter === "All guides" || a.category === filter) &&
      `${a.title} ${a.description} ${a.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="library-controls">
        <div className="filter-tabs" aria-label="Filter guides by topic">
          {filters.map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="library-search">
          <label htmlFor="guide-search" className="sr-only">
            Search learning guides
          </label>
          <input
            id="guide-search"
            type="search"
            placeholder="Search the library…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <p className="result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"} to
        explore
      </p>
      <div className="article-grid">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} index={articles.indexOf(a)} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No guides found yet.</h2>
          <p>Try a different topic or a shorter search.</p>
          <button
            className="button button-secondary"
            onClick={() => {
              setFilter("All guides");
              setQuery("");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
