import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    name: 'Karim Bennani',
    role: 'Directeur Général',
    company: 'Atlas Capital Advisors (Casablanca Finance City)',
    city: 'Casablanca',
    quote: {
      fr: 'Pour nos chemises à rabat de présentation et nos dossiers d’appels d’offres, PIXORA est d’une rigueur irréprochable. Le pelliculage Soft-Touch et la dorure à chaud donnent un prestige immédiat à nos rendez-vous avec les investisseurs.',
      ar: 'بالنسبة لملفات العروض والمناقصات الاستثمارية، أظهرت بيكسورا دقة فائقة واحترافية استثنائية. السلفنة المخملية والتذهيب الحراري أضفيا وقاراً لا يضاهى على اجتماعاتنا المالية.',
      en: 'For our board presentation folders and investment pitch kits, PIXORA demonstrates unmatched rigor. The soft-touch lamination and gold foil add immediate authority to our institutional decks.',
    },
    metric: '48h',
    metricLabel: {
      fr: 'Délai respecté avant closing',
      ar: 'إنجاز قياسي قبل موعد الصفقة',
      en: 'Turnaround before deal closing',
    },
  },
  {
    name: 'Sanaa El Fassi',
    role: 'Fondatrice & Directrice Artistique',
    company: 'Botanica Pure Care (DNVB Beauté & Cosmétique)',
    city: 'Casablanca & Rabat',
    quote: {
      fr: 'Nous expédions plus de 2 500 colis e-commerce par mois. Les boîtes en carton kraft sur mesure produites par PIXORA ont transformé l’expérience unboxing de nos clientes et réduit nos retours de 35%.',
      ar: 'نشحن شهرياً أكثر من 2500 طرد لعلامتنا في التجميل. الصناديق الكرتونية المخصصة من بيكسورا غيرت كلياً تجربة فتح الصندوق لدى عميلاتنا وخفضت شكاوى الشحن بنسبة 35%.',
      en: 'We ship 2,500+ e-commerce parcels monthly. PIXORA’s custom kraft corrugated mailer boxes transformed our customer unboxing and cut transit damage by 35%.',
    },
    metric: '+35%',
    metricLabel: {
      fr: 'Satisfaction unboxing & fidélité',
      ar: 'ارتفاع رضا وتفاعل الزبناء',
      en: 'Unboxing CSAT & retention rate',
    },
  },
  {
    name: 'Youssef Mansouri',
    role: 'Head of Marketing',
    company: 'PayFlow Africa (Tech FinTech Casablanca)',
    city: 'Casablanca Technopark',
    quote: {
      fr: 'Le configurateur et le devis instantané nous font gagner un temps fou. Lors de notre dernier salon Gitex Africa, nos roll-ups et 10 000 flyers ont été livrés en avance avec une chromie éclatante.',
      ar: 'محاكي الأسعار الفوري يوفر علينا وقتاً ثميناً. في مشاركتنا الأخيرة بمعرض جيتكس إفريقيا، تم تسليم حوامل الرول أب و10 آلاف مطوية قبل الموعد وبألوان متطابقة تماماً مع هويتنا.',
      en: 'The online instant estimator saves our team tremendous hours. For our Gitex Africa booth, our roll-ups and 10,000 flyers were delivered ahead of schedule with immaculate color fidelity.',
    },
    metric: '10 000',
    metricLabel: {
      fr: 'Flyers distribués sans défaut',
      ar: 'مطوية طبعت بأعلى جودة',
      en: 'Flyers delivered zero defects',
    },
  },
];
