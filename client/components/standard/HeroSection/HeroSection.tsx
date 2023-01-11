import Image from 'next/image'
import styles from './HeroSection.module.scss';
import utils from '../../../styles/modules/utilities/utility.module.scss';
/* https://splidejs.com/integration/react-splide/ */
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import clsx from "clsx";

export default function HeroSection(
  {
    slider,
    arrowUpIcon,
    arrowDownIcon,
    lookUpIcon,
    addToCartIcon
  }: any
  ) {
  const heroSlider = slider;
  const arrowUp = arrowUpIcon;
  const arrowDown = arrowDownIcon;
  const lookUp = lookUpIcon;
  const addToCart = addToCartIcon;

  return (
    <section className={ styles.hero }>

      {
        heroSlider &&
        <Splide
          aria-label="Hero Section"
          className={ utils.container }
          hasTrack={ false }
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
                  className={ clsx(styles.hero__slide, utils.container) }
                >
                  <img
                    src={ process.env.NEXT_PUBLIC_URL + slide.SlideImage.data.attributes.url }
                    width={ slide.SlideImage.data.attributes.width }
                    height={ slide.SlideImage.data.attributes.height }
                    className={ clsx(styles.hero__image, utils.container) }
                  />

                  {
                    slide.SlideHeading && slide.SlideSubheading &&
                    <div className={ styles[`hero__slide-content-wrapper`] }>
                      <div className={ styles[`hero__slide-content`] }>
                        <div className={ styles[`hero__slide-content-title`] }>
                          <h4>{ slide.SlideHeading }</h4>
                        </div>
                        <div className={ styles[`hero__slide-content-subtitle`] }>
                          <p>{ slide.SlideSubheading }</p>
                        </div>
                      </div>
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
