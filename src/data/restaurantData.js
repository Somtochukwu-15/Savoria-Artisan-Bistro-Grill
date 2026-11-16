export const restaurantInfo = {
  name: "Savoria Artisan Restaurant & Grill",
  shortName: "Savoria",
  tagline: "Where Culinary Passion Meets Unforgettable Moments",
  heroSubtitle: "Experience modern gastronomy rooted in authentic traditions. Crafted with locally sourced seasonal ingredients, wood-fired mastery, and heartfelt hospitality.",
  phone: "+1 (555) 382-7491",
  email: "reservations@savoria-bistro.com",
  supportEmail: "hello@savoria-bistro.com",
  address: "742 Evergreen Promenade, Culinary Arts District, Suite 100",
  city: "San Francisco, CA 94103",
  hours: {
    weekdays: "Monday – Friday: 11:30 AM – 10:30 PM",
    weekends: "Saturday – Sunday: 10:00 AM – 11:30 PM",
    brunch: "Weekend Brunch: 10:00 AM – 2:30 PM",
  },
  stats: [
    { label: "Years of Culinary Art", value: "12+" },
    { label: "Dishes Masterfully Served", value: "180K+" },
    { label: "Locally Sourced Farms", value: "24" },
    { label: "Gastronomy Awards", value: "16" },
  ]
};

export const menuCategories = [
  { id: "all", name: "Full Menu", icon: "Utensils" },
  { id: "starters", name: "Starters & Tapas", icon: "Soup" },
  { id: "mains", name: "Chef's Mains", icon: "Beef" },
  { id: "pasta", name: "Handcrafted Pasta", icon: "Wheat" },
  { id: "grill", name: "Wood-Fired Grill", icon: "Flame" },
  { id: "desserts", name: "Artisan Desserts", icon: "Cake" },
  { id: "drinks", name: "Signature Drinks", icon: "Wine" },
];

export const menuItems = [
  {
    id: 1,
    name: "Truffle Burrata Bruschetta",
    category: "starters",
    price: 18.50,
    rating: 4.9,
    reviews: 142,
    calories: "420 kcal",
    prepTime: "12 mins",
    dietary: ["Vegetarian", "Chef Special"],
    description: "Creamy artisanal pugliese burrata atop grilled sourdough ciabatta, heirloom cherry tomatoes, aged balsamic reduction, and freshly shaved black summer truffles.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Crispy Calamari Fritti",
    category: "starters",
    price: 19.00,
    rating: 4.8,
    reviews: 98,
    calories: "510 kcal",
    prepTime: "15 mins",
    dietary: ["Seafood"],
    description: "Tender Monterey squid lightly tossed in seasoned semolina batter, flash-fried to golden perfection. Served with caper-lemon aioli and spicy marinara dip.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    name: "Charred Spanish Octopus",
    category: "starters",
    price: 24.00,
    rating: 4.9,
    reviews: 115,
    calories: "380 kcal",
    prepTime: "18 mins",
    dietary: ["Gluten-Free", "Chef Special"],
    description: "Slow-braised then flame-seared Mediterranean octopus tentacle, saffron potato foam, smoked paprika oil, and pickled shallots.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 4,
    name: "Pan-Seared Chilean Sea Bass",
    category: "mains",
    price: 42.00,
    rating: 5.0,
    reviews: 210,
    calories: "580 kcal",
    prepTime: "22 mins",
    dietary: ["Gluten-Free", "Chef Special"],
    description: "Wild-caught Chilean sea bass cooked with a golden crust, resting on sweet pea puree, charred baby asparagus, and Meyer lemon beurre blanc.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 5,
    name: "Duck Breast à l'Orange & Thyme",
    category: "mains",
    price: 36.50,
    rating: 4.8,
    reviews: 86,
    calories: "640 kcal",
    prepTime: "25 mins",
    dietary: ["Gluten-Free"],
    description: "Crispy skin roasted maple duck breast, parsnip velvety mousseline, blood orange reduction glaze, and sautéed rainbow chard.",
    image: "https://images.unsplash.com/photo-1514944298352-780975e9b980?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 6,
    name: "Wild Mushroom & Truffle Pappardelle",
    category: "pasta",
    price: 28.00,
    rating: 4.9,
    reviews: 174,
    calories: "620 kcal",
    prepTime: "18 mins",
    dietary: ["Vegetarian", "Chef Special"],
    description: "Fresh house-made egg ribbon pappardelle ribbons, sautéed chanterelle and porcini mushrooms, white truffle cream, and 24-month Parmigiano Reggiano.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 7,
    name: "Lobster Ravioli in Saffron Bisque",
    category: "pasta",
    price: 34.00,
    rating: 4.9,
    reviews: 130,
    calories: "680 kcal",
    prepTime: "20 mins",
    dietary: ["Seafood"],
    description: "Handcrafted pasta pillows packed with Maine butter-poached lobster and ricotta, bathed in velvet brandy saffron shellfish bisque.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 8,
    name: "Dry-Aged Prime Tomahawk Steak (32oz)",
    category: "grill",
    price: 89.00,
    rating: 5.0,
    reviews: 310,
    calories: "1280 kcal",
    prepTime: "30 mins",
    dietary: ["Gluten-Free", "Chef Special"],
    description: "45-day dry-aged USDA Prime Angus bone-in ribeye, grilled over white oak charcoal embers. Accompanied by roasted bone marrow butter and chimichurri.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 9,
    name: "Herb-Crusted Colorado Lamb Chops",
    category: "grill",
    price: 46.00,
    rating: 4.8,
    reviews: 94,
    calories: "720 kcal",
    prepTime: "22 mins",
    dietary: ["Gluten-Free"],
    description: "Tender rack of lamb encrusted in rosemary and Dijon mustard crumbs, served over truffled polenta cakes and mint blackberry demi-glace.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 10,
    name: "Classic Valrhona Chocolate Lava Cake",
    category: "desserts",
    price: 14.50,
    rating: 4.9,
    reviews: 245,
    calories: "520 kcal",
    prepTime: "15 mins",
    dietary: ["Vegetarian"],
    description: "Warm molten cake made with 70% dark Valrhona French chocolate, oozing center, Madagascar bourbon vanilla bean gelato, and raspberry coulis.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 11,
    name: "Artisanal Venetian Tiramisu",
    category: "desserts",
    price: 13.00,
    rating: 4.8,
    reviews: 167,
    calories: "440 kcal",
    prepTime: "10 mins",
    dietary: ["Vegetarian"],
    description: "Espresso-soaked ladyfingers, velvety mascarpone sabayon, dusting of dark Dutch cacao, and a delicate touch of Florio Marsala wine.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 12,
    name: "Smoked Rosemary Old Fashioned",
    category: "drinks",
    price: 16.00,
    rating: 4.9,
    reviews: 188,
    calories: "190 kcal",
    prepTime: "5 mins",
    dietary: ["Vegan", "Gluten-Free"],
    description: "Small-batch Kentucky bourbon, Angostura & orange bitters, organic demerara syrup, smoked tableside with torch-ignited mountain rosemary.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 13,
    name: "Sparkling Hibiscus Berry Mocktail",
    category: "drinks",
    price: 11.50,
    rating: 4.7,
    reviews: 73,
    calories: "110 kcal",
    prepTime: "5 mins",
    dietary: ["Vegan", "Non-Alcoholic", "Gluten-Free"],
    description: "Handcrafted hibiscus flower infusion, crushed blackberries, fresh garden mint, fresh lime juice, and effervescent San Pellegrino soda.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const chefsTeam = [
  {
    name: "Chef Matteo Rossi",
    role: "Executive Culinary Director & Founder",
    bio: "Trained under Michelin-starred kitchens in Milan and Lyon. Chef Matteo brings 20 years of passion for soulful Italian-Mediterranean gastronomy.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    specialty: "Handcrafted Pasta & Truffle Infusions"
  },
  {
    name: "Chef Claire Laurent",
    role: "Head Pastry Virtuoso",
    bio: "Graduated from Le Cordon Bleu Paris. Claire crafts whimsical, sculptured desserts balancing delicate textures with sublime flavor notes.",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80",
    specialty: "French Patisserie & Valrhona Chocolate Art"
  },
  {
    name: "Marcus Vance",
    role: "Master of Fire & Grill",
    bio: "Dedicated 15 years to the ancient craft of open-hearth cooking, dry-aging beef, and pairing cuts with custom wood smoke aromatics.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80",
    specialty: "Dry-Aged Prime Cuts & Charcoal Roasting"
  }
];

export const customerReviews = [
  {
    id: 1,
    author: "Sophia Kensington",
    title: "San Francisco Food Critic",
    rating: 5,
    date: "October 24, 2026",
    comment: "Savoria is an absolute masterpiece. The Truffle Pappardelle and Chilean Sea Bass were cooked to perfection. The service was impeccably attentive without being intrusive.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    author: "David & Allison Chen",
    title: "Anniversary Guests",
    rating: 5,
    date: "November 2, 2026",
    comment: "Celebrated our 10th anniversary at the Chef's Table. The personalized wine pairings and the Valrhona Lava Cake made it an evening we will cherish forever!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    author: "Julian Martinez",
    title: "Local Culinary Enthusiast",
    rating: 5,
    date: "November 10, 2026",
    comment: "The wood-fired dry-aged tomahawk steak was honestly the best steak I've had in the Bay Area. Unbeatable atmosphere and cocktails!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];
