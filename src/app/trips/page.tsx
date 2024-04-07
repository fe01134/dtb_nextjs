import TripCard from "../../layouts/components/TripCard";
import { getListPage, getSinglePage } from "src/lib/contentParser";
import PageHeader from "src/layouts/partials/PageHeader";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Trip } from "../../types/index";

const Trips = () => {
  const tripIndex: Trip = getListPage("trips/_index.md");
  const trips: Trip[] = getSinglePage("trips");
  const { title, meta_title, description, image } = tripIndex.frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {trips.map((trip: Trip, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <TripCard data={trip} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trips;
