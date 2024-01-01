// components/StarRating.tsx
import React from "react";
import Star from "./Star";

const StarRating: React.FC<StarRatingProps> = ({ rating, totalRatings }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-start">
      {[...Array(5)].map((_, i) => {
        let fill: "full" | "half" | "empty";
        if (i < Math.floor(rating)) {
          fill = "full";
        } else if (i < Math.ceil(rating) && i >= Math.floor(rating)) {
          fill = "half";
        } else {
          fill = "empty";
        }
        return <Star fill={fill} key={i} />;
      })}
    </div>
    {totalRatings && (
      <span className="text-sm text-black/50 font-semibold">
        ({totalRatings})
      </span>
    )}
  </div>
);

export default StarRating;
