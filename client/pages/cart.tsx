import styles from '../styles/pages/Cart.module.scss';
import utils from '../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import clsx from "clsx";
import { useShopContext } from "../components/context/ShopContext";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import button from "../components/reusable/Button/Button.module.scss";

export async function getStaticProps() {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();

  return {
    props: {
      headerData,
      footerData,
      fallback: "blocking"
    }
  };
}

export default function Cart(
  {
    headerData,
    footerData
  }: any
) {
  const context = useShopContext();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
  }, [session]);

  const totalAmount = context.cart.reduce((acc: any, item: any) => {
    return acc + (item.attributes.Price * item.quantity);
  }, 0);

  return (
    <BasicLayout
      headerData={ headerData }
      footerData={ footerData }
    >
      <section className={ clsx(
        utils.container,
        styles.cart
      ) }>

        { session ? (
            <>
              <h1 className={ styles.cart__title }>
                Your cart
              </h1>

              {
                context.cart.length > 0 ? (
                    <div className={ styles.cart__items }>

                      {
                        context.cart.map((item: any) => (
                          <div
                            className={ clsx(
                              styles.cart__item,
                              styles[`cart--` + `${ item.attributes.Mode }`]
                            ) }
                            key={ item.id }
                          >
                            <div className={ styles[`cart__item-image`] }>
                              <Link
                                href={ `/product/${ item.attributes.Slug }` }
                              >
                                <img
                                  src={ process.env.NEXT_PUBLIC_URL + `${item.attributes.MainPhoto.data.attributes.url}` }
                                  width={ item.attributes.MainPhoto.data.attributes.width }
                                  height={ item.attributes.MainPhoto.data.attributes.height }
                                  alt={ "Product image" }
                                />
                              </Link>
                            </div>

                            <div className={ styles[`cart__item-info`] }>

                              {
                                item.attributes.Name &&
                                <Link
                                  href={ `/product/${ item.attributes.Slug }` }
                                >
                                  <h6 className={ styles[`cart__item-name`] }>
                                    { item.attributes.Name }
                                  </h6>
                                </Link>
                              }

                              {
                                item.attributes.Price &&
                                <div className={ styles[`cart__price-box`] }>
                                  {
                                    item.attributes.Mode === 'sale' &&
                                    <span className={clsx(
                                      styles[`cart__tag`],
                                      styles[`cart__tag--sale`]
                                    )}>
                                      SALE
                                    </span>
                                  }

                                  {
                                    item.attributes.Mode === 'sold_out' &&
                                    <span className={clsx(
                                      styles[`cart__tag`],
                                      styles[`cart__tag--sold`]
                                    )}>
                                      SOLD OUT
                                    </span>
                                  }

                                  {
                                    item.attributes.Mode === 'upcoming' &&
                                    <span className={clsx(
                                      styles[`cart__tag`],
                                      styles[`cart__tag--upcoming`]
                                    )}>
                                      COMING SOON
                                    </span>
                                  }

                                  {
                                    item.attributes.SalePrice &&
                                    <p className={ styles[`cart__price-box-sale-price`] }>
                                      { item.attributes.SalePrice }
                                      <span> yang</span>
                                    </p>
                                  }

                                  <p className={ styles[`cart__price-box-price`] }>
                                    { item.attributes.Price }
                                    <span> yang</span>
                                  </p>
                                </div>
                              }

                            </div>

                            <div className={ styles[`cart__item-quantity`] }>
                              <span className={ styles[`cart__item-quantity-label`] }>
                                Quantity:
                              </span>
                              <span className={ styles[`cart__item-quantity-item`]}>
                                { item.quantity }
                              </span>
                            </div>

                            <div className={ styles[`cart__item-actions`]}>
                              <a
                                className={ clsx(
                                  button.button,
                                  styles[`cart__button`]
                                )}
                                onClick={ () => { context.removeFromCart(item.id) } }
                              >
                                <p>Remove item from Cart</p>
                              </a>
                            </div>
                          </div>
                        ))
                      }

                    </div>
                ) : (
                  <h2>
                    No items in cart! You have to add anything to your cart!
                  </h2>
                )
              }

              {
                context.cart.length > 0 &&
                <>
                  <div className={ styles.cart__summary }>
                    <h1 className={ styles[`cart__summary-title`] }>
                      Total:
                    </h1>

                    <span className={ styles[`cart__summary-value`] }>
                    { totalAmount } yang
                    </span>

                  </div>

                  <Link href={ process.env.NEXT_PUBLIC_FRONT_URL + `/checkout` }>
                    <a className={
                      clsx(
                        button.button,
                        styles[`cart__summary-button`]
                      )
                    }>
                      Pay now!
                    </a>
                  </Link>
                </>
              }

            </>
          ): (
            <h1 className={ styles.cart__title }>
              You have to log in to see your cart!
            </h1>
          )
        }

      </section>
    </BasicLayout>
  )
}
