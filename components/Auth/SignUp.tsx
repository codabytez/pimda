import { NextPage } from "next";
import Button from "../UI/Button";
import { FcGoogle } from "react-icons/fc";
import { Input } from "../UI/Input";
import Link from "next/link";
import authOverlay from "@/public/images/auth-overlay.svg";
import authImg from "@/public/images/authImg.png";
import Image from "next/image";

const SignUp: NextPage = () => {
  return (
    <section className="h-[1024px] bg-[#092427CC] relative overflow-hidden">
      <div className="inline-flex py-20 px-[75px] h-full flex-col items-center rounded-r-[32px] bg-white relative z-10">
        <div className="flex flex-col items-start gap-8">
          <p className="text-gray-1 text-Display-xs font-semibold">
            Sign up as a client
          </p>
          <div className="flex flex-col items-start gap-6">
            <div className="flex w-[624px] flex-col items-start gap-6">
              <Button width="100%" size="lg" variant="tertiary">
                <FcGoogle /> Sign in with Google
              </Button>
              <div className="flex w-full justify-center items-center relative">
                <div className="border border-gray-5 absolute w-full" />
                <p className="text-gray-3 text-Text-sm font-semibold p-1 bg-white relative z-10">
                  or
                </p>
              </div>
            </div>

            <form className="flex w-[622px] flex-col items-start gap-6">
              <p className="w-[624px] text-gray-3 font-semibold">
                Sign up with email - Enter your name as it appears on your
                government issued ID (for easy identification verification)
              </p>
              <div className="flex w-[622px] items-start gap-5">
                <Input
                  label="First Name"
                  width="100%"
                  variant="primary"
                  placeholder="John"
                />
                <Input
                  label="Last Name"
                  width="100%"
                  variant="primary"
                  placeholder="Doe"
                />
              </div>
              <Input
                label="Email address"
                variant="primary"
                width="100%"
                placeholder="johndoe@example.com"
              />
              <div className="flex flex-col gap-2 w-full">
                <Input
                  type="password"
                  label="Enter password"
                  placeholder="Enter password"
                  variant="primary"
                />
                <p className="text-gray-4 font-semibold text-Text-sm">
                  Must be at least 8 characters
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Input
                  type="password"
                  label="Confirm password"
                  placeholder="Enter password"
                  variant="primary"
                />
                <p className="text-gray-4 font-semibold text-Text-sm">
                  Must be at least 8 characters
                </p>
              </div>

              <Button width="100%" size="lg">
                Create account
              </Button>

              <p className="text-gray-3 text-Text-lg font-semibold">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-primary-1">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Image
        width={1732.118}
        height={1645.99}
        src={authOverlay}
        alt="auth-overlay"
        className="absolute top-0 -right-24"
      />
      <Image
        width={570}
        height={324}
        src={authImg}
        alt="auth-img"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
};

export default SignUp;
