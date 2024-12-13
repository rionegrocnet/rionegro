import React from "react";
import Prrfo1 from "@/components/Prrfo1";
import Hstg from "@/components/Hstg";
import Rds from "@/components/Rds";
import Fter from "@/components/Fter";
import HztalScroll from "@/components/HztalScroll";
import Mapa from "@/components/Mapa";
import MapaMovil from "@/components/MapaMovil";
import CarruselEventos from "@/components/carrusel/CarruselEventos";


export default function page() {
  return (
    <div>
      
      <HztalScroll />
      <Prrfo1 />
      <Mapa />
      <MapaMovil /> 
      <CarruselEventos />

      <Hstg />
      <Rds />
      <Fter />
    </div>
  );

}
