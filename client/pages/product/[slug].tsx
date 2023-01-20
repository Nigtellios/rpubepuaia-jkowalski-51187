import Link from 'next/link';
import getAllProductSlugs from "../../lib/product/getAllProductSlugs";
import { getProductData } from "../../lib/product/product";

export async function getStaticPaths() {
  const paths = await getAllProductSlugs;

  return {
    paths,
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }: any) {
  const productData = await getProductData(
    params.slug
  );

  return {
    props: {
      productData
    }
  }
}

export default function Product(
  {
    productData
  } : any
) {

  return (
    <main>
      <h1>{ productData.Name }</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </main>
  );
}
