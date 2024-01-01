import Link from "next/link";
import notFound from "@/public/images/Page-Not-Found.svg";
import Image from "next/image";
import Button from "@/components/UI/Button";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <Image src={notFound} alt="Page Not Found" width={650} height={512} />
      <div className="inline-flex flex-col items-center gap-4 mb-10">
        <h2 className="text-dark-gray text-[110px] leading-[115px] tracking-[3.3px] font-medium">
          404 Not Found
        </h2>
        <p>Your visited page not found. You may go home if you like.</p>
      </div>
      <Button href="/">Back to home page</Button>
    </div>
  );
};

export default NotFound;
