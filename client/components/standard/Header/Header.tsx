import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import { HeaderProps } from "./Header.interface";
import {
  ComponentNavigationNavigationButton,
  ComponentNavigationNavigationLink
} from "../../../gql/generated/graphql";
import ReusableButton from "../../reusable/Button/Button";
import {IReusableButton} from "../../reusable/Button/Button.interface";

export default function Header(
  {
    logoUrl,
    navigationItems,
    navigationButtons,
  }: HeaderProps
) {
  const url = logoUrl;
  const navigationItemsList = navigationItems || [];
  const navigationButtonsList = navigationButtons || [];

  console.log(navigationButtonsList);
  console.log(navigationButtonsList[1].ButtonIcon.data.attributes.url);
  
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
      
      <div className={ `${ styles.navigation } ${ utils.container }` }>
        <div className={ styles[`navigation__wrapper`] }>
          
          {
            url.length > 0 &&
            <Image
              src={ process.env.NEXT_PUBLIC_URL + url }
              width={ 64 }
              height={ 71 }
            />
          }
  
          {
            navigationItemsList.length > 0 &&
            <ul className={ styles[`navigation__items`] }>

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

          {
            navigationButtonsList.length > 0 &&
            <div className={ styles[`navigation__buttons`] }>

              {
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

            </div>
          }
          
        </div>
      </div>
    </>
  );
}
