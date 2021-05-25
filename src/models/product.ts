export interface Offer {
  price: number;
  quantity: number;
}

export default interface Product extends Offer {
  name: string;
  promotions: Offer[];
}
