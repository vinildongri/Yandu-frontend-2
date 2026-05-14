// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.yandu.in";

    // 1. Your Core Static Routes
    const staticRoutes = [
        "",
        "/about",
        "/contact",
        "/services",
        "/business-cost",
        "/help-centre",
        "/workflow",
        "/startup-cities",
        "/team",
        "/trust-safety",
        "/howItWorks"
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        // The homepage gets the absolute highest priority (1.0)
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Your Dynamic Service Routes
    const services = [
        "web-app-dev",
        "video-editing",
        "api-backend-dev",
        "logo-design",
        "social-media",
        "database",
        "ui-ux-design",
        "graphic-design",
        "optimization-security"
    ].map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        // Service pages are highly important for client acquisition
        priority: 0.9,
    }));

    // Combine and return all routes to Google
    return [...staticRoutes, ...services];
}