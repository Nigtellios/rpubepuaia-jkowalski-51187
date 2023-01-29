import { IPhotoData } from "../../../interfaces/ProductData.interface";
import { IReusableButton } from "../../reusable/Button/Button.interface";

export interface HeroSectionSliderSlide {
  SlideHeading: string;
  SlideSubHeading: string;
  SlideImage: IPhotoData;
  id: string;
  __typename: string;
}

export interface HeroSectionSlider {
  ArrowDownIcon: IPhotoData;
  ArrowUpIcon: IPhotoData;
  ReusableButton: IReusableButton[];
  SingleSlide: HeroSectionSliderSlide[];
}

export interface HeroSectionProps {
  slider: HeroSectionSlider;
  arrowUpIcon: string;
  arrowDownIcon: string;
}
