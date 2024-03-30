import { getSinglePage } from "src/lib/contentParser";
import { slugify } from "src/lib/utils/textConverter";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder: string, name: string): string[] => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies: string[] = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i] as string[]; // Assertion to specify the type
    if (taxonomyArray) {
      for (let j = 0; j < taxonomyArray.length; j++) {
        taxonomies.push(slugify(taxonomyArray[j]));
      }
    }
  }
  const taxonomy = [...new Set(taxonomies)];

  return taxonomy;
};

export const getAllTaxonomy = (folder: string, name: string): string[] => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies: string[] = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i] as string[]; // Assertion to specify the type
    if (taxonomyArray) {
      for (let j = 0; j < taxonomyArray.length; j++) {
        taxonomies.push(slugify(taxonomyArray[j]));
      }
    }
  }

  return taxonomies;
};
