import Homepage from "@/components/HomePage/Homepage";
import SecondaryNav from "@/components/HomePage/SecondaryNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gray-10 pt-[170px] pb-28">
        <SecondaryNav />
        <Homepage />
      </main>
    </>
  );
}
