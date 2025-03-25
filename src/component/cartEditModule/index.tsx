import SvgClose from "../../custom-icons/Close";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import { useStyle } from "./indexstyle";
import fashion from "../../assets/images/fashion.jpg";
import Button from "../button";
import SvgAdd from "../../custom-icons/Add";
import { useEffect, useState } from "react";
import { theme } from "../../../theme/theme";
import clsx from "clsx";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";

interface CartEditModuleProps {
  onClose: any;
  data?: any;
}

const colorcode = [
  {
    id: 1,
    name: "Color",
    color: ["#E00028", "#B15600"],
  },
  {
    id: 2,
    name: "Size",
    size: ["S", "M", "L"],
  },
];

const CartEditModule: React.FC<CartEditModuleProps> = ({ onClose, data }) => {
  const classes = useStyle();
  const [quantity, setQuantity] = useState<any>(1);
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState("");
  const [thumbnailAttachments, setThumbnailAttachments] = useState<any[]>([]);

  // Filtered sizes based on selected color
  const filteredSizes = selectedColor
    ? store.addToCartInternal.selectedProduct?.addToCartWithDetail
        .filter((variant: any) => variant.color.id === selectedColor?.color?.id)
        .map((variant: any) => variant.size)
    : [];

  // Get attachments for the selected color
  const selectedColorAttachments =
    store.addToCartInternal.selectedProduct?.colors.find(
      (col: any) => col.color.id === selectedColor?.color?.id
    )?.color?.attachments || [];

  useEffect(() => {
    if (Object.keys(store.addToCartInternal.selectedProduct || {}).length > 0) {
      const selectedCol = store.addToCartInternal.selectedProduct?.colors.find(
        (variant: any) =>
          variant.color.id === store.addToCartInternal.selectedProduct?.color.id
      );

      setSelectedColor(selectedCol);
      setSelectedSize(store.addToCartInternal.selectedProduct?.size);
    }
  }, [deepGet(store, "addToCartInternal.selectedProduct")]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const selectedVariant =
        store.addToCartInternal.selectedProduct?.addToCartWithDetail.find(
          (variant: any) =>
            variant.color.id === selectedColor?.color.id &&
            variant.size.id === selectedSize?.id
        );
      if (selectedVariant) {
        setPrice(selectedVariant);
      }

      // Set the first attachment as the current image
      if (selectedColorAttachments.length > 0) {
        setCurrentImage(selectedColorAttachments[0].fileUrl);
        // setActiveIndex(0);
      }
    }
  }, [selectedColor, selectedSize]);

  // Handle color selection
  const handleColorChange = (data: any) => {

    const colorId = data.color?.id;
    setSelectedColor(data);

    // Reset size to the first available size for the selected color
    const firstSizeForColor =
      store.addToCartInternal.selectedProduct?.addToCartWithDetail.find(
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
      store.addToCartInternal.selectedProduct?.addToCartWithDetail.find(
        (variant: any) =>
          variant.color.id === selectedColor?.id && variant.size.id === sizeId
      );

    if (selectedVariant) {
      setPrice(selectedVariant);
    } else {
      setPrice(null);
    }
  };

  //   handle quantity
  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev: any) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

const handleSubmit = () => {

  dispatch({
    type:"PRODUCT_ADD_TO_CART_UPDATE_API_REQUEST",
    payload:{
      url: "/addToCart",
      method: "PUT",
      query:{
        id:store.addToCartInternal.selectedProduct?.id
      },
      body:{
        // productId:rowDataId,
        quantity:quantity,
        addToCartWithDetailId:price?.id
      }
    }
  })
}

  return (
    <CommonModel className={classes.cartContainer}>
      {/* header */}
      <div className={classes.header}>
        <Typography variant="TS">Edit Option</Typography>
        <SvgClose
          cursor={"pointer"}
          onClick={() => {
            onClose(false),
              dispatch({
                type: "UPDATE_ADD_TO_CART_DATA",
                payload: {
                  selectedProduct: null,
                },
              });
          }}
          viewBox="0 0 30 30"
          width={30}
          height={30}
        />
      </div>
      {/* body */}
      <div className={classes.modelBox}>
        {/* product details */}
        <div className={classes.productDiv}>
          <div className={classes.imageContainer}>
            <img
              className={classes.fashionStyle}
              src={currentImage || ""}
              alt=""
            />
          </div>
          <div className={classes.contentsDiv}>
            <Typography variant="TS">{store.addToCartInternal.selectedProduct?.products[0]?.name}</Typography>
            <Typography variant="BM">{price?.price * quantity}</Typography>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.buttonStyle}
                leftIcon={
                  <SvgAdd
                    className={classes.addColor}
                    onClick={() => handleQuantityChange("decrease")}
                  />
                }
                rightIcon={
                  <SvgAdd
                    className={classes.addColor}
                    onClick={() => handleQuantityChange("increase")}
                  />
                }
                text={quantity}
              ></Button>
            </div>
          </div>
        </div>
        {/* color and size details */}
        <div className={classes.colorSection}>
          <div className={classes.colorcont}>
            <Typography className={classes.lightColor} variant="BM">
              Color:
            </Typography>
            <Typography className={classes.blackColor} variant="BM">
              {selectedColor?.name || selectedColor?.color?.name}
            </Typography>
          </div>
          {/* color options */}
          <div className={classes.colorDiv}>
            {store.addToCartInternal.selectedProduct?.colors?.map(
              (dat: any, index: number) => {
                const thumbnailAttachments =
                  dat?.color?.attachments?.filter(
                    (attachment: any) => attachment.thumbnail === true
                  ) || "";
                return (
                  <div
                    onClick={() => handleColorChange(dat)}
                    key={index}
                    className={clsx(classes.ProductImgDiv, {
                      [classes.ProductBoder]:
                        dat.color?.name === selectedColor?.color?.name,
                    })}
                  >
                    <img
                      src={thumbnailAttachments[0]?.fileUrl}
                      alt=""
                      className={classes.ProductImg}
                    />
                  </div>
                );
              }
            )}
          </div>

          {/* sizes  */}
          <div className={classes.colorcont}>
            <Typography className={classes.lightColor} variant="BM">
              Size:
            </Typography>
            <Typography className={classes.blackColor} variant="BM">
              {selectedSize?.sizeVariant}
            </Typography>
          </div>
          {/* Sizes Section */}
          <div className={classes.sizedDiv}>
            {filteredSizes?.map((size: any) => (
              <div
                key={size?.id}
                onClick={() => handleSizeChange(size)}
                className={clsx(classes.sizeStyle, {
                  [classes.activeStatus]:
                    selectedSize?.sizeVariant === size?.sizeVariant,
                })}
              >
                <Typography variant="BM">{size?.sizeVariant}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* add to cart button */}
      <div className={classes.btnCont}>
        <Button className={classes.btnStyle} onClick={handleSubmit} text={"Add to Cart"}></Button>
      </div>
    </CommonModel>
  );
};

export default CartEditModule;
