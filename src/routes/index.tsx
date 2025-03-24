import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../mainLayout";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import PaymentPage from "../pages/paymentPage";
import SucessPage from "../pages/sucessPage";
import CategoryPage from "../pages/categoryPage";
import WishListProductPage from "../pages/wishListProductPage";
import ShopingCartPage from "../pages/shoppingCartViewPage";
import MyAccountPage from "../pages/myAccountPage";
import AccountDetails from "../pages/myAccountPage/accountDetails";
import AddressDetails from "../pages/myAccountPage/addressDetails";
import PaymentFailed from "../component/paymentFailed";

function Navigations() {
  return (
    <Router>
      <Routes>
        <Route path="mainLayout" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="paymentpage" element={<PaymentPage />} />
          <Route path="categorypage" element={<CategoryPage/>} />
          <Route path="sucesspage" element={<SucessPage />} />
          <Route path="paymentfailed" element={<PaymentFailed/>} />
          <Route path="wishlistpage" element={<WishListProductPage/>} />
          <Route path="shopingcartviewpage" element={<ShopingCartPage/>} />
          <Route path="myaccountpage" element={<MyAccountPage/>} >
            <Route path="accountdetails" element={<AccountDetails/>} />
            <Route path="addressdetails" element={<AddressDetails/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default Navigations;
