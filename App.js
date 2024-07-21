import "./App.css";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import About from "./components/About";

function App() {
  return (
    <>
     
    <Navbar title="TextUtils" about="About us"/>
    <div className="container  my-5">
    <Textfrom  heading="Input Text to Convert"/>
    </div>
    <About/>
  </>
  );
}

export default App;
