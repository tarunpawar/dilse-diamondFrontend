import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./pages/scrolltop/ScrollToTop";
import Footer from "./pages/footer/footer";
import HeaderWrapper from "./pages/header/HeaderWrapper";

// All your page imports
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Engagement from "./pages/engagement/engagement";
import About from "./pages/about/about";
import Diamond from "./pages/diamond/diamond";
import Terms from "./pages/terms-conditions/terms";
import Policy from "./pages/policy/policy";
import Weddingbrands from "./pages/wedding-brands/weddingBrands";
import RingStyle from "./pages/engagemnet-ring-style/ringStyle";
import DiamondDetails from "./pages/diamond-detail/diamondDetails/diamondDetails";
import CartPage from "./cart/CartPage";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import ResetPassword from "./pages/resetpassword/reset";
import ResetPasswordForm from "./pages/resetpassword/ResetPasswordForm";
import Profile from "./pages/profile/profile";
import Checkout from "./pages/checkout/checkout";
import ThankYou from "./pages/order-success/thankyou";
import PaymentFailed from "./pages/payment_failed/PaymentFailed";
import OrderDetails from "./pages/order_details/OrderDetails";
import JewelryList from "./pages/jewellary_list/JewelryList";
import JewelryDetailsPage from "./pages/jewellary-details/JewellaryDetails";
import MegaMenu from "./pages/mega-menu/megaMenu";
import Luxe from "./pages/Luxe/luxe";
import Reserve from "./pages/reserve-collections/reserve";
import Signature from "./pages/w-signature/signature";
import EngagementDetails from "./pages/engagement-details/engDetails";
import EngagementList from "./pages/engagement-list/engagementList";
import CompleteRing from "./pages/completeRing/completeRing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WhiteClarityNav from "./pages/header/WhiteClarityNav"

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* <HeaderWrapper /> */}
      <WhiteClarityNav/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/wedding-brands" element={<Weddingbrands />} />
          <Route path="/engagement-ring-style" element={<RingStyle />} />
          <Route path="/diamond-details/:id" element={<DiamondDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/paymnet-failed" element={<PaymentFailed />} />
          <Route path="/order-details/:orderId" element={<OrderDetails />} />
          <Route path="/jewelry-list" element={<JewelryList />} />
          <Route path="/engagement-rings/:slug?" element={<EngagementList />} />

          <Route
            path="/jewellary-details/:id"
            element={<JewelryDetailsPage />}
          />
          <Route path="/product/:slug?" element={<CompleteRing />} />
          <Route
            path="/engagment-details/:id"
            element={<EngagementDetails />}
          />
          <Route path="/megamenu" element={<MegaMenu />} />

          <Route path="/luxe" element={<Luxe />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
  