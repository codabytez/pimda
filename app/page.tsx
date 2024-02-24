import React from "react";
import Homepage from "@/components/HomePage/Homepage";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gray-10">
        <Homepage />
      </div>
    </>
  );
};

export default Home;
