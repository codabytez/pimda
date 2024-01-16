import { Moneybag, Sale, Shop, ShoppingBag } from "./WhyusSvg";
import { NextPage } from "next";

const WhyUs: NextPage = () => {
  return (
    <section className="max-w-[1440px] flex items-stretch gap-[30px] justify-center mt-28 mb-20 mx-auto">
      <Frame
        title="Discounted"
        description="Monthly product sale"
        icon={<Sale />}
      />
      <Frame
        title="Great"
        description="Annual gross sale in our site"
        icon={<Moneybag />}
      />
      <Frame
        title="Good"
        description="Customer service in our site"
        icon={<ShoppingBag />}
      />
      <Frame title="Customer" description="Sallers our site" icon={<Shop />} />
    </section>
  );
};

export default WhyUs;

const Frame: React.FC<whyusProps> = ({ title, description, icon }) => {
  return (
    <div className="w-[270px] text-dark-gray flex items-center justify-center py-8 rounded border border-black/30 transition-all duration-300 hover:bg-primary-5 hover:border-0 hover:shadow-category-20 hover:text-white group">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[81px] h-[80px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              className="text-primary-1  transition-all duration-300 group-hover:text-white"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="currentColor"
              />
              <circle cx="40.5" cy="40" r="29" fill="currentColor" />
            </svg>
            <span className="inline-block absolute top-5 left-5">{icon}</span>
          </div>
          <h4 className="text-3xl leading-[30px] font-bold text-center">
            {title}
          </h4>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};
