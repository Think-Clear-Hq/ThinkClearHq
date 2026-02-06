import { getAllPosts, getPostBySlug } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <Container className="py-20">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-neon-green mb-8 inline-block transition-colors">
                ← Back to all posts
            </Link>

            <article className="prose prose-invert prose-lg max-w-none">
                <header className="mb-12 not-prose">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
                        <time>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span>•</span>
                        <div className="flex gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag}>#{tag}</span>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="glass-panel p-8 md:p-12 rounded-2xl bg-black/40">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </Container>
    );
}
