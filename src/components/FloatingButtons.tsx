import { Phone, MessageCircle } from "lucide-react";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";

const FloatingButtons = () => {
  const handlePhoneClick = () => {
    trackPhoneCall("6303758255");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-floating hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={CALL_LINK}
        onClick={handlePhoneClick}
        className="w-14 h-14 rounded-full gradient-cta text-primary-foreground flex items-center justify-center shadow-floating hover:scale-110 transition-transform animate-float"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </a>
    </div>
  );
};

export default FloatingButtons;
