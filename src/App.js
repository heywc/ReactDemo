import React from "react";
import Btn from "./components/btn";
import Btn2 from "./components/btn2";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/index";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Btn></Btn>
        <Btn2></Btn2>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
