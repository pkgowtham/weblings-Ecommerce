import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../component/button";
import Typography from "../../component/typography/component";
import { useStyle } from "./indexstyle";
import { useStore } from "../../store";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useEffect, useRef } from "react";

const listData = [
  {
    id: 1,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_4.jpg?v=1717918960&width=660",
    listname: "Sweaters",
  },
  {
    id: 2,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_4.jpg?v=1717918960&width=660",
    listname: "Sweaters",
  },
  {
    id: 3,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_4.jpg?v=1717918960&width=660",
    listname: "Sweaters",
  },
  {
    id: 4,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_4.jpg?v=1717918960&width=660",
    listname: "Sweaters",
  },
  {
    id: 5,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_3.jpg?v=1717918942&width=660",
    listname: "Sweaters",
  },
  {
    id: 6,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_3.jpg?v=1717918942&width=660",
    listname: "Sweaters",
  },
  {
    id: 7,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_3.jpg?v=1717918942&width=660",
    listname: "Sweaters",
  },
  {
    id: 8,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_3.jpg?v=1717918942&width=660",
    listname: "Sweaters",
  },
  {
    id: 9,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_6.jpg?v=1717918999&width=660",
    listname: "Sweaters",
  },
  {
    id: 10,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_6.jpg?v=1717918999&width=660",
    listname: "Sweaters",
  },
  {
    id: 11,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_6.jpg?v=1717918999&width=660",
    listname: "Sweaters",
  },
  {
    id: 12,
    logo: "https://glozin-demo.myshopify.com/cdn/shop/collections/img_6.jpg?v=1717918999&width=660",
    listname: "Sweaters",
  },
];

const CollectionList = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const location = useLocation();
  const { rowDataId } = location?.state || {};
  const hasBrandDispatched = useRef(false);


  // navigate
  const handleNavigate = (type:string) =>{
    if(type === "filter"){
      navigate("/mainLayout/categorypage")
    }
  }

  //brand getlist
  useEffect(() => {
    if (!hasBrandDispatched.current) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: { url: "/product", method: "GET", query: { brand: rowDataId } },
      });
      hasBrandDispatched.current = true;
    }
  }, []);


  return (
    <div className={classes.mainContainer}>
      {/* header section */}
      <div className={classes.headerSection}>
        <Typography variant="HS">Collections List</Typography>
        <Typography className={classes.para} variant="BM">
          Explore our thoughtfully curated collections: Sweaters, Handbags,
          Denim, and more—each perfect for enhancing every style on every
          special occasion and daily wear.
        </Typography>
      </div>
      {/* collections lists grid container */}
      <div className={classes.gridContainer}>
        {store.product.dataGetList?.data?.map((data: any) => (
          <div onClick={()=>navigate("/mainLayout/productpage",{state:{rowDataId:data?.id}})} className={classes.gridItem}>
            <div className={classes.listContainer}>
              <Button onClick={()=>navigate("/mainLayout/productpage",{state:{rowDataId:data?.id}})}
                className={classes.btnContainer}
                text={data.name}
              ></Button>
            </div>
            <div className={classes.logoContainer}>
              <img className={classes.logoStyle} src={data?.colors[0]?.attachments[0]?.fileUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
