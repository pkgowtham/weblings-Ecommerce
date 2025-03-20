import SvgClose from "../../custom-icons/Close";
import Typography from "../typography/component";
import { useStyle } from "./indexstyle";
import fashion from "../../assets/images/fashionwhite.jpg";
import Button from "../button";
import SvgAdd from "../../custom-icons/Add";
import SvgEdit from "../../custom-icons/Edit";
import SvgDelete from "../../custom-icons/Delete";
import SvgApps from "../../custom-icons/Apps";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartEditModule from "../cartEditModule";

interface ShoppingCartProps {
  onClose: (value: boolean) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onClose }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [isEditModule,setIsEditModule] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<any>(1);

  //   handle quantity
  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev: any) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  // navigate
  const handleNavigate = (type:string) =>{
    if(type === "viewcart"){
      navigate("/mainlayout/shopingcartviewpage")
    } else if (type === "checkout"){
      navigate("/mainlayout/paymentpage")
    }
  }
  return (
    <div className={classes.cartContainer}>
      {/* header */}
      <div className={classes.cartHeader}>
        <Typography variant="TS">Shopping Cart (1)</Typography>
        <SvgClose
          viewBox="0 0 30 30"
          cursor={"pointer"}
          width={30}
          height={30}
          onClick={() => onClose(false)}
        />
      </div>
      {/* shipping div */}
      <div className={classes.shippingDiv}>
        <div className={classes.divider}></div>
        <Typography variant="BM">
          Spend $70.00 more to enjoy Free shipping!
        </Typography>
      </div>
      {/* time */}
      <div className={classes.timeDiv}>
        <Typography variant="BS">
          You're out of time! Checkout now to avoid losing your order!
        </Typography>
      </div>
      {/* cartitems details */}
      <div className={classes.cartItems}>
        <div className={classes.imageContainer}>
          <img src={fashion} alt="" className={classes.imageStyle} />
        </div>
        {/* contents */}
        <div className={classes.contentsContainer}>
          <div>
            <Typography variant="TS">
              white Basic Unpatterned T-shirt
            </Typography>
          </div>
          <div>
            <Typography variant="BS">Color: white / Size: S</Typography>
          </div>
          <div>
            <Typography variant="BM">$80.00</Typography>
          </div>
          <div className={classes.countContaier}>
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
        {/* edit delete options */}
        <div>
          <SvgDelete cursor={'pointer'} />
          <SvgEdit cursor={'pointer'} onClick={()=>setIsEditModule(!isEditModule)} />
        </div>
      </div>
      {/* cart icons */}
      <div className={classes.cartIcons}>
        <div className={classes.leftDiv}>
          <SvgApps />
        </div>
        <div className={classes.centerDiv}>
          <SvgApps />
        </div>
        <div className={classes.rightDiv}>
          <SvgApps />
        </div>
      </div>
      {/* button cart */}
      <div className={classes.buttonCartContainer}>
        <div className={classes.subTotal}>
          <Typography variant="TS">SubTotal</Typography>
          <Typography variant="TS">$80.00</Typography>
        </div>
        <div className={classes.checkBox}>
          <input type="checkbox" />
          <Typography className={classes.lightCOlor} variant="BS">
            I agree with
          </Typography>
          <Typography className={classes.blackColor} variant="BM">
            {" "}
            Terms & Conditions
          </Typography>
        </div>
        <div className={classes.btnDiv}>
          <Button onClick={()=>handleNavigate("viewcart")} className={classes.cartStyle} text="View Cart"></Button>
          <Button onClick={()=>handleNavigate("checkout")} className={classes.viewStyle} text="CheckOut"></Button>
        </div>
      </div>
      {/* cart edit module */}
      {isEditModule && <CartEditModule onClose={setIsEditModule}/>}
    </div>
  );
};

export default ShoppingCart;
