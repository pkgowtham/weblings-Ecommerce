import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import drive from "../../assets/icons/drive_file_move_rtl.svg";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import SvgUserRound from "../../custom-icons/UserRound";
import Input from "../input";
import TextArea from "../textArea/textArea";
import Button from "../button";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";
import dayjs from "dayjs";
import SvgDelete from "../../custom-icons/Delete";

const Ratings: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { ReviewData, productId } = props;
  const dispatch = useMiddlewareDispatch();
  const { store } = useStore();
  const hasCommentDispatched = useRef(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [rating, setRating] = useState<any>(null);
  const [attachment, setAttachment] = useState<any[]>([]);
  const hasRatingDispatched = useRef(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
  });

  const nameRegex = /^[A-Za-z ]{1,150}$/;
  const descriptionRegex = /^.{1,350}$/;

  const ratings = 4;

  //Ratings getlist
  useEffect(() => {
    if (!hasRatingDispatched.current) {
      dispatch({
        type: "PRODUCT_RATING_GET_API_REQUEST",
        payload: {
          url: "/rating",
          method: "GET",
          query: {
            productId,
          },
        },
      });
      hasRatingDispatched.current = true;
    }
  }, []);

  //comments getlist
  useEffect(() => {
    // if (!hasCommentDispatched.current && rowDataId) {
    if (!hasCommentDispatched.current && productId) {
      dispatch({
        type: "PRODUCT_COMMENT_GETLIST_API_REQUEST",
        payload: {
          url: "/comments",
          method: "GET",
          query: {
            productId,
            // id: '2df8af0e-4710-4523-b285-9d97617ce6ef',
          },
        },
      });
      hasCommentDispatched.current = true;
    }
  }, []);

  //close the form after successfull comment
  useEffect(() => {
    if (store.comment.isSuccessCreate) {
      setIsFormVisible(false);
      dispatch({
        type: "PRODUCT_COMMENT_CREATE_API_CLEAR",
      });
    }
  }, [deepGet(store, "comment.isSuccessCreate")]);

  const RatingStar = (rating: any) => {
    switch (rating) {
      case 1:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 2:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 3:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 4:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      case 5:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      default:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!value.match(nameRegex)) {
          errorMessage = "name must contain only letters and spaces.";
        }
        break;

      case "description":
        if (!value.match(descriptionRegex)) {
          errorMessage =
            "description must contain only letters, numbers and spaces.";
        }

      case "order":
        if (!value.match(descriptionRegex)) {
          errorMessage = "customCode must contain without spaces.";
        }
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleReviewClick = (value: number) => {
    setRating(value + 1);
  };

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleFileChange = (files: any) => {
    if (files) {
      setAttachment([...attachment, ...files]);
    }
  };

  const handleDeleteAttachment = (indexToDelete: number) => {
    setAttachment((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataApi = new FormData();

    if (attachment.length) {
      attachment.forEach((file: any) => {
        formDataApi.append("file", file);
      });
    }

    formDataApi.append("title", formData.title);
    formDataApi.append("reviewValue", rating);
    formDataApi.append("content", formData.content);
    formDataApi.append("name", formData.name);
    formDataApi.append("email", formData.email);
    formDataApi.append("productId", productId);
    formDataApi.append("userId", "001a0ab1-14a1-4016-b2ed-2e9dfa414245");
    dispatch({
      type: "PRODUCT_COMMENT_CREATE_API_REQUEST",
      payload: {
        url: "/comments",
        method: "POST",
        body: formDataApi,
        isMultipart: true,
      },
    });
  };

  return (
    <div className={classes.ReviewContainer}>
      <div className={classes.TextDiv}>
        <Typography variant="TS">Customer Reviews</Typography>
      </div>
      <div className={classes.ReviewWrapper}>
        <div className={classes.ReviewDiv}>
          <div className={classes.StarTextDiv}>
            <div className={classes.starContainer}>
              {/* {Array.from({ length: ratings }).map((_, index) => (
                <SvgStarPurple500
                  viewBox="0 0 20 25"
                  width={20}
                  height={20}
                  className={classes.starColor}
                  key={index}
                />
              ))} */}
              {RatingStar(
                Math.round(
                  Number(store.productRating.dataGet?.data?.formattedAverage)
                )
              )}
            </div>
            <div>
              <Typography variant="BS">
                {" "}
                {`${store.productRating.dataGet?.data?.formattedAverage}`} out
                of 5
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="BS">
              {" "}
              Based on {`${store.productRating.dataGet?.data?.totalReviews}`}{" "}
              reviews
            </Typography>
          </div>
        </div>
        <div className={classes.RatingDiv}>
          <div className={classes.StarLogo}>
            {/* {ReviewData.star.map((log: any, idx: number) => (
              <div className={classes.starContainer}>
                {Array.from({ length: ratings }).map((_, index) => (
                  <SvgStarPurple500
                    viewBox="0 0 20 25"
                    width={20}
                    height={20}
                    className={classes.starColor}
                    key={index}
                  />
                ))}
              </div>
            ))} */}
            <div className={classes.starContainer}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
                <SvgStarPurple500 className={classes.starColor} />
              </div>
            </div>
          </div>
          <div className={classes.Bar}></div>
          <div>3</div>
        </div>
        <div className={classes.CheckBoxButton}>
          <Button
            onClick={isFormVisible ? handleCloseForm : handleOpenForm}
            className={classes.ButtonStyle}
            text={isFormVisible ? "Cancel Review" : "Write a Review"}
          ></Button>
        </div>
      </div>
      {isFormVisible && (
        <div className={classes.WriteDiv}>
          <div className={classes.WriteWrapper}>
            <div className={classes.WriteText}>
              <Typography variant="TS">Write a review</Typography>
            </div>
            <div className={classes.RateText}>
              <Typography variant="BS">Rating</Typography>
            </div>
            <div className={classes.ImgContainer}>
              {ReviewData.icon.map((icon: any, idx: number) => (
                <div
                  key={idx}
                  className={classes.IconStarDiv}
                  onClick={() => handleReviewClick(idx)}
                >
                  <SvgStarPurple500 className={classes.starColor} />
                  {/* <img src={icon.star} className={classes.IconStar} alt="" /> */}
                </div>
              ))}
            </div>
            <div className={classes.FormDiv}>
              <div className={classes.FormWrapper}>
                <label className={classes.Label}>Review Title</label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Give your review a title"
                  className={classes.Input}
                  value={formData.title}
                  onChange={handleInputChange}
                  // error={Boolean(errors.title)}
                  // helperText={errors.title}
                />
              </div>
              <div className={classes.ReviewContain}>
                <label className={classes.Label}>Review</label>
                <TextArea
                  placeholder="Give your review a title"
                  className={classes.ReviewInput}
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  // error={Boolean(errors.content)}
                  // helperText={errors.content}
                />
              </div>
              <div className={classes.FormStyle}>
                <label className={classes.LabelText}>
                  Picture/Video (optional)
                </label>
                <input
                  type="file"
                  id="picture"
                  className={classes.Picture}
                  multiple
                  onChange={(e: any) =>
                    handleFileChange(Array.from(e.target.files))
                  }
                />
                <img src={drive} className={classes.DriveImg} alt="" />
              </div>
              {attachment.length > 0 &&
                attachment.map((item: any, index: any) => (
                  <div className={classes.imagesCon}>
                    <div
                      className={classes.imgDelete}
                      onClick={() => handleDeleteAttachment(index)}
                    >
                      <SvgDelete />
                    </div>
                    <img
                      src={URL.createObjectURL(item)}
                      alt=""
                      className={classes.image}
                    />
                  </div>
                ))}
              <div className={classes.FormWrapper}>
                <label className={classes.Label}>
                  Name (displayed publicly like Anonymous )
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name (public)"
                  className={classes.Input}
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  // error={Boolean(errors.name)}
                  // helperText={errors.name}
                />
              </div>
              <div className={classes.FormWrapper}>
                <label className={classes.Label}>Email</label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your email (private)"
                  className={classes.Input}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  // error={Boolean(errors.email)}
                  // helperText={errors.email}
                />
              </div>
            </div>
            <div className={classes.TextContent}>
              <Typography variant="BS">
                How we use your data: We’ll only contact you about the review
                you left, and only if necessary. By submitting your review, you
                agree to Judge.me’s <strong>terms, privacy </strong> and{" "}
                <strong>content</strong> policies.
              </Typography>
            </div>
            <div className={classes.BtnDiv}>
              <Button
                text={"Cancel Review"}
                onClick={handleCloseForm}
                className={classes.BtnStyles}
              ></Button>
              <Button
                text={"Submit Review"}
                className={classes.BtnStyle}
                onClick={handleSubmitComment}
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* <div className={classes.FeedBack}>
        {store.comment.dataGetList?.data?.map((feed: any, idx: number) => (
          <div key={idx} className={classes.FeedBackDiv}>
            <div className={classes.Nav}>
              {RatingStar(feed?.reviewValue)}
              <div>
                <Typography variant="BS">{dayjs(feed?.createdAt).format('YYYY-MM-DD') }</Typography>
              </div>
            </div>
            <div className={classes.ProfileDiv}>
              <div className={classes.UserLogoDiv}>
               {feed?.user?.dP ?  <img src={feed?.user?.dP || ""} className={classes.UserLogo} alt="User DP" /> : <SvgUserRound />}
              </div>
              <div>
                <Typography variant="TS">{feed.user.displayName}</Typography>
              </div>
            </div>
            <div>
              <div className={classes.Title}>
                <Typography variant="TS">{feed.title}</Typography>
              </div>
              <div>
                <Typography variant="BS">{feed.content}</Typography>
              </div>
            </div>
            <div className={classes.ImgGalleryDiv}>
              {feed.attachment.map((img: any, idx: number) => (
                <div key={idx} className={classes.Img}>
                  <img src={img.fileUrl} className={classes.ImgGallery} alt="" />
                </div>
              ))}
            </div>
          </div>
          
        ))}
      </div> */}
      <div className={classes.FeedBack}>
        {store.comment.dataGetList?.data?.map((feed: any, idx: number) => (
          <div key={idx} className={classes.FeedBackDiv}>
            <div className={classes.Nav}>
              {RatingStar(feed.reviewValue)}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Typography variant="BS" style={{ whiteSpace: "nowrap" }}>
                  {dayjs(feed?.createdAt).format("YYYY-MM-DD")}
                </Typography>
              </div>
            </div>
            <div className={classes.ProfileDiv}>
              <div className={classes.UserLogoDiv}>
                <img src={feed.user.dP} className={classes.UserLogo} alt="" />
              </div>
              <div>
                <Typography variant="TS">{feed.user.displayName}</Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "8px",
              }}
            >
              <Typography variant="TS" className={classes.Title}>
                {feed.title}
              </Typography>
              <Typography
                variant="BS"
                className={classes.description}
                style={{
                  width: "100%",
                  overflowWrap: "break-word",
                }}
              >
                {feed.content}
              </Typography>
            </div>
            <div className={classes.ImgGalleryDiv}>
              {feed.attachment.map((img: any, idx: number) => (
                <div key={idx} className={classes.Img}>
                  <img
                    src={img.fileUrl}
                    className={classes.ImgGallery}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
