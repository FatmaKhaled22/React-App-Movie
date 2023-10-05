import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
