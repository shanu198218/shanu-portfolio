"use client";

import { Pointer } from "@/components/magicui/pointer";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const blogList = [
  {
    title: "REST API Service",
    url: "https://mgshamalidilrukshi.medium.com/rest-api-service-40122b6a730b",
    withPointer: true,
  },
  {
    title: "React JS",
    url: "https://mgshamalidilrukshi.medium.com/react-js-f442e4f8908",
  },
  {
    title:
      "Cookies vs. Local Storage in Next.js: Which is Best for Your Website?",
    url: "https://www.linkedin.com/pulse/cookies-vs-local-storage-nextjs-which-best-your-shamali-dilrukshi-dcplf/?trackingId=za2RMUj6SZeMzMEDOWmNCQ%3D%3D",
  },
  {
    title: "Application Frameworks",
    url: "https://mgshamalidilrukshi.medium.com/application-frameworks-a779704df848",
  },
];

export function Blogs() {
  return (
    <div>
      <Card className="mt-4 relative overflow-hidden bg-primary shadow-none transition-all ">
        
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Blogs</CardTitle>
          <CardDescription className="text-sm text-white/80">
            Checking my blogs below links
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          {blogList.map((blog, index) => (
            <Card
              key={index}
              className="relative overflow-hidden max-w-xl w-full hover:bg-primary/10"
            >
              <ShineBorder duration={8}  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardHeader className="text-center text-2xl font-semibold relative">
                <Link
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-base "
                >
                  {blog.title}
                </Link>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
