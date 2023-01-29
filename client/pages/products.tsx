import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import utils from "../styles/modules/utilities/utility.module.scss";
import clsx from "clsx";
import styles from "../styles/pages/Products.module.scss";
import AllProducts from "../lib/products/AllProducts";
import ProductBox from "../components/reusable/ProductBox/ProductBox";
import { useEffect, useState } from "react";
import { useShopContext } from "../components/context/ShopContext";
import FooterProps from "../components/standard/Footer/Footer.interface";
import HeaderProps from "../components/standard/Header/Header.interface";
import { IAllProducts } from "../interfaces/AllProducts.interface";
import { IFormData } from "../interfaces/FormData.interface";

export async function getStaticProps(): Promise<{ props: ProductsProps }> {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const allProductsData = await AllProducts.fetchAllProducts();

  return {
    props: {
      headerData,
      footerData,
      allProductsData,
      fallback: "blocking"
    }
  };
}

export interface ProductsProps {
  headerData: HeaderProps,
  footerData: FooterProps,
  allProductsData: IAllProducts,
  fallback: string
}

export default function Products(
  {
    headerData,
    footerData,
    allProductsData
  }: ProductsProps
) {
  const context: any = useShopContext();
  const [products, setProducts]: any[] = useState(allProductsData);

  let formData: IFormData = {
    priceBottom: 0,
    priceTop: 0,
    mode: ""
  };

  useEffect((): void => {
    setProducts(allProductsData.data);
  }, [allProductsData]);

  const filterProducts = (inputObject: IFormData): void => {
    inputObject = formData;

    const filteredProducts = allProductsData.data.filter((value: any) => {
      return value.attributes.Price >= inputObject.priceBottom &&
        value.attributes.Price <= inputObject.priceTop &&
        value.attributes.Mode === inputObject.mode;
    });

    if (inputObject.mode === "all") {
      setProducts(allProductsData.data);
      return;
    } else {
      setProducts(filteredProducts);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    formData.priceBottom = event.target.priceBottom.value || 0;
    formData.priceTop = event.target.priceTop.value || 99999;
    formData.mode = event.target.filterMode.value || "";

    filterProducts(formData);
  };

  return (
    <BasicLayout
      headerData={headerData}
      footerData={footerData}
    >
      <section className={clsx(
        utils.container,
        styles.products
      )}>
        <form
          className={styles.products__filter}
          onSubmit={handleSubmit}
        >
          <div className={styles[`products__filter-item`]}>
            <label htmlFor="priceBottom">
              Minimum price (in yang):
            </label>
            <input
              name="priceBottom"
              type="number"
            />
          </div>

          <div className={styles[`products__filter-item`]}>
            <label htmlFor="priceTop">
              Maximum price (in yang):
            </label>
            <input
              name="priceTop"
              type="number"
            />
          </div>

          <div className={styles[`products__filter-item`]}>
            <label htmlFor="filterMode">Products type:</label>
            <select
              name="filterMode"
            >
              <option value="all">All Products</option>
              <option value="sale">Sale</option>
              <option value="sold_out">Sold</option>
              <option value="upcoming">Upcoming</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          <div className={styles[`products__filter-submit`]}>
            <input name="filter-price-top" type="submit" value="Filter" />
          </div>
        </form>

        {
          products.length > 0 &&
          <div className={styles.products__grid}>

            {
              products.map((product: any) => (

                <ProductBox
                  key={product.id}
                  name={product.attributes.Name}
                  mode={product.attributes.Mode}
                  price={product.attributes.Price}
                  salePrice={product.attributes.SalePrice}
                  slug={product.attributes.Slug}
                  mainPhoto={product.attributes.MainPhoto}
                  onClickEvent={ () => { context.addToCart(product) }}
                />

              ))
            }

          </div>
        }

        {
          products.length === 0 &&
          <div className={styles.products__empty}>

              {
                formData.priceTop < 200 &&
                <span>
                  <h2> No products found.</h2>
                  <h2> We don't have products with this mode cheaper than 200 yang. </h2>
                </span>
              }

            {
              formData.priceTop >= 200 &&
              <span>
                <h2> No products found.</h2>
              </span>
            }

          </div>
        }

      </section>
    </BasicLayout>
  );
}
