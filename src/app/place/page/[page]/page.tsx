import BlogCard from "../../../../layouts/components/BlogCard";
import Pagination from "../../../../layouts/components/Pagination";
import config from "src/config/config.json";
import { getListPage, getSinglePage } from "src/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "src/lib/taxonomyParser";
import { sortByDate } from "src/lib/utils/sortFunctions";
import PageHeader from "src/layouts/partials/PageHeader";
import PostSidebar from "src/layouts/partials/PostSidebar";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Post } from "../../../../types/index";


console.debug("blog page")
const { blog_folder, pagination } = config.settings;
console.debug("Place Page blogfolder");
console.debug(blog_folder);

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const allPost: Post[] = getSinglePage(blog_folder);
  const allSlug: string[] = allPost.map((item) => item.slug!);
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

function spreadPages(num: number): number[] {
  let pages : number[] = [];

  for (let i = 2; i <= num; i++) {
    pages.push(i);
  }

  return pages;
}

// for all regular pages
const Posts = ({ params }: { params: { page: number } }) => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const allLocations = getAllTaxonomy(blog_folder, "locations");
  const locations = getTaxonomy(blog_folder, "locations");
  const tags = getTaxonomy(blog_folder, "tags");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {currentPosts.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}
              </div>
              <Pagination
                section={blog_folder}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>

            <PostSidebar
              locations={locations}
              tags={tags}
              allLocations={allLocations}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
