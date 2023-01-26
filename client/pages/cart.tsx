import styles from '../styles/pages/Cart.module.scss';
import utils from '../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import clsx from "clsx";

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
  return (
    <BasicLayout
      headerData={ headerData }
      footerData={ footerData }
    >
      <section className={ clsx(
        utils.container,
        styles.cart
      ) }>
        <h1>
          Cart Page
        </h1>
      </section>
    </BasicLayout>
  )
}
