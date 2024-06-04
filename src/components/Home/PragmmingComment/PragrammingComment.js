import React, { useState } from 'react'
import styles from './Pragramming.module.css'
// import Slider from "react-slick";
import user from '../../../assets/user3.png'
// import Flickity from 'react-flickity-component'
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './pragram.css'
export default function PragrammingComment() {
    const [slideIndex, setSlideIndex] = useState(0)
    const [dataCarosuel, setDataCarosuel] = useState([
        { id: 1, img: user, text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
        { id: 2, img: user, text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
        { id: 3, img: user, text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
        { id: 4, img: user, text: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
        { id: 5, img: user, text: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
        { id: 6, img: user, text: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in lacus semper ornare nulla eget volutpat. Diam ac mauris, ut posuere semper dolor. At non nec urna accumsan libero, egestas enim. Suscipit sagittis hendrerit quis vel. ', name: "ALisher ALimov", job: "FRontEnd developer" },
    ])
    const flickityOptions = {
        initialIndex: 2
    }
    // const SampleNextArrow = ({ onClick }) => {
    //     return (
    //         <div className={styles.ArrowLeft} onClick={onClick}><BsArrowLeft /></div>

    //     );
    // }

    // const SamplePrevArrow = ({ onClick }) => {
    //     return (
    //         <div className={styles.ArrowRight} onClick={onClick}><BsArrowRight /></div>

    //     );
    // }
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     beforeChange: (current, next) => setSlideIndex(next),
    //     centerMode: true,
    //     // nextArrow: <SampleNextArrow />,
    //     // prevArrow: <SamplePrevArrow />
    // };
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Text}>
                    <p>Muaffqiyatli dasturchilar fikrlari</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit enim ultrices viverra. Nam in sed et proin ipsum ut natoque quam. Ut consequat at purus nec vestibulum sed ipsum. Pretium gravida morbi risus commodo. Ut maecenas consectetur convallis sit.
                    </p>

                </div>
                <div className={styles.CarouselApp}>
                    {/* <Flickity
                        // className={styles.CarouselApp1} // default ''
                        elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    // disableImagesLoaded={false} // default false
                    // reloadOnUpdate // default false
                    // static // default false
                    > */}

                        <div class="carousel"
                            data-flickity='{ "wrapAround": true }'>
                            <div class="carousel-cell">1</div>
                            <div class="carousel-cell">2</div>
                            <div class="carousel-cell">3</div>
                            <div class="carousel-cell">4</div>
                            <div class="carousel-cell">5</div>
                        </div>
                        
                        {/* <div class="carousel"
                            data-flickity='{ "wrapAround": true }'>
                            <div class="carousel-cell">1</div>
                            <div class="carousel-cell">2</div>
                            <div class="carousel-cell">3</div>
                            <div class="carousel-cell">4</div>
                            <div class="carousel-cell">5</div>
                        </div>
                        <div class="carousel"
                            data-flickity='{ "wrapAround": true }'>
                            <div class="carousel-cell">1</div>
                            <div class="carousel-cell">2</div>
                            <div class="carousel-cell">3</div>
                            <div class="carousel-cell">4</div>
                            <div class="carousel-cell">5</div>
                        </div> */}

                    {/* </Flickity> */}
                </div>
                {/* <div className={styles.Slider}>
                    <Slider {...settings} className={styles.SlickCarosuel}>
                        {dataCarosuel.map((data, index) => {
                            return (
                                <div key={data.id} className={`${index === slideIndex ? styles.SlideActive : styles.Slide}`} >
                                    <div className={styles.CardImg}>
                                        <div className={styles.img}>
                                            <img src={data.img} />
                                        </div>
                                    </div>
                                    <div className={styles.CardText}>
                                        <p>{data.text}</p>
                                    </div>
                                    <div className={styles.CardJob}>
                                        <p>{data.name}</p>
                                        <p>{data.job}</p>
                                    </div>

                                </div>

                            )
                        })}

                    </Slider>
                </div> */}


            </div >
        </div >
    )
}
