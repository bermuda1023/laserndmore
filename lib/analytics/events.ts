export type BookingClickPayload = {
  location: string;
  locale: "en" | "ru";
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackBookingClick(payload: BookingClickPayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "booking_click",
    ...payload
  });
}
