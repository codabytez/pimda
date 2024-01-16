import ps5 from "@/public/images/ps5-slim-goedkope-playstation.png";
import woman_on_hat from "@/public/images/woman-wearing-hat.png";
import speakers from "@/public/images/amazon-echo.png";
import perfume from "@/public/images/perfume.png";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

const Collections: NextPage = () => {
  return (
    <section className=" max-w-[1240px] mx-auto my-8 px-[35px] pt-[42px] pb-[97px] rounded-lg bg-gray-9 grid grid-cols-4 gap-8">
      <div className="w-[570px] h-[600px] rounded-lg bg-primary-green-600 col-span-2 row-span-2 flex justify-center items-end shrink-0 relative">
        <Image width={511} height={511} src={ps5} alt="ps5" />

        <div className="flex flex-col items-start justify-center gap-4 absolute bottom-6 left-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="text-text text-Display-xs leading-6 font-semibold">
              PlayStation 5
            </h4>
            <p className="text-text text-Text-sm w-[242px]">
              Black and White version of the PS5 coming out on sale.
            </p>
          </div>
          <Link
            href="#"
            className="text-white font-medium text-Text-md underline"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="w-[570px] h-[284px] rounded-lg bg-primary-green-600  col-span-2 flex justify-end items-center shrink-0 relative">
        <Image width={432} height={286} src={woman_on_hat} alt="woman on hat" />

        <div className="flex flex-col items-start justify-center gap-4 absolute bottom-6 left-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="text-text text-Display-xs leading-6 font-semibold">
              Women&apos;s Collection
            </h4>
            <p className="text-text text-Text-sm w-[255px]">
              Featured woman collections that give you another vibe.
            </p>
          </div>
          <Link
            href="#"
            className="text-white font-medium text-Text-md underline"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="w-[270px] h-[284px] rounded-lg bg-primary-green-600 flex justify-center items-center shrink-0 relative">
        <Image width={190} height={221} src={speakers} alt="speakers" />

        <div className="flex flex-col items-start justify-center gap-4 absolute bottom-6 left-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="text-text text-Display-xs leading-6 font-semibold">
              Speakers
            </h4>
            <p className="text-text text-Text-sm w-[191px]">
              Amazon wireless speakers
            </p>
          </div>
          <Link
            href="#"
            className="text-white font-medium text-Text-md underline"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="w-[270px] h-[284px] rounded-lg bg-primary-green-600 flex justify-center items-center shrink-0 relative">
        <Image width={190} height={221} src={perfume} alt="perfume" />

        <div className="flex flex-col items-start justify-center gap-4 absolute bottom-6 left-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="text-text text-Display-xs leading-6 font-semibold">
              Perfume
            </h4>
            <p className="text-text text-Text-xs w-[191px]">
              GUCCI INTENSE OUD EDP
            </p>
          </div>
          <Link
            href="#"
            className="text-white font-medium text-Text-md underline"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
