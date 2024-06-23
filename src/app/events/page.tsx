import EventCard from "../../layouts/components/EventCard";
import { getListPage, getSinglePage } from "src/lib/contentParser";
import PageHeader from "src/layouts/partials/PageHeader";
import SeoMeta from "src/layouts/partials/SeoMeta";
import { Event } from "../../types/index";

const Events = () => {
  const eventIndex: Event = getListPage("events/_index.md");
  const events: Event[] = getSinglePage("events");
  const { title, meta_title, description, image } = eventIndex.frontmatter;
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
            {events.map((event: Event, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <EventCard data={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
