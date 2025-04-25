"use client";

import Container from "@/components/layouts/container";
import { projects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Card, CardHeader } from "@/components/ui/card";

export function Projects() {
  return (
    <Container>
      <Card className="bg-primary rounded-lg shadow-none transition-all overflow-hidden mt-4   pb-10 ">
        <CardHeader className="text-center text-white text-3xl font-semibold">
          Projects
        </CardHeader>
        <Card className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center bg-primary border-none">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Card>
      </Card>
    </Container>
  );
}
