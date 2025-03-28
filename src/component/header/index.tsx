import React, { useState } from "react";
import { useStyle } from "./indexstyle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Typography from "../typography/component";
import SvgUserRound from "../../custom-icons/UserRound";
import SvgHeart from "../../custom-icons/Heart";
import ShoppingCart from "../shoppingCartModule";
import SignInModule from "../signInModule";
import Badge from "../badge";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import Input from "../input";
import SvgSearch from "../../custom-icons/Search";
import SvgMenu from "../../custom-icons/Menu";
import { HideComponents } from "../hideComponents";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import SvgClose from "../../custom-icons/Close";

const Header: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const HeaderData = props.HeaderData;
  const navigate = useNavigate();

  // State to track hover for each dropdown
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shoppingCart, setShoppingCart] = useState<boolean>(false);
  const [isSignInModule, setIsSignInModule] = useState<boolean>(false);
  const dispatch = useMiddlewareDispatch();
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { store } = useStore();

  // navigate
  const handleNavigate = () => {
    navigate("/mainlayout/wishlistpage");
  };
  return (
    <header className={classes.NavBar}>
      {/* Top Bar with Contact Info */}
      <div className={classes.NavTop}>
        <div className={classes.ContactInfo}>
          <HideComponents showOnlyOn="desktop">
            <Typography variant="TM">glozin</Typography>
          </HideComponents>
          <HideComponents hideOn="desktop">
            <SvgMenu cursor={"pointer"} onClick={() => setSideBar(!sideBar)} />
          </HideComponents>
        </div>
        {/* Main Navigation */}
        <HideComponents showOnlyOn="desktop">
          <div className={classes.NavBarMain}>
            {/* Navigation Links */}
            {HeaderData?.links?.map((data: any, idx: number) => (
              <nav className="nav-links">
                <ul key={idx}>
                  <li
                    className={classes.List}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link to={data.path} className={classes.List}>
                      {data.link}
                      <SvgChevronRight />
                    </Link>

                    {/* dropdown */}
                    {hoveredIndex === idx && (
                      <div className={classes.Dropdown}>
                        {data.dropdownItems?.map(
                          (item: string, itemIdx: number) => (
                            <div className={classes.datas}>
                              <Typography variant="BS">{item}</Typography>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </li>
                </ul>
              </nav>
            ))}
          </div>
        </HideComponents>
        <HideComponents hideOn="desktop">
          <Typography variant="TM">glozin</Typography>
        </HideComponents>
        {/* icons */}
        <div className={classes.Icons}>
          <HideComponents hideOn="mobile">
            <Input
              type="text"
              placeholder="I'am looking for.."
              leftIcon={<SvgSearch className={classes.leftIconColor} />}
            />
          </HideComponents>
          <HideComponents showOnlyOn="mobile">
            <SvgSearch className={classes.leftIconColor} />
          </HideComponents>
          <HideComponents showOnlyOn="desktop">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <SvgUserRound
                  onClick={() => setIsSignInModule(!isSignInModule)}
                  cursor={"pointer"}
                  width={25}
                  viewBox="0 0 25 30"
                  height={20}
                />
              </div>
              <div className={classes.wishList}>
                <SvgHeart
                  onClick={handleNavigate}
                  cursor={"pointer"}
                  viewBox="0 0 40 40"
                  width={30}
                  height={25}
                />
                <Badge
                  style={{
                    width: "18px",
                    height: "18px",
                    right: -5,
                  }}
                  count={store.productWishlist.dataGetList?.data?.length || "0"}
                  className={classes.badgeStyle}
                />
              </div>
            </div>
          </HideComponents>
          <div className={classes.wishList}>
            <SvgHeart
              viewBox="0 0 40 40"
              width={30}
              height={25}
              cursor={"pointer"}
              onClick={() =>
                dispatch({
                  type: "OPEN_ADD_TO_CART_MODAL",
                  payload: {
                    isAddToCart: true,
                  },
                })
              }
            />
            <Badge
              style={{
                width: "18px",
                height: "18px",
                right: -5,
              }}
              count={store.productAddToCart.dataGetList?.data?.length || "0"}
              className={classes.badgeStyle}
            />
          </div>
        </div>
      </div>

      {/* module for shopping cart */}
      {store.commonInternal.isAddToCart && (
        <ShoppingCart onClose={setShoppingCart} />
      )}
      {/* signin module */}
      {isSignInModule && <SignInModule onClose={setIsSignInModule} />}
      {/* sidebar for mobile */}
      {sideBar && (
        <div className={classes.sideBarDiv}>
          <div className={classes.headerDiv}>
            <div className={classes.headerChild}>
              <Typography variant="BM">Menu</Typography>
              <Typography variant="BM">Categories</Typography>
            </div>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgColor}
              onClick={() => setSideBar(false)}
            />
          </div>
          <div className={classes.bodyData}>
          {HeaderData?.links?.map((data: any, idx: number) => (
            <div className={classes.sideData}>
              <Link to={data.path} className={classes.sideList}>
                {data.link}
                <SvgChevronRight />
              </Link>
            </div>
          ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
