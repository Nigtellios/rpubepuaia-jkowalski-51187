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

  const filterProducts = (inputObject: object) => {
    console.log(inputObject);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    formData.priceBottom = event.target.priceBottom.value;
    formData.priceTop = event.target.priceTop.value;
    formData.mode = event.target.filterMode.value;

    console.log(allProducts.data)
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
            <label htmlFor="filterMode">Product mode:</label>
            <select
              name="filterMode"
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
