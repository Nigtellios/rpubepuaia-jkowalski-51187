import { ReusablePictureWithDescriptionCTAInterface } from "./ReusablePictureWithDescriptionCTA.interface";
import { ICategory, ICategoryData } from "./Category.interface";

export interface IPhotoAttributes {
  __typename: string;
  url: string;
  width?: number;
  height?: number;
  alt?: string;

}

export interface IPhoto {
  __typename: string;
  id: number;
  attributes: IPhotoAttributes;
}

export interface IPhotoData {
  data: IPhoto;
}

export interface IGallery {
  data: IPhoto[];
  __typename: string;
}

export interface IProductDataAttributes {
  AdditionalInfo: string;
  Description: string;
  Gallery: IGallery;
  MainPhoto: IPhotoData;
  Marketing: ReusablePictureWithDescriptionCTAInterface;
  Mode: string;
  Name: string;
  Price: number;
  SalePrice: number;
  Slug: string;
  categories: ICategoryData;
  __typename: string;
}

export interface IProductData {
  id: number;
  __typename: string;
  attributes: IProductDataAttributes;
}
