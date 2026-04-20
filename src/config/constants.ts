export const CONTACT_INFO = {
  phoneNumber: "918796151176",
  whatsappNumber: "918287215614",
  email: "narulaorthocentre@gmail.com",
  address: "G-18, Near Sh. Rameshwar Medical Centre, Sarovar Marg, Navin Shahdara, Delhi - 110032",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=G-18,+Near+Sh.+Rameshwar+Medical+Centre,+Sarovar+Marg,+Navin+Shahdara,+Delhi+-+110032&output=embed"
} as const; // "as const" makes it deeply read-only for better type safety

export const MESSAGES = {
  appointmentRequest: "Hello Dr. Paarth, I would like to book an appointment.",
};

export const WHATSAPP = {
    whatsappUrl: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(MESSAGES.appointmentRequest)}`
}