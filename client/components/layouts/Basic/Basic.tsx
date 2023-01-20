import Header from "../../standard/Header/Header";
import Footer from "../../standard/Footer/Footer";
export default function BasicLayout(
  {
    children,
    headerData,
    footerData
  }: any
) {
  /* Header variables */
  const logoUrl = headerData.data.attributes.Logotype.data.attributes.url;
  const navigationItems = headerData.data.attributes.Navigation.Link;
  const navigationButtons = headerData.data.attributes.Navigation.Button;
  const cartButtonIcon = headerData.data.attributes.Navigation.CartButton;
  const mobileButtonIcon = headerData.data.attributes.Navigation.MobileButton;

  /* Footer variables */
  const brandUrl = footerData.data.attributes.FooterBrand.FooterLogotype.data[0].attributes.url;
  const footerCopyright = footerData.data.attributes.FooterBrand.FooterCopyright;
  const footerNavigationLists = footerData.data.attributes.FooterNavLists;

  return (
    <>
      <Header
        cartButtonIcon={ cartButtonIcon }
        logoUrl={ logoUrl }
        mobileButtonIcon={ mobileButtonIcon }
        navigationButtons={ navigationButtons }
        navigationItems={ navigationItems }
      />

      { children }

      <Footer
        footerBrandUrl={ brandUrl }
        footerCopyright={ footerCopyright }
        footerNavigationLists={ footerNavigationLists }
      />
    </>
  );
}
