import Home from "@/components/pages/about-us";
import { Blogs } from "@/components/pages/blogs";
import Footer from "@/components/pages/footer";
import MiddleSection from "@/components/pages/middle-section";
import { Projects } from "@/components/pages/projects";
import { Skills } from "@/components/pages/skills";

export default function Page() {
  return (
    <main>
      <Home />
      <MiddleSection />
      <Projects />
      <Footer />
    </main>
  );
}
