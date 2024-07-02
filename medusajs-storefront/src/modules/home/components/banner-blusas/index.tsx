import React from "react"
import Image from "next/image"

const BannerBlu = () => {
  return (
    <div>
      <div className="grid justify-center md:pt-12">
        <p className="uppercase font-montserrat font-bold md:text-4xl text-2xl py-12">Blusas</p>
      </div>

      <div className="md:hidden">   {/* Este é Image mobile */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719940064/Backgroundmobile_gjlv3z.png"
          width={2000}
          height={0}
        />
      </div>

      <div className="hidden md:block"> {/* Aqui está Image desktop */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719949671/Desktop_250_mil_1944x.png_rgokcp.png"
          width={2000}
          height={0}
        />
      </div>
    </div>
  )
}

export default BannerBlu
