import Link from 'next/link';
import { IReusableButton } from "./Button.interface";
import Image from "next/image";
import styles from './Button.module.scss';

export default function ReusableButton({ icon, url, text, className }: IReusableButton) {

  return (
    <Link href={ `${url}` }>
      <a className={ styles[`${className}`] }>
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
