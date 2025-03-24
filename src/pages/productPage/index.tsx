import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Ratings from "../../component/customerReview";
import SvgUserRound from "../../custom-icons/UserRound";
import Button from "../../component/button";
import SvgAdd from "../../custom-icons/Add";
import SvgHeart from "../../custom-icons/Heart";
import ShoppingCart from "../../component/shoppingCartModule";
import ProductImage from "../../component/productImage";

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
  const [isAddToCart,setIsAddToCart] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    ProductData?.logo[0]?.logo || ""
  );
  // State to track the currently active product index
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>("Grey");
  // State to track the currently active index
  const [activeIndex, setActiveIndex] = useState(0);
  // State to hold the currently selected size
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedAmount, setSelectedAmount] = useState<string>("$115.00");
  const navigate = useNavigate();

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
  // Function to change the image when clicked
  const handleImageClick = (newimg: string, index: number) => {
    setCurrentImageIndex(newimg);
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
  return (
    <div className={classes.MainContainer}>
      <nav className={classes.Nav}>
        <div className={classes.navContent}>
        <Typography onClick={handleNavigate} className={classes.lightColor} variant="BS">
            Home
          </Typography>
          <div className={classes.dotStyle}></div>
          <Typography variant="BM">
            Cotton Long-Sleeve Striped T-shirt
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
          <div className={classes.LeftDivSmall}>
            {ProductData?.logo?.map((product: any, idx: number) => (
              <div
                onClick={() => handleImageClick(product.logo, idx)}
                key={idx}
                className={clsx(classes.ImageDiv, {
                  [classes.Boder]: activeIndex === idx,
                })}
              >
                <img src={product.logo} className={classes.Image} alt="" />
               
              </div>
            ))}
          </div>
          <div className={classes.ImgDiv}>
            {/* <img src={currentImageIndex} alt="" className={classes.Img} /> */}
            <ProductImage imageUrl={currentImageIndex}/>
          </div>
        </div>
        <div className={classes.RightDiv}>
          <div>
            <Typography variant="BS">Adidas</Typography>
          </div>
          <div>
            <Typography variant="TS">
              Cotton Long-Sleeve Striped T-shirt
            </Typography>
          </div>
          <div className={classes.StarContent}>
            <div className={classes.StarDiv}>
              {ProductData?.star?.map((star: any, idx: number) => (
                <div className={classes.StarDiv} key={idx}>
                  <img src={star.logo} alt="" />
                </div>
              ))}
            </div>
            <div>
              <Typography variant="BS">3 reviews</Typography>
            </div>
            <div>
              <Typography variant="BS">17 sold in last 18 hours</Typography>
            </div>
          </div>
          <div>
            <Typography variant="TS">{selectedAmount}</Typography>
          </div>
          <div>
            <Typography variant="BS">
              The cotton long-sleeved striped t-shirt features a classic crew
              neckline, easy short sleeves, a slightly cropped length and a
              relaxed fit for a truly timeless look.
            </Typography>
          </div>
          <div className={classes.Table}>
            <div className={classes.TableContent}>
              <Typography variant="BS">
                Estimate delivery times: 3-5 days International.
              </Typography>
            </div>
            <div className={classes.TableContent}>
              <Typography variant="BS">
                Use code "WELCOME15" for discount 15% on your first order.
              </Typography>
            </div>
            <div className={classes.TableContentBoder}>
              <Typography variant="BS">
                Free shipping & returns: On all orders over $150.
              </Typography>
            </div>
          </div>
          <div className={classes.EyeContainer}>
            <div className={classes.EyeDiv}>
              <img src={eye} alt="" className={classes.EyeImg} />
            </div>
            <div>
              <Typography variant="BS">
                18 peoples are viewing this right now
              </Typography>
            </div>
          </div>
          <div className={classes.ColorSection}>
            <div className={classes.Gray}>
              <Typography variant="BS">Color: {selectedColor}</Typography>
            </div>
            <div className={classes.Product}>
              {ProductData?.productimg?.map((dat: any, index: number) => (
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
              ))}
            </div>
            <div className={classes.SizeSection}>
              <div className={classes.SizeNav}>
                <div>
                  <Typography variant="BS">Size: {selectedSize}</Typography>
                </div>
                <div>
                  <Typography variant="BS">Size guide</Typography>
                </div>
              </div>
              <div className={classes.SizeChart}>
                {ProductData?.sizechart?.chart?.map(
                  (chart: any, idx: number) => (
                    <div
                      onClick={() => handleSizeClick(chart.size, chart.amount)}
                      key={idx}
                      className={clsx(classes.Chart, {
                        [classes.ChartStyle]: selectedSize === chart.size,
                      })}
                    >
                      {chart.size}
                    </div>
                  )
                )}
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
                  onClick={()=>setIsAddToCart(!isAddToCart)}
                  className={classes.btnStyle}
                  text="Add to Cart"
                ></Button>
                <div className={classes.CircleContainer}>
                  <div className={classes.CircleImgDiv}>
                    <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
                  </div>
                  <div className={classes.CircleImgDiv}>
                    <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
                  </div>
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
                    src={ProductData?.sizedetails?.img}
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
                              {size.height}
                              {size.cm}
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
                      {avai.collections}
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
      <Ratings ReviewData={review} />
      {/* add to cart */}
      {isAddToCart && <ShoppingCart onClose={setIsAddToCart}/>}
    </div>
  );
};

export default ProductPage;
