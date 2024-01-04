import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Team: React.FC = () => {
  return (
    <section className="flex items-stretch justify-center gap-[30px] max-w-[1440px] mx-auto mb-28">
      <TeamMember
        name="Mk3dits"
        role="Agba Designer"
        image="https://via.placeholder.com/370x430/000000/FFFFFF/?text=Mk3dits"
        socials={{
          twitter: "mk3dits",
          instagram: "mk3dits",
          linkedin: "mk3dits",
        }}
      />

      <TeamMember
        name="Codabytez"
        role="Agba Designer Friend"
        image="https://via.placeholder.com/370x430/000000/FFFFFF/?text=Codabytez"
        socials={{
          twitter: "codabytez",
          instagram: "codabytez",
          linkedin: "codabytez",
        }}
      />
    </section>
  );
};

export default Team;

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  socials,
}) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="w-[370px] h-[430px] rounded">
        <Image
          width={370}
          height={430}
          src={image}
          alt={name}
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-dark-gray text-[32px] leading-[30px] tracking-[1.28px] font-medium">
            {name}
          </h3>
          <p className="text-dark-gray">{role}</p>
        </div>

        <div className="flex flex-xtart gap-4">
          <Link
            href={`https://x.com/${socials.twitter}`}
            target="_blank"
            passHref
          >
            <FaXTwitter color="#000" size={24} />
          </Link>
          {socials.instagram && (
            <Link
              href={`https://instagram.com/${socials.instagram}`}
              target="_blank"
              passHref
            >
              <FaInstagram color="#000" size={24} />
            </Link>
          )}

          {socials.linkedin && (
            <Link
              href={`https://linkedin.com/in/${socials.linkedin}`}
              target="_blank"
              passHref
            >
              <FaLinkedinIn color="#000" size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
