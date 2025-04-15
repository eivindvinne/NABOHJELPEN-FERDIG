import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PostAd from "./pages/PostAd/PostAd";
import Ads from "./pages/Ads/Ads";
import Contact from "./pages/Contact/Contact";
import AccountOverview from "./pages/Account/Overview";
import MyAds from "./pages/Account/MyAds";
import Favorites from "./pages/Account/Favorites";
import Settings from "./pages/Account/Settings";


function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post-ad" element={<PostAd />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<AccountOverview />} />
        <Route path="/account/my-ads" element={<MyAds />} />
        <Route path="/account/favorites" element={<Favorites />} />
        <Route path="/account/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
