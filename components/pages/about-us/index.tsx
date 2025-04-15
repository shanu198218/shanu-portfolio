"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Navbar from "../nav-bar";
import { BorderBeam } from "@/components/magicui/border-beam";
import avatar from "../../../public/avatar.png"; // Adjust the path as necessary
import Container from "@/components/layouts/container";

export default function AboutCard() {
  return (
    <>
      <Navbar />
      <Container>
        <Card className="bg-primary text-white md:mt-5   mx-auto p-8 md:rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left: Circular Image */}
            <div className="relative w-96 h-96 rounded-full   overflow-hidden shrink-0">
              <Image
                src={avatar}
                alt="Anastasiia Sylina"
                fill
                className="object-cover"
              />
              <BorderBeam duration={8} size={100} className="z-0" />
            </div>

            {/* Right: Text Content */}
            <CardContent className="p-0 flex-1 text-left">
              <h2 className="text-3xl font-serif tracking-widest mb-4">
                Shamali Dilrukshi
              </h2>
              <p className="mb-4">
                Hello! I&apos;m a Associate fullstack developer
              </p>
              <p className="text-sm text-justify mb-4">
                Advanced web applications have been built by a dedicated
                Associate Full Stack Software Engineer with over 2+ years of
                hands-on experience. Proficient in frontend technologies like
                Next.js, Tailwind CSS, and React.js, with backend experience in
                Nest.js and Node.js. Skilled in working with PHPMyAdmin and
                Firebase databases, and experienced in deploying applications
                via platforms such as Vercel, Netlify, and Firebase Firestore.
              </p>
              <p className="text-sm">
                Also certified in GraphQL and AWS, I continuously strive to grow
                by taking on new challenges, learning modern tools, and
                delivering efficient and scalable software solutions.
              </p>
            </CardContent>
          </div>
        </Card>
      </Container>
    </>
  );
}
