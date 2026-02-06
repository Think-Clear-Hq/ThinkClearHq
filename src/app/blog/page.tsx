import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { Container } from "@/components/ui/Container";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <Container className="py-20">
            <h1 className="text-4xl font-heading font-bold mb-12 text-white">Latest Thinking</h1>

            <div className="grid gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block glass-panel p-6 rounded-xl transition-all hover:bg-glass-surface/80 hover:scale-[1.01]"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                            <h2 className="text-2xl font-bold text-white group-hover:text-neon-green transition-colors">
                                {post.title}
                            </h2>
                            <time className="text-sm text-gray-500 font-mono shrink-0">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>

                        <p className="text-gray-400 line-clamp-2 mb-4">
                            {post.description}
                        </p>

                        <div className="flex gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}

                {posts.length === 0 && (
                    <p className="text-gray-500 italic">No posts found yet.</p>
                )}
            </div>
        </Container>
    );
}
