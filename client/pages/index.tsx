import HeaderData from "../lib/HeaderData";
import FooterData from "../lib/FooterData";
import HeroSection from "../components/standard/HeroSection/HeroSection";
import HeroSectionData from "../lib/homepage/HeroSectionData";
import HomePicDescCTA1 from "../lib/homepage/HomePicDescCTA1";
import PictureDescriptionCTA from "../components/reusable/PictureDescriptionCTA/PictureDescriptionCTA";
import HomePicDescCTA2 from "../lib/homepage/HomePicDescCTA2";
import Bestseller from "../components/standard/Bestseller/Bestseller";
import BestsellerData from "../lib/homepage/BestsellerQueryData";
import BasicLayout from "../components/layouts/Basic/Basic";

export async function getServerSideProps () {
  const headerData = await HeaderData.fetchHeaderData();
  const footerData = await FooterData.fetchFooterData();
  const heroData = await HeroSectionData.fetchHeroData();
  const homePicDescCTA1 = await HomePicDescCTA1.fetchHPDCTA1();
  const homePicDescCTA2 = await HomePicDescCTA2.fetchHPDCTA2();
  const bestsellerData = await BestsellerData.fetchBestsellerData();

  return {
    props: {
      headerData,
      footerData,
      heroData,
      homePicDescCTA1,
      homePicDescCTA2,
      bestsellerData
    },
  };
}

export default function Home(
  {
    headerData,
    footerData,
    heroData,
    homePicDescCTA1,
    homePicDescCTA2,
    bestsellerData
  }: any
) {
  /* Hero Section variables */
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

  /* Picture Description CTA 2 */
  const variant2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.Variant;
  const descAlignment2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.DescriptionAlignment;
  const descHeading2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.DescriptionHeading;
  const descText2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.DescriptionText;
  const descPic2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.Picture;
  const descCTA2 = homePicDescCTA2.data.attributes.PictureDescriptionCTA2.CTA;

  /* Bestseller variables */
  const bestsellerProducts = bestsellerData.data.attributes.products;
  const bestsellerHeading = bestsellerData.data.attributes.Heading;
  const bestsellerDescription = bestsellerData.data.attributes.Description;

  return (
    <>
      <BasicLayout
        headerData={ headerData }
        footerData={ footerData }
      >
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

          <Bestseller
            products={ bestsellerProducts }
            heading={ bestsellerHeading }
            description={ bestsellerDescription }
          />

          <PictureDescriptionCTA
            variant={ variant2 }
            descriptionAlignment={ descAlignment2 }
            descriptionHeading={ descHeading2 }
            descriptionText={ descText2 }
            picture={ descPic2 }
            ctaObject={ descCTA2 }
          />
        </main>
      </BasicLayout>
    </>
  )
}
