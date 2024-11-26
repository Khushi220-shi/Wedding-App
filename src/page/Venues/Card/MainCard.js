import React from "react";
import VenueCard from "./VenueCard";
import VenueType from "./VenueType";
import VenueBudget from "./VenueBudget";
import LatestReview from "../LatestReview";

const MainCard = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="">
          <VenueCard />
        </div>
        <div>
          <VenueType/>
          <VenueBudget/>
        </div>
      </div>
      <LatestReview/>
    </div>
  );
};

export default MainCard;