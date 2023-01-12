import Header from "../components/standard/Header/Header";
import HeaderData from "../lib/HeaderData";
import Footer from "../components/standard/Footer/Footer";
import FooterData from "../lib/FooterData";
import HeroSection from "../components/standard/HeroSection/HeroSection";
import HeroSectionData from "../lib/homepage/HeroSectionData";
import HomePicDescCTA1 from "../lib/homepage/HomePicDescCTA1";
import PictureDescriptionCTA from "../components/reusable/PictureDescriptionCTA/PictureDescriptionCTA";

export async function getServerSideProps () {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const heroData = await HeroSectionData.fetchHeroData();
  const homePicDescCTA1 = await HomePicDescCTA1.fetchHPDCTA1();

  return {
    props: {
      headerData,
      footerData,
      heroData,
      homePicDescCTA1
    },
  };
}

export default function Home(
  {
    headerData,
    footerData,
    heroData,
    homePicDescCTA1
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

  /* Picture Description CTA 1 */
  const variant1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.Variant;
  const descAlignment1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.DescriptionAlignment;
  const descHeading1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.DescriptionHeading;
  const descText1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.DescriptionText;
  const descPic1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.Picture;
  const descCTA1 = homePicDescCTA1.data.attributes.PictureDescriptionCTA.CTA;

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
        />

        <PictureDescriptionCTA
          variant={ variant1 }
          descriptionAlignment={ descAlignment1 }
          descriptionHeading={ descHeading1 }
          descriptionText={ descText1 }
          picture={ descPic1 }
          ctaObject={ descCTA1 }
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
