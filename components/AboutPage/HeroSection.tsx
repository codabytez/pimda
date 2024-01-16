import { NextPage } from "next";

const HeroSection: NextPage = () => {
  return (
    <section className="flex items-center justify-center h-[609px] w-full">
      <div className="flex flex-col items-end justify-center gap-4 bg-primary-6 h-full basis-5/12">
        <div className="flex w-[418px] flex-col items-start gap-10 mr-7">
          <h1 className="text-gray-1 font-semibold text-[54px] leading-[64px] tracking-[3.24px] text-justify">
            What we offer
          </h1>

          <p className="text-gray- w-[356px]">
            Express Supplies, Fastest same day or next hour deliveries.
            Pimda.biz . Ai driven multi user, physical, digital social
            marketplace & e trading platform. We offer B2B, B2C, etrading,
            wholesale & retail shopping ecommerce services. Supply Chain
            Optimization, Long Distance Short Distance, last mile, doorstep
            shipping & E Logistics. We handle store, sale, resell & also agri
            business support.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4 bg-primary-green-600 h-full  basis-7/12">
        <div
          className="flex w-[837px] h-[609px] shrink-0"
          style={{
            background:
              "url('/images/about-hero-img.png'),  -75.694px 0px / 109.126% 100% no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
