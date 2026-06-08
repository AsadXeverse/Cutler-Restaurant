import { MenuCategory, JournalPost } from './types';

// Premium high-end image assets for our fine-dining sensory feel
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80',
  food: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  drink: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
  privateDining: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  sundayHero: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
  brunchDish: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
  journalWine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
  journalChef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
  journalDesign: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'appetisers',
    title: 'Appetisers',
    description: 'Bespoke, hand-crafted bites and custom-aged charcuteries designed to set the rhythm for the evening.',
    items: [
      {
        id: 'hd-1',
        name: 'Homemade FOCACCIA',
        description: 'Traditional wood-hearth baked focaccia finished with structural flakes of rosemary-infused sea salt and hand-pressed cold Victorian olive oil.',
        price: '12',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Hearth Focaccia', 'Victorian Olive Oil', 'Rosemary Salt'],
        tags: ['Baked Daily']
      },
      {
        id: 'hd-2',
        name: 'Fresh & pickled CRUDITÉS, seaweed',
        description: 'Crisp morning harvests of market-garden root vegetables, presented with sweet quick-pickled baby carrots, dill oil, and a dense, salted seaweed cream.',
        price: '19',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Garden Crudités', 'Pickled Roots', 'Seaweed Cream'],
        tags: ['Gluten Free', 'Vegetarian']
      },
      {
        id: 'hd-3',
        name: 'BLACK TRUFFLE gougere',
        description: 'Chilled cream of double-strained triple cream brie cheese and minced Perigord black truffles, piped inside light, warm, golden gruyère cheese pastries.',
        price: '13',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Gougere Pastry', 'Truffle Cream', 'Aged Gruyère'],
        tags: ['House Specialty']
      },
      {
        id: 'hd-4',
        name: 'JAMÓN IBÉRICO tartlet & chestnut',
        description: 'Paper-thin ribbons of raw oak-finished Jamón Ibérico de Bellota, layered in custom roasted chestnut paste and served in crisp, hand-pressed rye crust cases.',
        price: '14',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Jamón Ibérico', 'Chestnut Mousse', 'Rye Tartlet'],
        tags: ['Exclusive Cure']
      },
      {
        id: 'hd-5',
        name: 'WHITEBAIT sandwich',
        description: 'Delicate, crisped wild-caught whitebait fish stacked with dynamic caper dill mayonnaise, tucked between ultra-thin slices of crustless salted butter sandwich halves.',
        price: '19',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Crispy Whitebait', 'Caper Aioli', 'Salted Butter Loaf'],
        tags: ['Coastal Harvest']
      },
      {
        id: 'hd-6',
        name: 'CUTLER DONUTS, crème fraîche & salmon roe',
        description: 'Two spectacular, warm baked yeast donuts, stuffed with dense, tart crème fraîche whipped cream and finished on top with sparkling beads of Yarra Valley salmon roe and chives.',
        price: '36',
        image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Warm Savory Donut', 'Crème Fraîche', 'Salmon Roe', 'Garden Chives'],
        tags: ['Signature Bite', 'Chef Special']
      },
      {
        id: 'hd-7',
        name: 'Giaveri white sturgeon caviar 30g',
        description: 'Pristine, buttery black sturgeon caviar beads imported from Italian master curates. Served cold on shaved ice with mother of pearl spoons, buckwheats, and traditional blinis.',
        price: '240',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Giaveri Caviar', 'Buckwheat Blinis', 'Cultured Crème'],
        tags: ['Ultra Luxury', 'Imports']
      }
    ]
  },
  {
    id: 'seasonal-seafood',
    title: 'Seasonal Seafood',
    description: 'Pristine wild harvests from ice-cold deep currents and local rocky reef environments.',
    items: [
      {
        id: 'ss-1',
        name: 'Half dozen Merimbula ROCK OYSTERS',
        description: 'Six hand-shucked cold-climate Merimbula rock oysters from regional bays. Delivered with classic red wine mignonette, citrus rinds, and house fermented hot sauce.',
        price: '42',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Rock Oysters', 'Shallot Mignonette', 'Fermented Hot Chili'],
        tags: ['Fresh Shucked', 'Gluten Free']
      },
      {
        id: 'ss-2',
        name: 'TUNA CRUDO, yuzu vinaigrette',
        description: 'Thin translucent medallions of fresh-caught yellowfin tuna, lightly drizzled with clean yuzu citrus, elder-pressed rapeseed oil, and pickled shallots.',
        price: '28',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Yellowfin Tuna', 'Yuzu Vinaigrette', 'Elder Oil', 'Pickled Shallot'],
        tags: ['Raw Selection', 'Gluten Free']
      },
      {
        id: 'ss-3',
        name: 'Cured SHARK BAY SCALLOPS',
        description: 'Delicately sliced Shark Bay wild ocean scallops, lightly salt-matured and plated elegantly with sweet mandarin orange wedges and thin green chili rings.',
        price: '26',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=600&q=80', // Premium Scallops image
        ingredients: ['Shark Bay Scallops', 'Mandarin Zest', 'Green Chili Slices'],
        tags: ['Clean Seafood', 'Gluten Free']
      }
    ]
  },
  {
    id: 'entrees',
    title: 'Entrées',
    description: 'Substantive small plates cooked with precise temperature profiling.',
    items: [
      {
        id: 'en-1',
        name: 'MOZZARELLA di bufala, puntarelle & pistachio',
        description: 'Silky, fresh-spun local Buffalo mozzarella cheese served cold alongside bitter wild green puntarelle shoots and a toasted pistachio oil dressing.',
        price: '29',
        image: 'https://images.unsplash.com/photo-1592417817098-8f3d6fe19675?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Buffalo Mozzarella', 'Puntarelle Greens', 'Pistachio Crumbs'],
        tags: ['Vegetarian', 'Gluten Free']
      },
      {
        id: 'en-2',
        name: 'SHELLFISH CIOPPINO, grilled prawn & sea urchin',
        description: 'A traditional coastal shellfish stew reduced with woodfire blistered heirloom tomatoes, hosting sweet wood-fired prawns, fresh pippies, and buttery red sea urchin.',
        price: '39',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Pippies & Prawns', 'Red Sea Urchin', 'Rich Tomato Cioppino Broth'],
        tags: ['Hearth Crafted', 'Rich Texture']
      },
      {
        id: 'en-3',
        name: 'VENISON tartare, radicchio rosa & elderberry',
        description: 'Hand-minced wild pasture-fed venison loin folded with cold-climate elderberry paste and crunchy roasted hazelnuts, dressed on beautiful pink radicchio leaves.',
        price: '35',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Venison Loin', 'Elderberry Paste', 'Radicchio Rosa', 'Toasted Hazelnuts'],
        tags: ['Wild Game', 'Earthy']
      }
    ]
  },
  {
    id: 'cutler-classics',
    title: 'Cutler Classics',
    description: 'The monumental pillars of our dual-firewood masonry hearth cooking systems.',
    items: [
      {
        id: 'cc-1',
        name: 'DRY AGED DUCK, CHERRY & ENDIVE',
        description: 'Our legendary dry-aged organic Pekin duck, lacquered tableside with sweet spiced cherry glazes and cooked on high-heat hickory coals. Balanced with bitter wild endive leaves. Serves one or two guests.',
        price: '65 / 130',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', // High-end cherry glazed duck dish
        ingredients: ['Dry Aged Pekin Duck', 'Wild Sour Cherries', 'Fired Endive Leaves'],
        tags: ['Signature Masterpiece', 'Dry Aged']
      },
      {
        id: 'cc-2',
        name: 'Wood fired MS7 WAGYU SIRLOIN 300g',
        description: 'Decadent, marble-score 7+ Westholme Wagyu sirloin steak cooked whole over slow-smouldering dry white oak logs. Served with a piping hot roasted bone marrow demi-glace.',
        price: '92',
        image: 'https://images.unsplash.com/photo-1558030006-455675393462?auto=format&fit=crop&w=600&q=80',
        ingredients: ['MS7 Wagyu Sirloin', 'Wood Embers Blast', 'Aged Bone Marrow Sauce'],
        tags: ['Ultra Premium Steak', 'Wagyu']
      }
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    description: 'Substantive centerpieces, heavily influenced by wood smoke, forest foraging, and coastal salt.',
    items: [
      {
        id: 'm-1',
        name: 'Dry-aged pork chop, apples & sage',
        description: 'A magnificent double-rib organic pork chop, dry-aged in-house for eighteen days, glazed with sour organic cider vinegar and roasted with fresh apple orchard halves and sage.',
        price: '58',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Dry Aged Pork Chop', 'Orchard Cider Glaze', 'Caramelized Apples', 'Fresh Sage'],
        tags: ['House Cured', 'Hickory Smoked']
      },
      {
        id: 'm-2',
        name: 'Pan seared GLACIER 51 TOOTHFISH',
        description: 'Elite white Antarctic toothfish fillet, pan-caramelized in house cultured butter. Plating is completed inside a fragrant saffron broth with tender white asparagus and hand-foraged sea herbs.',
        price: '69',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Plump Glacier 51 Toothfish', 'White Asparagus', 'Saffron Broth', 'Tidal Pool Herbs'],
        tags: ['Rare Catch', 'Seafood Highlight']
      },
      {
        id: 'm-3',
        name: 'Ash-roasted KABOCHA SQUASH',
        description: 'A whole dense Kabocha pumpkin, roasted directly underneath burning applewood embers till sweet and smooth. Filled with farro grains, chestnut wood paste, and dark mushroom demi-glace.',
        price: '46',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Kabocha Pumpkin', 'Organic Farro Grains', 'Spiced Chestnuts', 'Mushroom Demi-Glace'],
        tags: ['Vegetarian', 'Vegan Core']
      }
    ]
  },
  {
    id: 'accompaniments',
    title: 'Accompaniments',
    description: 'Savory sides crafted to complement. Prepared over embers or pulled fresh from the baker\'s ovens.',
    items: [
      {
        id: 'ac-1',
        name: 'Warm potato bread, cultured butter',
        description: 'Soft, dense hearth-baked potato mash loaf, presented warm with sweet hand-churned salted river butter.',
        price: '12',
        ingredients: ['Potato Bread Hand-Baked', 'Cultured Micro Butter'],
        tags: ['Vegetarian']
      },
      {
        id: 'ac-2',
        name: 'Wood fired winter greens, garlic & lemon',
        description: 'Vibrant organic kale, chard, and spinach shoots, lightly wilted over high heat coals with fresh lemon juice and black garlic oil.',
        price: '12',
        ingredients: ['Winter Greens Shoot', 'Black Garlic Infusion', 'Lemon Oil'],
        tags: ['Vegetarian', 'Gluten Free']
      },
      {
        id: 'ac-3',
        name: 'Salted baby carrots, local honey, thyme',
        description: 'Sweet, small baby-carrots blistered inside embers, rolled in dark wild honeycomb and fresh mountain garden thyme.',
        price: '12',
        ingredients: ['Amber Baby Carrots', 'Organic Honeycomb', 'Mountain Thyme'],
        tags: ['Vegetarian', 'Gluten Free']
      },
      {
        id: 'ac-4',
        name: 'Hand-cut chips, rosemary salt, aioli',
        description: 'Crisp thick-cut russet potato dynamic fries, tossed in aromatic wild-foraged mountain rosemary salt, served with fresh garlic aioli.',
        price: '12',
        ingredients: ['Thick Cut Fries', 'Crushed Rosemary Salt', 'Garlic Mayonnaise'],
        tags: ['Vegetarian']
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'Masterful, low-sugar finishes highlighting roasted nuts, cold-pressed cocoa, and delicate fruits.',
    items: [
      {
        id: 'de-1',
        name: 'Dark chocolate ONYX cake',
        description: 'Bespoke dense 74% Venezuelan dark chocolate cake with a warm sea-caramel molten center, crowned with premium hand-spun roasted hazelnut ice cream.',
        price: '24',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
        ingredients: ['74% Venezuelan Cocoa', 'Molten Sea Caramel', 'Roasted Hazelnut Ice Cream'],
        tags: ['House Famous']
      },
      {
        id: 'de-2',
        name: 'Crème caramel, Grand Marnier raisins',
        description: 'Our ultra-velvety, smooth, classic wood-oven baked crème custard, covered in clear burnt sugar caramel syrup and served with rich, Grand Marnier liqueur-soaked Muscat raisins.',
        price: '22',
        image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Rich Egg Custard', 'Burnt Sugar Syrup', 'Grand Marnier Liqueur', 'Muscat Raisins'],
        tags: ['Classic Velvet']
      },
      {
        id: 'de-3',
        name: 'Warm strawberry jam soufflé',
        description: 'Whisked-to-order high-rise egg meringue soufflé, with a vibrant fresh mountain strawberry jam center, accompanied by pour-over cold vanilla bean whipped cream.',
        price: '24',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Fluffy Soufflé Meringue', 'Wild Strawberry Jam', 'Vanilla Bean Cream'],
        tags: ['Baked to Order']
      },
      {
        id: 'de-4',
        name: 'Spiced red wine poached pear',
        description: 'Sweet, firm regional pear poached for six hours in rich spiced Shiraz wine with cinnamon, cardamom, and served with custom-made fresh ginger root ice cream.',
        price: '19',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Poached Shiraz Pear', 'Cardamom & Cloves Spices', 'Fresh Ginger Ice Cream'],
        tags: ['Herbaceous Sweet']
      }
    ]
  },
  {
    id: 'cheese-selection',
    title: 'Cheese Selection',
    description: 'Artisanal cheese blocks matured inside cold subterranean limestone grottos.',
    items: [
      {
        id: 'ch-1',
        name: '18 month Aged COMTÉ, honeycomb & crisp rye',
        description: 'Stunning premium block of 18-month aged Comté cheese from French dairies, presenting crystalized nuts profile. Served with organic sweet honeycombs and crispy rye toast squares.',
        price: '26',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80',
        ingredients: ['18 Month Aged Comté', 'Organic Honeycomb Wood-Frames', 'Baked Rye Toast'],
        tags: ['Nutty & Salty']
      },
      {
        id: 'ch-2',
        name: 'Saint Agur blue, pickled walnut & oat crackers',
        description: 'Elite creamy blue Saint Agur cheese, with heavy-veined, rich, double-cream notes. Accompanied by sweet pickled English walnuts and hand-pressed organic oat crackers.',
        price: '24',
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Saint Agur Blue Cheese', 'Pickled English Walnuts', 'Pressed Oat Crackers'],
        tags: ['Bold Veins']
      }
    ]
  }
];

export const DRINKS_CATEGORIES: MenuCategory[] = [
  {
    id: 'beer-alkohol',
    title: 'Beer, Alcohol & Other Beers',
    description: 'Our exclusively curated selection of craft beers, dense porters, wild ales, and draft brews representing the finest liquid craftsmanship.',
    items: [
      {
        id: 'db-1',
        name: 'Hevelius Smoked Baltic Porter',
        description: 'A deep, midnight-black Porter matured inside heavily charred oak casks. Radiates rich dark caramel sugars and oak smoke properties.',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
        ingredients: ['French Oak Aging', 'Charred Beechwood Smoked Malts'],
        tags: ['Smoked', '8.5% ABV', 'Porter / Stout']
      },
      {
        id: 'db-2',
        name: 'Wild Sourdough Saison',
        description: 'Fermented inside vintage Chardonnay casks using our home-propagated wild sourdough yeast, infusing elderflower and stone fruit tones.',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Chardonnay Wood Ferment', 'Wild Sourdough Yeast Mother', 'Botanicals'],
        tags: ['Tart Sours', '6.2% ABV', 'Shared Bottle']
      },
      {
        id: 'db-3',
        name: 'White Ash Pilsner',
        description: 'Unfiltered, dry German Pilsner brewed with pure mineral mountain waters. Exceptionally clean, crisp, and refreshing with biscuit undertones.',
        price: '$14',
        image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Subterranean Condensing in Caves', 'Noble Hallertauer Hops'],
        tags: ['Crisp Pilsner', '4.8% ABV', 'Draft Pour']
      },
      {
        id: 'db-4',
        name: 'Imperial Pine Double IPA',
        description: 'An aggressive, heavily dry-hopped West Coast double IPA displaying notes of wet pine sap, citrus resins, and a warm bitter pine finish.',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Oregon Cryo-Hops Blasts', 'Blistered Grapefruit Resin Oils'],
        tags: ['Double Hop', '7.8% ABV', 'IPA']
      },
      {
        id: 'db-5',
        name: 'Bourbon Cask Wheat Beer',
        description: 'Traditional creamy Bavarian Hefeweizen, aged for half a year in fresh wet Kentucky bourbon barrels to yield rich vanilla butter fats.',
        price: '$20',
        image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Kentucky Bourbon Barrels', 'Spiced Clove Yeast Culture'],
        tags: ['Spiced & Rich', '6.9% ABV', 'Chalice Serving']
      },
      {
        id: 'db-6',
        name: 'Coastal Sea Salt Gose',
        description: 'Refreshing, saline German-style wheat sour, seasoned with hand-scraped grey French sea salt and aromatic crushed coriander seeds.',
        price: '$15',
        image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
        ingredients: ['Grey Brittany Sea Salt', 'Crushed Coriander Seed Oils'],
        tags: ['Saline Sour', '4.5% ABV', 'Effervescent']
      }
    ]
  }
];

export const GIFT_VOUCHERS = [
  {
    id: 'v-dining-two',
    title: 'The Cutler Tasting Journey for Two',
    subtitle: 'Full Gastronomic Experience',
    price: 380,
    description: 'Includes a glass of vintage Champagne on arrival, followed by our full signature 7-course seasonal tasting menu crafted by our culinary team.',
    benefits: ['Full 7-course menu', 'Two glasses premium vintage Champagne', 'Exclusive personalized table cards', 'Valid for 18 months'],
    popular: true
  },
  {
    id: 'v-chefs-counter',
    title: 'Chef’s Table Immersive Masterclass',
    subtitle: 'Ultra Premium Front Row',
    price: 550,
    description: 'An intimate evening for one at the coveted Cutler Chef’s Counter. Enjoy interactive storytelling from the Executive Chef with a customized 9-course menu.',
    benefits: ['Bespoke 9-course interactive menu', 'Cellar Manager’s elite wine pairings', 'Curated signed menu keepsake', 'Private kitchen gallery tour'],
    popular: false
  },
  {
    id: 'v-monetary-150',
    title: 'The Classic Cutler Monetary Voucher',
    subtitle: 'Elegant Dining Freedom',
    price: 150,
    description: 'A versatile premium voucher credited at face value. May be redeemed against our fine dining lunch, evening à la carte, or curated drinks list.',
    benefits: ['Redeemable for food, drinks, or events', 'Can be used across multiple visits', 'Beautiful gold-foil presentation sleeve', 'E-Voucher or luxury post delivery'],
    popular: false
  },
  {
    id: 'v-monetary-300',
    title: 'The Signature Cutler Monetary Voucher',
    subtitle: 'Substantive Luxury Gifting',
    price: 300,
    description: 'An expansive monetary voucher for substantial dining freedom. Highly suited for anniversaries, birthdays, and high-impact corporate gifting.',
    benefits: ['Sizable credit for premium fine-dining', 'E-Voucher or luxury physical embossed card', 'Conscious bespoke packaging', 'Priority reservation access code'],
    popular: false
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'j-1',
    title: 'Wednesday Cellar Night',
    category: 'IMMERSION',
    date: 'June 10, 2026',
    excerpt: 'An intimate, candlelit subterranean retreat. Deep inside our historic 19th-century vaults, explore 4,000 vintage bottles paired with charcoal-cooked skewers and raw finishes under absolute quietude.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    author: 'Chef Paul Cutler',
    readTime: '7 min read',
    content: [
      'Every Wednesday evening, as the daylight fades over the old district, we extinguish our main electric lights and surrender the subterranean stone vault exclusively to wax candles, soft shadows, and deep chamber quiet. This is Cellar Night at Cutler.',
      'Designed as a calm, meditative escape from metropolitan acceleration, Cellar Night gathers only twelve couples nested in secluded limestone alcoves. The ambient atmosphere is charged purely by the slow melting of mountain beeswaxes, the rich aroma of hand-poured wood oil, and some of the world’s most magnificent back-vintages breathing in decanters.',
      'For this specific ritual, we bypass our standard à la carte menu. Culinary curator Chef Paul Cutler designs a series of eight micro-plates composed to pair exquisitely with our deepest red Burgundies and older dry Rieslings. Food highlights include raw, citrus-cured wild trout medallions, cold-pressed hazelnut creams, and embers-grilled dry boar skewers that smoke lightly in individual pine boxes.',
      'Our sommeliers guide you through our subterranean archive, selecting legendary dust-crowned bottles from centuries past. Whether you are a dedicated vintage wine collector or a seeker of quiet, sensory-focused intimacy, Wednesday Cellar Night provides an experience that is deeply moving, silent, and beautifully grounded.'
    ]
  },
  {
    id: 'j-2',
    title: 'Sundays at Cutler: The Slow Fire & Carving Ritual',
    category: 'RITUAL',
    date: 'June 07, 2026',
    excerpt: 'Recapturing the romance of slow-cooked family carving boards. Every Sunday afternoon, we gather to carve wood-fired joints tableside, accompanied by warm mountain sourdough and grand magnums.',
    image: 'https://images.unsplash.com/photo-1558235211-f11dcba3fa14?auto=format&fit=crop&w=800&q=80',
    author: 'Chef Paul Cutler',
    readTime: '6 min read',
    content: [
      'Sundays in the old district are designed for slow, restorative ease. At Cutler, we honor this pace with our signature Sunday Carvery Ritual—an immersive tableside culinary experience celebrating large, wood-roasted joint cuts and old-world hospitality.',
      'Starting at noon, the Great Hearth Salon is heated exclusively with slow-burning, weathered applewood log segments. We cook grand joint roasts of salt-aged Wagyu rib on the bone, cider-lacquered pork racks, and organic heritage geese stuffed with wild orchard herbs over the steady, radiant heat of the embers for six hours.',
      'Our culinary team wheel beautiful, hand-carved copper carving carts directly to your table. The roasted joint of beef is carved to your exact preference while still glowing with hot meat juices and sweet fruitwood glazes. We serve these pristine proteins along with heavy iron pots of slow-cooked roots, wild sorrel gravies, and towering, warm sourdough loaves baked that morning.',
      'To completely finish the sensory celebration, our beverage directors pour exquisite white, orange, and red wines from large magnums. The atmosphere is warm, noisy with content voices, and deeply nourishing. It is Sunday restored to its original, sacred form.'
    ]
  },
  {
    id: 'j-3',
    title: 'A Thank You to Sam Lawrence and Bridges',
    category: 'TRIBUTE',
    date: 'May 25, 2026',
    excerpt: 'Reflecting on an incredible, high-energy collaborative weekend with the Bridges crew. An exchange of wild-foraged coastal ferments, dry-aged waterfowl, and embers-grilled botanicals.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    author: 'Chef Paul Cutler',
    readTime: '8 min read',
    content: [
      'The dust has settled, the hearth fire has returned to its steady glow, and we are left with a profound sense of gratitude following our dual-evening collaboration with Chef Sam Lawrence and the exceptionally talented team from Bridges.',
      'Over the course of forty-eight intense, exhilarating hours, our two kitchens combined into a singular creative entity. We shared wild coastal herbs, custom cellar reserves, and stories of foraging journeys along distant riverways. It was an absolute validation of why we cook: to exchange knowledge, challenge boundaries, and feed our guests with absolute passion.',
      'The collaborative menu challenged all assumptions, combining Bridges’ mastery of marine salinity and wild lactic fermentation with Cutler’s deep, intense woodfire ember cookery. Guests marveled as we served dry-aged wood duck finished with a vinegar extraction of wild kelp, and salted caramel custards cooked directly inside sweet hot cherry ash.',
      'We extend our deepest gratitude to Sam, his cooks, our brilliant sommeliers, and especially the eighty-six guests who shared this unforgettable culinary odyssey with us. We are already planning our return takeover at Bridges later this autumn.'
    ]
  },
  {
    id: 'j-4',
    title: 'Bridges at Cutler for MFWF 2026',
    category: 'FESTIVAL',
    date: 'May 12, 2026',
    excerpt: 'Announcing our headline partnership for the 2026 Melbourne Food & Wine Festival. A rare, full-force ten-course collaborative event where coastal waters meet the woodfire hearth.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    author: 'Eleanor Vance',
    readTime: '5 min read',
    content: [
      'We are spectacularly proud to announce that Cutler will serve as a headline host venue for the upcoming 2026 Melbourne Food & Wine Festival. In a rare, exclusive partnership, we are welcoming the legendary culinary team from Bridges into our chambers for a singular, ten-course collaborative feast.',
      'This landmark event, titled "Tide & Woodfire," will celebrate the extreme natural bounty of the continent\'s shorelines and dense interior hardwood forests. Combining the coastal foraging, raw fish curing, and wild vinegar fermenting focus of Bridges with our deep mastery of primary open-hearth smoke and aged proteins.',
      'Tickets for both evening sessions will go live to database members on June 15th. Given the limited seats at the Great Hearth Salon and our Chef’s Counter, we recommend securing your booking code immediately. Prepare yourself for a once-in-a-career sensory experience.'
    ]
  },
  {
    id: 'j-5',
    title: 'An Evening with the Agrarian Kitchen’s Rodney Dunn',
    category: 'EVENT',
    date: 'April 29, 2026',
    excerpt: 'A celebration of raw, primordial fire-cookery and soil-deep agricultural harvest. Chef Paul Cutler hosts the iconic Rodney Dunn for a magnificent collaborative dinner.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    author: 'Chef Paul Cutler',
    readTime: '9 min read',
    content: [
      'At Cutler, we have always believed that great food starts deeply in the soil, honoring the slow cycles of weather and organic cultivation. It is with great pleasure that we announce an extraordinary collaborative evening with Rodney Dunn, the pioneering force behind the legendary Agrarian Kitchen.',
      'Rodney has spent decades championing zero-waste, farm-to-table culinary philosophy and authentic open-fire oven cookery. On April 29th, he brings his profound knowledge of old horticultural varieties and wood-smoke physics into our metropolitan kitchen chambers.',
      'Together, Rodney and Chef Paul Cutler will construct a magnificent, ten-course narrative of the modern garden. From blistering fresh-plucked morning greens over glowing fruitwood ash to slow-roasting organic suckling pigs cooked whole on our cedar boards. Every plate is accompanied by biodynamic cellar selections matching land-based accents. A masterclass in culinary purity constraint.'
    ]
  },
  {
    id: 'j-6',
    title: 'Valentine’s Day at Cutler: A Candlelit Sensory Chamber',
    category: 'CHAMBER',
    date: 'February 14, 2026',
    excerpt: 'An intimate evening of candlelit culinary storytelling. Celebrate the spirits of the elements with dry-aged pasture cuts, sweet berry reductions, and prestigious back-vintages.',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=800&q=80',
    author: 'Eleanor Vance',
    readTime: '6 min read',
    content: [
      'Love, much like a steady hearth, requires patience, intense heat, and high-quality fuel. This Valentine’s Day, Cutler transforms into a secluded sanctuary dedicated exclusively to candlelight and sensory indulgence.',
      'For one evening only, our dining rooms will host a specialized, seven-course tasting journey that celebrates the rich, evocative flavours of hot woods, dry mountain salts, and concentrated berry sugars. Savor hand-dived scallops paired with sweet, charred vanilla bean reductions, milk-roasted veal sweetbreads, and a decadent Venezuelan chocolate cake cooked with smoked sea salt caramels.',
      'Our cellar managers have selected six spectacular, rare wines to accompany each phase of the meal—including mature, bubbly Champagnes from 2008 and sweet, deep ports. Each table is lit with individual beeswax candles, ensuring absolute privacy and warmth. Space is incredibly limited; bookings secure up to ninety days in advance.'
    ]
  }
];
