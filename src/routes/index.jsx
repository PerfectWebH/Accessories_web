import { Default, About, Product, User, Cart, ProductDetails } from "../page";
// Public Routes
const publicRoutes = [
  { path: "/", component: Default },
  { path: "/about", component: About },
  { path: "/product", component: Product },
  { path: "/cart", component: Cart },
  { path: "/user", component: User },
  { path: "/product-details", component: ProductDetails },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
