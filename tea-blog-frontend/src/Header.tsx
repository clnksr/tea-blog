import React from "react";
import image from "./matcha-hand.png";
import "./css/Header.css";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="logo">leafy 🍃</div>
        <div className="menu">Kategorien -- About the Author</div>
      </div>
      <div className="title-text-box">
        <h1 className="first-title">
          Welcome to the magic world of
          <br />
          leaves and hot water!
        </h1>
        <h2 className="second-title">I'm glad you're here. Start with this:</h2>
        <img src={image} alt="a hand holding a cup of matcha tea" />
      </div>
    </>
  );
};

export default Header;
