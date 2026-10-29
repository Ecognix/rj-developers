"use client";
import { useState } from "react";
import Link from "next/link";
import Plate from "../../components/Plate";
import Icon from "../../components/Icon";
import { projects, specs } from "../../lib/data";

const filters = ["All", "Residential", "Villas", "Commercial"];

export default function Projects() {
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.type === f);
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Projects across Guwahati</h1>
          <p className="lead">Apartments by the river, villas on the hills and workplaces on the city's main corridors. Every project lists its status openly.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((x) => (
              <button key={x} aria-pressed={f === x} className={f === x ? "on" : ""} onClick={() => setF(x)}>{x}</button>
            ))}
          </div>
          <div className="plist">
            {list.map((p) => (
              <article key={p.slug} className="prow">
                <div className="prow-art"><Plate seed={p.seed} /></div>
                <div className="prow-body">
                  <span className="tag">{p.status}</span>
                  <h2>{p.name}</h2>
                  <p className="muted">{p.area} &middot; {p.type}</p>
                  <p>{p.blurb}</p>
                  <ul className="chips"><li><Icon name="home" size={16} />{p.units}</li><li><Icon name="ruler" size={16} />{specs[p.slug].size}</li><li><Icon name="calendar" size={16} />{specs[p.slug].possession}</li></ul>
                  <Link href="/contact" className="link">Enquire about this project</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
