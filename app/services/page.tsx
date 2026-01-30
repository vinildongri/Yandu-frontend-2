import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Web Development", image: "/servicesPics/webDev.jpg", href: "/services/web-dev" },
  { title: "App Development", image: "/servicesPics/appDev.jpg", href: "/services/app-dev" },
  { title: "API & Backend Systems", image: "/servicesPics/api.jpg", href: "/services/api-backend-dev" },
  { title: "Video Editing", image: "/servicesPics/videoEditing.jpg", href: "/services/video-editing" },
  { title: "Logo Design", image: "/servicesPics/logo.jpg", href: "/services/logo-design" },
  { title: "Optimization & Security", image: "/servicesPics/security.jpg", href: "/services/security" },
  { title: "Social Media Strategy", image: "/servicesPics/socialMedia.jpg", href: "/services/social-media" },
  { title: "Graphic Design", image: "/servicesPics/graphic.jpg", href: "/services/graphic-design" },
  { title: "Database Management", image: "/servicesPics/dataBase.jpg", href: "/services/database" },
];

export default function ServicesPage() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-purple-800">
        All Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link
            key={index}
            className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            href={cat.href}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-4 left-4 border border-white/70 px-5 py-2 rounded-xl bg-white/25 backdrop-blur-md">
              <h3 className="text-white text-xl font-semibold">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
