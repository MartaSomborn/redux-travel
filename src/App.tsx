import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import PopularDestinationsCountry from "./components/filter/popularDestinations/PopularDestinationsCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/destination/:country"
            element={<PopularDestinationsCountry />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
