import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import SvgHeart from "../../custom-icons/Heart";
import { useRef, useState } from "react";
import ProductModule from "../productModule";
import Button from "../button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface HorizotalProductCardProps {
  productsdata: any;
}

const HorizotalProductCard: React.FC<HorizotalProductCardProps> = ({
  productsdata,
}) => {
  const classes = useStyle();
  const [isSelectDropDown, setisSelectDropDown] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState(productsdata.image);
  const ratings = 4;
  const navigate = useNavigate();
  const sampleref = useRef<HTMLDivElement>(null);

  // handle selected image
  const handleProductImageClick = (image: any) => {
    setSelectedImage(image);
  };
  // navigate
  const handleNavigate = () => {
    navigate("/mainLayout/productpage");
  };
  return (
    <div className={classes.mainContainer}>
      {/* product image container */}
      <div onClick={handleNavigate} className={classes.productImageContainer}>
        <img className={classes.imageStyle} src={selectedImage} alt="" />
      </div>
      {/* product content container */}
      <div className={classes.contentContainer}>
        <div>
          <div>
            <Typography className={classes.blackColor} variant="TS">
              {productsdata.name}
            </Typography>
          </div>
          {/* star ratigs maping */}
          <div>
            {Array.from({ length: ratings }).map((_, index) => (
              <SvgStarPurple500
                viewBox="0 0 20 25"
                width={20}
                height={20}
                className={classes.starColor}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* price section */}
        <div className={classes.priceDiv}>
          {/* price */}
          <div ref={sampleref}>
            <Typography variant="BL">$80.00</Typography>
          </div>

          {/* product image */}
          <div className={classes.productImage}>
            {(Array.isArray(productsdata.variants)
              ? productsdata.variants
              : []
            ).map((image: any) => (
              // <div key={image.id}  ref={(el) => (imageRefs.current[index] = el)} >
              <div
                onClick={() => handleProductImageClick(image.image)}
                className={clsx(classes.imageDiv, {
                  [classes.activeImage]: selectedImage === image.image,
                })}
              >
                <img
                  className={classes.itemDiv}
                  src={image.image}
                  alt="Product"
                />
              </div>

              // </div>
            ))}
          </div>
        </div>
        {/* content section */}
        <div>
          <Typography className={classes.lightColor} variant="BS">
            The cotton long-sleeved striped t-shirt features a classic crew
            neckline, easy short sleeves, a slightly cropped length and a
            relaxed fit for a truly timeless look.
          </Typography>
        </div>
        {/* button sections */}
        <div className={classes.buttonContainer}>
          <Button
            className={classes.buttonStyle}
            onClick={() => setisSelectDropDown(!isSelectDropDown)}
            text={" Select Options"}
          ></Button>
          <div className={classes.CircleContainer}>
            <div className={classes.CircleImgDiv}>
            <SvgHeart viewBox="0 0 40 40" width={30} height={25} />
            </div>
            <div className={classes.CircleImgDiv}>
            <SvgHeart viewBox="0 0 40 40" width={30} height={25} />
            </div>
          </div>
        </div>
        {/* module for selected product */}
        {isSelectDropDown && <ProductModule onClose={setisSelectDropDown} />}
      </div>
    </div>
  );
};

export default HorizotalProductCard;
{
  /* {imageRefs.current[index] && (
              <ToolTip
                parentRef={{ current: imageRefs.current[index] }} // Ensure ref is not undefined
                offsetTop={40}
                positionType="top"
                mouseEnterDelay={300}
                onMouseEnter={() => console.log("Tooltip shown")}
                onMouseLeave={() => console.log("Tooltip hidden")}
              >
                {image.color}
              </ToolTip>
            )} */
}
