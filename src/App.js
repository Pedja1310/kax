import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import $ from "jquery";
import WOW from "wowjs";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Popups from "./components/Popups";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import KylePage from "./pages/KylePage";
import KeyPeoplePage from "./pages/KeyPeoplePage";

import "./App.css";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      // on click add class on current item and remove others
      $(".shortcode-page .nav-pills .nav-link").click(function () {
        $(".shortcode-page .nav-pills .nav-link").removeClass("active");
        $(this).addClass("active");
      });

      // on load add class
      $("body").addClass("loaded");

      // popups
      $(".popupp").click(function (e) {
        e.stopPropagation();
        var popupp = $(this).data("popup");
        $("#log-overlay").fadeIn();
        $(popupp).parent().parent(".popup-wrap").addClass("show-popup");
        $(popupp).addClass("show-popup");
      });
      $(".popup").click(function (e) {
        e.stopPropagation();
      });
      $(".popup-wrap-content, .close-popup, .close, .closee").click(
        function () {
          $("#log-overlay").fadeOut();
          $(".popup-wrap").removeClass("show-popup");
          $(".popup").removeClass("show-popup");
        }
      );

      // on scroll
      $(window).on("resize scroll load", function () {
        // on viewport add class
        $(".z-animate").each(function () {
          // var activeElement = $(this).attr("class");
          if ($(this).isInViewport()) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
        // scroll add class
        if ($(window).scrollTop() > 0) {
          $("body").addClass("scrolled");
        } else {
          $("body").removeClass("scrolled");
        }
      });

      // page transition
      $(".transition-page").on("click", function (ev) {
        ev.preventDefault(); // prevent default anchor behavior
        const goTo = $(this).attr("href"); // store anchor href
        $("body").removeClass("loaded");
        setTimeout(function () {
          window.location = goTo;
        }, 500);
      });

      // cookie
      $(".close-cookie, .accespt-btn").on("click", function (e) {
        e.preventDefault(); // prevent default anchor behavior
        $("#cookie-msg-container").fadeOut(500);
      });

      // masonry
      // FlexMasonry.init(".grid", {
      //   responsive: false,
      //   numCols: 2,
      // });

      // ripples
      $("body").ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.02,
      });
      if ($(window).width() <= 1600) {
        $("body").ripples("destroy");
      }

      // wow
      if ($(window).width() <= 768) {
        $(".wow").removeClass("wow");
      }
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: false,
        live: true,
      });
      wow.init();

      // // mobile menu open
      // $(".navbar-toggler").click(function () {
      //   // e.stopPropagation();
      //   $(".navbar-collapse").toggleClass("open");
      // });
      // // open/close menu
      // $(".navbar-toggler").click(function () {
      //   if (!$(".navbar").hasClass("opened-menu")) {
      //     $(".navbar").addClass("opened-menu");
      //   } else {
      //     $(".navbar").removeClass("opened-menu");
      //   }
      // });

      // popup cookie
      //check if the popup has been closed, if not then display the popup
      $(".close-cookie, #cookie-msg-container .bg-overlay").click(function () {
        $(this).parents("#cookie-msg-container").addClass("hide");
      });
      if (getCookie("popupCookie") === "closed") {
        $("#cookie-msg-container").addClass("hide");
      } else {
        setTimeout(function () {
          $("#cookie-msg-container").removeClass("hide");
        }, 3000);
      }
      $(".close-cookie, #cookie-msg-container .bg-overlay").click(function () {
        //sets the coookie to one minute if the popup is closed (whole numbers = days)
        setCookie("popupCookie", "closed", 1);
      });
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

      // on back and forward browser buttons
      // window.location.reload();
      // managage back button click (and backspace)
      // var count = 0; // needed for safari
      // window.onload = function () {
      //     if (typeof history.pushState === "function") {
      //         history.pushState("back", null, null);
      //         window.onpopstate = function () {
      //             history.pushSJJJJJJJ66UUUUUU``````````````````````````````````````````` Gtate('back', null, null);
      //             if(count == 1){window.location = '';}
      //             $('body').removeClass('loaded');
      //          };
      //      }
      //  }
      // setTimeout(function(){count = 1;},200);
      // var count = 0;
      // window.onload = function () {
      //     if (typeof history.pushState === "function") {
      //         history.pushState("forward", null, null);
      //         window.onpopstate = function () {
      //             history.pushState('forward', null, null);
      //             if(count == 1){window.location = '';}
      //             $('body').removeClass('loaded');
      //          };
      //      }
      //  }
      // setTimeout(function(){count = 1;},200);
    });
  });

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/kyle" element={<KylePage />} />
        <Route path="/key-people" element={<KeyPeoplePage />} />
      </Routes>

      <Popups />

      <Footer />
    </div>
  );
}

export default App;
