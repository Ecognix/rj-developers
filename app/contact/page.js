import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact", description: "Book a site visit or speak to the RJ Developers team in Guwahati." };

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Book a site visit</h1>
          <p className="lead">Tell us what you are looking for. We will call within one working day and arrange a visit at a time that suits you.</p>
        </div>
      </section>

      <section className="wrap map-wrap">
        <iframe
          className="map"
          title="RJ Developers office on GS Road, Guwahati"
          src="https://www.google.com/maps?q=GS+Road,+Guwahati,+Assam&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="muted map-note">GS Road, Guwahati, Assam 781005. <a className="link" href="https://www.google.com/maps/search/?api=1&query=GS+Road+Guwahati+Assam" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
      </section>

      <section className="section-tight">
        <div className="wrap split contact">
          <ContactForm />
          <aside className="prose">
            <h3>Head office</h3>
            <p>RJ Developers<br />GS Road, Guwahati<br />Assam 781005</p>
            <h3>Call or write</h3>
            <p><a href="tel:+910000000000">+91 00000 00000</a><br /><a href="mailto:hello@rjdevelopers.in">hello@rjdevelopers.in</a></p>
            <h3>Office hours</h3>
            <p>Monday to Saturday, 10 am to 6 pm.<br />Site visits on Sundays by appointment.</p>
            <h3>What happens next</h3>
            <p>An advisor calls you within one working day, confirms your preferred project and time, and sends the price sheet and plans before you arrive. There is no obligation to book.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
