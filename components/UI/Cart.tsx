/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Heart, ShoppingCart, Trash } from "iconsax-react";
import StarRating from "./StartRating";
import { NextPage } from "next";

const Cart: NextPage<CartProps> = ({
  item,
  isNew,
  isHot,
  isDraft,
  showDiscount = true,
  isFavorite = true,
  isRed = true,
  ratingPosition = "below",
  wishlist = false,
  recentlyViewed = false,
  cta,
}) => {
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : ""
  );
  const [selectedImage, setSelectedImage] = useState(item.images[0]);

  return (
    <div className="flex flex-col items-start gap-4 w-max">
      <div className="relative flex justify-center items-center w-[270px] h-[250px] rounded-lg bg-secondary-1 group">
        <div
          className={`absolute top-3 left-3 pt-2 pb-1 px-3 flex justify-center items-center rounded  ${
            isDraft
              ? "bg-danger"
              : item.discount && showDiscount
              ? "bg-secondary-2"
              : isNew
              ? "bg-green-500"
              : isHot
              ? "bg-secondary-2"
              : "hidden"
          }`}
        >
          <p className="text-Text-xs text-secondary-1">
            {isDraft
              ? "Draft"
              : item.discount && showDiscount
              ? `-${item.discount}%`
              : isNew
              ? "NEW"
              : isHot
              ? "HOT"
              : ""}
          </p>
        </div>

        {!recentlyViewed && isFavorite && (
          <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex justify-center items-center transition-all hover:scale-110 cursor-pointer">
            {wishlist ? (
              <Trash
                size={20}
                className="text-[#0F0F0F] hover:text-secondary-2"
              />
            ) : (
              <Heart
                size={20}
                className="text-[#0F0F0F] hover:text-secondary-2"
              />
            )}
          </span>
        )}
        <div className="flex max-w-[190px] justify-center items-center">
          <img
            src={selectedImage}
            alt={item.name}
            className="w-full object-cover"
          />
        </div>
        <p
          className={`absolute -bottom-0 w-full h-10 justify-center items-center ${
            !wishlist && !recentlyViewed ? "hidden group-hover:flex" : "flex"
          }  gap-2 bg-[#99E5Ef] text-[#0F0F0F] p-2 rounded-b transition-all cursor-pointer`}
        >
          <ShoppingCart color="#323234" />
          <span className="text-gray-1 text-Text-xs">
            {cta || "Add to cart"}
          </span>
        </p>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="text-Text-md font-medium text-[#0F0F0F]">{item.name}</p>

        <div className="flex items-start text-[#082326] text-Text-md font-medium">
          {item.discount ? (
            <div className="flex items-start gap-3">
              <span
                className={`font-medium ${
                  isRed !== false ? "text-red-500" : "text-primary-green-600"
                }`}
              >
                ${(item.price - item.price * (item.discount / 100)).toFixed(2)}
              </span>
              <span className="line-through text-black/50 font-medium">
                ${item.price}
              </span>
            </div>
          ) : (
            <span className="font-medium">${item.price}</span>
          )}
        </div>

        {!wishlist && item.rating && ratingPosition && (
          <StarRating
            rating={item.rating}
            totalRatings={item.totalRatings || 0}
          />
        )}

        {!wishlist &&
          !recentlyViewed &&
          item.variants &&
          item.variants.length > 1 && (
            <div className="flex items-start gap-2">
              {item.variants.map((variant, index) => (
                <div
                  key={index}
                  className="inline-flex justify-center items-center rounded-full cursor-pointer transition-all hover:scale-110"
                  style={{
                    backgroundColor:
                      selectedVariant === "white"
                        ? "black"
                        : variant === selectedVariant
                        ? "white"
                        : variant,
                    border: `2px solid ${
                      variant === "white" ? "black" : variant
                    }`,
                    width: "24px",
                    height: "24px",
                  }}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setSelectedImage(item.images[index]);
                  }}
                >
                  <span
                    className="block rounded-full"
                    style={{
                      backgroundColor:
                        variant === selectedVariant ? variant : "transparent",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default Cart;
