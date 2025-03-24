import React, { useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import fashion from "../../assets/images/fashion.jpg";
import CommonModel from "../commonModal";
import model from "../../assets/images/model.jpg";
import SvgClose from "../../custom-icons/Close";

const Shop: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const [isModuleOpen,setIsModuleOpen] = useState<boolean>(false);
  const { ShopData } = props;

  return (
    <div className={classes.MainContainer}>
      <div className={classes.Title}>
        <div>
          <Typography variant="HM">Shop by Gram</Typography>
        </div>
        <div>
          <Typography variant="BS">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </Typography>
        </div>
      </div>
      <div className={classes.Wrapper}>
        <div onClick={()=>setIsModuleOpen(!isModuleOpen)} className={classes.CardDiv}>
          <img src={fashion} alt="" className={classes.FashionImg} />
        </div>
        <div className={classes.CardDiv}>
          <img src={fashion} alt="" className={classes.FashionImg} />
        </div>
        <div className={classes.CardDiv}>
          <img src={fashion} alt="" className={classes.FashionImg} />
        </div>
        <div className={classes.CardDiv}>
          <img src={fashion} alt="" className={classes.FashionImg} />
        </div>
        <div className={classes.CardDiv}>
          <img src={fashion} alt="" className={classes.FashionImg} />
        </div>
      </div>
      {/* module for shop by gram */}
     {isModuleOpen && <CommonModel className={classes.Model}>
        <div className={classes.RightDiv}>
        <SvgClose
          className={classes.closeSvg}
          cursor={"pointer"}
          onClick={() => setIsModuleOpen(false)}
          viewBox="0 0 30 30"
          width={30}
          height={30}
        />
          <div className={classes.ModelDiv}>
            <img src={model} className={classes.ModelImg} alt="" />
          </div>
          <div className={classes.RightSideDiv}>
            <div className={classes.ModelDescription}>
              {ShopData?.data?.map((data: any, idx: number) => (
                <div key={idx} className={classes.CardData}>
                  <div className={classes.LOgoDiv}>
                    <img src={data.logo} alt="" className={classes.Logo} />
                  </div>
                  <div>
                    <Typography variant="BS">{data.title}</Typography>
                  </div>
                  <div>
                    <Typography variant="BS">{data.amount}</Typography>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Typography variant="BS">{ShopData.description}</Typography>
            </div>
            <div>
              <Typography variant="BS">{ShopData.hastag}</Typography>
            </div>
            <div className={classes.InstaDiv}>
              <img src={ShopData.logo} />
              <Typography variant="BS">{ShopData.insta}</Typography>
            </div>
          </div>
        </div>
      </CommonModel>}
    </div>
  );
};

export default Shop;
