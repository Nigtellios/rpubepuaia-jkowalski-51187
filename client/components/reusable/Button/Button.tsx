import Link from 'next/link';
import { IReusableButton } from "./Button.interface";
import styles from './Button.module.scss';
import clsx from "clsx";
export default function ReusableButton(
  {
    icon,
    url,
    text,
    additionalClass,
    ...props
  }: IReusableButton
) {
  const inputStyle = `button--` + `${ additionalClass }`;

  return (
    <Link href={ `${url}` }>
      <a className={ clsx(
        styles.button,
        styles[inputStyle]
      )}
         { ...props }
      >
        { icon &&
          <img
            src={ process.env.NEXT_PUBLIC_URL + `${ icon }` }
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
