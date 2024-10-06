import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((res) => setTimeout(res, 3000));

  return "123456789".split("");
};

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader>
            <Image
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              width={40}
              height={40}
              className="rounded-full w-16 h-16 ml-auto"
            ></Image>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <CardTitle className="text-4xl">Card Title</CardTitle>
            <CardDescription className="first-letter:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              distinctio labore numquam consequatur ipsum commodi quod
              aspernatur at, dignissimos illo iure fuga nesciunt explicabo
              voluptas in necessitatibus blanditiis possimus. Illo.
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Button>Ver más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
