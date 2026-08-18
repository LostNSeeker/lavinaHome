import type { Product, CollectionCategory, ShopRoom, InstagramPost, BrandCategory } from '../types';

export const BRAND_CATEGORIES: BrandCategory[] = [
  {
    "id": "lillifee",
    "slug": "lillifee",
    "name": "Prinzessin Lillifee",
    "nameEn": "Princess Lillifee",
    "logo": "/Logo_jpg_Lillifee.jpg",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "tagline": "Märchenhafter Zauber & sanfte Rosétöne",
    "taglineEn": "Fairytale magic, gentle rose tones & stars",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100.",
    "descriptionEn": "Official Princess Lillifee rugs transforming nurseries into enchanting royal sanctuaries. Certified 100% non-toxic.",
    "themeColor": "#D87093",
    "itemCount": 11
  },
  {
    "id": "felix",
    "slug": "felix",
    "name": "Felix der Hase",
    "nameEn": "Felix the Rabbit",
    "logo": "/Logo_jpg_Felix.jpg",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "tagline": "Auf Weltreise mit spannenden Abenteuern",
    "taglineEn": "World travels & exciting adventures with Felix",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor.",
    "descriptionEn": "Travel the world with Felix! Charming map and travel suitcase designs with extra-cushioned fibers.",
    "themeColor": "#E06D53",
    "itemCount": 9
  },
  {
    "id": "sharky",
    "slug": "sharky",
    "name": "Capt'n Sharky",
    "nameEn": "Capt'n Sharky",
    "logo": "/Logo_jpg_Sharky.jpg",
    "image": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "tagline": "Aufregende Piraten- & Meeresabenteuer",
    "taglineEn": "Exciting pirate & ocean adventures for little sailors",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber.",
    "descriptionEn": "Ahoy! Resilient pirate playmats with treasure maps, compass stars, and galleon ships.",
    "themeColor": "#244B6E",
    "itemCount": 9
  },
  {
    "id": "die-lieben-sieben",
    "slug": "die-lieben-sieben",
    "name": "Die Lieben Sieben",
    "nameEn": "The Lovely Seven",
    "logo": "/Logo_jpg_DL7.jpg",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "tagline": "Gemeinsam spielen, lernen & geborgen aufwachsen",
    "taglineEn": "Play, learn, and grow together in cozy warmth",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor.",
    "descriptionEn": "Beloved nursery animal friends on certified non-toxic, cloud-soft playmat pile.",
    "themeColor": "#E5B769",
    "itemCount": 9
  },
  {
    "id": "pferdefreunde",
    "slug": "pferdefreunde",
    "name": "Pferdefreunde",
    "nameEn": "Horse Friends",
    "logo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "image": "/Pferdefreunde1.jpg",
    "tagline": "Zauberhafte Pferdemotive & Weideglück",
    "taglineEn": "Graceful equestrian horse motifs & pasture bliss",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit.",
    "descriptionEn": "For passionate equestrian fans: Noble horse prints and gentle nature tones for cozy rooms.",
    "themeColor": "#A56B46",
    "itemCount": 9
  },
  {
    "id": "baby-glueck",
    "slug": "baby-glueck",
    "name": "Baby Glück",
    "nameEn": "Baby Bliss",
    "logo": "/Logo_jpg_Baby-Glueck.jpg",
    "image": "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop",
    "tagline": "Sanfte Krabbeldecken & speichelfeste Babymatten",
    "taglineEn": "Gentle tummy-time playmats & baby sheepskins",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen.",
    "descriptionEn": "Extra thick cushioning designed for baby tummy time and first crawling moments. 100% baby-safe.",
    "themeColor": "#7EA8BE",
    "itemCount": 9
  },
  {
    "id": "mondbaer",
    "slug": "mondbaer",
    "name": "Der Mondbär",
    "nameEn": "The Moon Bear",
    "logo": "/Logo_jpg_Mondbaer.jpg",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "tagline": "Sanfte Schlummerträume unter dem Sternenhimmel",
    "taglineEn": "Gentle bedtime lullabies & moonlit starry dreams",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen.",
    "descriptionEn": "The beloved Moon Bear brings soothing bedtime comfort and calm lullabies to nurseries. Certified baby-safe soft pile.",
    "themeColor": "#5C7C99",
    "itemCount": 9
  },
  {
    "id": "t-rex-world",
    "slug": "t-rex-world",
    "name": "T-Rex World",
    "nameEn": "T-Rex World",
    "logo": "/Logo_T-Rex-World.png",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "tagline": "Urzeit-Dinosaurier für mutige Forscher",
    "taglineEn": "Primeval dinosaur expeditions for young explorers",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest.",
    "descriptionEn": "Thrilling dinosaur footprints and jungle landscapes. Highly durable and dirt-resistant.",
    "themeColor": "#4B6B48",
    "itemCount": 9
  },
  {
    "id": "rock-star-baby",
    "slug": "rock-star-baby",
    "name": "Rock Star Baby",
    "nameEn": "Rock Star Baby",
    "logo": "/RSB LOGO .jpg",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "tagline": "Kultige Gitarren-, Stern- & Rocker-Designs",
    "taglineEn": "Iconic guitar, star & rockstar nursery vibes",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom.",
    "descriptionEn": "Created for cool kids and stylish parents: Statement electric guitars, stars, and monochrome rock aesthetics.",
    "themeColor": "#1C1C1C",
    "itemCount": 9
  },
  {
    "id": "bc-kids",
    "slug": "bc-kids",
    "name": "BC Kids",
    "nameEn": "BC Kids Manufaktur",
    "logo": "/Logo_BC_Kids.jpg",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "tagline": "Böing Carpet Premium Handwebung für Kinder",
    "taglineEn": "Böing Carpet luxury hand-tufted children collection",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus.",
    "descriptionEn": "Exclusive master craft from Dülmen: Hand-tufted wool blends with timeless Scandinavian aesthetics.",
    "themeColor": "#4A7C59",
    "itemCount": 9
  },
  {
    "id": "lovely-kids",
    "slug": "lovely-kids",
    "name": "Lovely Kids",
    "nameEn": "Lovely Kids",
    "logo": "/Logo Levinahome Kids.png",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "tagline": "Traumhafte Pastellfarben & Wolkenweichheit",
    "taglineEn": "Dreamy pastel rainbows & cloud-like softness",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken.",
    "descriptionEn": "Soft clouds, stars, and pastel rainbows creating soothing, tranquil spaces for sleep and daydreaming.",
    "themeColor": "#E79685",
    "itemCount": 9
  },
  {
    "id": "pummeleinhorn",
    "slug": "pummeleinhorn",
    "name": "Pummeleinhorn",
    "nameEn": "Pummel Unicorn",
    "logo": "/Logo Levinahome Kids.png",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "tagline": "Kuscheliges Einhorn-Design voller Fröhlichkeit",
    "taglineEn": "Chubby unicorn cuteness with cookie love",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven.",
    "descriptionEn": "Lovable unicorn designs bringing joy, sweetness, and ultra-plush comfort to playrooms.",
    "themeColor": "#BA68C8",
    "itemCount": 8
  },
  {
    "id": "grimmliis",
    "slug": "grimmliis",
    "name": "Grimmliis",
    "nameEn": "Grimmliis Forest",
    "logo": "/favicon.svg",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "tagline": "Liebevolle Wald- & Fabelcharaktere",
    "taglineEn": "Enchanting woodland creatures & cozy tales",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor.",
    "descriptionEn": "Enchanting forest gnomes, foxes, and owls on natural, warm, earth-toned fibers.",
    "themeColor": "#8E735B",
    "itemCount": 8
  },
  {
    "id": "spiegelburg-garden",
    "slug": "spiegelburg-garden",
    "name": "Spiegelburg Garden",
    "nameEn": "Spiegelburg Garden",
    "logo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    "tagline": "Naturverbundene Garten- & Botanikmotive",
    "taglineEn": "Botanical wildflowers & cottage garden warmth",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus.",
    "descriptionEn": "Wildflowers, songbirds, and butterflies capturing the cheerful light of a summer country garden.",
    "themeColor": "#5B7065",
    "itemCount": 8
  },
  {
    "id": "shaggy",
    "slug": "shaggy",
    "name": "Shaggy Hochflor",
    "nameEn": "Shaggy High-Pile",
    "logo": "/text_levinaHome.png",
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    "tagline": "Samtweicher Hochflor in 9 Trendfarben",
    "taglineEn": "Silky 35mm plush high pile in 9 curated tones",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht.",
    "descriptionEn": "Deep 35mm microfiber plush pile offering tactile luxury, noise reduction, and easy maintenance.",
    "themeColor": "#6C757D",
    "itemCount": 12
  },
  {
    "id": "flokati",
    "slug": "flokati",
    "name": "Flokati & Naturfelle",
    "nameEn": "Flokati & Natural Hides",
    "logo": "/Levina_home_logo.png",
    "image": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
    "tagline": "100% naturbelassene Schurwoll-Flokatis & Felle",
    "taglineEn": "100% pure organic virgin wool flokatis & hides",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle.",
    "descriptionEn": "Traditional handwoven flokatis from pure unbleached Greek virgin wool and certified sheepskins.",
    "themeColor": "#A89F91",
    "itemCount": 8
  }
];

export const GENERAL_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-gen-1',
    title: 'Handgewebte Luxusteppiche',
    tagline: 'Gefertigt aus 100% Bio-Schurwolle und edlen Naturfasern.',
    description: 'Samtweicher Trittkomfort, meisterhafte Knotung und zeitlose Eleganz für anspruchsvolles Wohnen.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
    section: 'general'
  },
  {
    id: 'col-gen-2',
    title: 'Echte Naturfelle & Lammfelle',
    tagline: '100% naturbelassene Lamm- und Rinderfelle für wohligen Komfort.',
    description: 'Unvergleichlich weiche Unikate für gemütliche Wohnräume, Sessel und behagliche Schlafzimmer.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'naturfelle',
    section: 'general'
  },
  {
    id: 'col-gen-3',
    title: 'Shaggy Hochflor-Teppiche',
    tagline: 'Kuschelweicher Hochflor in eleganten Farbnuancen.',
    description: 'Dichter, samtiger Mikrofaser-Flor für ultimative Gemütlichkeit und luxuriösen Komfort unter den Füßen.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'shaggy',
    section: 'general'
  },
  {
    id: 'col-gen-4',
    title: 'Moderne Wohnteppiche',
    tagline: 'Organische Webstrukturen und harmonische Naturtöne.',
    description: 'Flachflor- und Strukturteppiche, ideal für Wohnzimmer, Essbereich und behagliche Lounge-Zonen.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
    section: 'general'
  }
];

export const KIDS_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-kids-1',
    title: 'Kinderteppiche & Spielwelten',
    tagline: 'Lillifee, Felix, Sharky, T-Rex, Mondbär & viele mehr — 100% schadstoffgeprüft.',
    description: 'Zauberhafte Motive, spürbar weicher Flor und kindersichere Materialien für kleine Entdecker und gemütliche Kinderzimmer.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
    section: 'kids'
  },
  {
    id: 'col-kids-2',
    title: 'Babyfelle & Kuschelmatten',
    tagline: '100% schadstofffreie Lammfelle, unvergleichlich weich & wärmend.',
    description: 'Naturbelassene Babyfelle für wohlige Kuschelecken, Krabbelwelten und das Kinderbett.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'naturfelle',
    section: 'kids'
  },
  {
    id: 'col-kids-3',
    title: 'Bunte Kinder-Shaggys',
    tagline: 'Kuscheliger Hochflor in fröhlichen Farben.',
    description: 'Wolkenweicher, pflegeleichter Flor für kleine Füße und fröhliche Kinderzimmer.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'shaggy',
    section: 'kids'
  }
];

export const COLLECTIONS = GENERAL_COLLECTIONS;

export const GENERAL_ROOMS: ShopRoom[] = [
  {
    id: 'room-gen-1',
    name: 'Serene Bedroom',
    tagline: 'Soft natural fibers & restful neutrals',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'bedroom',
    section: 'general'
  },
  {
    id: 'room-gen-2',
    name: 'Living Room Sanctuary',
    tagline: 'Grounded organic warmth & master handweaving',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'living-room',
    section: 'general'
  },
  {
    id: 'room-gen-3',
    name: 'Mindful Home Office',
    tagline: 'Clean lines & durable flatweave textures',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'office',
    section: 'general'
  },
  {
    id: 'room-gen-4',
    name: 'Tactile Dining Space',
    tagline: 'Acoustic calm & rich woven wool',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'dining',
    section: 'general'
  }
];

export const KIDS_ROOMS: ShopRoom[] = [
  {
    id: 'room-kids-1',
    name: 'Baby & Toddler Nursery',
    tagline: 'Cloud-soft cushioning & pure organic flax',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'kids',
    section: 'kids'
  },
  {
    id: 'room-kids-2',
    name: 'Playroom & Creative Corner',
    tagline: 'Non-toxic, ultra-durable joyful textures',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'kids',
    section: 'kids'
  },
  {
    id: 'room-kids-3',
    name: 'Bedtime Dream Room',
    tagline: 'Calming pastels & un-dyed New Zealand wool',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'kids',
    section: 'kids'
  }
];

export const SHOP_ROOMS = GENERAL_ROOMS;

export const GENERAL_PRODUCTS: Product[] = [
  {
    "id": "prod-spiegelburg-garden-218",
    "plentyVariationId": 2180,
    "itemId": 218,
    "sku": "SPI-218",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Wildblumen Wiese",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Wildblumen Wiese\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-219",
    "plentyVariationId": 2190,
    "itemId": 219,
    "sku": "SPI-219",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Vögelchen & Zweige",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Vögelchen & Zweige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-220",
    "plentyVariationId": 2200,
    "itemId": 220,
    "sku": "SPI-220",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Schmetterlingsgarten",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Schmetterlingsgarten\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-221",
    "plentyVariationId": 2210,
    "itemId": 221,
    "sku": "SPI-221",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Lavendelbusch",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Lavendelbusch\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-222",
    "plentyVariationId": 2220,
    "itemId": 222,
    "sku": "SPI-222",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Rosenranke",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Rosenranke\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-223",
    "plentyVariationId": 2230,
    "itemId": 223,
    "sku": "SPI-223",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Landhaus Botanik",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Landhaus Botanik\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-224",
    "plentyVariationId": 2240,
    "itemId": 224,
    "sku": "SPI-224",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Kräutergarten",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Kräutergarten\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-225",
    "plentyVariationId": 2250,
    "itemId": 225,
    "sku": "SPI-225",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Cottage Blumen",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Cottage Blumen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-226",
    "plentyVariationId": 2260,
    "itemId": 226,
    "sku": "SHA-226",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Soft Cream",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Soft Cream\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-227",
    "plentyVariationId": 2270,
    "itemId": 227,
    "sku": "SHA-227",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Silbergrau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-228",
    "plentyVariationId": 2280,
    "itemId": 228,
    "sku": "SHA-228",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Anthrazit",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Anthrazit\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-229",
    "plentyVariationId": 2290,
    "itemId": 229,
    "sku": "SHA-229",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Warm Mocca",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Warm Mocca\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-230",
    "plentyVariationId": 2300,
    "itemId": 230,
    "sku": "SHA-230",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Salbei Grün",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Salbei Grün\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-231",
    "plentyVariationId": 2310,
    "itemId": 231,
    "sku": "SHA-231",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Terracotta",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Terracotta\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-232",
    "plentyVariationId": 2320,
    "itemId": 232,
    "sku": "SHA-232",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Aubergine",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Aubergine\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-233",
    "plentyVariationId": 2330,
    "itemId": 233,
    "sku": "SHA-233",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Dusty Pink",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Dusty Pink\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-234",
    "plentyVariationId": 2340,
    "itemId": 234,
    "sku": "SHA-234",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Sand Beige",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Sand Beige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-235",
    "plentyVariationId": 2350,
    "itemId": 235,
    "sku": "SHA-235",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Ozeanblau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 222,
    "originalPrice": 289,
    "rating": 4.8,
    "reviewsCount": 75,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Ozeanblau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-236",
    "plentyVariationId": 2360,
    "itemId": 236,
    "sku": "SHA-236",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Bicolor Melange",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 239,
    "originalPrice": 311,
    "rating": 4.9,
    "reviewsCount": 82,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Bicolor Melange\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-237",
    "plentyVariationId": 2370,
    "itemId": 237,
    "sku": "SHA-237",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Tiefschwarz",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 76,
    "originalPrice": 99,
    "rating": 5,
    "reviewsCount": 14,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Tiefschwarz\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-238",
    "plentyVariationId": 2380,
    "itemId": 238,
    "sku": "FLO-238",
    "name": "Flokati & Naturfelle Teppich – Original Griechischer Flokati 100% Naturwolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Original Griechischer Flokati 100% Naturwolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-239",
    "plentyVariationId": 2390,
    "itemId": 239,
    "sku": "FLO-239",
    "name": "Flokati & Naturfelle Teppich – Luxus Natur-Lammfell Neuseeland Creme",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Luxus Natur-Lammfell Neuseeland Creme\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-240",
    "plentyVariationId": 2400,
    "itemId": 240,
    "sku": "FLO-240",
    "name": "Flokati & Naturfelle Teppich – Medizinisches Baby-Lammfell Goldgelb",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Medizinisches Baby-Lammfell Goldgelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-241",
    "plentyVariationId": 2410,
    "itemId": 241,
    "sku": "FLO-241",
    "name": "Flokati & Naturfelle Teppich – Echtes Naturbelassenes Rinderfell Unikat",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Echtes Naturbelassenes Rinderfell Unikat\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-242",
    "plentyVariationId": 2420,
    "itemId": 242,
    "sku": "FLO-242",
    "name": "Flokati & Naturfelle Teppich – Premium Schaffell Taupe",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Premium Schaffell Taupe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-243",
    "plentyVariationId": 2430,
    "itemId": 243,
    "sku": "FLO-243",
    "name": "Flokati & Naturfelle Teppich – Handgewebter Hochland-Flokati Wolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Handgewebter Hochland-Flokati Wolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-244",
    "plentyVariationId": 2440,
    "itemId": 244,
    "sku": "FLO-244",
    "name": "Flokati & Naturfelle Teppich – Gotland Natur-Lammfell Silbergrau",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Gotland Natur-Lammfell Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-245",
    "plentyVariationId": 2450,
    "itemId": 245,
    "sku": "FLO-245",
    "name": "Flokati & Naturfelle Teppich – Natur-Islandlammfell Langhaar Weiß",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Natur-Islandlammfell Langhaar Weiß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  }
];
export const KIDS_PRODUCTS: Product[] = [
  {
    "id": "prod-lillifee-101",
    "plentyVariationId": 1010,
    "itemId": 101,
    "sku": "LIL-101",
    "name": "Prinzessin Lillifee Teppich – Zauberschloss Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Zauberschloss Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-102",
    "plentyVariationId": 1020,
    "itemId": 102,
    "sku": "LIL-102",
    "name": "Prinzessin Lillifee Teppich – Sternenzauber Traum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Sternenzauber Traum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-103",
    "plentyVariationId": 1030,
    "itemId": 103,
    "sku": "LIL-103",
    "name": "Prinzessin Lillifee Teppich – Blütenfee Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Blütenfee Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-104",
    "plentyVariationId": 1040,
    "itemId": 104,
    "sku": "LIL-104",
    "name": "Prinzessin Lillifee Teppich – Schmetterling Zauberwald",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Schmetterling Zauberwald\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-105",
    "plentyVariationId": 1050,
    "itemId": 105,
    "sku": "LIL-105",
    "name": "Prinzessin Lillifee Teppich – Glitzerstern Krone",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Glitzerstern Krone\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-106",
    "plentyVariationId": 1060,
    "itemId": 106,
    "sku": "LIL-106",
    "name": "Prinzessin Lillifee Teppich – Märchenzauber Soft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Märchenzauber Soft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-107",
    "plentyVariationId": 1070,
    "itemId": 107,
    "sku": "LIL-107",
    "name": "Prinzessin Lillifee Teppich – Schlossgarten Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Schlossgarten Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-108",
    "plentyVariationId": 1080,
    "itemId": 108,
    "sku": "LIL-108",
    "name": "Prinzessin Lillifee Teppich – Wolkenelfe Rosa",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Wolkenelfe Rosa\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-109",
    "plentyVariationId": 1090,
    "itemId": 109,
    "sku": "LIL-109",
    "name": "Prinzessin Lillifee Teppich – Prinzessinnen Krönchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Prinzessinnen Krönchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-110",
    "plentyVariationId": 1100,
    "itemId": 110,
    "sku": "LIL-110",
    "name": "Prinzessin Lillifee Teppich – Fee Lillifee Herz",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 222,
    "originalPrice": 289,
    "rating": 4.8,
    "reviewsCount": 75,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Fee Lillifee Herz\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-111",
    "plentyVariationId": 1110,
    "itemId": 111,
    "sku": "LIL-111",
    "name": "Prinzessin Lillifee Teppich – Sternenstaub",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 239,
    "originalPrice": 311,
    "rating": 4.9,
    "reviewsCount": 82,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Sternenstaub\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-112",
    "plentyVariationId": 1120,
    "itemId": 112,
    "sku": "FEL-112",
    "name": "Felix der Hase Teppich – Felix Weltreise Koffer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Weltreise Koffer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-113",
    "plentyVariationId": 1130,
    "itemId": 113,
    "sku": "FEL-113",
    "name": "Felix der Hase Teppich – Felix London Big Ben",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix London Big Ben\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-114",
    "plentyVariationId": 1140,
    "itemId": 114,
    "sku": "FEL-114",
    "name": "Felix der Hase Teppich – Felix Paris Eiffelturm",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Paris Eiffelturm\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-115",
    "plentyVariationId": 1150,
    "itemId": 115,
    "sku": "FEL-115",
    "name": "Felix der Hase Teppich – Felix Postkarte Abenteuer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Postkarte Abenteuer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-116",
    "plentyVariationId": 1160,
    "itemId": 116,
    "sku": "FEL-116",
    "name": "Felix der Hase Teppich – Felix Antarktis Pinguin",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Antarktis Pinguin\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-117",
    "plentyVariationId": 1170,
    "itemId": 117,
    "sku": "FEL-117",
    "name": "Felix der Hase Teppich – Felix Safari Serengeti",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Safari Serengeti\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-118",
    "plentyVariationId": 1180,
    "itemId": 118,
    "sku": "FEL-118",
    "name": "Felix der Hase Teppich – Felix Flugzeug Wolken",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Flugzeug Wolken\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-119",
    "plentyVariationId": 1190,
    "itemId": 119,
    "sku": "FEL-119",
    "name": "Felix der Hase Teppich – Felix Schiff Ozean",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Schiff Ozean\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-120",
    "plentyVariationId": 1200,
    "itemId": 120,
    "sku": "FEL-120",
    "name": "Felix der Hase Teppich – Felix New York Skyline",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix New York Skyline\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-121",
    "plentyVariationId": 1210,
    "itemId": 121,
    "sku": "SHA-121",
    "name": "Capt'n Sharky Teppich – Sharky Piratenschiff Ahoi",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Piratenschiff Ahoi\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-122",
    "plentyVariationId": 1220,
    "itemId": 122,
    "sku": "SHA-122",
    "name": "Capt'n Sharky Teppich – Sharky Schatzkarte Gold",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Schatzkarte Gold\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-123",
    "plentyVariationId": 1230,
    "itemId": 123,
    "sku": "SHA-123",
    "name": "Capt'n Sharky Teppich – Sharky Kompass Seeräuber",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Kompass Seeräuber\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-124",
    "plentyVariationId": 1240,
    "itemId": 124,
    "sku": "SHA-124",
    "name": "Capt'n Sharky Teppich – Sharky Totenkopf Flagge",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Totenkopf Flagge\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-125",
    "plentyVariationId": 1250,
    "itemId": 125,
    "sku": "SHA-125",
    "name": "Capt'n Sharky Teppich – Sharky Krake Ozean",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Krake Ozean\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-126",
    "plentyVariationId": 1260,
    "itemId": 126,
    "sku": "SHA-126",
    "name": "Capt'n Sharky Teppich – Sharky Ankerplatz Blau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Ankerplatz Blau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-127",
    "plentyVariationId": 1270,
    "itemId": 127,
    "sku": "SHA-127",
    "name": "Capt'n Sharky Teppich – Sharky Papagei Coco",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Papagei Coco\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-128",
    "plentyVariationId": 1280,
    "itemId": 128,
    "sku": "SHA-128",
    "name": "Capt'n Sharky Teppich – Sharky Schatztruhe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Schatztruhe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-129",
    "plentyVariationId": 1290,
    "itemId": 129,
    "sku": "SHA-129",
    "name": "Capt'n Sharky Teppich – Sharky Karibik Bucht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Karibik Bucht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-130",
    "plentyVariationId": 1300,
    "itemId": 130,
    "sku": "DIE-130",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Bunter Kreis",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Bunter Kreis\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-131",
    "plentyVariationId": 1310,
    "itemId": 131,
    "sku": "DIE-131",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Eisenbahn",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Eisenbahn\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-132",
    "plentyVariationId": 1320,
    "itemId": 132,
    "sku": "DIE-132",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Picknick",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Picknick\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-133",
    "plentyVariationId": 1330,
    "itemId": 133,
    "sku": "DIE-133",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Fußballfreunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Fußballfreunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-134",
    "plentyVariationId": 1340,
    "itemId": 134,
    "sku": "DIE-134",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Wolkenhüpfen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Wolkenhüpfen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-135",
    "plentyVariationId": 1350,
    "itemId": 135,
    "sku": "DIE-135",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Zirkuszelt",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Zirkuszelt\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-136",
    "plentyVariationId": 1360,
    "itemId": 136,
    "sku": "DIE-136",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Schaukelspaß",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Schaukelspaß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-137",
    "plentyVariationId": 1370,
    "itemId": 137,
    "sku": "DIE-137",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Zahlen & Buchstaben",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Zahlen & Buchstaben\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-138",
    "plentyVariationId": 1380,
    "itemId": 138,
    "sku": "DIE-138",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Regenbogen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Regenbogen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-139",
    "plentyVariationId": 1390,
    "itemId": 139,
    "sku": "PFE-139",
    "name": "Pferdefreunde Teppich – Pferdefreunde Weideglück",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Weideglück\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-140",
    "plentyVariationId": 1400,
    "itemId": 140,
    "sku": "PFE-140",
    "name": "Pferdefreunde Teppich – Pferdefreunde Hufeisen & Rosen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Hufeisen & Rosen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-141",
    "plentyVariationId": 1410,
    "itemId": 141,
    "sku": "PFE-141",
    "name": "Pferdefreunde Teppich – Pferdefreunde Galopp im Wind",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Galopp im Wind\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-142",
    "plentyVariationId": 1420,
    "itemId": 142,
    "sku": "PFE-142",
    "name": "Pferdefreunde Teppich – Pferdefreunde Ponyhof",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Ponyhof\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-143",
    "plentyVariationId": 1430,
    "itemId": 143,
    "sku": "PFE-143",
    "name": "Pferdefreunde Teppich – Pferdefreunde Zaumzeug & Sattel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Zaumzeug & Sattel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-144",
    "plentyVariationId": 1440,
    "itemId": 144,
    "sku": "PFE-144",
    "name": "Pferdefreunde Teppich – Pferdefreunde Schimmel & Rappe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Schimmel & Rappe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-145",
    "plentyVariationId": 1450,
    "itemId": 145,
    "sku": "PFE-145",
    "name": "Pferdefreunde Teppich – Pferdefreunde Sternennacht Koppel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Sternennacht Koppel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-146",
    "plentyVariationId": 1460,
    "itemId": 146,
    "sku": "PFE-146",
    "name": "Pferdefreunde Teppich – Pferdefreunde Fohlenliebe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Fohlenliebe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-147",
    "plentyVariationId": 1470,
    "itemId": 147,
    "sku": "PFE-147",
    "name": "Pferdefreunde Teppich – Pferdefreunde Gestüt Sonnenaufgang",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Gestüt Sonnenaufgang\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-148",
    "plentyVariationId": 1480,
    "itemId": 148,
    "sku": "BAB-148",
    "name": "Baby Glück Teppich – Baby Glück Erste Schritte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Erste Schritte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-149",
    "plentyVariationId": 1490,
    "itemId": 149,
    "sku": "BAB-149",
    "name": "Baby Glück Teppich – Baby Glück Schlafgut Schäfchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Schlafgut Schäfchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-150",
    "plentyVariationId": 1500,
    "itemId": 150,
    "sku": "BAB-150",
    "name": "Baby Glück Teppich – Baby Glück Mond & Sterne",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Mond & Sterne\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-151",
    "plentyVariationId": 1510,
    "itemId": 151,
    "sku": "BAB-151",
    "name": "Baby Glück Teppich – Baby Glück Waldtiere Sanft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Waldtiere Sanft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-152",
    "plentyVariationId": 1520,
    "itemId": 152,
    "sku": "BAB-152",
    "name": "Baby Glück Teppich – Baby Glück Bärchen Umarmung",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Bärchen Umarmung\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-153",
    "plentyVariationId": 1530,
    "itemId": 153,
    "sku": "BAB-153",
    "name": "Baby Glück Teppich – Baby Glück Wolkenwiege",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Wolkenwiege\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-154",
    "plentyVariationId": 1540,
    "itemId": 154,
    "sku": "BAB-154",
    "name": "Baby Glück Teppich – Baby Glück Babyfelle Kuschel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Babyfelle Kuschel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-155",
    "plentyVariationId": 1550,
    "itemId": 155,
    "sku": "BAB-155",
    "name": "Baby Glück Teppich – Baby Glück Pastell Mint",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Pastell Mint\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-156",
    "plentyVariationId": 1560,
    "itemId": 156,
    "sku": "BAB-156",
    "name": "Baby Glück Teppich – Baby Glück Entdecker Matte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Entdecker Matte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-157",
    "plentyVariationId": 1570,
    "itemId": 157,
    "sku": "MON-157",
    "name": "Der Mondbär Teppich – Mondbär Schlummertraum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schlummertraum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-158",
    "plentyVariationId": 1580,
    "itemId": 158,
    "sku": "MON-158",
    "name": "Der Mondbär Teppich – Mondbär Schlafgut Mond",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schlafgut Mond\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-159",
    "plentyVariationId": 1590,
    "itemId": 159,
    "sku": "MON-159",
    "name": "Der Mondbär Teppich – Mondbär Sternenhimmel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Sternenhimmel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-160",
    "plentyVariationId": 1600,
    "itemId": 160,
    "sku": "MON-160",
    "name": "Der Mondbär Teppich – Mondbär Schäfchenwolke",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schäfchenwolke\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-161",
    "plentyVariationId": 1610,
    "itemId": 161,
    "sku": "MON-161",
    "name": "Der Mondbär Teppich – Mondbär Gute Nacht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Gute Nacht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-162",
    "plentyVariationId": 1620,
    "itemId": 162,
    "sku": "MON-162",
    "name": "Der Mondbär Teppich – Mondbär Sternenstaub Blau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Sternenstaub Blau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-163",
    "plentyVariationId": 1630,
    "itemId": 163,
    "sku": "MON-163",
    "name": "Der Mondbär Teppich – Mondbär Wolkenschaukel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Wolkenschaukel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-164",
    "plentyVariationId": 1640,
    "itemId": 164,
    "sku": "MON-164",
    "name": "Der Mondbär Teppich – Mondbär Zaubermond",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Zaubermond\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-165",
    "plentyVariationId": 1650,
    "itemId": 165,
    "sku": "MON-165",
    "name": "Der Mondbär Teppich – Mondbär Kleine Sternchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Kleine Sternchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-166",
    "plentyVariationId": 1660,
    "itemId": 166,
    "sku": "T-R-166",
    "name": "T-Rex World Teppich – T-Rex World Dino Spuren",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Dino Spuren\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-167",
    "plentyVariationId": 1670,
    "itemId": 167,
    "sku": "T-R-167",
    "name": "T-Rex World Teppich – T-Rex World Urzeit Dschungel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Urzeit Dschungel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-168",
    "plentyVariationId": 1680,
    "itemId": 168,
    "sku": "T-R-168",
    "name": "T-Rex World Teppich – T-Rex World Vulkan Expedition",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Vulkan Expedition\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-169",
    "plentyVariationId": 1690,
    "itemId": 169,
    "sku": "T-R-169",
    "name": "T-Rex World Teppich – T-Rex World Brachiosaurus Grün",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Brachiosaurus Grün\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-170",
    "plentyVariationId": 1700,
    "itemId": 170,
    "sku": "T-R-170",
    "name": "T-Rex World Teppich – T-Rex World Triceratops Sand",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Triceratops Sand\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-171",
    "plentyVariationId": 1710,
    "itemId": 171,
    "sku": "T-R-171",
    "name": "T-Rex World Teppich – T-Rex World Fossilien Forscher",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Fossilien Forscher\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-172",
    "plentyVariationId": 1720,
    "itemId": 172,
    "sku": "T-R-172",
    "name": "T-Rex World Teppich – T-Rex World Raubsaurier Brüllen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Raubsaurier Brüllen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-173",
    "plentyVariationId": 1730,
    "itemId": 173,
    "sku": "T-R-173",
    "name": "T-Rex World Teppich – T-Rex World Dino Skelett",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Dino Skelett\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-174",
    "plentyVariationId": 1740,
    "itemId": 174,
    "sku": "T-R-174",
    "name": "T-Rex World Teppich – T-Rex World Jurassic Park",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Jurassic Park\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-175",
    "plentyVariationId": 1750,
    "itemId": 175,
    "sku": "ROC-175",
    "name": "Rock Star Baby Teppich – Rock Star Baby Electric Guitar Black",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Electric Guitar Black\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-176",
    "plentyVariationId": 1760,
    "itemId": 176,
    "sku": "ROC-176",
    "name": "Rock Star Baby Teppich – Rock Star Baby Guitar White Heart",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Guitar White Heart\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-177",
    "plentyVariationId": 1770,
    "itemId": 177,
    "sku": "ROC-177",
    "name": "Rock Star Baby Teppich – Rock Star Baby Star Dust Grey",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Star Dust Grey\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-178",
    "plentyVariationId": 1780,
    "itemId": 178,
    "sku": "ROC-178",
    "name": "Rock Star Baby Teppich – Rock Star Baby Skull & Wings",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Skull & Wings\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-179",
    "plentyVariationId": 1790,
    "itemId": 179,
    "sku": "ROC-179",
    "name": "Rock Star Baby Teppich – Rock Star Baby Rocker Bass",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Rocker Bass\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-180",
    "plentyVariationId": 1800,
    "itemId": 180,
    "sku": "ROC-180",
    "name": "Rock Star Baby Teppich – Rock Star Baby Vintage Acoustic",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Vintage Acoustic\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-181",
    "plentyVariationId": 1810,
    "itemId": 181,
    "sku": "ROC-181",
    "name": "Rock Star Baby Teppich – Rock Star Baby Stage Lights",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Stage Lights\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-182",
    "plentyVariationId": 1820,
    "itemId": 182,
    "sku": "ROC-182",
    "name": "Rock Star Baby Teppich – Rock Star Baby Leopard Rock",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Leopard Rock\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-183",
    "plentyVariationId": 1830,
    "itemId": 183,
    "sku": "ROC-183",
    "name": "Rock Star Baby Teppich – Rock Star Baby Monochrom Star",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Monochrom Star\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-184",
    "plentyVariationId": 1840,
    "itemId": 184,
    "sku": "BC--184",
    "name": "BC Kids Teppich – BC Kids Nordic Cloud Anthrazit",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Nordic Cloud Anthrazit\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-185",
    "plentyVariationId": 1850,
    "itemId": 185,
    "sku": "BC--185",
    "name": "BC Kids Teppich – BC Kids Pure Wool Minimalist",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Pure Wool Minimalist\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-186",
    "plentyVariationId": 1860,
    "itemId": 186,
    "sku": "BC--186",
    "name": "BC Kids Teppich – BC Kids Handgetuftet Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Handgetuftet Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-187",
    "plentyVariationId": 1870,
    "itemId": 187,
    "sku": "BC--187",
    "name": "BC Kids Teppich – BC Kids Geometrie Beige",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Geometrie Beige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-188",
    "plentyVariationId": 1880,
    "itemId": 188,
    "sku": "BC--188",
    "name": "BC Kids Teppich – BC Kids Soft Touch Grau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Soft Touch Grau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-189",
    "plentyVariationId": 1890,
    "itemId": 189,
    "sku": "BC--189",
    "name": "BC Kids Teppich – BC Kids Bio-Wolle Natur",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Bio-Wolle Natur\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-190",
    "plentyVariationId": 1900,
    "itemId": 190,
    "sku": "BC--190",
    "name": "BC Kids Teppich – BC Kids Skandi Triangle",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Skandi Triangle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-191",
    "plentyVariationId": 1910,
    "itemId": 191,
    "sku": "BC--191",
    "name": "BC Kids Teppich – BC Kids Honeycomb Gelb",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Honeycomb Gelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-192",
    "plentyVariationId": 1920,
    "itemId": 192,
    "sku": "BC--192",
    "name": "BC Kids Teppich – BC Kids Architekten Spielteppich",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Architekten Spielteppich\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-193",
    "plentyVariationId": 1930,
    "itemId": 193,
    "sku": "LOV-193",
    "name": "Lovely Kids Teppich – Lovely Kids Regenbogenzauber",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Regenbogenzauber\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-194",
    "plentyVariationId": 1940,
    "itemId": 194,
    "sku": "LOV-194",
    "name": "Lovely Kids Teppich – Lovely Kids Sternenwolke Mint",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Sternenwolke Mint\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-195",
    "plentyVariationId": 1950,
    "itemId": 195,
    "sku": "LOV-195",
    "name": "Lovely Kids Teppich – Lovely Kids Heißluftballon",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Heißluftballon\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-196",
    "plentyVariationId": 1960,
    "itemId": 196,
    "sku": "LOV-196",
    "name": "Lovely Kids Teppich – Lovely Kids Bunte Punkte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Bunte Punkte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-197",
    "plentyVariationId": 1970,
    "itemId": 197,
    "sku": "LOV-197",
    "name": "Lovely Kids Teppich – Lovely Kids Mondtraum Gelb",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Mondtraum Gelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-198",
    "plentyVariationId": 1980,
    "itemId": 198,
    "sku": "LOV-198",
    "name": "Lovely Kids Teppich – Lovely Kids Teddy Bär Soft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Teddy Bär Soft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-199",
    "plentyVariationId": 1990,
    "itemId": 199,
    "sku": "LOV-199",
    "name": "Lovely Kids Teppich – Lovely Kids Zickzack Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Zickzack Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-200",
    "plentyVariationId": 2000,
    "itemId": 200,
    "sku": "LOV-200",
    "name": "Lovely Kids Teppich – Lovely Kids Herzen Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Herzen Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-201",
    "plentyVariationId": 2010,
    "itemId": 201,
    "sku": "LOV-201",
    "name": "Lovely Kids Teppich – Lovely Kids Safari Freunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Safari Freunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-202",
    "plentyVariationId": 2020,
    "itemId": 202,
    "sku": "PUM-202",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Keks Liebe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Keks Liebe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-203",
    "plentyVariationId": 2030,
    "itemId": 203,
    "sku": "PUM-203",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Sternschnuppe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Sternschnuppe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-204",
    "plentyVariationId": 2040,
    "itemId": 204,
    "sku": "PUM-204",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Regenbogen Glitzer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Regenbogen Glitzer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-205",
    "plentyVariationId": 2050,
    "itemId": 205,
    "sku": "PUM-205",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Donut Pause",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Donut Pause\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-206",
    "plentyVariationId": 2060,
    "itemId": 206,
    "sku": "PUM-206",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Flauschig & Bunt",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Flauschig & Bunt\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-207",
    "plentyVariationId": 2070,
    "itemId": 207,
    "sku": "PUM-207",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Herzchen Wölkchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Herzchen Wölkchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-208",
    "plentyVariationId": 2080,
    "itemId": 208,
    "sku": "PUM-208",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Schokotraum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Schokotraum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-209",
    "plentyVariationId": 2090,
    "itemId": 209,
    "sku": "PUM-209",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Glitzerspaß",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Glitzerspaß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-210",
    "plentyVariationId": 2100,
    "itemId": 210,
    "sku": "GRI-210",
    "name": "Grimmliis Teppich – Grimmliis Waldwichtel Hütte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Waldwichtel Hütte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-211",
    "plentyVariationId": 2110,
    "itemId": 211,
    "sku": "GRI-211",
    "name": "Grimmliis Teppich – Grimmliis Kleiner Fuchs",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Kleiner Fuchs\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-212",
    "plentyVariationId": 2120,
    "itemId": 212,
    "sku": "GRI-212",
    "name": "Grimmliis Teppich – Grimmliis Eulenbaum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Eulenbaum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-213",
    "plentyVariationId": 2130,
    "itemId": 213,
    "sku": "GRI-213",
    "name": "Grimmliis Teppich – Grimmliis Igel im Moos",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Igel im Moos\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-214",
    "plentyVariationId": 2140,
    "itemId": 214,
    "sku": "GRI-214",
    "name": "Grimmliis Teppich – Grimmliis Zauberpilz Wald",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Zauberpilz Wald\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-215",
    "plentyVariationId": 2150,
    "itemId": 215,
    "sku": "GRI-215",
    "name": "Grimmliis Teppich – Grimmliis Herbstblätter",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Herbstblätter\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-216",
    "plentyVariationId": 2160,
    "itemId": 216,
    "sku": "GRI-216",
    "name": "Grimmliis Teppich – Grimmliis Wiesenfreunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Wiesenfreunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-217",
    "plentyVariationId": 2170,
    "itemId": 217,
    "sku": "GRI-217",
    "name": "Grimmliis Teppich – Grimmliis Sternennacht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Sternennacht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-226",
    "plentyVariationId": 2260,
    "itemId": 226,
    "sku": "SHA-226",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Soft Cream",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Soft Cream\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-227",
    "plentyVariationId": 2270,
    "itemId": 227,
    "sku": "SHA-227",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Silbergrau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-228",
    "plentyVariationId": 2280,
    "itemId": 228,
    "sku": "SHA-228",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Anthrazit",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Anthrazit\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-229",
    "plentyVariationId": 2290,
    "itemId": 229,
    "sku": "SHA-229",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Warm Mocca",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Warm Mocca\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-230",
    "plentyVariationId": 2300,
    "itemId": 230,
    "sku": "SHA-230",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Salbei Grün",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Salbei Grün\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-231",
    "plentyVariationId": 2310,
    "itemId": 231,
    "sku": "SHA-231",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Terracotta",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Terracotta\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-232",
    "plentyVariationId": 2320,
    "itemId": 232,
    "sku": "SHA-232",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Aubergine",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Aubergine\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-233",
    "plentyVariationId": 2330,
    "itemId": 233,
    "sku": "SHA-233",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Dusty Pink",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Dusty Pink\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-234",
    "plentyVariationId": 2340,
    "itemId": 234,
    "sku": "SHA-234",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Sand Beige",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Sand Beige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-235",
    "plentyVariationId": 2350,
    "itemId": 235,
    "sku": "SHA-235",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Ozeanblau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 222,
    "originalPrice": 289,
    "rating": 4.8,
    "reviewsCount": 75,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Ozeanblau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-236",
    "plentyVariationId": 2360,
    "itemId": 236,
    "sku": "SHA-236",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Bicolor Melange",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 239,
    "originalPrice": 311,
    "rating": 4.9,
    "reviewsCount": 82,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Bicolor Melange\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-237",
    "plentyVariationId": 2370,
    "itemId": 237,
    "sku": "SHA-237",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Tiefschwarz",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 76,
    "originalPrice": 99,
    "rating": 5,
    "reviewsCount": 14,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Tiefschwarz\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-238",
    "plentyVariationId": 2380,
    "itemId": 238,
    "sku": "FLO-238",
    "name": "Flokati & Naturfelle Teppich – Original Griechischer Flokati 100% Naturwolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Original Griechischer Flokati 100% Naturwolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-239",
    "plentyVariationId": 2390,
    "itemId": 239,
    "sku": "FLO-239",
    "name": "Flokati & Naturfelle Teppich – Luxus Natur-Lammfell Neuseeland Creme",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Luxus Natur-Lammfell Neuseeland Creme\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-240",
    "plentyVariationId": 2400,
    "itemId": 240,
    "sku": "FLO-240",
    "name": "Flokati & Naturfelle Teppich – Medizinisches Baby-Lammfell Goldgelb",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Medizinisches Baby-Lammfell Goldgelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-241",
    "plentyVariationId": 2410,
    "itemId": 241,
    "sku": "FLO-241",
    "name": "Flokati & Naturfelle Teppich – Echtes Naturbelassenes Rinderfell Unikat",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Echtes Naturbelassenes Rinderfell Unikat\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-242",
    "plentyVariationId": 2420,
    "itemId": 242,
    "sku": "FLO-242",
    "name": "Flokati & Naturfelle Teppich – Premium Schaffell Taupe",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Premium Schaffell Taupe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-243",
    "plentyVariationId": 2430,
    "itemId": 243,
    "sku": "FLO-243",
    "name": "Flokati & Naturfelle Teppich – Handgewebter Hochland-Flokati Wolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Handgewebter Hochland-Flokati Wolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-244",
    "plentyVariationId": 2440,
    "itemId": 244,
    "sku": "FLO-244",
    "name": "Flokati & Naturfelle Teppich – Gotland Natur-Lammfell Silbergrau",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Gotland Natur-Lammfell Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-245",
    "plentyVariationId": 2450,
    "itemId": 245,
    "sku": "FLO-245",
    "name": "Flokati & Naturfelle Teppich – Natur-Islandlammfell Langhaar Weiß",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Natur-Islandlammfell Langhaar Weiß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  }
];
export const PRODUCTS: Product[] = [
  {
    "id": "prod-lillifee-101",
    "plentyVariationId": 1010,
    "itemId": 101,
    "sku": "LIL-101",
    "name": "Prinzessin Lillifee Teppich – Zauberschloss Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Zauberschloss Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-102",
    "plentyVariationId": 1020,
    "itemId": 102,
    "sku": "LIL-102",
    "name": "Prinzessin Lillifee Teppich – Sternenzauber Traum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Sternenzauber Traum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-103",
    "plentyVariationId": 1030,
    "itemId": 103,
    "sku": "LIL-103",
    "name": "Prinzessin Lillifee Teppich – Blütenfee Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Blütenfee Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-104",
    "plentyVariationId": 1040,
    "itemId": 104,
    "sku": "LIL-104",
    "name": "Prinzessin Lillifee Teppich – Schmetterling Zauberwald",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Schmetterling Zauberwald\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-105",
    "plentyVariationId": 1050,
    "itemId": 105,
    "sku": "LIL-105",
    "name": "Prinzessin Lillifee Teppich – Glitzerstern Krone",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Glitzerstern Krone\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-106",
    "plentyVariationId": 1060,
    "itemId": 106,
    "sku": "LIL-106",
    "name": "Prinzessin Lillifee Teppich – Märchenzauber Soft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Märchenzauber Soft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-107",
    "plentyVariationId": 1070,
    "itemId": 107,
    "sku": "LIL-107",
    "name": "Prinzessin Lillifee Teppich – Schlossgarten Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Schlossgarten Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-108",
    "plentyVariationId": 1080,
    "itemId": 108,
    "sku": "LIL-108",
    "name": "Prinzessin Lillifee Teppich – Wolkenelfe Rosa",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Wolkenelfe Rosa\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-109",
    "plentyVariationId": 1090,
    "itemId": 109,
    "sku": "LIL-109",
    "name": "Prinzessin Lillifee Teppich – Prinzessinnen Krönchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Prinzessinnen Krönchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-110",
    "plentyVariationId": 1100,
    "itemId": 110,
    "sku": "LIL-110",
    "name": "Prinzessin Lillifee Teppich – Fee Lillifee Herz",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 222,
    "originalPrice": 289,
    "rating": 4.8,
    "reviewsCount": 75,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Fee Lillifee Herz\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lillifee-111",
    "plentyVariationId": 1110,
    "itemId": 111,
    "sku": "LIL-111",
    "name": "Prinzessin Lillifee Teppich – Sternenstaub",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lillifee",
    "brandLogo": "/Logo_jpg_Lillifee.jpg",
    "categoryLabel": "Prinzessin Lillifee Teppiche",
    "price": 239,
    "originalPrice": 311,
    "rating": 4.9,
    "reviewsCount": 82,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#D87093"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100. Modell \"Sternenstaub\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-112",
    "plentyVariationId": 1120,
    "itemId": 112,
    "sku": "FEL-112",
    "name": "Felix der Hase Teppich – Felix Weltreise Koffer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Weltreise Koffer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-113",
    "plentyVariationId": 1130,
    "itemId": 113,
    "sku": "FEL-113",
    "name": "Felix der Hase Teppich – Felix London Big Ben",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix London Big Ben\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-114",
    "plentyVariationId": 1140,
    "itemId": 114,
    "sku": "FEL-114",
    "name": "Felix der Hase Teppich – Felix Paris Eiffelturm",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Paris Eiffelturm\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-115",
    "plentyVariationId": 1150,
    "itemId": 115,
    "sku": "FEL-115",
    "name": "Felix der Hase Teppich – Felix Postkarte Abenteuer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Postkarte Abenteuer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-116",
    "plentyVariationId": 1160,
    "itemId": 116,
    "sku": "FEL-116",
    "name": "Felix der Hase Teppich – Felix Antarktis Pinguin",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Antarktis Pinguin\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-117",
    "plentyVariationId": 1170,
    "itemId": 117,
    "sku": "FEL-117",
    "name": "Felix der Hase Teppich – Felix Safari Serengeti",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Safari Serengeti\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-118",
    "plentyVariationId": 1180,
    "itemId": 118,
    "sku": "FEL-118",
    "name": "Felix der Hase Teppich – Felix Flugzeug Wolken",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Flugzeug Wolken\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-119",
    "plentyVariationId": 1190,
    "itemId": 119,
    "sku": "FEL-119",
    "name": "Felix der Hase Teppich – Felix Schiff Ozean",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix Schiff Ozean\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-felix-120",
    "plentyVariationId": 1200,
    "itemId": 120,
    "sku": "FEL-120",
    "name": "Felix der Hase Teppich – Felix New York Skyline",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "felix",
    "brandLogo": "/Logo_jpg_Felix.jpg",
    "categoryLabel": "Felix der Hase Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E06D53"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor. Modell \"Felix New York Skyline\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-121",
    "plentyVariationId": 1210,
    "itemId": 121,
    "sku": "SHA-121",
    "name": "Capt'n Sharky Teppich – Sharky Piratenschiff Ahoi",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Piratenschiff Ahoi\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-122",
    "plentyVariationId": 1220,
    "itemId": 122,
    "sku": "SHA-122",
    "name": "Capt'n Sharky Teppich – Sharky Schatzkarte Gold",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Schatzkarte Gold\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-123",
    "plentyVariationId": 1230,
    "itemId": 123,
    "sku": "SHA-123",
    "name": "Capt'n Sharky Teppich – Sharky Kompass Seeräuber",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Kompass Seeräuber\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-124",
    "plentyVariationId": 1240,
    "itemId": 124,
    "sku": "SHA-124",
    "name": "Capt'n Sharky Teppich – Sharky Totenkopf Flagge",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Totenkopf Flagge\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-125",
    "plentyVariationId": 1250,
    "itemId": 125,
    "sku": "SHA-125",
    "name": "Capt'n Sharky Teppich – Sharky Krake Ozean",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Krake Ozean\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-126",
    "plentyVariationId": 1260,
    "itemId": 126,
    "sku": "SHA-126",
    "name": "Capt'n Sharky Teppich – Sharky Ankerplatz Blau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Ankerplatz Blau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-127",
    "plentyVariationId": 1270,
    "itemId": 127,
    "sku": "SHA-127",
    "name": "Capt'n Sharky Teppich – Sharky Papagei Coco",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Papagei Coco\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-128",
    "plentyVariationId": 1280,
    "itemId": 128,
    "sku": "SHA-128",
    "name": "Capt'n Sharky Teppich – Sharky Schatztruhe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Schatztruhe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-sharky-129",
    "plentyVariationId": 1290,
    "itemId": 129,
    "sku": "SHA-129",
    "name": "Capt'n Sharky Teppich – Sharky Karibik Bucht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "sharky",
    "brandLogo": "/Logo_jpg_Sharky.jpg",
    "categoryLabel": "Capt'n Sharky Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#244B6E"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber. Modell \"Sharky Karibik Bucht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-130",
    "plentyVariationId": 1300,
    "itemId": 130,
    "sku": "DIE-130",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Bunter Kreis",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Bunter Kreis\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-131",
    "plentyVariationId": 1310,
    "itemId": 131,
    "sku": "DIE-131",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Eisenbahn",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Eisenbahn\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-132",
    "plentyVariationId": 1320,
    "itemId": 132,
    "sku": "DIE-132",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Picknick",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Picknick\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-133",
    "plentyVariationId": 1330,
    "itemId": 133,
    "sku": "DIE-133",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Fußballfreunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Fußballfreunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-134",
    "plentyVariationId": 1340,
    "itemId": 134,
    "sku": "DIE-134",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Wolkenhüpfen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Wolkenhüpfen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-135",
    "plentyVariationId": 1350,
    "itemId": 135,
    "sku": "DIE-135",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Zirkuszelt",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Zirkuszelt\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-136",
    "plentyVariationId": 1360,
    "itemId": 136,
    "sku": "DIE-136",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Schaukelspaß",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Schaukelspaß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-137",
    "plentyVariationId": 1370,
    "itemId": 137,
    "sku": "DIE-137",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Zahlen & Buchstaben",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Zahlen & Buchstaben\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-die-lieben-sieben-138",
    "plentyVariationId": 1380,
    "itemId": 138,
    "sku": "DIE-138",
    "name": "Die Lieben Sieben Teppich – Die Lieben Sieben Regenbogen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "die-lieben-sieben",
    "brandLogo": "/Logo_jpg_DL7.jpg",
    "categoryLabel": "Die Lieben Sieben Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E5B769"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor. Modell \"Die Lieben Sieben Regenbogen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-139",
    "plentyVariationId": 1390,
    "itemId": 139,
    "sku": "PFE-139",
    "name": "Pferdefreunde Teppich – Pferdefreunde Weideglück",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Weideglück\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-140",
    "plentyVariationId": 1400,
    "itemId": 140,
    "sku": "PFE-140",
    "name": "Pferdefreunde Teppich – Pferdefreunde Hufeisen & Rosen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Hufeisen & Rosen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-141",
    "plentyVariationId": 1410,
    "itemId": 141,
    "sku": "PFE-141",
    "name": "Pferdefreunde Teppich – Pferdefreunde Galopp im Wind",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Galopp im Wind\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-142",
    "plentyVariationId": 1420,
    "itemId": 142,
    "sku": "PFE-142",
    "name": "Pferdefreunde Teppich – Pferdefreunde Ponyhof",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Ponyhof\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-143",
    "plentyVariationId": 1430,
    "itemId": 143,
    "sku": "PFE-143",
    "name": "Pferdefreunde Teppich – Pferdefreunde Zaumzeug & Sattel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Zaumzeug & Sattel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-144",
    "plentyVariationId": 1440,
    "itemId": 144,
    "sku": "PFE-144",
    "name": "Pferdefreunde Teppich – Pferdefreunde Schimmel & Rappe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Schimmel & Rappe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-145",
    "plentyVariationId": 1450,
    "itemId": 145,
    "sku": "PFE-145",
    "name": "Pferdefreunde Teppich – Pferdefreunde Sternennacht Koppel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "/Pferdefreunde1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "galleryImages": [
      "/Pferdefreunde1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Sternennacht Koppel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-146",
    "plentyVariationId": 1460,
    "itemId": 146,
    "sku": "PFE-146",
    "name": "Pferdefreunde Teppich – Pferdefreunde Fohlenliebe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Fohlenliebe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pferdefreunde-147",
    "plentyVariationId": 1470,
    "itemId": 147,
    "sku": "PFE-147",
    "name": "Pferdefreunde Teppich – Pferdefreunde Gestüt Sonnenaufgang",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pferdefreunde",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Pferdefreunde Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
    "secondaryImage": "/Pferdefreunde1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg",
      "/Pferdefreunde1.jpg",
      "/Pferdefreunde1.jpg"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A56B46"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit. Modell \"Pferdefreunde Gestüt Sonnenaufgang\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-148",
    "plentyVariationId": 1480,
    "itemId": 148,
    "sku": "BAB-148",
    "name": "Baby Glück Teppich – Baby Glück Erste Schritte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Erste Schritte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-149",
    "plentyVariationId": 1490,
    "itemId": 149,
    "sku": "BAB-149",
    "name": "Baby Glück Teppich – Baby Glück Schlafgut Schäfchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Schlafgut Schäfchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-150",
    "plentyVariationId": 1500,
    "itemId": 150,
    "sku": "BAB-150",
    "name": "Baby Glück Teppich – Baby Glück Mond & Sterne",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Mond & Sterne\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-151",
    "plentyVariationId": 1510,
    "itemId": 151,
    "sku": "BAB-151",
    "name": "Baby Glück Teppich – Baby Glück Waldtiere Sanft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Waldtiere Sanft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-152",
    "plentyVariationId": 1520,
    "itemId": 152,
    "sku": "BAB-152",
    "name": "Baby Glück Teppich – Baby Glück Bärchen Umarmung",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Bärchen Umarmung\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-153",
    "plentyVariationId": 1530,
    "itemId": 153,
    "sku": "BAB-153",
    "name": "Baby Glück Teppich – Baby Glück Wolkenwiege",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Wolkenwiege\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-154",
    "plentyVariationId": 1540,
    "itemId": 154,
    "sku": "BAB-154",
    "name": "Baby Glück Teppich – Baby Glück Babyfelle Kuschel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Babyfelle Kuschel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-155",
    "plentyVariationId": 1550,
    "itemId": 155,
    "sku": "BAB-155",
    "name": "Baby Glück Teppich – Baby Glück Pastell Mint",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Pastell Mint\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-baby-glueck-156",
    "plentyVariationId": 1560,
    "itemId": 156,
    "sku": "BAB-156",
    "name": "Baby Glück Teppich – Baby Glück Entdecker Matte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "baby-glueck",
    "brandLogo": "/Logo_jpg_Baby-Glueck.jpg",
    "categoryLabel": "Baby Glück Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#7EA8BE"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen. Modell \"Baby Glück Entdecker Matte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-157",
    "plentyVariationId": 1570,
    "itemId": 157,
    "sku": "MON-157",
    "name": "Der Mondbär Teppich – Mondbär Schlummertraum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schlummertraum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-158",
    "plentyVariationId": 1580,
    "itemId": 158,
    "sku": "MON-158",
    "name": "Der Mondbär Teppich – Mondbär Schlafgut Mond",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schlafgut Mond\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-159",
    "plentyVariationId": 1590,
    "itemId": 159,
    "sku": "MON-159",
    "name": "Der Mondbär Teppich – Mondbär Sternenhimmel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Sternenhimmel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-160",
    "plentyVariationId": 1600,
    "itemId": 160,
    "sku": "MON-160",
    "name": "Der Mondbär Teppich – Mondbär Schäfchenwolke",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Schäfchenwolke\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-161",
    "plentyVariationId": 1610,
    "itemId": 161,
    "sku": "MON-161",
    "name": "Der Mondbär Teppich – Mondbär Gute Nacht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Gute Nacht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-162",
    "plentyVariationId": 1620,
    "itemId": 162,
    "sku": "MON-162",
    "name": "Der Mondbär Teppich – Mondbär Sternenstaub Blau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Sternenstaub Blau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-163",
    "plentyVariationId": 1630,
    "itemId": 163,
    "sku": "MON-163",
    "name": "Der Mondbär Teppich – Mondbär Wolkenschaukel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Wolkenschaukel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-164",
    "plentyVariationId": 1640,
    "itemId": 164,
    "sku": "MON-164",
    "name": "Der Mondbär Teppich – Mondbär Zaubermond",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Zaubermond\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-mondbaer-165",
    "plentyVariationId": 1650,
    "itemId": 165,
    "sku": "MON-165",
    "name": "Der Mondbär Teppich – Mondbär Kleine Sternchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "mondbaer",
    "brandLogo": "/Logo_jpg_Mondbaer.jpg",
    "categoryLabel": "Der Mondbär Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5C7C99"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen. Modell \"Mondbär Kleine Sternchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-166",
    "plentyVariationId": 1660,
    "itemId": 166,
    "sku": "T-R-166",
    "name": "T-Rex World Teppich – T-Rex World Dino Spuren",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Dino Spuren\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-167",
    "plentyVariationId": 1670,
    "itemId": 167,
    "sku": "T-R-167",
    "name": "T-Rex World Teppich – T-Rex World Urzeit Dschungel",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Urzeit Dschungel\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-168",
    "plentyVariationId": 1680,
    "itemId": 168,
    "sku": "T-R-168",
    "name": "T-Rex World Teppich – T-Rex World Vulkan Expedition",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Vulkan Expedition\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-169",
    "plentyVariationId": 1690,
    "itemId": 169,
    "sku": "T-R-169",
    "name": "T-Rex World Teppich – T-Rex World Brachiosaurus Grün",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Brachiosaurus Grün\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-170",
    "plentyVariationId": 1700,
    "itemId": 170,
    "sku": "T-R-170",
    "name": "T-Rex World Teppich – T-Rex World Triceratops Sand",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Triceratops Sand\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-171",
    "plentyVariationId": 1710,
    "itemId": 171,
    "sku": "T-R-171",
    "name": "T-Rex World Teppich – T-Rex World Fossilien Forscher",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Fossilien Forscher\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-172",
    "plentyVariationId": 1720,
    "itemId": 172,
    "sku": "T-R-172",
    "name": "T-Rex World Teppich – T-Rex World Raubsaurier Brüllen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Raubsaurier Brüllen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-173",
    "plentyVariationId": 1730,
    "itemId": 173,
    "sku": "T-R-173",
    "name": "T-Rex World Teppich – T-Rex World Dino Skelett",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Dino Skelett\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-t-rex-world-174",
    "plentyVariationId": 1740,
    "itemId": 174,
    "sku": "T-R-174",
    "name": "T-Rex World Teppich – T-Rex World Jurassic Park",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "t-rex-world",
    "brandLogo": "/Logo_T-Rex-World.png",
    "categoryLabel": "T-Rex World Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4B6B48"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest. Modell \"T-Rex World Jurassic Park\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-175",
    "plentyVariationId": 1750,
    "itemId": 175,
    "sku": "ROC-175",
    "name": "Rock Star Baby Teppich – Rock Star Baby Electric Guitar Black",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Electric Guitar Black\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-176",
    "plentyVariationId": 1760,
    "itemId": 176,
    "sku": "ROC-176",
    "name": "Rock Star Baby Teppich – Rock Star Baby Guitar White Heart",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Guitar White Heart\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-177",
    "plentyVariationId": 1770,
    "itemId": 177,
    "sku": "ROC-177",
    "name": "Rock Star Baby Teppich – Rock Star Baby Star Dust Grey",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Star Dust Grey\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-178",
    "plentyVariationId": 1780,
    "itemId": 178,
    "sku": "ROC-178",
    "name": "Rock Star Baby Teppich – Rock Star Baby Skull & Wings",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Skull & Wings\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-179",
    "plentyVariationId": 1790,
    "itemId": 179,
    "sku": "ROC-179",
    "name": "Rock Star Baby Teppich – Rock Star Baby Rocker Bass",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Rocker Bass\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-180",
    "plentyVariationId": 1800,
    "itemId": 180,
    "sku": "ROC-180",
    "name": "Rock Star Baby Teppich – Rock Star Baby Vintage Acoustic",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Vintage Acoustic\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-181",
    "plentyVariationId": 1810,
    "itemId": 181,
    "sku": "ROC-181",
    "name": "Rock Star Baby Teppich – Rock Star Baby Stage Lights",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Stage Lights\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-182",
    "plentyVariationId": 1820,
    "itemId": 182,
    "sku": "ROC-182",
    "name": "Rock Star Baby Teppich – Rock Star Baby Leopard Rock",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Leopard Rock\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-rock-star-baby-183",
    "plentyVariationId": 1830,
    "itemId": 183,
    "sku": "ROC-183",
    "name": "Rock Star Baby Teppich – Rock Star Baby Monochrom Star",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "rock-star-baby",
    "brandLogo": "/RSB LOGO .jpg",
    "categoryLabel": "Rock Star Baby Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#1C1C1C"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom. Modell \"Rock Star Baby Monochrom Star\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-184",
    "plentyVariationId": 1840,
    "itemId": 184,
    "sku": "BC--184",
    "name": "BC Kids Teppich – BC Kids Nordic Cloud Anthrazit",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Nordic Cloud Anthrazit\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-185",
    "plentyVariationId": 1850,
    "itemId": 185,
    "sku": "BC--185",
    "name": "BC Kids Teppich – BC Kids Pure Wool Minimalist",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Pure Wool Minimalist\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-186",
    "plentyVariationId": 1860,
    "itemId": 186,
    "sku": "BC--186",
    "name": "BC Kids Teppich – BC Kids Handgetuftet Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Handgetuftet Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-187",
    "plentyVariationId": 1870,
    "itemId": 187,
    "sku": "BC--187",
    "name": "BC Kids Teppich – BC Kids Geometrie Beige",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Geometrie Beige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-188",
    "plentyVariationId": 1880,
    "itemId": 188,
    "sku": "BC--188",
    "name": "BC Kids Teppich – BC Kids Soft Touch Grau",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Soft Touch Grau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-189",
    "plentyVariationId": 1890,
    "itemId": 189,
    "sku": "BC--189",
    "name": "BC Kids Teppich – BC Kids Bio-Wolle Natur",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Bio-Wolle Natur\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-190",
    "plentyVariationId": 1900,
    "itemId": 190,
    "sku": "BC--190",
    "name": "BC Kids Teppich – BC Kids Skandi Triangle",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Skandi Triangle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-191",
    "plentyVariationId": 1910,
    "itemId": 191,
    "sku": "BC--191",
    "name": "BC Kids Teppich – BC Kids Honeycomb Gelb",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Honeycomb Gelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-bc-kids-192",
    "plentyVariationId": 1920,
    "itemId": 192,
    "sku": "BC--192",
    "name": "BC Kids Teppich – BC Kids Architekten Spielteppich",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "bc-kids",
    "brandLogo": "/Logo_BC_Kids.jpg",
    "categoryLabel": "BC Kids Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#4A7C59"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus. Modell \"BC Kids Architekten Spielteppich\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-193",
    "plentyVariationId": 1930,
    "itemId": 193,
    "sku": "LOV-193",
    "name": "Lovely Kids Teppich – Lovely Kids Regenbogenzauber",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Regenbogenzauber\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-194",
    "plentyVariationId": 1940,
    "itemId": 194,
    "sku": "LOV-194",
    "name": "Lovely Kids Teppich – Lovely Kids Sternenwolke Mint",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Sternenwolke Mint\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-195",
    "plentyVariationId": 1950,
    "itemId": 195,
    "sku": "LOV-195",
    "name": "Lovely Kids Teppich – Lovely Kids Heißluftballon",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Heißluftballon\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-196",
    "plentyVariationId": 1960,
    "itemId": 196,
    "sku": "LOV-196",
    "name": "Lovely Kids Teppich – Lovely Kids Bunte Punkte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Bunte Punkte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-197",
    "plentyVariationId": 1970,
    "itemId": 197,
    "sku": "LOV-197",
    "name": "Lovely Kids Teppich – Lovely Kids Mondtraum Gelb",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Mondtraum Gelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-198",
    "plentyVariationId": 1980,
    "itemId": 198,
    "sku": "LOV-198",
    "name": "Lovely Kids Teppich – Lovely Kids Teddy Bär Soft",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Teddy Bär Soft\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-199",
    "plentyVariationId": 1990,
    "itemId": 199,
    "sku": "LOV-199",
    "name": "Lovely Kids Teppich – Lovely Kids Zickzack Pastell",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Zickzack Pastell\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-200",
    "plentyVariationId": 2000,
    "itemId": 200,
    "sku": "LOV-200",
    "name": "Lovely Kids Teppich – Lovely Kids Herzen Rosé",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Herzen Rosé\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-lovely-kids-201",
    "plentyVariationId": 2010,
    "itemId": 201,
    "sku": "LOV-201",
    "name": "Lovely Kids Teppich – Lovely Kids Safari Freunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "lovely-kids",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Lovely Kids Teppiche",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "secondaryImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#E79685"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken. Modell \"Lovely Kids Safari Freunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-202",
    "plentyVariationId": 2020,
    "itemId": 202,
    "sku": "PUM-202",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Keks Liebe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Keks Liebe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-203",
    "plentyVariationId": 2030,
    "itemId": 203,
    "sku": "PUM-203",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Sternschnuppe",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Sternschnuppe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-204",
    "plentyVariationId": 2040,
    "itemId": 204,
    "sku": "PUM-204",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Regenbogen Glitzer",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Regenbogen Glitzer\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-205",
    "plentyVariationId": 2050,
    "itemId": 205,
    "sku": "PUM-205",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Donut Pause",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Donut Pause\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-206",
    "plentyVariationId": 2060,
    "itemId": 206,
    "sku": "PUM-206",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Flauschig & Bunt",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Flauschig & Bunt\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-207",
    "plentyVariationId": 2070,
    "itemId": 207,
    "sku": "PUM-207",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Herzchen Wölkchen",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Herzchen Wölkchen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-208",
    "plentyVariationId": 2080,
    "itemId": 208,
    "sku": "PUM-208",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Schokotraum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Schokotraum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-pummeleinhorn-209",
    "plentyVariationId": 2090,
    "itemId": 209,
    "sku": "PUM-209",
    "name": "Pummeleinhorn Teppich – Pummeleinhorn Glitzerspaß",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "pummeleinhorn",
    "brandLogo": "/Logo Levinahome Kids.png",
    "categoryLabel": "Pummeleinhorn Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#BA68C8"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven. Modell \"Pummeleinhorn Glitzerspaß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-210",
    "plentyVariationId": 2100,
    "itemId": 210,
    "sku": "GRI-210",
    "name": "Grimmliis Teppich – Grimmliis Waldwichtel Hütte",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Waldwichtel Hütte\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-211",
    "plentyVariationId": 2110,
    "itemId": 211,
    "sku": "GRI-211",
    "name": "Grimmliis Teppich – Grimmliis Kleiner Fuchs",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Kleiner Fuchs\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-212",
    "plentyVariationId": 2120,
    "itemId": 212,
    "sku": "GRI-212",
    "name": "Grimmliis Teppich – Grimmliis Eulenbaum",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Eulenbaum\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-213",
    "plentyVariationId": 2130,
    "itemId": 213,
    "sku": "GRI-213",
    "name": "Grimmliis Teppich – Grimmliis Igel im Moos",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Igel im Moos\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-214",
    "plentyVariationId": 2140,
    "itemId": 214,
    "sku": "GRI-214",
    "name": "Grimmliis Teppich – Grimmliis Zauberpilz Wald",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Zauberpilz Wald\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-215",
    "plentyVariationId": 2150,
    "itemId": 215,
    "sku": "GRI-215",
    "name": "Grimmliis Teppich – Grimmliis Herbstblätter",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Herbstblätter\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-216",
    "plentyVariationId": 2160,
    "itemId": 216,
    "sku": "GRI-216",
    "name": "Grimmliis Teppich – Grimmliis Wiesenfreunde",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Wiesenfreunde\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-grimmliis-217",
    "plentyVariationId": 2170,
    "itemId": 217,
    "sku": "GRI-217",
    "name": "Grimmliis Teppich – Grimmliis Sternennacht",
    "section": "kids",
    "category": "carpets",
    "brandCategory": "grimmliis",
    "brandLogo": "/favicon.svg",
    "categoryLabel": "Grimmliis Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "secondaryImage": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100",
    "availableMaterials": [
      "100% Soft-Polyacryl Flor",
      "Bio-Baumwolle Dämpfung"
    ],
    "sizes": [
      "100 x 120 cm",
      "120 x 160 cm",
      "140 x 200 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#8E735B"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "kids",
    "description": "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor. Modell \"Grimmliis Sternennacht\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-218",
    "plentyVariationId": 2180,
    "itemId": 218,
    "sku": "SPI-218",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Wildblumen Wiese",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Wildblumen Wiese\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-219",
    "plentyVariationId": 2190,
    "itemId": 219,
    "sku": "SPI-219",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Vögelchen & Zweige",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Vögelchen & Zweige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-220",
    "plentyVariationId": 2200,
    "itemId": 220,
    "sku": "SPI-220",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Schmetterlingsgarten",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Schmetterlingsgarten\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-221",
    "plentyVariationId": 2210,
    "itemId": 221,
    "sku": "SPI-221",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Lavendelbusch",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Lavendelbusch\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-222",
    "plentyVariationId": 2220,
    "itemId": 222,
    "sku": "SPI-222",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Rosenranke",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Rosenranke\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-223",
    "plentyVariationId": 2230,
    "itemId": 223,
    "sku": "SPI-223",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Landhaus Botanik",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Landhaus Botanik\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-224",
    "plentyVariationId": 2240,
    "itemId": 224,
    "sku": "SPI-224",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Kräutergarten",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Kräutergarten\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-spiegelburg-garden-225",
    "plentyVariationId": 2250,
    "itemId": 225,
    "sku": "SPI-225",
    "name": "Spiegelburg Garden Teppich – Spiegelburg Garden Cottage Blumen",
    "section": "general",
    "category": "carpets",
    "brandCategory": "spiegelburg-garden",
    "brandLogo": "/Logo_Pferdefreunde_zweizeilig.jpg",
    "categoryLabel": "Spiegelburg Garden Teppiche",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#5B7065"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus. Modell \"Spiegelburg Garden Cottage Blumen\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-226",
    "plentyVariationId": 2260,
    "itemId": 226,
    "sku": "SHA-226",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Soft Cream",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Soft Cream\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-227",
    "plentyVariationId": 2270,
    "itemId": 227,
    "sku": "SHA-227",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Silbergrau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-228",
    "plentyVariationId": 2280,
    "itemId": 228,
    "sku": "SHA-228",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Anthrazit",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Anthrazit\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-229",
    "plentyVariationId": 2290,
    "itemId": 229,
    "sku": "SHA-229",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Warm Mocca",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Warm Mocca\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-230",
    "plentyVariationId": 2300,
    "itemId": 230,
    "sku": "SHA-230",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Salbei Grün",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Salbei Grün\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-231",
    "plentyVariationId": 2310,
    "itemId": 231,
    "sku": "SHA-231",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Terracotta",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Terracotta\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-232",
    "plentyVariationId": 2320,
    "itemId": 232,
    "sku": "SHA-232",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Aubergine",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Aubergine\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-233",
    "plentyVariationId": 2330,
    "itemId": 233,
    "sku": "SHA-233",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Dusty Pink",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Dusty Pink\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-234",
    "plentyVariationId": 2340,
    "itemId": 234,
    "sku": "SHA-234",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Sand Beige",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 205,
    "originalPrice": 267,
    "rating": 5,
    "reviewsCount": 68,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Sand Beige\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-235",
    "plentyVariationId": 2350,
    "itemId": 235,
    "sku": "SHA-235",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Ozeanblau",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 222,
    "originalPrice": 289,
    "rating": 4.8,
    "reviewsCount": 75,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Ozeanblau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-236",
    "plentyVariationId": 2360,
    "itemId": 236,
    "sku": "SHA-236",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Bicolor Melange",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 239,
    "originalPrice": 311,
    "rating": 4.9,
    "reviewsCount": 82,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Bicolor Melange\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-shaggy-237",
    "plentyVariationId": 2370,
    "itemId": 237,
    "sku": "SHA-237",
    "name": "Shaggy Hochflor Teppich – Kobenhavn Shaggy Tiefschwarz",
    "section": "both",
    "category": "shaggy",
    "brandCategory": "shaggy",
    "brandLogo": "/text_levinaHome.png",
    "categoryLabel": "Shaggy Hochflor",
    "price": 76,
    "originalPrice": 99,
    "rating": 5,
    "reviewsCount": 14,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Soft-Touch Hochflor Mikrofaser",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#6C757D"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht. Modell \"Kobenhavn Shaggy Tiefschwarz\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-238",
    "plentyVariationId": 2380,
    "itemId": 238,
    "sku": "FLO-238",
    "name": "Flokati & Naturfelle Teppich – Original Griechischer Flokati 100% Naturwolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 69,
    "originalPrice": 90,
    "rating": 4.8,
    "reviewsCount": 12,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Original Griechischer Flokati 100% Naturwolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-239",
    "plentyVariationId": 2390,
    "itemId": 239,
    "sku": "FLO-239",
    "name": "Flokati & Naturfelle Teppich – Luxus Natur-Lammfell Neuseeland Creme",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 86,
    "originalPrice": 112,
    "rating": 4.9,
    "reviewsCount": 19,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Luxus Natur-Lammfell Neuseeland Creme\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-240",
    "plentyVariationId": 2400,
    "itemId": 240,
    "sku": "FLO-240",
    "name": "Flokati & Naturfelle Teppich – Medizinisches Baby-Lammfell Goldgelb",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 103,
    "originalPrice": 134,
    "rating": 5,
    "reviewsCount": 26,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Medizinisches Baby-Lammfell Goldgelb\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-241",
    "plentyVariationId": 2410,
    "itemId": 241,
    "sku": "FLO-241",
    "name": "Flokati & Naturfelle Teppich – Echtes Naturbelassenes Rinderfell Unikat",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 120,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 33,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Echtes Naturbelassenes Rinderfell Unikat\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-242",
    "plentyVariationId": 2420,
    "itemId": 242,
    "sku": "FLO-242",
    "name": "Flokati & Naturfelle Teppich – Premium Schaffell Taupe",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 137,
    "originalPrice": 178,
    "rating": 4.9,
    "reviewsCount": 40,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": true,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Premium Schaffell Taupe\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-243",
    "plentyVariationId": 2430,
    "itemId": 243,
    "sku": "FLO-243",
    "name": "Flokati & Naturfelle Teppich – Handgewebter Hochland-Flokati Wolle",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 154,
    "originalPrice": 200,
    "rating": 5,
    "reviewsCount": 47,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Handgewebter Hochland-Flokati Wolle\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-244",
    "plentyVariationId": 2440,
    "itemId": 244,
    "sku": "FLO-244",
    "name": "Flokati & Naturfelle Teppich – Gotland Natur-Lammfell Silbergrau",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 171,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewsCount": 54,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": true,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "living-room",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Gotland Natur-Lammfell Silbergrau\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  },
  {
    "id": "prod-flokati-245",
    "plentyVariationId": 2450,
    "itemId": 245,
    "sku": "FLO-245",
    "name": "Flokati & Naturfelle Teppich – Natur-Islandlammfell Langhaar Weiß",
    "section": "both",
    "category": "naturfelle",
    "brandCategory": "flokati",
    "brandLogo": "/Levina_home_logo.png",
    "categoryLabel": "Naturfelle & Flokati",
    "price": 188,
    "originalPrice": 244,
    "rating": 4.9,
    "reviewsCount": 61,
    "primaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "secondaryImage": "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "galleryImages": [
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
      "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop"
    ],
    "isBestSeller": false,
    "isNewArrival": false,
    "material": "100% Reine Griechische Bio-Schurwolle",
    "availableMaterials": [
      "100% Neuseeland Bio-Schurwolle",
      "Soft-Touch Mikrofaser"
    ],
    "sizes": [
      "120 x 170 cm",
      "160 x 230 cm",
      "200 x 290 cm"
    ],
    "colors": [
      {
        "name": "Original Design",
        "hex": "#A89F91"
      },
      {
        "name": "Natur Creme",
        "hex": "#EFE7DC"
      }
    ],
    "roomCategory": "bedroom",
    "description": "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle. Modell \"Natur-Islandlammfell Langhaar Weiß\". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.",
    "careInstructions": [
      "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
      "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
      "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
    ],
    "shippingInfo": "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
    "stockInfo": {
      "physicalStock": 24,
      "netStock": 18,
      "inStock": true,
      "statusLabel": "Auf Lager (18 Stück in Dülmen)",
      "warehouseName": "KS Sales Dülmen Logistikzentrum"
    },
    "deliveryInfo": {
      "averageDays": 2,
      "deliveryText": "Standard-Lieferung: 2–3 Werktage",
      "estimatedDateRange": "Aug 20 – Aug 23",
      "carrier": "DHL / DPD Paketdienst"
    }
  }
];

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    title: 'Sanftes Morgenlicht über dem Astrid Handgewebten Bio-Schurwollteppich',
    titleEn: 'Morning Sunlight & Slow Living: The Astrid Handwoven Wool Sanctuary',
    roomName: 'Living Room Sanctuary',
    roomNameEn: 'Living Room Sanctuary',
    likes: 1420,
    curator: 'Clara & Jonas',
    location: 'Berlin-Mitte, Germany',
    readTime: '3 min read',
    quoteDe: '„Wir wollten einen Raum, der atmet. Der Astrid Teppich erdet den offenen Raum mit spürbarer Geborgenheit.“',
    quoteEn: '“We wanted a room that breathes. The Astrid carpet anchors our minimalist space with palpable tactile warmth.”',
    storyDe: 'Beim Umbau unseres Altbaulofts stand Ruhe an erster Stelle. Statt kühler Flächen wollten wir natürliche Materialien, die den Schall dämpfen und das Morgenlicht weich reflektieren. Der Astrid Handwebteppich aus 100% ungebleichter Bio-Schurwolle wurde zum Herzstück: Hier beginnen unsere Tage mit Barfuß-Kaffee und tiefer Entschleunigung.',
    storyEn: 'When designing our historic loft, serenity was our guiding principle. Instead of cool, sterile surfaces, we sought natural fibers that soften acoustic reverberation and gently catch the morning sun. Handwoven from 100% unbleached organic wool, the Astrid rug became our home’s anchor—where every morning begins with bare feet and slow coffee.',
    acousticNotesDe: 'Die dichte Handwebung absorbiert Raumschall um bis zu 45% und schafft eine behagliche, intime Gesprächsatmosphäre im offenen Wohnbereich.',
    acousticNotesEn: 'The dense artisan weave absorbs ambient room reverberation by up to 45%, fostering an intimate, whisper-soft atmosphere in open floor plans.',
    stylingTipDe: 'Platzieren Sie die vorderen Füße des Sofas und des Sessels auf dem Teppich, um eine harmonisch verbundene Wohlfühlinsel zu kreieren.',
    stylingTipEn: 'Rest the front legs of both sofa and lounge chair over the rug border to visually unify your living sanctuary.',
    palette: [
      { name: 'Pure Wool Cream', hex: '#EAE5DB' },
      { name: 'Oatmeal Muted', hex: '#D6C8B4' },
      { name: 'Smoked Oak', hex: '#8C6F56' },
      { name: 'Slate Charcoal', hex: '#3B3735' }
    ],
    taggedProducts: [PRODUCTS[0], PRODUCTS[2]]
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
    title: 'Harmonisches Schlafzimmer-Design mit echtem Natur-Lammfell',
    titleEn: 'Sensory Bedroom Haven: Untreated Natural Sheepskin & Linen',
    roomName: 'Serene Bedroom',
    roomNameEn: 'Restful Bedroom Haven',
    likes: 980,
    curator: 'Helena Lindqvist',
    location: 'Munich / Copenhagen',
    readTime: '4 min read',
    quoteDe: '„Ein Schlafzimmer sollte ein echter sensorischer Erholungsort sein – frei von Synthetik und voller Wärme.“',
    quoteEn: '“A bedroom must be a sensory restorative sanctuary—pure natural textures with zero synthetic static.”',
    storyDe: 'Für unser Schlafzimmer haben wir auf pure Reduktion und unverfälschte Haptik gesetzt. Morgens barfuß auf echtes, naturbelassenes Lammfell zu treten, schenkt sofortige Wärme und innere Ruhe. Da es ohne chemische Weichmacher gegerbt ist, herrscht ein vollkommen neutrales, frisches Raumklima.',
    storyEn: 'For our primary suite, we focused on intentional minimalism and uncompromised tactile warmth. Stepping onto genuine, naturally tanned sheepskin at dawn immediately grounds the body. Sourced free from artificial softeners, it preserves a pristine, breathable bedroom climate.',
    acousticNotesDe: 'Naturfelle regulieren Feuchtigkeit auf natürliche Weise und wirken wärmespeichernd zu jeder Jahreszeit.',
    acousticNotesEn: 'Authentic fleece naturally balances room humidity while providing seasonless temperature regulation.',
    stylingTipDe: 'Drapieren Sie das Fell asymmetrisch an der Bettkante oder über einen Lesesessel für spontane Gemütlichkeit.',
    stylingTipEn: 'Drape natural hides organically alongside the bedside runner or over a sculptural armchair for effortless depth.',
    palette: [
      { name: 'Ivory Cloud', hex: '#F7F3EC' },
      { name: 'Flaxen Sand', hex: '#DACFBE' },
      { name: 'Warm Terracotta', hex: '#B87D65' }
    ],
    taggedProducts: [PRODUCTS[140] || PRODUCTS[0]]
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop',
    title: 'Kuschelweicher Kobenhavn Shaggy Hochflor im eleganten Wohnbereich',
    titleEn: 'Tactile Comfort & High-Pile Luxury: The Kobenhavn Shaggy Experience',
    roomName: 'Tactile Lounge Space',
    roomNameEn: 'Tactile Lounge Sanctuary',
    likes: 1150,
    curator: 'Marc & Sophie',
    location: 'Vienna, Austria',
    readTime: '3 min read',
    quoteDe: '„Der Hochflor lädt dazu ein, den Boden als Lebensraum neu zu entdecken.“',
    quoteEn: '“The deep, silky pile turned our living floor into our family’s favorite gathering place.”',
    storyDe: 'In unserem Altbau mit 3,80m hohen Decken fehlte dem Wohnzimmer die Gemütlichkeit. Der Kobenhavn Shaggy brachte die Wende: Seine samtige Florhöhe von 35mm fängt Schritte sanft ab und lädt Groß und Klein zum Verweilen auf dem Boden ein. Perfekt für lange Leseabende und unbeschwerte Stunden.',
    storyEn: 'With 3.8-meter historic ceilings, our living room echoed easily. The Kobenhavn plush shaggy transformed everything: its 35mm velvety high pile softens every step and warmly invites barefoot floor living, board games, and quiet evening reading.',
    acousticNotesDe: 'Hochflor dämpft Trittschall spürbar und verbessert die Sprachverständlichkeit in hohen Altbauten dramatisch.',
    acousticNotesEn: 'High-density micro-tufts absorb heavy footfall and dramatically improve conversational clarity in loft ceilings.',
    stylingTipDe: 'Kombinieren Sie Hochflor mit klaren, filigranen Couchtischen aus Holz oder Glas, um visuelle Leichtigkeit zu bewahren.',
    stylingTipEn: 'Pair deep high-pile textures with slim wooden or glass coffee tables to maintain visual lightness.',
    palette: [
      { name: 'Alabaster White', hex: '#F4EFE6' },
      { name: 'Warm Taupe', hex: '#B2A392' },
      { name: 'Earthy Walnut', hex: '#584337' }
    ],
    taggedProducts: [PRODUCTS[130] || PRODUCTS[0], PRODUCTS[132] || PRODUCTS[1]]
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    title: 'Warme Holztexturen & Malmö Terrakotta Naturteppich im ruhigen Arbeitsbereich',
    titleEn: 'Focus & Organic Earth Tones: Malmö Terracotta in the Creative Studio',
    roomName: 'Minimalist Office',
    roomNameEn: 'Mindful Home Studio',
    likes: 870,
    curator: 'David Keller',
    location: 'Hamburg, Germany',
    readTime: '4 min read',
    quoteDe: '„Warme Erdtöne und schadstofffreie Naturfasern fördern Klarheit und Fokus.“',
    quoteEn: '“Subtle earth tones and toxin-free materials bring mental clarity and calm focus to the workday.”',
    storyDe: 'Mein Heimbüro sollte Klarheit ausstrahlen, ohne ungemütlich zu wirken. Der Malmö Naturteppich mit seinem warmen Terrakotta-Farbton verbindet helle Eichenmöbel mit moderner Architektur. Seine feste, flache Webung hält auch Stuhlrollen stand und sorgt für ein wohliges Raumgefühl.',
    storyEn: 'My creative home office needed to inspire clarity without feeling sterile. The Malmö carpet in warm terracotta anchors oak furniture and clean lines. Its durable flatweave easily accommodates desk chair movement while infusing the room with restorative natural warmth.',
    acousticNotesDe: 'Flachgewebe verhindert elektrostatische Aufladung und bietet perfekte Stabilität unter Arbeitsplätzen.',
    acousticNotesEn: 'Flatweave construction prevents static buildup while providing resilient durability under study furniture.',
    stylingTipDe: 'Wählen Sie im Home-Office Flachgewebe für mühelose Rollfähigkeit und langlebige Farbbrillanz.',
    stylingTipEn: 'Opt for tight flatweave in work spaces for smooth chair mobility and enduring natural fiber resilience.',
    palette: [
      { name: 'Terracotta Dune', hex: '#C3795A' },
      { name: 'Natural Sand', hex: '#E2D8C9' },
      { name: 'Charcoal Oak', hex: '#423D3A' }
    ],
    taggedProducts: [PRODUCTS[60] || PRODUCTS[0], PRODUCTS[70] || PRODUCTS[1]]
  }
];
