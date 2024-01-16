import Image from "next/image";
import delivery from "@/public/images/icons/icon-delivery.svg";
import customerService from "@/public/images/icons/icon-customer-service.svg";
import secure from "@/public/images/icons/icon-secure.svg";
import { NextPage } from "next";

const Services: NextPage = () => {
  return (
    <div className="flex justify-center items-stretch gap-[88px] max-w-[1440px] mx-auto">
      <Service
        image={delivery.src}
        title="Free and fast delivery"
        description="Free delivery for all orders over $140"
      />

      <Service
        image={customerService.src}
        title="24/7 customer service"
        description="Friendly 24/7 customer support"
      />

      <Service
        image={secure.src}
        title="Money back guarantee"
        description="7 days return policy"
      />
    </div>
  );
};

export default Services;

const Service: React.FC<serviceProps> = ({ image, title, description }) => {
  return (
    <div className="flex w-[262px] flex-col items-center gap-6">
      <Image src={image} width={80} height={80} alt={title} />
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-dark-gray font-semibold text-center uppercase">
          {title}
        </p>
        <p className="text-dark-gray text-Text-sm text-center">{description}</p>
      </div>
    </div>
  );
};
