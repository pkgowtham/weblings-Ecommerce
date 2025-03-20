import Button from "../../../component/button";
import Typography from "../../../component/typography/component";
import { useStyle } from "./indexstyle";

const maildatas = [
  { id: 1, name: "Name :", gmail: "adam@gmail.com" },
  { id: 1, name: "Email :", gmail: "adam@gmail.com" },
  { id: 1, name: "Contact :", gmail: "1234567890" },
  ,
];

const AccountDetails = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.welcomeDiv}>
        <Typography variant="BM">Welcome</Typography>
        <Typography variant="BM">adam@gmail.com</Typography>
        <Typography variant="BM">(Not? c c Log Out)</Typography>
      </div>
      {/* account details */}
      <div className={classes.accountDiv}>
        <Typography className={classes.detailsColor} variant="TS">
          Account details
        </Typography>
        <div className={classes.accountDetails}>
          {maildatas.map((data: any) => (
            <div className={classes.contentDiv}>
              <Typography variant="BL">{data.name}</Typography>
              <Typography className={classes.lightColor} variant="BM">
                {data.gmail}
              </Typography>
            </div>
          ))}
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.buttonStyle}
            text={"View addresses(1)"}
          ></Button>
        </div>
      </div>
      {/* orderhistory */}
      <div>
        <Typography className={classes.detailsColor} variant="TS">Order history</Typography>
        <div className={classes.emptyOrder}>
            <Typography className={classes.greenColor} variant="BS">
            Make your first order. You haven't placed any orders yet.
            </Typography>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
