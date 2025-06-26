import { useState } from "react";
import { useStyle } from "./indexStyle";
import Typography from "../typography/component";
import SvgAdd from "../../custom-icons/Add";
import InputField from "../input/input";
import Button from "../button";

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

const Accordian = () => {
  const classes = useStyle();
  const [isDropDownopen, setIsDropDownOpen] = useState<number | null>(null);

  // for opening dropdown
  const toogleSelection = (id: number) => {
    setIsDropDownOpen(isDropDownopen === id ? null : id);
  };
  return (
    <div className={classes.accordContainer}>
      {footer.filteroptions.map((data: any) => (
        <div key={data.id} onClick={() => toogleSelection(data.id)} className={classes.filterHead}>
          {/* head content */}
          <div className={classes.headContent}>
            <Typography variant="TS">{data.name}</Typography>
            <SvgAdd
              
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
          {isDropDownopen === data.id && data.name === "SubCategory" && (
            <div className={classes.expandDiv}>
              {data?.categories?.map((item: any) => (
                <Typography className={classes.textStyle} variant="BM">
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
                  <InputField type="text" placeholder="enter a email" />
                  <Button
                    size="lg"
                    // className={classes.btnStyle}
                    type="button"
                    variant="primary"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
