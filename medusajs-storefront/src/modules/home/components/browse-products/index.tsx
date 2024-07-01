import React from "react"
import Image from "next/image"

const Browse = () => {
  return (
    <div className="bg-black h-[610px] grid items-center">
      <div>
        <p className="flex justify-center py-10 text-white uppercase font-montserrat  text-xl">Navegue por produtos</p>
      </div>

      <div className="gap-6 flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Link_yxvixr.png"
          alt="image"
          width={275}
          height={275}
          className=""
        />
        <Image
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869038/Linkca_soo82u.png"
          alt="image"
          width={275}
          height={275}
          className=""
        />
        <Image
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Container_qxn79h.png"
          alt="image"
          width={275}
          height={275}
          className=""
        />
        <Image
          src="https://res.cloudinary.com/db2zaxqab/image/upload/v1719869037/Link2_ngrknn.png"
          alt="image"
          width={275}
          height={275}
          className=""
        />
      </div>
    </div>
  )
}

export default Browse
