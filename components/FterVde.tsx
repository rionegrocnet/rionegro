import Image from 'next/image'
import Link from 'next/link'

export default function Fter() {
  return (
    <footer className="bg-[#004141] h-[70vh] flex items-center justify-center relative">
      <div className="relative w-40 h-40 sm:w-64 sm:h-64">
        <Link href="/">
          <Image
            src="/images/Logo-rionegro-blanco.svg"
            alt="Rionegro Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
    </footer>
  )
}
