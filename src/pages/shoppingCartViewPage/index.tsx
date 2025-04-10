import Typography from "../../component/typography/component";
import { useStyle } from "./indexstyle";
import fashion from "../../assets/images/fashion.jpg";
import Button from "../../component/button";
import SvgVerified from "../../custom-icons/Verified";
import TextArea from "../../component/textArea/textArea";
import Input from "../../component/input";
import payment from "../../assets/images/payment.jpg";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgAdd from "../../custom-icons/Add";
import { useEffect, useRef, useState } from "react";
import { HideComponents } from "../../component/hideComponents";
import SvgDelete from "../../custom-icons/Delete";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";
import SvgRemove from "../../custom-icons/Remove";

const reviewCard = [
  {
    id: 1,
    logo: <SvgVerified />,
    title: "Have Questions?",
    subtitle: "Our experts are here to help! Call us free.",
  },
  {
    id: 2,
    logo: <SvgVerified />,
    title: "Have Questions?",
    subtitle: "Our experts are here to help! Call us free.",
  },
  {
    id: 3,
    logo: <SvgVerified />,
    title: "Have Questions?",
    subtitle: "Our experts are here to help! Call us free.",
  },
];
const sugesstionproducts = [
  {
    id: 1,
    logo: "",
    title: "Plain Cotton UnderShit-Wide Neck",
    pricetag: "$78.00",
  },
  {
    id: 1,
    logo: "",
    title: "Plain Cotton UnderShit-Wide Neck",
    pricetag: "$78.00",
  },
  {
    id: 1,
    logo: "",
    title: "Plain Cotton UnderShit-Wide Neck",
    pricetag: "$78.00",
  },
  {
    id: 1,
    logo: "",
    title: "Plain Cotton UnderShit-Wide Neck",
    pricetag: "$78.00",
  },
];

const ShopingCartPage = () => {
  const classes = useStyle();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();
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

  //Add to cart getlist after create or delete
  useEffect(() => {
    if(store.productAddToCart.isSuccessCreate || store.productAddToCart.isSuccessDestroy || store.productAddToCart.isSuccessUpdate){
      dispatch({
        type: "PRODUCT_ADD_TO_CART_GETLIST_API_REQUEST",
        payload: {
          url: "/addToCart",
          method: "GET",
        },
      });
      dispatch({
        type:"PRODUCT_ADD_TO_CART_CREATE_API_CLEAR"
      })
      dispatch({
        type:"PRODUCT_ADD_TO_CART_DESTROY_API_CLEAR"
      })
      dispatch({
        type:"PRODUCT_ADD_TO_CART_UPDATE_API_CLEAR"
      })
    }
  }, [deepGet(store,"productAddToCart.isSuccessCreate"), deepGet(store,"productAddToCart.isSuccessDestroy"), deepGet(store,"productAddToCart.isSuccessUpdate")])

  //Update Add to cart
  useEffect(() => {
    if (quantity && data) {
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
    <div className={classes.mainContainer}>
      {/* header section */}
      <div className={classes.headerSection}>
        <div className={classes.contentOne}>
          <Typography className={classes.lightColor} variant="BS">
            Home
          </Typography>
          <div className={classes.dotStyle}></div>
          <Typography variant="BM">Your Shopping Cart</Typography>
        </div>
        <Typography variant="HS">Shopping Cart</Typography>
        <Typography className={classes.para} variant="BM">
          Review your selected items before purchase. Enjoy a seamless shopping
          experience!
        </Typography>
      </div>
      {/* offer div */}
      <div className={classes.outerDiv}>
        <div className={classes.offerDiv}>
          <Typography variant="BM">
            You're out of time! Checkout now to avoid losing your order!
          </Typography>
        </div>
      </div>
      {/* product details sections */}
      <div className={classes.mainProductContainer}>
        {/* product contents left side */}
        <div className={classes.leftContainer}>
          <HideComponents hideOn="mobile">
            <div className={classes.tableContent}>
              {/* table */}
              <table className={classes.tableContainer}>
                {/* table header contents */}
                <thead className={classes.tableHead}>
                  <tr>
                    <th className={classes.th}>
                      <Typography variant="BM">Product</Typography>
                    </th>
                    <th className={classes.th}>
                      <Typography variant="BM">Price</Typography>
                    </th>
                    <th className={classes.th}>
                      <Typography variant="BM">Quantity</Typography>
                    </th>
                    <th className={classes.th}>
                      <Typography variant="BM">Total</Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {store.productAddToCart.dataGetList?.data?.map(
                    (item: any, idx: number) => {
                      const selectedPrice = item?.addToCartWithDetail.find(
                        (variant: any) =>
                          variant.color.id === item?.color.id &&
                          variant.size.id === item?.size?.id
                      );
                      return (
                        <tr>
                          <td className={classes.tdone}>
                            <div className={classes.imageContentContainer}>
                              <div className={classes.imageDiv}>
                                <img
                                  className={classes.fashionImage}
                                  src={item?.color?.attachments[0]?.fileUrl}
                                  alt=""
                                />
                              </div>
                              <div className={classes.contents}>
                                <Typography variant="BM">
                                  {item?.products[0]?.name}
                                </Typography>
                                <Typography
                                  className={classes.lightColor}
                                  variant="BM"
                                >
                                  Color: {item?.color?.name} / Size:{" "}
                                  {item?.size?.sizeVariant}
                                </Typography>
                                <Typography
                                  className={classes.remove}
                                  variant="LS"
                                  onClick={()=>handleProductRemove(item?.id)}
                                >
                                  Remove
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={classes.td}>
                            <Typography variant="BM">
                            {(selectedPrice?.price / selectedPrice?.quantity).toFixed(0)}
                            </Typography>
                          </td>
                          <td className={classes.td}>
                            <Button
                              className={classes.btnStyle}
                              rightIcon={
                                <SvgAdd
                                  onClick={() =>
                                    handleQuantityChange(item, "increase")
                                  }
                                  className={classes.svgAdd}
                                />
                              }
                              leftIcon={
                                <SvgRemove
                                  onClick={() =>
                                    handleQuantityChange(item, "decrease")
                                  }
                                />
                              }
                              text={selectedPrice?.quantity}
                            ></Button>
                          </td>
                          <td className={classes.td}>
                            <Typography variant="BM">
                              {selectedPrice?.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
              {/* price tags */}
              <div className={classes.priceTags}>
                <input type="checkbox" />
                <Typography variant="BM">
                  Please wrap the product carefully. Fee is only $10.00. (You
                  can choose or not)
                </Typography>
              </div>
              {/* review cards */}
              <div className={classes.reviewCardsContainer}>
                {reviewCard.map((data: any) => (
                  <div className={classes.cardStyle}>
                    <div>{data.logo}</div>
                    <div>
                      <Typography variant="TS">{data.title}</Typography>
                    </div>
                    <div>
                      <Typography variant="BS">{data.subtitle}</Typography>
                    </div>
                  </div>
                ))}
              </div>
              {/* poduct suggestion */}
              {/* <div className={classes.suggestionProduct}>
              <div>
              <Typography variant="TS">You may also like...</Typography>
              </div>
              <div className={classes.sugesstionproducts}>
              {sugesstionproducts.map((data:any)=>(
                <div className={classes.productCard}>
                  <div className={classes.fashionImageDiv}>
                    <img className={classes.fashionIme} src={fashion} alt=""/>
                  </div>
                  <div>
                    <Typography variant="BM">{data.title}</Typography>
                    <Typography variant="BM">{data.pricetag}</Typography>
                  </div>
                </div>
              ))}
              </div>
            </div> */}
            </div>
          </HideComponents>

          {/* for mobile view */}
          <HideComponents showOnlyOn="mobile">
            {store.productAddToCart.dataGetList?.data?.map(
              (item: any, idx: number) => {
                const selectedPrice = item?.addToCartWithDetail.find(
                  (variant: any) =>
                    variant.color.id === item?.color.id &&
                    variant.size.id === item?.size?.id
                );
                return (
                  <div className={classes.cardDetails}>
                    <div className={classes.imgContainer}>
                      <img
                        className={classes.imgStyle}
                        src={item?.color?.attachments[0]?.fileUrl}
                        alt="logo"
                      />
                    </div>
                    <div className={classes.cardContents}>
                      <div className={classes.deleteDiv}>
                        <div>
                          <Typography variant="TS">
                            {item?.products[0]?.name}
                          </Typography>
                          <Typography
                            className={classes.lightColor}
                            variant="BM"
                          >
                            Color: {item?.color?.name} / Size:{" "}
                            {item?.size?.sizeVariant}
                          </Typography>
                        </div>
                        <div>
                          <SvgDelete />
                        </div>
                      </div>
                      <div className={classes.priceContainer}>
                        <Typography variant="TS">
                          {selectedPrice?.price}
                        </Typography>
                        <div>
                          <Button
                            className={classes.textButton}
                            leftIcon={
                              <SvgRemove
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
                  </div>
                );
              }
            )}
          </HideComponents>
        </div>

        <HideComponents showOnlyOn="mobile">
          <div className={classes.reviewCardsContainer}>
            {reviewCard.map((data: any) => (
              <div className={classes.cardStyle}>
                <div>{data.logo}</div>
                <div>
                  <Typography variant="TS">{data.title}</Typography>
                </div>
                <div>
                  <Typography variant="BS">{data.subtitle}</Typography>
                </div>
              </div>
            ))}
          </div>
        </HideComponents>
        {/* product forms section right side  */}
        <div className={classes.rightContainer}>
          {/* review cards */}

          <div className={classes.contentsDiv}>
            {/* free shipping div */}
            <div className={classes.freeShipingDiv}>
              <div className={classes.greenDivider}></div>
              <div className={classes.textContents}>
                <Typography variant="BM">
                  Congratulations! You've got free shipping!
                </Typography>
              </div>
            </div>
            {/* order textarea */}
            <div className={classes.ordernoteeDiv}>
              <Typography variant="BM">Add Order Note</Typography>
              <TextArea placeholder="Add order note" />
            </div>
            {/* forms */}
            <div className={classes.formContainer}>
              <div className={classes.inputFeilds}>
                <Typography variant="BM">Country/region</Typography>
                <Input type="text" placeholder="" />
              </div>
              <div className={classes.inputFeilds}>
                <Typography variant="BM">Country/region</Typography>
                <Input type="text" placeholder="" />
              </div>
              <div className={classes.inputFeilds}>
                <Typography variant="BM">Postal/ZIP code</Typography>
                <Input type="text" placeholder="Postal/ZIP code" />
              </div>
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.buttonStyle}
                  text={"Estimate Shipping"}
                ></Button>
              </div>
            </div>
            {/* subTotal */}
            <div className={classes.subTotalDiv}>
              <div className={classes.subTotal}>
                <Typography variant="TS">Subtotal:</Typography>
                <Typography variant="TS">
                  {store.productAddToCart.dataGetList?.data
                    ?.reduce((total: number, item: any) => {
                      const selectedPrice = item?.addToCartWithDetail.find(
                        (variant: any) =>
                          variant.color.id === item?.color.id &&
                          variant.size.id === item?.size?.id
                      );
                      return (
                        total +
                        (selectedPrice?.price || 0) * (item.quantity || 1)
                      );
                    }, 0)
                    .toFixed(2)}
                </Typography>
              </div>
              <Typography variant="BS">
                Taxes and shipping and discounts calculated at checkout
              </Typography>
            </div>
            {/* terms and conditions */}
            <div className={classes.termsAndConditionsDiv}>
              <div className={classes.checkBoxContainer}>
                <input type="checkbox" />
                <Typography className={classes.lightColor} variant="BS">
                  I agree with
                </Typography>
                <Typography className={classes.blackColor} variant="BS">
                  {" "}
                  Terms & Conditions
                </Typography>
              </div>
              <div className={classes.checkoutContainer}>
                <Button
                  className={classes.buttonStyle}
                  text={"CheckOut"}
                ></Button>
              </div>
            </div>
          </div>
          {/* delevery informations */}
          <div className={classes.informationsDiv}>
            <div className={classes.conditionDiv}>
              <Typography variant="TS">Delivery Information</Typography>
              <Typography className={classes.lightColor} variant="BS">
                Free returns within 15 days, please make sure the items are in
                undamaged condition.
              </Typography>
            </div>
            <div className={classes.conditionDiv}>
              <Typography variant="TS">Up to 30-Day Guarantee</Typography>
              <Typography className={classes.lightColor} variant="BS">
                Bad luck with your tights? Simply contact us within 30 days of
                receiving your order and we will replace them for free!
              </Typography>
            </div>
            <div className={classes.conditionDiv}>
              <Typography variant="TS">Payment Support</Typography>
              <div className={classes.imgDiv}>
                <img className={classes.paymentstyle} src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCartPage;
