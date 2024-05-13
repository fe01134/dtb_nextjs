import config from "src/config/config.json"
import ImageFallback from "../../layouts/helpers/ImageFallback";
import dateFormat from "../../lib/utils/dateFormat";
import { humanize, plainify, slugify } from "../../lib/utils/textConverter";
import { Post } from "../../types/index";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa";

const BlogCard = ({ data }: { data: Post }) => {
  const { summary_length, blog_folder } = config.settings;
  //console.debug("Component BlogCard blogfolder");
  //console.debug(blog_folder);
  const { title, image, trip, locations, date, map } = data.frontmatter;
  return (
    <div className="bg-body dark:bg-darkmode-body">
      {image && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={image}
          alt={title}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={`/${blog_folder}/${data.slug}`}>{title}</Link>
      </h4>
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
            <Link key={index} href={`/locations/${slugify(category)}`}>
              {humanize(category)}
              {index !== locations.length - 1 && ", "}
            </Link>
          ))}
        </li>
        {date && <li className="inline-block">{dateFormat(date)}</li>}
        {map && <li className="inline-block"><Link key={map} href={map}>Map</Link></li>}
      </ul>
      <p className="mb-6">
        {plainify(data.content!.slice(0, Number(summary_length)))}
      </p>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/${blog_folder}/${data.slug}`}
      >
        read more
      </Link>
    </div>
  );
};

export default BlogCard;
