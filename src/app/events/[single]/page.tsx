import BlogCard from "../../../layouts/components/BlogCard";
import Social from "../../../layouts/components/Social";
import config from "src/config/config.json";
import ImageFallback from "src/layouts/helpers/ImageFallback";
import MDXContent from "src/layouts/helpers/MDXContent";
import { getSinglePage } from "src/lib/contentParser";
import { slugify } from "src/lib/utils/textConverter";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Event, Post } from "../../../types/index";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const events: Event[] = getSinglePage("events");

  const paths = events.map((event) => ({
    single: event.slug,
  }));

  return paths;
};

const EventSingle = ({ params }: { params: { single: string } }) => {
  const events: Event[] = getSinglePage("events");
  const event = events.filter((page) => page.slug === params.single)[0];
  const { frontmatter, content } = event;
  const { title, social, meta_title, description, image } = frontmatter;
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(blog_folder);
  const postFilterByEvent: Post[] = posts.filter(
    (post) => slugify(post.frontmatter.event) === slugify(title),
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center border-b border-border pb-14 dark:border-darkmode-border">
            <div className="text-center lg:col-4">
              {image && (
                <ImageFallback
                  src={image}
                  className="mx-auto mb-10 rounded"
                  height={200}
                  width={200}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6">{title}</h1>
              <div className="content">
                <MDXContent content={content} />
              </div>
              <Social source={social} className="social-icons" />
            </div>
          </div>

          <div className="row justify-center pb-16 pt-14">
            {postFilterByEvent.map((post, index: number) => (
              <div className="mb-12 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSingle;
