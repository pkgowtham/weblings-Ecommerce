import React from "react";
import { usestyles } from "../footer/footerstyle";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import Typography from "../../component/typography/component";
import right from "../../assets/icons/chevron_right.svg"

const Footer: React.FC<any> = (): JSX.Element => {
  const classes = usestyles();
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
      // {
      //   title: 'Product',
      //   features: [
      //     "Mail",
      //     "Chat",
      //     "Calendar",
      //     "Streamline",
      //     "eOffice"
      //   ]
      // }
    ],
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
        ))}

        <div className={classes.FirstSection}>
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
                  <input
                    placeholder="Enter your email..."
                    className={classes.Input}
                    type="text"
                    name="Firstname"
                  />
                </label>
              </div>
              <div>
                <button className={classes.BtnStyle}>Sign Up</button>
              </div>
            </div>
          </div>
          <div className={classes.Para}>
            <Typography variant="BS">
              ***By entering the e-mail you accept the terms and conditions and
              the privacy policy.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.SubFooterDiv}>
        <div className={classes.USD}>
          <div>
          <Typography variant="BS">United States (USD $)</Typography>
          </div>
          <div className={classes.ArrowStyle}><img src={right} style={{width:'100%',height:'100%'}} alt=""/></div>
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
