import styles from '../../styles/pages/Register.module.scss';
import utils from '../../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../../components/layouts/Basic/Basic";
import HeaderData from "../../lib/HeaderData";
import FooterData from "../../lib/FooterData";
import clsx from "clsx";
import ReusableButton from "../../components/reusable/Button/Button";
import { SessionContextValue, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { RegisterProps } from "./register";

export async function getStaticProps(): Promise<{props: RegisterProps}> {
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

export default function RegisterSuccess(
  {
    headerData,
    footerData
  }: RegisterProps
) {
  /* Session Variables */
  const { data: session }: SessionContextValue = useSession();

  /* Session Management */
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
        <div className={ styles.register__choose }>
          <h4 className={ styles.register__title }>

            {
              session ? (
                <span>Let's go shopping!</span>
              ) : (
                <span>You're registered, you can now use your credentials to login.</span>
              )
            }

          </h4>

          <span className={ styles.register__spacer }>

             {
              session ? (
                <ReusableButton
                  additionalClass={ "accent" }
                  text={ "Shop now" }
                  url={ `/products` }
                />
              ) : (
                <ReusableButton
                  additionalClass={ "light" }
                  text={ "Login" }
                  url={ `/` }
                  onClick={ () => signIn() }
                />
              )
             }

          </span>
        </div>
      </section>
    </BasicLayout>
  )
}
