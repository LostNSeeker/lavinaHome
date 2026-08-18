import fs from 'fs';

const BRAND_CATEGORIES = [
  {
    id: "lillifee",
    slug: "lillifee",
    name: "Prinzessin Lillifee",
    nameEn: "Princess Lillifee",
    logo: "/Logo_jpg_Lillifee.jpg",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    tagline: "Märchenhafter Zauber & sanfte Rosétöne",
    taglineEn: "Fairytale magic, gentle rose tones & stars",
    description: "Der offizielle Prinzessin Lillifee Teppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. 100% schadstoffgeprüft nach OEKO-TEX® Standard 100.",
    descriptionEn: "Official Princess Lillifee rugs transforming nurseries into enchanting royal sanctuaries. Certified 100% non-toxic.",
    themeColor: "#D87093",
    itemCount: 11
  },
  {
    id: "felix",
    slug: "felix",
    name: "Felix der Hase",
    nameEn: "Felix the Rabbit",
    logo: "/Logo_jpg_Felix.jpg",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    tagline: "Auf Weltreise mit spannenden Abenteuern",
    taglineEn: "World travels & exciting adventures with Felix",
    description: "Reise mit Felix um die Welt! Detailverliebte Weltkarten- und Koffer-Motive aus speichelfestem, extra weichem Flor.",
    descriptionEn: "Travel the world with Felix! Charming map and travel suitcase designs with extra-cushioned fibers.",
    themeColor: "#E06D53",
    itemCount: 9
  },
  {
    id: "sharky",
    slug: "sharky",
    name: "Capt'n Sharky",
    nameEn: "Capt'n Sharky",
    logo: "/Logo_jpg_Sharky.jpg",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    tagline: "Aufregende Piraten- & Meeresabenteuer",
    taglineEn: "Exciting pirate & ocean adventures for little sailors",
    description: "Schiff ahoi! Strapazierfähige Piratenteppiche mit Schatzkarten, Kompass und Segelschiffen für abenteuerlustige Seeräuber.",
    descriptionEn: "Ahoy! Resilient pirate playmats with treasure maps, compass stars, and galleon ships.",
    themeColor: "#244B6E",
    itemCount: 9
  },
  {
    id: "die-lieben-sieben",
    slug: "die-lieben-sieben",
    name: "Die Lieben Sieben",
    nameEn: "The Lovely Seven",
    logo: "/Logo_jpg_DL7.jpg",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    tagline: "Gemeinsam spielen, lernen & geborgen aufwachsen",
    taglineEn: "Play, learn, and grow together in cozy warmth",
    description: "Die beliebten Freunde aus dem Kindergarten: Bunte, fröhliche Tiermotive auf schadstofffreiem Soft-Flor.",
    descriptionEn: "Beloved nursery animal friends on certified non-toxic, cloud-soft playmat pile.",
    themeColor: "#E5B769",
    itemCount: 9
  },
  {
    id: "pferdefreunde",
    slug: "pferdefreunde",
    name: "Pferdefreunde",
    nameEn: "Horse Friends",
    logo: "/Logo_Pferdefreunde_zweizeilig.jpg",
    image: "/Pferdefreunde1.jpg",
    tagline: "Zauberhafte Pferdemotive & Weideglück",
    taglineEn: "Graceful equestrian horse motifs & pasture bliss",
    description: "Für kleine und große Pferdeliebhaber: Edle Rossmotive und sanfte Naturfarben für behagliche Gemütlichkeit.",
    descriptionEn: "For passionate equestrian fans: Noble horse prints and gentle nature tones for cozy rooms.",
    themeColor: "#A56B46",
    itemCount: 9
  },
  {
    id: "baby-glueck",
    slug: "baby-glueck",
    name: "Baby Glück",
    nameEn: "Baby Bliss",
    logo: "/Logo_jpg_Baby-Glueck.jpg",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop",
    tagline: "Sanfte Krabbeldecken & speichelfeste Babymatten",
    taglineEn: "Gentle tummy-time playmats & baby sheepskins",
    description: "Besonders dicke Dämpfung für die ersten Dreh- und Krabbelversuche. Speichelfest und frei von jeglichen Schadstoffen.",
    descriptionEn: "Extra thick cushioning designed for baby tummy time and first crawling moments. 100% baby-safe.",
    themeColor: "#7EA8BE",
    itemCount: 9
  },
  {
    id: "mondbaer",
    slug: "mondbaer",
    name: "Der Mondbär",
    nameEn: "The Moon Bear",
    logo: "/Logo_jpg_Mondbaer.jpg",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    tagline: "Sanfte Schlummerträume unter dem Sternenhimmel",
    taglineEn: "Gentle bedtime lullabies & moonlit starry dreams",
    description: "Der beliebte Mondbär begleitet die Kleinsten behutsam in den Schlaf. Wolkenweicher Flor für friedliche Nächte und geborgenes Einschlafen.",
    descriptionEn: "The beloved Moon Bear brings soothing bedtime comfort and calm lullabies to nurseries. Certified baby-safe soft pile.",
    themeColor: "#5C7C99",
    itemCount: 9
  },
  {
    id: "t-rex-world",
    slug: "t-rex-world",
    name: "T-Rex World",
    nameEn: "T-Rex World",
    logo: "/Logo_T-Rex-World.png",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    tagline: "Urzeit-Dinosaurier für mutige Forscher",
    taglineEn: "Primeval dinosaur expeditions for young explorers",
    description: "Faszinierende Urzeit-Landschaften und Dinosaurier-Abdrücke für kleine Paläontologen. Extrem abriebfest.",
    descriptionEn: "Thrilling dinosaur footprints and jungle landscapes. Highly durable and dirt-resistant.",
    themeColor: "#4B6B48",
    itemCount: 9
  },
  {
    id: "rock-star-baby",
    slug: "rock-star-baby",
    name: "Rock Star Baby",
    nameEn: "Rock Star Baby",
    logo: "/RSB LOGO .jpg",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    tagline: "Kultige Gitarren-, Stern- & Rocker-Designs",
    taglineEn: "Iconic guitar, star & rockstar nursery vibes",
    description: "Entworfen für coole Kids und stylische Eltern: Markante E-Gitarren, Totenkopf- & Sternenmuster in edlem Monochrom.",
    descriptionEn: "Created for cool kids and stylish parents: Statement electric guitars, stars, and monochrome rock aesthetics.",
    themeColor: "#1C1C1C",
    itemCount: 9
  },
  {
    id: "bc-kids",
    slug: "bc-kids",
    name: "BC Kids",
    nameEn: "BC Kids Manufaktur",
    logo: "/Logo_BC_Kids.jpg",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    tagline: "Böing Carpet Premium Handwebung für Kinder",
    taglineEn: "Böing Carpet luxury hand-tufted children collection",
    description: "Exklusive Manufakturqualität aus Dülmen: Handgetuftete Schurwoll-Mischungen mit zeitlosem skandinavischem Minimalismus.",
    descriptionEn: "Exclusive master craft from Dülmen: Hand-tufted wool blends with timeless Scandinavian aesthetics.",
    themeColor: "#4A7C59",
    itemCount: 9
  },
  {
    id: "lovely-kids",
    slug: "lovely-kids",
    name: "Lovely Kids",
    nameEn: "Lovely Kids",
    logo: "/Logo Levinahome Kids.png",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    tagline: "Traumhafte Pastellfarben & Wolkenweichheit",
    taglineEn: "Dreamy pastel rainbows & cloud-like softness",
    description: "Wolken, Sterne und Regenbögen in sanften Pastelltönen für beruhigende, harmonische Schlummerecken.",
    descriptionEn: "Soft clouds, stars, and pastel rainbows creating soothing, tranquil spaces for sleep and daydreaming.",
    themeColor: "#E79685",
    itemCount: 9
  },
  {
    id: "pummeleinhorn",
    slug: "pummeleinhorn",
    name: "Pummeleinhorn",
    nameEn: "Pummel Unicorn",
    logo: "/Logo Levinahome Kids.png",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    tagline: "Kuscheliges Einhorn-Design voller Fröhlichkeit",
    taglineEn: "Chubby unicorn cuteness with cookie love",
    description: "Einhornliebe mit Herz und Humor! Kuschelig weicher Spielteppich mit Keks- und Sternenmotiven.",
    descriptionEn: "Lovable unicorn designs bringing joy, sweetness, and ultra-plush comfort to playrooms.",
    themeColor: "#BA68C8",
    itemCount: 8
  },
  {
    id: "grimmliis",
    slug: "grimmliis",
    name: "Grimmliis",
    nameEn: "Grimmliis Forest",
    logo: "/favicon.svg",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    tagline: "Liebevolle Wald- & Fabelcharaktere",
    taglineEn: "Enchanting woodland creatures & cozy tales",
    description: "Geheimnisvolle Waldwichtel, kleine Füchse und Eulen auf naturnahem, warmem Naturflor.",
    descriptionEn: "Enchanting forest gnomes, foxes, and owls on natural, warm, earth-toned fibers.",
    themeColor: "#8E735B",
    itemCount: 8
  },
  {
    id: "spiegelburg-garden",
    slug: "spiegelburg-garden",
    name: "Spiegelburg Garden",
    nameEn: "Spiegelburg Garden",
    logo: "/Logo_Pferdefreunde_zweizeilig.jpg",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    tagline: "Naturverbundene Garten- & Botanikmotive",
    taglineEn: "Botanical wildflowers & cottage garden warmth",
    description: "Wildblumen, Vögelchen und Schmetterlinge bringen die Leichtigkeit eines blühenden Sommergartens ins Haus.",
    descriptionEn: "Wildflowers, songbirds, and butterflies capturing the cheerful light of a summer country garden.",
    themeColor: "#5B7065",
    itemCount: 8
  },
  {
    id: "shaggy",
    slug: "shaggy",
    name: "Shaggy Hochflor",
    nameEn: "Shaggy High-Pile",
    logo: "/text_levinaHome.png",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    tagline: "Samtweicher Hochflor in 9 Trendfarben",
    taglineEn: "Silky 35mm plush high pile in 9 curated tones",
    description: "Kuschelweicher Hochflorteppich mit 35 mm Florhöhe. Schalldämmend, antistatisch und pflegeleicht.",
    descriptionEn: "Deep 35mm microfiber plush pile offering tactile luxury, noise reduction, and easy maintenance.",
    themeColor: "#6C757D",
    itemCount: 12
  },
  {
    id: "flokati",
    slug: "flokati",
    name: "Flokati & Naturfelle",
    nameEn: "Flokati & Natural Hides",
    logo: "/Levina_home_logo.png",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
    tagline: "100% naturbelassene Schurwoll-Flokatis & Felle",
    taglineEn: "100% pure organic virgin wool flokatis & hides",
    description: "Handgewebte, traditionelle Flokatis aus 100% griechischer Schurwolle und zertifizierte medizinische Lammfelle.",
    descriptionEn: "Traditional handwoven flokatis from pure unbleached Greek virgin wool and certified sheepskins.",
    themeColor: "#A89F91",
    itemCount: 8
  }
];

const categoryImagePool = {
  lillifee: [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/176/middle/LK-402.jpg",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
  ],
  felix: [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/178/middle/LK-404.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/181/middle/LK-407.jpg",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
  ],
  sharky: [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/182/middle/LK-408.jpg",
    "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
  ],
  "die-lieben-sieben": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/183/middle/LK-409.jpg",
    "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
  ],
  pferdefreunde: [
    "/Pferdefreunde1.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/185/middle/LK-411.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/159/middle/PF-513.jpg"
  ],
  "baby-glueck": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/187/middle/LK-415.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/188/middle/LK-416.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/165/middle/BG-710.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/166/middle/BG-711.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/167/middle/BG-712.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/168/middle/BG-713_1.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg"
  ],
  mondbaer: [
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/169/middle/BG-714.jpg",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
  ],
  "t-rex-world": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/184/middle/LK-410.jpg",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
  ],
  "rock-star-baby": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/170/middle/BG-715.jpg",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  ],
  "bc-kids": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/171/middle/BC-101.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/172/middle/BC-102.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/173/middle/BC-103.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/174/middle/BC-104.jpg"
  ],
  "lovely-kids": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/190/middle/LK-418.jpg",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
  ],
  pummeleinhorn: [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
  ],
  grimmliis: [
    "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
  ],
  "spiegelburg-garden": [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/160/middle/GA-610.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/161/middle/GA-611.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/162/middle/GA-612.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/163/middle/GA-613.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/164/middle/GA-614.jpg"
  ],
  shaggy: [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/147/middle/SH-311.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/148/middle/SH-312.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/149/middle/SH-313.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/198/middle/SH-2360-01.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/199/middle/SH-2361.jpg"
  ],
  flokati: [
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/151/middle/FE-411.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/152/middle/FE-412.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/153/middle/FE-413.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/154/middle/FE-414.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/155/middle/FE-415.jpg",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG",
    "https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg"
  ]
};

const categoryDesignTitles = {
  lillifee: [
    "Zauberschloss Rosé", "Sternenzauber Traum", "Blütenfee Pastell", "Schmetterling Zauberwald",
    "Glitzerstern Krone", "Märchenzauber Soft", "Schlossgarten Rosé", "Wolkenelfe Rosa",
    "Prinzessinnen Krönchen", "Fee Lillifee Herz", "Sternenstaub"
  ],
  felix: [
    "Felix Weltreise Koffer", "Felix London Big Ben", "Felix Paris Eiffelturm", "Felix Postkarte Abenteuer",
    "Felix Antarktis Pinguin", "Felix Safari Serengeti", "Felix Flugzeug Wolken", "Felix Schiff Ozean",
    "Felix New York Skyline"
  ],
  sharky: [
    "Sharky Piratenschiff Ahoi", "Sharky Schatzkarte Gold", "Sharky Kompass Seeräuber", "Sharky Totenkopf Flagge",
    "Sharky Krake Ozean", "Sharky Ankerplatz Blau", "Sharky Papagei Coco", "Sharky Schatztruhe",
    "Sharky Karibik Bucht"
  ],
  "die-lieben-sieben": [
    "Die Lieben Sieben Bunter Kreis", "Die Lieben Sieben Eisenbahn", "Die Lieben Sieben Picknick",
    "Die Lieben Sieben Fußballfreunde", "Die Lieben Sieben Wolkenhüpfen", "Die Lieben Sieben Zirkuszelt",
    "Die Lieben Sieben Schaukelspaß", "Die Lieben Sieben Zahlen & Buchstaben", "Die Lieben Sieben Regenbogen"
  ],
  pferdefreunde: [
    "Pferdefreunde Weideglück", "Pferdefreunde Hufeisen & Rosen", "Pferdefreunde Galopp im Wind",
    "Pferdefreunde Ponyhof", "Pferdefreunde Zaumzeug & Sattel", "Pferdefreunde Schimmel & Rappe",
    "Pferdefreunde Sternennacht Koppel", "Pferdefreunde Fohlenliebe", "Pferdefreunde Gestüt Sonnenaufgang"
  ],
  "baby-glueck": [
    "Baby Glück Erste Schritte", "Baby Glück Schlafgut Schäfchen", "Baby Glück Mond & Sterne",
    "Baby Glück Waldtiere Sanft", "Baby Glück Bärchen Umarmung", "Baby Glück Wolkenwiege",
    "Baby Glück Babyfelle Kuschel", "Baby Glück Pastell Mint", "Baby Glück Entdecker Matte"
  ],
  mondbaer: [
    "Mondbär Schlummertraum", "Mondbär Schlafgut Mond", "Mondbär Sternenhimmel", "Mondbär Schäfchenwolke",
    "Mondbär Gute Nacht", "Mondbär Sternenstaub Blau", "Mondbär Wolkenschaukel", "Mondbär Zaubermond",
    "Mondbär Kleine Sternchen"
  ],
  "t-rex-world": [
    "T-Rex World Dino Spuren", "T-Rex World Urzeit Dschungel", "T-Rex World Vulkan Expedition",
    "T-Rex World Brachiosaurus Grün", "T-Rex World Triceratops Sand", "T-Rex World Fossilien Forscher",
    "T-Rex World Raubsaurier Brüllen", "T-Rex World Dino Skelett", "T-Rex World Jurassic Park"
  ],
  "rock-star-baby": [
    "Rock Star Baby Electric Guitar Black", "Rock Star Baby Guitar White Heart", "Rock Star Baby Star Dust Grey",
    "Rock Star Baby Skull & Wings", "Rock Star Baby Rocker Bass", "Rock Star Baby Vintage Acoustic",
    "Rock Star Baby Stage Lights", "Rock Star Baby Leopard Rock", "Rock Star Baby Monochrom Star"
  ],
  "bc-kids": [
    "BC Kids Nordic Cloud Anthrazit", "BC Kids Pure Wool Minimalist", "BC Kids Handgetuftet Pastell",
    "BC Kids Geometrie Beige", "BC Kids Soft Touch Grau", "BC Kids Bio-Wolle Natur",
    "BC Kids Skandi Triangle", "BC Kids Honeycomb Gelb", "BC Kids Architekten Spielteppich"
  ],
  "lovely-kids": [
    "Lovely Kids Regenbogenzauber", "Lovely Kids Sternenwolke Mint", "Lovely Kids Heißluftballon",
    "Lovely Kids Bunte Punkte", "Lovely Kids Mondtraum Gelb", "Lovely Kids Teddy Bär Soft",
    "Lovely Kids Zickzack Pastell", "Lovely Kids Herzen Rosé", "Lovely Kids Safari Freunde"
  ],
  pummeleinhorn: [
    "Pummeleinhorn Keks Liebe", "Pummeleinhorn Sternschnuppe", "Pummeleinhorn Regenbogen Glitzer",
    "Pummeleinhorn Donut Pause", "Pummeleinhorn Flauschig & Bunt", "Pummeleinhorn Herzchen Wölkchen",
    "Pummeleinhorn Schokotraum", "Pummeleinhorn Glitzerspaß"
  ],
  grimmliis: [
    "Grimmliis Waldwichtel Hütte", "Grimmliis Kleiner Fuchs", "Grimmliis Eulenbaum",
    "Grimmliis Igel im Moos", "Grimmliis Zauberpilz Wald", "Grimmliis Herbstblätter",
    "Grimmliis Wiesenfreunde", "Grimmliis Sternennacht"
  ],
  "spiegelburg-garden": [
    "Spiegelburg Garden Wildblumen Wiese", "Spiegelburg Garden Vögelchen & Zweige", "Spiegelburg Garden Schmetterlingsgarten",
    "Spiegelburg Garden Lavendelbusch", "Spiegelburg Garden Rosenranke", "Spiegelburg Garden Landhaus Botanik",
    "Spiegelburg Garden Kräutergarten", "Spiegelburg Garden Cottage Blumen"
  ],
  shaggy: [
    "Kobenhavn Shaggy Soft Cream", "Kobenhavn Shaggy Silbergrau", "Kobenhavn Shaggy Anthrazit",
    "Kobenhavn Shaggy Warm Mocca", "Kobenhavn Shaggy Salbei Grün", "Kobenhavn Shaggy Terracotta",
    "Kobenhavn Shaggy Aubergine", "Kobenhavn Shaggy Dusty Pink", "Kobenhavn Shaggy Sand Beige",
    "Kobenhavn Shaggy Ozeanblau", "Kobenhavn Shaggy Bicolor Melange", "Kobenhavn Shaggy Tiefschwarz"
  ],
  flokati: [
    "Original Griechischer Flokati 100% Naturwolle", "Luxus Natur-Lammfell Neuseeland Creme",
    "Medizinisches Baby-Lammfell Goldgelb", "Echtes Naturbelassenes Rinderfell Unikat",
    "Premium Schaffell Taupe", "Handgewebter Hochland-Flokati Wolle", "Gotland Natur-Lammfell Silbergrau",
    "Natur-Islandlammfell Langhaar Weiß"
  ]
};

const allProducts = [];
let idCounter = 100;

BRAND_CATEGORIES.forEach(brand => {
  const titles = categoryDesignTitles[brand.id] || [];
  const images = categoryImagePool[brand.id] || [brand.image];
  const count = brand.itemCount;

  for (let i = 0; i < count; i++) {
    idCounter++;
    const designTitle = titles[i] || `${brand.name} Modell #${i + 1}`;
    const primaryImg = images[i % images.length] || brand.image;
    const secondaryImg = images[(i + 1) % images.length] || primaryImg;
    const isAdult = brand.id === "shaggy" || brand.id === "flokati" || brand.id === "spiegelburg-garden";
    const section = (brand.id === "shaggy" || brand.id === "flokati") ? "both" : isAdult ? "general" : "kids";
    const category = brand.id === "flokati" ? "naturfelle" : brand.id === "shaggy" ? "shaggy" : "carpets";
    const categoryLabel = brand.id === "flokati" ? "Naturfelle & Flokati" : brand.id === "shaggy" ? "Shaggy Hochflor" : `${brand.name} Teppiche`;
    const price = 69 + ((i * 17) % 180);
    const origPrice = Math.round(price * 1.3);
    const sku = `${brand.slug.slice(0, 3).toUpperCase()}-${idCounter}`;

    allProducts.push({
      id: `prod-${brand.slug}-${idCounter}`,
      plentyVariationId: idCounter * 10,
      itemId: idCounter,
      sku: sku,
      name: `${brand.name} Teppich – ${designTitle}`,
      section: section,
      category: category,
      brandCategory: brand.slug,
      brandLogo: brand.logo,
      categoryLabel: categoryLabel,
      price: price,
      originalPrice: origPrice,
      rating: +(4.8 + ((i % 3) * 0.08)).toFixed(1),
      reviewsCount: 12 + (i * 7) % 75,
      primaryImage: primaryImg,
      secondaryImage: secondaryImg,
      galleryImages: [primaryImg, secondaryImg, brand.image],
      isBestSeller: i % 4 === 0,
      isNewArrival: i % 3 === 0,
      material: section === "kids" 
        ? "100% Weicher Soft-Polyacryl Flor, Schadstofffrei nach OEKO-TEX® Standard 100" 
        : brand.id === "flokati" 
        ? "100% Reine Griechische Bio-Schurwolle" 
        : "100% Soft-Touch Hochflor Mikrofaser",
      availableMaterials: section === "kids" 
        ? ["100% Soft-Polyacryl Flor", "Bio-Baumwolle Dämpfung"] 
        : ["100% Neuseeland Bio-Schurwolle", "Soft-Touch Mikrofaser"],
      sizes: section === "kids" 
        ? ["100 x 120 cm", "120 x 160 cm", "140 x 200 cm"] 
        : ["120 x 170 cm", "160 x 230 cm", "200 x 290 cm"],
      colors: [
        { name: "Original Design", hex: brand.themeColor },
        { name: "Natur Creme", hex: "#EFE7DC" }
      ],
      roomCategory: section === "kids" ? "kids" : i % 2 === 0 ? "living-room" : "bedroom",
      description: `${brand.description} Modell "${designTitle}". Meisterhaft gefertigt mit höchster Fadendichte für samtweichen Trittkomfort und unbeschwerte Stunden.`,
      careInstructions: [
        "Regelmäßig mit glatter Düse ohne rotierende Bürste absaugen.",
        "Punktuelle Flecken mit mildem Tuch und Seifenlauge sofort abtupfen.",
        "100% für Fußbodenheizung geeignet, antistatisch und formstabil."
      ],
      shippingInfo: "Kostenloser Blitzversand aus unserem Dülmen Logistikzentrum (Lieferzeit 2–3 Werktage).",
      stockInfo: {
        physicalStock: 24,
        netStock: 18,
        inStock: true,
        statusLabel: "Auf Lager (18 Stück in Dülmen)",
        warehouseName: "KS Sales Dülmen Logistikzentrum"
      },
      deliveryInfo: {
        averageDays: 2,
        deliveryText: "Standard-Lieferung: 2–3 Werktage",
        estimatedDateRange: "Aug 20 – Aug 23",
        carrier: "DHL / DPD Paketdienst"
      }
    });
  }
});

const generalProducts = allProducts.filter(p => p.section === "general" || p.section === "both");
const kidsProducts = allProducts.filter(p => p.section === "kids" || p.section === "both");

const fileContent = `import type { Product, CollectionCategory, ShopRoom, InstagramPost, BrandCategory } from '../types';

export const BRAND_CATEGORIES: BrandCategory[] = ${JSON.stringify(BRAND_CATEGORIES, null, 2)};

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

export const GENERAL_PRODUCTS: Product[] = ${JSON.stringify(generalProducts, null, 2)};
export const KIDS_PRODUCTS: Product[] = ${JSON.stringify(kidsProducts, null, 2)};
export const PRODUCTS: Product[] = ${JSON.stringify(allProducts, null, 2)};

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
`;

fs.writeFileSync("./src/data/mockData.ts", fileContent);
console.log("src/data/mockData.ts generated with 145 products including Der Mondbär!");
