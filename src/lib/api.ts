import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    content: string;
};

export function getAllPosts(): Post[] {
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                title: data.title || "Untitled",
                date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
                description: data.description || "",
                tags: data.tags || [],
                ...data,
            } as Post;
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        // Try .mdx if .md doesn't exist
        let fileContents = "";
        if (fs.existsSync(fullPath)) {
            fileContents = fs.readFileSync(fullPath, "utf8");
        } else {
            const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
            if (fs.existsSync(mdxPath)) {
                fileContents = fs.readFileSync(mdxPath, "utf8");
            } else {
                return null;
            }
        }

        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            title: data.title,
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            description: data.description,
            tags: data.tags,
            ...data,
        } as Post;
    } catch (err) {
        return null;
    }
}
