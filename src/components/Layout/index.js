import "./index.css";
import React from "react";
import Slider from "../Slider";
import image1 from "./10a-1.jpg";
import image2 from "./6475b07c9b051c031ea7f11e100a8227.jpg";
import image3 from "./Mountain-Landscape-870x522.jpg";
import Header from "../Header";

const Layout = () => {
  const images = [image1, image2, image3];

  return (
    <>
      <Header />
      <Slider images={images} />
    </>
  );
};

export default Layout;
