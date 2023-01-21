import BasicLayout from "../components/layouts/Basic/Basic";
import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";

export async function getStaticProps() {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();

  return {
    props: {
      headerData,
      footerData,
      fallback: "blocking"
    }
  };
}

export default function Products(
  {
    headerData,
    footerData
  }: any
) {
  return (
    <BasicLayout
      headerData={headerData}
      footerData={footerData}
    >
      <h1>
        Here let's render products.
      </h1>
    </BasicLayout>
  );
}
