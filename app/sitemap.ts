import { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getAllPosts();

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.site_domain}/fr`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteConfig.site_domain}/en`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteConfig.site_domain}/fr/pages/%C3%A0-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.site_domain}/en/pages/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.site_domain}/fr/pages/projets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.site_domain}/en/pages/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.site_domain}/fr/pages/actualit%C3%A9s`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.site_domain}/en/pages/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${siteConfig.site_domain}/posts/${post.slug}`,
  //   lastModified: new Date(post.modified),
  //   changeFrequency: "weekly",
  //   priority: 0.5,
  // }));

  return [...staticUrls];
  // return [...staticUrls, ...postUrls];
}
