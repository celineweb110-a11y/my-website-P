import { Language } from '../types';

export const translations = {
  // Navigation & General Header
  nav: {
    brandSubtitle: {
      fr: "Imprimerie & Packaging Casablanca",
      ar: "مطبعة وحلول التغليف بالدار البيضاء",
      en: "Print & Custom Packaging Casablanca",
    },
    products: {
      fr: "Produits",
      ar: "المنتجات",
      en: "Products",
    },
    estimator: {
      fr: "Calculateur",
      ar: "حاسبة الأسعار",
      en: "Estimator",
    },
    whyUs: {
      fr: "Pourquoi PIXORA",
      ar: "لماذا بيكسورا",
      en: "Why PIXORA",
    },
    factory: {
      fr: "Atelier & Livraison",
      ar: "المعمل والتوصيل",
      en: "Workshop & Delivery",
    },
    sampleKit: {
      fr: "Kit Échantillons",
      ar: "حقيبة العينات",
      en: "Sample Kit",
    },
    ctaQuote: {
      fr: "Devis Instantané",
      ar: "طلب تسعيرة فورية",
      en: "Instant Quote",
    },
    whatsappText: {
      fr: "Bonjour PIXORA, je souhaite un devis d'impression rapide pour mon entreprise.",
      ar: "مرحبا بيكسورا، أود الحصول على عرض سعر سريع لطباعة وتغليف لشركتي.",
      en: "Hello PIXORA, I would like a fast print and packaging quote for my business.",
    },
  },

  // Hero Section
  hero: {
    kicker: {
      fr: "Imprimerie Industrielle Offset & Digitale · Casablanca & Tout le Maroc",
      ar: "مطبعة صناعية أوفست ورقمية · الدار البيضاء وكافة مدن المغرب",
      en: "Industrial Offset & Digital Printing · Casablanca & All Morocco",
    },
    title: {
      fr: "L'excellence de l'impression B2B & packaging sur mesure au Maroc",
      ar: "التميز في الطباعة الاحترافية وحلول التغليف المخصص في المغرب",
      en: "Premium B2B Printing & Custom Packaging in Morocco",
    },
    subtitle: {
      fr: "Partenaire des entreprises, agences et marques e-commerce. Impression offset haute précision, chemises à rabat, boîtes personnalisées et livraison express sous 24-48h à Casablanca.",
      ar: "شريك الشركات، الوكالات وعلامات التجارة الإلكترونية. طباعة أوفست عالية الدقة، حافظات ملفات، علب كرتونية مخصصة وتوصيل سريع خلال 24-48 ساعة بالدار البيضاء.",
      en: "Trusted by Moroccan enterprises, agencies, and e-commerce leaders. Precision offset printing, pocket presentation folders, custom boxes, and express 24-48h delivery across Casablanca.",
    },
    ctaEstimate: {
      fr: "Calculer mon Devis en Ligne",
      ar: "احسب تسعيرتك الفورية",
      en: "Calculate Quote Online",
    },
    ctaSamples: {
      fr: "Demander le Kit Échantillons",
      ar: "اطلب عينات الورق المجانية",
      en: "Order Paper Sample Kit",
    },
    trustPoints: {
      pressSpeed: {
        fr: "Parc Offset 5 Couleurs & Digital HP Indigo",
        ar: "آلات أوفست 5 ألوان ورقمية HP Indigo متطورة",
        en: "5-Color Offset & HP Indigo Digital Presses",
      },
      preflightCheck: {
        fr: "Contrôle PAO & Bon à Tirer (BAT) Certifié Offert",
        ar: "مراجعة تقنية مجانية للملفات وبروفة رقمية معتمدة",
        en: "Free Preflight File Check & Certified Digital Proof",
      },
      deliveryPromise: {
        fr: "Livraison 24/48h Casablanca · Partout au Maroc",
        ar: "توصيل خلال 24/48 ساعة بالدار البيضاء وكافة أرجاء المغرب",
        en: "24/48h Delivery in Casablanca · Nationwide Morocco",
      },
      iceInvoicing: {
        fr: "Facturation Entreprise B2B avec ICE Conforme",
        ar: "فوترة قانونية معتمدة مع التعريف الموحد للمقاولة (ICE)",
        en: "Official B2B Invoicing with Verified Moroccan ICE",
      },
    },
  },

  // Instant Estimator Section
  estimator: {
    badge: {
      fr: "Simulateur Tarifaire B2B",
      ar: "محاكي الأسعار للمقاولات",
      en: "B2B Price Simulator",
    },
    heading: {
      fr: "Obtenez un chiffrage instantané pour vos impressions",
      ar: "احصل على تسعيرة فورية ودقيقة لمطبوعاتك",
      en: "Get an Instant Transparent Quote for Your Prints",
    },
    subheading: {
      fr: "Tarifs dégressifs transparents en Dirhams marocains (MAD). Calculez vos tirages professionnels en quelques clics.",
      ar: "أسعار تفاضلية تنازلية بالدرهم المغربي. احسب تكلفة كمياتك بضغطة زر وبكل شفافية.",
      en: "Tiered wholesale pricing in Moroccan Dirhams (MAD). Calculate your professional print runs in seconds.",
    },
    selectProduct: {
      fr: "1. Choisissez le produit",
      ar: "1. اختر المنتج",
      en: "1. Select Product",
    },
    selectFormat: {
      fr: "2. Format & Dimensions",
      ar: "2. المقاس والأبعاد",
      en: "2. Format & Dimensions",
    },
    selectPaper: {
      fr: "3. Papier & Support",
      ar: "3. نوع الورق والسمك",
      en: "3. Paper & Substrate",
    },
    selectFinishes: {
      fr: "4. Finitions & Embellissements",
      ar: "4. اللمسات الراقية والطلاء",
      en: "4. Premium Finishes",
    },
    selectQuantity: {
      fr: "5. Quantité de tirage",
      ar: "5. كمية النسخ",
      en: "5. Print Quantity",
    },
    turnaround: {
      label: {
        fr: "Délai de production",
        ar: "مدة الإنجاز",
        en: "Production Turnaround",
      },
      standard: {
        fr: "Standard (4 à 5 jours ouvrés)",
        ar: "عادي (4 إلى 5 أيام عمل)",
        en: "Standard (4-5 business days)",
      },
      express: {
        fr: "Express Casablanca (24-48h) +15%",
        ar: "سريع بالدار البيضاء (24-48 ساعة) +15%",
        en: "Express Casablanca (24-48h) +15%",
      },
    },
    totalHT: {
      fr: "Total Hors Taxes (HT)",
      ar: "المجموع قبل الضريبة",
      en: "Subtotal Excl. Tax",
    },
    unitPrice: {
      fr: "Soit par unité",
      ar: "سعر الوحدة الواحدة",
      en: "Cost per unit",
    },
    vatNotice: {
      fr: "TVA 20% applicable sur facture entreprise. Livraison Casablanca incluse dès 1 000 MAD.",
      ar: "ضريبة القيمة المضافة 20%، وتوصيل مجاني بالدار البيضاء للطلبيات فوق 1000 درهم.",
      en: "Standard 20% VAT applicable. Free Casablanca delivery on orders over 1,000 MAD.",
    },
    ctaOrderNow: {
      fr: "Commander avec ces options",
      ar: "اطلب بهذه المواصفات",
      en: "Order with Selected Specs",
    },
    ctaCustomize: {
      fr: "Configurer en détail",
      ar: "تخصيص متقدم بالمعاينة",
      en: "Detailed Configurator",
    },
  },

  // Categories & Pillars
  categories: {
    all: {
      fr: "Tous les produits",
      ar: "جميع المنتجات",
      en: "All Products",
    },
    corporate: {
      fr: "Papeterie Corporate",
      ar: "مطبوعات الشركات الرسمية",
      en: "Corporate Stationery",
    },
    marketing: {
      fr: "Marketing & Publicité",
      ar: "الدعاية والتسويق",
      en: "Marketing & Advertising",
    },
    packaging: {
      fr: "Packaging & Boîtes",
      ar: "التعليب والعلب المخصصة",
      en: "Packaging & Boxes",
    },
    services: {
      fr: "Grand Format & Finitions",
      ar: "الطباعة الكبيرة والتشطيب",
      en: "Large Format & Finishes",
    },
  },

  // Products Section
  productsSection: {
    badge: {
      fr: "Catalogue B2B Haute Définition",
      ar: "دليل المطبوعات للمؤسسات",
      en: "High-Definition B2B Catalog",
    },
    heading: {
      fr: "Nos solutions d'impression et d'emballage industriel",
      ar: "حلولنا الشاملة في الطباعة الصناعية وتصميم العلب",
      en: "Industrial Printing & Custom Packaging Solutions",
    },
    subheading: {
      fr: "De la chemise à rabat pour vos rendez-vous d'affaires aux boîtes d'expédition sur mesure pour votre marque e-commerce.",
      ar: "من حافظات الملفات الفاخرة لاجتماعات العمل إلى علب الشحن المخصصة لعلامتك التجارية الإلكترونية.",
      en: "From executive presentation folders for boardroom meetings to custom shipping boxes for fast-growing e-commerce.",
    },
    fromPrice: {
      fr: "À partir de",
      ar: "ابتداءً من",
      en: "Starting from",
    },
    minOrder: {
      fr: "Tirage min.",
      ar: "أدنى كمية",
      en: "Min. order",
    },
    configureBtn: {
      fr: "Configurer & Devis",
      ar: "تخصيص وطلب تسعيرة",
      en: "Configure & Quote",
    },
  },

  // Why PIXORA Section
  whyPixora: {
    badge: {
      fr: "Expertise Industrielle Casablanca",
      ar: "خبرة صناعية رائدة بالدار البيضاء",
      en: "Industrial Craftsmanship Casablanca",
    },
    heading: {
      fr: "Pourquoi les directions générales et agences choisissent PIXORA",
      ar: "لماذا تضع الشركات والوكالات الكبرى ثقتها في بيكسورا",
      en: "Why Top Companies and Agencies Partner with PIXORA",
    },
    subheading: {
      fr: "La puissance d'une imprimerie industrielle alliée à la réactivité d'une plateforme moderne.",
      ar: "قوة التجهيزات الصناعية مقرونة بمرونة المنصة الرقمية الحديثة وسرعة الاستجابة.",
      en: "Industrial printing capacity combined with the speed of a modern digital workflow.",
    },
    features: [
      {
        id: "presses",
        title: {
          fr: "Parc Machines Offset & Numérique",
          ar: "أسطول طباعة أوفست ورقمي حديث",
          en: "Advanced Offset & Digital Fleet",
        },
        desc: {
          fr: "Presses Heidelberg Speedmaster 5 couleurs pour les grands tirages économiques et HP Indigo pour les séries courtes haute fidélité.",
          ar: "آلات هايدلبرغ 5 ألوان للكميات الكبيرة الاقتصادية وطابعات إنديجو للسلسلات السريعة فائقة الجودة.",
          en: "Heidelberg Speedmaster 5-color presses for cost-effective mass runs and HP Indigo for sharp short runs.",
        },
      },
      {
        id: "preflight",
        title: {
          fr: "Contrôle PAO & BAT Numérique Gratuit",
          ar: "مراجعة تقنية وتأكيد البروفة مجاناً",
          en: "Free Preflight & Digital Proof Check",
        },
        desc: {
          fr: "Chaque fichier est audité par nos graphistes techniques : vérification des fonds perdus (3mm), colorimétrie CMJN Fogra39 et résolution 300 DPI.",
          ar: "يقوم مهندسونا بمراجعة كل ملف بدقة: هوامش القص (3 ملم)، نظام الألوان CMYK Fogra39، ودقة الوضوح 300 DPI.",
          en: "Every design file is inspected by prepress technicians: 3mm bleed check, CMYK Fogra39 calibration, and 300 DPI sharpness.",
        },
      },
      {
        id: "finishes",
        title: {
          fr: "Finitions & Embellissements de Prestige",
          ar: "تشطيبات فاخرة وتذهيب حراري",
          en: "Prestige Finishes & Embellishments",
        },
        desc: {
          fr: "Vernis sélectif UV 3D avec relief tactile, dorure à chaud or ou cuivre, pelliculage Soft-Touch soyeux et découpes laser sur mesure.",
          ar: "طلاء ورنيش ثلاثي الأبعاد بارز، تذهيب حراري بالذهب أو النحاس، سلفنة ملمس الحرير، وقص ليزري دقيق.",
          en: "Tactile 3D spot UV, gold or copper hot foil stamping, silky soft-touch lamination, and precision custom die-cuts.",
        },
      },
      {
        id: "logistics",
        title: {
          fr: "Logistique Dédiée Casablanca & Maroc",
          ar: "شبكة شحن موثوقة بالمغرب",
          en: "Dedicated Morocco Logistics Network",
        },
        desc: {
          fr: "Chauffeurs dédiés à Casablanca pour vos urgences d'événements et salons. Partenariats express pour Rabat, Tanger, Marrakech et Agadir.",
          ar: "سائقون مخصصون لتوصيل الطلبات العاجلة للمعارض بالدار البيضاء وشحن سريع لباقي المدن.",
          en: "Dedicated Casablanca courier fleet for event deadlines, plus expedited freight to Rabat, Tangier, Marrakech, and nationwide.",
        },
      },
    ],
    proofStats: [
      { value: "48h", label: { fr: "Délai moyen Casablanca", ar: "متوسط مدة التسليم", en: "Avg Casablanca Turnaround" } },
      { value: "99.4%", label: { fr: "Conformité chromatique", ar: "مطابقة درجات الألوان", en: "Color Accuracy Rate" } },
      { value: "+850", label: { fr: "Entreprises clientes B2B", ar: "شركة ومؤسسة معتمدة", en: "Active Corporate Clients" } },
      { value: "100%", label: { fr: "Papiers certifiés FSC", ar: "أوراق معتمدة بيئياً FSC", en: "FSC-Certified Papers" } },
    ],
  },

  // Casablanca Geo Trust
  geoTrust: {
    badge: {
      fr: "Implantation Locale & Rayonnement National",
      ar: "مقر محلي بالدار البيضاء وتغطية وطنية",
      en: "Casablanca Workshop & Morocco Coverage",
    },
    heading: {
      fr: "Au cœur du tissu économique de Casablanca",
      ar: "في قلب المركز الاقتصادي للدار البيضاء",
      en: "At the Heart of Casablanca's Commercial Hub",
    },
    subheading: {
      fr: "Imprimerie moderne avec atelier de production et showroom pour toucher vos papiers avant de lancer l'impression.",
      ar: "معمل طباعة متطور وصالة عرض تتيح لك معاينة ولمس خامات الورق المختلفة قبل بدء الإنتاج.",
      en: "Visit our state-of-the-art production plant and showroom to feel paper stocks before launching mass runs.",
    },
    hubs: [
      {
        city: "Casablanca",
        district: "Sidi Maarouf",
        address: "G992+PP7, Bd Adarissa, Sidi Maarouf, Casablanca",
        phone: "+212 661-111947",
        hours: "Lun - Ven: 08:30 - 18:30 | Sam: 09:00 - 13:00",
        coverage: {
          fr: "Livraison coursier express sous 24h sur tout le Grand Casablanca (CFC, Marina, Sidi Maarouf, Mohammedia)",
          ar: "توصيل سريع خلال 24 ساعة لكافة مناطق الدار البيضاء الكبرى (المارينا، القطب المالي، المحمدية)",
          en: "Express 24h courier delivery across Greater Casablanca (CFC, Marina, Sidi Maarouf, Mohammedia)",
        },
      },
      {
        city: "Rabat - Salé - Kénitra",
        district: "Agdal & Technopolis",
        address: "Desserte quotidienne depuis notre plateforme centrale",
        phone: "+212 661-111947",
        hours: "Livraison quotidienne J+1",
        coverage: {
          fr: "Livraison directe pour ministères, sièges d'entreprises et universités à Rabat & Technopolis",
          ar: "توصيل يومي مباشر للمؤسسات والشركات بالرباط ومدينة التكنولوجيا بسلا",
          en: "Direct daily dispatch to corporate HQs, ministries, and tech parks in Rabat",
        },
      },
      {
        city: "Tanger Med & Nord",
        district: "Zone Franche & Tanger City",
        address: "Ligne logistique express quotidienne A1",
        phone: "+212 661-111947",
        hours: "Expédition 24/48h",
        coverage: {
          fr: "Packaging et documentation technique pour les industries automobiles et logistiques de Tanger",
          ar: "توفير التغليف والوثائق الصناعية للشركات بالمنطقة الحرة وميناء طنجة المتوسط",
          en: "Custom packaging and technical manuals for Tangier industrial and free trade zones",
        },
      },
    ],
  },

  // Case Studies & Testimonials
  caseStudies: {
    badge: {
      fr: "Références & Témoignages B2B",
      ar: "تجارب وقصص نجاح شركائنا",
      en: "Client Case Studies & Proof",
    },
    heading: {
      fr: "Ils confient leur image de marque à PIXORA",
      ar: "مؤسسات بارزة تبني هويتها البصرية مع بيكسورا",
      en: "Leading Moroccan Brands Rely on PIXORA",
    },
  },

  // Configurator Modal
  configurator: {
    title: {
      fr: "Configurateur Technique & Devis Personnalisé",
      ar: "المعدل التقني وحساب المواصفات",
      en: "Technical Configurator & Custom Specs",
    },
    dielineTab: {
      fr: "Spécifications & Gabarit",
      ar: "مخطط الأبعاد والهوامش",
      en: "Dieline & Blueprint",
    },
    optionsTab: {
      fr: "Options d'Impression",
      ar: "خيارات الطباعة",
      en: "Print Options",
    },
    faqTab: {
      fr: "Foire Aux Questions (FAQ)",
      ar: "الأسئلة التقنية الشائعة",
      en: "Technical FAQ",
    },
    downloadDieline: {
      fr: "Télécharger le Gabarit (PDF / AI)",
      ar: "تحميل قالب التصميم (PDF / AI)",
      en: "Download Dieline Template (PDF / AI)",
    },
    requestWithSpecs: {
      fr: "Demander le devis officiel pour cette config",
      ar: "طلب التسعيرة الرسمية لهذه المواصفات",
      en: "Request Official Quote for this Config",
    },
  },

  // Quote Request Modal
  quoteModal: {
    title: {
      fr: "Demande de Devis B2B Immédiate",
      ar: "طلب تسعيرة رسمية للشركات",
      en: "Instant B2B Quote Request",
    },
    subtitle: {
      fr: "Recevez une proposition chiffrée avec Bon à Tirer (BAT) certifié sous 2 heures ouvrées.",
      ar: "احصل على مقترح مالي مفصل وبروفة مجانية خلال ساعتي عمل.",
      en: "Receive an itemized commercial proposal with digital proof within 2 business hours.",
    },
    steps: {
      spec: { fr: "1. Projet", ar: "1. المشروع", en: "1. Project" },
      files: { fr: "2. Fichier PAO", ar: "2. الملف التصميمي", en: "2. Artwork" },
      company: { fr: "3. Entreprise", ar: "3. بيانات المقاولة", en: "3. Company" },
      confirm: { fr: "4. Confirmation", ar: "4. التأكيد", en: "4. Confirmation" },
    },
    fileUploadTitle: {
      fr: "Glissez votre fichier d'impression (PDF, AI, PSD, ZIP jusqu'à 50 Mo)",
      ar: "اسحب ملف الطباعة هنا (PDF, AI, PSD, ZIP حتى 50 ميغابايت)",
      en: "Drag & drop print artwork (PDF, AI, PSD, ZIP up to 50MB)",
    },
    fileUploadSubtitle: {
      fr: "Notre système effectue un pré-contrôle instantané de la résolution et des fonds perdus.",
      ar: "يقوم نظامنا بفحص تقني فوري لنسبة الوضوح وهوامش القص.",
      en: "Our automated system performs instant preflight check for bleed and resolution.",
    },
    preflightChecking: {
      fr: "Analyse PAO en cours...",
      ar: "جاري الفحص التقني للملف...",
      en: "Analyzing prepress preflight...",
    },
    preflightSuccess: {
      fr: "Fichier conforme : 300 DPI, Mode CMJN Fogra39, Débords 3mm détectés.",
      ar: "الملف مطابق للمواصفات: 300 DPI، صيغة CMYK Fogra39 وهامش قص 3 ملم.",
      en: "Artwork certified: 300 DPI, CMYK Fogra39, 3mm bleed detected.",
    },
    preflightSkip: {
      fr: "Je n'ai pas encore de fichier / J'ai besoin d'une création graphique",
      ar: "ليس لدي ملف حالياً / أحتاج لمساعدة فريق التصميم",
      en: "I don't have artwork yet / I need custom graphic design assistance",
    },
    companyName: {
      fr: "Raison Sociale de l'Entreprise",
      ar: "اسم الشركة / المؤسسة",
      en: "Company Name",
    },
    iceLabel: {
      fr: "Numéro ICE (Identifiant Commun de l'Entreprise)",
      ar: "رقم التعريف الموحد للمقاولة (ICE)",
      en: "Moroccan ICE Number (Optional for international)",
    },
    icePlaceholder: {
      fr: "Ex: 001589432000045",
      ar: "مثال: 001589432000045",
      en: "e.g. 001589432000045",
    },
    contactName: {
      fr: "Nom & Prénom du responsable",
      ar: "الاسم الكامل للمسؤول",
      en: "Contact Full Name",
    },
    email: {
      fr: "Email professionnel",
      ar: "البريد الإلكتروني للعمل",
      en: "Business Email",
    },
    phone: {
      fr: "Téléphone / WhatsApp",
      ar: "رقم الهاتف / واتساب",
      en: "Phone / WhatsApp",
    },
    city: {
      fr: "Ville de livraison",
      ar: "مدينة التوصيل",
      en: "Delivery City",
    },
    notes: {
      fr: "Spécifications particulières ou contraintes de délai",
      ar: "ملاحظات إضافية أو موعد نهائي خاص",
      en: "Special specifications or hard deadline",
    },
    submitBtn: {
      fr: "Envoyer ma demande de devis",
      ar: "إرسال طلب التسعيرة",
      en: "Submit Quote Request",
    },
    successTitle: {
      fr: "Demande enregistrée avec succès !",
      ar: "تم استلام طلب التسعيرة بنجاح!",
      en: "Quote Request Successfully Received!",
    },
    successRef: {
      fr: "Référence de votre dossier :",
      ar: "رقم ملفكم المرجعي:",
      en: "Your dossier reference:",
    },
    successMessage: {
      fr: "Un chargé de compte B2B PIXORA à Casablanca vous contacte sous 2 heures avec le récapitulatif tarifaire et le BAT numérique.",
      ar: "سيتواصل معكم مستشار تجاري من مطبعة بيكسورا بالدار البيضاء خلال ساعتين مع مقترح الأسعار والبروفة.",
      en: "A dedicated PIXORA Casablanca account manager will contact you within 2 hours with the official proposal and proof.",
    },
    sendWhatsApp: {
      fr: "Confirmer immédiatement sur WhatsApp",
      ar: "تأكيد فوري عبر واتساب",
      en: "Confirm immediately on WhatsApp",
    },
  },

  // Sample Box Modal
  sampleModal: {
    title: {
      fr: "Demander le Kit Échantillons Papiers & Finitions",
      ar: "طلب حقيبة العينات الورقية والتشطيبات",
      en: "Request Paper & Finishes Sample Kit",
    },
    subtitle: {
      fr: "Recevez à votre bureau notre coffret physique regroupant tous nos papiers de création (couché, bristol, offset, kraft) et nos finitions d'exception (vernis 3D, dorure à chaud, soft-touch).",
      ar: "احصل في مقر شركتك على صندوق فاخر يضم عينات حقيقية لجميع أنواع الورق المقوى، الكرافت، واللمسات الراقية مثل التذهيب والورنيش البارز.",
      en: "Receive our physical sample presentation box at your office featuring our premium coated stocks, kraft boards, and luxury tactile finishes.",
    },
    kitIncludes: {
      fr: "Le coffret offert comprend :",
      ar: "يحتوي الصندوق على:",
      en: "The complimentary kit includes:",
    },
    items: [
      { fr: "Nuancier papiers couchés de 135g à 400g mat & brillant", ar: "دليل الأوراق المصقولة من 135غ إلى 400غ غير لامع ولامع", en: "Coated paper swatch from 135g to 400g matte & gloss" },
      { fr: "Échantillons de boîtes en carton micro-cannelure e-commerce", ar: "عينات كرتون مضلع وصناديق الشحن للتجارة الإلكترونية", en: "Corrugated e-commerce mailer box samples" },
      { fr: "Guide tactile des finitions : Dorure or, argent, cuivre & vernis 3D", ar: "نماذج التذهيب الحراري بالذهب والفضة والورنيش البارز", en: "Tactile swatch: Gold, silver, copper foil & 3D UV" },
      { fr: "Chemise à rabat modèle de présentation avec fente carte de visite", ar: "نموذج حقيقي لحافظة ملفات مطبوعة مع جيب بطاقة العمل", en: "Real printed sample folder with card slot" },
    ],
    sendToOffice: {
      fr: "Recevoir le kit gratuitement au bureau",
      ar: "إرسال الحقيبة مجاناً إلى المكتب",
      en: "Ship Free Kit to My Office",
    },
  },

  // Footer
  footer: {
    tagline: {
      fr: "PIXORA – Imprimerie industrielle haute définition et fabricant de packaging sur mesure à Casablanca. Solutions d'impression offset et numérique pour les entreprises exigeantes au Maroc.",
      ar: "بيكسورا – مطبعة صناعية رائدة ومصنع للتعليب المخصص بالدار البيضاء. حلول متطورة في طباعة الأوفست والرقمية للمقاولات في المغرب.",
      en: "PIXORA – Premium industrial printing plant and custom packaging manufacturer in Casablanca. High-definition offset and digital solutions for ambitious enterprises.",
    },
    quickLinks: {
      fr: "Produits Phares",
      ar: "المنتجات الرئيسية",
      en: "Core Products",
    },
    servicesLinks: {
      fr: "Services & Garanties",
      ar: "الخدمات والضمانات",
      en: "Services & Guarantees",
    },
    legalLinks: {
      fr: "Mentions & Conformité",
      ar: "البيانات القانونية",
      en: "Legal & Compliance",
    },
    rights: {
      fr: "Tous droits réservés. Imprimerie PIXORA Maroc SARL · Casablanca, Royaume du Maroc.",
      ar: "جميع الحقوق محفوظة. مطبعة بيكسورا المغرب ش.م.م · الدار البيضاء، المملكة المغربية.",
      en: "All rights reserved. PIXORA Printing Morocco SARL · Casablanca, Kingdom of Morocco.",
    },
  },
} as const;
