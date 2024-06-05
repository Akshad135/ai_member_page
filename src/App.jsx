import "./App.css";
import Scroller from "./components/scroller";
import EventSection from "./components/eventsSection";
import HeroSection from "./components/heroSection";
// import Navbar from "./components/navbar";
import LocomotiveScroll from "locomotive-scroll";
import Homebot from "./components/Homebot";
import ProjectsSection from "./components/projectsSection";
import BrandingSection from "./components/teamMembers";
import MembersSection from "./components/member";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import GallerySection from "./components/gallerySection";
import ProjectsPage from "./components/projectsPage";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
    });
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
              <Homebot />
              <HeroSection />
              <EventSection />
              <GallerySection />
              <ProjectsSection />
              <BrandingSection />
              <Scroller />
            </>
          }
        />
        <Route path="/members" element={<MembersSection />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
