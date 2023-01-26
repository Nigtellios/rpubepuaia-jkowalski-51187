import styles from '../../styles/pages/Register.module.scss';
import utils from '../../styles/modules/utilities/utility.module.scss';
import BasicLayout from "../../components/layouts/Basic/Basic";
import HeaderData from "../../lib/HeaderData";
import FooterData from "../../lib/FooterData";
import clsx from "clsx";
import ReusableButton from "../../components/reusable/Button/Button";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
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

export default function RegisterSuccess(
  {
    headerData,
    footerData
  }: any
) {
  /* Session Variables */
  const { data: session } = useSession();

  /* Session Management */
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
        styles.register
      ) }>
        <div className={ styles.register__choose }>
          <h4 className={ styles.register__title }>

            {
              session ? (
                <>Let's go shopping!</>
              ) : (
                <>You're registered, you can now use your credentials to login.</>
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
