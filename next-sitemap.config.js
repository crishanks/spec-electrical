/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://apexelectric.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/studio", "/studio/*", "/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/studio", "/api"] },
    ],
  },
};
