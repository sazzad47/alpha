export interface MenuProps {
  id?: number;
  title?: string;
  url?: string;
  submenus?: Array<{
    title: string;
    url?: string;
    submenus?: Array<{ title: string; url: string }>;
  }>;
}

const menus: Array<MenuProps> = [
  {
    id: 1,
    title: "Women's Fashion",
    submenus: [
      {
        title: "Clothing",
        submenus: [
          {
            title: "Dresses",
            url: "womens-dresses",
          },
          {
            title: "Kurtis",
            url: "womens-kurtis",
          },
          {
            title: "Shalwar Kameez",
            url: "womens-shalwar-kameez",
          },
          {
            title: "Tops",
            url: "womens-tops",
          },
        ],
      },
      {
        title: "Winter Special",
        submenus: [
          {
            title: "Winter Jackets & Coats",
            url: "womens-winter-jackets-&-coats",
          },
          {
            title: "Hoodies & Sweatshirts",
            url: "womens-hoodies-&-sweatshirts",
          },
          {
            title: "Sweaters & Cardigans",
            url: "womens-sweaters-&-cardigans",
          },
          {
            title: "Denim Jackets",
            url: "womens-denim-jackets",
          },
        ],
      },
      {
        title: "Muslim Wear",
        submenus: [
          {
            title: "Accessories",
            url: "womens-muslim-wear-accessories",
          },
          {
            title: "Dresses",
            url: "womens-muslim-wear-dresses",
          },
          {
            title: "Hijabs",
            url: "womens-muslim-wear-hijabs",
          },
          {
            title: "Outerwear",
            url: "womens-muslim-wear-outerwear",
          },
        ],
      },
      {
        title: "Shoes",
        submenus: [
          {
            title: "Ballet Flats",
            url: "womens-ballet-flats",
          },
          {
            title: "Pumps",
            url: "womens-pumps",
          },
          {
            title: "Closed-Toe Wedges",
            url: "womens-closed-toe-wedges",
          },
          {
            title: "Fashion Boots",
            url: "womens-fashion-boots",
          },
        ],
      },
      {
        title: "Watches",
        submenus: [
          {
            title: "Fasion",
            url: "womens-watch-fasion",
          },
          {
            title: "Casual",
            url: "womens-watch-casual",
          },
          {
            title: "Business",
            url: "womens-watch-business",
          },
          {
            title: "Sports",
            url: "womens-watch-sports",
          },
          {
            title: "Accessories",
            url: "womens-watch-accessories",
          },
        ],
      },
      {
        title: "Bags",
        submenus: [
          {
            title: "Backpacks",
            url: "womens-backpacks",
          },
          {
            title: "Clutches",
            url: "womens-clutches",
          },
          {
            title: "Tote Bags",
            url: "womens-tote-bags",
          },
          {
            title: "Wallets",
            url: "womens-wallets",
          },
          {
            title: "Wristlets",
            url: "womens-wristlets",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Health & Beauty",
    submenus: [
      {
        title: "Bath & Body",
        submenus: [
          {
            title: "Body & Message Oils",
            url: "body-&-message-oils",
          },
          {
            title: "Body Moisturizers",
            url: "body-moisturizers",
          },
          {
            title: "Body Scrubs",
            url: "body-scrubs",
          },
          {
            title: "Body Soaps",
            url: "body-soaps",
          },
          {
            title: "Foot Care",
            url: "foot-care",
          },
          {
            title: "Hair Removal",
            url: "hair-removal",
          },
          {
            title: "Hand Care",
            url: "hand-care",
          },
        ],
      },
      {
        title: "Beauty Tools",
        submenus: [
          {
            title: "Curling Irons",
            url: "curling-irons",
          },
          {
            title: "Flat Irons",
            url: "flat-irons",
          },
          {
            title: "Multi-Stylers",
            url: "multi-stylers",
          },
          {
            title: "Hair Dryers",
            url: "hair-dryers",
          },
        ],
      },
      {
        title: "Hair Care",
        submenus: [
          {
            title: "Shampoo",
            url: "shampoo",
          },
          {
            title: "Hair Treatments",
            url: "hair-treatments",
          },
          {
            title: "Hair Care Accessories",
            url: "hair-care-accessories",
          },
          {
            title: "Hair Brushes & Combs",
            url: "hair-brushes-&-combs",
          },
          {
            title: "Hair Coloring",
            url: "hair-coloring",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Watches & Bags",
    submenus: [
      {
        title: "Kids Bags",
        submenus: [
          {
            title: "Backpacks",
            url: "kids-bags-backpacks",
          },
          {
            title: "Bags",
            url: "kids-bags",
          },
        ],
      },
      {
        title: "Luggage",
        submenus: [
          {
            title: "Carry-Ons",
            url: "luggage-carry-ons",
          },
          {
            title: "Luggage Sets",
            url: "luggage-sets",
          },
          {
            title: "Suitcases",
            url: "suitcases",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Men's Fashion",
    submenus: [
      {
        title: "Clothing",
        submenus: [
          {
            title: "T-Shirts",
            url: "mens-T-shirts",
          },
          {
            title: "Casual Shirts",
            url: "mens-casual-shirts",
          },
          {
            title: "Kurtas",
            url: "mens-kurtas",
          },
          {
            title: "Polo Shirts",
            url: "mens-polo-shirts",
          },
        ],
      },
      {
        title: "Winter Special",
        submenus: [
          {
            title: "Winter Jackets & Coats",
            url: "mens-winter-jackets-&-coats",
          },
          {
            title: "Hoodies & Sweatshirts",
            url: "mens-hoodies-&-sweatshirts",
          },
          {
            title: "Sweaters & Cardigans",
            url: "mens-sweaters-&-cardigans",
          },
          {
            title: "Denim Jackets",
            url: "mens-denim-jackets",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Babies & Toys",
    submenus: [
      {
        title: "Clothing",
        submenus: [
          {
            title: "T-Shirts",
            url: "mens-T-shirts",
          },
          {
            title: "Casual Shirts",
            url: "mens-casual-shirts",
          },
          {
            title: "Kurtas",
            url: "mens-kurtas",
          },
          {
            title: "Polo Shirts",
            url: "mens-polo-shirts",
          },
        ],
      },
      {
        title: "Winter Special",
        submenus: [
          {
            title: "Winter Jackets & Coats",
            url: "mens-winter-jackets-&-coats",
          },
          {
            title: "Hoodies & Sweatshirts",
            url: "mens-hoodies-&-sweatshirts",
          },
          {
            title: "Sweaters & Cardigans",
            url: "mens-sweaters-&-cardigans",
          },
          {
            title: "Denim Jackets",
            url: "mens-denim-jackets",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Electronic Devices",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "TV & Home Appliances",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Electronic Accessories",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Home & Lifestyle",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Sports & Outdoor",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Automotive & Motorbike",
    submenus: [
      {
        title: "Smartphones",
        submenus: [
          {
            title: "realme Phones",
            url: "realme-phones",
          },
          {
            title: "Samsung Phones",
            url: "samsung-phones",
          },
          {
            title: "OPPO Phones",
            url: "oppo-phones",
          },
          {
            title: "vivo Phones",
            url: "vivo-phones",
          },
        ],
      },
      {
        title: "Laptops",
        submenus: [
          {
            title: "HP Laptops",
            url: "hp-laptops",
          },
          {
            title: "Dell Laptops",
            url: "dell-laptops",
          },
          {
            title: "Asus Laptops",
            url: "asus-laptops",
          },
          {
            title: "Lenovo Laptops",
            url: "lenovo-laptops",
          },
        ],
      },
    ],
  },
];
export { menus };
