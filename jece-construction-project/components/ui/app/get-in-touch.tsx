import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import SectionHeader from "@/components/ui/app/section-header-secondary";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Textarea } from "@/components/ui/shadcn/textarea";
import { contactInfo } from "@/config/contact-info";
import { cn } from "@/lib/utils";
import React from "react";

interface GetInTouchProps {}

const GetInTouch: React.FC<GetInTouchProps> = () => {
  return (
    <React.Fragment>
      <Wrapper className="pt-15 pb-20">
        <Container>
          <SectionHeader label="Contact" title="Get In Touch" />

          <div className="grid grid-cols-2 gap-10">
            <div className="size-full">
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
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <h4 className="mb-4 text-[24px] font-bold">Location</h4>
                  <address className="not-italic text-sm text-app-gray">
                    {contactInfo.address.line}
                  </address>
                </div>
                <div>
                  <h4 className="mb-4 text-[24px] font-bold">Call Us</h4>
                  <mark className="bg-transparent block text-sm text-app-gray">
                    {contactInfo.mobile}
                  </mark>
                  <mark className="bg-transparent block text-sm text-app-gray">
                    {contactInfo.phone}
                  </mark>
                </div>
                <div>
                  <h4 className="mb-4 text-[24px] font-bold">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-app-gray text-sm transition-app-color hover:text-app-blue"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <form>
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
                        "capitalize w-full h-[60px] py-4 px-11",
                        "bg-app-brown text-white cursor-pointer font-semibold rounded-none text-base transition-app-color hover:bg-app-blue"
                      )}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default GetInTouch;
