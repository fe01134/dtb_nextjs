
import { getListPage } from "@/src/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "../../types/index";

// Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
import send from "../../actions/sendEmail";


  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  // Server Component
  export default function Contact() {
    async function sendEmail( formData: FormData) {
      'use server'
    
    const rawFormData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      toEmail: formData.get('toEmail'),
      fromEmail: 'help@pursuitassistant.com',
      message: formData.get('message'),
    };
    console.debug("ToEmail", rawFormData.toEmail);
    console.debug("firstName",rawFormData.firstName);
    console.debug("fromEmail", rawFormData.fromEmail);
    console.debug("message", rawFormData.message); 
    console.debug("messlastNameage", rawFormData.lastName);   
    
    console.debug("before sending to email service");
    console.debug(rawFormData);
    send(rawFormData);
}
  
  
    return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
            <form action={sendEmail}>
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
                    id="toEmail"
                    name="toEmail"
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}