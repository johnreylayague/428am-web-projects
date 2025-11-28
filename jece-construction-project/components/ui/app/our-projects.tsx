"use client";
import SectionHeader from "@/components/ui/app/section-header-secondary";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import OurProjectCarousel from "@/components/ui/app/our-project-carousel";

interface OurProjectsProps {}

const placeholderImages = [
  {
    id: 1,
    src: "https://placehold.co/370x370?text=Project+1",
    alt: "Project 1",
    category: "All",
  },
  {
    id: 2,
    src: "https://placehold.co/370x370?text=Project+2",
    alt: "Project 2",
    category: "ArchitectureBuilding",
  },
  {
    id: 3,
    src: "https://placehold.co/370x370?text=Project+3",
    alt: "Project 3",
    category: "Construction",
  },
  {
    id: 4,
    src: "https://placehold.co/370x370?text=Project+4",
    alt: "Project 4",
    category: "Industrial",
  },
  {
    id: 5,
    src: "https://placehold.co/370x370?text=Project+5",
    alt: "Project 5",
    category: "All",
  },
  {
    id: 6,
    src: "https://placehold.co/370x370?text=Project+6",
    alt: "Project 6",
    category: "ArchitectureBuilding",
  },
  {
    id: 7,
    src: "https://placehold.co/370x370?text=Project+7",
    alt: "Project 7",
    category: "Industrial",
  },
  {
    id: 8,
    src: "https://placehold.co/370x370?text=Project+8",
    alt: "Project 8",
    category: "Construction",
  },
  {
    id: 9,
    src: "https://placehold.co/370x370?text=Project+9",
    alt: "Project 9",
    category: "All",
  },
  {
    id: 10,
    src: "https://placehold.co/370x370?text=Project+10",
    alt: "Project 10",
    category: "ArchitectureBuilding",
  },
];

const projectFilters = [
  { key: "All", label: "All Projects" },
  { key: "ArchitectureBuilding", label: "Architecture Building" },
  { key: "Construction", label: "Construction" },
  { key: "Industrial", label: "Industrial" },
];

const OurProjects: React.FC<OurProjectsProps> = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Filter images based on selected filter
  const filteredImages =
    selectedFilter === "All"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === selectedFilter);

  return (
    <React.Fragment>
      <Wrapper className="pt-20">
        <Container>
          <SectionHeader label="Projects" title="Our Projects" />

          {/* <ProjectHits
            filters={projectFilters}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
          /> */}

          <OurProjectCarousel projects={filteredImages} />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default OurProjects;

interface ProjectFilter {
  key: string;
  label: string;
}

interface ProjectHitsProps {
  filters: ProjectFilter[];
  selected: string;
  setSelected: (key: string) => void;
}

const ProjectHits: React.FC<ProjectHitsProps> = ({
  filters,
  selected,
  setSelected,
}) => (
  <ul className="flex gap-4 justify-center mb-10">
    {filters.map((filter) => (
      <li key={filter.key}>
        <button
          type="button"
          onClick={() => setSelected(filter.key)}
          className={cn()}
        >
          <span
            className={cn(
              "absolute",
              "before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full",
              "after:content-[''] after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full"
            )}
          />
          {filter.label}

          <span
            className={cn(
              "absolute",
              "before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-[2px] before:h-full",
              "after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[2px] after:h-full"
            )}
          />
        </button>
      </li>
    ))}
  </ul>
);
