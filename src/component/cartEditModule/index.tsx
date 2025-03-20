import SvgClose from "../../custom-icons/Close";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import { useStyle } from "./indexstyle";
import fashion from "../../assets/images/fashion.jpg";
import Button from "../button";
import SvgAdd from "../../custom-icons/Add";
import { useState } from "react";
import { theme } from "../../../theme /theme";
import clsx from "clsx";

interface CartEditModuleProps {
  onClose: any;
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

const CartEditModule: React.FC<CartEditModuleProps> = ({ onClose }) => {
  const classes = useStyle();
  const [selectedColor, setSelectedColor] = useState<string>("#E00028");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<any>(1);

  //   handle quantity
  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev: any) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };
  return (
    <CommonModel className={classes.cartContainer}>
      {/* header */}
      <div className={classes.header}>
        <Typography variant="TS">Edit Option</Typography>
        <SvgClose
          cursor={"pointer"}
          onClick={() => onClose(false)}
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
            <img className={classes.fashionStyle} src={fashion} alt="" />
          </div>
          <div className={classes.contentsDiv}>
            <Typography variant="TS">Short Dress With Knotted Skirt</Typography>
            <Typography variant="BM">$168.00</Typography>
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
              Green
            </Typography>
          </div>
          {/* color options */}
          <div className={classes.colorDiv}>
            {colorcode[0]?.color?.map((color: string, index: number) => (
              <div
                key={index}
                style={{
                  border:
                    selectedColor === color
                      ? `1px solid ${theme.light.neutral.onSurface.title}`
                      : "2px solid transparent",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <div
                  className={clsx(classes.ColorStyle, {
                    [classes.Red]: color === "#E00028",
                    [classes.war]: color === "#B15600",
                    [classes.green]: color === "#36A040",
                    [classes.blue]: color === "#0072C4",
                    [classes.purple]: color === "#9E29FE",
                    [classes.gray]: color === "#6F6F6F",
                  })}
                  onClick={() => setSelectedColor(color)}
                />
              </div>
            )) ?? []}{" "}
          </div>

          {/* sizes  */}
          <div className={classes.colorcont}>
            <Typography className={classes.lightColor} variant="BM">
              Size:
            </Typography>
            <Typography className={classes.blackColor} variant="BM">
              {selectedSize}
            </Typography>
          </div>
          {/* Sizes Section */}
          <div className={classes.sizedDiv}>
            {colorcode[1]?.size?.map((size: any) => (
              <div
                onClick={() => setSelectedSize(size)}
                className={clsx(classes.sizeStyle, {
                  [classes.activeStatus]: selectedSize === size,
                })}
              >
                <Typography variant="BM">{size}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* add to cart button */}
      <div className={classes.btnCont}>
        <Button className={classes.btnStyle} text={"Add to Cart"}></Button>
      </div>
    </CommonModel>
  );
};

export default CartEditModule;
