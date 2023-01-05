import Link from 'next/link';
import { IReusableButton } from "./Button.interface";
import Image from "next/image";
import styles from './Button.module.scss';

export default function ReusableButton({ icon, url, text, className }: IReusableButton) {
  const inputStyle = `button--` + `${className}`;

  return (
    <Link href={ `${url}` }>
      <a className={ `${styles.button}  ${styles[inputStyle]}` }>
        { icon &&
          <Image
            src={ process.env.NEXT_PUBLIC_URL + `${icon}` }
            width={ 25 }
            height={ 25 }>
          </Image>
        }
        { text }
      </a>
    </Link>
  );
}
