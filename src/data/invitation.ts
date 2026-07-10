// Datos de prueba — reemplazar por la información real de la boda.
export const invitation = {
  couple: {
    bride: "Sofía",
    groom: "Mateo",
  },
  date: {
    iso: "2026-11-14",
    display: "14 de noviembre de 2026",
    weekday: "Sábado",
  },
  rsvpDeadline: "1 de octubre de 2026",
  dressCode: "Formal / Etiqueta rigurosa",
  loveMessage:
    "Después de reír, viajar y crecer juntos, decidimos que la próxima aventura sería para toda la vida. Gracias por acompañarnos en este día tan especial.",
  couplePhoto: "https://picsum.photos/seed/boda-couple/700/900",
  gallery: [
    "https://picsum.photos/seed/boda-1/600/800",
    "https://picsum.photos/seed/boda-2/600/800",
    "https://picsum.photos/seed/boda-3/600/800",
    "https://picsum.photos/seed/boda-4/600/800",
  ],
  schedule: [
    { time: "5:00 pm", title: "Ceremonia religiosa", place: "Parroquia Santa Teresa" },
    { time: "6:30 pm", title: "Cóctel de bienvenida", place: "Jardines Hacienda El Roble" },
    { time: "7:00 pm", title: "Recepción y cena", place: "Salón Principal, Hacienda El Roble" },
    { time: "9:00 pm", title: "Fiesta", place: "Salón Principal, Hacienda El Roble" },
  ],
  venues: {
    ceremony: {
      name: "Parroquia Santa Teresa",
      address: "Calle 10 #5-23, Bogotá",
      mapUrl: "https://maps.google.com/?q=Parroquia+Santa+Teresa+Bogota",
    },
    reception: {
      name: "Hacienda El Roble",
      address: "Km 3 vía La Calera, Bogotá",
      mapUrl: "https://maps.google.com/?q=Hacienda+El+Roble+La+Calera",
    },
  },
  gifts: {
    note: "Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo, contamos con mesa de regalos.",
    linkLabel: "Ver mesa de regalos",
    linkUrl: "#",
  },
  rsvp: {
    formAction: "https://formspree.io/f/TU_FORM_ID",
  },
} as const;
