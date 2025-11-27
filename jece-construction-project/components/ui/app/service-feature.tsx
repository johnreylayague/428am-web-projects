import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import {
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Layers,
} from "lucide-react";
import SectionTitle from "@/components/common/section-title";
import Paragraph from "@/components/common/pharagraph";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";

interface ServiceFeatureProps {}

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <Facebook className="w-5 h-5 text-gray-500 transition-app-color group-hover:text-white" />
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <Twitter className="w-5 h-5 text-gray-500 transition-app-color group-hover:text-white" />
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <Instagram className="w-5 h-5 text-gray-500 transition-app-color group-hover:text-white" />
    ),
  },
];

const featureItems = [
  {
    icon: <CheckCircle className="size-[48px] text-app-blue" />,
    title: "Experienced Team",
    subtitle: "Startup Guidance",
  },
  {
    icon: <Star className="size-[48px] text-app-blue" />,
    title: "Quality Assurance",
    subtitle: "Top-notch Results",
  },
  {
    icon: <Layers className="size-[48px] text-app-blue" />,
    title: "Comprehensive Solutions",
    subtitle: "All-In-One Service",
  },
  {
    icon: <CheckCircle className="size-[48px] text-app-blue" />,
    title: "Client Focused",
    subtitle: "Personalized Approach",
  },
];

const ServiceFeature: React.FC<ServiceFeatureProps> = () => {
  return (
    <Wrapper type="section" className="pt-[100px] pb-[90px]">
      <Container>
        <FeatureHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-4">
            <SectionTitle type="h3" className="text-3xl">
              About the Research
            </SectionTitle>

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipimagn aliqua. Ut enims
              ad minim veniam. Aenean mus et magnis dis partu rient to
              montes.Aene an massa.
            </Paragraph>

            <ul className="mt-8 relative *:py-5 *:not-last:border-b-2 *:border-b-[#ebebeb]">
              {featureItems.map((item, idx) => (
                <FeatureListItem
                  key={idx}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </ul>
          </div>

          <div className="col-span-8">
            <ServiceFeatureCarousel />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ServiceFeature;

interface FeatureHeaderProps {}

const FeatureHeader: React.FC<FeatureHeaderProps> = () => (
  <div className="py-[30px] px-[40px] mb-[50px] flex items-center justify-between bg-app-lightest-gray">
    <ul className="flex space-x-4">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-app-silver-gray flex items-center justify-center w-10 h-10 rounded-none transition-app-color hover:bg-app-blue group cursor-pointer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex space-x-2">
      <button
        type="button"
        className="border border-app-dark rounded-none flex items-center justify-center w-10 h-10 transition-app-color hover:bg-app-blue group cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-app-dark transition-app-color group-hover:text-white" />
      </button>
      <button
        type="button"
        className="border border-app-dark rounded-none flex items-center justify-center w-10 h-10 transition-app-color hover:bg-app-blue group cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-app-dark transition-app-color group-hover:text-white" />
      </button>
    </div>
  </div>
);

interface FeatureListItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({
  icon,
  title,
  subtitle,
}) => (
  <li className="flex items-start gap-5">
    <span>{icon}</span>
    <div>
      <SectionTitle type="h4" className="font-semibold text-lg mb-1">
        {title}
      </SectionTitle>
      <div className="text-app-gray text-sm">{subtitle}</div>
    </div>
  </li>
);

interface ServiceFeatureCarouselProps {}

const ServiceFeatureCarousel: React.FC<ServiceFeatureCarouselProps> = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <figure className="size-full">
            <Image
              src="https://placehold.co/600x400"
              alt="Sub service illustration"
              width={600}
              height={400}
              className="size-full object-center object-cover"
            />
          </figure>
        </CarouselItem>
        <CarouselItem>
          <figure className="size-full">
            <Image
              src="https://placehold.co/600x400"
              alt="Sub service illustration"
              width={600}
              height={400}
              className="size-full object-center object-cover"
            />
          </figure>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
