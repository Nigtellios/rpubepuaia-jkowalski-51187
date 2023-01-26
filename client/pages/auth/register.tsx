import utils from '../../styles/modules/utilities/utility.module.scss';
import styles from '../../styles/pages/Register.module.scss';
import BasicLayout from "../../components/layouts/Basic/Basic";
import HeaderData from "../../lib/HeaderData";
import FooterData from "../../lib/FooterData";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { registerUser } from "../../services/auth";

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

export default function Register(
  {
    headerData,
    footerData
  }: any
) {
  /* Routing Variables */
  const router = useRouter();
  
  /* On Sign-In */
  const onSubmit = async (event: any) => {
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
        <form className={styles.form} onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" className={styles.input} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={styles.input} />

          <label
            style={{
              marginTop: 10,
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.input}
          />

          <button
            className={styles.button}
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
