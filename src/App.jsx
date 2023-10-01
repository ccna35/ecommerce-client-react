import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/profile/Profile";
import Admin from "./pages/admin/Admin";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductsPage from "./pages/admin/products/Products";
import NewProductPage from "./pages/admin/products/New";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import EditProductPage from "./pages/admin/products/Edit";
import CategoriesPage from "./pages/admin/categories/Categories";
import NewCategoryPage from "./pages/admin/categories/New";
import BrandsPage from "./pages/admin/brands/Brands";
import NewBrandPage from "./pages/admin/brands/New";
import OrdersPage from "./pages/admin/orders/Orders";
import UsersPage from "./pages/admin/users/Users";
import ReviewsPage from "./pages/admin/reviews/Reviews";
import SellersPage from "./pages/admin/sellers/Sellers";
import UserOrdersPage from "./pages/profile/orders/Orders";
import WishlistPage from "./pages/profile/wishlist/Wishlist";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="" element={<DashboardLayout />}>
          <Route path="/profile">
            <Route index element={<Profile />} />
            <Route path="/profile/orders" element={<UserOrdersPage />} />
            <Route path="/profile/wishlist" element={<WishlistPage />} />
          </Route>
          <Route path="/dashboard">
            <Route index element={<Admin />} />
            <Route path="/dashboard/products">
              <Route index element={<ProductsPage />} />
              <Route
                path="/dashboard/products/new"
                element={<NewProductPage />}
              />
              <Route
                path="/dashboard/products/:id/edit"
                element={<EditProductPage />}
              />
            </Route>
            <Route path="/dashboard/categories">
              <Route index element={<CategoriesPage />} />
              <Route
                path="/dashboard/categories/new"
                element={<NewCategoryPage />}
              />
            </Route>
            <Route path="/dashboard/brands">
              <Route index element={<BrandsPage />} />
              <Route path="/dashboard/brands/new" element={<NewBrandPage />} />
            </Route>
            <Route path="/dashboard/orders" element={<OrdersPage />} />

            <Route path="/dashboard/reviews" element={<ReviewsPage />} />

            <Route path="/dashboard/users" element={<UsersPage />} />

            <Route path="/dashboard/sellers" element={<SellersPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/reset-password/:id/:token"
        element={<ResetPasswordPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
