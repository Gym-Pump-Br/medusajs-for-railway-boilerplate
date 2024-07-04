import React from "react"
import Image from "next/image"

const BannerInsta = () => {
  return (
    <div>
      <div className="md:hidden">
        {" "}
        {/* Este é Image mobile */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719949670/imagemmobile1_fuybdb.png"
          width={2000}
          height={0}
          className="w-full"
        />
      </div>

      <div className="hidden md:block">
        {" "}
        {/* Aqui está Image desktop */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719949671/Desktop_250_mil_1944x.png_rgokcp.png"
          width={2000}
          height={0}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default BannerInsta
