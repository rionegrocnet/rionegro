import React from "react";
import Prrfo1 from "@/components/Prrfo1";
import Hstg from "@/components/Hstg";
import Rds from "@/components/Rds";
import Fter from "@/components/Fter";
import HztalScroll from "@/components/HztalScroll";
/* import MapaMovil from "@/components/MapaMovil"; */
/* import CarruselEventos from "@/components/carrusel/CarruselEventos"; */
import Map from "@/components/Map"


export default function page() {
  return (
    <div>
      
      <HztalScroll />
      <Prrfo1 />
    <Map />
{/*       <MapaMovil />  */}
{/*       <CarruselEventos /> */}
      <Hstg />
      <Rds />
      <Fter />
    </div>
  );

}
