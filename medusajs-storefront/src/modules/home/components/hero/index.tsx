import React from "react"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">

      

        <div className="w-full md:hidden"> {/* Este é Image mobile */}
          <Image
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1716907087/pexels-ricky-rijan-1680247_k3bf3u.jpg"
            alt="image"
            width={200}
            height={300}
            className="w-full"
          />
        </div>


        <div className="w-full hidden md:block">  {/* Aqui está Image desktop */}
          <Image
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1716314589/gym-interior-background-of-dumbbells-on-rack-in-fitness-and-workout-room-photo_sewgol.jpg"
            alt="image"
            width={300}
            height={0}
            className="w-full"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
