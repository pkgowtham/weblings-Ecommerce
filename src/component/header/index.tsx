import React, { useState } from "react";
import { useStyle } from "./indexstyle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Typography from "../typography/component";
import SvgUserRound from "../../custom-icons/UserRound";
import SvgHeart from "../../custom-icons/Heart";
import ShoppingCart from "../shoppingCartModule";
import SignInModule from "../signInModule";
import Badge from "../badge";

const Header: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const HeaderData = props.HeaderData;
  const navigate = useNavigate();

  // State to track hover for each dropdown
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shoppingCart, setShoppingCart] = useState<boolean>(false);
  const [isSignInModule, setIsSignInModule] = useState<boolean>(false);

  // navigate
  const handleNavigate = () => {
    navigate("/mainlayout/wishlistpage");
  };
  return (
    <header className={classes.NavBar}>
      {/* Top Bar with Contact Info */}
      <div className={classes.NavTop}>
        <div className={classes.ContactInfo}>
          <span>+1 (973) 435-3638</span>
          <span>info@fashionwomen.com</span>
        </div>
        <div className={classes.Logo}>
          <h1>glozin</h1>
        </div>
        <div></div>
        {/* icons */}
        <div className={classes.Icons}>
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
              count={"0"}
              className={classes.badgeStyle}
            />
          </div>
          <div className={classes.wishList}>
            <SvgHeart
              viewBox="0 0 40 40"
              width={30}
              height={25}
              cursor={"pointer"}
              onClick={() => setShoppingCart(!shoppingCart)}
            />
                <Badge
              style={{
                width: "18px",
                height: "18px",
                right: -5,
              }}
              count={"0"}
              className={classes.badgeStyle}
            />
          </div>
        </div>
      </div>
      {/* Main Navigation */}
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
                  <img className={classes.RightLogo} src={data.logo} alt="" />
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
      {/* module for shopping cart */}
      {shoppingCart && <ShoppingCart onClose={setShoppingCart} />}
      {/* signin module */}
      {isSignInModule && <SignInModule onClose={setIsSignInModule} />}
    </header>
  );
};

export default Header;
