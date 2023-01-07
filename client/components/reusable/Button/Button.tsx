import Link from 'next/link';
import { IReusableButton } from "./Button.interface";
import styles from './Button.module.scss';
import clsx from "clsx";

export default function ReusableButton({ icon, url, text, className }: IReusableButton) {
  const inputStyle = `button--` + `${className}`;

  return (
    <Link href={ `${url}` }>
      <a className={ clsx(
        styles.button,
        styles[inputStyle]
      )}
      >
        { icon &&
          <img
            src={ process.env.NEXT_PUBLIC_URL + `${icon}` }
            width={ 25 }
            height={ 25 }
            alt={ "Button" }
          />
        }
        { text }
      </a>
    </Link>
  );
}
