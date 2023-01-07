export interface MenuProps {
  id: number;
  title: string;
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
    ],
  },
  {
    id: 2,
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
    id: 3,
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
];
export { menus };
