import { Region } from "@medusajs/medusa"
import { Button, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import BannerCamisetas from "@modules/home/components/banner-camisetas"
import BannerBermudas from "@modules/home/components/banner-bermudas"
import BannerBlusas from "@modules/home/components/banner-blusas"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div>
      <div className="content-container py-12 small:py-24">
        <Text className="txt-xlarge">{collection.title}</Text>

        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))}
        </ul>

        <div className="flex justify-center m-8">
          <button className="bg-[#262626] md:h-12 md:w-38 h-10 w-36 grid items-center justify-center rounded-full hover:scale-110 ease-in duration-500">
            <InteractiveLink href={`/collections/${collection.handle}`}>
              Ver todos
            </InteractiveLink>
          </button>
        </div>
      </div>
    </div>
  )
}
