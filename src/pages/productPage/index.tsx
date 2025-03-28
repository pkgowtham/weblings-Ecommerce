import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import payment from "../../assets/images/payment.jpg";
import eye from "../../assets/icons/eye.svg";
import fashion from "../../assets/images/fashion.jpg";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";
import clsx from "clsx";
import Typography from "../../component/typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import SvgViewComfyAlt from "../../custom-icons/ViewComfyAlt";
import { useLocation, useNavigate } from "react-router-dom";
import Ratings from "../../component/customerReview";
import SvgUserRound from "../../custom-icons/UserRound";
import Button from "../../component/button";
import SvgAdd from "../../custom-icons/Add";
import SvgHeart from "../../custom-icons/Heart";
import ShoppingCart from "../../component/shoppingCartModule";
import ProductImage from "../../component/productImage";
import { useStore } from "../../store";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { deepGet } from "../../util/util";
import { HideComponents } from "../../component/hideComponents";

const ProductData = {
  logo: [
    {
      logo: fashion,
    },
    {
      logo: fashion,
    },
    {
      logo: fashion,
    },
    {
      logo: fashionblack,
    },
    {
      logo: fashion,
    },
    {
      logo: fashion,
    },
    {
      logo: fashion,
    },
    {
      logo: fashionwhite,
    },
    {
      logo: fashion,
    },
  ],
  productimg: [
    {
      black: fashiongrey,
      color: "Grey",
    },
    {
      black: fashionwhite,
      color: "White",
    },
    {
      black: fashionblack,
      color: "black",
    },
  ],
  star: [
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
  ],
  sizedetails: {
    img: fashion,
    size: [
      {
        key: "Model is Wearing:",
        value: "M",
        height: "Height:",
        cm: "160cm",
        weight: "Weight: ",
        kg: "53Kg",
        shoulder: "Shoulder width:",
        width: " 40cm",
        hip: "Bust/waist/hips:",
        size: "80/61/95",
      },
    ],
  },
  sizechart: {
    chart: [
      { size: "S", amount: "$115.00" },
      { size: "M", amount: "$120.00" },
      { size: "L", amount: "$125.00" },
    ],
  },
  available: [
    {
      key: "Sku:",
      value: " FS0004GL",
      available: "Available:",
      instock: " Instock",
      collection: "Collections:",
      collections:
        " Activewear, Best seller, Blazers, Coats, Hoodies, Hot Deals, Shorts, test, Topss",
    },
  ],
};

const review = {
  star: [
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
    {
      logo: <SvgStarPurple500 />,
    },
  ],
  ratings: [
    {
      rate: "3",
    },
    {
      rate: "0",
    },
    {
      rate: "0",
    },
    {
      rate: "0",
    },
    {
      rate: "0",
    },
  ],
  feedback: [
    {
      logo: <SvgUserRound />,
      date: "05/18/2024",
      name: "Pham Luong",
      title: "Amazingly Soft Sweater.",
      description:
        "This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.",
      image: [
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
      ],
      star: [
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
      ],
    },
    {
      logo: <SvgUserRound />,
      date: "05/18/2024",
      name: "Pham Luong",
      title: "Amazingly Soft Sweater.",
      description:
        "This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.",
      image: [
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
      ],
      star: [
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
      ],
    },
    {
      logo: <SvgUserRound />,
      date: "05/18/2024",
      name: "Pham Luong",
      title: "Amazingly Soft Sweater.",
      description:
        "This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.",
      image: [
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
        {
          logo: fashion,
        },
      ],
      star: [
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
        {
          logo: <SvgStarPurple500 />,
        },
      ],
    },
  ],
  icon: [
    {
      star: <SvgStarPurple500 />,
    },
    {
      star: <SvgStarPurple500 />,
    },
    {
      star: <SvgStarPurple500 />,
    },
    {
      star: <SvgStarPurple500 />,
    },
    {
      star: <SvgStarPurple500 />,
    },
  ],
};

const ProductPage: React.FC<any> = (): JSX.Element => {
  const classes = useStyle();
  const [isAddToCart, setIsAddToCart] = useState<boolean>(false);
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    ProductData?.logo[0]?.logo || ""
  );
  // State to track the currently active product index
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  // State to track the currently active index
  const [activeIndex, setActiveIndex] = useState(0);
  // State to hold the currently selected size
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>("$115.00");
  const navigate = useNavigate();
  const location = useLocation();
  const { rowDataId } = location?.state || {};
  const hasDispatched = useRef(false);
  const [currentImage, setCurrentImage] = useState("");
  const [thumbnailAttachments, setThumbnailAttachments] = useState<any[]>([]);

  // Filtered sizes based on selected color
  const filteredSizes = selectedColor
    ? store.product.dataGet?.variants
        .filter((variant: any) => variant.color.id === selectedColor?.id)
        .map((variant: any) => variant.size)
    : [];

  // Get attachments for the selected color
  const selectedColorAttachments =
    store.product.dataGet?.colors?.find(
      (color: any) => color.id === selectedColor?.id
    )?.attachments || [];

  //product get
  useEffect(() => {
    // if (!hasDispatched.current && rowDataId) {
    if (!hasDispatched.current) {
      dispatch({
        type: "PRODUCT_GET_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
          params: rowDataId,
          // params: "2df8af0e-4710-4523-b285-9d97617ce6ef",
        },
      });
      hasDispatched.current = true;
    }
  }, []);

  //open modal after creating the add to cart
  useEffect(() => {
    if(store.productAddToCart.isSuccessCreate){
      dispatch({
        type: "OPEN_ADD_TO_CART_MODAL",
        payload: {
          isAddToCart: true,
        },
      })
      dispatch({
        type:"PRODUCT_ADD_TO_CART_CREATE_API_CLEAR"
      })
    }
  }, [deepGet(store,"productAddToCart.isSuccessCreate")])
  

  useEffect(() => {
    if (Object.keys(store.product.dataGet || {}).length > 0) {
      setSelectedColor(store.product.dataGet?.colors?.[0]);
      setSelectedSize(store.product.dataGet?.sizes?.[0]);
      const thumbnails = store.product.dataGet.colors?.flatMap((dat: any) =>
        dat.attachments.filter(
          (attachment: any) => attachment.thumbnail === true
        )
      );
      setThumbnailAttachments(thumbnails);
    }
  }, [deepGet(store, "product.dataGet")]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const selectedVariant = store.product.dataGet?.variants.find(
        (variant: any) =>
          variant.color.id === selectedColor?.id &&
          variant.size.id === selectedSize?.id
      );
      if (selectedVariant) {
        setPrice(selectedVariant);
      }

      // Set the first attachment as the current image
      if (selectedColorAttachments.length > 0) {
        setCurrentImage(selectedColorAttachments[0].fileUrl);
        setActiveIndex(0);
      }
    }
  }, [selectedColor, selectedSize]);

  // Handle color selection
  const handleColorChange = (data: any) => {
    const colorId = data.id;
    setSelectedColor(data);

    // Reset size to the first available size for the selected color
    const firstSizeForColor = store.product.dataGet?.variants.find(
      (variant: any) => variant.color.id === colorId
    )?.size;
    setSelectedSize(firstSizeForColor || null);
  };

  // Handle size selection
  const handleSizeChange = (data: any) => {
    const sizeId = data.id;
    setSelectedSize(data);

    // Find the corresponding price
    const selectedVariant = store.product.dataGet?.variants.find(
      (variant: any) =>
        variant.color.id === selectedColor?.id && variant.size.id === sizeId
    );

    if (selectedVariant) {
      setPrice(selectedVariant);
    } else {
      setPrice(null);
    }
  };

  const RatingStar = (rating: any) => {
    switch (rating) {
      case 1:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 2:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 3:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 4:
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 5:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      default:
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <SvgStarPurple500 className={classes.starColor} />
            </div>
          );
        break;
    }
  };

  // navigate
  const handleNavigate = (type: string) => {
    if (type === "product") {
      navigate("/mainLayout/categorypage");
    } else if (type === "payment") {
      navigate("/mainLayout/paymentpage");
    } else {
      navigate("/mainlayout/home");
    }
  };
  // Handle size selection
  const handleSizeClick = (size: string, amount: string) => {
    setSelectedSize(size);
    setSelectedAmount(amount);
  };

  // Handle product image click
  const handleProductImageClick = (
    sizeimage: string,
    color: string,
    index: number
  ) => {
    setCurrentImageIndex(sizeimage);
    setActiveProductIndex(index);
    setSelectedColor(color);
  };
  // Handle thumbnail click
  const handleImageClick = (image: string, index: number) => {
    setCurrentImage(image);
    setActiveIndex(index);
  };

  // count state
  const increaseCount = () => setCount((prevcount) => prevcount + 1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevcount) => prevcount - 1);
    }
  };
  // check box state
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };


const handleAddToCartSubmit = () => {
  dispatch({
    type:"PRODUCT_ADD_TO_CART_CREATE_API_REQUEST",
    payload:{
      url: "/addToCart",
      method: "POST",
      body:{
        productId:rowDataId,
        // productId:'2df8af0e-4710-4523-b285-9d97617ce6ef',
        userId:"001a0ab1-14a1-4016-b2ed-2e9dfa414245",
        colorId:selectedColor?.id,
        sizeId:selectedSize?.id,
        quantity:count
      }
    }
  })
}

const handleWishlist = () => {
  dispatch({
    type:"PRODUCT_WHISHLIST_CREATE_API_REQUEST",
    payload: {
      url: "/wishList",
      method: "POST",
      body:{
        userId:"001a0ab1-14a1-4016-b2ed-2e9dfa414245",
        productId:rowDataId
      }
    },
  })
}

  return (
    <div className={classes.MainContainer}>
      <nav className={classes.Nav}>
        <div className={classes.navContent}>
          <Typography
            onClick={handleNavigate}
            className={classes.lightColor}
            variant="BS"
          >
            Home
          </Typography>
          <div className={classes.dotStyle}></div>
          <Typography variant="BM">
            {/* Cotton Long-Sleeve Striped T-shirt */}
            {store.product.dataGet?.name}
          </Typography>
        </div>
        <div>
          <SvgChevronLeft />
          <SvgViewComfyAlt
            onClick={() => handleNavigate("product")}
            cursor={"pointer"}
          />
          <SvgChevronRight />
        </div>
      </nav>
      <div className={classes.ProductContainer}>
        <div className={classes.LeftDiv}>
          <HideComponents showOnlyOn="desktop">
          <div className={classes.LeftDivSmall}>
            {selectedColorAttachments.map((product: any, idx: number) => (
              <div
                onClick={() => handleImageClick(product.fileUrl, idx)}
                key={idx}
                className={clsx(classes.ImageDiv, {
                  [classes.Boder]: activeIndex === idx,
                })}
              >
                <img src={product?.fileUrl} className={classes.Image} alt="" />
              </div>
            ))}
          </div>
          </HideComponents>
          <div className={classes.ImgDiv}>
            <img src={currentImage} alt="" className={classes.Img} />
            {/* <ProductImage imageUrl={currentImage}/> */}
          </div>
        </div>
        <div className={classes.RightDiv}>
          <div>
            <Typography variant="BS">
              {/* Adidas */}
              {store.product.dataGet?.brand?.name}
            </Typography>
          </div>
          <div>
            <Typography variant="TM">
              {/* Cotton Long-Sleeve Striped T-shirt */}
              {store.product.dataGet?.name}
            </Typography>
          </div>
          <div className={classes.StarContent}>
            <div className={classes.StarDiv}>
            {RatingStar(Math.round(store.product.dataGet?.aggregateReviewValue?.averageRating))}
            </div>
            <div>
              <Typography variant="BS">{`${store.product.dataGet?.aggregateReviewValue?.totalReviews} Reviews`}</Typography>
            </div>
            <div>
              <Typography variant="BS">17 sold in last 18 hours</Typography>
            </div>
          </div>
          <div>
            <Typography variant="TS">{price?.mrp}</Typography>
          </div>
          <div>
            <Typography variant="BM">
              {/* The cotton long-sleeved striped t-shirt features a classic crew
              neckline, easy short sleeves, a slightly cropped length and a
              relaxed fit for a truly timeless look. */}
              {store.product.dataGet?.shortdesc}
            </Typography>
          </div>
          <div className={classes.Table}>
            <div className={classes.TableContent}>
              <Typography variant="BM">
                Estimate delivery times: 3-5 days International.
              </Typography>
            </div>
            <div className={classes.TableContent}>
              <Typography variant="BM">
                Use code "WELCOME15" for discount 15% on your first order.
              </Typography>
            </div>
            <div className={classes.TableContentBoder}>
              <Typography variant="BM">
                Free shipping & returns: On all orders over $150.
              </Typography>
            </div>
          </div>
          <div className={classes.EyeContainer}>
            <div className={classes.EyeDiv}>
              <img src={eye} alt="" className={classes.EyeImg} />
            </div>
            <div>
              <Typography variant="BM">
                18 peoples are viewing this right now
              </Typography>
            </div>
          </div>
          <div className={classes.ColorSection}>
            <div className={classes.Gray}>
              <Typography variant="BM">Color: {selectedColor?.name}</Typography>
            </div>
            <div className={classes.Product}>
              {/* {ProductData?.productimg?.map((dat: any, index: number) => (
                <div
                  onClick={() =>
                    handleProductImageClick(dat.black, dat.color, index)
                  }
                  key={index}
                  className={clsx(classes.ProductImgDiv, {
                    [classes.ProductBoder]: activeProductIndex === index,
                  })}
                >
                  <img src={dat.black} alt="" className={classes.ProductImg} />
                </div>
              ))} */}
              {store.product.dataGet?.colors?.map((dat: any, index: number) => {
                const thumbnailAttachments = dat.attachments.filter(
                  (attachment: any) => attachment.thumbnail === true
                );
                return (
                  <div
                    onClick={() => handleColorChange(dat)}
                    key={index}
                    className={clsx(classes.ProductImgDiv, {
                      [classes.ProductBoder]: dat.name === selectedColor?.name,
                    })}
                  >
                    <img
                      src={thumbnailAttachments[0]?.fileUrl}
                      alt=""
                      className={classes.ProductImg}
                    />
                  </div>
                );
              })}
            </div>
            <div className={classes.SizeSection}>
              <div className={classes.SizeNav}>
                <div>
                  <Typography variant="BM">
                    Size: {selectedSize?.sizeVariant}
                  </Typography>
                </div>
                {/* <div>
                  <Typography variant="BS">Size guide</Typography>
                </div> */}
              </div>
              <div className={classes.SizeChart}>
                {filteredSizes?.map((chart: any, idx: number) => (
                  <div
                    onClick={() => handleSizeChange(chart)}
                    key={idx}
                    className={clsx(classes.Chart, {
                      [classes.ChartStyle]:
                        selectedSize?.sizeVariant === chart.sizeVariant,
                    })}
                  >
                    {chart.sizeVariant}
                  </div>
                ))}
              </div>
              <div className={classes.Compare}>
                <div className={classes.Color}>
                  <Typography variant="BS">Compare Color</Typography>
                </div>
                <div className={classes.Color}>
                  <Typography variant="BS">Ask a Question</Typography>
                </div>
                <div className={classes.Color}>
                  <Typography variant="BS">Share</Typography>
                </div>
              </div>
              <div className={classes.HurryUp}>
                <div className={classes.HurryText}>
                  <Typography variant="BS">
                    Hurry up! Only 1 item(s) items left in stock
                  </Typography>
                </div>
              </div>
              {/* button section */}
              <div className={classes.buttonContainer}>
                <Button
                  leftIcon={<SvgChevronLeft onClick={decreaseCount} />}
                  rightIcon={
                    <SvgAdd
                      onClick={increaseCount}
                      className={classes.buttonColor}
                    />
                  }
                  text={count}
                  className={classes.buttonStyle}
                ></Button>
                <Button
                  onClick={handleAddToCartSubmit}
                  className={classes.btnStyle}
                  text="Add to Cart"
                ></Button>
                <div className={classes.CircleContainer}>
                  <div className={classes.CircleImgDiv} onClick={handleWishlist}>
                    <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
                  </div>
                  {/* <div className={classes.CircleImgDiv}>
                    <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
                  </div> */}
                </div>
              </div>
              {/* checkbox  */}
              <div className={classes.CheckBox}>
                <div className={classes.CheckBoxWrapper}>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="terms">
                    <Typography>
                      I agree with <strong>Terms & Conditions</strong>
                    </Typography>
                  </label>
                </div>
                <div className={classes.CheckBoxButton}>
                  <Button
                    onClick={() => handleNavigate("payment")}
                    disabled={!isChecked}
                    text={" Buy it now"}
                    className={clsx(classes.ButtonStyle, {
                      [classes.checked]: isChecked,
                    })}
                  ></Button>
                </div>
              </div>
              <div className={classes.Sizes}>
                <div className={classes.ImgContainer}>
                  <img
                    // src={ProductData?.sizedetails?.img}
                    src={thumbnailAttachments?.[0]?.fileUrl}
                    alt=""
                    className={classes.ImgStyle}
                  />
                </div>
                <div>
                  {ProductData?.sizedetails?.size.map(
                    (size: any, idx: number) => (
                      <div key={idx} className={classes.SizeWrapper}>
                        <div>
                          <div>
                            <Typography variant="BS">
                              {size.key}
                              {size.value}
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="BS">
                              Height:
                              {/* {store.product.dataGet?.} */}
                            </Typography>
                          </div>
                          <div>
                            {size.shoulder}
                            {size.width}
                          </div>
                        </div>
                        <div>
                          <div>
                            <Typography variant="BS">
                              {size.weight}
                              {size.kg}
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="BS">
                              {size.hip}
                              {size.size}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={classes.Available}>
                {ProductData?.available?.map((avai: any, idx: number) => (
                  <div>
                    <Typography variant="BS">
                      {avai.key}
                      {avai.value}
                    </Typography>
                    <Typography variant="BS">
                      {avai.available}
                      {avai.instock}
                    </Typography>
                    <Typography variant="BS">
                      {avai.collection}
                      {/* {avai.collections} */}
                      {store.product.dataGet?.tags?.map((item: any) => (
                        <Typography variant="BS" component={"span"}>
                          {item.name},
                        </Typography>
                      ))}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className={classes.CheckOut}>
                <div>
                  <Typography variant="TS">Guarantee Safe Checkout:</Typography>
                </div>
                <div className={classes.PaymentDiv}>
                  <img src={payment} className={classes.PaymentImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reviev section */}
      <Ratings ReviewData={review} productId={rowDataId} />
      {/* add to cart */}
      {store.commonInternal.isAddToCart && (
        <ShoppingCart onClose={setIsAddToCart} />
      )}
    </div>
  );
};

export default ProductPage;
