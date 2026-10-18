import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <div
        data-testid="product-wrapper"
        className="product-card flex flex-col"
      >
        {/* Image container */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "8px",
            backgroundColor: "var(--color-fog)",
            aspectRatio: "1 / 1",
          }}
        >
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />

          {/* New badge */}
          {isFeatured && (
            <div
              className="absolute top-3 left-3"
              style={{
                backgroundColor: "var(--color-forest)",
                color: "#fff",
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.057em",
                padding: "3px 10px",
                borderRadius: "9999px",
              }}
            >
              Nuevo
            </div>
          )}

          {/* Hover CTA overlay */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pb-4"
          >
            <span
              className="btn-savia-primary text-sm"
              style={{ padding: "10px 20px" }}
            >
              Ver producto
            </span>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-3 flex flex-col gap-1">
          <p
            data-testid="product-title"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "15px",
              color: "var(--color-charcoal)",
              lineHeight: 1.4,
            }}
          >
            {product.title}
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "13px",
              color: "var(--color-stone)",
            }}
          >
            Savia Organics
          </p>

          {cheapestPrice && (
            <div
              className="mt-1"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "15px",
                color: "var(--color-charcoal)",
              }}
            >
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
