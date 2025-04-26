"use client";
import Container from "@/components/layouts/container";
import { FaLinkedin, FaGithub, FaMedium, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <Container>
      <footer className="bg-black text-white  py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white tracking-wide">
              M.G. Shamali Dilrukshi
            </h2>
            <p className="mt-4 text-justify max-w-md text-sm text-gray-300">
              A MERN Stack Developer focused on building dynamic and responsive
              web applications, handling both frontend and backend, and
              deploying fully functional websites that drive the success of the
              overall product.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-3">
            <h3 className="text-white font-bold tracking-wide">SOCIAL</h3>
            <div className="flex space-x-4 text-white text-xl">
              <a
                href="https://www.linkedin.com/in/shamali-dilrukshi-482478225/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://medium.com/@mgshamalidilrukshi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 hover:text-sky-400"
              >
                <FaMedium />
              </a>
              <a
                href="https://www.facebook.com/share/1AFxAfKWz7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 hover:text-green-400"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © Copyright 2025 . Made by{" "}
          <span className="font-semibold text-white">
            M.G. Shamali Dilrukshi
          </span>
        </div>
      </footer>
    </Container>
  );
}
