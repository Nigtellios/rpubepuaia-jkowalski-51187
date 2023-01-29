import styles from "./ProductBox.module.scss";
import button from "../Button/Button.module.scss";
import clsx from "clsx";
import { IProductBox } from "./ProductBox.interface";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import findUser from "../../../lib/cart/findUser";
import { getProductData } from "../../../lib/product/product";
import addProductToUserCart from "../../../lib/cart/addProduct";

export default function ProductBox(
  {
    name,
    mode,
    price,
    salePrice,
    slug,
    mainPhoto,
    onClickEvent
  }: IProductBox
) {
  let inputStyle = `product-box--` + `${ mode }`;

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
  }, [session]);

  const addToCart = () => {
    // const manageAddToCart = async () => {
    //   const userData = await findUser(session?.user?.email as string);
    //   const productData = await getProductData(slug);
    //
    //   await addProductToUserCart(
    //     userData.id,
    //     { productData }
    //   );
    //
    //   console.log(userData.id);
    //   console.log(productData);
    //   console.log(userData)
    // }

    //manageAddToCart().catch((error) => { throw new Error(error) });
  }

  return (
    <div className={ clsx(
      styles[`product-box`],
      styles[inputStyle]
    ) }>
      <div className={ styles[`product-box__wrapper`] }>
        {
          mainPhoto &&
          <Link
            href={ `/product/${ slug }` }
          >
            <div className={ styles[`product-box__image`] }>
              <img
                src={ process.env.NEXT_PUBLIC_URL + mainPhoto.data.attributes.url }
                width={ mainPhoto.data.attributes.width }
                height={ mainPhoto.data.attributes.height }
                alt={ "Product Picture" }
              />
            </div>
          </Link>
        }
        {
          name &&
          <Link
            href={ `/product/${ slug }` }
          >
            <h6 className={ styles[`product-box__title`] }>
              { name }
            </h6>
          </Link>
        }
        {
          price &&
          <div className={ styles[`product-box__price-box`] }>
            {
              mode === 'sale' &&
              <span className={clsx(
                styles[`product-box__tag`],
                styles[`product-box__tag--sale`]
              )}>
                SALE
              </span>
            }
            {
              mode === 'sold_out' &&
              <span className={clsx(
                styles[`product-box__tag`],
                styles[`product-box__tag--sold`]
              )}>
                SOLD OUT
              </span>
            }
            {
              mode === 'upcoming' &&
              <span className={clsx(
                styles[`product-box__tag`],
                styles[`product-box__tag--upcoming`]
              )}>
                COMING SOON
              </span>
            }
            {
              salePrice &&
              <p className={ styles[`product-box__price-box-sale-price`] }>
                { salePrice }
                <span> yang</span>
              </p>
            }
            <p className={ styles[`product-box__price-box-price`] }>
              { price }
              <span> yang</span>
            </p>
          </div>
        }

        {
          session ? (
            <>
              {
                mode === "sold_out" || mode === "upcoming" ? (
                    <a
                      className={ clsx(
                        button.button,
                        styles[`product-box__button`]
                      )}
                    >
                      {
                        mode === "upcoming" &&
                        <p>Coming soon!</p>
                      }

                      {
                        mode === "sold_out" &&
                        <p>Sold Out!</p>
                      }
                    </a>
                  ) : (
                  <a
                    className={ clsx(
                      button.button,
                      styles[`product-box__button`]
                    )}
                    onClick={ onClickEvent }
                  >
                    {
                      mode === "standard" &&
                      <p>Add to cart</p>
                    }

                    {
                      mode === "sale" &&
                      <p>Be hurry! Add to cart</p>
                    }
                  </a>
                )
              }
            </>
            ) : (
              <span className={ styles[`product-box--error`] }>
                Only logged in users are available to see cart icon and add products to cart.
              </span>
          )
        }

      </div>
    </div>
  );
}
