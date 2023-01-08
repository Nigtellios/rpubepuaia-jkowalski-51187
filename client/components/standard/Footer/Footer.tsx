import styles from './Footer.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import clsx from "clsx";
import FooterProps from "./Footer.interface";
import Link from "next/link";

export default function Footer(
  {
    footerBrandUrl,
    footerCopyright,
    footerNavigationLists
  } : FooterProps
) {
  const footerBrand = footerBrandUrl || '';
  const footerCopyrightText = footerCopyright || '';
  const footerNavigation = footerNavigationLists || [];

  console.log(footerCopyrightText);

  return (
    <footer className={ styles.footer }>
      <div className={ clsx(
        styles.footer__container,
        utils.container
      ) }>
        <div className={ styles.footer__wrapper }>

          <div className={ styles.footer__columns }>

            {
              footerBrandUrl &&
              <div className={ styles[`footer__columns-column`] }>
                <img
                  src={ process.env.NEXT_PUBLIC_URL + footerBrand }
                  width={ 64 }
                  height={ 71 }
                  alt={ "Logo" }
                />
              </div>
            }

            {
              footerNavigation.length > 0 &&
                footerNavigation.map((list: any) => (

                  <div
                    className={ styles[`footer__columns-column`] }
                    key={ list.id }
                  >

                    { list.ListName &&
                      <h5 className={ styles[`footer__columns-column-title`] }>
                        { list.ListName }
                      </h5>
                    }

                    {
                      list.FooterLink.length > 0 &&
                      <ul>
                        {
                          list.FooterLink.map((item: any) => (

                            <li className={ styles[`footer__columns-row`] }>
                              <Link
                                href={ `${ item.LinkURL }` }
                                key={ item.id }
                              >
                                { item.LinkName }
                              </Link>
                            </li>

                          ))
                        }
                      </ul>
                    }

                  </div>

                ))
            }

          </div>

          {
            footerCopyrightText &&
            <div className={ styles.footer__copyright }>
              { footerCopyrightText }
            </div>
          }

        </div>
      </div>
    </footer>
  );
}
