import utils from '../../styles/modules/utilities/utility.module.scss';
import styles from '../../styles/pages/Register.module.scss';
import BasicLayout from "../../components/layouts/Basic/Basic";
import HeaderData from "../../lib/HeaderData";
import FooterData from "../../lib/FooterData";
import { SessionContextValue, useSession } from "next-auth/react";
import { useEffect } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { registerUser } from "../../services/auth";
import HeaderProps from "../../components/standard/Header/Header.interface";
import FooterProps from "../../components/standard/Footer/Footer.interface";

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

export interface RegisterProps {
  headerData: HeaderProps;
  footerData: FooterProps;
  fallback: string;
}

export default function Register(
  {
    headerData,
    footerData
  }: RegisterProps
) {
  /* Routing Variables */
  const router = useRouter();
  
  /* On Sign-In */
  const onSubmit = async (event: any): Promise<any> => {
    event.preventDefault();

    try {
      const result = await registerUser( {
        username: event.target.username.value || '',
        email: event.target.email.value || '',
        password: event.target.password.value || '',
      });

      if (result.jwt && result.user.username !== null) {
        await router.replace(`${process.env.NEXT_PUBLIC_FRONT_URL}/auth/register-success`);

        return;
      }
    } catch (error) {
      alert('Please check if your credentials are properly typed!');
    }
  };
  
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
        <div>
          <h1 className={ clsx(
            styles.register__title,
            styles[`register__title--center`]
          ) }>
            Register
          </h1>
        </div>

        <form className={styles.register__form} onSubmit={onSubmit}>
          <div className={styles[`register__form-row`]}>
            <input
              id="username"
              name="username"
              type="text"
              className={styles.input}
              placeholder="Username"
            />
          </div>
          <div className={styles[`register__form-row`]}>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="Email"
            />
          </div>
          <div className={styles[`register__form-row`]}>
            <input
              id="password"
              name="password"
              type="password"
              className={styles.input}
              placeholder="Password"
            />
          </div>
          <button
            className={ clsx(
              styles.register__button
            )}
            style={{
              marginTop: 15,
            }}
          >
            Register
          </button>
        </form>
      </section>
    </BasicLayout>
  )
}
