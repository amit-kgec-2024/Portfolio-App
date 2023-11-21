
import "./App.css";
import NavBarLg from "./component/NavBarLg";
import HomeSec from "./component/HomeSec";
import AboutSec from "./component/AboutSec";
import ResumeSec from "./component/ResumeSec";
import ContactSec from "./component/ContactSec";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import PageError from "./component/PageError";
import NavbarSm from "./component/NavbarSm";
import ProjectSec from "./component/ProjectSec";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBarLg />
        <NavbarSm />
        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/about" element={<AboutSec />} />
          <Route path="/resume" element={<ResumeSec />} />
          <Route path="/projectsec" element={<ProjectSec />} />
          <Route path="/contact" element={<ContactSec />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
