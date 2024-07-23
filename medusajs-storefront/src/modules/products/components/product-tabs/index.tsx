"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Descrição",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Guia de tamanhos",
      component: <ShippingInfoTab />,
    },
    {
      label: "Frete e entrega",
      component: <FreteEntrega />,
    },
    {
      label: "Troca e devoluções",
      component: <TrocaDevolucoes />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">País de origem</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Tipo</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Peso</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensões</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Entrega rápida</span>
            <p className="max-w-sm">
              Seu pacote chegará em 3 a 5 dias úteis na sua retirada local ou no
              conforto da sua casa.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Trocas simples</span>
            <p className="max-w-sm">
              O ajuste não está certo? Não se preocupe - trocaremos o seu
              produto por um novo.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Devoluções fáceis</span>
            <p className="max-w-sm">
              Basta devolver seu produto e nós reembolsaremos seu dinheiro. Não
              perguntas feitas - faremos o nosso melhor para garantir o seu
              retorno é descomplicado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const FreteEntrega = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Entrega rápida</span>
            <p className="max-w-sm">
              Seu pacote chegará em 3 a 5 dias úteis na sua retirada local ou no
              conforto da sua casa.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Trocas simples</span>
            <p className="max-w-sm">
              O ajuste não está certo? Não se preocupe - trocaremos o seu
              produto por um novo.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Devoluções fáceis</span>
            <p className="max-w-sm">
              Basta devolver seu produto e nós reembolsaremos seu dinheiro. Não
              perguntas feitas - faremos o nosso melhor para garantir o seu
              retorno é descomplicado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const TrocaDevolucoes = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Entrega rápida</span>
            <p className="max-w-sm">
              Seu pacote chegará em 3 a 5 dias úteis na sua retirada local ou no
              conforto da sua casa.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Trocas simples</span>
            <p className="max-w-sm">
              O ajuste não está certo? Não se preocupe - trocaremos o seu
              produto por um novo.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Devoluções fáceis</span>
            <p className="max-w-sm">
              Basta devolver seu produto e nós reembolsaremos seu dinheiro. Não
              perguntas feitas - faremos o nosso melhor para garantir o seu
              retorno é descomplicado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
