export interface IProductBox {
  name: string;
  mode: string;
  price: number;
  salePrice?: number;
  slug: string
  mainPhoto: any;
  gallery: any;
  additionalInfo?: string;
  marketing: object;
}
