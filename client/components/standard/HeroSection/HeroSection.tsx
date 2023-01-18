import styles from './HeroSection.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
/* https://splidejs.com/integration/react-splide/ */
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import clsx from "clsx";
import ReusableButton from "../../reusable/Button/Button";

export default function HeroSection(
  {
    slider,
    arrowUpIcon,
    arrowDownIcon
  }: any
  ) {
  const heroSlider = slider || [];
  const arrowUp = arrowUpIcon || '';
  const arrowDown = arrowDownIcon || '';

  return (
    <section className={ styles.hero }>

      {
        heroSlider &&
        <Splide
          aria-label="Hero Section"
          className={ utils.container }
          hasTrack={ false }
          options={{
            autoplay: true
          }}
        >
          <div className={ clsx(
            "splide__arrows",
            styles.hero__arrows
          ) }>
            {
              arrowDown &&
              <button
                className={ clsx(
                  "splide__arrow splide__arrow--prev",
                  styles.hero__arrow,
                  styles[`hero__arrow--prev`]
                )}
              >
                <img
                  src={ process.env.NEXT_PUBLIC_URL + arrowDown }
                  width={ 25 }
                  height={ 25 }
                  alt={ "Slider - Arrow Down" }
                />
              </button>
            }

            <div
              className={ clsx(
                "splide__pagination splide__pagination--ltr",
                styles.hero__pagination
              ) }
            />

            {
              arrowUp &&
              <button
                className={ clsx(
                  "splide__arrow splide__arrow--next",
                  styles.hero__arrow,
                  styles[`hero__arrow--next`]
                )}
              >
                <img
                  src={ process.env.NEXT_PUBLIC_URL + arrowUp }
                  width={ 25 }
                  height={ 25 }
                  alt={ "Slider - Arrow Up" }
                />
              </button>
            }
          </div>

          <SplideTrack
            className={ styles.hero__track }
          >
            {
              heroSlider.SingleSlide.map((slide: any) => (

                <SplideSlide
                  key={ slide.id }
                  className={ clsx(
                    styles.hero__slide,
                    utils.container,
                    utils[`container--no-margins`]
                  ) }
                >
                  <img
                    src={ process.env.NEXT_PUBLIC_URL + slide.SlideImage.data.attributes.url }
                    width={ slide.SlideImage.data.attributes.width }
                    height={ slide.SlideImage.data.attributes.height }
                    className={ clsx(
                      styles.hero__image,
                      utils.container,
                      utils[`container--no-margins`]
                    ) }
                    alt={ "Slider Image" }
                  />

                  {
                    slide.SlideHeading && slide.SlideSubheading &&
                    <div className={ styles[`hero__slide-content-wrapper`] }>

                      {
                        heroSlider.ReusableButton[1] &&
                        <ReusableButton
                          additionalClass={ heroSlider.ReusableButton[1].ButtonStyle }
                          icon={ heroSlider.ReusableButton[1].ButtonIcon.data.attributes.url }
                          url={ heroSlider.ReusableButton[1].ButtonLink }
                        />
                      }

                      <div className={ styles[`hero__slide-content`] }>
                        <div className={ styles[`hero__slide-content-title`] }>
                          <h4>{ slide.SlideHeading }</h4>
                        </div>
                        <div className={ styles[`hero__slide-content-subtitle`] }>
                          <p>{ slide.SlideSubheading }</p>
                        </div>
                      </div>

                      {
                        heroSlider.ReusableButton[0] &&
                        <ReusableButton
                          additionalClass={ heroSlider.ReusableButton[0].ButtonStyle }
                          icon={ heroSlider.ReusableButton[0].ButtonIcon.data.attributes.url }
                          url={ heroSlider.ReusableButton[0].ButtonLink }
                        />
                      }

                    </div>
                  }

                </SplideSlide>

              ))
            }
          </SplideTrack>

        </Splide>
      }

    </section>
  );
}
