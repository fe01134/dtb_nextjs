import config from "src/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "src/lib/taxonomyParser";
import { humanize } from "src/lib/utils/textConverter";
import PageHeader from "src/layouts/partials/PageHeader";
import SeoMeta from "src/layouts/partials/SeoMeta";
import Link from "next/link";

const Locations = () => {
  const { blog_folder } = config.settings;
 //console.debug("Locations blogfolder");
 //console.debug(blog_folder);

  const locations = getTaxonomy(blog_folder, "locations");
  const allLocations = getAllTaxonomy(blog_folder, "locations");

  return (
    <>
      <SeoMeta title={"Locations"} />
      <PageHeader title={"Locations"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {locations.map((category: string) => {
              const count = allLocations.filter(
                (c: string) => c === category,
              ).length;
              return (
                <li className="m-3 inline-block" key={category}>
                  <Link
                    href={`/locations/${category}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(category)}{" "}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Locations;
