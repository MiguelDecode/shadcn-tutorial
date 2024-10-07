"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Toast with title
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Toast with action
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Destructive Toast
      </Button>

      <Button
        variant="success"
        onClick={() => {
          toast({
            variant: "success",
            title: "Congratulations!!!",
            description: "There was a problem with your request.",
          });
        }}
      >
        Toast with success
      </Button>
    </div>
  );
}
