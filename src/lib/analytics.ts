declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName} - ${location}`);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('share', 'social', `${platform} - ${content}`);
};

export const trackPageLoadTime = (loadTime: number) => {
  trackEvent('timing_complete', 'performance', 'page_load_time', loadTime);
};