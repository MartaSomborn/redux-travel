import FilterTravel from "../filter/FilterTravel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Holiday from "../holiday/Holiday";

const Layout = () => {
  return (
    <div>
      <Header />
      <FilterTravel />
      <Holiday />
      <Footer />
    </div>
  );
};

export default Layout;
