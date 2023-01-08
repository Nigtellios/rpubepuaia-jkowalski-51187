import Header from "../components/standard/Header/Header";
import HeaderData from "../lib/HeaderData";
import Footer from "../components/standard/Footer/Footer";
import FooterData from "../lib/FooterData";

export async function getServerSideProps () {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();

  return {
    props: {
      headerData: headerData,
      footerData: footerData
    },
  };
}

export default function Home({ headerData, footerData }: any) {
  /* Header Variables */
  const logoUrl = headerData.data.attributes.Logotype.data.attributes.url;
  const navigationItems = headerData.data.attributes.Navigation.Link;
  const navigationButtons = headerData.data.attributes.Navigation.Button;
  const cartButtonIcon = headerData.data.attributes.Navigation.CartButton;
  const mobileButtonIcon = headerData.data.attributes.Navigation.MobileButton;

  /* Footer Variables */
  const brandUrl = footerData.data.attributes.FooterBrand.FooterLogotype.data[0].attributes.url;
  const footerCopyright = footerData.data.attributes.FooterBrand.FooterCopyright;
  const footerNavigationLists = footerData.data.attributes.FooterNavLists;

  return (
    <>
      <Header
        logoUrl={ logoUrl }
        navigationItems={ navigationItems }
        navigationButtons={ navigationButtons }
        cartButtonIcon={ cartButtonIcon }
        mobileButtonIcon={ mobileButtonIcon }
      />

      <Footer
        footerBrandUrl={ brandUrl }
        footerCopyright={ footerCopyright }
        footerNavigationLists={ footerNavigationLists }
      />
    </>
  )
}
