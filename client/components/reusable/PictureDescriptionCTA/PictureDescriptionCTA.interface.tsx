import { IReusableButton } from "../Button/Button.interface";
import { IPhotoData } from "../../../interfaces/ProductData.interface";

export type Picture = {
  data: {
    attributes: {
      url: string;
      width: number;
      height: number;
    }
  }
}
export interface IPictureDescriptionCTA {
  variant: string;
  descriptionAlignment: string;
  descriptionHeading: string;
  descriptionText: string
  picture: IPhotoData;
  ctaObject: IReusableButton;
}
