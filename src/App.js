import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import $ from "jquery";
import WOW from "wowjs";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import KylePage from "./pages/KylePage";
import KeyPeoplePage from "./pages/KeyPeoplePage";
import CookiesPrompt from "./components/CookiesPrompt";
import EndorsmentPage from "./pages/EndorsmentPage";
import StartAJourneyPage from "./pages/StartAJourneyPage";
import NewsGroupPage from "./pages/NewsGroupPage";
import NewsFullPage from "./pages/NewsFullPage";
import DefaultPage from "./pages/DefaultPage";
import ContactPage from "./pages/ContactPage";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      // on load add class
      $("body").addClass("loaded");

      // wow
      if ($(window).width() <= 768) {
        $(".wow").removeClass("wow");
      }

      window.wow = new WOW.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: false,
        live: true,
      });

      window.wow.init();
    });
  }, []);

  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/kyle" element={<KylePage />} />
        <Route path="/key-people" element={<KeyPeoplePage />} />
        <Route path="/endorsment" element={<EndorsmentPage />} />
        <Route path="/start-a-journey" element={<StartAJourneyPage />} />
        <Route path="/news-group" element={<NewsGroupPage />} />
        <Route path="/news-full" element={<NewsFullPage />} />
        <Route path="/default-page" element={<DefaultPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <CookiesPrompt />

      <Footer />
    </div>
  );
}

export default App;
