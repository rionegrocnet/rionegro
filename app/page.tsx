import React from "react";
import Prrfo1 from "@/components/Prrfo1";
import Hstg from "@/components/Hstg";
import Rds from "@/components/Rds";
import Fter from "@/components/Fter";
import HztalScroll from "@/components/HztalScroll";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { MobileMap } from "@/components/map/MobileMap";

export default function Page() {
  return (
    <div className="relative">

        <HztalScroll />
        <Prrfo1 />
        <InteractiveMap />
<MobileMap />
        <Hstg />
        <Rds />
        <Fter />
    </div>
  );
}