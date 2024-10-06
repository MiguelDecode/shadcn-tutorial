import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const data = "123456789".split("");

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader>
            <Skeleton className="rounded-full w-16 h-16 ml-auto"></Skeleton>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Skeleton className="text-4xl h-4 w-1/2 mb-2 felx-grow"></Skeleton>
            <CardDescription className="first-letter:text-xl h-12 w-full mb-2 flex-grow"></CardDescription>
          </CardContent>

          <CardFooter>
            <Skeleton className="h-8 w-20"></Skeleton>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
