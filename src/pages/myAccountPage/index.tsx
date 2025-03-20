import { Outlet, useNavigate } from "react-router-dom";
import Typography from "../../component/typography/component";
import { useStyle } from "./indexstyle";

const accountData = [
  { id: 1, name: "Dashboard",path:"/mainlayout/myaccountpage/accountdetails" },
  { id: 1, name: "Your addresses",path:"/mainlayout/myaccountpage/addressdetails" },
  { id: 1, name: "Your wishlist",path:"/mainlayout/wishlistpage" },
  { id: 1, name: "Log Out" },
];

const MyAccountPage = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  //   navigate
  const handleNavigate = (path?:string) => {
    if(path) {
      navigate(path)
    }
  };
  return (
    <div className={classes.mainContainer}>
      {/* header section */}
      <div className={classes.headerSection}>
        <div className={classes.contentOne}>
          <Typography
             onClick={() => handleNavigate("/mainlayout/home")}
            className={classes.lightColor}
            variant="BS"
          >
            Home
          </Typography>
          <div className={classes.dotStyle}></div>
          <Typography variant="BM">Account</Typography>
        </div>
        <Typography variant="HS">My Account</Typography>
      </div>
      {/* body section */}
      <div className={classes.bodySection}>
        <div className={classes.fullSection}>
          {/* dash board */}
          <div className={classes.dashBoard}>
            {accountData.map((data: any) => (
              <div className={classes.nameDiv}>
                <Typography onClick={()=>handleNavigate(data.path)} className={classes.textColor} variant="BM">
                  {data.name}
                </Typography>
              </div>
            ))}
          </div>
          <div className={classes.contents}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
