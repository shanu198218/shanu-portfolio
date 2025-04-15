import Container from "@/components/layouts/container";
import { Skills } from "../skills";
import { Blogs } from "../blogs";

export default function MiddleSection() {
  return (
    <>
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <Skills />
          <Blogs />
        </div>
      </Container>
    </>
  );
}
