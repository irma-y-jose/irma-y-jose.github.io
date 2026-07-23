// Datos de prueba — reemplazar por la información real de la boda.
export const wedding = {
  seo: {
    title: "Irma & Jose — 11 de septiembre de 2026",
    description:
      "Acompáñanos a celebrar nuestra boda el 11 de septiembre de 2026 en Bogotá. Encuentra itinerario, ubicación, dress code y confirma tu asistencia.",
    ogImage: "/og-cover.jpg",
  },
  couple: {
    bride: "Irma",
    groom: "Jose",
  },
  date: {
    iso: "2026-09-11T17:00:00-05:00",
    display: "11 de septiembre de 2026",
    weekday: "Viernes",
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
        year: "2024",
        title: "Una invitación que impactó.",
        text: "Nos conocimos porque el Espíritu Santo ya tenía una agenda para nuestras vidas.",
      },
      {
        year: "2025",
        title: "Empezamos a conocernos con un propósito, servirle plenamente al Señor..",
        text: "En este año decidimos pasar de ser amigos a comprometernos en noviazgo.",
      },
      {
        year: "2026",
        title: "En un propósito decidimos pasar a una nueva etapa de nuestras vidas, nos unimos para avanzar a un compromiso mayor..",
        text: "",
      },
      {
        year: "2026",
        title: "El sí definitivo",
        text: "Y ahora rodeado de quienes más queremos damos el siguiente paso.",
      },
    ],
  },
  events: {
    main: {
      title: "Ceremonia y Recepción",
      time: "6:30 pm",
      name: "Iglesia Internacional Ciudad de Dios",
      address: "Pendiente dirección",
      mapQuery: "Iglesia Internacional Ciudad de Dios",
    },
  },
  dressCode: {
    title: "Formal / Etiqueta rigurosa",
    note: "Evitemos el blanco y azul Rey, reservados para los novios. Los tonos rosas y beige son bienvenidos.",
  },
  gifts: {
    note: "Tu presencia es el regalo más grande que podemos recibir. Si deseas obsequiarnos algo, la mejor forma de acompañarnos en este nuevo comienzo es con un sobre en efectivo, que podrás dejar en el lugar dispuesto para ello durante la recepción.",
  },
  rsvpDeadline: "4 de septiembre de 2026",
  music: {
    src: "audio/canon-in-d.mp3",
    title: "Canon en Re — Pachelbel",
    credit: "Interpretado por la U.S. Air Force Band (dominio público)",
  },
} as const;
