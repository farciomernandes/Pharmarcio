import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import styles from '../styles/home.module.css';
import CarouselStyles from '../styles/carousel.module.css';

import items from '../config/images.json';

const [ firsts, seconds, thirds ] = items;

export default function Carousel() {
    return (
        <CarouselProvider
        totalSlides={items.length}
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        >  
            <div className={CarouselStyles.carouselContainer}>
                <ButtonBack className={CarouselStyles.button}>
                    <MdKeyboardArrowLeft color='#000000' size={60} className={styles.arrow} />
                </ButtonBack>

                <Slider className={CarouselStyles.slider}>
                    <div className={CarouselStyles.sliderContent}>
                        { firsts.map((item, index) => (
                            <Slide index={index} key={item.id}>
                                <div className={CarouselStyles.slides}>
                                    <Link href='/products'>
                                        <img src={item.image_url} alt={item.name} />
                                    </Link>
                                </div>
                            </Slide>
                        )) }

                        { seconds.map((item, index) => (
                            <Slide index={index} key={item.id}>
                                <div className={CarouselStyles.slides}>
                                    <Link href='/products'>
                                        <img src={item.image_url} alt={item.name} />
                                    </Link>
                                </div>
                            </Slide>
                        )) }

                        { thirds.map((item, index) => (
                            <Slide index={index} key={item.id}>
                                <div className={CarouselStyles.slides}>
                                    <Link href='/products'>
                                        <img src={item.image_url} alt={item.name} />
                                    </Link>
                                </div>
                            </Slide>
                        )) }
                    </div>
                </Slider>

                <ButtonNext className={CarouselStyles.button}>
                    <MdKeyboardArrowRight color='#000000' size={60} className={styles.arrow}/>
                </ButtonNext>
            </div> 
        </CarouselProvider> 
    ) 
}