import { IReusableButton } from "../Button/Button.interface";

export interface IPictureDescriptionCTA {
  variant: string;
  descriptionAlignment: string;
  descriptionHeading: string;
  descriptionText: string
  pictureUrl: string;
  ctaObject: IReusableButton;
}
