import ReviewItem from "./reviewItem/ReviewItem";

const Review = () => {
  return (
    <main id="review" className="grid mb-8 place-items-center">
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <ReviewItem />
      </section>
    </main>
  );
};

export default Review;
