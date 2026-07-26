// Datos de prueba — reemplazar por la información real de la boda.
export const wedding = {
  seo: {
    title: "Irma & Jose — 11 de septiembre de 2026",
    description:
      "¡Nos casamos! Entra para ver los detalles y confirmar tu asistencia.",
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
    tagline: "",
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
        title: "Empezamos a conocernos con un propósito, servirle plenamente al Señor.",
        text: "En este año decidimos pasar de ser amigos a comprometernos en noviazgo.",
      },
      {
        year: "2026",
        title: "En un propósito decidimos pasar a una nueva etapa de nuestras vidas.",
        text: "Nos unimos para avanzar a un compromiso mayor.",
      },
      {
        year: "2026",
        title: "El sí definitivo",
        text: "Y ahora, rodeado de quienes más queremos, damos el siguiente paso.",
      },
    ],
  },
  events: {
    main: {
      title: "Ceremonia y Recepción",
      time: "6:30 pm",
      name: "Iglesia Internacional Ciudad de Dios",
    },
  },
  dressCode: {
    title: "Formal / Etiqueta rigurosa",
    note: "Evitemos el blanco y azul Rey, reservados para los novios. Los tonos rosas, beige y verde suave son bienvenidos.",
  },
  gifts: {
    note: "Tu presencia es el regalo más grande que podemos recibir. Si deseas obsequiarnos algo, la mejor forma de acompañarnos en este nuevo comienzo es con un sobre en efectivo, que podrás dejar en el lugar dispuesto para ello durante la recepción.",
  },
  rsvpDeadline: "4 de septiembre de 2026",
  music: {
    src: "audio/wedding-music.mp3",
    title: "Wedding Music",
    credit: "Paul Yudin",
  },
} as const;
