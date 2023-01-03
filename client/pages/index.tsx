import Image from "next/image";
import Header from "../components/Header/Header";
import client from '../connection/apollo-client';
import headerQuery from "../components/Header/HeaderQuery";

export async function getServerSideProps () {
  try {
    const { data } = await client.query({
      query: headerQuery,
    });
  
    return {
      props: {
        headerData: data.header,
      },
    };
  } catch (error) {
    let errorMessage = '';
  
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  
    throw new Error(errorMessage);
  }
}

export default function Home({ headerData }: any) {
  const logoUrl = headerData.data.attributes.Logotype.data.attributes.url;
  const navigationItems = headerData.data.attributes.Navigation.Link;
  const navigationButtons = headerData.data.attributes.Navigation.Button;
  
  return (
    <>
      <Header
        logoUrl={ logoUrl }
        navigationItems={ navigationItems }
        navigationButtons={ navigationButtons }
      />
    </>
  )
}
