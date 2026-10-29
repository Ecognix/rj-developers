"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    // Connect to your email service, CRM or an API route here.
    setSent(true);
  }
  if (sent) {
    return (
      <div className="sent" role="status">
        <h3>Request received</h3>
        <p>Thank you. A member of our team will call you within one working day to confirm your visit.</p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Full name<input name="name" required autoComplete="name" /></label>
      <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" /></label>
      <label>I am interested in
        <select name="interest" defaultValue="Apartments">
          <option>Apartments</option><option>Villas</option><option>Commercial space</option><option>Something else</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows="4" placeholder="Preferred project, budget or timing" /></label>
      <button className="btn" type="submit">Book a site visit</button>
    </form>
  );
}
