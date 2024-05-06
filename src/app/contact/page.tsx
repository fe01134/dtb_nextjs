'use client';
// Since this page will not be redirected to another page if there are form errors.
//import { getListPage } from "src/lib/contentParser";
import PageHeader from "src/layouts/partials/PageHeader";
//import SeoMeta from "src/layouts/partials/SeoMeta";
import { RegularPage } from "../../types/index";
import ContactFormSubmit from "../../layouts/components/contact-form-submit";
import { useFormState } from "react-dom";

// Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
import {send} from "../../actions/sendEmail";

//const data: RegularPage = getListPage("contact/_index.md");
//const { frontmatter } = data;
//const { title, description, meta_title, image } = frontmatter;
//console.debug("title", title);
//console.debug("description", description);
//console.debug("meta_title", meta_title);
//console.debug("image", image);

export default function Contact() {
  // Connect to action call send to do server side validation and call the AWS email service. 
  const [ state , formAction ] = useFormState(send,{message:null});
  
  //console.debug("state");
  //console.debug(state);
  //console.debug(state.message);
  const img_name = "/images/site/contactus.jpeg";
    return (
    <>
      <PageHeader title="Contact Us" />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <img src={img_name}></img>
            <form action={formAction}>
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
                    required
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
                    required
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
                    required
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
                    required
                  ></textarea>
                </div>
                <p>{state?.message}</p>
                <ContactFormSubmit />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}