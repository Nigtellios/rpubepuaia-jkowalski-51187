import Head from 'next/head';
import Link from 'next/link';
import styles from './Header.module.scss';
import cartButtonStyles from '../../reusable/Button/Button.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import { HeaderProps } from "./Header.interface";
import { ComponentNavigationNavigationLink } from "../../../gql/generated/graphql";
import ReusableButton from "../../reusable/Button/Button";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header(
  {
    logoUrl,
    navigationItems,
    loginButton,
    cartButtonIcon,
    mobileButtonIcon
  }: HeaderProps
) {
  /* Standard Variables */
  const url = logoUrl || '';
  const navigationItemsList = navigationItems || [];
  const loginButtonItem = loginButton || [];
  const cartButton = cartButtonIcon || [];
  const mobileButton = mobileButtonIcon || [];

  /* Session Management Variables */
  const { data: session } = useSession();

  /* State Variables */
  const [ menuActive, setMenuActive ] = useState(false);

  const openMenu = () => {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }

  /* Manage Resizing */
  useEffect(() => {
    const media = window.matchMedia('(min-width: 992px)');

    const handleResizing = () => {
      if (media.matches) {
        setMenuActive(false);
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.addEventListener('resize', handleResizing);
      }
    };
  }, []);

  /* Manage Session */
  useEffect(() => {
    if (!session) {
      return;
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>
          RPUBEPUAIA - Jakub Kowalski, 51187
        </title>
        <meta
          name="description"
          content="Created by Jakub Kowalski"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <nav className={ clsx(
          styles.navigation,
          utils.container
        )}
      >
        <div className={ styles.navigation__bar }>

          {
            url.length > 0 &&
              <img
                src={ process.env.NEXT_PUBLIC_URL + url }
                width={ 64 }
                height={ 71 }
                alt={ "Logo" }
              />
          }

          <div className={ styles[`navigation__wrapper`] }>

            {
              navigationItemsList.length > 0 &&
              <ul className={ styles[`navigation__items`] }>

                {
                  navigationItemsList.map((item: ComponentNavigationNavigationLink) => (
                    <li
                      key={ item.id }
                      className={ styles[`navigation__items-item`] }
                    >
                      <Link href={ process.env.NEXT_PUBLIC_FRONT_URL + `${ item.LinkURL }` }>
                        { item.LinkName }
                      </Link>
                    </li>
                  ))
                }

              </ul>
            }

            <div className={ styles[`navigation__buttons`] }>

              {
                session ? (
                  <ReusableButton
                    additionalClass={ loginButtonItem.ButtonStyle as string }
                    icon={ loginButtonItem.ButtonIcon?.data?.attributes?.url }
                    text={ `Sign out` }
                    url={ loginButtonItem.ButtonLink }
                    key={ loginButtonItem.id }
                    onClick={ () => signOut() }
                  />
                ) : (
                  <ReusableButton
                    additionalClass={ loginButtonItem.ButtonStyle as string }
                    icon={ loginButtonItem.ButtonIcon?.data?.attributes?.url }
                    text={ loginButtonItem.ButtonText }
                    url={ loginButtonItem.ButtonLink }
                    key={ loginButtonItem.id }
                  />
                )
              }

              {
                cartButton && session &&
                <Link href={ process.env.NEXT_PUBLIC_FRONT_URL + `/cart` }>
                  <a className={ clsx(
                    cartButtonStyles.button,
                    cartButtonStyles[`button--cart`]
                  ) }
                  >
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        `${ cartButton.CartIcon.data.attributes.url }`
                      }
                      width={ 25 }
                      height={ 25 }
                      alt={ "Cart" }
                    />
                  </a>
                </Link>
              }

            </div>
          </div>

          <div
            className={ clsx(
              styles[`navigation__mobile`],
              menuActive && styles[`navigation__mobile--active`]
            ) }
          >

            {
              navigationItemsList.length > 0 &&
              <ul className={ clsx(
                styles[`navigation__items`],
                styles[`navigation__items--mobile`]
              )}>
                {
                  navigationItemsList.map((item: ComponentNavigationNavigationLink) => (
                    <li
                      key={ item.id }
                      className={ styles[`navigation__items-item`] }
                    >
                      <Link
                        href={ process.env.NEXT_PUBLIC_FRONT_URL + `${ item.LinkURL }` }
                      >
                        { item.LinkName }
                      </Link>
                    </li>
                  ))
                }

              </ul>
            }

            <div className={ styles[`navigation__mobile-button-wrapper`] }>

              {
                session ? (
                  <ReusableButton
                    additionalClass={ loginButtonItem.ButtonStyle as string }
                    icon={ loginButtonItem.ButtonIcon?.data?.attributes?.url }
                    text={ `Sign out` }
                    url={ `/` }
                    key={ loginButtonItem.id }
                    onClick={ () => signOut() }
                  />
                ) : (
                  <ReusableButton
                    additionalClass={ loginButtonItem.ButtonStyle as string }
                    icon={ loginButtonItem.ButtonIcon?.data?.attributes?.url }
                    text={ loginButtonItem.ButtonText }
                    url={ loginButtonItem.ButtonLink }
                    key={ loginButtonItem.id }
                    onClick={ () => signIn() }
                  />
                )
              }

              {
                cartButton && session &&
                <Link href={ process.env.NEXT_PUBLIC_FRONT_URL + `/cart` }>
                  <a className={ clsx(
                    cartButtonStyles.button,
                    cartButtonStyles[`button--cart`]
                  ) }
                  >
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        `${ cartButton.CartIcon.data.attributes.url }`
                      }
                      width={ 25 }
                      height={ 25 }
                      alt={ "Cart" }
                    />
                  </a>
                </Link>
              }

            </div>
          </div>

          <div
            className={ clsx(
              styles[`navigation__mobile-button`],
              menuActive && styles[`navigation__mobile-button--active`]
            ) }
            onClick={ openMenu }
          >
            <img
              src={
                process.env.NEXT_PUBLIC_URL +
                mobileButton.MobileButtonIcon.data.attributes.url
              }
              width={ 45 }
              height={ 45 }
              alt={ "Logo" }
            />
          </div>

        </div>
      </nav>
    </>
  );
}
