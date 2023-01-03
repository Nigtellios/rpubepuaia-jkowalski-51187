import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/header.module.scss';
import utils from '../../styles/modules/utilities/utility.module.scss';

export default function Header(
  {
    logoUrl,
    navigationItems,
    navigationButtons,
  }
) {
  const url = logoUrl;
  const navigationItemsList = navigationItems || [];
  const navigationButtonsList = navigationButtons || [];
  
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
                navigationItemsList.map((item) => (
                  <li
                    key={ item.id }
                    className={ styles[`navigation__items-item`] }
                  >
                    <Link
                      href={ item.LinkURL }
                    >
                      { item.LinkName }
                    </Link>
                  </li>
                ))
              }
            </ul>
          }
          
        </div>
      </div>
    </>
  );
}
