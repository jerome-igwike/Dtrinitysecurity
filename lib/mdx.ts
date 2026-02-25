import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type ContentMetadata = {
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt?: string;
    readTime?: string;
    author?: string;
    location?: string;
};

export type ContentPost = {
    meta: ContentMetadata;
    content: string;
};

// Get all slugs for a specific directory (e.g., 'articles' or 'news')
export function getPostSlugs(type: 'articles' | 'news') {
    const dirPath = path.join(contentDirectory, type);
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath).filter((file) => file.endsWith('.mdx'));
}

// Get a single post by slug
export function getPostBySlug(slug: string, type: 'articles' | 'news'): ContentPost | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            meta: {
                slug: realSlug,
                title: data.title || '',
                category: data.category || '',
                date: data.date || '',
                image: data.image || '',
                excerpt: data.excerpt || '',
                readTime: data.readTime || '',
                author: data.author || '',
                location: data.location || '',
            },
            content,
        };
    } catch (error) {
        console.error(`Error reading ${type} post with slug ${slug}:`, error);
        return null;
    }
}

// Get all posts sorted by date
export function getAllPosts(type: 'articles' | 'news'): ContentMetadata[] {
    const slugs = getPostSlugs(type);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, type))
        .filter((post): post is ContentPost => post !== null)
        .map((post) => post.meta)
        .sort((post1, post2) => {
            // Basic string comparison assuming format "DD MMM YYYY"
            // Note: A more robust Date parser could be implemented here
            return new Date(post2.date).getTime() - new Date(post1.date).getTime();
        });

    return posts;
}
