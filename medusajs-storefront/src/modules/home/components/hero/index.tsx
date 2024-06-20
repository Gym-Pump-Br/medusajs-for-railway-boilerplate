import React from "react"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-full w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="">
        <div className="w-full md:hidden">
          {" "}
          {/* Este é Image mobile */}
          <Image
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1718895851/Mobile_540x_secyah.png"
            alt="image"
            width={2000}
            height={0}
            className="w-full"
          />
        </div>

        <div className="w-full  hidden md:block">
          {" "}
          {/* Aqui está Image desktop */}
          <Image
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1718895852/Desktop_1944x_vnh8lf.png"
            alt="image"
            width={2000}
            height={0}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
