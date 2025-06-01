type requiredInfo = {
  phoneNumber: string;
  message: string;
};

const info: requiredInfo = {
  phoneNumber: "1234567890",
  message: "Hi, I want to ask about the early bird promo.",
};

export function openWhatsAppMessage(): void {
  const encodedMessage = encodeURIComponent(info.message);
  const whatsappURL = `https://wa.me/${info.phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}
