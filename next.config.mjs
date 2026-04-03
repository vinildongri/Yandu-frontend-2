/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/contact-info',
        permanent: true, 
      },
    ]
  },
};

export default nextConfig;