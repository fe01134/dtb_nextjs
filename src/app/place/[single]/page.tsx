import BlogCard from "../../../layouts/components/BlogCard";
import Disqus from "../../../layouts/components/Disqus";
import Share from "../../../layouts/components/Share";
import config from "src/config/config.json";
import ImageFallback from "src/layouts/helpers/ImageFallback";
import MDXContent from "src/layouts/helpers/MDXContent";
import { getSinglePage } from "../../../lib/contentParser";
import dateFormat from "../../../lib/utils/dateFormat";
import similerItems from "../../../lib/utils/similarItems";
import { humanize, markdownify, slugify } from "../../../lib/utils/textConverter";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Post } from "../../../types/index";
import Link from "next/link";
import { FaRegClock, FaRegMap, FaRegFolder, FaRegUserCircle } from "react-icons/fa";


const { blog_folder } = config.settings;
//console.debug("Place Single Place blogfolder");
//console.debug(blog_folder);

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  //console.debug(paths);

  //paths.forEach((path: any) => {
  //  console.log(` Iterate Area: ${path}`)});

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(blog_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const {
    title,
    meta_title,
    description,
    image,
    trip,
    locations,
    date,
    map,
    tags,
  } = frontmatter;
  const similarPosts = similerItems(post, posts, post.slug!);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              {image && (
                <div className="mb-10">
                  <ImageFallback
                    src={image}
                    height={500}
                    width={1200}
                    alt={title}
                    className="w-full rounded"
                  />
                </div>
              )}
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                className="h2 mb-4"
              />
              <ul className="mb-4">
                <li className="mr-4 inline-block">
                  <Link href={`/trips/${slugify(trip)}`}>
                    <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
                    {humanize(trip)}
                  </Link>
                </li>
                <li className="mr-4 inline-block">
                  <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
                  {locations?.map((category: string, index: number) => (
                    <Link
                      key={category}
                      href={`/locations/${slugify(category)}`}
                    >
                      {humanize(category)}
                      {index !== locations.length - 1 && ", "}
                    </Link>
                  ))}
                </li>
                {date && (
                  <li className="mr-4 inline-block">
                    <FaRegClock className="-mt-1 mr-2 inline-block" />
                    {dateFormat(date)}
                  </li>
                )}
                {map && (
                  <li className="mr-4 inline-block">
                    <Link href={map}className="-mt-1 mr-2 inline-block"><FaRegMap className="-mt-1 mr-2 inline-block" />Map</Link>

                  </li>
                )}
              </ul>
              <div className="content mb-10">
                <MDXContent content={content} />
              </div>
              <div className="row items-start justify-between">
                <div className="mb-10 flex items-center lg:col-5 lg:mb-0">
                  <h5 className="mr-3">Tags :</h5>
                  <ul>
                    {tags?.map((tag: string) => (
                      <li key={tag} className="inline-block">
                        <Link
                          className="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"
                          href={`/tags/${slugify(tag)}`}
                        >
                          {humanize(tag)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center lg:col-4">
                  <h5 className="mr-3">Share :</h5>
                  <Share
                    className="social-icons"
                    title={title}
                    description={description}
                    slug={post.slug!}
                  />
                </div>
              </div>
              <Disqus className="mt-20" />
            </article>
          </div>

          {/* <!-- Related posts --> */}
          <div className="section pb-0">
            <h2 className="h3 mb-12 text-center">Related Things to Do</h2>
            <div className="row justify-center">
              {similarPosts.map((post) => (
                <div key={post.slug} className="lg:col-4 mb-7">
                  <BlogCard data={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
