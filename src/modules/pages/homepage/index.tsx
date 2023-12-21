import CommonNavbar from "../components/Navbar";
import CarousolCompo from "./components/Carousol";
import Location from "./components/Location";
import Summary from "./components/Summary";

const Homepage = () => {
  return (
    <div>
      <CommonNavbar />
      <CarousolCompo />
      <Summary />
      <Location />
    </div>
  );
};

export default Homepage;
