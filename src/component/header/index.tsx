import React, { useEffect, useState } from "react";
import { useStyle } from "./indexstyle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Typography from "../typography/component";
import SvgUserRound from "../../custom-icons/UserRound";
import SvgHeart from "../../custom-icons/Heart";
import ShoppingCart from "../shoppingCartModule";
import SignInModule from "../signInModule";
import Badge from "../badge";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import Input from "../input";
import SvgSearch from "../../custom-icons/Search";
import SvgMenu from "../../custom-icons/Menu";
import { HideComponents } from "../hideComponents";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import SvgClose from "../../custom-icons/Close";
import VerticalProductCard from "../verticalProductCard";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";
import { deepGet } from "../../util/util";
import SvgBuy from "../../custom-icons/Buy";

const productData = {
  //   productcategory: "Product Category",
  filteroptions: [
    {
      id: 1,
      name: "Product",
      categories: [
        "Sweaters",
        "T-Shirts",
        "Dress",
        "Crop-top",
        "Blazers",
        "Tops",
      ],
    },
    {
      id: 2,
      name: "SubCategory",
      categories: [
        "Sweaters",
        "T-Shirts",
        "Dress",
        "Crop-top",
        "Blazers",
        "Tops",
      ],
    },
    {
      id: 3,
      name: "Availability",
      stock: ["In Stock(5)", "Out of Stock"],
    },
    {
      id: 4,
      name: "Price",
      startprice: "Rs. 0.00 -",
      endprice: "Rs. 499.00",
      price: "Price :",
    },

    {
      id: 5,
      name: "Brand",
      brands: ["Adidas(2)", "Gap(1)", "Giogerio(4)", "Zara(8)"],
    },
    {
      id: 6,
      name: "Color",
      color: ["#E00028", "#B15600", "#36A040", "#0072C4", "#9E29FE", "#6F6F6F"],
    },
    {
      id: 7,
      name: "Size",
      size: ["S", "M", "L"],
    },
  ],
  shortdropdown: [
    { id: 1, name: "Featured" },
    { id: 2, name: "Best selling" },
    { id: 3, name: "price,low to high" },
    { id: 4, name: "price,high to low" },
    { id: 5, name: "Date,old to new" },
    { id: 6, name: "Date,new to old" },
  ],
  products: [
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
  ],
  productsdata: [
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
  ],
};

const Header: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const HeaderData = props.HeaderData;
  const navigate = useNavigate();

  // State to track hover for each dropdown
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shoppingCart, setShoppingCart] = useState<boolean>(false);
  const [bestSelling, setBestSelling] = useState<any>([]);
  const [searchDropDown, setSearchDropDown] = useState<boolean>(false);
  const [isSignInModule, setIsSignInModule] = useState<boolean>(false);
  const dispatch = useMiddlewareDispatch();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { store } = useStore();

  // navigate
  const handleNavigate = () => {
    navigate("/mainlayout/wishlistpage");
  };

  //filter data for best selling
  useEffect(() => {
    if (store.product.dataGetList) {
      const bestSellingProducts = store.product.dataGetList?.data?.filter(
        (product: any) => product.bestSelling === true
      );
      setBestSelling(bestSellingProducts);
    }
  }, [deepGet(store, "product.dataGetList")]);
  return (
    <header className={classes.NavBar}>
      {/* Top Bar with Contact Info */}
      <div className={classes.NavTop}>
        <div className={classes.ContactInfo}>
          <HideComponents showOnlyOn="desktop">
            <Typography variant="TM">glozin</Typography>
          </HideComponents>
          <HideComponents hideOn="desktop">
            <SvgMenu cursor={"pointer"} onClick={() => setSideBar(!sideBar)} />
          </HideComponents>
        </div>
        <div></div>
        {/* Main Navigation */}
        <HideComponents showOnlyOn="desktop">
          <div className={classes.NavBarMain}>
            {/* Navigation Links */}
            {HeaderData?.links?.map((data: any, idx: number) => (
              <div className={classes.List}>
                <Link to={data.path} className={classes.List}>
                  {data.link}
                </Link>
              </div>
            ))}
          </div>
        </HideComponents>
        <HideComponents hideOn="desktop">
          <Typography variant="TM">glozin</Typography>
        </HideComponents>
        {/* icons */}
        <div className={classes.Icons}>
          <HideComponents hideOn="mobile">
            <div className={classes.searchDiv}>
              <Input
                type="text"
                placeholder="I'am looking for.."
                leftIcon={<SvgSearch className={classes.leftIconColor} />}
                onClick={() => setSearchDropDown(!searchDropDown)}
              />
              {/* search dropdown */}
              {searchDropDown && (
                <div className={classes.SearchDropDown}>
                  <div className={classes.header}>
                    <Typography variant="TS">Trending Search</Typography>
                    <SvgClose
                      cursor={"pointer"}
                      onClick={() => setSearchDropDown(false)}
                      viewBox="0 0 30 30"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={classes.categories}>
                    {HeaderData?.links?.map((data: any) => (
                      <div className={classes.categoryStyle}>
                        <Typography
                          className={classes.trendingStyle}
                          variant="BS"
                        >
                          {data.trendings}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Typography variant="TS">Popular Products</Typography>
                    {/*lists grid container */}
                    <div className={classes.gridContainer}>
                      {bestSelling.map((data: any) => (
                        <VerticalProductCard products={data} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </HideComponents>
          <HideComponents showOnlyOn="mobile">
            <SvgSearch className={classes.leftIconColor} />
          </HideComponents>
          <HideComponents showOnlyOn="desktop">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <SvgUserRound
                  onClick={() => setIsSignInModule(!isSignInModule)}
                  cursor={"pointer"}
                  width={25}
                  viewBox="0 0 25 30"
                  height={20}
                />
              </div>
              <div className={classes.wishList}>
                <SvgHeart
                  onClick={handleNavigate}
                  cursor={"pointer"}
                 viewBox="0 0 45 30"
                  width={25}
                  height={25}
                />
                <Badge
                  style={{
                    width: "18px",
                    height: "18px",
                    right: -5,
                  }}
                  count={store.productWishlist.dataGetList?.data?.length || "0"}
                  className={classes.badgeStyle}
                />
              </div>
            </div>
          </HideComponents>
          <div className={classes.wishList}>
            <SvgBuy
              cursor={"pointer"}
              viewBox="0 0 25 25"
              width={25}
              height={25}
              onClick={() =>
                dispatch({
                  type: "OPEN_ADD_TO_CART_MODAL",
                  payload: {
                    isAddToCart: true,
                  },
                })
              }
            />
            <Badge
              style={{
                width: "18px",
                height: "18px",
                right: -5,
              }}
              count={store.productAddToCart.dataGetList?.data?.length || "0"}
              className={classes.badgeStyle}
            />
          </div>
        </div>
      </div>
      {/* navbar categories */}
      <HideComponents showOnlyOn="desktop">
        <div className={classes.navBarCategories}>
          {HeaderData?.links?.map((data: any, idx: number) => (
            <div
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={classes.List}
              key={idx}
            >
              <Link to={data.path} className={classes.List}>
                {data.categories}
                <SvgChevronRight className={classes.rotateIcon} />
              </Link>

              {/* dropdown */}
              {hoveredIndex === idx && (
                <div className={classes.Dropdown}>
                  {data.dropdownItems?.map((item: any) => (
                    <Link to={item.navigation} className={classes.datas}>
                      <Typography variant="BS">{item.name}</Typography>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </HideComponents>

      {/* module for shopping cart */}
      {store.commonInternal.isAddToCart && (
        <ShoppingCart onClose={setShoppingCart} />
      )}
      {/* signin module */}
      {isSignInModule && <SignInModule onClose={setIsSignInModule} />}
      {/* sidebar for mobile */}
      {sideBar && (
        <div className={classes.sideBarDiv}>
          <div className={classes.headerDiv}>
            <div className={classes.headerChild}>
              <Typography variant="BM">Menu</Typography>
              <Typography variant="BM">Categories</Typography>
            </div>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgColor}
              onClick={() => setSideBar(false)}
            />
          </div>
          <div className={classes.bodyData}>
            {HeaderData?.links?.map((data: any, idx: number) => (
              <div className={classes.sideData}>
                <Link to={data.path} className={classes.sideList}>
                  {data.link}
                  <SvgChevronRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
