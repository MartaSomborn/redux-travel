import FilterTravel from "../filter/FilterTravel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Holiday from "../holiday/Holiday";
import Questions from "../questions/Questions";
import Review from "../review/Review";

const Layout = () => {
  return (
    <div>
      <Header />
      <FilterTravel />
      <Holiday />
      <Review />
      <Questions />
      <Footer />
    </div>
  );
};

export default Layout;
