import clsx from "clsx";
import styles from "./Bestseller.module.scss";
import utils from "../../../styles/modules/utilities/utility.module.scss";
import ProductBox from "../../reusable/ProductBox/ProductBox";
import { IBestseller } from "./Bestseller.interface";

export default function Bestseller(
  {
    products,
    heading,
    description
  }: IBestseller
) {
  return (
    <section className={ clsx(
      utils.container,
      styles.bestseller
    )}>
      {
        heading &&
        <div className={ styles[`bestseller__heading-box`] }>
          <h2 className={ styles.bestseller__heading }>
            { heading }
          </h2>
          <p className={ styles.bestseller__description }>
            { description }
          </p>
        </div>
      }

      {
        products &&
        <div className={ styles.bestseller__products }>

          {
            products.data.map((product: any) => (

              <ProductBox
                key={ product.id }
                name={ product.attributes.Name }
                mode={ product.attributes.Mode }
                price={ product.attributes.Price }
                salePrice={ product.attributes.SalePrice }
                slug={ product.attributes.Slug }
                mainPhoto={ product.attributes.MainPhoto }
                gallery={ product.attributes.Gallery }
                marketing={ product.attributes.Marketing }
              />

            ))
          }

        </div>
      }

    </section>
  );
}
