import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import SvgHeart from "../../custom-icons/Heart";
import Button from "../button";
import ProductModule from "../productModule";

interface VerticalProductCardProps {
  products: any;
}

const VerticalProductCard: React.FC<VerticalProductCardProps> = ({
  products,
}) => {
  console.log("data", products);
  const classes = useStyle();
  const [isHovered, setIsHovered] = useState(false);
  const [selectOption, setSelectOption] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState(
    products.image || fashionwhite
  );
  const rating = 4;
  const navigate = useNavigate();

  // selected images in card
  const handleClickProductImage = (image: any) => {
    setSelectedImage(image);
  };
  // navigate
  const handleNavigate = () => {
    navigate("/mainLayout/productpage");
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.productCard}>
        <div
          className={classes.imageContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            onClick={handleNavigate}
            className={classes.itemStyle}
            src={selectedImage}
            alt="Product"
          />
          <div className={classes.favourite}>
            <SvgHeart viewBox="0 0 40 40" width={30} height={25} />
          </div>
          {isHovered && (
            <div className={classes.buttonContainer}>
              <Button
                onClick={() => setSelectOption(!selectOption)}
                className={classes.buttonStyle}
                text={"Select Option"}
              ></Button>
            </div>
          )}
        </div>
        <div className={classes.cardContents}>
          <div>
            <Typography variant="BM">{products.name}</Typography>
          </div>
          {/* Star Rating Mapping */}
          <div className={classes.starContainer}>
            {Array.from({ length: rating }).map((_, index) => (
              <SvgStarPurple500
                viewBox="0 0 20 25"
                width={20}
                height={20}
                className={classes.starColor}
                key={index}
              />
            ))}
          </div>
          {/* price */}
          <div className={classes.priceContainer}>
            <Typography className={classes.redColor} variant="BM">
              {products.price}
            </Typography>
            <Typography className={classes.lightColor} variant="BM">
              {products.price}
            </Typography>
          </div>
          {/* product image */}
          <div className={classes.productImage}>
            {(Array.isArray(products.variants) ? products.variants : []).map(
              (image: any) => (
                <div
                  onClick={() => handleClickProductImage(image.image)}
                  className={clsx(classes.imageDiv, {
                    [classes.activeStatus]: selectedImage === image.image,
                  })}
                >
                  <img
                    className={classes.itemDiv}
                    src={image.image}
                    alt="Product"
                  />
                </div>
              )
            )}
          </div>
        </div>
        {/* selection card */}
        {selectOption && <ProductModule onClose={setSelectOption} />}
      </div>
    </div>
  );
};

export default VerticalProductCard;
