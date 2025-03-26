import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import SvgHeart from "../../custom-icons/Heart";
import Button from "../button";
import ProductModule from "../productModule";
import SvgEye from "../../custom-icons/Eye";
import { deepGet } from "../../util/util";
import SvgClose from "../../custom-icons/Close";

interface VerticalProductCardProps {
  products: any;
  close?:any
  onClose?:any
}

const VerticalProductCard: React.FC<VerticalProductCardProps> = ({
  products,
  close,
  onClose = () => {}
}) => {
  console.log("data", products);
  const classes = useStyle();
  const [viewModule, setViewModule] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectOption, setSelectOption] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState(
    products.image || fashionwhite
  );
  const rating = 4;
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  console.log('price',price)
  const [currentImage, setCurrentImage] = useState("");

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
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
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

  // Get attachments for the selected color
  const selectedColorAttachments =
    products?.colors?.find((color: any) => color.id === selectedColor?.id)
      ?.attachments || [];

  useEffect(() => {
    if (Object.keys(products || {}).length > 0) {
      setSelectedColor(products?.colors?.[0]);
      setSelectedSize(products?.sizes?.[0]);
    }
  }, [products]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const selectedVariant = products?.variants.find(
        (variant: any) =>
          variant.color.id === selectedColor?.id &&
          variant.size.id === selectedSize?.id
      );
      console.log('selected variant',selectedVariant)
      if (selectedVariant) {
        setPrice(selectedVariant);
      }

      // Set the first attachment as the current image
      if (selectedColorAttachments.length > 0) {
        setCurrentImage(selectedColorAttachments[0].fileUrl);
      }
    }
  }, [selectedColor, selectedSize]);

  // Handle color selection
  const handleColorChange = (data: any) => {
    const colorId = data.id;
    setSelectedColor(data);

    // Reset size to the first available size for the selected color
    const firstSizeForColor = products?.variants.find(
      (variant: any) => variant.color.id === colorId
    )?.size;
    setSelectedSize(firstSizeForColor || null);
  };

  // selected images in card
  const handleClickProductImage = (image: any) => {
    setSelectedImage(image);
  };
  // navigate
  const handleNavigate = () => {
    navigate("/mainLayout/productpage",{state:{rowDataId:products?.id}});
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
            src={currentImage}
            alt="Product"
          />
          {isHovered && (
            <div>
              {close ? (
                <div className={classes.favourite} onClick={()=>onClose(products?.id)}>
                <SvgClose
                  className={classes.eyeColor}
                  viewBox="0 0 20 20"
                  width={15}
                  height={15}
                />
              </div>) :
              (<div className={classes.favourite}>
                <SvgHeart
                  className={classes.eyeColor}
                  viewBox="0 0 40 40"
                  width={30}
                  height={25}
                />
              </div>)}
              <div className={classes.favouriteOne}>
                <SvgHeart
                  className={classes.eyeColor}
                  viewBox="0 0 40 40"
                  width={30}
                  height={25}
                />
              </div>
              <div
                onClick={() => setViewModule(!viewModule)}
                className={classes.favouriteTwo}
              >
                <SvgEye className={classes.eyeColor} />
              </div>
            </div>
          )}
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
            <Typography variant="BM">{products.name || products?.products[0]?.name}</Typography>
          </div>
          {/* Star Rating Mapping */}
          <div className={classes.starContainer}>
            {/* {Array.from({ length: rating }).map((_, index) => (
              <SvgStarPurple500
                viewBox="0 0 20 25"
                width={20}
                height={20}
                className={classes.starColor}
                key={index}
              />
            ))} */}
            {RatingStar(products?.totalReviews)}
          </div>
          {/* price */}
          <div className={classes.priceContainer}>
            <Typography className={classes.redColor} variant="BM">
              {`$${price?.sellingPrice}`}
            </Typography>
            <Typography className={classes.lightColor} variant="BM">
              {`$${price?.mrp}`}
            </Typography>
          </div>
          {/* product image */}
          <div className={classes.productImage}>
            {products?.colors?.map((dat: any, index: number) => {
              const thumbnailAttachments = dat.attachments.filter(
                (attachment: any) => attachment.thumbnail === true
              );
              return (
                <div
                  onClick={() => handleColorChange(dat)}
                  key={index}
                  // className={clsx(classes.ProductImgDiv, {
                  //   [classes.ProductBoder]: dat.name === selectedColor?.name,
                  // })}
                  className={clsx(classes.imageDiv, {
                    [classes.activeStatus]: dat.name === selectedColor?.name,
                  })}
                >
                  <img
                    src={thumbnailAttachments[0]?.fileUrl}
                    alt=""
                    className={classes.itemDiv}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* selection card */}
        {selectOption && <ProductModule onClose={setSelectOption} />}
        {/* view module */}
        {viewModule && <ProductModule onClose={setViewModule} />}
      </div>
    </div>
  );
};

export default VerticalProductCard;
