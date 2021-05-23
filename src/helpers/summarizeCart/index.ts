import Product from '../../models/product';

function applyPromotions(product: Product): number {
  const { promotionalPrice, promotionalQuantity } = product.promotions.reduce(
    (promotionApplied, promotion) => {
      const qtyInPromotion = Math.min(
        product.quantity - promotionApplied.promotionalQuantity,
        promotion.quantity - promotionApplied.promotionalQuantity
      );

      return {
        promotionalPrice:
          promotionApplied.promotionalPrice + qtyInPromotion * promotion.price,
        promotionalQuantity:
          promotionApplied.promotionalQuantity + qtyInPromotion,
      };
    },
    {
      promotionalPrice: 0,
      promotionalQuantity: 0,
    }
  );

  if (product.quantity > promotionalQuantity) {
    return (
      promotionalPrice +
      (product.quantity - promotionalQuantity) * product.price
    );
  }

  return promotionalPrice;
}

function summarizeCart(products: Product[]): number {
  return products.reduce((total, product) => {
    if (product.promotions.length) {
      return applyPromotions(product);
    }

    return total + product.price * product.quantity;
  }, 0);
}

export default summarizeCart;
