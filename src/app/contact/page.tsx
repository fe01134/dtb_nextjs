
import { getListPage } from "src/lib/contentParser";
import PageHeader from "src/layouts/partials/PageHeader";
//import SeoMeta from "src/layouts/partials/SeoMeta";
import { RegularPage } from "../../types/index";
import ContactFormSubmit from "../../layouts/components/contact-form-submit";

// Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
import {send} from "../../actions/sendEmail";

const data: RegularPage = getListPage("contact/_index.md");
const { frontmatter } = data;
const { title, description, meta_title, image } = frontmatter;
console.debug("title", title);
console.debug("description", description);
console.debug("meta_title", meta_title);
console.debug("image", image);

export default function Contact() {
    
  
    return (
    <>
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <img src={image}></img>
            <form action={send}>
              <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder="John"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="toEmail" className="form-label">
                    Working Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fromEmail"
                    name="fromEmail"
                    className="form-input"
                    placeholder="carlosyells@yahoo.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    Anything else? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Message goes here..."
                    rows={8}
                  ></textarea>
                </div>
                <ContactFormSubmit />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}