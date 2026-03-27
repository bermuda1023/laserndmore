import { businessInfo } from "@/content/business";
import { type Locale } from "@/lib/i18n/config";

type WhatsAppWidgetProps = {
  locale: Locale;
};

function normalizePhone(phone: string) {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length === 10 ? `1${digitsOnly}` : digitsOnly;
}

export function WhatsAppWidget({ locale }: WhatsAppWidgetProps) {
  const whatsappPhone = normalizePhone(businessInfo.phone);
  const message =
    locale === "ru"
      ? `Здравствуйте, ${businessInfo.owner}! Хочу записаться в ${businessInfo.name}.`
      : `Hi ${businessInfo.owner}, I'd like to book an appointment at ${businessInfo.name}.`;

  const href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  const label = locale === "ru" ? "Написать в WhatsApp" : "Message on WhatsApp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:bg-[#20ba59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <span className="hidden text-sm font-semibold sm:inline">{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.35c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.37.11-.49.12-.12.25-.3.38-.45.13-.16.17-.27.25-.45.08-.18.04-.34-.02-.47-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.31.98 2.47.12.16 1.69 2.58 4.09 3.62.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z"
        />
        <path
          fill="currentColor"
          d="M16.02 4.5c-6.34 0-11.5 5.16-11.5 11.5 0 2.02.53 3.99 1.54 5.72L4.5 27.5l5.92-1.54a11.46 11.46 0 0 0 5.6 1.46h.01c6.34 0 11.5-5.16 11.5-11.5S22.36 4.5 16.02 4.5Zm0 20.98h-.01c-1.78 0-3.52-.48-5.03-1.4l-.36-.21-3.51.91.94-3.42-.23-.35a9.51 9.51 0 0 1-1.48-5.01c0-5.25 4.27-9.52 9.53-9.52 2.55 0 4.95.99 6.75 2.79a9.46 9.46 0 0 1 2.78 6.74c0 5.25-4.27 9.52-9.53 9.52Z"
        />
      </svg>
    </a>
  );
}
