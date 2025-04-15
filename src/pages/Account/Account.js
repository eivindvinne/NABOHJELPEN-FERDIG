import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Overview from "./Overview";
import MyAds from "./MyAds";
import Favorites from "./Favorites";
import Settings from "./Settings";

function Account() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Min konto</h2>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/account">Oversikt</Link> |{" "}
        <Link to="/account/my-ads">Mine annonser</Link> |{" "}
        <Link to="/account/favorites">Favoritter</Link> |{" "}
        <Link to="/account/settings">Innstillinger</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="my-ads" element={<MyAds />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Account;
