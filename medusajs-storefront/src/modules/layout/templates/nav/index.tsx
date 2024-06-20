import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { User } from "@medusajs/icons"
import Link from "next/link"
import Image from "next/image"
import { MagnifyingGlassMini } from "@medusajs/icons"

const SideMenuItems = {
  Lar: "/",
  Loja: "/store",
  Pesquisa: "/search",
  Conta: "/account",
  Carrinho: "/cart",
}

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border- duration-200 bg-[#262626] border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1">
            <Link href="/">
              <div className=" flex items-center h-full">
                <Image
                  width={50}
                  height={20}
                  src="https://res.cloudinary.com/db2zaxqab/image/upload/v1717685772/MARCA_D_A%CC%81GUA4_ykp5cf.png"
                  alt="image logo"
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>

          <LocalizedClientLink
            className="hover:text-ui-fg-base text-white"
            href="/search"
            scroll={false}
          >
            <MagnifyingGlassMini />
          </LocalizedClientLink>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-white"
                href="/account"
              >
                <User />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <div>
                <CartButton />
              </div>
            </Suspense>
            <div className="md:hidden basis-0 h-full flex items-center text-white">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="hidden md:block  p-2 mx-auto border-b duration-200 bg-white border-ui-border-base-16">
        {" "}
        <ul className="flex flex-row gap-6 items-center justify-center">
          {Object.entries(SideMenuItems).map(([name, href]) => {
            return (
              <li key={name}>
                <LocalizedClientLink
                  href={href}
                  className="text-xl leading-10 hover:text-ui-fg-disabled"
                >
                  {name}
                </LocalizedClientLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
