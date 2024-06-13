import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Main from "./Main";
import PopularVenue from "./PopularVenue";
import { popular } from "../data";
import Heading from "./Heading";
const Home = () => {
  console.log("..", popular);
  return (
    <div>
      <Header />
      <Header1 />
      <Main />
      <Heading />
      <div>
        {popular &&
          popular.map((value, index) => {
            console.log("popular");
            return (
              <>
                <PopularVenue
                  title={value.title}
                  dec={value.dec}
                  img={value.img}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
