import { IconCloud } from "@/components/magicui/icon-cloud";
import { Card, CardHeader } from "@/components/ui/card";
import { images } from "@/lib/data";

export function Skills() {
  return (
    <Card className="bg-primary rounded-lg shadow-none transition-all overflow-hidden mt-4 ">
      <CardHeader className="text-center text-3xl font-semibold">
        Skills
      </CardHeader>
      <div className="relative  flex  items-center justify-center overflow-hidden  rounded-md ">
        <IconCloud images={images} />
      </div>
    </Card>
  );
}
