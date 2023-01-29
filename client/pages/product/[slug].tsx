import styles from "./Product.module.scss";
import utils from "../../styles/modules/utilities/utility.module.scss";
import button from "../../components/reusable/Button/Button.module.scss";
import getAllProductSlugs from "../../lib/product/getAllProductSlugs";
import { getProductData } from "../../lib/product/product";
import BasicLayout from "../../components/layouts/Basic/Basic";
import FooterData from "../../lib/FooterData";
import HeaderData from "../../lib/HeaderData";
import clsx from "clsx";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import GlobalSettings from "../../lib/globalSettings/GlobalSettings";
import PictureDescriptionCTA from "../../components/reusable/PictureDescriptionCTA/PictureDescriptionCTA";
import { SessionContextValue, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useShopContext } from "../../components/context/ShopContext";
import HeaderProps from "../../components/standard/Header/Header.interface";
import FooterProps from "../../components/standard/Footer/Footer.interface";
import { IProductData } from "../../interfaces/ProductData.interface";
import { IGlobalData } from "../../interfaces/GlobalData.interface";

export async function getStaticPaths(): Promise<{ paths: any; fallback: string }> {
  const paths = await getAllProductSlugs;

  return {
    paths,
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }: any): Promise<{ props: ProductProps }> {
  const productData = await getProductData(
    params.slug
  );

  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const globalData = await GlobalSettings.fetchGlobalData();

  return {
    props: {
      productData,
      headerData,
      footerData,
      globalData,
      fallback: "blocking"
    }
  };
}

export interface ProductProps {
  headerData: HeaderProps;
  footerData: FooterProps;
  productData: IProductData;
  globalData: IGlobalData;
  fallback: string;
}

export default function Product(
  {
    headerData,
    footerData,
    productData,
    globalData
  }: ProductProps
) {
  let inputStyle: string = `product--` + `${productData.attributes.Mode}`;

  const context: any = useShopContext();
  const { data: session }: SessionContextValue = useSession();

  useEffect((): void => {
    if (!session) {
      return;
    }
  }, [session]);

  return (
    <BasicLayout
      headerData={headerData}
      footerData={footerData}
    >
      <section className={clsx(
        styles.product,
        utils.container,
        styles[inputStyle]
      )}>
        <div className={styles.product__wrapper}>
          <div className={styles.product__info}>

            {
              productData.attributes.Gallery &&
              <div className={styles[`product__info-image`]}>

                <Splide
                  aria-label="Product Gallery"
                  className={utils.container}
                  hasTrack={false}
                  options={{
                    autoplay: true
                  }}
                >
                  <SplideTrack
                    className={styles.product__track}
                  >

                    {
                      productData.attributes.Gallery.data.map((slide: any) => (

                        <SplideSlide
                          key={slide.id}
                          className={clsx(
                            styles.product__slide,
                            utils.container,
                            utils[`container--no-margins`]
                          )}
                        >
                          <img
                            src={process.env.NEXT_PUBLIC_URL + slide.attributes.url}
                            width={slide.attributes.width}
                            height={slide.attributes.height}
                            className={clsx(
                              styles.product__image,
                              utils.container,
                              utils[`container--no-margins`]
                            )}
                            alt={"Slider Image"}
                          />
                        </SplideSlide>

                      ))
                    }

                  </SplideTrack>

                  <div className={clsx(
                    "splide__arrows",
                    styles.product__arrows
                  )}>
                    {
                      globalData.ArrowDown &&
                      <button
                        className={clsx(
                          "splide__arrow splide__arrow--prev",
                          styles.product__arrow,
                          styles[`product__arrow--prev`]
                        )}
                      >
                        <img
                          src={process.env.NEXT_PUBLIC_URL + globalData.ArrowDown.data.attributes.url}
                          width={25}
                          height={25}
                          alt={"Slider - Arrow Down"}
                        />
                      </button>
                    }

                    <div
                      className={clsx(
                        "splide__pagination splide__pagination--ltr",
                        styles.product__pagination
                      )}
                    />

                    {
                      globalData.ArrowUp &&
                      <button
                        className={clsx(
                          "splide__arrow splide__arrow--next",
                          styles.product__arrow,
                          styles[`product__arrow--next`]
                        )}
                      >
                        <img
                          src={process.env.NEXT_PUBLIC_URL + globalData.ArrowUp.data.attributes.url}
                          width={25}
                          height={25}
                          alt={"Slider - Arrow Up"}
                        />
                      </button>
                    }

                  </div>

                </Splide>

              </div>
            }

            <div className={styles[`product__info-content`]}>

              {
                productData.attributes.Name &&
                <h2 className={styles.product__title}>
                  {productData.attributes.Name}
                </h2>
              }

              {
                productData.attributes.Description &&
                <p className={styles.product__description}>
                  {productData.attributes.Description}
                </p>
              }

              {
                productData.attributes.Price &&
                <div className={styles[`product__price-box`]}>

                  {
                    productData.attributes.Mode === "sale" &&
                    <span className={clsx(
                      styles[`product__tag`],
                      styles[`product__tag--sale`]
                    )}>
                      SALE
                    </span>
                  }

                  {
                    productData.attributes.Mode === "sold_out" &&
                    <span className={clsx(
                      styles[`product__tag`],
                      styles[`product__tag--sold`]
                    )}>
                      SOLD OUT
                    </span>
                  }

                  {
                    productData.attributes.Mode === "upcoming" &&
                    <span className={clsx(
                      styles[`product__tag`],
                      styles[`product__tag--upcoming`]
                    )}>
                      COMING SOON
                    </span>
                  }

                  {
                    productData.attributes.SalePrice &&
                    <p className={styles[`product__price-box-sale-price`]}>
                      {productData.attributes.SalePrice}
                      <span> yang</span>
                    </p>
                  }

                  <p className={styles[`product__price-box-price`]}>
                    {productData.attributes.Price}
                    <span> yang</span>
                  </p>
                </div>
              }

              {
                session ? (
                  <>
                    {
                      productData.attributes.Mode === "sold_out" ||
                      productData.attributes.Mode === "upcoming" ? (
                        <a
                          className={ clsx(
                            button.button,
                            styles[`product__button`]
                          )}
                        >
                          {
                            productData.attributes.Mode === "upcoming" &&
                            <p>Coming soon!</p>
                          }

                          {
                            productData.attributes.Mode === "sold_out" &&
                            <p>Sold Out!</p>
                          }
                        </a>
                      ) : (
                        <a
                          className={ clsx(
                            button.button,
                            styles[`product__button`]
                          )}
                          onClick={ () => { context.addToCart(productData) }}
                        >
                          {
                            productData.attributes.Mode === "standard" &&
                            <p>Add to cart</p>
                          }

                          {
                            productData.attributes.Mode === "sale" &&
                            <p>Be hurry! Add to cart</p>
                          }
                        </a>
                      )
                    }
                  </>
                ) : (
                  <span className={ styles[`product--error`] }>
                    Only logged in users are available to see cart icon and add products to cart.
                  </span>
                )
              }

              {
                productData.attributes.categories.data.length > 0 &&
                <div className={styles.product__categories}>

                  <h6 className={styles[`product__categories-title`]}>
                    Categories:
                  </h6>

                  <div className={ styles[`product__categories-wrapper`] }>

                    {
                      productData.attributes.categories.data.map((category: any) => (
                        <span className={ styles.product__category }>
                          {category.attributes.Name}
                        </span>
                      ))
                    }

                  </div>
                </div>
              }

            </div>

          </div>
        </div>

        {
          productData.attributes.Marketing &&
          <div className={styles.product__marketing}>

            <PictureDescriptionCTA
              variant={productData.attributes.Marketing.Variant}
              descriptionAlignment={productData.attributes.Marketing.DescriptionAlignment}
              descriptionHeading={productData.attributes.Marketing.DescriptionHeading}
              descriptionText={productData.attributes.Marketing.DescriptionText}
              picture={productData.attributes.Marketing.Picture}
              ctaObject={productData.attributes.Marketing.CTA}
            />

          </div>
        }

      </section>
    </BasicLayout>
  );
}
