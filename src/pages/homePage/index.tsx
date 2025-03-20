import collection from "../../../src/assets/images/collection.jpg";
import fashion from "../../../src/assets/images/fashion.jpg";
import circle from "../../../src/assets/icons/circle-x.svg";
import insta from "../../../../my-app/src/assets/icons/insta.svg";
import TopCollection from "../../component/topcollection";
import Card from "../../component/card";
import Review from "../../component/review";
import Shop from "../../component/shop";
import Support from "../../component/support";
import Slider from "../../component/slider";
import { useStyle } from "./indexstyle";
import Footer from "../../component/footer";

const topcollections = {
  card: [
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
    {
      logo: collection,
      subtitle: "Crop-Top",
    },
  ],
};
const card = {
  title: "Best Selling",
  subtitle:
    "Unmatched design—superior performance and customer satisfaction in one.",
  cards: [
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
  ],
};
const reviewdata = {
  title: "Customer Say!",
  subtitle:
    "Customers love our products and we always strive to please them all.",
  cards: [
    {
      logo: fashion,
      title: "Cameron Smith.",
      description:
        "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
      subimg: fashion,
      subtext: "Slim Fit Basic Unpatterned T-shirt",
      amount: "$75.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description:
        "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
      subimg: fashion,
      subtext: "Slim Fit Basic Unpatterned T-shirt",
      amount: "$75.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description:
        "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
      subimg: fashion,
      subtext: "Slim Fit Basic Unpatterned T-shirt",
      amount: "$75.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description:
        "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
      subimg: fashion,
      subtext: "Slim Fit Basic Unpatterned T-shirt",
      amount: "$75.00",
    },
    // { logo:fashion,
    //   title: "Cotton Long-Sleeve Striped T-shirt",
    //   description: "$115.00",
    // },
    // { logo:fashion,
    //   title: "Cotton Long-Sleeve Striped T-shirt",
    //   description: "$115.00",
    // },
    // { logo:fashion,
    //   title: "Cotton Long-Sleeve Striped T-shirt",
    //   description: "$115.00",
    // },
    // { logo:fashion,
    //   title: "Cotton Long-Sleeve Striped T-shirt",
    //   description: "$115.00",
    // },
  ],
};
const slider = {
  title: "Best Selling",
  subtitle:
    "Unmatched design—superior performance and customer satisfaction in one.",
  cards: [
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
    },
  ],
};
const support = {
  text: [
    {
      logo: circle,
      title: "Free Shipping",
      subtitle:
        "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
    },
    {
      logo: circle,
      title: "Free Shipping",
      subtitle:
        "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
    },
    {
      logo: circle,
      title: "Free Shipping",
      subtitle:
        "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
    },
  ],
};
const shop = {
  description:
    "We are totally smitten over this look! will you be creating a red or pink makeup look for valentines day?",
  hastag: "#cotton #glozin #trending #sale",
  insta: "glozin_store",
  logo: insta,
  data: [
    {
      logo: fashion,
      title: "Plain cotton Undershirt-Wide Neck",
      amount: "$35.00",
    },
    {
      logo: fashion,
      title: "Plain cotton Undershirt-Wide Neck",
      amount: "$35.00",
    },
  ],
};

const HomePage = () => {
    const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Slider SliderData={slider} />
      <TopCollection TopData={topcollections} />
      <Card CardData={card} />
      <Review ReviewsData={reviewdata} />
      <Shop ShopData={shop} />
      <Support SupportData={support} />
    </div>
  );
};

export default HomePage;
