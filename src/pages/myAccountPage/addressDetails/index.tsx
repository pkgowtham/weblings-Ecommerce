import { useState } from "react";
import Button from "../../../component/button";
import Typography from "../../../component/typography/component";
import { useStyle } from "./indexstyle";
import Input from "../../../component/input";

const AddressDetails = () => {
  const classes = useStyle();
  const [submittedAddresses, setSubmittedAddresses] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isFormSection, setIsFormSection] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    phone: "",
    country: "",
    postalcode: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    phone: "",
    country: "",
    postalcode: "",
  });

  const firstNameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/;
  const lastNameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/;
  const companyRegex = /^[A-Za-z0-9]+(?:[&.,\- ][A-Za-z0-9]+)*$/;
  const address1Regex = /^[A-Za-z0-9#.,\- ]{5,100}$/;
  const address2Regex = /^[A-Za-z0-9#.,\- ]{0,100}$/;
  const cityRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const numberRegex = /^\+?[0-9]{7,15}$/;
  const postalCodeRegex = /^\d{6}$/;

  //   validation
  const handleErrorMessage = (e: any) => {
    const { name, value } = e.target;

    let errorMsg = "";

    // validation logic
    if (name === "firstname" && !firstNameRegex.test(value)) {
      errorMsg = "Invalid first name";
    } else if (name === "lastname" && !lastNameRegex.test(value)) {
      errorMsg = "Invalid last name";
    } else if (name === "company" && !companyRegex.test(value)) {
      errorMsg = "Invalid company name";
    } else if (name === "address1" && !address1Regex.test(value)) {
      errorMsg = "Invalid address";
    } else if (name === "address2" && !address2Regex.test(value)) {
      errorMsg = "Invalid address";
    } else if (name === "city" && !cityRegex.test(value)) {
      errorMsg = "Invalid city name";
    } else if (name === "phone" && !numberRegex.test(value)) {
      errorMsg = "Invalid phone number";
    } else if (name === "postalcode" && !postalCodeRegex.test(value)) {
      errorMsg = "Invalid postal code";
    } else if (name === "country" && !cityRegex.test(value)) {
      errorMsg = "Invalid country";
    }
    // update state
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: errorMsg });
  };
  //   submitteddata
  const handleSubmit = () => {
    if (isEditing && editIndex !== null) {
      const updatedAddresses = [...submittedAddresses];
      updatedAddresses[editIndex] = formData;
      setSubmittedAddresses(updatedAddresses);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setSubmittedAddresses([...submittedAddresses, formData]);
    }
    // Reset form fields
    setFormData({
      firstname: "",
      lastname: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      phone: "",
      country: "",
      postalcode: "",
    });

    // Reset errors but keep previous state structure
    setErrors({
      firstname: "",
      lastname: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      phone: "",
      country: "",
      postalcode: "",
    });
  };
  // handle edit
  const handleEdit = (index: any) => {
    setIsFormSection(true);
    setIsEditing(true);
    setEditIndex(index);
    setFormData(submittedAddresses[index]);
  };
  //   hadle delete
  const handleDelete = (index: any) => {
    setSubmittedAddresses(submittedAddresses.filter((_, i) => i !== index));
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.buttonContainer}>
        <Typography variant="TM">Your addresses ({submittedAddresses.length})</Typography>
        <Button
          className={classes.btnStyle}
          onClick={() => setIsFormSection(!isFormSection)}
          text={"Add a new address"}
        ></Button>
      </div>
      {/* formsection */}
      {isFormSection && (
        <div className={classes.formContainer}>
          <div className={classes.inputDiv}>
            <Typography variant="BM">First name</Typography>
            <Input
              value={formData.firstname}
              name="firstname"
              onChange={handleErrorMessage}
              type="text"
              placeholder="First name"
            />
            {errors.firstname && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.firstname}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Last name</Typography>
            <Input
              value={formData.lastname}
              name="lastname"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Last name"
            />
            {errors.lastname && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.lastname}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Company</Typography>
            <Input
              value={formData.company}
              name="company"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Company"
            />
            {errors.company && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.company}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Address 1</Typography>
            <Input
              value={formData.address1}
              name="address1"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Address 1"
            />
            {errors.address1 && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.address1}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Address 2</Typography>
            <Input
              value={formData.address2}
              name="address2"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Address 2"
            />
            {errors.address2 && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.address2}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">City</Typography>
            <Input
              value={formData.city}
              name="city"
              onChange={handleErrorMessage}
              type="text"
              placeholder="City"
            />
            {errors.city && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.city}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Phone</Typography>
            <Input
              value={formData.phone}
              name="phone"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Phone"
            />
            {errors.phone && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.phone}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Country/region</Typography>
            <Input
              name="country"
              type="text"
              placeholder="enter a country"
              onChange={handleErrorMessage}
              value={formData.country}
            />
            {errors.country && (
              <Typography variant="Bs" className={classes.errorMsg}>
                {errors.country}
              </Typography>
            )}
          </div>
          <div className={classes.inputDiv}>
            <Typography variant="BM">Postal/ZIP code</Typography>
            <Input
              value={formData.postalcode}
              name="postalcode"
              onChange={handleErrorMessage}
              type="text"
              placeholder="Postal/ZIP code"
            />
            {errors.postalcode && (
              <Typography variant="BS" className={classes.errorMsg}>
                {errors.postalcode}
              </Typography>
            )}
          </div>
          {/* check box */}
          <div className={classes.checkBox}>
            <input type="checkbox" />
            <Typography variant="BM"> Set as default address</Typography>
          </div>
          {/* button section */}
          <div className={classes.btnContainer}>
            <Button
              className={classes.btnStyle}
              onClick={handleSubmit}
              text={isEditing ? "Update Address" : "Add a new address"}
            ></Button>
            <Button
              className={classes.btnStyle}
              onClick={() => setIsFormSection(false)}
              text={"Cancel"}
            ></Button>
          </div>
        </div>
      )}
      {/* default address */}
      {submittedAddresses.map((data: any, index: any) => (
        <div key={index} className={classes.addressContainer}>
          <Typography variant="TM">Default addresses</Typography>
          <div className={classes.defaultAddress}>
            <div className={classes.headerCont}>
              <Typography variant="TS">
                {data?.firstname || ""} (Default addresses)
              </Typography>
            </div>
            {/* address info */}
            <div className={classes.addressInfo}>
              <Typography className={classes.textColor} variant="BM">
                {data?.firstname || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.lastname || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.company || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.address1 || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.address2 || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.city || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.phone || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.country || ""}
              </Typography>
              <Typography className={classes.textColor} variant="BM">
                {data?.postalcode || ""}
              </Typography>
            </div>
            {/* button section */}
            <div className={classes.btnCont}>
              <Button
                onClick={() => handleEdit(index)}
                className={classes.btnStyle}
                text={"Edit"}
              ></Button>
              <Button
                onClick={() => handleDelete(index)}
                className={classes.btnStyle}
                text={"Delete"}
              ></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressDetails;
