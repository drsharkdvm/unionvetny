/**
 * Union Vet — site content.
 * Copy sourced from unionvetny.com and adapted into a new design.
 * `icon` fields reference Lucide icon names, resolved in components.
 */

import type { IconName } from "@/components/icon";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  /** longer body copy for the dedicated service page */
  intro?: string[];
  /** "what's included" bullet points */
  details?: string[];
  /** "what to expect" paragraph for the dedicated service page */
  whatToExpect?: string;
  /** service-specific FAQs (rendered + FAQPage schema) */
  faqs?: ServiceFaq[];
}

export interface ValueItem {
  key: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface TeamMember {
  name: string;
  role: string;
  /** optional lead line shown above the bio */
  tagline?: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  source: string;
  quote: string;
  rating: number;
}

export type { Post, PostBlock } from "./posts";

export interface Faq {
  question: string;
  answer: string;
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES: Service[] = [
  {
    slug: "urgent-emergency-care",
    title: "Urgent & Emergency Care",
    icon: "Siren",
    summary:
      "Fast same-day care for urgent injuries, illnesses and emergencies, backed by an experienced team when every minute counts.",
    intro: [
      "When your pet is hurt or suddenly unwell, waiting isn't an option. As your local emergency vet in Oakland Gardens, Queens, Union Vet provides fast same-day care for urgent injuries and illnesses during our open hours — so your pet is seen quickly by an experienced team instead of sitting on a waitlist.",
      "If something feels serious and can't wait — trouble breathing, uncontrolled bleeding, seizures, repeated vomiting, or a pet that can't stand or urinate — call us right away at (718) 301-4030. We'll advise you over the phone, prepare for your arrival, and begin care the moment you're through the door. Union Vet is a full-service hospital rather than a 24-hour facility, so for after-hours emergencies we'll help direct you to the nearest round-the-clock ER.",
    ],
    details: [
      "Same-day sick and injury visits",
      "Rapid triage and on-site stabilization",
      "In-house labs and imaging for fast answers",
      "Pain management and close monitoring",
      "Clear guidance on when a condition can't wait",
    ],
    whatToExpect:
      "When you arrive, our team triages your pet right away — the most urgent cases are seen first. We examine your pet, run any in-house tests or imaging that's needed, and talk you through the findings and options before we act. Because minutes matter in an emergency, calling ahead lets us prepare for your arrival.",
    faqs: [
      { q: "Are you a 24-hour emergency hospital?", a: "No — Union Vet offers same-day urgent and emergency care during our open hours (Mon–Fri 8 AM–8 PM, Sat 8 AM–4 PM). For emergencies outside those hours, call (718) 301-4030 for guidance or go to the nearest 24-hour emergency animal hospital." },
      { q: "Should I call before coming in for an emergency?", a: "Yes, if you can. A quick call to (718) 301-4030 lets our team advise you and prepare for your arrival, so treatment can start the moment you're through the door." },
    ],
  },
  {
    slug: "wellness-new-pet-exams",
    title: "Wellness & New Pet Exams",
    icon: "Stethoscope",
    summary:
      "Comprehensive exams for new puppies and kittens or lifelong companions — physical exams, parasite prevention and a personalized health plan.",
    intro: [
      "Great care starts long before anything is wrong. A comprehensive wellness exam is the foundation of a long, healthy life — our veterinarians check every system nose-to-tail, catching small concerns early, when they're easiest and most affordable to treat.",
      "Bringing home a new puppy or kitten? We'll build a personalized plan covering their exams, vaccine schedule, parasite prevention, nutrition and spay/neuter timing, so you start off on the right paw. For adult and senior pets, regular wellness visits keep vaccines current and track subtle changes over time.",
    ],
    details: [
      "Full nose-to-tail physical exam",
      "Puppy and kitten new-patient plans",
      "Vaccine scheduling",
      "Parasite screening and prevention",
      "Weight, dental and nutrition assessment",
      "A personalized health roadmap",
    ],
    whatToExpect:
      "A wellness visit is unhurried. Your veterinarian performs a full nose-to-tail exam, reviews diet, weight, dental and parasite status, updates any due vaccines, and answers your questions. For puppies and kittens we map out the full first-year schedule so nothing is missed.",
    faqs: [
      { q: "How often should my pet have a wellness exam?", a: "Most healthy adult dogs and cats benefit from a check-up once a year; puppies, kittens and senior pets need more frequent visits. Regular exams catch problems early, when they're easiest to treat." },
      { q: "What should I bring to a new-patient visit?", a: "Bring any prior medical or vaccination records, a list of current medications or supplements, and a note of the food your pet eats. If possible, bring a fresh stool sample so we can check for parasites." },
    ],
  },
  {
    slug: "vaccinations",
    title: "Vaccinations",
    icon: "Syringe",
    summary:
      "Customized vaccination plans for dogs and cats built around your pet's age, lifestyle and risk — never one-size-fits-all.",
    intro: [
      "Vaccines are one of the simplest, most effective ways to protect your pet from serious, preventable disease. At Union Vet we build a vaccination plan around your pet — their age, lifestyle and real-world risk — rather than a one-size-fits-all schedule.",
      "Every dog and cat receives the core vaccines that guard against the most dangerous illnesses, plus lifestyle-based options like Bordetella (kennel cough) for pets who board, attend daycare or visit the groomer. We keep clear records and provide the documentation you need for travel, boarding and licensing.",
    ],
    details: [
      "Core vaccines for dogs and cats",
      "Rabies vaccination and certificates",
      "Bordetella for boarding, grooming and daycare",
      "Lifestyle-based risk assessment",
      "Up-to-date records and documentation",
    ],
    whatToExpect:
      "We start by reviewing your pet's age, lifestyle and vaccine history, then recommend only the vaccines they actually need. The vaccines themselves take just moments, and we'll give you a record and let you know when the next boosters are due.",
    faqs: [
      { q: "Which vaccines does my pet really need?", a: "Every dog and cat needs the core vaccines (including rabies), plus lifestyle-based ones such as Bordetella if they board, attend daycare or visit the groomer. We tailor the plan to your pet's real risk rather than vaccinating for everything." },
      { q: "Do you provide vaccine records for boarding or travel?", a: "Yes. We keep clear records and provide the documentation you need for boarding, grooming, daycare, licensing and travel." },
    ],
  },
  {
    slug: "diagnostics",
    title: "Diagnostics & Imaging",
    icon: "Microscope",
    summary:
      "On-site blood, urine and fecal testing, digital X-rays, ultrasound and echocardiogram for quick, accurate answers.",
    intro: [
      "When your pet can't tell us what's wrong, fast and accurate diagnostics fill in the picture. Our in-house laboratory and advanced imaging let us find answers during your visit instead of waiting days for an outside lab.",
      "From routine pre-surgical bloodwork to investigating a sudden illness, we combine blood, urine and fecal testing with digital X-ray, ultrasound and echocardiography to reach a confident diagnosis — and start treatment sooner.",
    ],
    details: [
      "In-house blood, urine and fecal testing",
      "Same-visit results",
      "Digital radiography (X-ray)",
      "Abdominal and diagnostic ultrasound",
      "Echocardiography (heart imaging)",
      "Pre-anesthetic screening",
    ],
    whatToExpect:
      "Depending on your pet's symptoms, we may draw blood, collect a urine or stool sample, or take digital X-rays or an ultrasound. Because our lab and imaging are in-house, many results come back during your visit — so we can explain what's going on and start treatment the same day.",
    faqs: [
      { q: "Will I get results the same day?", a: "Often, yes. Our in-house laboratory and imaging let us run many tests during your visit rather than sending them to an outside lab and waiting days." },
      { q: "Does my pet need to fast before bloodwork?", a: "For some tests, a short fast gives the most accurate results. When you book, we'll let you know whether to withhold food beforehand." },
    ],
  },
  {
    slug: "surgery",
    title: "Surgery",
    icon: "HeartPulse",
    summary:
      "Routine, emergency and orthopedic surgery in a modern suite — with pre-surgical screening, pain management and careful monitoring.",
    intro: [
      "Whether it's a routine spay or a more complex procedure, surgery is safest in experienced hands with the right monitoring. Our modern surgical suite pairs advanced equipment with individualized anesthesia and continuous monitoring from start to finish.",
      "Before any procedure we perform a thorough exam and a pre-surgical blood screen to make sure your pet is a safe candidate. Because pain slows healing, comfort and pain management are built into every surgery — and we'll send you home with clear recovery instructions and a direct line to our team.",
    ],
    details: [
      "Spay and neuter",
      "Soft-tissue surgery",
      "Orthopedic procedures",
      "Pre-surgical exam and bloodwork",
      "Individualized anesthesia and monitoring",
      "Proactive pain management and recovery plan",
    ],
    whatToExpect:
      "Before surgery we perform an exam and pre-anesthetic blood screen to confirm your pet is a safe candidate. On the day, your pet is monitored continuously under individualized anesthesia, with pain control built in. Most pets go home the same day or the next with clear recovery instructions and a direct line to our team.",
    faqs: [
      { q: "Is anesthesia safe for my pet?", a: "Modern anesthesia is very safe, especially with the precautions we take — a pre-surgical exam, blood screening, individualized protocols and continuous monitoring throughout the procedure." },
      { q: "How long is recovery after surgery?", a: "It depends on the procedure. Many pets are back to normal within a couple of weeks; we'll give you specific aftercare instructions and follow up on your pet's recovery." },
    ],
  },
  {
    slug: "dental-care",
    title: "Dental Care",
    icon: "Bone",
    summary:
      "Professional dental cleanings and oral health assessments to protect your pet from painful, preventable disease.",
    intro: [
      "Dental disease is one of the most common — and most overlooked — health problems in dogs and cats, and it's almost entirely preventable. Left untreated, it causes pain, tooth loss and infection that can affect the heart, liver and kidneys.",
      "A professional dental cleaning removes the plaque and tartar brushing can't reach, above and below the gumline. We assess each tooth, take dental X-rays where needed to catch hidden problems, and show you how to keep your pet's smile healthy at home.",
    ],
    details: [
      "Full oral exam and assessment",
      "Professional cleaning above and below the gumline",
      "Dental X-rays where needed",
      "Extractions when necessary",
      "At-home dental care coaching",
    ],
    whatToExpect:
      "A dental visit starts with an oral exam. Under safe anesthesia we clean above and below the gumline, take dental X-rays where needed to find hidden problems, and address any diseased teeth. You'll go home knowing exactly how to keep your pet's mouth healthy between visits.",
    faqs: [
      { q: "Why does a dental cleaning need anesthesia?", a: "Anesthesia lets us clean thoroughly below the gumline (where disease hides), take X-rays and treat painful teeth safely and without stress — things that simply aren't possible on an awake pet." },
      { q: "How do I know if my pet has dental disease?", a: "Bad breath, yellow or brown tartar, red or bleeding gums, drooling or reluctance to eat are common signs. Because pets hide pain well, a professional exam is the best way to know for sure." },
    ],
  },
  {
    slug: "sick-visits",
    title: "Sick Visits",
    icon: "Thermometer",
    summary:
      "Prompt visits for coughing, vomiting, diarrhea, lethargy and other unusual symptoms — with diagnosis and a clear treatment plan.",
    intro: [
      "Not every problem is an emergency, but a pet who's “just not themselves” still deserves prompt attention. If your dog or cat is coughing, vomiting, off their food, drinking more than usual, limping or simply low-energy, a sick visit gets to the bottom of it quickly.",
      "We'll take a careful history, examine your pet, and use in-house diagnostics when needed to reach a diagnosis and start a clear treatment plan the same day — so your companion feels better, faster.",
    ],
    details: [
      "Prompt appointments for new symptoms",
      "Thorough exam and history",
      "In-house testing for fast answers",
      "Clear diagnosis and treatment plan",
      "Follow-up guidance",
    ],
    whatToExpect:
      "Tell us what you've noticed — even small changes help. Your veterinarian examines your pet, may run in-house diagnostics, and explains the likely cause and a treatment plan the same day. If a symptom points to something urgent, we act quickly.",
    faqs: [
      { q: "When should a symptom become a sick visit?", a: "If your pet is vomiting, has diarrhea, is coughing, limping, off their food, drinking more than usual or simply not themselves for more than a day, book a sick visit. Sudden or severe symptoms should be treated as an emergency — call us right away." },
      { q: "Can you see my pet the same day?", a: "We keep room for prompt sick visits and same-day urgent care during open hours. Call (718) 301-4030 and we'll get your pet in as soon as possible." },
    ],
  },
  {
    slug: "health-certificates",
    title: "Health Certificates",
    icon: "PlaneTakeoff",
    summary:
      "Complete domestic and international health certificates so you and your pet are ready to travel with confidence.",
    intro: [
      "Traveling with your pet takes more than a carrier — most destinations require an official health certificate confirming your pet is healthy and up to date. Union Vet completes both domestic and international certificates so you can travel with confidence.",
      "Requirements and timelines vary widely by airline and destination country, and some involve specific tests, treatments or paperwork windows. Contact us well ahead of your trip and we'll walk you through exactly what's needed and when.",
    ],
    details: [
      "Domestic (interstate) health certificates",
      "International travel certificates",
      "Airline and destination requirement guidance",
      "Timely exams and documentation",
      "Up-to-date rabies and records",
    ],
    whatToExpect:
      "We examine your pet, confirm vaccines and any required tests are in order, and complete the certificate for your destination. Because timelines are strict, we'll tell you exactly what's needed and when — so it's best to start early.",
    faqs: [
      { q: "How far in advance should I book a travel certificate?", a: "As early as possible. International destinations often require specific tests, treatments or paperwork within set time windows before travel, and some take weeks. Contact us as soon as you know your travel dates." },
      { q: "Do all destinations have the same requirements?", a: "No — requirements vary widely by airline and destination country. We'll help you confirm exactly what your specific trip requires." },
    ],
  },
  {
    slug: "nutritional-counseling",
    title: "Nutritional Counseling",
    icon: "Apple",
    summary:
      "Diet and nutrition guidance with a selection of Hill's and Royal Canin prescription foods tailored to your pet's needs.",
    intro: [
      "The right diet is one of the most powerful tools for a longer, healthier life — and one of the most confusing to navigate on your own. Our team cuts through the noise with practical, personalized nutrition guidance for every life stage.",
      "Whether you're feeding a growing puppy, managing your pet's weight, or supporting a medical condition, we'll recommend a plan that fits. We proudly offer a great selection of Hill's and Royal Canin prescription diets and supplements tailored to your pet's needs.",
    ],
    details: [
      "Life-stage and weight-management plans",
      "Therapeutic and prescription diets",
      "Hill's and Royal Canin selection",
      "Supplement guidance",
      "Feeding plans for medical conditions",
    ],
    whatToExpect:
      "We look at your pet's age, weight, activity and any medical conditions, then recommend a realistic feeding plan and, where helpful, a therapeutic diet. You'll leave with clear portions and product suggestions rather than guesswork.",
    faqs: [
      { q: "How do I know if my pet is overweight?", a: "You should be able to feel (not see) the ribs and notice a visible waist from above. We can assess your pet's body condition at any visit and build a safe weight plan if needed." },
      { q: "Do you sell prescription diets?", a: "Yes — we offer a selection of Hill's and Royal Canin prescription foods and supplements, and you can reorder through our online pharmacy for home delivery." },
    ],
  },
  {
    slug: "microchipping",
    title: "Microchipping",
    icon: "ScanLine",
    summary:
      "A quick, permanent form of identification that dramatically improves the odds of a lost pet finding their way home.",
    intro: [
      "Collars and tags can slip off — a microchip can't. This tiny, permanent form of identification is the single best way to be reunited with a lost pet, and placing one takes just seconds during a routine visit.",
      "About the size of a grain of rice, the chip is inserted under the skin much like a vaccine. If your pet is ever found, a quick scan at any clinic or shelter links to your contact details — so we'll register it and help you keep that information current.",
    ],
    details: [
      "Quick, routine placement",
      "Permanent, tamper-proof identification",
      "Registration with your contact details",
      "Help keeping your details up to date",
      "Dramatically better odds of a reunion",
    ],
    whatToExpect:
      "Placing a microchip takes only a moment and feels much like a routine vaccine — no anesthesia needed. We register the chip with your contact details and show you how to keep that information current if you move or change your number.",
    faqs: [
      { q: "Does microchipping hurt?", a: "Only briefly — it's placed with a needle much like a vaccination, and most pets barely notice. No anesthesia or surgery is required." },
      { q: "Does a microchip track my pet's location?", a: "No, it isn't a GPS tracker. It's a permanent ID: if your lost pet is found and scanned at any clinic or shelter, the chip links to your registered contact information." },
    ],
  },
  {
    slug: "senior-pet-care",
    title: "Senior Pet Care",
    icon: "Heart",
    summary:
      "Tailored screening and comfort-focused care that keeps older pets thriving through their golden years.",
    intro: [
      "Pets age faster than we do, and their needs change along the way. Senior care is about staying ahead of that change — catching age-related conditions like arthritis, kidney disease and dental problems early, while keeping your companion comfortable and thriving.",
      "For our older patients we recommend more frequent checkups and tailored screening, from bloodwork to blood-pressure and mobility assessments. Small adjustments to diet, pain management and home care can add healthy, happy years.",
    ],
    details: [
      "Senior wellness exams",
      "Age-appropriate bloodwork and screening",
      "Arthritis and mobility support",
      "Comfort and pain management",
      "Diet and quality-of-life guidance",
    ],
    whatToExpect:
      "Senior visits go a little deeper — alongside the physical exam we often recommend bloodwork, blood-pressure and mobility checks to catch age-related changes early. We'll suggest small adjustments to diet, comfort and pain management to keep your companion feeling their best.",
    faqs: [
      { q: "When is my pet considered a senior?", a: "Most dogs and cats are considered senior around age 7, though it varies by size and breed — larger dogs age sooner. We can tell you where your pet is in their life stage." },
      { q: "How often should a senior pet be checked?", a: "Twice-yearly exams are ideal for seniors, since a lot can change in six months at their age. More frequent screening helps us catch and manage conditions early." },
    ],
  },
  {
    slug: "in-house-lab",
    title: "In-House Laboratory",
    icon: "FlaskConical",
    summary:
      "Blood counts, serum chemistry and disease-specific testing run in-house so we can act on results the same day.",
    intro: [
      "Waiting days for lab results can mean waiting days to feel reassured — or to start treatment. Our in-house laboratory runs the tests that matter most right here, so we can often diagnose and act during a single visit.",
      "From complete blood counts and organ-function panels to tests for specific diseases and pre-anesthetic screening, on-site diagnostics give us fast, reliable answers when time counts most.",
    ],
    details: [
      "Complete blood count (CBC)",
      "Serum chemistry and organ panels",
      "Disease-specific testing",
      "Pre-anesthetic screening",
      "Same-visit results",
    ],
    whatToExpect:
      "When your pet needs testing, samples are processed right here rather than shipped out. That means we can often review results with you during the same visit and move straight to a plan, instead of waiting days for answers.",
    faqs: [
      { q: "What tests can you run in-house?", a: "We run complete blood counts, organ-function and serum chemistry panels, tests for specific diseases, and pre-anesthetic screening — the diagnostics that most often guide same-day decisions." },
      { q: "Why does in-house testing matter?", a: "Speed. Getting results during your visit means faster diagnosis and treatment, which is especially important for sick pets and emergencies." },
    ],
  },
];

/** The nose-to-tail wellness exam checklist (from the Wellness Care service). */
export const WELLNESS_CHECKLIST: string[] = [
  "Examining the teeth, throat and oral cavity",
  "Checking vision and eyes",
  "Examining ears for infection, mites and allergies",
  "Assessing heart and cardiac function",
  "Examining the skin and coat",
  "Palpating lymph nodes and abdomen",
  "Examining the respiratory system",
  "Evaluating internal organ function",
  "Monitoring blood count and serum chemistry",
  "Laboratory tests for specific diseases",
  "Reviewing health changes since the last visit",
  "Fecal check for intestinal parasites",
];

/** Signs that warrant emergency care (from the Emergency Care section). */
export const EMERGENCY_SIGNS: string[] = [
  "Difficulty breathing",
  "Acute abdominal swelling",
  "Electric shock",
  "Excessive vomiting or diarrhea",
  "Bleeding that won't stop",
  "Symptoms of heat stroke",
  "Seizures",
  "Sudden onset of weakness",
  "Temperature over 104° or under 100°",
  "Unable to urinate or defecate",
];

/* ------------------------------------------------------------------ */
/* About — values, differentiators, team                              */
/* ------------------------------------------------------------------ */

export const VALUES: ValueItem[] = [
  {
    key: "love",
    title: "We LOVE pets",
    body: "We prioritize strengthening the bond between people and their pets with warmth and positivity in every visit.",
    icon: "Heart",
  },
  {
    key: "team",
    title: "We're a TEAM",
    body: "We collaborate closely to run an efficient clinic and create a better veterinary experience for you and your pet.",
    icon: "Users",
  },
  {
    key: "talk",
    title: "We'll TALK",
    body: "We speak openly, follow through on our commitments, and maintain transparency and honesty throughout care.",
    icon: "MessageSquare",
  },
  {
    key: "positive",
    title: "We are POSITIVE",
    body: "Our staff brings compassionate, steady energy — even during the most challenging cases.",
    icon: "Sun",
  },
  {
    key: "ideas",
    title: "We'll give IDEAS",
    body: "We encourage innovation in pet care, pioneering better urgent-care solutions for our community.",
    icon: "Lightbulb",
  },
];

export const WHY_CHOOSE_US: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Quality Veterinary Medicine",
    body: "Compassionate, high-quality care from a team dedicated to keeping your pet healthy at every life stage.",
    icon: "BadgeCheck",
  },
  {
    title: "State-of-the-Art Hospital",
    body: "Advanced radiology, ultrasound and an in-house laboratory for fast, accurate diagnostics under one roof.",
    icon: "Building2",
  },
  {
    title: "Convenient Location",
    body: "Right on Union Turnpike in Oakland Gardens, Queens, and open late until 8 PM on weekdays.",
    icon: "MapPin",
  },
  {
    title: "Transparent & Affordable Pricing",
    body: "Honest recommendations and clear pricing, so you can make informed decisions for your pet with confidence.",
    icon: "ReceiptText",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Lara Cabugawan",
    role: "Veterinarian & Surgeon",
    bio: "Dr. Lara Cabugawan is known for her precision and calm, methodical approach to veterinary care. She performs each procedure—whether a routine exam or a complex diagnostic—with exceptional attention to detail, ensuring accuracy and patient comfort. Dr. Cabugawan prioritizes clear communication, explaining findings and treatment options thoroughly to pet owners while maintaining a gentle, compassionate touch with every animal she handles.",
    image: "/images/dr-lara-cabugawan.jpg",
  },
  {
    name: "Dr. Ramy Sharkawy",
    role: "Surgeon/Veterinarian",
    tagline: "20+ Years of Experience in Veterinary Medicine & Surgery",
    bio: "Dr. Ramy Sharkawy, known as Dr. Shark, is a dedicated veterinarian with deep expertise in internal medicine, surgery, and advanced imaging. He is known for his precision, compassion, and commitment to delivering the highest standard of veterinary care. Dr. Shark approaches every case with focus and integrity, ensuring each patient receives thorough and personalized treatment.",
    image: "/images/dr-ramy-sharkawy.webp",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "David G.",
    source: "Google Review",
    rating: 5,
    quote:
      "Everyone was very professional and friendly! All my concerns were addressed and my Bear was treated very well. They cleaned his ears out for me and by the next day he was obviously feeling much better from his ear infection.",
  },
  {
    name: "Kathy B.",
    source: "Google Review",
    rating: 5,
    quote:
      "Our dog Bella recently had surgery. We went in for a follow-up and the surgeon was TREMENDOUS — taking his time to explain how the surgery went and what would be involved with the recovery.",
  },
  {
    name: "Jennifer B.",
    source: "Google Review",
    rating: 5,
    quote:
      "I will never forget the day I was out of town and the people of Queens and the hospital saved my sweet Gizmo after he had been lost by a friend watching him.",
  },
  {
    name: "Ashley Y.",
    source: "Google Review",
    rating: 5,
    quote:
      "This vet is amazing — my fiancé and I take our pitbull here. They are so amazing, never had an issue with wait time. Their care is very good and they have our baby feeling good.",
  },
];

/* ------------------------------------------------------------------ */
/* Blog — latest 5 posts                                              */
/* ------------------------------------------------------------------ */

export { POSTS, getPost } from "./posts";

/* ------------------------------------------------------------------ */
/* FAQs — written in Union Vet's voice from real practice info         */
/* ------------------------------------------------------------------ */

export const FAQS: Faq[] = [
  {
    question: "Do you offer same-day and emergency appointments?",
    answer:
      "Yes. As your local emergency vet in Oakland Gardens, Queens, we provide fast same-day care for urgent injuries and illnesses during our open hours. Union Vet is a full-service animal hospital rather than a 24-hour emergency facility, so if something feels serious and can't wait, call us right away at (718) 301-4030 and our team will advise you on the next step — whether that's coming straight in or heading to the nearest 24-hour emergency hospital. For anything sudden — trouble breathing, uncontrolled bleeding, seizures, repeated vomiting, or a pet that can't stand or urinate — treat it as an emergency and phone ahead so we can prepare for your arrival.",
  },
  {
    question: "What are your hours?",
    answer:
      "We're open Monday through Friday from 8 AM to 8 PM and Saturday from 8 AM to 4 PM, and we're closed on Sundays. Staying open until 8 PM on weekdays means we're here after most work and school schedules, so you don't have to take time off for a routine visit or wait until the next day for an urgent concern. Same-day and urgent appointments are handled during these posted hours; for a true emergency outside of them, call (718) 301-4030 for guidance or contact the nearest 24-hour emergency animal hospital. We proudly serve Oakland Gardens, Bayside, Fresh Meadows, Queens Village and the wider Queens area.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "The fastest way is to use our online booking, which opens our secure scheduling portal where you can pick a time that works for you. You can also call or text us at (718) 301-4030 and a team member will help you find the right appointment.",
  },
  {
    question: "When should I take my pet to the emergency room?",
    answer:
      "Seek emergency care whenever you feel your pet's condition is serious and can't wait — trust your instincts. Call us right away if you notice difficulty breathing, excessive or repeated vomiting or diarrhea, bleeding that won't stop, seizures, a sudden onset of weakness or collapse, an inability to urinate or defecate, acute abdominal swelling, a suspected broken bone, ingestion of something toxic, signs of heat stroke, or a body temperature over 104°F or under 100°F. When in doubt, phone (718) 301-4030 before you leave home so our team can advise you and prepare for your arrival. Acting quickly gives your pet the best possible outcome.",
  },
  {
    question: "What pets do you treat?",
    answer:
      "We care for dogs and cats of every age and stage — from brand-new puppies and kittens to cherished senior pets. Our services span wellness, vaccinations, dental care, diagnostics, surgery and emergency treatment.",
  },
  {
    question: "Do you see new patients?",
    answer:
      "Absolutely. We love welcoming new pets and their families. New puppy and kitten visits include a full physical exam, vaccinations, parasite prevention and a personalized health plan to start life off on the right paw.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring any prior medical or vaccination records, a list of current medications or supplements, and details about your pet's diet and behavior. If your pet is on a special food, note the brand — it helps us build the best plan for them.",
  },
  {
    question: "Do you provide health certificates for travel?",
    answer:
      "Yes. We complete both domestic and international health certificates so you and your pet are ready to travel. Because requirements and timelines vary by destination, contact us well ahead of your trip so we can prepare the right paperwork.",
  },
  {
    question: "How do I refill my pet's medication or food?",
    answer:
      "You can order prescription medications, preventives and prescription diets through our Online Pharmacy, with delivery straight to your door. If you're unsure what your pet needs, give us a call and we'll help.",
  },
  {
    question: "Where are you located and is there parking?",
    answer:
      "We're located at 222-10 Union Turnpike in Oakland Gardens, NY 11364, easy to reach from Bayside, Fresh Meadows, Queens Village and the wider Queens area. You'll find us convenient whether you're arriving by car or public transit, and our modern hospital is set up to keep wait times short. We're open Monday–Friday 8 AM–8 PM and Saturday 8 AM–4 PM. If you'd like directions or have any trouble finding us, call (718) 301-4030 and we'll be glad to help.",
  },
];
