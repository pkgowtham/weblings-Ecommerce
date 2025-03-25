import { useEffect, useRef, useState } from "react";
import Typography from "../../component/typography/component";
import SvgAdd from "../../custom-icons/Add";
import { useStyle } from "./indexstyle";
import SvgList from "../../custom-icons/List";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import VerticalProductCard from "../../component/verticalProductCard";
import clsx from "clsx";
import HorizotalProductCard from "../../component/horizontalProductCard";
import SvgViewComfyAlt from "../../custom-icons/ViewComfyAlt";
import { theme } from "../../../theme/theme";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";
import Banner from "../../component/banner";

const productData = {
  //   productcategory: "Product Category",
  filteroptions: [
    {
      id: 1,
      name: "Product",
      categories: [
        "Sweaters",
        "T-Shirts",
        "Dress",
        "Crop-top",
        "Blazers",
        "Tops",
      ],
    },
    {
      id: 2,
      name: "SubCategory",
      categories: [
        "Sweaters",
        "T-Shirts",
        "Dress",
        "Crop-top",
        "Blazers",
        "Tops",
      ],
    },
    {
      id: 3,
      name: "Availability",
      stock: ["In Stock(5)", "Out of Stock"],
    },
    {
      id: 4,
      name: "Price",
      startprice: "Rs. 0.00 -",
      endprice: "Rs. 499.00",
      price: "Price :",
    },

    {
      id: 5,
      name: "Brand",
      brands: ["Adidas(2)", "Gap(1)", "Giogerio(4)", "Zara(8)"],
    },
    {
      id: 6,
      name: "Color",
      color: ["#E00028", "#B15600", "#36A040", "#0072C4", "#9E29FE", "#6F6F6F"],
    },
    {
      id: 7,
      name: "Size",
      size: ["S", "M", "L"],
    },
  ],
  shortdropdown: [
    { id: 1, name: "Featured" },
    { id: 2, name: "Best selling" },
    { id: 3, name: "price,low to high" },
    { id: 4, name: "price,high to low" },
    { id: 5, name: "Date,old to new" },
    { id: 6, name: "Date,new to old" },
  ],
  products: [
    { id:1,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:2,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:3,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:4,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
  ],
  productsdata: [
    { id:1,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:2,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:3,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:4,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:5,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:6,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:7,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
    { id:8,
      name: "White Slim Fit Basic Unpatterned T-shirt",
      price: "$115.00",
      rating: 5,
      image: fashionwhite,
      variants: [
        {
          color: "Black",
          image: fashionblack,
        },
        {
          color: "White",
          image: fashionwhite,
        },
        {
          color: "Grey",
          image: fashiongrey,
        },
      ],
      description:
        "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
    },
  ],
};
const bannerData = {
  title: "Best Selling",
  subtitle:
    "Unmatched design—superior performance and customer satisfaction in one.",
  cards: [
    {
      logo: fashionwhite,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
      sliderimage:
        "https://images.pexels.com/photos/7179506/pexels-photo-7179506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      logo: fashionwhite,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
      sliderimage:
        "https://images.pexels.com/photos/3473085/pexels-photo-3473085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      logo: fashionwhite,
      title: "Cotton Long-Sleeve Striped T-shirt",
      description: "$115.00",
      sliderimage:
        "https://images.pexels.com/photos/425241/pexels-photo-425241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

const CategoryPage = () => {
  const classes = useStyle();
  const [isDropDownopen, setIsDropDownOpen] = useState<number | null>(null);
  const [isShortDownopen, setIsShortDownOpen] = useState<boolean>(false);
  const [layout, setLayout] = useState("fourColumns");
  const [selectedColor, setSelectedColor] = useState<string>("#E00028");
  const [shortBy, setShortBy] = useState("Featured");
  const shortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (shortRef.current && !shortRef.current.contains(event.target)) {
        setIsShortDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  // short data
  const handleShortData = (data: any) => {
    setShortBy(data);
    setIsShortDownOpen(false);
  };

  //
  const toogleSection = (id: number) => {
    setIsDropDownOpen(isDropDownopen === id ? null : id);
  };
  return (
    <div className={classes.mainContainer}>
      {/* banner sections */}
      <Banner style={{height:'450px'}} BannerData={bannerData}/>
      {/* filter contents */}
      <div className={classes.filterContents}>
      <div className={classes.filterDiv}>
        {productData.filteroptions.map((data: any) => (
          <div key={data.id} className={classes.filterHead}>
            {/* head content */}
            <div className={classes.headContent}>
              <Typography variant="BM">{data.name}</Typography>
              <SvgAdd
                onClick={() => toogleSection(data.id)}
                cursor={"pointer"}
                className={classes.svgColor}
              />
            </div>
            {/* dropdown for category */}
            {isDropDownopen === data.id && data.name === "Product" && (
              <div className={classes.expandDiv}>
                {data?.categories?.map((item: any) => (
                  <div className={classes.itemDiv}>
                    <Typography className={classes.lightColor} variant="BS">
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            {/* dropdown for SubCategory */}
            {isDropDownopen === data.id && data.name === "SubCategory" && (
              <div className={classes.expandDiv}>
                {data?.categories?.map((item: any) => (
                  <div className={classes.itemDiv}>
                    <Typography className={classes.lightColor} variant="BS">
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            {/* dropdown for availability */}
            {isDropDownopen === data.id && data.name === "Availability" && (
              <div className={classes.expandDiv}>
                {data?.stock?.map((stock: any) => (
                  <div className={classes.checkBoxDiv}>
                    <input type="checkbox" />
                    <Typography className={classes.lightColor} variant="BS">
                      {stock}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            {/* dropdown for price */}
            {isDropDownopen === data.id && data.name === "Price" && (
              <div className={classes.priceDiv}>
                <div className={classes.inputDiv}>
                  <input
                    className={classes.inputStyle}
                    placeholder="₹ 0.00"
                    type="text"
                  />
                  <div>-</div>
                  <input
                    placeholder="₹ 0.00"
                    className={classes.inputStyle}
                    type="text"
                  />
                </div>
                <div></div>
                <div className={classes.priceVariation}>
                  <Typography variant="BS">
                    {data.price}
                    {data.startprice}
                    {data.endprice}
                  </Typography>
                </div>
              </div>
            )}
            {/* dropdown for brand */}
            {isDropDownopen === data.id && data.name === "Brand" && (
              <div className={classes.expandDiv}>
                {data?.brands?.map((brand: any) => (
                  <div className={classes.checkBoxDiv}>
                    <input type="checkbox" />
                    <Typography className={classes.lightColor} variant="BS">
                      {brand}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
            {/* dropdown for color */}
            {isDropDownopen === data.id && data.name === "Color" && (
              <div className={classes.colorDiv}>
                {data?.color?.map((color: any) => (
                  <div
                    style={{
                      border:
                        selectedColor === color
                          ? `1px solid ${theme.light.neutral.onSurface.title}`
                          : "2px solid transparent",
                      width: "35px",
                      height: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className={clsx(classes.ColorStyle, {
                        [classes.Red]: color === "#E00028",
                        [classes.war]: color === "#B15600",
                        [classes.green]: color === "#36A040",
                        [classes.blue]: color === "#0072C4",
                        [classes.purple]: color === "#9E29FE",
                        [classes.gray]: color === "#6F6F6F",
                      })}
                      onClick={() => setSelectedColor(color)}
                    />
                  </div>
                ))}
              </div>
            )}
            {/* dropdown for size */}
            {isDropDownopen === data.id && data.name === "Size" && (
              <div className={classes.sizedDiv}>
                {data?.size?.map((size: any) => (
                  <div className={classes.sizeStyle}>
                    <Typography variant="BM">{size}</Typography>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* product details */}
      <div className={classes.productsDiv}>
        {/* toolbar */}
        <div className={classes.toolBar}>
          <div className={classes.resultsDiv}>
            <Typography className={classes.lightColor} variant="BM">
              There are 5 results in total
            </Typography>
          </div>
          <div>
            {/* <SvgApps
              className={clsx(classes.icon, {
                [classes.activeIcon]: layout === "twoColumns",
              })}
              onClick={() => setLayout("twoColumns")}
            /> */}
            <SvgViewComfyAlt
              className={clsx(classes.icon, {
                [classes.activeIcon]: layout === "fourColumns",
              })}
              onClick={() => setLayout("fourColumns")}
            />
            <SvgList
              className={clsx(classes.icon, {
                [classes.activeIcon]: layout === "list",
              })}
              onClick={() => setLayout("list")}
            />
          </div>
          <div className={classes.shortCont}>
            <Typography className={classes.sortColor} variant="BM">
              Sort by:
            </Typography>
            <div className={classes.chevronRight}>
              <Typography
                onClick={() => setIsShortDownOpen(!isShortDownopen)}
                variant="BS"
              >
                {shortBy}
              </Typography>
              <SvgChevronRight cursor={"pointer"} />
              {/* featured short dropdown */}
              {isShortDownopen && (
                <div ref={shortRef} className={classes.shortDropDown}>
                  {productData.shortdropdown.map((data: any) => (
                    <div
                      onClick={() => handleShortData(data.name)}
                      className={classes.contentDiv}
                    >
                      <Typography
                        className={clsx(classes.lightColor, {
                          [classes.activeStatus]: shortBy === data.name,
                        })}
                        key={data.id}
                        variant="BS"
                      >
                        {data.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* grid layouts */}
        {/* {layout === "twoColumns" && (
          <div
            className={clsx(classes.gridContainer, {
              [classes.twoColumns]: layout === "twoColumns",
            })}
          >
            {productData.products.map((card: any) => (
              <VerticalProductCard />
            ))}
          </div>
        )} */}
        {layout === "fourColumns" && (
          <div
            className={clsx(classes.gridContainer, {
              [classes.fourColumns]: layout === "fourColumns",
            })}
          >
            {productData.productsdata.map((card: any) => (
              <VerticalProductCard products={card || {}} />
            ))}
          </div>
        )}
        {layout === "list" && (
          <div
            className={clsx(classes.gridContainer, {
              [classes.list]: layout === "list",
            })}
          >
            {productData.products.map((card: any) => (
              <HorizotalProductCard productsdata={card} />
            ))}
          </div>
        )}
      </div>

      </div>
    </div>
  );
};

export default CategoryPage;
