import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import Pharagraph from "@/components/common/pharagraph";

interface ProjectChallengeProps {}

const ProjectChallenge: React.FC<ProjectChallengeProps> = () => {
  return (
    <Wrapper type="section" className="relative">
      <Container className="bg-app-brown relative before:content-[''] before:absolute before:right-0 before:top-0 before:bottom-0 before:w-[500%] before:bg-app-brown">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 z-10">
          <div className="col-span-5">
            <figure className="-mt-[40px]">
              <Image
                src="https://placehold.co/600x444"
                alt="Project Challenges"
                width={600}
                height={444}
                className="w-full h-[444px] object-cover"
              />
            </figure>
          </div>
          <div className="col-span-7">
            <div className="pt-[60px] pl-[30px] pr-[80px] pb-[40px]">
              <SectionTitle type="h2" className="mb-4 text-white">
                Project Challenges
              </SectionTitle>
              <Pharagraph className="mb-4 text-white">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but ecause those who do not know how to
                pursue pleasure rationally encounter consequences that are
                extremely painful.
              </Pharagraph>
              <Pharagraph className="mb-4 text-white">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms
                of, so blinded by desire, that they cannot foresee the pain and
                trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty.
              </Pharagraph>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProjectChallenge;
