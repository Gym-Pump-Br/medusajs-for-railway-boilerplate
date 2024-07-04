import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <div>
      <div className="grid justify-center md:pt-12">
        <p className="uppercase font-montserrat font-bold md:text-4xl text-2xl py-12">
          Camisetas
        </p>
      </div>

      <div className="md:hidden">
        {" "}
        {/* Este é Image mobile */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719940064/Backgroundmobile_gjlv3z.png"
          width={2000}
          height={0}
          className="grid justify-center"
        />
      </div>

      <div className="hidden md:block">
        <div className="grid justify-items-center">
          {" "}
          {/* Aqui está Image desktop */}
          <Image
            alt="image"
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719940066/Background_ppjbtv.png"
            width={2000}
            height={0}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
