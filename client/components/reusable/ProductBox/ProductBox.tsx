import styles from "./ProductBox.module.scss";
import utils from "../../../styles/modules/utilities/utility.module.scss";
import clsx from "clsx";
import { IProductBox } from "./ProductBox.interface";

export default function ProductBox(
  {
    name,
    mode,
    price,
    salePrice,
    slug,
    mainPhoto,
    gallery,
    additionalInfo,
    marketing
  }: IProductBox
) {
  const inputStyle = `product-box--` + `${ mode }`;

  return (
    <div className={ clsx(
      styles[`product-box`],
      styles[inputStyle]
    ) }>
      <div className={ styles[`product-box__wrapper`] }>
        <div className={ styles[`product-box__image`] }>
          <img
            src={ process.env.NEXT_PUBLIC_URL + mainPhoto.data.attributes.url }
            width={ mainPhoto.data.attributes.width }
            height={ mainPhoto.data.attributes.height }
            alt={ "Product Picture" }
          />
        </div>
        <h6 className={ styles[`product-box__title`] }>
          { name }
        </h6>
      </div>
    </div>
  );
}
