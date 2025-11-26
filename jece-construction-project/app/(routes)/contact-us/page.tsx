import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import SectionHeader from "@/components/ui/app/section-header";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/common/section-title";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactUsPageProps {}

const contactInfo = [
  {
    icon: <Phone size={28} className="text-app-brown" />,
    label: "Phone",
    value: "(123) 456-7890",
  },
  {
    icon: <Mail size={28} className="text-app-brown" />,
    label: "Email",
    value: "info@jececonstruction.com",
  },
  {
    icon: <MapPin size={28} className="text-app-brown" />,
    label: "Address",
    value: "123 Main St, City, Country",
  },
];

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Contact Us"
        title="Contact Us"
      />
      <Wrapper className="pt-15">
        <Container>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <SectionHeader>Contact Now</SectionHeader>
              <SectionTitle>Get in touch</SectionTitle>

              <form className={cn("mt-10")}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className={cn(
                      "mb-4 text-sm w-full py-2.5",
                      "border-b border-b-app-light-gray",
                      "focus:outline-hidden focus:border-b-app-brown transition-app-color"
                    )}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={cn(
                      "mb-4 text-sm w-full py-2.5",
                      "border-b border-b-app-light-gray",
                      "focus:outline-hidden focus:border-b-app-brown transition-app-color"
                    )}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className={cn(
                      "mb-4 text-sm w-full py-2.5",
                      "border-b border-b-app-light-gray",
                      "focus:outline-hidden focus:border-b-app-brown transition-app-color"
                    )}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className={cn(
                      "mb-4 text-sm w-full py-2.5",
                      "border-b border-b-app-light-gray",
                      "focus:outline-hidden focus:border-b-app-brown transition-app-color"
                    )}
                  />
                  <div className="col-span-1 md:col-span-2">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className={cn(
                        "mb-4 text-sm w-full py-2.5 min-h-[155px] max-h-[400px]",
                        "border-b border-b-app-light-gray",
                        "focus:outline-hidden focus:border-b-app-brown transition-app-color"
                      )}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <button
                      type="submit"
                      className={cn(
                        "capitalize min-h-[60px] py-4 px-11",
                        "bg-app-brown text-white cursor-pointer font-semibold rounded-none text-base transition-app-color hover:bg-app-blue"
                      )}
                    >
                      Send Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <SectionHeader>Our Info</SectionHeader>
              <SectionTitle>Contact Information</SectionTitle>

              <ul className="mt-10 space-y-6">
                {contactInfo.map((item, idx) => (
                  <li key={item.label} className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-5">
                      {item.icon}
                    </div>
                    <div>
                      <strong className="block mb-1 text-2xl text-[#111111] font-semibold">
                        {item.label}:
                      </strong>
                      <span className="block text-base text-app-gray">
                        {item.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper className="pt-15 h-[450px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193653283903!2d144.96305841531643!3d-37.816279979751975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577306459ec9460!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1717947739896!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Wrapper>
    </>
  );
};

export default ContactUsPage;
