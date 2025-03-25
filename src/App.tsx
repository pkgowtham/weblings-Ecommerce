import "./App";
// import right from "../../my-app/src/assets/icons/chevron_right.svg";
import { useStyle } from "./App";
// import collection from "../src/assets/images/collection.jpg";
// import fashion from "../src/assets/images/fashion.jpg";
// import circle from "../src/assets/icons/circle-x.svg";
// import insta from "../../my-app/src/assets/icons/insta.svg";
// import staricon from "../../my-app/src/assets/icons/staricon.png";
// import fashionblack from "../src/assets/images/fashionblack.jpg";
// import fashionwhite from "../src/assets/images/fashionwhite.jpg";
// import fashiongrey from "../src/assets/images/fashion.jpg";
// import user from "../../my-app/src/assets/icons/user-round.svg"
// import iconstar from "../../my-app/src/assets/icons/iconstar.png"
// import addlogo from "../src/assets/icons/add.png";
// import sublogo from "../src/assets/icons/sub.png"
import Navigations from "./routes";
// import Review from "./component/review";
// import Ratings from "./component/customerReview";

// const data = {
//   links: [
//     {
//       link: "Home",
//       logo: right,
//       dropdownItems: ["Submenu 1", "Submenu 2", "Submenu 3"],
//     },
//     {
//       link: "Shop",
//       logo: right,
//       dropdownItems: ["Submenu 4", "Submenu 5", "Submenu 6"],
//     },
//     {
//       link: "Products",
//       logo: right,
//       dropdownItems: ["Submenu 7", "Submenu 8", "Submenu 9"],
//     },
//     {
//       link: "Pages",
//       logo: right,
//       dropdownItems: ["Submenu 10", "Submenu 11", "Submenu 12"],
//     },
//     {
//       link: "Blog",
//       logo: right,
//       dropdownItems: ["Submenu 13", "Submenu 14", "Submenu 15"],
//     },
//     {
//       link: "Sale Hot",
//     },
//     {
//       link: "Buy Theme!",
//     },
//   ],
// };
// const topcollections = {
//   card: [
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//     {
//       logo: collection,
//       subtitle: "Crop-Top",
//     },
//   ],
// };
// const card = {
//   title: "Best Selling",
//   subtitle:
//     "Unmatched design—superior performance and customer satisfaction in one.",
//   cards: [
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//   ],
// };
// const reviewdata = {
//   title: "Customer Say!",
//   subtitle:
//     "Customers love our products and we always strive to please them all.",
//   cards: [
//     {
//       logo: fashion,
//       title: "Cameron Smith.",
//       description:
//         "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
//       subimg: fashion,
//       subtext: "Slim Fit Basic Unpatterned T-shirt",
//       amount: "$75.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description:
//         "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
//       subimg: fashion,
//       subtext: "Slim Fit Basic Unpatterned T-shirt",
//       amount: "$75.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description:
//         "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
//       subimg: fashion,
//       subtext: "Slim Fit Basic Unpatterned T-shirt",
//       amount: "$75.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description:
//         "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
//       subimg: fashion,
//       subtext: "Slim Fit Basic Unpatterned T-shirt",
//       amount: "$75.00",
//     },
//     // { logo:fashion,
//     //   title: "Cotton Long-Sleeve Striped T-shirt",
//     //   description: "$115.00",
//     // },
//     // { logo:fashion,
//     //   title: "Cotton Long-Sleeve Striped T-shirt",
//     //   description: "$115.00",
//     // },
//     // { logo:fashion,
//     //   title: "Cotton Long-Sleeve Striped T-shirt",
//     //   description: "$115.00",
//     // },
//     // { logo:fashion,
//     //   title: "Cotton Long-Sleeve Striped T-shirt",
//     //   description: "$115.00",
//     // },
//   ],
// };
// const slider = {
//   title: "Best Selling",
//   subtitle:
//     "Unmatched design—superior performance and customer satisfaction in one.",
//   cards: [
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//     {
//       logo: fashion,
//       title: "Cotton Long-Sleeve Striped T-shirt",
//       description: "$115.00",
//     },
//   ],
// };
// const support = {
//   text: [
//     {
//       logo: circle,
//       title: "Free Shipping",
//       subtitle:
//         "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
//     },
//     {
//       logo: circle,
//       title: "Free Shipping",
//       subtitle:
//         "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
//     },
//     {
//       logo: circle,
//       title: "Free Shipping",
//       subtitle:
//         "Enjoy free worldwide shipping and returns, with customs and duties taxes included",
//     },
//   ],
// };
// const shop = {
//   description:
//     "We are totally smitten over this look! will you be creating a red or pink makeup look for valentines day?",
//   hastag: "#cotton #glozin #trending #sale",
//   insta: "glozin_store",
//   logo: insta,
//   data: [
//     {
//       logo: fashion,
//       title: "Plain cotton Undershirt-Wide Neck",
//       amount: "$35.00",
//     },
//     {
//       logo: fashion,
//       title: "Plain cotton Undershirt-Wide Neck",
//       amount: "$35.00",
//     },
//   ],
// };
// const product = {
//   logo: [
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashionblack,
//     },
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashion,
//     },
//     {
//       logo: fashionwhite,
//     },
//     {
//       logo: fashion,
//     },
//   ],
//   productimg:[
//     {
//       black:fashiongrey,
//       color:'Grey'
//     },
//     {
//       black:fashionwhite,
//       color:'White'
//     },
//     {
//       black:fashionblack,
//       color:'black'
//     }
//   ],
//   star: [
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//   ],
//   sizedetails: {
//     img: fashion,
//     size: [
//       {
//         key: "Model is Wearing:",
//         value: "M",
//         height: "Height:",
//         cm: "160cm",
//         weight: "Weight: ",
//         kg: "53Kg",
//         shoulder: "Shoulder width:",
//         width: " 40cm",
//         hip: "Bust/waist/hips:",
//         size: "80/61/95",
//       },
//     ],
//   },
//   sizechart:{
//       chart: [
//         { size: "S", amount: "$115.00" },
//         { size: "M", amount: "$120.00"  },
//         { size: "L", amount: "$125.00"  },
//       ],
//     },
//     available:[
//       {
//         key:'Sku:',
//         value:' FS0004GL',
//         available:'Available:',
//         instock:' Instock',
//         collection:'Collections:',
//         collections:' Activewear, Best seller, Blazers, Coats, Hoodies, Hot Deals, Shorts, test, Topss'
//       }
//     ]
// };
// const review = {
//   star: [
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//     {
//       logo: staricon,
//     },
//   ],
//   ratings:[
//     {
//       rate:'3'
//     },
//     {
//       rate:'0'
//     },
//     {
//       rate:'0'
//     },
//     {
//       rate:'0'
//     },
//     {
//       rate:'0'
//     }
//   ],
//   feedback:[
//     {
//       logo:user,
//       date:'05/18/2024',
//       name:'Pham Luong',
//       title:'Amazingly Soft Sweater.',
//       description:'This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.',
//       image:[
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         }
//       ],
//       star: [
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//       ],
//     },
//     {
//       logo:user,
//       date:'05/18/2024',
//       name:'Pham Luong',
//       title:'Amazingly Soft Sweater.',
//       description:'This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.',
//       image:[
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         }
//       ],
//       star: [
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//       ],
//     },
//     {
//       logo:user,
//       date:'05/18/2024',
//       name:'Pham Luong',
//       title:'Amazingly Soft Sweater.',
//       description:'This is my second of these jumpers - I love how light and warm they are especially under a jacket. They breathe well and dont require regular washing. I have gently handwashed my old one in warm water once or twice without any issues. The sleeves are flattering and I dont find the wool itchy, it softens up after a couple of wears. I sized down and its still a lovely oversized fit.',
//       image:[
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         },
//         {
//           logo:fashion
//         }
//       ],
//       star: [
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//         {
//           logo: staricon,
//         },
//       ],
//     }
//   ],
//   icon:[
//     {
//       star:iconstar
//     },
//     {
//       star:iconstar
//     },
//     {
//       star:iconstar
//     },
//     {
//       star:iconstar
//     },
//     {
//       star:iconstar
//     }
//   ]
  
// };
// const payment ={
//   data:[
//     {
//       logo:fashion,
//       title:'Product Name',
//       subtext:'ProductName',
//       sub:sublogo,
//       add:addlogo,
//       amount:'$ 400.00'
//     },
//     {
//       logo:fashion,
//       title:'Product Name',
//       subtext:'ProductName',
//       sub:sublogo,
//       add:addlogo,
//       amount:'$ 400.00'
//     }
//   ],
//   order:[
//     {
//       logo:fashionwhite,
//       title:'Product Name',
//       subtext:'ProductName',
//       amount:'$ 400.00'
//     },
//     {
//       logo:fashionwhite,
//       title:'Product Name',
//       subtext:'ProductName',
//       amount:'$ 400.00'
//     },
//   ]
// };
// const sucess ={
//   data:[
//     {
//       logo:fashion,
//       title:'Product Name',
//       subtext:'ProductName',
//       sub:sublogo,
//       add:addlogo,
//       amount:'$ 400.00'
//     },
//     {
//       logo:fashion,
//       title:'Product Name',
//       subtext:'ProductName',
//       sub:sublogo,
//       add:addlogo,
//       amount:'$ 400.00'
//     }
//   ],
// }

const App: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={classes.MainContainer}>
      <Navigations/>
      {/* <Header HeaderData={data} /> */}
      {/* <Sucess SucessData={sucess}/> */}
      {/* <Payment PaymentData = {payment}/> */}
      {/* <Product ProductData={product} /> */}
      {/* <Ratings ReviewData={review}/> */}
      {/* <Slider SliderData={slider}/> */}
      {/* <TopCollection TopData ={topcollections}/>
      <Card CardData={card} />
      <Shop ShopData = {shop}/>
      <Support SupportData ={support}/>
      <Footer /> */}
      {/* <Review ReviewsData ={reviewdata}/>  */}
    </div>
  );
};

export default App;
