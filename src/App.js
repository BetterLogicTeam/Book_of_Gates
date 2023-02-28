import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Footer from "./components/footer/Footer";
import Secone from "./components/secone/Secone";
import ContinousSlider from "./components/SliderImages/ContinousSlider";
import Secthree from "./components/secthree/Secthree";
import Rodmaap from "./components/RoadMap/Rodmaap";
import Header from "./components/Header/Header";
import New from "./components/new/new";
import NewComp from "./components/new-comp/new-comp";
import NewCompThree from "./components/new-comp-three/new-comp-three";
import NewCompFour from "./components/new-comp-four/new-comp-four";
import ScrollUpButton from "react-scroll-up-button";
import ReactScrollDown from "react-scroll-down";
import InfiniteScroll from "react-infinite-scroll-up-n-down";
import { useEffect } from "react";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { useState } from "react";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";

function App() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isScrollingDown) {
        setIsScrollingDown(true);
      } else if (scrollTop === 0 && isScrollingDown) {
        setIsScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    window.document.getElementById("botttom").scrollIntoView();
  };

  return (
    <div className="App">
       

      {isScrollingDown && (
        <div className="scroll-button" onClick={handleScrollUp}>
          <BsArrowUpSquareFill />
        </div>
      )}
      {!isScrollingDown && (
        <a href="#botttom"  className="scroll-button" onClick={handleScrollDown} >
          <BsArrowDownSquareFill />
        </a>
      )}

      <CssBaseline />
      <Header />
      <Secone />
      <Secthree />
      <div className="ok">
        <NewComp />
      </div>

      <div className="new">
        <New />
      </div>

      <div className="ok">
        <NewCompThree />
      </div>

      <div className="newbg">
        <NewCompFour />
      </div>

      <ContinousSlider />

      <div className="MainApp">
        <Rodmaap />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// create button that scroll down and scroll top on window in react js???
