/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "url(https://cdn.shopify.com/s/files/1/0623/7578/8783/files/1.jpg?v=1644313672)",
        collection1:
          "url(https://cdn.shopify.com/s/files/1/0623/7578/8783/files/1_e7837456-84db-470e-bc3c-f0707d5bd49a.jpg?v=1644381198)",
        collection2:
          "url(https://cdn.shopify.com/s/files/1/0623/7578/8783/files/2_1b47e073-1a8a-4f99-be58-cb4085834251.jpg?v=1644381208)",
        collection3:
          "url(https://cdn.shopify.com/s/files/1/0623/7578/8783/files/3_8e34b79d-a5eb-47d2-bac0-6e1a1b7a9ef2.jpg?v=1644381220)",
        collection4:
          "url(https://cdn.shopify.com/s/files/1/0623/7578/8783/files/4.jpg?v=1644381231)",
      },
    },
  },
  plugins: [],
};
