import React, { useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../typography/component";
import star from "../../assets/icons/staricon.png";
import drive from "../../assets/icons/drive_file_move_rtl.svg";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";

const Ratings: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { ReviewData } = props;
  const [isFormVisible, setIsFormVisible] = useState(false);

  const ratings = 4

  const handleOpenForm =()=>{
    setIsFormVisible(true)
  }
  const handleCloseForm  =()=>{
    setIsFormVisible(false)
  }
  return (
    <div className={classes.ReviewContainer}>
      <div className={classes.TextDiv}>
        <Typography variant="TS">Customer Reviews</Typography>
      </div>
      <div className={classes.ReviewWrapper}>
        <div className={classes.ReviewDiv}>
          <div className={classes.StarTextDiv}>
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
            <div>
              <Typography variant="BS"> 5.00 out of 5</Typography>
            </div>
          </div>
          <div>
            <Typography variant="BS"> Based on 3 reviews</Typography>
          </div>
        </div>
        <div className={classes.RatingDiv}>
          <div className={classes.StarLogo}>
            {ReviewData.star.map((log: any, idx: number) => (
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
            ))}
          </div>
          <div className={classes.Bar}></div>
          <div>3</div>
        </div>
        <div className={classes.CheckBoxButton}>
          <button onClick={isFormVisible ? handleCloseForm:handleOpenForm} className={classes.ButtonStyle}>{isFormVisible ? 'Cancel Review':'Write a Review'}</button>
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
            {ReviewData.icon.map((icon:any,idx:number)=>(
              <div key={idx} className={classes.IconStarDiv}>
                <img src={icon.star} className={classes.IconStar} alt=""/>
              </div>
            ))}
          </div>
          <div className={classes.FormDiv}>
            <div className={classes.FormWrapper}>
              <label className={classes.Label}>Review Title</label>
              <input
                type="text"
                id="reviewtitle"
                placeholder="Give your review a title"
                className={classes.Input}
              />
            </div>
            <div className={classes.ReviewContain}>
              <label className={classes.Label}>Review</label>
              <input
                type="text"
                id="review"
                placeholder="Give your review a title"
                className={classes.ReviewInput}
              />
            </div>
            <div className={classes.FormStyle}>
              <label className={classes.LabelText}>Picture/Video (optional)</label>
              <input type="file" id="picture" className={classes.Picture} />
              <img src={drive} className={classes.DriveImg} alt=""/>
            </div>
            <div className={classes.FormWrapper}>
              <label className={classes.Label}>
                Name (displayed publicly like Anonymous )
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name (public)"
                className={classes.Input}
              />
            </div>
            <div className={classes.FormWrapper}>
              <label className={classes.Label}>
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email (private)"
                className={classes.Input}
              />
            </div>
          </div>
          <div className={classes.TextContent}>
            <Typography variant="BS">How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s <strong>terms, privacy </strong> and <strong>content</strong> policies.</Typography>
          </div>
          <div className={classes.BtnDiv}>
            <button onClick={handleCloseForm} className={classes.BtnStyles}>Cancel Review</button>
            <button className={classes.BtnStyle}>Submit Review</button>
          </div>
        </div>
      </div>
      )}
      <div className={classes.FeedBack}>
        {ReviewData.feedback.map((feed: any, idx: number) => (
          <div key={idx} className={classes.FeedBackDiv}>
            <div className={classes.Nav}>
              <div className={classes.StarLogo}>
                {feed.star.map((log: any, idx: number) => (
                  <div className={classes.StarLogo} key={idx}>
                    <img src={log.logo} className={classes.Star} alt="" />
                  </div>
                ))}
              </div>
              <div>
                <Typography variant="BS">{feed.date}</Typography>
              </div>
            </div>
            <div className={classes.ProfileDiv}>
              <div className={classes.UserLogoDiv}>
                <img src={feed.logo} className={classes.UserLogo} alt="" />
              </div>
              <div>
                <Typography variant="TS">{feed.name}</Typography>
              </div>
            </div>
            <div>
              <div className={classes.Title}>
                <Typography variant="TS">{feed.title}</Typography>
              </div>
              <div>
                <Typography variant="BS">{feed.description}</Typography>
              </div>
            </div>
            <div className={classes.ImgGalleryDiv}>
              {feed.image.map((img: any, idx: number) => (
                <div key={idx} className={classes.Img}>
                  <img src={img.logo} className={classes.ImgGallery} alt="" />
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
