import { Post } from "../../types/index";

// similer products
const similerItems = (
  currentItem: Post,
  allItems: Post[],
  slug: string,
): Post[] => {
  let locations: string[] = [];
  let tags: string[] = [];

  // set locations
  if (currentItem.frontmatter.locations.length > 0) {
    locations = currentItem.frontmatter.locations;
  }

  // set tags
  if (currentItem.frontmatter.tags.length > 0) {
    tags = currentItem.frontmatter.tags;
  }

  // filter by locations
  const filterByLocations = allItems.filter((item: any) =>
    locations.find((category) =>
      item.frontmatter.locations.includes(category),
    ),
  );

  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.frontmatter.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByLocations, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
