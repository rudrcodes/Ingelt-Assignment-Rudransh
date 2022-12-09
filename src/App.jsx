// import "./App.css";
import "./style.css";
import { Navbar } from "./components/navbar/Navbar";
import { RightSide } from "./components/right side/RightSide";
import { LeftSide } from "./components/left side/LeftSide";
import { MiddleComp } from "./components/middle comp/MiddleComp";
import { Home } from "./components/home/Home";
import { FeelingLucky } from "./components/feeling lucky/FeelingLucky";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home>
        <LeftSide />
        <MiddleComp />
        <RightSide />
      </Home>
        {/* <FeelingLucky/> */}
    </div>
  );
}

export default App;
