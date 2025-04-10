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
import { HideComponents } from "../../component/hideComponents";
import Button from "../../component/button";
import { useStore } from "../../store";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import SvgClose from "../../custom-icons/Close";
import { deepGet } from "../../util/util";

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
      stock: ["inStock", "outOfStock"],
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
    // { id: 1, name: "Featured" },
    // { id: 2, name: "Best selling" },
    { id: 3, name: "price,low to high" },
    { id: 4, name: "price,high to low" },
    { id: 5, name: "date,old to new" },
    { id: 6, name: "date,new to old" },
  ],
  products: [
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
    {
      id: 6,
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
    {
      id: 7,
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
    {
      id: 8,
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
  const [filterDownBar, setFilterDownBar] = useState<boolean>(false);
  const [filterSideBar, setFilterSideBar] = useState<boolean>(false);
  const [isDropDownopen, setIsDropDownOpen] = useState<number | null>(null);
  const [isShortDownopen, setIsShortDownOpen] = useState<boolean>(false);
  const [layout, setLayout] = useState("fourColumns");
  const [selectedColor, setSelectedColor] = useState<string>("#E00028");
  const [shortBy, setShortBy] = useState<string>("");
  const shortRef = useRef<HTMLDivElement>(null);
  const hasDispatched = useRef(false);
  const hasCatDispatched = useRef(false);
  const hasSubDispatched = useRef(false);
  const hasBrandDispatched = useRef(false);
  const hasColorDispatched = useRef(false);
  const hasSizeDispatched = useRef(false);
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<any>("");
  const hasWishlistDispatched = useRef(false);
  const [price, setPrice] = useState<any>({
    start: 0,
    end: 0,
  });

  //Wishlist getlist
  useEffect(() => {
    if (!hasWishlistDispatched.current) {
      dispatch({
        type: "PRODUCT_WHISHLIST_GETLIST_API_REQUEST",
        payload: {
          url: "/wishList",
          method: "GET",
        },
      });
      hasWishlistDispatched.current = true;
    }
  }, []);

  //Wishlist getlist after create or delete
  useEffect(() => {
    if (
      store.productWishlist.isSuccessCreate ||
      store.productWishlist.isSuccessDestroy
    ) {
      dispatch({
        type: "PRODUCT_WHISHLIST_GETLIST_API_REQUEST",
        payload: {
          url: "/wishList",
          method: "GET",
        },
      });
      dispatch({
        type: "PRODUCT_WHISHLIST_CREATE_API_CLEAR",
      });
      dispatch({
        type: "PRODUCT_WHISHLIST_DESTROY_API_CLEAR",
      });
    }
  }, [
    deepGet(store, "productWishlist.isSuccessCreate"),
    deepGet(store, "productWishlist.isSuccessDestroy"),
  ]);

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
    console.log("data", data);
    setShortBy(data);
    setIsShortDownOpen(false);
  };

  useEffect(() => {
    if (shortBy) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
          query: {
            sortBy: shortBy,
          },
        },
      });
    }
  }, [shortBy]);

  //
  const toogleSection = (id: number) => {
    setIsDropDownOpen(isDropDownopen === id ? null : id);
  };

  //product getlist
  useEffect(() => {
    if (!hasDispatched.current) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
        },
      });
      setShortBy("price,low to high");
      hasDispatched.current = true;
    }
  }, []);

  //category getlist
  useEffect(() => {
    if (!hasCatDispatched.current) {
      dispatch({
        type: "PRODUCT_CATEGORY_GETLIST_API_REQUEST",
        payload: { url: "/category", method: "GET" },
      });
      hasCatDispatched.current = true;
    }
  }, []);

  //sub category getlist
  useEffect(() => {
    if (!hasSubDispatched.current) {
      dispatch({
        type: "PRODUCT_SUB_CATEGORY_GETLIST_API_REQUEST",
        payload: { url: "/subCategory", method: "GET" },
      });
      hasSubDispatched.current = true;
    }
  }, []);

  //brand getlist
  useEffect(() => {
    if (!hasBrandDispatched.current) {
      dispatch({
        type: "PRODUCT_BRAND_GETLIST_API_REQUEST",
        payload: { url: "/brand", method: "GET" },
      });
      hasBrandDispatched.current = true;
    }
  }, []);

  //color getlist
  useEffect(() => {
    if (!hasColorDispatched.current) {
      dispatch({
        type: "COLOR_GETLIST_API_REQUEST",
        payload: { url: "/color", method: "GET" },
      });
      hasColorDispatched.current = true;
    }
  }, []);

  //size getlist
  useEffect(() => {
    if (!hasSizeDispatched.current) {
      dispatch({
        type: "SIZE_GETLIST_API_REQUEST",
        payload: { url: "/size", method: "GET" },
      });
      hasSizeDispatched.current = true;
    }
  }, []);

  //brand click
  useEffect(() => {
    if (selectedBrand.length > 0) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
          query: { brand: selectedBrand.join(","), sortBy: shortBy },
        },
      });
    }
  }, [selectedBrand]);

   //Stock click
   useEffect(() => {
    if (selectedStock.length > 0) {
      dispatch({
        type: "PRODUCT_GETLIST_API_REQUEST",
        payload: {
          url: "/product",
          method: "GET",
          query: { availability: selectedStock.join(","), sortBy: shortBy },
        },
      });
    }
  }, [selectedStock]);

  const handleSubCategoryClick = (id: string) => {
    dispatch({
      type: "PRODUCT_GETLIST_API_REQUEST",
      payload: {
        url: "/product",
        method: "GET",
        query: { subCategory: id, sortBy: shortBy },
      },
    });
  };

  const handleCategoryClick = (id: string) => {
    dispatch({
      type: "PRODUCT_GETLIST_API_REQUEST",
      payload: {
        url: "/product",
        method: "GET",
        query: { category: id, sortBy: shortBy },
      },
    });
  };

  const handlePriceClick = () => {
    dispatch({
      type: "PRODUCT_GETLIST_API_REQUEST",
      payload: {
        url: "/product",
        method: "GET",
        query: { minPrice: price.start, maxPrice: price.end, sortBy: shortBy },
      },
    });
  };

  const handleColorClick = (color: any) => {
    setSelectedColor(color);
    dispatch({
      type: "PRODUCT_GETLIST_API_REQUEST",
      payload: {
        url: "/product",
        method: "GET",
        query: { color: color?.id, sortBy: shortBy },
      },
    });
  };

  const handleSizeClick = (size: any) => {
    setSelectedSize(size?.sizeVariant);
    dispatch({
      type: "PRODUCT_GETLIST_API_REQUEST",
      payload: {
        url: "/product",
        method: "GET",
        query: { size: size?.id, sortBy: shortBy },
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errorMessage = "";

    setPrice({
      ...price,
      [name]: value,
    });
  };

  // Handle checkbox toggle
  const handleBrandCheckboxChange = (brand: string) => {
    setSelectedBrand((prevSelected) => {
      if (prevSelected.includes(brand)) {
        // Remove if already selected
        return prevSelected.filter((item) => item !== brand);
      } else {
        // Add if not selected
        return [...prevSelected, brand];
      }
    });
  };

   // Handle checkbox toggle
   const handleStockCheckboxChange = (stock: string) => {
    setSelectedStock((prevSelected) => {
      if (prevSelected.includes(stock)) {
        // Remove if already selected
        return prevSelected.filter((item) => item !== stock);
      } else {
        // Add if not selected
        return [...prevSelected, stock];
      }
    });
  };

  return (
    <div className={classes.mainContainer}>
      {/* banner sections */}
      <Banner style={{ height: "450px" }} BannerData={bannerData} />
      {/* filter contents */}
      <div className={classes.filterContents}>
        <HideComponents style={{ width: "20%" }} showOnlyOn="desktop">
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
                    {store.productCategory.dataGetList?.data?.map(
                      (item: any) => (
                        <div
                          className={classes.itemDiv}
                          onClick={() => handleCategoryClick(item?.id)}
                        >
                          <Typography
                            className={classes.lightColor}
                            variant="BS"
                          >
                            {item?.name}
                          </Typography>
                        </div>
                      )
                    )}
                  </div>
                )}
                {/* dropdown for SubCategory */}
                {isDropDownopen === data.id && data.name === "SubCategory" && (
                  <div className={classes.expandDiv}>
                    {store.productSubCategory.dataGetList?.data?.map(
                      (item: any) => (
                        <div
                          className={classes.itemDiv}
                          onClick={() => handleSubCategoryClick(item?.id)}
                        >
                          <Typography
                            className={classes.lightColor}
                            variant="BS"
                          >
                            {item?.name}
                          </Typography>
                        </div>
                      )
                    )}
                  </div>
                )}
                {/* dropdown for availability */}
                {isDropDownopen === data.id && data.name === "Availability" && (
                  <div className={classes.expandDiv}>
                    {data?.stock?.map((stock: any) => (
                      <div className={classes.checkBoxDiv}>
                        <input
                          type="checkbox"
                          checked={selectedStock.includes(stock)}
                          onChange={() => handleStockCheckboxChange(stock)}
                        />
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
                        onChange={handleInputChange}
                        name="start"
                        value={price.start}
                      />
                      <div>-</div>
                      <input
                        placeholder="₹ 0.00"
                        className={classes.inputStyle}
                        type="text"
                        onChange={handleInputChange}
                        name="end"
                        value={price.end}
                      />
                    </div>
                    <div>
                      <Button
                        onClick={handlePriceClick}
                        className={classes.buttonStyle}
                        text={"Filter price"}
                      ></Button>
                    </div>
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
                    {store.productBrand.dataGetList?.data?.map((brand: any) => (
                      <div className={classes.checkBoxDiv}>
                        <input
                          type="checkbox"
                          checked={selectedBrand.includes(brand?.id)}
                          onChange={() => handleBrandCheckboxChange(brand?.id)}
                        />
                        <Typography className={classes.lightColor} variant="BS">
                          {brand?.name}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
                {/* dropdown for color */}
                {isDropDownopen === data.id && data.name === "Color" && (
                  <div className={classes.colorDiv}>
                    {store.productColor.dataGetList?.data?.map((color: any) => (
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
                          className={clsx(classes.ColorStyle)}
                          style={{ backgroundColor: color?.name }}
                          // onClick={() => setSelectedColor(color)}
                          onClick={() => handleColorClick(color)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* dropdown for size */}
                {isDropDownopen === data.id && data.name === "Size" && (
                  <div className={classes.sizedDiv}>
                    {store.productSize.dataGetList?.data?.map((size: any) => (
                      <div
                        className={clsx(classes.sizeStyle, {
                          [classes.sizeColor]:
                            selectedSize === size?.sizeVariant,
                        })}
                        onClick={() => handleSizeClick(size)}
                      >
                        <Typography variant="BM">
                          {size?.sizeVariant}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </HideComponents>

        {/* product details */}
        <div className={classes.productsDiv}>
          {/* toolbar */}
          <div className={classes.toolBar}>
            <HideComponents showOnlyOn="desktop">
              <div className={classes.resultsDiv}>
                <Typography className={classes.lightColor} variant="BM">
                  There are 5 results in total
                </Typography>
              </div>
            </HideComponents>
            <HideComponents hideOn="desktop">
              <div className={classes.filterCont}>
                <div>
                  <Button
                    onClick={() => setFilterSideBar(!filterSideBar)}
                    className={classes.buttonStyle}
                    leftIcon={<SvgAdd />}
                    text={"Filter"}
                  ></Button>
                </div>
                <HideComponents hideOn="tablet">
                  <div>
                    <Button
                      onClick={() => setFilterDownBar(!filterDownBar)}
                      className={classes.buttonStyleDrop}
                      text={"Short By"}
                      rightIcon={<SvgChevronRight />}
                    ></Button>
                  </div>
                </HideComponents>
              </div>
            </HideComponents>
            <div>
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
            <HideComponents showOnlyOn="desktop">
              <div className={classes.shortCont}>
                <Typography className={classes.sortColor} variant="BM">
                  Sort by:
                </Typography>
                <div className={classes.chevronRight}>
                  <Typography
                    onClick={() => setIsShortDownOpen(true)}
                    variant="BS"
                  >
                    {shortBy}
                  </Typography>
                  <SvgChevronRight cursor={"pointer"} />
                  {/* featured short dropdown */}
                  {isShortDownopen && (
                    <div className={classes.shortDropDown}>
                      {/* <div ref={shortRef} className={classes.shortDropDown}> */}
                      {productData.shortdropdown.map((data: any) => (
                        <div
                          onClick={() => {
                            console.log("clicked"), handleShortData(data.name);
                          }}
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
            </HideComponents>
            {/* <HideComponents showOnlyOn="tablet">
              <div className={classes.tabletShortBy}>
                <Button
                  onClick={() => setIsShortDownOpen(!isShortDownopen)}
                  className={classes.buttonStyleDrop}
                  text={"Short By :"}
                  rightIcon={<SvgChevronRight />}
                ></Button>
                {isShortDownopen && (
                  <div ref={shortRef} className={classes.shortDropDownTablet}>
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
            </HideComponents> */}
          </div>

          {/* grid layouts */}
          {layout === "fourColumns" && (
            <div
              className={clsx(classes.gridContainer, {
                [classes.fourColumns]: layout === "fourColumns",
              })}
            >
              {store.product.dataGetList?.data.map((card: any) => (
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
              {store.product.dataGetList?.data.map((card: any) => (
                <HorizotalProductCard products={card} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* filter side bar for mobile and tablet */}
      {filterSideBar && (
        <div className={classes.FilterSideBar}>
          {/* header */}
          <div className={classes.headerContainer}>
            <Typography variant="TS">Filter</Typography>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              onClick={() => setFilterSideBar(false)}
            />
          </div>
          {/* filter contents */}
          <div className={classes.filterMobileDiv}>
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
          {/* buttons for apply nd clear */}
          <div className={classes.clearButtonContainer}>
            <Typography className={classes.clearAllText} variant="TS">
              Clear All
            </Typography>
            <Button text={"Apply"}></Button>
          </div>
        </div>
      )}
      {/* mobile filter */}
      <HideComponents showOnlyOn="mobile">
        {filterDownBar && (
          <div className={classes.mobileFilterContainer}>
            <div className={classes.closeDiv}>
              <div
                onClick={() => setFilterDownBar(!filterDownBar)}
                className={classes.filterCloseDiv}
              >
                <SvgClose cursor={"pointer"} className={classes.filterClose} />
              </div>
            </div>
            <div className={classes.downBarContainer}>
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
                    variant="BM"
                  >
                    {data.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        )}
      </HideComponents>
    </div>
  );
};

export default CategoryPage;
