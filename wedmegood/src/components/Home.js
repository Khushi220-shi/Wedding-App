import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Main from "./Main";
import PopularVenue from "./PopularVenue";
import PopularSearch from "./PopularSearch";
import Heading from "./Heading";
import { Heading1 } from "./Heading";
import { Heading2 } from "./Heading";
const Home = () => {
  return (
    <div>
      <Header />
      <Header1 />
      <Main />
      <Heading />
      <PopularVenue />
      <Heading1 />
      <PopularSearch />
      <Heading2 />
    </div>
  );
};

export default Home;
