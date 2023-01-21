import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import utils from "../styles/modules/utilities/utility.module.scss";
import clsx from "clsx";
import styles from "../styles/pages/Products.module.scss";
import AllProducts from "../lib/products/AllProducts";

export async function getStaticProps() {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const allProductsData = await AllProducts.fetchAllProducts()

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
  return (
    <BasicLayout
      headerData={headerData}
      footerData={footerData}
    >
      <section className={clsx(utils.container, styles.products)}>
        <h1>
          Here let's render products.
        </h1>
      </section>
    </BasicLayout>
  );
}
