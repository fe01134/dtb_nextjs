import BlogCard from "../../layouts/components/BlogCard";
import Pagination from "../../layouts/components/Pagination";
import config from "src/config/config.json";
import { getListPage, getSinglePage } from "src/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "src/lib/taxonomyParser";
import { sortByDate } from "src/lib/utils/sortFunctions";
import PageHeader from "src/layouts/partials/PageHeader";
import PostSidebar from "src/layouts/partials/PostSidebar";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Post } from "../../types/index";
const { blog_folder, pagination } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const allLocations = getAllTaxonomy(blog_folder, "locations");
  const locations = getTaxonomy(blog_folder, "locations");
  const tags = getTaxonomy(blog_folder, "tags");
 //console.debug("tags");
 //console.debug(tags);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = sortedPosts.slice(0, pagination);

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
                currentPage={1}
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
