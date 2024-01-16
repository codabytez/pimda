import { Call } from "iconsax-react";
import { Input } from "../UI/Input";
import Button from "../UI/Button";
import BreadCrumbs from "../UI/BreadCrumbs";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <BreadCrumbs
        homeElement="Home"
        separator={<span className="w-[1px] h-4 flex bg-black/50 rotate-12" />}
        activeClasses="!text-black"
        containerClasses="flex items-end h-6 gap-2 text-Text-sm my-5"
        listClasses="text-black/50 capitalize hover:text-black transition-colors duration-300"
        capitalizeLinks
      />
      <section className="flex items-stretch gap-7 max-w-[1170px] mx-auto">
        <div className="inline-flex pt-10 px-9 pb-[88px] flex-col items-start rounded bg-white shadow-category-5 gap-8">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <span className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-5">
                <Call size="24" color="#323234" />
              </span>
              <p className="text-dark-gray font-medium">Call To Us</p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <p className="text-black text-sm w-[262px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-black text-sm">Phone: +889-50400</p>
            </div>
          </div>

          <div className="flex h-[1px] justify-center items-center opacity-50 bg-black w-[270px]" />

          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <span className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-5">
                <Call size="24" color="#323234" />
              </span>
              <p className="text-dark-gray font-medium">Email To Us</p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <p className="text-black text-sm w-[250px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-black text-sm">Emails: info@pimda.biz</p>
            </div>
          </div>
        </div>

        <div className="inline-flex py-10 px-8 rounded bg-white shadow-category-5">
          <form className="flex flex-col items-end gap-8">
            <div className="flex items-start gap-4">
              <Input placeholder="Name" variant="secondary" />
              <Input placeholder="Email" variant="secondary" />
              <Input placeholder="Your Phone" variant="secondary" />
            </div>

            <Input
              placeholder="Your Message"
              variant="secondary"
              rows={207}
              inputType="textarea"
              width="100%"
            />

            <Button>Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
