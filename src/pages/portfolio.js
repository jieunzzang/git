// import logo from './logo.svg';
import '../static/css/reset.css';
import '../static/css/common.css';
import '../static/css/swiper.css';
import '../static/css/slider.css';

import jquery from 'jquery';
import $ from 'jquery';
// import 'swiper/css';
// import Swiper from 'swiper';

function Portfolio() {
  return (
    <div className="App">
        <header>
            <nav className="header-menu">
            <ul>
                <li><a href="#top"><span>About</span></a></li>
                <li><a href="#a2"><span>portfolio</span></a></li>
            </ul>
            </nav>
        </header>
        <div className="mb">
            <p className="slide_txt on">
            <span>K</span>
            <span>I</span>
            <span>M</span>
            <span>J</span>
            <span>I</span>
            <span>E</span>
            <span>U</span>
            <span>N</span>
            </p>
        </div>

        <div className="blog-slider-wrap">
            <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
                <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
                </div>
                <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt=""/>
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
                </div>

                <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
                </div>
            </div>
            <div className="blog-slider__pagination"></div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
