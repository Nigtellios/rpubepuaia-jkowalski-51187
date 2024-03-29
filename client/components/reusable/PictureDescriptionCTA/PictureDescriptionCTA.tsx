import styles from './PictureDescriptionCTA.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import { IPictureDescriptionCTA } from "./PictureDescriptionCTA.interface";
import clsx from "clsx";
import ReusableButton from "../Button/Button";

export default function PictureDescriptionCTA(
  {
    variant,
    descriptionAlignment,
    descriptionHeading,
    descriptionText,
    picture,
    ctaObject
  }: IPictureDescriptionCTA
) {
  const inputStyle: string = `picture-description-cta--` + `${ variant }`;
  const alignmentStyle: string = `picture-description-cta__description--` + `${ descriptionAlignment }`;

  return (
    <section className={ clsx(
      utils.container,
      styles[`picture-description-cta`],
      styles[inputStyle]
    ) }>

      {
        picture &&
        <div className={ styles[`picture-description-cta__image`] }>
          <img
            src={ process.env.NEXT_PUBLIC_URL + picture.data.attributes.url }
            alt={ "Picture Description CTA - Image" }
            width={ picture.data.attributes.width }
            height={ picture.data.attributes.height }
          />
        </div>
      }

      {
        descriptionHeading && descriptionText &&
        <div className={ clsx(
          styles[`picture-description-cta__description`],
          styles[alignmentStyle]
        ) }>
          <h2 className={ styles[`picture-description-cta__heading`] }>
            { descriptionHeading }
          </h2>
          <p className={ styles[`picture-description-cta__text`] }>
            { descriptionText }
          </p>

          {
            ctaObject &&
            <span className={ styles[`picture-description-cta__button-reset`] }>
              <ReusableButton
                additionalClass={ ctaObject.ButtonStyle as string }
                url={ ctaObject.ButtonLink }
                text={ ctaObject.ButtonText }
              />
            </span>
          }

        </div>
      }

    </section>
  );
}
