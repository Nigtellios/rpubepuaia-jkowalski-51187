import { IPhotoAttributes } from "./ProductData.interface";

export interface IGlobalDataArrow {
  __typename: string;
  attributes: IPhotoAttributes;
}

export interface IGlobalDataArrowData {
  data: IGlobalDataArrow;
}

export interface IGlobalData {
  __typename: string;
  ArrowDown: IGlobalDataArrowData;
  ArrowUp: IGlobalDataArrowData;
}
