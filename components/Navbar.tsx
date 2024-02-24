"use client";
import { Input, SelectInput } from "./UI/Input";
import Button from "./UI/Button";
import {
  Heart,
  LoginCurve,
  LogoutCurve,
  MessageQuestion,
  Profile,
  ProfileAdd,
  SearchNormal1,
  ShoppingBag,
  ShoppingCart,
  Star1,
} from "iconsax-react";
import Dropdown from "./UI/Dropdown";
import Logo from "./Logo";
import { NextPage } from "next";
import React,{ useState } from "react";
import Link from "next/link";

const Navbar: NextPage<NavbarProps> = ({ savedItemsCount, cartItemsCount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white fixed flex flex-col justify-center items-center w-full top-0 left-0 z-50 m-auto">
      <div className="bg-primary-green-600 w-full flex items-center justify-center p-2">
        <div className="w-full inline-flex items-center justify-evenly max-w-[1440px]">
          <p className="text-Text-sm text-white font-medium text-center">
            Refer a Friend and Get $5.00 Open 24 hours. Join to Shop Sell
            Anything #WeShipWorldwide #BUY&SELL
          </p>

          <SelectInput
            options={[
              {
                label: "English",
                value: "en",
              },
              {
                label: "Indonesia",
                value: "id",
              },
            ]}
            variant="tertiary"
            inputSize="md"
            caretColor="white"
            optionColor="text-primary-green-600"
          />
        </div>
      </div>

      <div className="max-w-[1440px] py-4 flex justify-center items-center gap-12">
        <Link href="/">
          <Logo />
        </Link>
        <form className="flex gap-2 items-center justify-start w-[600px]">
          <Input
            variant="primary"
            type="text"
            placeholder="Search products, brands and categories"
            leftIcon={<SearchNormal1 size={16} color="#292D32" />}
            width="100%"
          />
          <Button width="106px">Search</Button>
        </form>
        <div className="flex gap-5 items-center justify-start">
          <div className="flex items-center justify-start gap-1">
            <div className="relative">
              {savedItemsCount > 0 && isLoggedIn && (
                <span className="absolute -top-1.5 -right-1.5 bg-secondary-2 text-white rounded-full min-w-5 min-h-5 flex justify-center items-center text-xs">
                  {savedItemsCount}
                </span>
              )}
              <Heart color="#0F0F0F" size={32} />
            </div>
            <span className="text-Text-md font-medium text-dark-gray">
              Saved
            </span>
          </div>

          <Link href="/cart" className="flex items-center justify-start gap-1">
            <div className="relative">
              {cartItemsCount > 0 && isLoggedIn && (
                <span className="absolute -top-1.5 -right-1.5 bg-secondary-2 text-white rounded-full min-w-5 min-h-5 flex justify-center items-center text-xs">
                  {cartItemsCount}
                </span>
              )}
              <ShoppingCart color="#0F0F0F" size={32} />
            </div>
            <span className="text-Text-md font-medium text-dark-gray">
              Cart
            </span>
          </Link>

          <Dropdown
            icon={<MessageQuestion color="#000" />}
            title="Help"
            items={[
              {
                label: "FAQ",
              },
              {
                label: "About Us",
                href: "/about",
              },
              {
                label: "Contact Us",
                href: "/contact",
              },
            ]}
          />

          <Dropdown
            icon={<Profile color="#000" />}
            title="My Account"
            items={
              isLoggedIn
                ? [
                    {
                      icon: <Profile color="#323234" />,
                      label: "My Profile",
                    },
                    {
                      icon: <ShoppingBag color="#323234" />,
                      label: "My Orders",
                    },
                    {
                      icon: <Star1 color="#323234" />,
                      label: "My Wishlist",
                      href: "/wishlist",
                    },
                    {
                      icon: <LogoutCurve color="#B90000" />,
                      label: "Sign Out",
                      onClick() {
                        handleLogOut();
                      },
                      danger: true,
                    },
                  ]
                : [
                    {
                      icon: <LoginCurve color="#323234" />,
                      label: "Sign In",
                      onClick() {
                        handleLogIn();
                      },
                    },
                    {
                      icon: <ProfileAdd color="#323234" />,
                      label: "Sign Up",
                      href: "/auth/signup",
                    },
                    {
                      icon: <Star1 color="#323234" />,
                      label: "My Wishlist",
                    },
                  ]
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
