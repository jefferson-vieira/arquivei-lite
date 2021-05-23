export interface Price {
  price: number;
  quantity: number;
}

export default interface Product extends Price {
  name: string;
  promotions: Price[];
}
