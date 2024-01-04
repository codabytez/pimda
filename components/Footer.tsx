import { Apple, Copyright, GooglePlay, Send } from "iconsax-react";
import React from "react";
import { Input } from "./UI/Input";
import playstore from "@/public/images/play-app-store-label-logo.png";
import appstore from "@/public/images/download-appstore.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer: React.FC = () => (
  <footer className="bg-primary-green-600">
    <div className="flex max-w-[1440px] h-[440px] m-auto pt-20 pb-6 flex-col justify-end items-center gap-24">
      <div className="flex items-start gap-12">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-6">
            <p className="text-Text-xl text-white font-medium">Download App</p>

            <div className="flex flex-col items-start gap-2">
              <p className="text-white text-Text-xs font-medium opacity-70">
                Save $3 with App New User Only
              </p>

              <div className="flex items-center gap-2 w-[194px]">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="w-[192px] flex items-start justify-start">
                    <MobileAppStoreBadge
                      store="GooglePlay"
                      variant="Black"
                      size="Large"
                    />
                  </div>

                  <div className="w-[192px] flex items-start justify-start">
                    <MobileAppStoreBadge
                      store="Appstore"
                      variant="Black"
                      size="Large"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <FaXTwitter color="#FFF" size={24} />
            <FaFacebookF color="#FFF" size={24} />
            <FaInstagram color="#FFF" size={24} />
            <FaLinkedinIn color="#FFF" size={24} />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-Text-xl text-white font-medium">Support</p>

          <div className="flex flex-col items-start gap-2">
            <Link href="#" className="text-white text-Text-md">
              Support ticket
            </Link>
            <Link href="#" className="text-white text-Text-md">
              info@pimda.biz
            </Link>
            <Link href="#" className="text-white text-Text-md">
              889-50400
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-Text-xl text-white font-medium">ACCOUNT INFO</p>

          <div className="flex flex-col items-start gap-2">
            <Link href="#" className="text-white text-Text-md">
              Profile Info
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Wish List
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Track Order
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Refund Policy
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Return Policy
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Cancellation Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-Text-xl text-white font-medium">SPECIAL</p>

          <div className="flex flex-col items-start gap-2">
            <Link href="#" className="text-white text-Text-md">
              Featured Products
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Latest Products
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Best Selling Products
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Top Rated Products
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-Text-xl text-white font-medium">Quick Link</p>

          <div className="flex flex-col items-start gap-2">
            <Link href="#" className="text-white text-Text-md">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white text-Text-md">
              Terms Of Use
            </Link>
            <Link href="#" className="text-white text-Text-md">
              FAQ
            </Link>
            <Link href="/contact" className="text-white text-Text-md">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-Text-xl text-white font-medium">Newsletter</p>

          <div className="flex flex-col items-start gap-2">
            <p className="text-white text-Text-md">
              Subscribe to our news channel
            </p>
            <Input
              variant="default"
              placeholder="Enter your email"
              rightIcon={
                <Link href="#">
                  {" "}
                  <Send color="#FFF" />{" "}
                </Link>
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center opacity-40 w-full">
        <div className="w-full h-[1px] flex justify-center items-center bg-white/40" />
        <div className="flex items-center gap-1.5">
          <Copyright size={16} color="#FFF" />
          <p className="text-white text-Text-md">
            Copyright Pimda {new Date().getFullYear()}. All right reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

type Variant = "Black" | "White" | "Ghost";
type Size = "Small" | "Large";
type Store = "GooglePlay" | "Appstore";

const MobileAppStoreBadge: React.FC<{
  store: Store;
  variant: Variant;
  size: Size;
}> = ({ variant, size, store }) => {
  return (
    <Image
      src={`/images/Type=${variant}BackgroundDigitalStore=${store}Size=${size}.svg`}
      alt={variant}
      width={size === "Small" ? 122 : 189}
      height={size === "Small" ? 36 : 56}
    />
  );
};
