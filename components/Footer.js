import Link from "next/link";
import { TAGLINE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
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
          <p>RJ Developers<br />GS Road, Guwahati<br />Assam 781005</p>
          <p><a href="tel:+910000000000">+91 00000 00000</a><br /><a href="mailto:hello@rjdevelopers.in">hello@rjdevelopers.in</a></p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} RJ Developers. All rights reserved.</span>
        <span>Assam RERA registration details available on request.</span>
      </div>
    </footer>
  );
}
