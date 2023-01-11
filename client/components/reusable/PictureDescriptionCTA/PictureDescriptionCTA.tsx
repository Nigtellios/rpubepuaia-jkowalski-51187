import styles from './PictureDescriptionCTA.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import { IPictureDescriptionCTA } from "./PictureDescriptionCTA.interface";
import clsx from "clsx";

export default function PictureDescriptionCTA(
  {
    variant,
    descriptionAlignment,
    descriptionHeading,
    descriptionText,
    pictureUrl,
    ctaObject
  }: IPictureDescriptionCTA
) {
  const inputStyle = `picture-description-cta--` + `${ variant }`;

  return (
    <section className={ clsx(
      utils.container,
      styles[`picture-description-cta`],
      styles[inputStyle]
    ) }>

    </section>
  );
}
