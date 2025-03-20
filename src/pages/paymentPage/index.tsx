import React, { useState } from "react";
import { useStyle } from "./indexstyle";
import shop from "../../assets/icons/svg.png";
import razor from "../../assets/icons/razorpay.png";
import cash from "../../assets/icons/cash.png";
import van from "../../assets/icons/van.png";
import payment from "../../assets/icons/payment.png";
import downarrow from "../../assets/icons/svg-path.png";
import clsx from "clsx";
import Typography from "../../component/typography/component";

const PaymentPage: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { PaymentData } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("razorpay");
  const handlePaymentChange = (event:any)=>{
    setSelectedPayment(event.target.value)
  }
  // check box state
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className={classes.PaymentContainer}>
      <div className={classes.PaymentWrapper}>
        <div className={classes.ProductCardContainer}>
          <div className={classes.Nav}>
            <div className={classes.LogoDiv}>
              <div className={classes.ShopLogoDiv}>
                <img src={shop} alt="" className={classes.ShopLogo} />
              </div>
              <div>
                <Typography variant="TS">Product</Typography>
              </div>
            </div>
            <div className={classes.ArrowLogoDiv}>
              <img src={downarrow} alt="" className={classes.ArrowLogo} />
            </div>
          </div>
          <div className={classes.ProductContainer}>
            <div className={classes.Header}>
              <div>
                <Typography variant="BS">Product</Typography>
              </div>
              <div>
                <Typography variant="BS">Quantity</Typography>
              </div>
              <div>
                <Typography variant="BS">Total</Typography>
              </div>
            </div>
            {PaymentData?.data?.map((dat: any, idx: number) => (
              <div key={idx} className={classes.ProductDiv}>
                <div className={classes.LogoContainer}>
                  <div className={classes.FashionImgDiv}>
                    <img src={dat.logo} alt="" className={classes.FashionImg} />
                  </div>
                  <div>
                    <div>
                      <Typography variant="TS">{dat.title}</Typography>
                    </div>
                    <div>
                      <Typography variant="LXS">{dat.subtext}</Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.QuantityContainer}>
                  <div className={classes.SubDiv}>
                    <img src={dat.sub} alt="" className={classes.SubImg} />
                  </div>
                  <div>
                    <Typography variant="TS">1</Typography>
                  </div>
                  <div className={classes.AddDiv}>
                    <img src={dat.add} alt="" className={classes.AddImg} />
                  </div>
                </div>
                <div className={classes.AmountContainer}>
                  <Typography variant="TS">{dat.amount}</Typography>
                </div>
              </div>
            ))}
            <div className={classes.ContentContainer}>
              <div className={classes.Content}>
                <div>
                  <Typography variant="TS">Total</Typography>
                </div>
                <div>
                  <Typography variant="TS">$ 400.00</Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className={classes.BtnStyle}>Proceed to Delivery</button>
          </div>
        </div>
        <div className={classes.OrderContainer}>
          <div>
            <Typography variant="TS">Order Summary</Typography>
          </div>
          <div className={classes.OrderDiv}>
            <div className={classes.Header}>
              <div>
                <Typography variant="BS">Product</Typography>
              </div>
              <div>
                <Typography variant="BS">Quantity</Typography>
              </div>
              <div>
                <Typography variant="BS">Total</Typography>
              </div>
            </div>
            {PaymentData?.order?.map((order: any, idx: number) => (
              <div key={idx}>
                <div className={classes.OrderContent}>
                  <div className={classes.OrderImgDiv}>
                    <div className={classes.LogoWrapper}>
                      <img
                        src={order.logo}
                        className={classes.OrderImg}
                        alt=""
                      />
                      <div>
                        <div>
                          <Typography variant="BS">{order.title}</Typography>
                        </div>
                        <div>
                          <Typography variant="BS">{order.subtext}</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography variant="TS">1</Typography>
                  </div>
                  <div>
                    <Typography variant="TS">{order.amount}</Typography>
                  </div>
                </div>
              </div>
            ))}
            <div className={classes.TotalDiv}>
              <div>
                <Typography variant="TS">Total</Typography>
              </div>
              <div>
                <Typography variant="TS">$ 400.00</Typography>
              </div>
            </div>
            <div className={classes.Delevery}>
              <div>
                <Typography variant="TS">Delevering to</Typography>
              </div>
              <div>
                <Typography variant="LXS">"Address"</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.FormContainer}>
        <div className={classes.Nav}>
          <div className={classes.LogoDiv}>
            <div className={classes.ShopLogoDiv}>
              <img src={van} alt="" className={classes.ShopLogo} />
            </div>
            <div>
              <Typography variant="TS">Delivery</Typography>
            </div>
          </div>
          <div className={classes.ArrowLogoDiv}>
            <img src={downarrow} alt="" className={classes.ArrowLogo} />
          </div>
        </div>
        <div className={classes.NameDiv}>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>First name</label>
            <input type="text" id="firstname" className={classes.Input} />
          </div>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>Last name</label>
            <input type="text" id="lastname" className={classes.Input} />
          </div>
        </div>
        <div className={classes.NameDiv}>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>Mobile number</label>
            <input type="text" id="mobilenumber" className={classes.Input} />
          </div>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>Zip code</label>
            <input type="text" id="zipcode" className={classes.Input} />
          </div>
        </div>
        <div className={classes.NameDiv}>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>Country</label>
            <input
              type="text"
              id="country"
              placeholder="Select city"
              className={classes.Input}
            />
          </div>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>State</label>
            <input
              type="text"
              id="State"
              className={classes.Input}
              placeholder="Select state"
            />
          </div>
        </div>
        <div className={classes.NameDiv}>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>City</label>
            <input
              type="text"
              id="city"
              placeholder="Select city"
              className={classes.Input}
            />
          </div>
          <div className={classes.InputDiv}>
            <label className={classes.Label}>Address line</label>
            <input
              type="text"
              id="address"
              className={classes.Input}
              placeholder="Enter address"
            />
          </div>
        </div>
        <div className={classes.CheckBox}>
          <div className={classes.CheckBoxWrapper}>
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">
              <Typography>
                <strong>Save this information for next time</strong>
              </Typography>
            </label>
          </div>
          <div className={classes.CheckBoxButton}>
            <button
              disabled={!isChecked}
              className={clsx(classes.ButtonStyle, {
                [classes.checked]: isChecked,
              })}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <div className={classes.PayContainer}>
        <div className={classes.Nav}>
          <div className={classes.LogoDiv}>
            <div className={classes.ShopLogoDiv}>
              <img src={payment} alt="" className={classes.ShopLogo} />
            </div>
            <div>
              <Typography variant="TS">Payment Method</Typography>
            </div>
          </div>
        </div>
        <div className={classes.RazorContainer}>
          <div className={classes.PaymentDIv}>
            <div>
          <input
            type="radio"
            name="payment"
            value="razorpay"
            checked={selectedPayment === "razorpay"}
            onChange={handlePaymentChange}
          />
            </div>
          <div className={classes.PaymentText}>
            Razor pay
          </div>
          </div>
          <div className={classes.PaymentIconDiv}>
          <img
              src={razor}
              alt="Razorpay"
              className={classes.PaymentIcon}
            />
          </div>
        </div>
        <div className={classes.CashContainer}>
        <div className={classes.CashDIv}>
            <div>
          <input
            type="radio"
            name="payment"
            value="razorpay"
            checked={selectedPayment === "razorpay"}
            onChange={handlePaymentChange}
          />
            </div>
          <div className={classes.CashText}>
            Cash on delivery
          </div>
          </div>
          <div className={classes.CashIconDiv}>
          <img
              src={cash}
              alt="Razorpay"
              className={classes.CashIcon}
            />
          </div>
        </div>
        <div>
          <button className={classes.PaymentBtn}>Pay $ 800</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
