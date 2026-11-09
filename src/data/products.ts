import { ProductPillar } from '../types';

export const products: ProductPillar[] = [
  {
    id: 'chemises-rabat',
    slug: 'chemise-a-rabat-personnalisee-casablanca',
    category: 'corporate',
    title: {
      fr: 'Chemise à Rabat Personnalisée',
      ar: 'حافظات ملفات مخصصة بجيوب',
      en: 'Custom Presentation Pocket Folders',
    },
    subtitle: {
      fr: 'Porte-documents corporate A4 avec 2 ou 3 volets, encoche carte de visite et pelliculage soyeux.',
      ar: 'حافظات أوراق رسمية مقاس A4 بجيوب داخلية ومكان مخصص لبطاقة العمل وسلفنة فاخرة.',
      en: 'Premium A4 corporate folders with 2 or 3 panels, business card slit, and silky lamination.',
    },
    badge: {
      fr: 'Best-Seller B2B',
      ar: 'الأكثر طلباً للشركات',
      en: 'Top B2B Choice',
    },
    image: '/images/chemise-a-rabat-personnalisee.jpg',
    basePriceMAD: 4.80,
    minQuantity: 100,
    standardTurnaroundDays: 4,
    expressTurnaroundHours: 36,
    formats: [
      { id: 'a4-simple', label: 'A4 Simple (2 volets - dos 5mm)', dimensions: '21.5 x 30.5 cm fermé' },
      { id: 'a4-triple', label: 'A4 Triple (3 volets - dos 7mm)', dimensions: '21.5 x 30.5 cm fermé' },
      { id: 'a5-corporate', label: 'A5 Compact (2 volets)', dimensions: '15.5 x 22 cm fermé' },
    ],
    papers: [
      { id: 'couche-350', name: 'Couché Mat Rigide', weight: '350g/m²', description: { fr: 'Standard haut de gamme B2B, excellente tenue en main', ar: 'المعيار القياسي للشركات، صلابة ممتازة', en: 'High-grade corporate standard, solid stiffness' }, factor: 1.0 },
      { id: 'couche-400', name: 'Couché Extra Rigide', weight: '400g/m²', description: { fr: 'Épaisseur maximale pour dossiers d’appels d’offres et contrats', ar: 'سمك مضاعف لملفات المناقصات والعقود الرسمية', en: 'Maximum weight for tender dossiers and executive agreements' }, factor: 1.25 },
      { id: 'bristol-kraft', name: 'Kraft Brun Naturel', weight: '300g/m²', description: { fr: 'Style éco-responsable et chaleureux', ar: 'طابع بيئي كرافت طبيعي وأنيق', en: 'Eco-conscious authentic natural kraft look' }, factor: 1.15 },
    ],
    finishes: [
      { id: 'mat', name: { fr: 'Pelliculage Mat Soft-Touch', ar: 'سلفنة ملمس الحرير المطفي', en: 'Matte Soft-Touch Lamination' }, extraCostPerUnit: 0.90, description: { fr: 'Toucher velours résistant aux traces de doigts', ar: 'ملمس ناعم مقاوم للخدوش وبصمات الأصابع', en: 'Velvety touch with fingerprint resistance' } },
      { id: 'vernis-3d', name: { fr: 'Vernis Sélectif UV 3D', ar: 'ورنيش موضعي ثلاثي الأبعاد بارز', en: 'Raised 3D Spot UV' }, extraCostPerUnit: 1.40, description: { fr: 'Brillance et relief tactile sur votre logo', ar: 'بريق ولمعان بارز ومحسوس على الشعار', en: 'High-gloss embossed tactile relief on your logo' } },
      { id: 'dorure', name: { fr: 'Dorure à Chaud (Or / Argent)', ar: 'تذهيب حراري فاخر (ذهبي / فضي)', en: 'Hot Foil Stamping (Gold / Silver)' }, extraCostPerUnit: 1.80, description: { fr: 'Élégance ultime pour l’immobilier et le luxe', ar: 'أناقة استثنائية لمشاريع العقار والرفاهية', en: 'Ultimate luxury shine for real estate and executive branding' } },
    ],
    description: {
      fr: 'Indispensable pour vos rendez-vous commerciaux, propositions financières et salons professionnels à Casablanca. Fabriquées en carton couché de 350g ou 400g avec découpe sur mesure pour insérer vos cartes de visite.',
      ar: 'عنصر أساسي لاجتماعات العمل، العروض المالية والمعارض الدولية بالدار البيضاء. تصنع من ورق مقوى 350غ أو 400غ مع شق دقيق لإدراج بطاقة عملك.',
      en: 'Essential for client pitch meetings, contracts, and exhibitions. Die-cut with precision card slots on 350g or 400g premium artboard with custom finishes.',
    },
    features: {
      fr: [
        'Rainage machine haute précision évitant toute cassure de fibre',
        'Fente pour carte de visite horizontale ou verticale incluse',
        'Contrôle prépresse du gabarit et BAT numérique certifié offert',
        'Livraison directe sous 48h sur le Grand Casablanca',
      ],
      ar: [
        'تجعيد آلي عالي الدقة يمنع تمزق أطراف الورق',
        'فتحة مخصصة لبطاقة العمل أفقية أو عمودية',
        'مراجعة تقنية وتأكيد بروفة الطباعة الرقمية مجاناً',
        'توصيل سريع خلال 48 ساعة لكافة مناطق الدار البيضاء',
      ],
      en: [
        'High-precision creasing preventing spine cracking',
        'Built-in business card slit (horizontal or vertical)',
        'Complimentary prepress dieline check and digital proof',
        'Fast 48h direct delivery across Greater Casablanca',
      ],
    },
    seoKeywords: ['chemise à rabat personnalisée', 'pochette à rabat Casablanca', 'porte-documents entreprise Maroc', 'imprimerie Casablanca'],
    dieline: {
      bleedMm: 3,
      safetyMm: 4,
      recommendedDpi: 300,
      colorSpace: 'CMJN (ISO Coated v2 / Fogra39)',
      fileFormats: ['PDF vectoriel HD (PDF/X-1a)', 'Adobe Illustrator (.ai)', 'Adobe InDesign (.indd)'],
    },
    faqs: [
      {
        question: {
          fr: 'Quelle est la différence entre dos simple et dos 5mm ?',
          ar: 'ما الفرق بين الظهر البسيط والظهر ذو سمك 5 ملم؟',
          en: 'What is the difference between a flat spine and a 5mm spine?',
        },
        answer: {
          fr: 'Le dos simple convient pour insérer 5 à 15 feuilles A4. Le dos de 5mm permet de ranger confortablement jusqu’à 40 feuilles ou un livret complet sans déformation.',
          ar: 'الظهر البسيط مناسب لإدراج 5 إلى 15 ورقة، بينما يتسع الظهر ذو 5 ملم لما يصل إلى 40 ورقة دون أي انحناء.',
          en: 'Flat spine holds 5-15 sheets. The 5mm spine comfortably holds up to 40 sheets or booklets without bulging.',
        },
      },
      {
        question: {
          fr: 'Pouvez-vous imprimer en urgence pour un salon au Maroc ?',
          ar: 'هل يمكنكم إنجاز طلبيات عاجلة لمعارض وملتقيات في المغرب؟',
          en: 'Can you handle urgent rush printing for trade shows in Morocco?',
        },
        answer: {
          fr: 'Oui, nous disposons d’une option Express Casablanca 24-36h grâce à nos presses numériques HP Indigo et nos tables de découpe automatisées.',
          ar: 'نعم، نوفر خدمة الطلب السريع بالدار البيضاء في 24-36 ساعة عبر طابعات HP Indigo الرقمية وقواطع الليزر الحديثة.',
          en: 'Yes, our Casablanca 24-36h express option leverages digital HP Indigo presses and automated die-cutters.',
        },
      },
    ],
  },
  {
    id: 'cartes-visite',
    slug: 'carte-de-visite-professionnelle-casablanca',
    category: 'corporate',
    title: {
      fr: 'Carte de Visite Professionnelle',
      ar: 'بطاقات عمل احترافية فاخرة',
      en: 'Executive Business Cards',
    },
    subtitle: {
      fr: 'Couché mat 400g, Soft-touch, vernis sélectif 3D et dorure à chaud or ou argent.',
      ar: 'ورق مقوى 400غ، سلفنة ناعمة، ورنيش بارز وتذهيب حراري ذهبي أو فضي.',
      en: 'Heavyweight 400g art card, soft-touch, raised 3D spot UV, and hot gold foil.',
    },
    badge: {
      fr: 'Qualité Prestige',
      ar: 'جودة فاخرة',
      en: 'Prestige Quality',
    },
    image: '/images/carte-de-visite-professionnelle.jpg',
    basePriceMAD: 0.45,
    minQuantity: 250,
    standardTurnaroundDays: 3,
    expressTurnaroundHours: 24,
    formats: [
      { id: 'standard-eu', label: 'Format Standard (85 x 55 mm)', dimensions: '8.5 x 5.5 cm' },
      { id: 'standard-us', label: 'Format International (90 x 50 mm)', dimensions: '9.0 x 5.0 cm' },
      { id: 'carre-moderne', label: 'Format Carré Moderne (65 x 65 mm)', dimensions: '6.5 x 6.5 cm' },
    ],
    papers: [
      { id: 'couche-400-mat', name: 'Couché Mat 400g/m²', weight: '400g/m²', description: { fr: 'Rigidité exceptionnelle et toucher soyeux', ar: 'سمك ممتاز وملمس حريري فائق الأناقة', en: 'Substantial rigid hand-feel and silky finish' }, factor: 1.0 },
      { id: 'cotton-textur', name: 'Papier Coton Création 450g', weight: '450g/m²', description: { fr: 'Texture fibreuse noble et naturelle', ar: 'ورق قطني طبيعي بنسيج نبيل راقٍ', en: 'Fibrous natural cotton texture for heritage luxury' }, factor: 1.6 },
      { id: 'kraft-dense', name: 'Kraft Naturel Brut 350g', weight: '350g/m²', description: { fr: 'Authentique, éco-conçu et robuste', ar: 'كرافت خام بيئي مستدام وقوي', en: 'Authentic eco-friendly rugged brown kraft' }, factor: 1.2 },
    ],
    finishes: [
      { id: 'mat-recto-verso', name: { fr: 'Pelliculage Mat R/V', ar: 'سلفنة مطفية للوجهين', en: 'Matte Lamination Double-Sided' }, extraCostPerUnit: 0.15, description: { fr: 'Protection élégante et anti-rayures', ar: 'حماية أنيقة مقاومة للخدوش', en: 'Crisp protection on both sides' } },
      { id: 'vernis-3d', name: { fr: 'Vernis Sélectif 3D + Soft-Touch', ar: 'ورنيش ثلاثي الأبعاد مع سلفنة مخملية', en: '3D Spot UV + Soft-Touch' }, extraCostPerUnit: 0.40, description: { fr: 'Relief tactile saisissant sur votre logo', ar: 'بروز ملموس مذهل للشعار والعناصر المهمة', en: 'Striking raised tactile relief on key elements' } },
      { id: 'dorure-chaud', name: { fr: 'Dorure à Chaud Or Métallisé', ar: 'تذهيب حراري ذهبي معدني', en: 'Metallic Gold Foil Stamping' }, extraCostPerUnit: 0.55, description: { fr: 'Reflets dorés luxueux pressés à chaud', ar: 'انعكاسات ذهبية براقة مضغوطة بالحرارة', en: 'Gleaming metallic gold hot-pressed accents' } },
    ],
    description: {
      fr: 'La première impression de votre entreprise. Impression quadrichromie haute résolution 2400 DPI sur carton rigide 400g avec découpe à bords nets.',
      ar: 'الانطباع الأول لعلامتك التجارية. طباعة رباعية الألوان بدقة 2400 DPI على ورق سميك 400غ مع زوايا وقص فائق النقاء.',
      en: 'The definitive first impression for your business. Ultra-sharp 2400 DPI CMYK printing on 400g rigid cardstock with micro-precise edge trims.',
    },
    features: {
      fr: ['Rigidité supérieure 400g/m²', 'Angles droits ou coins arrondis (rayon 4mm)', 'Vérification gratuite des marges et du texte', 'Emballage en boîtes distributrices rigides'],
      ar: ['سمك وصلابة استثنائية 400غ', 'زوايا قائمة كلاسيكية أو دائرية ملساء', 'مراجعة مجانية لنقاء النصوص والهوامش', 'تغليف أنيق في علب بلاستيكية واقية'],
      en: ['Superior rigid 400g/m² stock', 'Square or smooth rounded corners (4mm)', 'Free pre-flight review of fonts & safe zones', 'Packaged in durable protective presentation boxes'],
    },
    seoKeywords: ['carte de visite professionnelle Casablanca', 'carte de visite dorure Maroc', 'impression cartes visite luxe', 'vernis sélectif 3D'],
    dieline: {
      bleedMm: 2,
      safetyMm: 3,
      recommendedDpi: 300,
      colorSpace: 'CMJN (Fogra39)',
      fileFormats: ['PDF HD vectorisé', 'AI', 'PSD'],
    },
    faqs: [
      {
        question: {
          fr: 'Le vernis sélectif peut-il être appliqué sur du texte très fin ?',
          ar: 'هل يمكن تطبيق الورنيش البارز على نصوص دقيقة جداً؟',
          en: 'Can spot UV be applied to fine micro-typography?',
        },
        answer: {
          fr: 'Pour un résultat impeccable, nous recommandons une épaisseur minimale de filet de 0,5 pt (0,18 mm) pour le vernis 3D.',
          ar: 'للحصول على نتيجة مثالية، نوصي بسمك خط لا يقل عن 0.5 نقطة للورنيش البارز.',
          en: 'For optimal tactile registration, we recommend a minimum line stroke of 0.5 pt for 3D UV elements.',
        },
      },
    ],
  },
  {
    id: 'boites-carton',
    slug: 'packaging-personnalise-boites-carton-maroc',
    category: 'packaging',
    title: {
      fr: 'Packaging & Boîtes en Carton Sur Mesure',
      ar: 'علب كرتونية مخصصة وتغليف التجارة الإلكترونية',
      en: 'Custom Packaging & Mailer Boxes',
    },
    subtitle: {
      fr: 'Boîtes postales e-commerce, étuis pliants et emballages sur mesure en micro-cannelure FSC.',
      ar: 'صناديق شحن بريدية، علب هدايا وتغليف كرتوني مضلع معتمد بيئياً للعلامات التجارية.',
      en: 'E-commerce shipping mailers, folding cartons, and FSC-certified corrugated boxes.',
    },
    badge: {
      fr: 'Essor E-Commerce',
      ar: 'رائد للتجارة الإلكترونية',
      en: 'E-Commerce Growth',
    },
    image: '/images/boite-carton-packaging-maroc.jpg',
    basePriceMAD: 6.20,
    minQuantity: 100,
    standardTurnaroundDays: 6,
    expressTurnaroundHours: 48,
    formats: [
      { id: 'box-small', label: 'Petite Boîte Expédition (20 x 14 x 7 cm)', dimensions: '20 x 14 x 7 cm' },
      { id: 'box-medium', label: 'Moyenne Boîte E-commerce (28 x 20 x 10 cm)', dimensions: '28 x 20 x 10 cm' },
      { id: 'box-large', label: 'Grande Boîte Prêt-à-Porter (38 x 26 x 12 cm)', dimensions: '38 x 26 x 12 cm' },
      { id: 'box-custom', label: 'Dimensions Sur Mesure (Gabarit dédié)', dimensions: 'Selon vos produits' },
    ],
    papers: [
      { id: 'cannelure-kraft', name: 'Micro-cannelure Kraft Brun Naturel', weight: '1.5mm cannelure E', description: { fr: 'Résistance aux chocs d’expédition et esthétique brute', ar: 'مقاومة عالية لصدمات الشحن مع مظهر كرافت طبيعي', en: 'Rugged shipping impact resistance and organic look' }, factor: 1.0 },
      { id: 'cannelure-blanc', name: 'Micro-cannelure Blanche Pure', weight: '1.5mm cannelure E', description: { fr: 'Rendu éclatant des couleurs et design épuré', ar: 'لون أبيض ناصع يعكس درجات ألوان التصميم بأعلى دقة', en: 'Crisp white substrate for vibrant edge-to-edge color' }, factor: 1.18 },
      { id: 'carton-rigide-compact', name: 'Carton Pliant GC1 / GC2', weight: '350g/m²', description: { fr: 'Parfait pour cosmétiques, parfumerie et compléments', ar: 'مثالي لمستحضرات التجميل والعطور والمنتجات الخفيفة', en: 'Ideal for cosmetics, beauty, and retail gift items' }, factor: 0.9 },
    ],
    finishes: [
      { id: 'print-exterieur', name: { fr: 'Impression Extérieure Quadrichromie', ar: 'طباعة خارجية ملونة كاملة', en: 'Exterior Full-Color Print' }, extraCostPerUnit: 0.0, description: { fr: 'Impression recto complet haute résolution', ar: 'طباعة خارجية واضحة بجودة صناعية', en: 'Full-bleed outer graphic coverage' } },
      { id: 'print-int-ext', name: { fr: 'Impression Intérieure & Extérieure', ar: 'طباعة داخلية وخارجية مزدوجة', en: 'Double-Sided Interior & Exterior Print' }, extraCostPerUnit: 2.10, description: { fr: 'Expérience d’unboxing mémorable avec message intérieur', ar: 'تجربة فتح فريدة (Unboxing) مع عبارات ترحيبية بالداخل', en: 'Memorable unboxing experience with branded inner reveal' } },
      { id: 'pelliculage-soft', name: { fr: 'Pelliculage Mat + Vernis Sélectif', ar: 'سلفنة مطفية مع ورنيش موضعي', en: 'Matte Lamination + Spot Gloss' }, extraCostPerUnit: 1.80, description: { fr: 'Protection anti-abrasion et brillance sur logo', ar: 'حماية من الاحتكاك ولمعان فاخر للشعار', en: 'Abrasion protection with glossy focal branding' } },
    ],
    description: {
      fr: 'Boostez le taux de fidélisation de vos clients grâce à un packaging sur mesure fabriqué localement à Casablanca. Découpe ultra-précise, fermeture à pattes rentrantes ou rabat adhésif.',
      ar: 'ارتقِ بصورة علامتك التجارية مع حلول تغليب مبتكرة تصنع بالكامل في الدار البيضاء. قص دقيق، قفل ذاتي ذكي ومقاومة عالية لظروف الشحن.',
      en: 'Amplify customer loyalty with bespoke packaging manufactured locally in Casablanca. Engineered for effortless assembly and resilient e-commerce dispatch.',
    },
    features: {
      fr: [
        'Carton ondulé éco-responsable certifié 100% recyclable',
        'Montage rapide en 15 secondes sans ruban adhésif',
        'Fabrication directe sans intermédiaire à Casablanca',
        'Fourniture de prototypes physiques et gabarits 3D',
      ],
      ar: [
        'كرتون مضلع بيئي قابل للتدوير بنسبة 100%',
        'تركيب سريع في 15 ثانية دون الحاجة لشريط لاصق',
        'تصنيع مباشر من المصنع بالدار البيضاء بأفضل سعر',
        'توفير نماذج تجريبية ثلاثية الأبعاد قبل الإنتاج الكامل',
      ],
      en: [
        '100% recyclable eco-certified corrugated board',
        'Snappy 15-second assembly without exterior tape',
        'Direct manufacturing in Casablanca eliminating middlemen',
        'Physical mockup prototyping & 3D dieline support',
      ],
    },
    seoKeywords: ['packaging personnalisé Maroc', 'boîtes en carton sur mesure Casablanca', 'boîte e-commerce Maroc', 'imprimerie packaging'],
    dieline: {
      bleedMm: 5,
      safetyMm: 6,
      recommendedDpi: 300,
      colorSpace: 'CMJN Fogra39',
      fileFormats: ['AI vectoriel avec calque Dieline / CutContour', 'PDF/X-4'],
    },
    faqs: [
      {
        question: {
          fr: 'Puis-je commander des dimensions personnalisées pour mes flacons ou vêtements ?',
          ar: 'هل يمكن طلب مقاسات مخصصة تماماً لمنتجاتي أو ملابسي؟',
          en: 'Can I request bespoke custom dimensions for my specific jars or garments?',
        },
        answer: {
          fr: 'Absolument. Notre bureau d’études PAO à Casablanca conçoit l’outillage de découpe sur mesure adapté au millimètre près à vos produits.',
          ar: 'بالتأكيد. يصمم مكتبنا الفني بالدار البيضاء قوالب تقطيع مخصصة بالسنتيمتر لتناسب منتجاتكم بدقة متناهية.',
          en: 'Absolutely. Our prepress engineering team in Casablanca creates custom cutting dies matching your exact product dimensions.',
        },
      },
    ],
  },
  {
    id: 'flyers-depliants',
    slug: 'impression-flyer-casablanca-depliants',
    category: 'marketing',
    title: {
      fr: 'Impression Flyer & Dépliants Publicitaires',
      ar: 'فلايرات ومطويات إعلانية احترافية',
      en: 'Promotional Flyers & Folded Leaflets',
    },
    subtitle: {
      fr: 'Flyers A5/A6 et dépliants 2 ou 3 volets imprimés en offset haute vitesse pour vos campagnes à Casablanca.',
      ar: 'منشورات مقاس A5/A6 ومطويات إعلانية مطبوعة بتقنية الأوفست السريعة لحملاتك التسويقية.',
      en: 'A5/A6 leaflets and multi-fold brochures produced on high-speed offset for mass campaigns.',
    },
    badge: {
      fr: 'Volume Express',
      ar: 'أعلى سرعة للكميات',
      en: 'Fast Mass Print',
    },
    image: '/images/flyers-depliants-casablanca.jpg',
    basePriceMAD: 0.18,
    minQuantity: 500,
    standardTurnaroundDays: 2,
    expressTurnaroundHours: 24,
    formats: [
      { id: 'a5-flyer', label: 'Flyer A5 (14.8 x 21 cm)', dimensions: '14.8 x 21 cm' },
      { id: 'a6-flyer', label: 'Flyer A6 Format Poche (10.5 x 14.8 cm)', dimensions: '10.5 x 14.8 cm' },
      { id: 'depliant-3v', label: 'Dépliant 3 volets (6 pages A4 ouvert)', dimensions: '21 x 29.7 cm ouvert' },
      { id: 'depliant-2v', label: 'Dépliant 2 volets (4 pages A4 plié)', dimensions: '21 x 29.7 cm ouvert' },
    ],
    papers: [
      { id: 'couche-135', name: 'Couché Brillant Éco 135g', weight: '135g/m²', description: { fr: 'Idéal pour distribution de masse en boîte aux lettres ou street marketing', ar: 'خيار اقتصادي مثالي للتوزيع الواسع في الشوارع وصناديق البريد', en: 'Economical choice for street marketing & door-to-door distribution' }, factor: 0.8 },
      { id: 'couche-170', name: 'Couché Satiné Semi-Rigide 170g', weight: '170g/m²', description: { fr: 'Équilibre parfait entre souplesse et tenue valorisante', ar: 'توازن رائع بين المتانة والوضوح العالي للصور', en: 'Optimal balance of substance and crisp visual punch' }, factor: 1.0 },
      { id: 'couche-250', name: 'Couché Rigide Premium 250g', weight: '250g/m²', description: { fr: 'Main ferme pour promotions haut de gamme et événements', ar: 'ورق سميك متميز للحملات الراقية والمعارض', en: 'Heavyweight feel for luxury product launches and events' }, factor: 1.35 },
    ],
    finishes: [
      { id: 'vernis-machine', name: { fr: 'Vernis Acrylique Protection Machine', ar: 'ورنيش حماية ميكانيكي سريع', en: 'Inline Protective Acrylic Varnish' }, extraCostPerUnit: 0.0, description: { fr: 'Séchage ultra-rapide anti-maculage', ar: 'تجفيف سريع يمنع تلطخ الحبر', en: 'Fast anti-smudge surface sealing' } },
      { id: 'pelliculage-mat', name: { fr: 'Pelliculage Mat Anti-Reflet', ar: 'سلفنة مطفية مانعة للانعكاس', en: 'Matte Anti-Glare Lamination' }, extraCostPerUnit: 0.12, description: { fr: 'Élégance sobre pour dépliants corporatifs', ar: 'مظهر راقٍ للمطويات التعريفية بالشركات', en: 'Subdued sophistication for corporate pamphlets' } },
    ],
    description: {
      fr: 'Générez des leads qualifiés et faites rayonner vos offres promotionnelles à Casablanca, Rabat et partout au Maroc. Impression offset Heidelberg garantissant une vivacité éclatante des couleurs.',
      ar: 'احصل على عملاء مهتمين وضاعف مبيعات عروضك الترويجية. طباعة هايدلبرغ أوفست ألمانية تضمن تناسقاً مبهراً لأدق تفاصيل ألوان هويتك.',
      en: 'Generate high-intent corporate leads and advertise promotions. Heidelberg offset presses deliver vibrant CMYK color accuracy.',
    },
    features: {
      fr: [
        'Impression recto/verso quadrichromie haute fidélité',
        'Pliage automatisé (pli roulé, pli accordéon ou pli fenêtre)',
        'Option livraison express le jour même sur Casablanca selon créneau',
        'Conditionnement sous film rétractable étanche',
      ],
      ar: [
        'طباعة ملونة كاملة على الوجهين بأعلى دقة وضوح',
        'طي آلي متقن (طي أسطواني، طي متعرج أو طي نافذة)',
        'إمكانية التوصيل في نفس اليوم بالدار البيضاء حسب التوقيت',
        'تغليف بالبلاستيك الحراري العازل للرطوبة والغبار',
      ],
      en: [
        'Full-color double-sided high-fidelity offset printing',
        'Automated inline folding (roll fold, Z-fold, gatefold)',
        'Same-day rush dispatch option available in Casablanca',
        'Moisture-sealed bundle shrink-wrapping for storage',
      ],
    },
    seoKeywords: ['impression flyer Casablanca', 'dépliants publicitaires Maroc', 'imprimerie prospectus Casablanca', 'prospectus B2B'],
    dieline: {
      bleedMm: 2,
      safetyMm: 3,
      recommendedDpi: 300,
      colorSpace: 'CMJN',
      fileFormats: ['PDF Haute Définition'],
    },
    faqs: [
      {
        question: {
          fr: 'Quel grammage recommandez-vous pour un dépliant 3 volets ?',
          ar: 'ما هو سمك الورق الموصى به لمطوية من 3 أجزاء؟',
          en: 'Which paper weight is best for a 3-panel trifold brochure?',
        },
        answer: {
          fr: 'Le 170g couché mat ou brillant est le standard parfait : il offre une excellente prise en main tout en se pliant proprement sans craqueler.',
          ar: 'يعتبر الورق المصقول 170غ الخيار المثالي حيث يتمتع بصلابة مريحة وينثني بسهولة دون تشقق أليافه.',
          en: '170g coated silk or gloss is the industry standard: substantial to hold yet folds cleanly along the crease lines.',
        },
      },
    ],
  },
  {
    id: 'brochures-catalogues',
    slug: 'brochures-catalogues-entreprise-maroc',
    category: 'marketing',
    title: {
      fr: 'Brochures & Catalogues d’Entreprise',
      ar: 'كتالوجات ومجلات تعريفية للمؤسسات',
      en: 'Corporate Brochures & Product Catalogs',
    },
    subtitle: {
      fr: 'Plaquettes commerciales agrafées, dos carré collé PUR et catalogues de produits à reliure prestige.',
      ar: 'كتالوجات منتجات ومطبوعات تجارية بدبابيس مزدوجة أو تجليد حراري PUR فاخر.',
      en: 'Saddle-stitched corporate brochures, PUR perfect bound annual reports, and luxury catalogs.',
    },
    badge: {
      fr: 'Finition Luxe',
      ar: 'تجليد فاخر',
      en: 'Luxury Binding',
    },
    image: '/images/brochures-catalogues-entreprise.jpg',
    basePriceMAD: 8.50,
    minQuantity: 50,
    standardTurnaroundDays: 5,
    expressTurnaroundHours: 48,
    formats: [
      { id: 'a4-portrait', label: 'A4 Portrait (21 x 29.7 cm)', dimensions: '21 x 29.7 cm fermé' },
      { id: 'a4-paysage', label: 'A4 Paysage / À l’Italienne (29.7 x 21 cm)', dimensions: '29.7 x 21 cm fermé' },
      { id: 'a5-portrait', label: 'A5 Format Livret (14.8 x 21 cm)', dimensions: '14.8 x 21 cm fermé' },
      { id: 'carre-catalogue', label: 'Format Carré Prestige (21 x 21 cm)', dimensions: '21 x 21 cm fermé' },
    ],
    papers: [
      { id: 'couv300-int150', name: 'Couverture 300g Mat + Intérieur 150g', weight: 'Mixte Corporate', description: { fr: 'Standard pour plaquettes commerciales et bilans annuels', ar: 'المزيج المثالي لتقارير مجالس الإدارة والكتالوجات السنوية', en: 'The B2B benchmark for company profiles & annual reports' }, factor: 1.0 },
      { id: 'couv350-int170', name: 'Couverture 350g Soft-Touch + Intérieur 170g', weight: 'Haut de Gamme', description: { fr: 'Catalogue de luxe pour joaillerie, immobilier et haute couture', ar: 'كتالوج استثنائي للمشاريع العقارية الكبرى والمجوهرات', en: 'Ultra-luxe presentation for real estate, automotive & jewelry' }, factor: 1.35 },
    ],
    finishes: [
      { id: 'agrafes', name: { fr: '2 Points Métal (Piqué à cheval)', ar: 'دبابيس معدنية مزدوجة', en: '2 Saddle Stitches' }, extraCostPerUnit: 0.0, description: { fr: 'Idéal de 8 à 48 pages', ar: 'مناسب للكتيبات من 8 إلى 48 صفحة', en: 'Ideal for 8 to 48 pages' } },
      { id: 'dos-carre-pur', name: { fr: 'Dos Carré Collé Colle PUR Indestructible', ar: 'تجليد حراري مسطح بصمغ PUR القوي', en: 'PUR Perfect Bound Square Spine' }, extraCostPerUnit: 3.50, description: { fr: 'Aspect livre d’art dès 40 pages jusqu’à 400 pages', ar: 'مظهر كتاب فني متين من 40 حتى 400 صفحة', en: 'Art-book appearance from 40 up to 400 pages' } },
      { id: 'dorure-couv', name: { fr: 'Dorure à Chaud sur Couverture', ar: 'تذهيب حراري على الغلاف', en: 'Cover Hot Foil Stamping' }, extraCostPerUnit: 2.20, description: { fr: 'Mise en valeur du logo de couverture', ar: 'إبراز الشعار على الغلاف بلمعان ذهبي', en: 'Metallic foil elevation for the front cover' } },
    ],
    description: {
      fr: 'Présentez vos services, votre rapport annuel RSE ou votre gamme complète de produits avec un catalogue imprimé au millimètre près. Rendu chromatique éclatant certifié ISO 12647-2.',
      ar: 'استعرض خدماتك، تقريرك السنوي، أو تشكيلة منتجاتك بأعلى مواصفات الإتقان الطباعي المعتمد وفق معيار ISO 12647-2 الدولي.',
      en: 'Showcase your capabilities, annual financial report, or retail catalog. Precision press control certified to ISO 12647-2 color fidelity.',
    },
    features: {
      fr: [
        'Pagination de 8 à 240 pages avec imposition automatisée',
        'Pelliculage mat ou brillant inclus sur la couverture',
        'Contrôle rigoureux du chemin de fer et épreuves certifiées',
        'Livraison sur palette ou cartons B2B étiquetés',
      ],
      ar: [
        'عدد صفحات من 8 حتى 240 صفحة مع ترتيب آلي دقيق',
        'سلفنة مطفية أو لامعة مشمولة للغلاف الخارجي',
        'مراجعة شاملة لترتيب الصفحات قبل الطباعة النهائية',
        'شحن آمن في علب كرتونية محكمة أو منصات خشبية',
      ],
      en: [
        'From 8 to 240 pages with automated pagination layout',
        'Free matte or gloss lamination included on the cover',
        'Strict prepress page-order proofing with certified check',
        'Secure B2B box palletization for corporate offices',
      ],
    },
    seoKeywords: ['brochures entreprise Casablanca', 'catalogues produits Maroc', 'plaquette commerciale Maroc', 'imprimerie offset catalogue'],
    dieline: {
      bleedMm: 3,
      safetyMm: 5,
      recommendedDpi: 300,
      colorSpace: 'CMJN Fogra39',
      fileFormats: ['PDF pages simples assemblées dans l’ordre de lecture'],
    },
    faqs: [
      {
        question: {
          fr: 'Le nombre de pages doit-il être un multiple de 4 ?',
          ar: 'هل يجب أن يكون عدد الصفحات مضاعفاً للرقم 4؟',
          en: 'Must the page count be a multiple of 4?',
        },
        answer: {
          fr: 'Oui, pour une brochure agrafée (piquée à cheval), chaque feuille pliée en deux génère 4 pages (ex: 8, 12, 16, 24, 32 pages).',
          ar: 'نعم، في المجلات ذات الدبابيس، كل ورقة مطوية في المنتصف تشكل 4 صفحات (مثل 8، 12، 16، 20 صفحة).',
          en: 'Yes, for saddle-stitched booklets, each sheet folded in half creates 4 pages (e.g., 8, 12, 16, 20, 24 pages).',
        },
      },
    ],
  },
  {
    id: 'bloc-notes-planners',
    slug: 'bloc-notes-personnalise-agendas-maroc',
    category: 'corporate',
    title: {
      fr: 'Bloc-Notes & Agendas / Planners Corporatifs',
      ar: 'دفاتر ملاحظات وأجندات سنوية مخصصة',
      en: 'Custom Notepads & Corporate Planners',
    },
    subtitle: {
      fr: 'Blocs-notes encollés en tête, carnets reliure wire-o spirale et agendas de fin d’année personnalisés.',
      ar: 'دفاتر ملاحظات لاصقة، دفاتر سلك لولبي وأجندات جلدية مطبوعة للهدايا السنوية للشركات.',
      en: 'Tear-off desk notepads, wire-o spiral notebooks, and year-end executive planners.',
    },
    badge: {
      fr: 'Corporate Gifts',
      ar: 'هدايا الشركات',
      en: 'Corporate Stationery',
    },
    image: '/images/bloc-notes-agendas-planners.jpg',
    basePriceMAD: 3.20,
    minQuantity: 100,
    standardTurnaroundDays: 4,
    expressTurnaroundHours: 36,
    formats: [
      { id: 'a5-bloc', label: 'A5 Format Réunion (14.8 x 21 cm)', dimensions: '14.8 x 21 cm' },
      { id: 'a4-bloc', label: 'A4 Format Bureau (21 x 29.7 cm)', dimensions: '21 x 29.7 cm' },
      { id: 'a6-pocket', label: 'A6 Format Poche (10.5 x 14.8 cm)', dimensions: '10.5 x 14.8 cm' },
    ],
    papers: [
      { id: 'offset-80', name: 'Papier Offset Blanc Écriture 80g', weight: '80g/m²', description: { fr: 'Papier agréable sans buvardage pour stylo bille et roller', ar: 'ورق ناصع ممتاز للكتابة السلسة بدون تسرب الحبر', en: 'Smooth writing stock, bleed-free for pens & rollers' }, factor: 1.0 },
      { id: 'offset-90', name: 'Papier Offset Supérieur 90g', weight: '90g/m²', description: { fr: 'Opacité renforcée pour écriture recto-verso confortable', ar: 'سماكة أعلى تسمح بالكتابة على الوجهين بأريحية تامة', en: 'High opacity for comfortable double-sided writing' }, factor: 1.15 },
      { id: 'kraft-cream', name: 'Papier Recyclé Ivoire 90g', weight: '90g/m²', description: { fr: 'Élégance naturelle et confort de lecture', ar: 'ورق عاجي مريح للعين وطبيعي 100%', en: 'Warm ivory eco-tone with eye-comfort appeal' }, factor: 1.25 },
    ],
    finishes: [
      { id: 'encolle-50p', name: { fr: 'Encollage en tête (50 feuillets + dos cartonné)', ar: 'لصق علوي (50 صفحة مع قاعدة كرتونية سميكة)', en: 'Top Glue Binding (50 sheets + sturdy backing)' }, extraCostPerUnit: 0.0, description: { fr: 'Détachage facile feuille par feuille', ar: 'سهولة نزع الأوراق واحدة تلو الأخرى', en: 'Easy tear-off page by page' } },
      { id: 'spirale-wireo', name: { fr: 'Reliure Wire-O Spirale Métallique (100p)', ar: 'سلك لولبي معدني أنيق (100 صفحة)', en: 'Metal Wire-O Spiral Binding (100p)' }, extraCostPerUnit: 2.20, description: { fr: 'Ouverture à plat à 360 degrés avec couverture rigide', ar: 'فتح كامل 360 درجة مع غلاف مقوى أمامي وخلفي', en: 'Full 360-degree flat opening with rigid protective cover' } },
      { id: 'agenda-luxe', name: { fr: 'Couverture Rigide Rembordée avec Dorure', ar: 'غلاف جلدي مقوى ومذهب للأجندة السنوية', en: 'Hardcover Casebound with Gold Stamping' }, extraCostPerUnit: 5.80, description: { fr: 'Idéal pour vos cadeaux de fin d’année à Casablanca', ar: 'الهدية الراقية المثالية للعملاء نهاية كل سنة', en: 'The quintessential year-end corporate gift in Morocco' } },
    ],
    description: {
      fr: 'Positionnez votre logo sur le bureau de vos partenaires 365 jours par an. Fabrication soignée avec carton de renfort au dos (dos gris 400g) pour écrire partout même sans table.',
      ar: 'اجعل شعارك حاضراً أمام أعين شركائك طوال 365 يوماً في السنة. تصنيع متقن مع قاعدة كرتونية صلبة 400غ لسهولة التدوين في أي مكان.',
      en: 'Keep your brand top-of-mind 365 days a year on every executive desk. Constructed with an ultra-rigid 400g backing board for writing on the go.',
    },
    features: {
      fr: [
        'Encollage haute résistance sans bavure',
        'Quadrillage, lignes ou pages vierges personnalisées avec votre logo',
        'Carton gris de sous-main 400g inclus pour une rigidité parfaite',
        'Idéal pour séminaires d’entreprises et kits d’onboarding RH',
      ],
      ar: [
        'لصق متين للغاية مقاوم للتفكك',
        'تخطيط مسطر أو مربعات أو صفحات بيضاء تحمل هويتك',
        'قاعدة كرتونية صلبة 400غ مجانية مرفقة بكل دفتر',
        'مثالي للمؤتمرات، ورشات العمل وحقائب استقبال الموظفين',
      ],
      en: [
        'Industrial high-strength spine glue preventing loose sheets',
        'Custom ruled, dot grid, or plain layout branded with your mark',
        'Heavy 400g greyboard backing included on every pad',
        'Ideal for conferences, seminars, and HR onboarding welcome kits',
      ],
    },
    seoKeywords: ['bloc-notes personnalisé Casablanca', 'agendas entreprise Maroc', 'carnet personnalisé B2B', 'imprimerie bloc notes'],
    dieline: {
      bleedMm: 3,
      safetyMm: 4,
      recommendedDpi: 300,
      colorSpace: 'CMJN',
      fileFormats: ['PDF vectoriel'],
    },
    faqs: [
      {
        question: {
          fr: 'Quel est le nombre de feuilles par bloc-notes ?',
          ar: 'كم عدد الصفحات المتاحة في الدفتر الواحد؟',
          en: 'How many sheets are included per notepad?',
        },
        answer: {
          fr: 'Nous proposons au choix 25, 50 ou 100 feuillets par bloc. Le format standard 50 feuillets est le plus populaire.',
          ar: 'نوفر خيارات 25، 50 أو 100 ورقة للدفتر، ويعتبر خيار 50 ورقة الأكثر طلباً وتوازناً.',
          en: 'We offer 25, 50, or 100 sheets per pad. The 50-sheet configuration is the corporate standard.',
        },
      },
    ],
  },
  {
    id: 'etuis-coffrets',
    slug: 'etuis-pliants-coffrets-rigides-luxe-maroc',
    category: 'packaging',
    title: {
      fr: 'Étuis Pliants & Coffrets Rigides Luxe',
      ar: 'علب هدايا فاخرة وصناديق صلبة للمنتجات الراقية',
      en: 'Luxury Rigid Boxes & Folding Cartons',
    },
    subtitle: {
      fr: 'Packaging rigide rembordé à fermeture aimantée, étuis pliants dorés pour cosmétique et chocolaterie fine.',
      ar: 'صناديق مغناطيسية صلبة وعلب فاخرة مذهبة للعطور ومستحضرات التجميل والشوكولاتة.',
      en: 'Rigid magnetic closure boxes and foil folding cartons for cosmetics, perfumery, and luxury retail.',
    },
    badge: {
      fr: 'Haute Horlogerie & Beauté',
      ar: 'قمة الفخامة والجمال',
      en: 'Luxury Tier',
    },
    image: '/images/etuis-coffrets-rigides-luxe.jpg',
    basePriceMAD: 12.00,
    minQuantity: 50,
    standardTurnaroundDays: 7,
    expressTurnaroundHours: 72,
    formats: [
      { id: 'box-aimant-m', label: 'Coffret Rigide Aimanté (24 x 18 x 8 cm)', dimensions: '24 x 18 x 8 cm' },
      { id: 'box-cloche', label: 'Boîte Fond & Couvercle / Cloche (20 x 20 x 6 cm)', dimensions: '20 x 20 x 6 cm' },
      { id: 'etui-flacon', label: 'Étui Pliant Cosmétique (6 x 6 x 14 cm)', dimensions: '6 x 6 x 14 cm' },
    ],
    papers: [
      { id: 'carton-remborde', name: 'Carton Gris Rigide 1200g Rembordé Papier d’Art', weight: 'Carton 2mm', description: { fr: 'Solidité absolue et toucher d’exception pour marques de luxe', ar: 'متانة فائقة وسمك 2 ملم مغلف بأفخر أوراق الفنون', en: 'Substantial 2mm heavy board wrapped in fine art paper' }, factor: 1.4 },
      { id: 'carte-gc1-350', name: 'Carton Compact Arktika GC1 350g', weight: '350g/m²', description: { fr: 'Blancheur éclatante pour étuis cosmétiques et pharmaceutiques', ar: 'بياض ساطع مناسب لعلب الأدوية ومستحضرات العناية', en: 'Ultra-bright white board for cosmetics and high-end retail' }, factor: 1.0 },
    ],
    finishes: [
      { id: 'soft-dorure', name: { fr: 'Soft-Touch + Dorure Galbée Or Chaud', ar: 'سلفنة مخملية مع تذهيب حراري بارز', en: 'Soft-Touch + Raised Hot Foil' }, extraCostPerUnit: 3.80, description: { fr: 'Raffinement absolu pour le retail de prestige', ar: 'قمة الأناقة لمتاجر المنتجات الراقية', en: 'Supreme tactile elegance for premium boutiques' } },
      { id: 'cale-mousse', name: { fr: 'Calage Mousse Haute Densité Découpé sur Mesure', ar: 'إسفنج داخلي مقصوص بالليزر لحماية المنتج', en: 'Custom Laser-Cut Foam Insert' }, extraCostPerUnit: 4.50, description: { fr: 'Maintien parfait de vos flacons, bijoux ou trophées', ar: 'تثبيت وحماية مثالية لقوارير العطور والمجوهرات', en: 'Snug custom protection for bottles, jewelry, or gifts' } },
    ],
    description: {
      fr: 'Sublimez vos produits les plus prestigieux avec des coffrets fabriqués à la main et sur machines de précision dans nos ateliers de Casablanca.',
      ar: 'امنح منتجاتك القيمة التغليف الذي تستحقه مع صناديق مصنوعة بعناية فائقة في معملنا بالدار البيضاء.',
      en: 'Elevate your most prestigious merchandise with handcrafted and precision-machined rigid boxes built in our Casablanca workshops.',
    },
    features: {
      fr: [
        'Fermeture invisible par aimants néodyme puissants',
        'Rembordage sans pli ni bulle d’air',
        'Calage intérieur sur mesure (mousse EVA, carton ou satin)',
        'Idéal pour lancements de produits et cadeaux VIP',
      ],
      ar: [
        'إغلاق ذكي غير مرئي بمغناطيس نيوديميوم قوي',
        'تغليف يدوي متقن بدون أي فقاعات هواء',
        'قوالب داخلية مخصصة (إسفنج EVA، كرتون أو قماش الساتان)',
        'الخيار الأمثل لهدايا كبار الشخصيات VIP وإطلاق المنتجات الجديدة',
      ],
      en: [
        'Concealed neodymium magnetic snap closure',
        'Flawless bubble-free paper edge wrapping',
        'Tailored interior foam or satin inserts',
        'The definitive choice for VIP gifts and flagship drops',
      ],
    },
    seoKeywords: ['coffret rigide luxe Casablanca', 'packaging luxe Maroc', 'boîte aimantée personnalisée', 'étui parfum Maroc'],
    dieline: {
      bleedMm: 5,
      safetyMm: 6,
      recommendedDpi: 300,
      colorSpace: 'CMJN',
      fileFormats: ['AI', 'PDF vectoriel'],
    },
    faqs: [
      {
        question: {
          fr: 'Quelle est la quantité minimale de commande (MOQ) pour les coffrets rigides ?',
          ar: 'ما هو الحد الأدنى للطلب في الصناديق الصلبة الفاخرة؟',
          en: 'What is the MOQ for luxury rigid boxes?',
        },
        answer: {
          fr: 'Grâce à nos processus flexibles, nous commençons dès 50 exemplaires pour les lancements VIP, avec tarifs très dégressifs à partir de 250 pièces.',
          ar: 'بفضل مرونة خطوط إنتاجنا، نبدأ من 50 صندوقاً فقط للمناسبات الخاصة، مع خصومات مهمة بدءاً من 250 قطعة.',
          en: 'Our agile setup allows starting at just 50 units for VIP releases, with significant tier discounts at 250+ units.',
        },
      },
    ],
  },
  {
    id: 'grand-format-plv',
    slug: 'impression-grand-format-plv-casablanca',
    category: 'services',
    title: {
      fr: 'Impression Grand Format & PLV Événementielle',
      ar: 'طباعة الحجم الكبير وإعلانات المعارض والمحلات',
      en: 'Large Format & Point-of-Sale (POS) Displays',
    },
    subtitle: {
      fr: 'Roll-ups aluminium, bâches publicitaires frontlit, vinyles adhésifs et stands pour salons à Casablanca.',
      ar: 'رول أب ألومنيوم، لافتات وبنرات إعلانية، ستيكرات المحلات وتجهيز منصات المعارض.',
      en: 'Premium aluminum roll-up banners, outdoor vinyl banners, window graphics, and expo booths.',
    },
    badge: {
      fr: 'Salons & Foires',
      ar: 'المعارض والملتقيات',
      en: 'Events & Expos',
    },
    image: '/images/grand-format-rollup-plv.jpg',
    basePriceMAD: 180.00,
    minQuantity: 1,
    standardTurnaroundDays: 2,
    expressTurnaroundHours: 24,
    formats: [
      { id: 'rollup-85', label: 'Roll-Up Standard (85 x 200 cm)', dimensions: '85 x 200 cm' },
      { id: 'rollup-120', label: 'Roll-Up Large (120 x 200 cm)', dimensions: '120 x 200 cm' },
      { id: 'bache-frontlit', label: 'Bâche PVC Frontlit M1 Anti-Feu (Sur Mesure)', dimensions: 'Largeur jusqu’à 3.2m' },
      { id: 'adhesif-vitrine', label: 'Vinyle Adhésif Micro-Perforé ou Opaque', dimensions: 'Sur Mesure' },
    ],
    papers: [
      { id: 'bache-510', name: 'Bâche PVC Enduite 510g Haute Résistance', weight: '510g/m²', description: { fr: 'Excellente tenue au vent et aux UV solaires marocains', ar: 'مقاومة استثنائية للرياح وأشعة الشمس المغربية القوية', en: 'Extreme outdoor durability against Moroccan sun & wind' }, factor: 1.0 },
      { id: 'toile-ferrari', name: 'Toile Decolit M1 Anti-Curling (Sans courbure)', weight: '325g/m²', description: { fr: 'Bords parfaitement droits sans effet de tuile pour roll-up', ar: 'حواف مستقيمة تماماً لا تنثني في واجهات الرول أب', en: 'Flawlessly flat anti-curling substrate for indoor expos' }, factor: 1.35 },
    ],
    finishes: [
      { id: 'structure-alu', name: { fr: 'Structure Aluminium Renforcée + Sac de Transport', ar: 'هيكل ألومنيوم متين مع حقيبة حمل مبطنة', en: 'Reinforced Aluminum Base + Padded Bag' }, extraCostPerUnit: 0.0, description: { fr: 'Installation en 30 secondes sans outils', ar: 'تركيب فوري وسهل في 30 ثانية بدون أدوات', en: 'Instant 30-second setup without any tools' } },
      { id: 'oeillets-ourlet', name: { fr: 'Ourlet Périmétrique Renforcé & Œillets Inox', ar: 'حواف معززة باللحام وحلقات تثبيت مقاومة للصدأ', en: 'Reinforced Perimeter Hem & Rustproof Eyelets' }, extraCostPerUnit: 35.0, description: { fr: 'Accrochage facile et indéchirable pour façades', ar: 'تثبيت آمن ومقاوم للتمزق لواجهات المباني', en: 'Tear-proof security for outdoor wall mounting' } },
    ],
    description: {
      fr: 'Faites sensation lors de vos salons à l’OFEC Casablanca, au Marrakech Air Show ou dans vos points de vente. Impression UV et latex écologique sans solvant, inodore et ultra-lumineuse.',
      ar: 'اصنع حضوراً لافتاً في معارض الدار البيضاء، مراكش وكافة التظاهرات الكبرى. طباعة صديقة للبيئة بألوان حية وثابتة تدوم لسنوات.',
      en: 'Command attention at trade fairs across Casablanca, Marrakech, and retail spaces. Eco-solvent and UV latex printing offering vibrant sun-resilient colors.',
    },
    features: {
      fr: [
        'Résolution photographique grand format jusqu’à 1440 DPI',
        'Structure aluminium robuste et pied double stabilité',
        'Encres inodores adaptées aux espaces intérieurs et salons',
        'Prêt à l’emploi avec housse de transport matelassée incluse',
      ],
      ar: [
        'دقة تصويرية عالية تصل إلى 1440 DPI',
        'هيكل ألومنيوم خفيف الوزن وقوي مع قاعدة مزدوجة',
        'أحبار بدون رائحة معتمدة للمساحات المغلقة والمعارض',
        'جاهز للاستخدام مع حقيبة تنقل مبطنة وعملية',
      ],
      en: [
        'True photo-grade wide-format resolution up to 1440 DPI',
        'Sturdy lightweight aluminum cassette with twin stabilizer feet',
        'Odorless certified eco-inks safe for indoor conference venues',
        'Fully assembled and ready to deploy with padded carry case',
      ],
    },
    seoKeywords: ['roll up Casablanca', 'bâche publicitaire Maroc', 'impression grand format Casablanca', 'stand salon Maroc'],
    dieline: {
      bleedMm: 5,
      safetyMm: 15,
      recommendedDpi: 150,
      colorSpace: 'CMJN',
      fileFormats: ['PDF vectoriel', 'TIFF 150 DPI à l’échelle 1:1'],
    },
    faqs: [
      {
        question: {
          fr: 'Quel délai pour produire 5 roll-ups pour un événement à Casablanca ?',
          ar: 'كم يستغرق تجهيز 5 حوامل رول أب لحدث عاجل بالدار البيضاء؟',
          en: 'How fast can you produce 5 roll-up banners for an event in Casablanca?',
        },
        answer: {
          fr: 'Nous pouvons les imprimer et les monter en 24h chrono avec retrait à notre atelier de Sidi Maarouf ou livraison directe sur le lieu de votre événement.',
          ar: 'يمكننا طباعتها وتركيبها خلال 24 ساعة فقط مع إمكانية استلامها من معملنا بسيدي معروف أو توصيلها لموقع الحدث مباشرة.',
          en: 'We can print and assemble within 24 hours with pickup at our Sidi Maarouf facility or direct venue delivery.',
        },
      },
    ],
  },
];
