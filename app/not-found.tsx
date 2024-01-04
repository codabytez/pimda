import { Metadata } from "next";
import Link from "next/link";
import notFound from "@/public/images/Page-Not-Found.svg";
import Image from "next/image";
import Button from "@/components/UI/Button";
import BreadCrumbs from "@/components/UI/BreadCrumbs";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

const NotFound = () => {
  return (
    <>
      <div className=" mt-[200px]">
        <BreadCrumbs
          homeElement={"Home"}
          separator={
            <span className="w-[1px] h-4 flex bg-black/50 rotate-12" />
          }
          activeClasses="!text-black"
          containerClasses="flex items-end h-6 gap-2 text-Text-sm my-5"
          listClasses="text-black/50 capitalize hover:text-black transition-colors duration-300"
          capitalizeLinks
        />
      </div>

      <main className="flex flex-col items-center justify-center mb-16">
        <div className="w-[543px] h-[250px] relative">
          <Image
            src={notFound}
            alt="Page Not Found"
            width={650}
            height={512}
            className="absolute -top-[130px]"
          />
        </div>
        <div className="inline-flex flex-col items-center gap-4 mb-10">
          <h2 className="text-dark-gray text-[110px] leading-[115px] tracking-[3.3px] font-medium">
            404 Not Found
          </h2>
          <p>Your visited page not found. You may go home if you like.</p>
        </div>
        <Button href="/">Back to home page</Button>
      </main>
    </>
  );
};

export default NotFound;
