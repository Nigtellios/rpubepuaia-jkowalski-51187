import styles from '../../styles/pages/Register.module.scss';
import utils from '../../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../../components/layouts/Basic/Basic";
import HeaderData from "../../lib/HeaderData";
import FooterData from "../../lib/FooterData";
import clsx from "clsx";
import ReusableButton from "../../components/reusable/Button/Button";
import { SessionContextValue, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import HeaderProps from "../../components/standard/Header/Header.interface";
import FooterProps from "../../components/standard/Footer/Footer.interface";

export async function getStaticProps(): Promise<{ props: ChooseProps }> {
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

export interface ChooseProps {
  headerData: HeaderProps;
  footerData: FooterProps;
  fallback: string;
}

export default function Choose(
  {
    headerData,
    footerData
  }: ChooseProps
) {
  /* Session Management Variables */
  const { data: session }: SessionContextValue = useSession();

  /* Manage Session */
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
        styles.register
      ) }>

        {
          session ? (
            <div className={ styles.register__choose }>
              <h4 className={ styles.register__title }>
                You're already logged in! Go and check out the shop.
              </h4>

              <span className={ styles.register__spacer }>
                <ReusableButton
                  additionalClass={ `accent` }
                  text={ `Shop now!` }
                  url={ `/products` }
                />
              </span>
            </div>
          ) : (
            <div className={ styles.register__choose }>
              <h4 className={ styles.register__title }>
                Already have an account?
              </h4>

              <span className={ styles.register__spacer }>
                <ReusableButton
                  additionalClass={ "light" }
                  text={ "Login" }
                  url={ `/` }
                  onClick={ () => signIn() }
                />
              </span>

              <h4 className={ styles.register__title }>
                ...or not?
              </h4>

              <span className={ styles.register__spacer }>
                <ReusableButton
                  additionalClass={ "light" }
                  text={ "Register" }
                  url={ process.env.NEXT_PUBLIC_FRONT_URL + `/auth/register` }
                />
              </span>
            </div>
          )
        }

      </section>
    </BasicLayout>
  )
}
