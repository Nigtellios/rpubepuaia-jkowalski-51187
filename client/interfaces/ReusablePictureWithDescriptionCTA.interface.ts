import { IPhotoData } from "./ProductData.interface";

export interface ReusablePictureWithDescriptionCTAInterface {
  CTA: object;
  DescriptionHeading: string;
  DescriptionText: string;
  DescriptionAlignment: string;
  Picture: IPhotoData;
  Variant: string;
  id: string;
  __typename: string;
}
