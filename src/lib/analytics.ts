declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const GOOGLE_ADS_ACCOUNT_ID = "AW-17990000747";
const DEFAULT_CONVERSION_SEND_TO = `${GOOGLE_ADS_ACCOUNT_ID}/2vVtCJz7uIIcEOvApoJD`;
const CONTACT_PAGE_CONVERSION_SEND_TO = `${GOOGLE_ADS_ACCOUNT_ID}/j63GCL-VmYUcEOvApoJD`;

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Google Ads Conversion Tracking with callback
export const trackGoogleAdsConversion = (
  url?: string,
  callback?: () => void,
  sendTo: string = DEFAULT_CONVERSION_SEND_TO,
) => {
  if (window.gtag) {
    const config: Record<string, unknown> = {
      send_to: sendTo,
      'value': 1.0,
      'currency': 'INR',
    };
    
    // Add callback if provided
    if (callback) {
      config['event_callback'] = callback;
    }
    
    window.gtag('event', 'conversion', config);
  } else if (callback) {
    // If gtag not available, still execute callback
    callback();
  }
  
  return false;
};

// Track the Contact (1) conversion action from Google Ads.
export const trackContactPageConversion = () => {
  trackGoogleAdsConversion(undefined, undefined, CONTACT_PAGE_CONVERSION_SEND_TO);
};

// Track phone call clicks - returns false to allow event_callback to handle navigation
export const trackPhoneCall = (phoneNumber: string, url?: string) => {
  trackEvent("phone_call_click", {
    phone_number: phoneNumber,
    event_category: "engagement",
    event_label: "Phone Call",
  });

  const destination = url ?? `tel:${phoneNumber}`;

  if (window.gtag_report_conversion) {
    return window.gtag_report_conversion(destination);
  }
  
  // Track Google Ads conversion with callback
  const callback = destination ? () => {
    if (typeof destination !== 'undefined') {
      window.location.href = destination;
    }
  } : undefined;
  
  trackGoogleAdsConversion(destination, callback);
  return false;
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (url?: string) => {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: "WhatsApp Message",
  });
  
  // Track Google Ads conversion with callback
  const callback = url ? () => {
    if (typeof url !== 'undefined') {
      window.open(url, '_blank');
    }
  } : undefined;
  
  trackGoogleAdsConversion(url, callback);
  return false;
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
    event_category: "conversion",
    event_label: "Contact Form",
  });
  // Track Google Ads conversion for form submissions
  trackGoogleAdsConversion();
};

// Track service inquiries
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
    event_category: "conversion",
    event_label: "Service Interest",
  });
};
