import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import Main from "./Main";
import PopularVenue from "./PopularVenue";
import PopularSearch from "./PopularSearch";
import Heading, { Heading3 } from "./Heading";
import { Heading1 } from "./Heading";
import { Heading2,Heading4,Heading5 } from "./Heading";
import { WMG, wedding } from "../data";
import WeddingCategory from "./WeddingCategory";
import WMGServices from "./WMGServices";
import MobileApp from "./MobileApp";
import RealWedding from "./RealWedding";
import Gallery from "./Gallery";
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
      <div className="row flex-row m-auto w-100 max-width-container flex-wrap" style={{maxWidth:'1200px'}}>
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
    <div>
    <MobileApp />
    </div>
    <Heading4 />
    <RealWedding/>
    <Heading5 />
    <Gallery />
    </div>
  );
};

export default Home;
