import Link from "next/link";
import { TAGLINE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand footer-logo">
            <img className="logo-mark" src="/logo-mark.png" alt="" width="42" height="42" />
            <img className="logo-word" src="/logo-wordmark.png" alt="RJ Developers" width="140" height="18" />
          </div>
          <p className="footer-tag">{TAGLINE}</p>
          <p className="muted">RJ Developers builds residential, villa and commercial projects across Guwahati.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Visit our office</h4>
          <p>RJ Developers<br />Diganta Baruah C/o, Bhaktobari<br />PWD Road, Garal / Jalukbari<br />Guwahati, Assam 781017</p>
          <p><a href="tel:+919395977575">+91 93959 77575</a><br /><a href="mailto:hello@rjdevelopers.in">hello@rjdevelopers.in</a></p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} RJ Developers. All rights reserved.</span>
        <span>Assam RERA registration details available on request.</span>
      </div>
    </footer>
  );
}
