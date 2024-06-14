import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Main from "./Main";
import PopularVenue from "./PopularVenue";
import PopularSearch from "./PopularSearch";
import Heading, { Heading3 } from "./Heading";
import { Heading1 } from "./Heading";
import { Heading2 } from "./Heading";
import { WMG, wedding } from "../data";
import WeddingCategory from "./WeddingCategory";
import WMGServices from "./WMGServices";
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
      <div className="row justify-content-between flex-row  m-auto w-100 max-width-container flex-wrap" style={{maxWidth:'1200px'}}>
      {
        wedding.map((value,index)=>{
          return(
            <>
              <WeddingCategory 
              key={index}
                title={value.title}
                text={value.text}
                img={value.img}
                backgroundColor={value.backgroundColor}
              />
            </>
          )
        })
      }
      </div>
      <Heading3 />
      <div>
        {
          WMG.map((value,index)=>{
            return(
              <>
                <WMGServices 
                  img={value.img}
                  title={value.title}
                  text={value.text}
                />
              </>
            )
          })
        }
      </div>
     
    </div>
  );
};

export default Home;
