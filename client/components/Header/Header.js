import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/components/header.module.scss';

export default function Header(
  {
    name,
    logoUrl,
    navigationItems,
    navigationButtons,
  }
) {
  const pageName = name || 'RPUBEPUAIA';
  
  return (
    <>
      <Head>
        <title>
          { pageName } - Jakub Kowalski, 51187
        </title>
        <meta
          name="description"
          content="Created by Jakub Kowalski"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <div className={styles.navigation}>
      
      </div>
    </>
  );
}
