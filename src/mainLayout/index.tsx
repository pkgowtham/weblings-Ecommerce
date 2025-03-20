import { Outlet } from "react-router-dom";
import Header from "../component/header";
import { useStyle } from "./indexstyle";
import right from "../../../my-app/src/assets/icons/chevron_right.svg";
import Footer from "../component/footer";

const data = {
  links: [
    { id:1, 
      link: "Home",
      path:"/mainLayout/home",
      logo: right,
      dropdownItems: ["Submenu 1", "Submenu 2", "Submenu 3"],
    },
    { id:2,
      link: "ProductPage",
      path:"/mainLayout/productpage",
      logo: right,
      dropdownItems: ["Submenu 4", "Submenu 5", "Submenu 6"],
    },
    { id:3,
      link: "PaymentPage",
      path:"/mainLayout/paymentpage",
      logo: right,
      dropdownItems: ["Submenu 7", "Submenu 8", "Submenu 9"],
    },
    { id:4,
      link: "SucessPage",
      path:"/mainLayout/sucesspage",
      logo: right,
      dropdownItems: ["Submenu 10", "Submenu 11", "Submenu 12"],
    },
  ],
};

const MainLayout = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Header HeaderData={data} />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
