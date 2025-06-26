import { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexStyle";
import Typography from "../typography/component";
import Button from "../button";
import SvgAdd from "../../custom-icons/Add";
import { useStore } from "../../store";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { deepGet } from "../../util/util";
import SvgRemove from "../../custom-icons/Remove";

const Table = () => {
  const classes = useStyle();
  const { store } = useStore();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useMiddlewareDispatch();
  const hasDispatched = useRef(false);
  const [data, setData] = useState<any>(null);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Plain Cotton Undershirt - Wide Neck",
      details: "Color: White / Size: S",
      price: 35.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Cotton Long-Sleeve Striped T-shirt",
      details: "Color: Grey / Size: S",
      price: 115.0,
      quantity: 1,
    },
  ]);

  const calculateTotal = (price: any, quantity: any) => {
    return (price * quantity).toFixed(2);
  };

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

  //Add to cart getlist after create or delete
  useEffect(() => {
    if (
      store.productAddToCart.isSuccessCreate ||
      store.productAddToCart.isSuccessDestroy ||
      store.productAddToCart.isSuccessUpdate
    ) {
      dispatch({
        type: "PRODUCT_ADD_TO_CART_GETLIST_API_REQUEST",
        payload: {
          url: "/addToCart",
          method: "GET",
        },
      });
      dispatch({
        type: "PRODUCT_ADD_TO_CART_CREATE_API_CLEAR",
      });
      dispatch({
        type: "PRODUCT_ADD_TO_CART_DESTROY_API_CLEAR",
      });
      dispatch({
        type: "PRODUCT_ADD_TO_CART_UPDATE_API_CLEAR",
      });
    }
  }, [
    deepGet(store, "productAddToCart.isSuccessCreate"),
    deepGet(store, "productAddToCart.isSuccessDestroy"),
    deepGet(store, "productAddToCart.isSuccessUpdate"),
  ]);

  //Update Add to cart
  useEffect(() => {
    if (quantity && data) {
      const getJoinId = data?.data.find(
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
            price: getJoinId?.price,
            addToCartWithDetailId: getJoinId?.id,
          },
        },
      });
    }
  }, [quantity, data]);

  // handle quantity
  const handleQuantityChange = (data: any, type: "increase" | "decrease") => {
    setQuantity((prev: any) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
    setData(data);
  };

  const handleProductRemove = (id: string) => {
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

  return (
    <div className={classes.shoppingCart}>
      <div className={classes.cartTable}>
        <div className={classes.cartHeader}>
          <Typography variant="BM" className={classes.headerProduct}>
            Product
          </Typography>
          <Typography variant="BM" className={classes.headerPrice}>
            Price
          </Typography>
          <Typography variant="BM" className={classes.headerQuantity}>
            Quantity
          </Typography>
          <Typography variant="BM" className={classes.headerTotal}>
            Total
          </Typography>
        </div>

        {store.productAddToCart.dataGetList?.data?.map(
          (item: any, idx: number) => {
            const selectedPrice = item?.addToCartWithDetail.find(
              (variant: any) =>
                variant.color.id === item?.color.id &&
                variant.size.id === item?.size?.id
            );
            return (
              <div className={classes.cartItem} key={item.id}>
                <div className={classes.itemProduct}>
                  <div className={classes.imageDiv}>
                    <img
                      className={classes.fashionImage}
                      src={item?.color?.attachments[0]?.fileUrl}
                      alt=""
                    />
                  </div>
                  <div className={classes.productDetailsDiv}>
                    <Typography variant="BM" className={classes.productName}>
                      {item?.products[0]?.name}
                    </Typography>
                    <Typography variant="BM" className={classes.productDetails}>
                      Color: {item?.color?.name} / Size:{" "}
                      {item?.size?.sizeVariant}
                    </Typography>
                    <Typography
                      className={classes.remove}
                      variant="LS"
                      onClick={() => handleProductRemove(item?.id)}
                    >
                      Remove
                    </Typography>
                  </div>
                </div>
                <div className={classes.itemPrice}>
                  <Typography variant="BM">
                    {(selectedPrice?.price / selectedPrice?.quantity).toFixed(
                      0
                    )}
                  </Typography>
                </div>
                <div className={classes.itemQuantity}>
                  <Button
                    className={classes.btnStyle}
                    rightIcon={
                      <SvgAdd
                        onClick={() => handleQuantityChange(item, "increase")}
                        className={classes.svgAdd}
                      />
                    }
                    leftIcon={
                      <SvgRemove
                        onClick={() => handleQuantityChange(item, "decrease")}
                      />
                    }
                    type="button"
                  >
                    <Typography variant="BM">{selectedPrice?.price}</Typography>
                  </Button>
                </div>
                <div className={classes.itemTotal}>
                  ${calculateTotal(item.price, item.quantity)}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Table;
