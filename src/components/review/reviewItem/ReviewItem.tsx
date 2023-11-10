import { useEffect, useState } from "react";
import people from "./data";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { getReview } from "../../../redux/ReviewSlice";

const ReviewItem = () => {
  const [index, setIndex] = useState(0);
  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const review = useSelector((state: any) => state.Review.items);

  const reviewValues = Object.values(review);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReview());
  }, []);

  return (
    <article className="Item">
      {reviewValues.map((review: any, index: number) => (
        <div key={index}>
          <div className="img-container">
            <img src={review.image} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{review.name}</h4>
          <p className="job">{review.job}</p>
          <p className="info">{review.review}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ReviewItem;
