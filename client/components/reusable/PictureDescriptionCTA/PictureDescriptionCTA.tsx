import Image from 'next/image';
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
  const inputStyle = `picture-description-cta--` + `${ variant }`;
  const alignmentStyle = `picture-description-cta__description--` + `${ descriptionAlignment }`;

  console.log(picture)
  console.log(ctaObject);

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
            <ReusableButton
              className={ ctaObject.ButtonStyle as string }
              url={ ctaObject.ButtonLink }
              text={ ctaObject.ButtonText }
            />
          }

        </div>
      }

    </section>
  );
}
