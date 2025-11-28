import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import { Phone, Clock9, MapPinned } from "lucide-react";
import Mark from "@/components/common/mark";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Address from "@/components/common/address";
import { contactInfo } from "@/config/contact-info";

interface ContactInfoProps {
  imageAlt: string;
  imageSrc: string | StaticImageData;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ imageAlt, imageSrc }) => {
  return (
    <Wrapper className="border-b border-b-black/10">
      <Container className="flex items-center justify-between min-h-27.5">
        <figure className="relative w-full max-w-25">
          <Image alt={imageAlt} src={imageSrc} loading="eager" />
        </figure>

        <ul
          className={cn(
            "flex items-center justify-between gap-10",
            "*:relative",
            "*:not-last:before:absolute",
            "*:not-last:before:top-0",
            "*:not-last:before:right-0",
            "*:not-last:before:block",
            "*:not-last:before:content-['']",
            "*:not-last:before:h-full",
            "*:not-last:before:border-r-px",
            "*:not-last:before:border-r",
            "*:not-last:before:border-r-black/10"
          )}
        >
          <li className="flex items-center gap-5.5">
            <Phone className="size-11 text-app-brown" />

            <div className="space-y-0.5 pr-[36px]">
              <h5 className="">Requesting A Call:</h5>
              <div>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="font-semibold block text-lg"
                >
                  {contactInfo.mobile}
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="font-semibold block text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-5.5">
            <Clock9 className="size-11 text-app-brown" />

            <div className="space-y-0.5 pr-[36px]">
              <h5 className="">Sunday - Friday:</h5>
              <h6 className="font-semibold text-lg">{contactInfo.workHours}</h6>
            </div>
          </li>
          <li className="flex items-center gap-5.5">
            <MapPinned className="size-11 text-app-brown" />

            <div className="space-y-0.5 w-full max-w-65">
              <Address className="font-normal">
                {contactInfo.address.line}
              </Address>
              <h6 className="font-semibold text-lg">
                {contactInfo.address.location}
              </h6>
            </div>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default ContactInfo;
