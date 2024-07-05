import React from "react"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import Link from "next/link"

const BannerInsta = () => {
  return (
    <div>
      <div className="relative md:hidden">
        {/* Este é Image mobile */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719949670/imagemmobile1_fuybdb.png"
          width={2000}
          height={0}
          className="w-full"
        />
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center">
          <a
            href="https://www.instagram.com/vistagympump/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-10 w-46 flex items-center rounded-full uppercase tracking-widest bg-black text-white hover:scale-110 ease-out duration-300">
              seguir gym pump no instagram
            </Button>
          </a>
        </div>
      </div>

      <div className="relative hidden md:block">
        {/* Aqui está Image desktop */}
        <Image
          alt="image"
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719949671/Desktop_250_mil_1944x.png_rgokcp.png"
          width={2000}
          height={0}
          className="w-full"
        />
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center">
          <a
            href="https://www.instagram.com/vistagympump/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-16 w-50 flex items-center rounded-full text-xl tracking-widest uppercase bg-black text-white hover:scale-110 ease-out duration-700 px-4">
              seguir gym pump no instagram
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BannerInsta
