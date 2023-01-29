import styles from '../styles/pages/Checkout.module.scss';
import utils from '../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import clsx from "clsx";
import { SessionContextValue, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useShopContext } from "../components/context/ShopContext";
import HeaderProps from "../components/standard/Header/Header.interface";
import FooterProps from "../components/standard/Footer/Footer.interface";

export async function getStaticProps(): Promise<{props: CheckoutProps}> {
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

export interface CheckoutProps {
  headerData: HeaderProps;
  footerData: FooterProps;
  fallback: string;
}

export default function Checkout(
  {
    headerData,
    footerData
  }: CheckoutProps
) {
  const context: any = useShopContext();
  const { data: session }: SessionContextValue = useSession();

  useEffect((): void => {
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
