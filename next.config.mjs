/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async redirects() {
    // The blog and standalone /contact route were live and crawlable on the
    // previous production site. They were removed (half-built, unlinked),
    // so send any lingering inbound links/bookmarks to "/", which the
    // middleware then resolves to the visitor's locale.
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      // These already carry a locale: keep it instead of sending the visitor
      // back through negotiation, which could drop them on the other language.
      { source: "/:lang(en|es)/blog", destination: "/:lang", permanent: true },
      { source: "/:lang(en|es)/blog/:slug*", destination: "/:lang", permanent: true },
      { source: "/:lang(en|es)/contact", destination: "/:lang", permanent: true },
    ];
  },
};

export default nextConfig;
