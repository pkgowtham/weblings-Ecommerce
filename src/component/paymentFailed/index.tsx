import Typography from "../typography/component";
import { theme } from "../../../theme/theme";
import Button from "../button";
import { useStyle } from "./style";
import SvgCircleX from "../../custom-icons/CircleX";

const PaymentFailed = () => {
  const classes = useStyle();
  const pref = {
    head: "Example.com",
    paymentDetail: [
      {
        id: 1,
        name: "Domain Transferring",
        price: "$12 / year",
      },
      {
        id: 2,
        name: "DNS",
        price: "$12 / year",
      },
    ],
    essential: {
      name: "Essential Plan",
      price: "Free",
    },
    Total: {
      name: "Total",
      price: "$24",
    },
  };

  return (
    <div className={classes.paymentMainCon}>
      <div className={classes.paymentHead}>
        <span><SvgCircleX /></span>
        <Typography
          variant="HS"
          style={{ color: theme.light.neutral.onSurface.title }}
        >
          Payment Unsuccessfull
        </Typography>
      </div>
      <div className={classes.paymentContent}>
        <Typography
          variant="BS"
          style={{ color: theme.light.neutral.onSurface.dark }}
        >
          Transaction ID : XXXXXXXXXXXXXXX
        </Typography>
        <div className={classes.reviewContent}>
          <div className={classes.reviewContentHeadCon}>
            <div className={classes.reviewContentHead}>
              <Typography
                variant="BS"
                style={{ color: theme.light.neutral.onSurface.title }}
              >
                {pref.head}
              </Typography>
              {pref.paymentDetail.map((item, index: number) => (
                <div key={index} className={classes.reviewContentSpace}>
                  <Typography
                    variant="BS"
                    style={{ color: theme.light.neutral.onSurface.dark }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="BS"
                    style={{ color: theme.light.neutral.onSurface.dark }}
                  >
                    {item.price}
                  </Typography>
                </div>
              ))}
            </div>
            <div className={classes.reviewContentSpace}>
              <Typography
                variant="BS"
                style={{ color: theme.light.neutral.onSurface.dark }}
              >
                {pref.essential.name}
              </Typography>
              <Typography
                variant="BS"
                style={{ color: theme.light.neutral.onSurface.dark }}
              >
                {pref.essential.price}
              </Typography>
            </div>
          </div>
          <div style={{ width: "100%" }}>{/* <Divider /> */}</div>

          <div className={classes.reviewContentSpace}>
            <Typography
              variant="BS"
              style={{ color: theme.light.neutral.onSurface.dark }}
            >
              {pref.Total.name}
            </Typography>
            <Typography
              variant="BS"
              style={{ color: theme.light.neutral.onSurface.dark }}
            >
              {pref.Total.price}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
