import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import SvgHeart from "../../custom-icons/Heart";
import { useEffect, useRef, useState } from "react";
import ProductModule from "../productModule";
import Button from "../button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import SvgEmptyStar from "../../custom-icons/EmptyStar";
import SvgStarHalf from "../../custom-icons/StarHalf";
import ToolTip from "../toolTip";

interface HorizotalProductCardProps {
  products: any;
}

const HorizotalProductCard: React.FC<HorizotalProductCardProps> = ({
  products,
}) => {
  const classes = useStyle();
  const [isSelectDropDown, setisSelectDropDown] = useState<boolean>(false);
  const navigate = useNavigate();
  const sampleref = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState("");
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();

  const RatingStar = (rating: number) => {
  
    switch (true) {
      // Handle cases like 1.1 to 1.9
      case rating >= 1.1 && rating <= 1.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 2.1 to 2.9
      case rating >= 2.1 && rating <= 2.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 3.1 to 3.9
      case rating >= 3.1 && rating <= 3.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 4.1 to 4.9
      case rating >= 4.1 && rating <= 4.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
          </div>
        );
  
      // Default cases (whole numbers)
      case rating === 1:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 2:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 3:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 4:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 5:
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
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
    }
  };
 
  const isWishlist = store.productWishlist.dataGetList?.data?.some(
    (item: any) =>
      item.products.some(
        (prod: any) =>
          prod?.id ===
          (Array.isArray(products?.products)
            ? products?.products[0]?.id
            : products?.id)
      )
  );

  // Get attachments for the selected color
  const selectedColorAttachments =
    products?.colors?.find((color: any) => color.id === selectedColor?.id)
      ?.attachments || [];

  useEffect(() => {
    if (Object.keys(products || {}).length > 0) {
      setSelectedColor(products?.colors?.[0]);

      // const transformSize

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

  const handleEdit = () => {
    dispatch({
      type: "UPDATE_ADD_TO_CART_DATA",
      payload: {
        selectedProduct: products,
      },
    });
    setisSelectDropDown(true);
  };

  // navigate
  const handleNavigate = () => {
    navigate("/mainLayout/productpage", {
      state: {
        rowDataId: products?.products
          ? products?.products[0]?.id
          : products?.id,
      },
    });
  };

  const handleWishlist = () => {
    if(isWishlist){
      const selectedWishlist =
      store.productWishlist.dataGetList?.data?.find(
        (product: any) => product.products[0]?.id === (Array.isArray(products?.products) 
        ? products?.products[0]?.id 
        : products?.id)
      ) || {}
      dispatch({
        type:"PRODUCT_WHISHLIST_DESTROY_API_REQUEST",
        payload: {
          url: "/wishList",
          method: "DELETE",
          query:{
            id:selectedWishlist?.id
          }
        },
      })
    }else{
      dispatch({
        type:"PRODUCT_WHISHLIST_CREATE_API_REQUEST",
        payload: {
          url: "/wishList",
          method: "POST",
          body:{
            userId:"001a0ab1-14a1-4016-b2ed-2e9dfa414245",
            productId:products?.products ? products?.products[0]?.id : products?.id
          }
        },
      })
    }
  };

  return (
    <div className={classes.mainContainer}>
      {/* product image container */}
      <div onClick={handleNavigate} className={classes.productImageContainer}>
        <img className={classes.imageStyle} src={currentImage} alt="" />
      </div>
      {/* product content container */}
      <div className={classes.contentContainer}>
        <div>
          <div>
            <Typography className={classes.blackColor} variant="TS">
              {products?.name || products?.products[0]?.name}
            </Typography>
          </div>
          {/* star ratigs maping */}
          <div>
            {/* {RatingStar(
              Math.round(products?.aggregateReviewValue?.averageRating)
            )} */}
            {RatingStar(products?.aggregateReviewValue?.averageRating)}
          </div>
        </div>
        {/* price section */}
        <div className={classes.priceDiv}>
          {/* price */}
          <div className={classes.priceContainer}>
            <Typography className={classes.redColor} variant="BM">
              {`$${price?.sellingPrice}`}
            </Typography>
            <Typography className={classes.lineThroughGray} variant="BM">
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
                <ToolTip content={dat.name} position="top">
                <div
                  onClick={() => handleColorChange(dat)}
                  key={index}
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
                </ToolTip>
              );
            })}
          </div>
        </div>
        {/* content section */}
        <div>
          <Typography className={classes.lightColor} variant="BS">
            {products?.shortdesc}
          </Typography>
        </div>
        {/* button sections */}
        <div className={classes.buttonContainer}>
          <Button
            className={classes.buttonStyle}
            text={" Select Options"}
            onClick={handleEdit}
          ></Button>
          <div className={classes.CircleContainer}>
            <div
              className={clsx(classes.CircleImgDiv, {
                [classes.favouriteActive]: isWishlist,
              })}
              onClick={handleWishlist}
            >
              <SvgHeart viewBox="0 0 40 40" width={30} height={25} />
            </div>
            {/* <div className={classes.CircleImgDiv}>
            <SvgHeart viewBox="0 0 40 40" width={30} height={25} />
            </div> */}
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
