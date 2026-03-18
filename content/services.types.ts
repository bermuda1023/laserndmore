export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  priceFrom: string;
  category: "laser" | "facial" | "skin" | "body" | "consultation";
  faqs: ServiceFaq[];
};
