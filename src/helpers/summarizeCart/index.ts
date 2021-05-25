import Product, { Offer } from '../../models/product';

export function* applyPromotions(product: Product): Generator<Offer> {
  let promotionalQuantity = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const promotion of product.promotions) {
    const quantityInPromotion = Math.min(
      product.quantity - promotionalQuantity,
      promotion.quantity - promotionalQuantity
    );

    if (!quantityInPromotion) break;

    yield {
      price: promotion.price,
      quantity: quantityInPromotion,
    };

    promotionalQuantity += quantityInPromotion;
  }

  if (product.quantity > promotionalQuantity) {
    yield {
      price: product.price,
      quantity: product.quantity - promotionalQuantity,
    };
  }
}

export default function summarizeCart(products: Product[]): number {
  return products
    .map((product) =>
      [...applyPromotions(product)].reduce(
        (total, offer) => total + offer.price * offer.quantity,
        0
      )
    )
    .reduce(
      (total, summarizedProductPrice) => total + summarizedProductPrice,
      0
    );
}
