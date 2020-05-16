import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import styles from '../styles/home.module.css';
import CarouselStyles from '../styles/carousel.module.css';

export default function Carousel() {
    return (
        <CarouselProvider
        totalSlides={3}
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        >
            <div className={CarouselStyles.carouselContainer}>
                <ButtonBack className={CarouselStyles.button}>
                    <MdKeyboardArrowLeft color='#000000' size={80} className={styles.arrow} />
                </ButtonBack>

                <Slider className={CarouselStyles.slider}>
                    <Slide index={0}>
                        <div className={CarouselStyles.slides}>
                            <Link href='/products'>
                                <img src='/images/manipulados.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>
                        </div>
                    </Slide>

                    <Slide index={1}>
                        <div className={CarouselStyles.slides}>
                            <Link href='/products'>
                                <img src='/images/manipulados.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>
                        </div>
                    </Slide>

                    <Slide index={2}>
                        <div className={CarouselStyles.slides}>
                            <Link href='/products'>
                                <img src='/images/manipulados.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>

                            <Link href='/products'>
                                <img src='/images/asma.png' />
                            </Link>
                        </div>
                    </Slide>
                </Slider>

                <ButtonNext className={CarouselStyles.button}>
                    <MdKeyboardArrowRight color='#000000' size={80} className={styles.arrow}/>
                </ButtonNext>
            </div>
        </CarouselProvider>
    )
}