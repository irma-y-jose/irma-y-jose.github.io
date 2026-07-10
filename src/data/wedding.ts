// Datos de prueba — reemplazar por la información real de la boda.
export const wedding = {
  seo: {
    title: "Sofía & Mateo — 14 de noviembre de 2026",
    description:
      "Acompáñanos a celebrar nuestra boda el 14 de noviembre de 2026 en Bogotá. Encuentra itinerario, ubicación, dress code y confirma tu asistencia.",
    ogImage: "/og-cover.jpg",
  },
  couple: {
    bride: "Sofía",
    groom: "Mateo",
  },
  date: {
    iso: "2026-11-14T17:00:00-05:00",
    display: "14 de noviembre de 2026",
    weekday: "Sábado",
  },
  hero: {
    eyebrow: "Nos casamos",
    tagline: "Después de todo, siempre fuimos nosotros.",
  },
  story: {
    eyebrow: "Nuestra historia",
    title: "Cómo empezó todo",
    milestones: [
      {
        year: "2019",
        title: "Un café que se alargó",
        text: "Nos conocimos por casualidad y la conversación duró hasta que cerraron el lugar. Ninguno de los dos quería que terminara.",
      },
      {
        year: "2021",
        title: "El primer viaje juntos",
        text: "Una maleta, un mapa y demasiadas ganas de perdernos. Ahí supimos que queríamos ver el mundo de la mano del otro.",
      },
      {
        year: "2024",
        title: "La pregunta",
        text: "Una tarde cualquiera se volvió la más importante de nuestras vidas.",
      },
      {
        year: "2026",
        title: "El sí definitivo",
        text: "Y ahora, rodeados de quienes más queremos, damos el siguiente paso.",
      },
    ],
  },
  events: {
    ceremony: {
      title: "Ceremonia",
      time: "5:00 pm",
      name: "Parroquia Santa Teresa",
      address: "Calle 10 #5-23, Bogotá",
      mapQuery: "Parroquia Santa Teresa Bogota",
    },
    reception: {
      title: "Recepción",
      time: "7:00 pm",
      name: "Hacienda El Roble",
      address: "Km 3 vía La Calera, Bogotá",
      mapQuery: "Hacienda El Roble La Calera",
    },
  },
  dressCode: {
    title: "Formal / Etiqueta rigurosa",
    note: "Evitemos el blanco, marfil y beige, reservados para la novia. Los tonos tierra y joya son bienvenidos.",
  },
  gifts: {
    note: "Tu presencia es el regalo más grande que podemos recibir. Si aún así deseas obsequiarnos algo, contamos con mesa de regalos.",
    linkLabel: "Ver mesa de regalos",
    linkUrl: "#",
  },
  rsvpDeadline: "1 de octubre de 2026",
  music: {
    src: "audio/canon-in-d.mp3",
    title: "Canon en Re — Pachelbel",
    credit: "Interpretado por la U.S. Air Force Band (dominio público)",
  },
} as const;
