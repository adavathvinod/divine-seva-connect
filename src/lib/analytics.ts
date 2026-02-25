declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Track phone call clicks
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent("phone_call_click", {
    phone_number: phoneNumber,
    event_category: "engagement",
    event_label: "Phone Call",
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: "WhatsApp Message",
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
    event_category: "conversion",
    event_label: "Contact Form",
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
    event_category: "conversion",
    event_label: "Service Interest",
  });
};
