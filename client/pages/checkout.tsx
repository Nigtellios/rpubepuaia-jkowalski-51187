import styles from '../styles/pages/Checkout.module.scss';
import utils from '../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useShopContext } from "../components/context/ShopContext";

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

  return (
    <BasicLayout
      headerData={ headerData }
      footerData={ footerData }
    >
      <section className={ clsx(
        utils.container,
        styles.checkout
      ) }>

        {
          session && context.cart.length > 0 ? (
            <>
              <h1 className={ styles.checkout__title }>
                Thanks for coming there!
              </h1>

              <p className={ styles.checkout__info }>
                That's end of our journey, this is just an example shop for my engineer degree project.
              </p>

              <p className={ styles.checkout__info }>
                Take care, please remember to stay hydrated, don't overwork yourself!
              </p>

              <p className={ styles.checkout__info }>
                Jakub Kowalski, WSB Gdańsk - Software Development, ININ7_(SD)
              </p>
            </>

          ) : (
            <>
              <h1 className={ styles.checkout__title }>
                You shouldn't be here!
              </h1>

              <p className={ styles.checkout__info }>
                Please buy any product first, then you will be able to checkout.
              </p>
            </>
          )
        }

      </section>
    </BasicLayout>
  )
}
