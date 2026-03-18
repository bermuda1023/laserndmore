import { ServiceItem } from "@/content/services.types";

export const servicesEn: ServiceItem[] = [
  // --- LASER ---
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    shortDescription: "Fast, effective hair reduction for face and body with personalized protocols.",
    longDescription:
      "Laser & More offers laser hair removal for every zone — from upper lip and chin to full body. Each session is customized to your skin type and hair growth pattern for safe, comfortable results. Available areas include upper lip, chin, full face, sideburns, ears, toes, back neck, beard shaping, bikini lines, front bikini, full Brazilian, inner and full buttocks, chest, half and full arms, half and full legs, half and full back, stomach, armpits, and belly line.",
    duration: "5-60 min",
    priceFrom: "$20",
    category: "laser",
    faqs: [
      { q: "How many sessions are usually needed?", a: "Most clients see best results after 6-8 sessions, spaced according to hair growth cycles." },
      { q: "Is there downtime?", a: "Minimal — mild redness may occur and typically fades within a few hours." },
      { q: "Does it work on all skin tones?", a: "Modern laser technology accommodates a range of skin tones. A quick consultation confirms the best approach for you." }
    ]
  },
  // --- FACIALS ---
  {
    slug: "hydrafacial",
    name: "Hydrafacial",
    shortDescription: "Deep cleanse, exfoliation, extraction, and intense hydration in one session.",
    longDescription:
      "A HydraFacial is a non-invasive treatment that deeply cleanses, exfoliates, extracts impurities, and infuses the skin with antioxidants, peptides, and hyaluronic acid using advanced vortex suction technology. Results are immediate with no downtime — making it suitable for all skin types and a popular choice before events.",
    duration: "45 min",
    priceFrom: "$120",
    category: "facial",
    faqs: [
      { q: "Is Hydrafacial good before an event?", a: "Absolutely — many clients book it the day before or morning of an event for an instant glow." },
      { q: "Can sensitive skin do Hydrafacial?", a: "Yes. The protocol is adjustable to your skin's tolerance level." }
    ]
  },
  {
    slug: "glow-up-facial",
    name: "Glow Up Facial",
    shortDescription: "Multi-step facial with dermaplane, extractions, massage, and custom masks.",
    longDescription:
      "The Glow Up Facial includes a double cleanse, exfoliation via dermaplaning or microdermabrasion, ultrasonic deep cleanse, extractions, high frequency, a light chemical peel (if appropriate for your skin), two masks selected by skin type, a decollete and arms massage, targeted serums, and SPF protection.",
    duration: "75 min",
    priceFrom: "$140",
    category: "facial",
    faqs: [
      { q: "Is the chemical peel always included?", a: "A light peel may or may not be applied depending on your current skin condition — your esthetician decides during the session." },
      { q: "How often should I get a Glow Up Facial?", a: "Monthly sessions work well for maintaining clear, glowing skin." }
    ]
  },
  {
    slug: "facify-glow-sculpt",
    name: "Facify Glow-Sculpt",
    shortDescription: "Lifting, sculpting, and radiance with the Facify wand, enzymes, and LED.",
    longDescription:
      "The Facify Wand Facial is all about giving your skin a natural lift and glow. The Facify wand gently massages and sculpts, boosting circulation and reducing puffiness. Paired with professional-grade enzymes, targeted serums, and LED therapy, this facial leaves your skin looking fresh, bright, and lifted. Extractions included.",
    duration: "60 min",
    priceFrom: "$160",
    category: "facial",
    faqs: [
      { q: "What does the Facify wand do?", a: "It uses gentle micro-current and massage action to lift, sculpt, and improve circulation in the facial muscles." },
      { q: "Is LED therapy safe?", a: "Yes. LED light therapy is non-invasive and supports collagen production and skin healing." }
    ]
  },
  {
    slug: "caviar-carat-lux-facial",
    name: "Caviar & Carat Lux Facial",
    shortDescription: "Ultra-luxurious anti-aging treatment with caviar, honey, and gold extract.",
    longDescription:
      "Rich, indulgent, and nourishing — this anti-aging powerhouse combines pure honey for tissue growth and texture, caviar for deep moisture, and gold extract for instant repair. Lactic acid, a gold scrub, and gommage deliver double exfoliation, followed by a nourishing Honey Gold and vitamin A-rich Seabuckthorn massage. Finished with a luxurious caviar application for illumination and extreme brightening.",
    duration: "90 min",
    priceFrom: "$250",
    category: "facial",
    faqs: [
      { q: "Who is this facial best for?", a: "Anyone wanting a premium, results-driven anti-aging experience — especially before a special occasion." },
      { q: "How often should I book it?", a: "Monthly for ongoing rejuvenation, or as a luxurious pre-event treat." }
    ]
  },
  {
    slug: "glass-skin-effect",
    name: "Glass Skin Effect",
    shortDescription: "Multi-technique exfoliation for luminous, flawless-looking skin that lasts days.",
    longDescription:
      "Get the coveted Glass Skin Effect with a unique blend of exfoliating techniques that give your skin a luminous and radiant appearance lasting for days. This extended treatment addresses dullness and uneven texture, delivering a flawless, translucent complexion.",
    duration: "100 min",
    priceFrom: "$200",
    category: "facial",
    faqs: [
      { q: "How long does the glass skin effect last?", a: "Most clients enjoy the luminous result for several days after treatment." },
      { q: "Is this suitable for acne-prone skin?", a: "The protocol can be adapted, but a consultation ensures the right approach for your skin." }
    ]
  },
  {
    slug: "dmk-enzyme-treatment",
    name: "DMK Enzyme Treatment",
    shortDescription: "Professional enzyme therapy for lifting, detox, and deep skin oxygenation.",
    longDescription:
      "DMK enzyme therapy creates a reverse osmosis action that back-flushes fluid through cell membranes, flushing out impurities using transfer messenger enzymes. Benefits include stimulating facial muscles for an instant lift, smoothing the appearance of scars and fine lines, oxygenating skin for a youthful glow, and full detoxification.",
    duration: "90 min",
    priceFrom: "$220",
    category: "facial",
    faqs: [
      { q: "What does the 'plasmatic effect' look like?", a: "You may see a visible mask-like flush during treatment — this is the enzyme working and is a sign of healthy vascular response." },
      { q: "How many sessions are recommended?", a: "A series of treatments delivers the most dramatic and lasting results." }
    ]
  },
  {
    slug: "dermaplane-facial",
    name: "Dermaplane Facial",
    shortDescription: "Gentle exfoliation to remove peach fuzz and reveal smooth, radiant skin.",
    longDescription:
      "This treatment includes a double cleanse, skin prep, precision dermaplaning, a calming mask, hydrating serum, and SPF protection. Dermaplaning removes dead skin cells and vellus hair for a smoother texture and better product absorption.",
    duration: "50 min",
    priceFrom: "$80",
    category: "facial",
    faqs: [
      { q: "Will my hair grow back thicker?", a: "No. Vellus hair grows back the same — this is a common myth." },
      { q: "Can I wear makeup after?", a: "Yes, makeup applies more smoothly after dermaplaning. Just be gentle with your skin for 24 hours." }
    ]
  },
  {
    slug: "gentlemens-facial",
    name: "Gentlemen's Facial",
    shortDescription: "Targeted facial addressing specific male skincare needs.",
    longDescription:
      "Revitalize your skin with the Gentlemen's Facial, tailored to address specific male skincare needs for a refreshed and polished look. Includes deep cleansing, exfoliation, extractions, and hydration designed for thicker, oilier, or post-shave irritated skin.",
    duration: "60 min",
    priceFrom: "$120",
    category: "facial",
    faqs: [
      { q: "Is this good for razor bumps?", a: "Yes, the treatment helps calm irritation and reduce ingrown hairs." },
      { q: "Is it only for men?", a: "While designed for male skin, anyone can benefit from this protocol." }
    ]
  },
  {
    slug: "valentines-glow-facial",
    name: "Valentine's Glow Facial",
    shortDescription: "Special-occasion facial for an instant pre-date radiance boost.",
    longDescription:
      "A seasonal special designed to give you a gorgeous glow right before a special occasion. This facial combines targeted exfoliation, hydration, and luminosity-boosting techniques for camera-ready skin.",
    duration: "50 min",
    priceFrom: "$99",
    category: "facial",
    faqs: [
      { q: "Is this available year-round?", a: "Check with us — seasonal specials may rotate, but we often have event-prep facials available." }
    ]
  },
  // --- SKIN TREATMENTS ---
  {
    slug: "acne-consultation-treatment",
    name: "Acne Consultation + Treatment",
    shortDescription: "Full acne analysis, custom treatment, and home-care routine.",
    longDescription:
      "This service begins with a consultation to determine your acne type, discuss your skin goals, current routine, skin history, and lifestyle. A customized home-care routine is designed for your skin, followed by a hydrating treatment or chemical peel, extractions, mask, high frequency, and LED therapy.",
    duration: "60 min",
    priceFrom: "$125",
    category: "skin",
    faqs: [
      { q: "Will I receive a home routine recommendation?", a: "Yes — a personalized routine is a core part of every acne consultation." },
      { q: "Can this help with acne scars?", a: "Treatment planning addresses both active breakouts and post-acne marks." }
    ]
  },
  {
    slug: "anti-pigmentation-chemical-peel",
    name: "Anti-Pigmentation Chemical Peel",
    shortDescription: "Custom light peel targeting dark spots, tone, texture, and fine lines.",
    longDescription:
      "A light chemical peel custom-picked for your skin type that may cause mild peeling in some areas. Ideal before an important event for a glow, or in a series for treating acne, dark spots, fine lines, and texture. A consultation is needed beforehand.",
    duration: "40 min",
    priceFrom: "$200",
    category: "skin",
    faqs: [
      { q: "Is peeling expected?", a: "Some clients notice mild peeling depending on skin type and peel protocol used." },
      { q: "How should I prepare?", a: "A consultation is required to confirm candidacy and discuss pre-care steps." }
    ]
  },
  {
    slug: "biorepeel",
    name: "BioRePeel",
    shortDescription: "No-downtime, needle-free peel that exfoliates, hydrates, and boosts collagen.",
    longDescription:
      "BioRePeel is not your average peel — it's a no-downtime, needle-free treatment that revives skin from the inside out. It exfoliates, hydrates, and stimulates collagen simultaneously. Benefits include fading acne and pigmentation, shrinking pores, smoothing texture, and an instant glow boost. Perfect before a trip, event, or anytime your skin needs a reset.",
    duration: "60 min",
    priceFrom: "$175",
    category: "skin",
    faqs: [
      { q: "Is there really no downtime?", a: "Correct — most clients return to normal activities immediately." },
      { q: "How many sessions should I plan?", a: "Single sessions give a great boost, but a series of 3-4 treatments maximizes results." }
    ]
  },
  {
    slug: "microneedling-face",
    name: "Microneedling Face",
    shortDescription: "Collagen-stimulating micro-needles for smoother, firmer, clearer skin.",
    longDescription:
      "Microneedling uses small sterilized needles to create controlled micro-injuries that trigger new collagen and skin tissue production. It reduces the appearance of acne scars, dark spots, wrinkles, and large pores. Treatment includes a double cleanse, microneedling with hyaluronic serum, and SPF protection.",
    duration: "75 min",
    priceFrom: "$200",
    category: "skin",
    faqs: [
      { q: "How long until I see results?", a: "Initial improvement is visible within a week; full collagen remodeling takes 4-6 weeks." },
      { q: "Is it painful?", a: "A numbing cream is applied beforehand. Most clients describe mild pressure." }
    ]
  },
  {
    slug: "microneedling-face-neck",
    name: "Microneedling Face + Neck",
    shortDescription: "Extended microneedling covering face and neck for comprehensive rejuvenation.",
    longDescription:
      "An extended microneedling session covering both face and neck to stimulate collagen production, improve skin texture, and reduce fine lines, wrinkles, and scars. The neck area is particularly responsive to microneedling and often shows early signs of aging.",
    duration: "90 min",
    priceFrom: "$250",
    category: "skin",
    faqs: [
      { q: "Why include the neck?", a: "The neck shows aging early and responds very well to collagen stimulation from microneedling." },
      { q: "What should I avoid after?", a: "Avoid direct sun exposure and active ingredients for 48 hours post-treatment." }
    ]
  },
  {
    slug: "ultimate-dna-renewal",
    name: "Ultimate DNA Renewal",
    shortDescription: "Luxurious multi-step treatment with RF, dermaplaning, microneedling, and salmon DNA.",
    longDescription:
      "The ultimate in skin rejuvenation — this luxurious, multi-step treatment is designed to lift, firm, and deeply restore skin from within. Starts with radiofrequency for skin tightening, followed by dermaplaning and microneedling with salmon DNA. Finished with LED light therapy and post-care serums for immediate glowing, tightened, and brightened results. Boosts collagen and elastin, brightens dull skin, improves texture and hydration, and strengthens the skin barrier.",
    duration: "120 min",
    priceFrom: "$300",
    category: "skin",
    faqs: [
      { q: "What is salmon DNA?", a: "Salmon DNA (PDRN) is a regenerative ingredient that promotes cell renewal, collagen synthesis, and deep hydration." },
      { q: "Is this the most comprehensive treatment you offer?", a: "Yes — it combines multiple modalities for maximum rejuvenation in a single session." }
    ]
  },
  {
    slug: "gypsum-mummy-mask",
    name: "Gypsum (Mummy) Mask",
    shortDescription: "Thermal anti-aging mask for instant lifting, hydration, and plump skin.",
    longDescription:
      "Formulated with highly purified cosmetic gypsum powder, this mask is a powerful anti-aging solution targeting atonic and mature skin. Its unique thermal modulation feature cycles through temperatures from 20C to 42C and back, boosting treatment efficiency. Instant benefits include lifting, improved appearance of lines and wrinkles, deep hydration, glow, and firm, plump skin. Double cleanse and exfoliation are performed prior to mask application.",
    duration: "75 min",
    priceFrom: "$150",
    category: "skin",
    faqs: [
      { q: "Why is it called a mummy mask?", a: "The gypsum sets firm around the face like wrapping, creating a compression and thermal effect for deep penetration." },
      { q: "Is it suitable for younger skin?", a: "It's designed primarily for mature or atonic skin, but a consultation will determine suitability." }
    ]
  },
  {
    slug: "vajacial-brightening",
    name: "Vajacial Brightening",
    shortDescription: "Intimate area brightening and skin renewal treatment.",
    longDescription:
      "A specialized brightening treatment for the intimate area, designed to even skin tone and improve skin texture in sensitive zones. Professional-grade products ensure safe, effective results.",
    duration: "15 min",
    priceFrom: "$120",
    category: "skin",
    faqs: [
      { q: "Is this treatment safe?", a: "Yes — professional products formulated for sensitive areas are used throughout." },
      { q: "How many sessions for visible results?", a: "Many clients notice improvement after the first session, with best results over a series." }
    ]
  },
  {
    slug: "back-facial",
    name: "Back Facial",
    shortDescription: "Deep cleanse, extractions, and healing for back acne and blackheads.",
    longDescription:
      "Treat your back too. This facial helps with blackheads and acne-prone back skin. Includes double cleanse and exfoliation, thorough extractions, a healing mask selected by skin type, and moisturizer. A chemical peel add-on is available by choice.",
    duration: "60 min",
    priceFrom: "$180",
    category: "facial",
    faqs: [
      { q: "Can I add a chemical peel?", a: "Yes — a peel can be added as an upgrade during your session." },
      { q: "How often should I get a back facial?", a: "Monthly sessions help keep back acne and congestion under control." }
    ]
  },
  // --- BODY ---
  {
    slug: "endosphere-therapy",
    name: "Endosphere Therapy",
    shortDescription: "Non-invasive body contouring and cellulite reduction with compressive micro-vibration.",
    longDescription:
      "Endosphere therapy uses compressive micro-vibration technology to reduce the appearance of cellulite, improve circulation, and contour the body. Available in 45-minute and 60-minute sessions. A face add-on is also available for lifting and sculpting.",
    duration: "45-60 min",
    priceFrom: "$99",
    category: "body",
    faqs: [
      { q: "How many sessions are recommended?", a: "A series of 6-10 sessions typically produces the most visible body-contouring results." },
      { q: "Is there a face option?", a: "Yes — a 10-minute face add-on is available for lifting and sculpting." }
    ]
  },
  {
    slug: "velashape-anti-cellulite",
    name: "VelaShape Anti-Cellulite",
    shortDescription: "RF, infrared, vacuum, and massage combined for skin tightening and cellulite reduction.",
    longDescription:
      "VelaShape is a non-invasive body contouring treatment that uses bipolar radiofrequency energy, infrared light, vacuum suction, and mechanical massage to reduce the appearance of cellulite, tighten skin, and shrink circumference in areas like thighs, buttocks, arms, and abdomen.",
    duration: "50 min",
    priceFrom: "$140",
    category: "body",
    faqs: [
      { q: "Is VelaShape painful?", a: "Most clients find it comfortable — like a warm deep-tissue massage." },
      { q: "When do I see results?", a: "Some improvement is visible after the first session, with best results after a full series." }
    ]
  },
  {
    slug: "rf-skin-tightening-face-neck",
    name: "RF Skin Tightening Face + Neck",
    shortDescription: "Non-invasive radiofrequency for firmer, tighter, more radiant skin.",
    longDescription:
      "Radiofrequency (RF) facial treatment uses gentle radio wave energy to heat the deeper layers of the skin (the dermis). This controlled heat stimulates collagen and elastin production for firmer, more lifted skin, improves circulation for a healthy radiant glow, and tightens slightly loose or sagging skin — especially along the jawline, cheeks, and neck. No downtime, just a warm sensation with mild pinkness that fades within minutes.",
    duration: "60 min",
    priceFrom: "$200",
    category: "facial",
    faqs: [
      { q: "Is RF treatment painful?", a: "Most clients describe a comfortable warming sensation throughout." },
      { q: "When do results appear?", a: "Some firmness is visible right away, with progressive improvement over weeks as collagen rebuilds." }
    ]
  },
  // --- ADD-ONS & CONSULTATIONS ---
  {
    slug: "led-therapy",
    name: "LED Therapy 20min",
    shortDescription: "Gentle light therapy for fine lines, tone, and overall skin health.",
    longDescription:
      "Achieve radiant skin with LED therapy — a gentle yet effective treatment to diminish fine lines, improve skin tone, and enhance overall skin health. Available as a standalone or add-on to any facial.",
    duration: "20 min",
    priceFrom: "$20",
    category: "consultation",
    faqs: [
      { q: "Can LED be added to any facial?", a: "Yes — it's a popular add-on that enhances any treatment." }
    ]
  },
  {
    slug: "free-consultation",
    name: "Free Consultation (In-Office)",
    shortDescription: "Meet with Anzhelika to discuss your skin goals and get a personalized plan.",
    longDescription:
      "A complimentary 15-minute in-office consultation where Anzhelika evaluates your skin, discusses goals, and recommends the right treatment path for you. No commitment required.",
    duration: "15 min",
    priceFrom: "$0",
    category: "consultation",
    faqs: [
      { q: "Do I need to prepare anything?", a: "Come with clean skin if possible, and any questions about your skin concerns." }
    ]
  },
  {
    slug: "virtual-consultation-acne",
    name: "Virtual Consultation (Acne)",
    shortDescription: "Personalized acne guidance and homecare from the comfort of home.",
    longDescription:
      "Get personalized guidance from Anzhelika in a virtual consultation. She covers important topics to help you understand acne causes, identify your type of acne, and receive the best homecare regimen, treatment recommendations, and dietary suggestions — all from the comfort of your own home.",
    duration: "30 min",
    priceFrom: "$45",
    category: "consultation",
    faqs: [
      { q: "How does the virtual consultation work?", a: "You'll connect via video call to discuss your skin concerns and receive a personalized plan." }
    ]
  }
];
