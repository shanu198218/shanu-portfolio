// components/LandingSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImage from "../../../../public/bg-full.png"; // Adjust the path as necessary
import avatar from "../../../../public/avatar.png"; // Adjust the path as necessary
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useRouter } from "next/navigation";

export default function LandingSection({
  onContinue,
}: {
  onContinue: () => void;
}) {
  const router = useRouter();

  const handleClick = () => {
    onContinue();
    router.push("/home");
  };

  return (
    <section
      onClick={handleClick}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background image (floating laptop with ropes) */}
      <Image
        src={backgroundImage} // use your actual image path
        alt="Floating Laptop"
        fill
        priority
        className="object-fill opacity-40"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 rounded-full overflow-hidden   mb-6 relative"
        >
          <BorderBeam duration={8} size={100} className="z-0" />
          <Image
            src={avatar} // replace with your avatar
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-2xl sm:text-4xl font-bold leading-snug"
        >
          <TextAnimate animation="fadeIn" by="line" as="p">
            {` My name is Shamali Dilrukshi\n\nFull stack Developer`}
          </TextAnimate>
        </motion.h1>
      </div>
    </section>
  );
}
