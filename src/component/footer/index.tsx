import React, { useState } from "react";
import { usestyles } from "../footer/footerstyle";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import Typography from "../../component/typography/component";
import right from "../../assets/icons/chevron_right.svg";
import { HideComponents } from "../hideComponents";
import SvgAdd from "../../custom-icons/Add";
import Button from "../button";
import Input from "../input";
import SvgChevronRight from "../../custom-icons/ChevronRight";

const footer = {
  sections: [
    {
      title: "Product",
      features: ["Mail", "Chat", "Calendar", "Streamline", "eOffice"],
    },
    {
      title: "Company",
      features: ["About", "Chat", "Calender", "StreamLine", "eOffice"],
    },
  ],
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
      name: "Sign Up to Newsletter",
      subtitle:
        " ***By entering the e-mail you accept the terms and conditions and the privacy policy.",
    },
  ],
};

const Footer: React.FC<any> = (): JSX.Element => {
  const classes = usestyles();
  const [isDropDownopen, setIsDropDownOpen] = useState<number | null>(null);

  // for opening dropdown
  const toogleSelection = (id: number) => {
    setIsDropDownOpen(isDropDownopen === id ? null : id);
  };
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContent}>
        <div className={classes.FirstSection}>
          <div className={classes.SubDiv}>
            <Typography variant="TS">Help Customers</Typography>
            <div>
              <Typography variant="BS" className={classes.Title}>
                Find a location nearest you to reduce shipping costs and make
                shopping easier. Show on google maps.
              </Typography>
            </div>
          </div>
          <div className={classes.Para}>
            <Typography variant="BS">+1 (973) 435-3638</Typography>
            <Typography variant="BS">info@fashionwomen.com</Typography>
          </div>
          <div className={classes.Icons}>
            <div className={classes.FooterLogo}>
              <img src={linkedin} alt={linkedin} />
            </div>
            <div className={classes.FooterLogo}>
              <img src={youtube} alt={youtube} />
            </div>
            <div className={classes.FooterLogo}>
              <img src={facebook} alt={facebook} />
            </div>
            <div className={classes.FooterLogo}>
              <img src={insta} alt={insta} />
            </div>
          </div>
        </div>

        {footer.sections.map((section, index) => (
          <HideComponents hideOn="mobile">
            <div className={classes.SecondSection} key={index}>
              <div>
                <Typography variant="TS" className={classes.SectionTitleColor}>
                  {section.title}
                </Typography>
              </div>
              <ul className={classes.ulist}>
                {section.features.map((feature, featureIndex) => (
                  <li className={classes.list} key={featureIndex}>
                    <Typography variant="BS">{feature}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </HideComponents>
        ))}

        <div className={classes.FirstSection}>
          <HideComponents hideOn="mobile">
            <div className={classes.SubDiv}>
              <Typography variant="TS">Sign Up to Newsletter</Typography>
              <div>
                <Typography variant="BS" className={classes.Title}>
                  Sign up for 10% off your first purchase and free shipping.
                  Updates information on Sales and Offers.
                </Typography>
              </div>
              <div className={classes.ButtonDiv}>
                <div>
                  <label className={classes.Label}>
                    <Input
                      placeholder="Enter your email..."
                      type="text"
                      name="Firstname"
                    />
                  </label>
                </div>
                <div>
                  <Button text={"Sign Up"} className={classes.BtnStyle}></Button>
                </div>
              </div>
            </div>
          </HideComponents>
          {/* show only on mobile */}
          <HideComponents className={classes.accordDiv} showOnlyOn="mobile">
            <div className={classes.accordContainer}>
              {footer.filteroptions.map((data: any) => (
                <div key={data.id} className={classes.filterHead}>
                  {/* head content */}
                  <div className={classes.headContent}>
                    <Typography variant="TS">{data.name}</Typography>
                    <SvgAdd
                      onClick={() => toogleSelection(data.id)}
                      cursor={"pointer"}
                      className={classes.svgColor}
                    />
                  </div>
                  {/* dropdown for product */}
                  {isDropDownopen === data.id && data.name === "Product" && (
                    <div className={classes.expandDiv}>
                      {data?.categories?.map((item: any) => (
                        <Typography className={classes.textStyle} variant="BM">
                          {item}
                        </Typography>
                      ))}
                    </div>
                  )}
                  {/* dropdown for subcategeory */}
                  {isDropDownopen === data.id &&
                    data.name === "SubCategory" && (
                      <div className={classes.expandDiv}>
                        {data?.categories?.map((item: any) => (
                          <Typography
                            className={classes.textStyle}
                            variant="BM"
                          >
                            {item}
                          </Typography>
                        ))}
                      </div>
                    )}
                  {/* dropdown for Sign Up to Newsletter */}
                  {isDropDownopen === data.id &&
                    data.name === "Sign Up to Newsletter" && (
                      <div className={classes.expandDivLetter}>
                        <div className={classes.Para}>
                          <Typography variant="BM">{data.subtitle}</Typography>
                        </div>
                        <div className={classes.buttonContainer}>
                          <Input type="text" placeholder="enter a email" />
                          <Button
                            className={classes.btnStyle}
                            text={"Sign Up"}
                          ></Button>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </HideComponents>
          <HideComponents hideOn="mobile">
            <div className={classes.Para}>
              <Typography variant="BS">
                ***By entering the e-mail you accept the terms and conditions
                and the privacy policy.
              </Typography>
            </div>
          </HideComponents>
        </div>
      </div>
      <div className={classes.SubFooterDiv}>
        <div className={classes.USD}>
          <div>
            <Typography variant="BM">United States (USD $)</Typography>
          </div>
          <div className={classes.ArrowStyle}>
            <SvgChevronRight />
          </div>
        </div>
        <div>
          <Typography variant="BS">
            © 2024 Glozin store. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
