'use client'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-[250px]">
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <div className="border border-dashed m-4 p-2 rounded-md">
        {value}
      </div>
    </div>
  );
}
