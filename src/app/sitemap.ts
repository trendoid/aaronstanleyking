import { MetadataRoute } from 'next'
import { getAllPosts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {

    const posts = getAllPosts();
    const date = new Date();
    const y = date.getFullYear();
    const m = ("0" + (date.getMonth() + 1)).slice(-2);
    const d = ("0" + date.getDate()).slice(-2);
    const datestring = `${y}-${m}-${d}`; 

    posts.push({
        title: 'Home',
        slug: '',
        date: datestring,
        content: '',
        excerpt: '',
        coverImage: '',
        ogImage: { url: '' },
        author: {
            name: '',
            picture: '',
        },
    });

    return posts.map((post) => ({
        url: 'https://www.aaronstanleyking.com/' + post.slug,
        lastModified: post.date,
    }));

}