import { useNavigate } from "react-router-dom";
import Typography from "../../component/typography/component";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";
import { useStyle } from "./indexstyle";
import VerticalProductCard from "../../component/verticalProductCard";

const products = [
  { id:1,
    name: "White Slim Fit Basic Unpatterned T-shirt",
    price: "$115.00",
    rating: 5,
    image: fashionwhite,
    variants: [
      {
        color: "Black",
        image: fashionblack,
      },
      {
        color: "White",
        image: fashionwhite,
      },
      {
        color: "Grey",
        image: fashiongrey,
      },
    ],
    description:
      "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
  },
  { id:2,
    name: "White Slim Fit Basic Unpatterned T-shirt",
    price: "$115.00",
    rating: 5,
    image: fashionwhite,
    variants: [
      {
        color: "Black",
        image: fashionblack,
      },
      {
        color: "White",
        image: fashionwhite,
      },
      {
        color: "Grey",
        image: fashiongrey,
      },
    ],
    description:
      "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
  },
  { id:3,
    name: "White Slim Fit Basic Unpatterned T-shirt",
    price: "$115.00",
    rating: 5,
    image: fashionwhite,
    variants: [
      {
        color: "Black",
        image: fashionblack,
      },
      {
        color: "White",
        image: fashionwhite,
      },
      {
        color: "Grey",
        image: fashiongrey,
      },
    ],
    description:
      "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
  },
  { id:4,
    name: "White Slim Fit Basic Unpatterned T-shirt",
    price: "$115.00",
    rating: 5,
    image: fashionwhite,
    variants: [
      {
        color: "Black",
        image: fashionblack,
      },
      {
        color: "White",
        image: fashionwhite,
      },
      {
        color: "Grey",
        image: fashiongrey,
      },
    ],
    description:
      "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
  },
];

const WishListProductPage = () => {
  const classes = useStyle();
  const navigate = useNavigate();

//   navigate 
const handleNavigate = () =>{
    navigate("/mainlayout/home")
}
  return (
    <div className={classes.mainContainer}>
      {/* header section */}
      <div className={classes.headerSection}>
        <div className={classes.contentOne}>
          <Typography onClick={handleNavigate} className={classes.lightColor} variant="BS">
            Home
          </Typography>
          <div className={classes.dotStyle}></div>
          <Typography variant="BM">Wishlist Product</Typography>
        </div>
        <Typography variant="HS">Wishlist Product</Typography>
        <Typography variant="BM">
          Explore the items you've marked as favorites, ready to be added to
          your cart and enjoyed.
        </Typography>
      </div>
      {/* wistlist items */}
      <div className={classes.wishListContainer}>
        {products.map((data: any) => (
          <VerticalProductCard products={data}  />
        ))}
      </div>
      {/* recently viewed */}
      <div className={classes.viewedProductContainer}>
        <div className={classes.viewHeader}>
          <Typography variant="HS">Recently Viewed</Typography>
          <Typography variant="BM">
            Explore your recently viewed items, blending quality and style for a
            refined living experience.
          </Typography>
        </div>
        <div className={classes.recentlyViewed}>
        {products.map((data:any)=>(
            <VerticalProductCard products={data} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default WishListProductPage;
