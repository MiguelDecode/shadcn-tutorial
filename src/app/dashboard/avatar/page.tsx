import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="https://github.com/s-hadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p>@shadCN</p>
    </div>
  );
}
