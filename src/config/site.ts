export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Algarve Visit",
  description:
    "Learn about and plan your visit to Algarve.",
  mainNav: [
    {
      title: "Places",
      href: "/places",
    },
    {
      title: "Thing To Do",
      href: "/things_to_do",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "My Plans",
      href: "/my_plans",
    },
    {
      title: "About us",
      href: "/about",
    },

  ],
  links: {
    instagram: "https://www.instagram.com/villa.vale.milho",
    facebook: "https://www.facebook.com/villavalemilho",
    docs: "https://ui.shadcn.com",
  },
}
