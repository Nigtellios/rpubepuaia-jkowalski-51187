import Image from 'next/image'
import styles from './HeroSection.module.scss';
/* https://splidejs.com/integration/react-splide/ */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

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
        <Splide aria-label="Hero Section">

          {
            heroSlider.SingleSlide.map((slide: any) => (

              <SplideSlide key={ slide.id }>
                <Image
                  src={ process.env.NEXT_PUBLIC_URL + slide.SlideImage.data.attributes.url }
                  width={ slide.SlideImage.data.attributes.width }
                  height={ slide.SlideImage.data.attributes.height }
                />
              </SplideSlide>

            ))
          }

        </Splide>
      }

    </section>
  );
}
