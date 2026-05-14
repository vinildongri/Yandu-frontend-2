// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/dashboard',
                '/update-profile',
                '/password/',
                '/admin',
                '/password',
                '/profile',
                '/project-management',
                '/signup',
                '/verify-otp'
            ],
        },
        sitemap: 'https://www.yandu.in/sitemap.xml',
    };
}