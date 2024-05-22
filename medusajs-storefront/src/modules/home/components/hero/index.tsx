import React from "react"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">
        <div className="">
          <img
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1716314589/gym-interior-background-of-dumbbells-on-rack-in-fitness-and-workout-room-photo_sewgol.jpg"
            alt="image"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
