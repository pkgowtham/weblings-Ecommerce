import { useStyle } from "./indexstyle";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgAdd from "../../custom-icons/Add";
import Button from "../button";
import SvgHeart from "../../custom-icons/Heart";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";
import SvgClose from "../../custom-icons/Close";
import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface productModuleProps {
  onClose: (value: boolean) => void;
}

const productImages = [
  { id: 1, image: fashionblack, color: "Black" },
  { id: 2, image: fashionwhite, color: "White" },
  { id: 3, image: fashiongrey, color: "Grey" },
];

const sizes = [
  { size: "S", amount: "$115.00" },
  { size: "M", amount: "$120.00" },
  { size: "L", amount: "$125.00" },
];

const ProductModule: React.FC<productModuleProps> = ({ onClose }) => {
  const classes = useStyle();
  const ratings = 4;
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedAmount, setSelectedAmount] = useState<string>("$115.00");
  const [selectedImage, setSelectedImage] = useState<string>(
    productImages[0].image
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    productImages[0].color
  );
  const [count, setCount] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // handle size selection
  const handleSizeClick = (size: string, amount: any) => {
    setSelectedSize(size);
    setSelectedAmount(amount);
  };
  // handle changing product image
  const handleProductImageClick = (image: any, color: any) => {
    setSelectedImage(image);
    setSelectedColor(color);
  };
  // handle count
  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  // handle chechbox for button visible
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };
  // navigate
  const handleNavigation = () => {
    navigate("/mainLayout/productpage");
  };
  return (
    <CommonModel className={classes.productModule}>
      <div className={classes.productContainer}>
        <SvgClose
        viewBox="0 0 30 30"
          width={30}
          height={30}  
          className={classes.svgCLose}
          onClick={() => onClose(false)}
        />
        {/* image container */}
        <div className={classes.imageContainer}>
          <img className={classes.imageStyles} src={selectedImage} alt="" />
        </div>
        {/* product content */}
        <div className={classes.productContentContainer}>
          <div className={classes.brandTitle}>
            <Typography variant="TS">
              Slim Fit Basic Unpatterned T-shirt
            </Typography>
          </div>
          {/* star container */}
          <div className={classes.starContainer}>
            <div>
              {Array.from({ length: ratings }).map((_, index) => (
                <SvgStarPurple500 className={classes.starColor} key={index} />
              ))}
            </div>
            <div>
              <Typography className={classes.lightColor} variant="BS">
                4 reviews
              </Typography>
            </div>
          </div>
          {/* price container */}
          <div className={classes.priceContainer}>
            <Typography variant="TS">{selectedAmount}</Typography>
          </div>
          {/* product content */}
          <div className={classes.productContaier}>
            <Typography variant="BS" className={classes.lightColor}>
              The cotton long-sleeved striped t-shirt features a classic crew
              neckline, easy short sleeves, a slightly cropped length and a
              relaxed fit for a truly timeless look.
            </Typography>
          </div>
          {/* color section */}
          <div className={classes.colorContainer}>
            <div className={classes.colorContent}>
              <Typography variant="BM" className={classes.blackColor}>
                Color :
              </Typography>
              <Typography className={classes.blackColor} variant="BL">
                {selectedColor}
              </Typography>
            </div>
            <div className={classes.productImage}>
              {productImages.map((image) => (
                <div
                  onClick={() =>
                    handleProductImageClick(image.image, image.color)
                  }
                  className={clsx(classes.imageDiv,{
                    [classes.activeImages] : selectedImage === image.image
                  })}
                >
                  <img
                    className={classes.itemDiv}
                    src={image.image}
                    alt="Product"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* size section */}
          <div className={classes.sizeContainer}>
            <div className={classes.sizeContent}>
              <Typography variant="BM">Size :</Typography>
              <Typography variant="TS">{selectedSize}</Typography>
            </div>
            <div className={classes.sizeDiv}>
              {sizes.map((size) => (
                <div
                  onClick={() => handleSizeClick(size.size, size.amount)}
                  key={size.size}
                  className={classes.sizedDiv}
                >
                  <div
                    className={clsx(classes.sizeStyle, {
                      [classes.activeStatus]: selectedSize === size.size,
                    })}
                  >
                    <Typography variant="BM">{size.size}</Typography>
                  </div>
                </div>
              ))}
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
            <Button className={classes.btnStyle} text="Add to Cart"></Button>
            <div className={classes.CircleContainer}>
              <div className={classes.CircleImgDiv}>
                <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
              </div>
              <div className={classes.CircleImgDiv}>
                <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
              </div>
            </div>
          </div>
          {/* terms and conditions */}
          <div className={classes.checkBoxContainer}>
            <div>
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                type="checkbox"
              />
            </div>
            <div>
              <Typography className={classes.lightColor} variant="BS">
                I agree with
              </Typography>
            </div>
            <div>
              <Typography className={classes.blackColor} variant="BM">
                {" "}
                Terms & Conditions
              </Typography>
            </div>
          </div>
          {/* buynow button */}
          <div className={classes.buynowButton}>
            <Button
              className={clsx(classes.buynowButtonStyle, {
                [classes.checkedStatus]: isChecked,
              })}
              text="Buy it now"
              disabled={!isChecked}
            ></Button>
          </div>
          {/* view full details */}
          <div className={classes.viewButton}>
            <Typography onClick={handleNavigation} variant="BM">
              View Full Details
            </Typography>
            <SvgChevronRight />
          </div>
        </div>
      </div>
    </CommonModel>
  );
};

export default ProductModule;
