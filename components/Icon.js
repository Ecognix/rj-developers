const P = {
  shield: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z M9 12l2 2 4-4",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5l3 2",
  leaf: "M5 19c0-8 5-13 14-14 0 9-5 14-13 14 M5 19c2-4 5-7 9-9",
  doc: "M7 3h7l4 4v14H7z M14 3v4h4 M10 12h5 M10 16h5",
  wrench: "M14.5 6.5a4 4 0 005 5L10 21l-3-3 9.5-9.5 M14.5 6.5l3 3",
  key: "M8 15a4 4 0 110-8 4 4 0 010 8z M11 12h10 M18 12v3 M21 12v2",
  pool: "M3 17c2 0 2 1.5 4 1.5S9 17 11 17s2 1.5 4 1.5S17 17 21 17 M8 14V6a2 2 0 014 0 M14 14V6a2 2 0 014 0 M8 10h6",
  gym: "M3 10v4 M6 8v8 M18 8v8 M21 10v4 M6 12h12",
  car: "M5 16v-4l2-5h10l2 5v4 M3 16h18 M7 19v-3 M17 19v-3 M7 12h10",
  tree: "M12 21v-7 M7 14a4 4 0 01-1-7 5 5 0 019-1 4 4 0 013 7 5 5 0 01-4 1H7z",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 100-6 3 3 0 000 6z",
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  drop: "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z",
  lift: "M5 3h14v18H5z M9 10l3-3 3 3 M9 14l3 3 3-3",
  wifi: "M3 9a13 13 0 0118 0 M6 12.5a9 9 0 0112 0 M9 16a5 5 0 016 0 M12 19.5h.01",
  home: "M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6",
  building: "M5 21V4h9v17 M14 9h5v12 M8 8h3 M8 12h3 M8 16h3 M3 21h18",
  pin: "M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M3 6h18v12H3z M3 7l9 7 9-7",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  ruler: "M3 17L17 3l4 4L7 21z M7 13l2 2 M10 10l2 2 M13 7l2 2",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4",
  plus: "M12 5v14 M5 12h14",
  pencil: "M4 20l1-4L16 5l3 3L8 19z M14 7l3 3",
  scale: "M12 4v16 M5 20h14 M5 8h14 M5 8l-2 6a3 3 0 006 0z M19 8l-2 6a3 3 0 006 0z",
  heart: "M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z",
  whatsapp: "M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3z M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z",
};

export default function Icon({ name, size = 24, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={`icon ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}
