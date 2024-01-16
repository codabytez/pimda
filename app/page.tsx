import Homepage from "@/components/HomePage/Homepage";
import SecondaryNav from "@/components/HomePage/SecondaryNav";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gray-10">
        <SecondaryNav />
        <Homepage />
      </div>
    </>
  );
};

export default Home;
