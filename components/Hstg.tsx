import Image from 'next/image'

export default function Hstg() {
  return (
    <div className="flex flex-col sm:flex-row bg-[#fefaf1] min-h-screen relative z-[100]">
      {/* Columna izquierda (Imagen) */}
      <div className="w-full sm:w-1/2 flex items-center justify-center pt-[20%] sm:p-0">
        <Image
          src="/images/QR.svg"
          alt="QR Code"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>

      {/* Columna derecha (Texto) */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-8">
        <h2 className="font-JosefinSans text-[2rem] leading-tight text-[#004141] mb-6 text-center sm:text-left">
          Crea tus historias <br />
          junto a nosotros
        </h2>
        <p className="font-MinionPro text-[1.125rem] text-[#004141] pr-0 sm:pr-[20%] text-justify">
        Comparte tu experiencia navideña en Rionegro y sé parte de nuestra celebración. <br /> <br />

Escanea el QR y usa los hashtags #CiudadDelBienestar y #MiNavidadEnRionegro en Instagram, etiquetando a @esorionegro. <br /> <br />

¡Queremos ver tus momentos más especiales!
        </p>
      </div>
    </div>
  )
}
