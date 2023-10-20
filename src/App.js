
import "./App.css";
import NavBar from "./component/NavBar";
import HomeSec from "./component/HomeSec";
import AboutSec from "./component/AboutSec";
import ResumeSec from "./component/ResumeSec";
import ContactSec from "./component/ContactSec";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import ProjectSec from "./component/ProjectSec";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/about" element={<AboutSec />} />
          <Route path="/resume" element={<ResumeSec />} />
          <Route path="/projects" element={<ProjectSec />} />
          <Route path="/contact" element={<ContactSec />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
