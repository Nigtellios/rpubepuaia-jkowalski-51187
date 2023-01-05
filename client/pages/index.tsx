import Header from "../components/standard/Header/Header";
import HeaderData from "../lib/HeaderData";

export async function getServerSideProps () {
  const data = await HeaderData.fetchHeaderData();

  return {
    props: {
      headerData: data,
    },
  };
}

export default function Home({ headerData }: any) {
  const logoUrl = headerData.data.attributes.Logotype.data.attributes.url;
  const navigationItems = headerData.data.attributes.Navigation.Link;
  const navigationButtons = headerData.data.attributes.Navigation.Button;
  const cartButtonIcon = headerData.data.attributes.Navigation.CartButton;
  const mobileButtonIcon = headerData.data.attributes.Navigation.MobileButton;
  
  return (
    <>
      <Header
        logoUrl={ logoUrl }
        navigationItems={ navigationItems }
        navigationButtons={ navigationButtons }
        cartButtonIcon={ cartButtonIcon }
        mobileButtonIcon={ mobileButtonIcon }
      />
    </>
  )
}
