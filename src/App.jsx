import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./pages/User/Profile";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import PasswordReset from "./pages/Authentication/PasswordReset";
import Signup from "./pages/Authentication/Signup";
import Signin from "./pages/Authentication/Signin";
import PostPage from "./pages/Blog/PostPage";
import BlogPage from "./pages/Blog/BlogPage";
import EmailVerify from "./pages/Authentication/EmailVerify";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/product-detail/ProductDetail";
import ViewCart from "./pages/ViewCart/Cart";
import OrderInfomation from "./pages/CheckOut/OrderInfomation";
import OrderShipping from "./pages/CheckOut/OrderShipping";
import CheckOut from "./pages/CheckOut/CheckOut";
import Navbar from "./components/layouts/Navbar/NavBar";
import Footer from "./components/layouts/Footer";
import Signout from "./pages/Authentication/Signout";
import { getUser } from "./services/authService";
import ForceRedirect from "./components/auth/ForceRedirect";
import axios from "axios";
import MyProfile from "./pages/User/MyProfile";

function App() {
  const [anonymous, setAnonymous] = useState("");
  getUser();

  useEffect(() => {
    axios
      .get("/users/find/63db79066e5e2b2bc30d6194")
      .then(function (response) {
        // handle success
        setAnonymous(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const user = JSON.parse(localStorage.getItem("user")) || anonymous;
  const [isConnected, setIsconnected] = useState(false);

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  return (
    <BrowserRouter>
      <div className="bg-white" style={{ height: "100vh" }}>
        <Navbar user={user} isConnected={isConnected} />
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={isConnected}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute user={isConnected}>
                <MyProfile user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/signin"
            element={
              <ForceRedirect user={isConnected}>
                <Signin />
              </ForceRedirect>
            }
          />
          <Route
            path="/signup"
            element={
              <ForceRedirect user={isConnected}>
                <Signup />
              </ForceRedirect>
            }
          />
          <Route path="/signout" element={<Signout />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<PostPage />} />
          <Route path="/auth/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/password-reset/:id/:token"
            element={<PasswordReset />}
          />
          <Route path="/products" element={<Products user={user} />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail user={user} />}
          />
          <Route path="/viewcart" element={<ViewCart user={user} />} />
          <Route
            path="/checkout/:userId/infomation"
            element={
              <ProtectedRoute user={isConnected}>
                <OrderInfomation user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout/:userId/shipping"
            element={<OrderShipping user={user} />}
          />
          <Route
            path="/checkout/:userId/payment"
            element={<CheckOut user={user} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
