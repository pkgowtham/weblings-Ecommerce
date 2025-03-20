import React from 'react'
import { useStyle } from './indexstyle'
import circle from '../../assets/icons/circle_check.svg'
import van from '../../assets/icons/van.png'
import pay from '../../assets/icons/payment.png'
import Typography from '../../component/typography/component'

const SucessPage:React.FC<any> =(props):JSX.Element => {
    const classes = useStyle();
    const {SucessData} = props
  return (
    <div className={classes.MainContainer}>
        <div className={classes.SucessContainer}>
            <div className={classes.SetONe}>
                <div className={classes.CicleDiv}><img src={circle} alt='' className={classes.CirclImg}/></div>
                <div><Typography variant='HS'>Order Placed Sucessfully</Typography></div>
                <div className={classes.DateDiv}><Typography variant='BS'>Sep 11,2024</Typography></div>
                <div className={classes.IdDiv}><Typography variant='TS'>Order ID #22222256</Typography></div>
            </div>
            
            <div className={classes.ProductContainer}>
              <div className={classes.OrederText}><Typography variant='TS'>Order Details</Typography></div>
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
            {SucessData?.data?.map((dat: any, idx: number) => (
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
                  <div>
                    <Typography variant="TS">1</Typography>
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
            <div className={classes.Delivery}>
              <div className={classes.DeliveryDiv}>
                <div className={classes.VanDiv}><img src={van} alt='' className={classes.VanImg}/></div>
                <div><Typography variant='TS'>Delivery address</Typography></div>
                </div>
                <div className={classes.Text}><Typography variant='LXS'>"Address"</Typography></div>
            </div>
            <div className={classes.Payment}>
              <div className={classes.PaymentDiv}>
                <div className={classes.PayDiv}><img src={pay} alt='' className={classes.PayImg}/></div>
                <div><Typography variant='TS'>Payment</Typography></div>
                </div>
                <div className={classes.Text}><Typography variant='LXS'>"payment details"</Typography></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SucessPage