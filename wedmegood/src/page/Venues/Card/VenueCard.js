import React from "react";
import { venueCard } from "../../../data";
import VenueCardItem from "./VenueCardItem";

const VenueCard = () => {
  return (
    <div className="mt-5">
      <div>
        {venueCard.map((value, index) => (
          <VenueCardItem key={index} value={value} />
        ))}
      </div>
    </div>
  );
};

export default VenueCard;
