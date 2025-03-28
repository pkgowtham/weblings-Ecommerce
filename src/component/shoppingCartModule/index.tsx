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
import { useEffect, useRef, useState } from "react";
import CartEditModule from "../cartEditModule";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";

interface ShoppingCartProps {
  onClose: (value: boolean) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onClose }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();
  const [isEditModule, setIsEditModule] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<any>(1);
  const hasDispatched = useRef(false);
  const [data, setData] = useState<any>(null);

  //Add to cart getlist
  useEffect(() => {
    if (!hasDispatched.current) {
      dispatch({
        type: "PRODUCT_ADD_TO_CART_GETLIST_API_REQUEST",
        payload: {
          url: "/addToCart",
          method: "GET",
        },
      });
      hasDispatched.current = true;
    }
  }, []);

  //getlist after delete and update
  useEffect(() => {
    if (
      store.productAddToCart.isSuccessUpdate ||
      store.productAddToCart.isSuccessDestroy
    ) {
      dispatch({
        type: "PRODUCT_ADD_TO_CART_GETLIST_API_REQUEST",
        payload: {
          url: "/addToCart",
          method: "GET",
        },
      });
      setIsEditModule(false);
      dispatch({
        type: "PRODUCT_ADD_TO_CART_UPDATE_API_CLEAR",
      });
      dispatch({
        type: "PRODUCT_ADD_TO_CART_DESTROY_API_CLEAR",
      });
    }
  }, [
    deepGet(store, "productAddToCart.isSuccessUpdate"),
    deepGet(store, "productAddToCart.isSuccessDestroy"),
  ]);

  //Update Add to cart
  useEffect(() => {
    if(quantity && data){

      const getJoinId = data?.addToCartWithDetail.find(
        (variant: any) =>
          variant.color?.id === data.color?.id &&
          variant.size?.id === data.size?.id
      );

        dispatch({
          type: "PRODUCT_ADD_TO_CART_UPDATE_API_REQUEST",
          payload: {
            url: "/addToCart",
            method: "PUT",
            query: {
              id: data?.id,
            },
            body: {
              quantity: quantity,
              addToCartWithDetailId: getJoinId?.id,
            },
          },
        });
    }
  }, [quantity,data])
  

  //   handle quantity
  // const handleQuantityChange = (type: "increase" | "decrease") => {
  //   setQuantity((prev: any) =>
  //     type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
  //   );
  // };

  // navigate
  const handleNavigate = (type: string) => {
    if (type === "viewcart") {
      navigate("/mainlayout/shopingcartviewpage");
    } else if (type === "checkout") {
      navigate("/mainlayout/paymentpage");
    }
  };

  const handleEdit = (data: any) => {
    dispatch({
      type: "UPDATE_ADD_TO_CART_DATA",
      payload: {
        selectedProduct: data,
      },
    });
    setIsEditModule(true);
  };

  const handleDelete = (id: string) => {
    dispatch({
      type: "PRODUCT_ADD_TO_CART_DESTROY_API_REQUEST",
      payload: {
        url: "/addToCart",
        method: "DELETE",
        query: {
          id: id,
        },
      },
    });
  };

  const handleQuantityChange = (data: any, type: "increase" | "decrease") => {
    setQuantity((prev: any) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
    setData(data)
  };

  return (
    <div className={classes.cartContainer}>
      {/* header */}
      <div className={classes.cartHeader}>
        <Typography variant="TS">Shopping Cart ({`${store.productAddToCart.dataGetList?.data?.length}`})</Typography>
        <SvgClose
          viewBox="0 0 30 30"
          cursor={"pointer"}
          width={30}
          height={30}
          onClick={() =>
            dispatch({
              type: "OPEN_ADD_TO_CART_MODAL",
              payload: {
                isAddToCart: false,
              },
            })
          }
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          width: "100%",
          height: "30%",
          overflow: "auto",
          scrollbarWidth:'thin'
        }}
      >
        {store.productAddToCart.dataGetList?.data?.map(
          (item: any, idx: number) => {
            const selectedPrice = item?.addToCartWithDetail.find(
              (variant: any) =>
                variant.color.id === item?.color.id &&
                variant.size.id === item?.size?.id
            );

            // const attachment = item.products.attachments.map((item:any)=>item.thumbnail === false)
            return (
              <div key={item?.id} className={classes.cartItems}>
                <div className={classes.imageContainer}>
                  <img
                    src={item.color?.attachments[0]?.fileUrl}
                    alt=""
                    className={classes.imageStyle}
                  />
                </div>
                {/* contents */}
                <div className={classes.contentsContainer}>
                  <div>
                    <Typography variant="TS">
                      {item.products[0]?.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="BS">
                      Color: {item.color?.name} / Size: {item.size?.sizeVariant}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="BM">{selectedPrice?.price}</Typography>
                  </div>
                  <div className={classes.countContaier}>
                    <div className={classes.buttonContainer}>
                      <Button
                        className={classes.buttonStyle}
                        leftIcon={
                          <SvgAdd
                            className={classes.addColor}
                            onClick={() =>
                              handleQuantityChange(item, "decrease")
                            }
                          />
                        }
                        rightIcon={
                          <SvgAdd
                            className={classes.addColor}
                            onClick={() =>
                              handleQuantityChange(item, "increase")
                            }
                          />
                        }
                        text={quantity}
                      ></Button>
                    </div>
                  </div>
                </div>
                {/* edit delete options */}
                <div>
                  <SvgDelete
                    cursor={"pointer"}
                    onClick={() => handleDelete(item.id)}
                  />
                  <SvgEdit
                    cursor={"pointer"}
                    onClick={() => handleEdit(item)}
                  />
                </div>
              </div>
            );
          }
        )}
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
          <Button
            onClick={() => handleNavigate("viewcart")}
            className={classes.cartStyle}
            text="View Cart"
          ></Button>
          <Button
            onClick={() => handleNavigate("checkout")}
            className={classes.viewStyle}
            text="CheckOut"
          ></Button>
        </div>
      </div>
      {/* cart edit module */}
      {isEditModule && <CartEditModule onClose={setIsEditModule} />}
    </div>
  );
};

export default ShoppingCart;
