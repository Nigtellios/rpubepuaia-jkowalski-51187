import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import utils from "../styles/modules/utilities/utility.module.scss";
import clsx from "clsx";
import styles from "../styles/pages/Products.module.scss";
import AllProducts from "../lib/products/AllProducts";
import ProductBox from "../components/reusable/ProductBox/ProductBox";

export async function getStaticProps() {
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

export default function Products(
  {
    headerData,
    footerData,
    allProductsData
  }: any
) {
  let allProducts = allProductsData;
  let formData = {
    priceBottom: 0,
    priceTop: 0,
    mode: ""
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(((formData.priceBottom as unknown) as HTMLInputElement).value)
    console.log(((formData.priceTop as unknown) as HTMLInputElement).value)
    console.log(((formData.mode as unknown) as HTMLInputElement).value)
  }

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
            <label htmlFor="filter-price-bottom">
              Minimum price (in yang):
            </label>
            <input
              name="filter-price-bottom"
              type="number"
              ref={node => ((formData.priceBottom as unknown) = node)}
            />
          </div>

          <div className={styles[`products__filter-item`]}>
            <label htmlFor="filter-price-top">
              Maximum price (in yang):
            </label>
            <input
              name="filter-price-top"
              type="number"
              ref={node => ((formData.priceTop as unknown) = node)}
            />
          </div>

          <div className={styles[`products__filter-item`]}>
            <label htmlFor="filter-mode">Product mode:</label>
            <select
              name="cars"
              id="cars"
              ref={node => ((formData.mode as unknown) = node)}
            >
              <option value="sale">Sale</option>
              <option value="sold_out">Sold</option>
              <option value="upcoming">Upcoming</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          <div className={styles[`products__filter-submit`]}>
            <input name="filter-price-top" type="submit" value="Filter"/>
          </div>
        </form>

        {
          allProducts.data.length > 0 &&
          <div className={styles.products__grid}>

            {
              allProducts.data.map((product: any) => (

                <ProductBox
                  key={product.id}
                  name={product.attributes.Name}
                  mode={product.attributes.Mode}
                  price={product.attributes.Price}
                  salePrice={product.attributes.SalePrice}
                  slug={product.attributes.Slug}
                  mainPhoto={product.attributes.MainPhoto}
                />

              ))
            }

          </div>
        }

      </section>
    </BasicLayout>
  );
}
