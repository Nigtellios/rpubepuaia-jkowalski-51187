import styles from './Footer.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
import clsx from "clsx";
import FooterProps from "./Footer.interface";

export default function Footer(
  {
    footerBrandUrl,
    footerNavigationLists
  } : FooterProps
) {
  return (
    <footer className={ styles.footer }>
      <div className={ clsx(
        styles.footer__container,
        utils.container
      ) }>
        <h1>eks dededede</h1>
      </div>
    </footer>
  );
}
