import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/events/Events";
import { DotLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(()=>{
        setLoading(false);
      },2000)
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <Router>
      {loading && (
        <div className="splash-loader">
        <DotLoader className="loader"
          size={100}
          color="var(--violet-color)"
        />
        <p>Decrypting Magic...</p>
        </div>
      )}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
