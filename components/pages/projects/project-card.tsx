import { AuroraText } from "@/components/magicui/aurora-text";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({ title, description, image, link }: any) => (
  <PinContainer title={title} href={link} className="bg-primary">
    <Card className="w-[20rem] min-h-[26rem] flex flex-col justify-between p-4 bg-primary text-white shadow-md">
      <CardHeader className="pb-2 space-y-2">
        <CardTitle className="text-xl">
          <AuroraText>{title}</AuroraText>
        </CardTitle>
        <CardDescription className="text-sm text-white/70 text-justify">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <Image
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
          width={300}
          height={160}
        />
      </CardContent>
    </Card>
  </PinContainer>
);

export default ProjectCard;
