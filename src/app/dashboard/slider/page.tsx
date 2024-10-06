"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid grid-cols-1 gap-4">
      <span>Slider Value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />

      <hr />

      <div className="flex gap-4">
        <span>Initial range: {rangeValue[0]}</span>
        <span>Final range: {rangeValue[1]}</span>
      </div>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}
