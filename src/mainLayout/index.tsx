import { Outlet } from "react-router-dom";
import Header from "../component/header";
import { useStyle } from "./indexstyle";
import right from "../assets/icons/chevron_right.svg";
import Footer from "../component/footer";

const data = {
  links: [
    {
      id: 1,
      link: "Home",
      path: "/mainLayout/home",
      logo: right,
      categories: "Home & Furniture",
      trendings: "T-Shirts",
      verticaldata: "",
      dropdownItems: [
        {
          id: 1,
          navigation: "/mainLayout/categorypage",
          name: "Sofa",
        },
        {
          id: 2,
          navigation: "/mainLayout/categorypage",
          name: "Bed",
        },
        {
          id: 3,
          navigation: "/mainLayout/categorypage",
          name: "Mattress",
        },
      ],
    },
    {
      id: 2,
      // link: "Shop",
      path: "/mainLayout/collectionlist",
      logo: right,
      trendings: "T-Shirts",
      verticaldata: "",
      dropdownItems: [
        {
          id: 1,
          navigation: "/mainLayout/categorypage",
          name: "T-shirts",
        },
        {
          id: 2,
          navigation: "/mainLayout/categorypage",
          name: "Formal-Shirts",
        },
        {
          id: 3,
          navigation: "/mainLayout/categorypage",
          name: "Sweeters",
        },
      ],
      categories: "Dress",
    },
    {
      id: 3,
      link: "Products",
      path: "/mainLayout/categorypage",
      logo: right,
      trendings: "T-Shirts",
      verticaldata: "",
      dropdownItems: [
        {
          id: 1,
          navigation: "/mainLayout/categorypage",
          name: "Mobile",
        },
        {
          id: 2,
          navigation: "/mainLayout/categorypage",
          name: "Laptop",
        },
        {
          id: 3,
          navigation: "/mainLayout/categorypage",
          name: "MobileAccessories",
        },
      ],
      categories: "Electronics",
    },
    {
      id: 4,
      // link: "Pages",
      path: "/mainLayout/sucesspage",
      logo: right,
      trendings: "T-Shirts",
      verticaldata: "",
      dropdownItems: [
        {
          id: 1,
          navigation: "/mainLayout/categorypage",
          name: "Television",
        },
        {
          id: 2,
          navigation: "/mainLayout/categorypage",
          name: "Washing Machines",
        },
        {
          id: 3,
          navigation: "/mainLayout/categorypage",
          name: "Refrigatores",
        },
      ],
      categories: "Tv & Appliances",
    },
    {
      id: 5,
      // link: "Blog",
      path: "/mainLayout/paymentfailed",
      logo: right,
      trendings: "T-Shirts",
      verticaldata: "",
      dropdownItems: [
        {
          id: 1,
          navigation: "/mainLayout/categorypage",
          name: "Cricket Bat",
        },
        {
          id: 2,
          navigation: "/mainLayout/categorypage",
          name: "Supplements",
        },
        {
          id: 3,
          navigation: "/mainLayout/categorypage",
          name: "Books",
        },
      ],
      categories: "Sports books & more",
    },
  ],
};

const MainLayout = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Header HeaderData={data} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
