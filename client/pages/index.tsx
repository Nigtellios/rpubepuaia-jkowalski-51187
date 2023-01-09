import Header from "../components/standard/Header/Header";
import HeaderData from "../lib/HeaderData";
import Footer from "../components/standard/Footer/Footer";
import FooterData from "../lib/FooterData";
import HeroSection from "../components/standard/HeroSection/HeroSection";
import HeroSectionData from "../lib/HeroSectionData";

export async function getServerSideProps () {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const heroData = await HeroSectionData.fetchHeroData();

  return {
    props: {
      headerData,
      footerData,
      heroData
    },
  };
}

export default function Home(
  {
    headerData,
    footerData,
    heroData
  }: any
) {
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

  /* Hero Section Variables */
  const slider = heroData.data.attributes.Slider;
  const arrowUpIcon = heroData.data.attributes.Slider.ArrowUpIcon.data.attributes.url;
  const arrowDownIcon = heroData.data.attributes.Slider.ArrowDownIcon.data.attributes.url;
  const lookUpIcon = heroData.data.attributes.Slider.LookUpIcon.data.attributes.url;
  const addToCartIcon = heroData.data.attributes.Slider.AddToCartIcon.data.attributes.url;

  return (
    <>
      <Header
        logoUrl={ logoUrl }
        navigationItems={ navigationItems }
        navigationButtons={ navigationButtons }
        cartButtonIcon={ cartButtonIcon }
        mobileButtonIcon={ mobileButtonIcon }
      />

      <main>
        <HeroSection
          slider={ slider }
          arrowUpIcon={ arrowUpIcon }
          arrowDownIcon={ arrowDownIcon }
          lookUpIcon={ lookUpIcon }
          addToCartIcon={ addToCartIcon }
        />
      </main>

      <Footer
        footerBrandUrl={ brandUrl }
        footerCopyright={ footerCopyright }
        footerNavigationLists={ footerNavigationLists }
      />
    </>
  )
}
