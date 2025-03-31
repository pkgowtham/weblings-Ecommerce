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
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";

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
  const [selectedAmount, setSelectedAmount] = useState<string>("$115.00");
  const [selectedImage, setSelectedImage] = useState<string>(
    productImages[0].image
  );
  const [count, setCount] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState("");
  const hasAddtoCartDispatched = useRef(false);

   //checking the Wishlist if exists
   const isWishlist = store.productWishlist.dataGetList?.data?.some(
    (item: any) =>
      item.products.some(
        (prod: any) => prod?.id === store.addToCartInternal.selectedProduct?.id
      )
  );

  //checking the add to cart if exists
  const isProductInCart = store.productAddToCart.dataGetList?.data?.some(
    (item: any) =>
      item.products.some(
        (product: any) =>
          product.id === store.addToCartInternal.selectedProduct?.id
      )
  );

  // Filtered sizes based on selected color
  const filteredSizes = selectedColor
    ? store.addToCartInternal.selectedProduct?.variants
        .filter((variant: any) => variant.color.id === selectedColor?.id)
        .map((variant: any) => variant.size)
    : [];

  // Get attachments for the selected color
  const selectedColorAttachments =
    store.addToCartInternal.selectedProduct?.colors.find(
      (color: any) => color.id === selectedColor?.id
    )?.attachments || [];

  useEffect(() => {
    if (Object.keys(store.addToCartInternal.selectedProduct || {}).length > 0) {
      setSelectedColor(store.addToCartInternal.selectedProduct?.colors[0]);
      setSelectedSize(store.addToCartInternal.selectedProduct?.sizes[0]);
    }
  }, [deepGet(store, "product.dataGet")]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const selectedVariant =
        store.addToCartInternal.selectedProduct?.variants.find(
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

  //open modal after creating the add to cart
  useEffect(() => {
    if (store.productAddToCart.isSuccessCreate) {
      dispatch({
        type: "OPEN_ADD_TO_CART_MODAL",
        payload: {
          isAddToCart: true,
        },
      });
      dispatch({
        type: "PRODUCT_ADD_TO_CART_CREATE_API_CLEAR",
      });
    }
  }, [deepGet(store, "productAddToCart.isSuccessCreate")]);

  // Handle color selection
  const handleColorChange = (data: any) => {
    const colorId = data.id;
    setSelectedColor(data);

    // Reset size to the first available size for the selected color
    const firstSizeForColor =
      store.addToCartInternal.selectedProduct?.variants.find(
        (variant: any) => variant.color.id === colorId
      )?.size;
    setSelectedSize(firstSizeForColor || null);
  };

  // Handle size selection
  const handleSizeChange = (data: any) => {
    const sizeId = data.id;
    setSelectedSize(data);

    // Find the corresponding price
    const selectedVariant =
      store.addToCartInternal.selectedProduct?.variants.find(
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

  const handleAddToCartSubmit = () => {
    dispatch({
      type: "PRODUCT_ADD_TO_CART_CREATE_API_REQUEST",
      payload: {
        url: "/addToCart",
        method: "POST",
        body: {
          productId: store.addToCartInternal.selectedProduct?.id,
          userId: "001a0ab1-14a1-4016-b2ed-2e9dfa414245",
          colorId: selectedColor?.id,
          sizeId: selectedSize?.id,
          quantity: count,
        },
      },
    });
  };

  const handleGoToCart = () => {
    dispatch({
      type: "OPEN_ADD_TO_CART_MODAL",
      payload: {
        isAddToCart: true,
      },
    })
  }

  const handleWishlist = () => {
    if(isWishlist){
      const selectedWishlist =
      store.productWishlist.dataGetList?.data?.find(
        (product: any) => product.products[0]?.id === store.addToCartInternal.selectedProduct?.id
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
            productId:store.addToCartInternal.selectedProduct?.id
          }
        },
      })
    }
  };

  return (
    <CommonModel className={classes.productModule}>
      <div className={classes.productContainer}>
        <SvgClose
          viewBox="0 0 30 30"
          width={30}
          height={30}
          className={classes.svgCLose}
          onClick={() => {
            onClose(false),
              dispatch({
                type: "UPDATE_ADD_TO_CART_DATA",
                payload: {
                  selectedProduct: null,
                },
              });
          }}
        />
        {/* image container */}
        <div className={classes.imageContainer}>
          <img className={classes.imageStyles} src={currentImage} alt="" />
        </div>
        {/* product content */}
        <div className={classes.productContentContainer}>
          <div className={classes.brandTitle}>
            <Typography variant="TS">
              {store.addToCartInternal.selectedProduct?.name}
            </Typography>
          </div>
          {/* star container */}
          <div className={classes.starContainer}>
            {/* <div>
              {Array.from({ length: ratings }).map((_, index) => (
                <SvgStarPurple500 className={classes.starColor} key={index} />
              ))}
            </div> */}
            {RatingStar(
              Math.round(
                store.addToCartInternal.selectedProduct?.aggregateReviewValue
                  ?.averageRating
              )
            )}
            <div>
              <Typography className={classes.lightColor} variant="BS">
                {
                  store.addToCartInternal.selectedProduct?.aggregateReviewValue
                    ?.totalReviews
                }{" "}
                reviews
              </Typography>
            </div>
          </div>
          {/* price container */}
          <div className={classes.priceContainer}>
            <Typography variant="TS">{price?.mrp}</Typography>
          </div>
          {/* product content */}
          <div className={classes.productContaier}>
            <Typography variant="BS" className={classes.lightColor}>
              {store.addToCartInternal.selectedProduct?.shortdesc}
            </Typography>
          </div>
          {/* color section */}
          <div className={classes.colorContainer}>
            <div className={classes.colorContent}>
              <Typography variant="BM" className={classes.blackColor}>
                Color :
              </Typography>
              <Typography className={classes.blackColor} variant="BL">
                {selectedColor?.name}
              </Typography>
            </div>
            <div className={classes.productImage}>
              {store.addToCartInternal.selectedProduct?.colors?.map(
                (dat: any, index: number) => {
                  const thumbnailAttachments = dat.attachments.filter(
                    (attachment: any) => attachment.thumbnail === true
                  );
                  return (
                    <div
                      className={clsx(classes.imageDiv, {
                        [classes.activeImages]:
                          dat.name === selectedColor?.name,
                      })}
                      onClick={() => handleColorChange(dat)}
                      key={index}
                    >
                      <img
                        className={classes.itemDiv}
                        src={thumbnailAttachments[0]?.fileUrl}
                        alt="Product"
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* size section */}
          <div className={classes.sizeContainer}>
            <div className={classes.sizeContent}>
              <Typography variant="BM">Size :</Typography>
              <Typography variant="TS">{selectedSize?.sizeVariant}</Typography>
            </div>
            <div className={classes.sizeDiv}>
              {filteredSizes?.map((chart: any, idx: number) => (
                <div
                  onClick={() => handleSizeChange(chart)}
                  key={idx}
                  className={classes.sizedDiv}
                >
                  <div
                    className={clsx(classes.sizeStyle, {
                      [classes.activeStatus]:
                        selectedSize?.sizeVariant === chart.sizeVariant,
                    })}
                  >
                    <Typography variant="BM">{chart?.sizeVariant}</Typography>
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
            <Button
              className={classes.btnStyle}
              onClick={isProductInCart ? handleGoToCart : handleAddToCartSubmit}
              text={isProductInCart ? "Go to Cart" : "Add to Cart"}
            ></Button>
            <div className={classes.CircleContainer}>
              <div className={clsx(classes.CircleImgDiv,{
                [classes.favouriteActive]:isWishlist
              })} onClick={handleWishlist}>
                <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
              </div>
              {/* <div className={classes.CircleImgDiv}>
                <SvgHeart viewBox="0 0 35 55" width={30} height={30} />
              </div> */}
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
