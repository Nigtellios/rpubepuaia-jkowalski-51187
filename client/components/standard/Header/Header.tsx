import Head from 'next/head';
import Link from 'next/link';
import styles from './Header.module.scss';
import cartButtonStyles from '../../reusable/Button/Button.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import { HeaderProps } from "./Header.interface";
import { ComponentNavigationNavigationLink } from "../../../gql/generated/graphql";
import ReusableButton from "../../reusable/Button/Button";
import { IReusableButton } from "../../reusable/Button/Button.interface";
import { useState } from "react";
import clsx from "clsx";

export default function Header(
  {
    logoUrl,
    navigationItems,
    navigationButtons,
    cartButtonIcon,
    mobileButtonIcon
  }: HeaderProps
) {
  /* Variables */
  const url = logoUrl;
  const navigationItemsList = navigationItems || [];
  const navigationButtonsList = navigationButtons || [];
  const cartButton = cartButtonIcon || [];
  const mobileButton = mobileButtonIcon || [];

  /* State */
  const [ menuActive, setMenuActive ] = useState(false);

  const openMenu = () => {
    setMenuActive(!menuActive)
  }
  
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
      
      <div className={ clsx(
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
                      <Link href={ `${ item.LinkURL }` }>
                        { item.LinkName }
                      </Link>
                    </li>
                  ))
                }

              </ul>
            }

            <div className={ styles[`navigation__buttons`] }>

              {
                navigationButtonsList.length > 0 &&
                navigationButtonsList.map((button: IReusableButton) => (

                  <ReusableButton
                    className={ button.ButtonStyle as string }
                    icon={ button.ButtonIcon?.data?.attributes?.url }
                    text={ button.ButtonText }
                    url={ button.ButtonLink }
                    key={ button.id }
                  />

                ))
              }

              {
                cartButton &&
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
                        href={ `${ item.LinkURL }` }
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
                navigationButtonsList.length > 0 &&
                navigationButtonsList.map((button: IReusableButton) => (

                  <ReusableButton
                    className={ button.ButtonStyle as string }
                    icon={ button.ButtonIcon?.data?.attributes?.url }
                    text={ button.ButtonText }
                    url={ button.ButtonLink }
                    key={ button.id }
                  />

                ))
              }

              {
                cartButton &&
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
      </div>
    </>
  );
}
