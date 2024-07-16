import { Text } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import Link from "next/link"
import Image from "next/image"
import Tabs from "@modules/layout/templates/footer/tabs"
import { PlusMini, MinusMini } from "@medusajs/icons"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  const atendimentoData = [
    {
      title: "Atendimento ao cliente",
      content: (
        <p className="text-ui-fg-subtle txt-small text-white">
          Whatsapp: (19) 9384824208
        </p>
      ),
    },
  ]

  const colecoesData = [
    {
      title: "Coleções",
      content: (
        <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small text-white text-left">
          {collections.slice(0, 6).map((c) => (
            <li key={c.id}>
              <a
                className="hover:text-ui-fg-base"
                href={`/collections/${c.handle}`}
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <footer className="w-full bg-[#262626] text-white text-left">
      <div className="flex flex-col w-full text-left">
        <div>
          <Link href="/">
            <div className="flex justify-center py-10">
              <Image
                alt="image"
                width={150}
                height={50}
                src="https://res.cloudinary.com/db2zaxqab/image/upload/v1717685770/MARCA_D_A%CC%81GUA9_ery6su.png"
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>

        <div className="grid justify-center py-10">
          <Tabs tabs={atendimentoData} />
          <Tabs tabs={colecoesData} />
        </div>

        <div className="flex justify-center py-5">
          <Image
            alt="image"
            width={900}
            height={2000}
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1721159985/Container_uuxatx.png"
            className="cursor-pointer"
          />
        </div>

        <p className="text-center">Métodos de pagamento</p>
        <div className="flex justify-center py-5">
          <Image
            alt="image"
            width={200}
            height={200}
            src="https://res.cloudinary.com/db2zaxqab/image/upload/v1721151442/BANDERIAS.png_ofqw2m.png"
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-center py-5">
          <a
            href="https://www.instagram.com/vistagympump/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="image"
              width={54}
              height={54}
              src="https://res.cloudinary.com/db2zaxqab/image/upload/v1720723152/icons8-instagram_shakvf.svg"
              className="cursor-pointer border-2 rounded-full border-white p-4"
            />
          </a>
        </div>
        <div className="flex w-full mb-16 justify-center text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Gym Pump. Todos os direitos reservados.
          </Text>
        </div>
      </div>
    </footer>
  )
}
