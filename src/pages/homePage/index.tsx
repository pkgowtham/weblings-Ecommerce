import collection from "../../assets/images/collection.jpg";
import fashion from "../../assets/images/fashion.jpg";
import circle from "../../assets/icons/circle-x.svg";
import insta from "../../assets/icons/insta.svg";
import TopCollection from "../../component/topcollection";
import Card from "../../component/card";
import Review from "../../component/review";
import Shop from "../../component/shop";
import Support from "../../component/support";
import Slider from "../../component/slider";
import { useStyle } from "./indexstyle";
import Marquee from "../../component/marquee";
import { useEffect, useRef, useState } from "react";
 import { useStore } from "../../store";
 import { useMiddlewareDispatch } from "../../store/apiMiddleware";
 import { deepGet } from "../../util/util";

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
      sliderimage:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
      sliderimage:
        "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      logo: fashion,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
      sliderimage:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
const marqueeData = [
  { id: 1, name: "Exclusive Seasonal Picks", logo: fashion },
  { id: 2, name: "Exclusive Seasonal Picks", logo: fashion },
  { id: 3, name: "Exclusive Seasonal Picks", logo: fashion },
  { id: 4, name: "Exclusive Seasonal Picks", logo: fashion },
];
const trendingData = {
  title: "Trending Outfits",
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

const HomePage = () => {
  const classes = useStyle();
  const hasDispatched = useRef(false);
  const { store } = useStore();
    const dispatch = useMiddlewareDispatch();
    const [bestSelling, setBestSelling] = useState<any>([]);
    const [topCollection, setTopCollection] = useState<any>([]);

  //product getlist
  useEffect(() => {
    if (!hasDispatched.current) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
        },
      });
      hasDispatched.current = true;
    }
  }, []);

//filter data for best selling
  useEffect(() => {
    if(store.product.dataGetList){
      const bestSellingProducts = store.product.dataGetList?.data?.filter((product:any) => product.bestSelling === true);
      setBestSelling(bestSellingProducts)
    }
  }, [deepGet(store,"product.dataGetList")])


  //filter data for Top Collection
  useEffect(() => {
    if(store.product.dataGetList){
      const topCollection = store.product.dataGetList?.data?.filter((product:any) => product.trendingOutfits === true);
      setTopCollection(topCollection)
    }
  }, [deepGet(store,"product.dataGetList")])

  return (
    <div className={classes.mainContainer}>
      <Slider SliderData={slider} />
      <TopCollection TopData={topcollections} />
      <Card CardData={bestSelling || []} title="Best Selling" subTitle="Unmatched design—superior performance and customer satisfaction in one."/>
      <Marquee marqueeData={marqueeData} />
      <Card CardData={topCollection || []} title="Trending Outfits" subTitle="Unmatched design—superior performance and customer satisfaction in one."/>
      <Review ReviewsData={reviewdata} />
      <Shop ShopData={shop} />
      <Support SupportData={support} />
    </div>
  );
};

export default HomePage;
