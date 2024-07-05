import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import BannerCamisetas from "@modules/home/components/banner-camisetas"
import BannerBlusas from "@modules/home/components/banner-blusas"
import BannerBermudas from "@modules/home/components/banner-bermudas"
import BannerInstagram from "@modules/home/components/banner-instagram"


export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  // Ajuste a ordem dos banners conforme desejado
  const banners = [<BannerCamisetas key="camisetas" />, <BannerBlusas key="blusas" />,]

  return (
    <ul>
      {collections.map((collection, index) => (
        <div key={collection.id}>
          <li>
            <ProductRail collection={collection} region={region} />
          </li>
          {index < banners.length && (
            <li>
              {banners[index]}
            </li>
          )}
        </div>
      ))}
    </ul>
  )
}
