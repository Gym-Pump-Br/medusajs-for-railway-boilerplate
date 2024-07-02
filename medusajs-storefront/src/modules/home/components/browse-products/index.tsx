import React from "react"
import Image from "next/image"

const Browse = () => {
  return (
    <div className="bg-black h-[610px] grid items-center">
      <div className="grid justify-items-center">
        <div>
        <p className="flex text-center py-10  text-white uppercase font-montserrat text-3xl">
          Navegue por produtos
        </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="w-[165px] h-[165px] md:w-[275px] md:h-[275px]">
            <div className="w-full h-full">
              <Image
                src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Link_yxvixr.png"
                alt="image"
                className="w-full hover:scale-110 duration-500 ease-in"
                width={2000}
                height={0}
              />
            </div>
          </div>

          <div className="w-[165px] h-[165px] md:w-[275px] md:h-[275px]">
            <div className="w-full h-full">
              <Image
                src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869038/Linkca_soo82u.png"
                alt="image"
                className="w-full hover:scale-110 duration-500 ease-in"
                width={2000}
                height={0}
              />
            </div>
          </div>

          <div className="w-[165px] h-[165px] md:w-[275px] md:h-[275px]">
            <div className="w-full h-full">
              <Image
                src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Container_qxn79h.png"
                alt="image"
                className="w-full hover:scale-110 duration-500 ease-in"
                width={2000}
                height={0}
              />
            </div>
          </div>

          <div className="w-[165px] h-[165px] md:w-[275px] md:h-[275px]">
            <div className="w-full h-full">
              <Image
                src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Link2_ngrknn.png"
                alt="image"
                className="w-full hover:scale-110 duration-500 ease-in"
                width={2000}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
