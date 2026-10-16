export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}