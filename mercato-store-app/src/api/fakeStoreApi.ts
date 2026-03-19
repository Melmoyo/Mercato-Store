export interface ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  stars:number;
  category: string;
  rating: ProductRating;
  quantity:number;
}
export interface ProductRating {
  rate: number;
  count: number;
}
