import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917382806134";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Srinivas, I want to book a TTD Seva/Darshan. Please guide me."
);

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="white" />
    </button>
  );
};

export const openWhatsApp = () => {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    "_blank"
  );
};

export default WhatsAppButton;
