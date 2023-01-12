import { IReusableButton } from "../Button/Button.interface";

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
  picture: Picture;
  ctaObject: IReusableButton;
}
