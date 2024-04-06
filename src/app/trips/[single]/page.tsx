import BlogCard from "../../../layouts/components/BlogCard";
import Social from "../../../layouts/components/Social";
import config from "src/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "src/lib/contentParser";
import { slugify } from "src/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Trip, Post } from "../../../types/index";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const trips: Trip[] = getSinglePage("trips");

  const paths = trips.map((trip) => ({
    single: trip.slug,
  }));

  return paths;
};

const TripSingle = ({ params }: { params: { single: string } }) => {
  const trips: Trip[] = getSinglePage("trips");
  const trip = trips.filter((page) => page.slug === params.single)[0];
  const { frontmatter, content } = trip;
  const { title, social, meta_title, description, image } = frontmatter;
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(blog_folder);
  const postFilterByTrip: Post[] = posts.filter(
    (post) => slugify(post.frontmatter.trip) === slugify(title),
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
            {postFilterByTrip.map((post, index: number) => (
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

export default TripSingle;
