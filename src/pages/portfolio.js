// import logo from './logo.svg';
import React from 'react';
import { StyleRoot } from 'radium';
import mbti from '../static/img/mbti.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import '../static/css/reset.css';
import '../static/css/common.css';
import '../static/css/swiper.css';
import '../static/css/slider.css';

function Portfolio() {
  return (
    <div className="App">
        {/* <header>
            <nav className="header-menu">
            <ul>
                <li><a href="#top"><span>About</span></a></li>
                <li><a href="#a2"><span>portfolio</span></a></li>
            </ul>
            </nav>
        </header> */}
        <section id="01">
            <div class="blog-slider-wrap">
            <div class="mb">
                <p class="slide_txt on">
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
            <div class="blog-slider">
                <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src={mbti} alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    <span class="blog-slider__code">
                        안녕하세요. 웹퍼블리셔 5년차 김지은입니다 :D
                    </span>
                    <div class="blog-slider__title">ISTJ-T 청렴결백한 논리주의자</div>
                    <div class="blog-slider__text">
                        우선 제 성격을 먼저 MBTI로 간단하게 말씀드리겠습니다.
                        <ul class="list-txt">
                        <li>청렴하고 부끄럼 없이 행동합니다.</li>
                        <li>실용적으로 생활하는 일꾼의 면모가 있습니다.</li>
                        <li>규율을 지키고 질서와 체계가 잡힌 조직생활에 잘 적응합니다.</li>
                        <li>맡은 일이 있으면 헌신적으로 책임감을 가지고 수행합니다.</li>
                        <li>목표 달성을 위해 시간을 허비하지 않고 집중해서 정확하게 끝낼 수 있습니다.</li>
                        </ul>
                        <p class="sm-txt">
                        단점은 귀차니즘.. 보수적 성향.. 도전하는 것 싫어함.. 직관 능력 부족.. 다소 내향적, 소극적 등등등..
                        </p>
                    </div>
                    </div>
                </div>
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src={mbti} alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    <span class="blog-slider__code">
                        제가 진행했던 프로젝트를 소개해드립니다 :D
                    </span>
                    <div class="blog-slider__title">(O_O) 벌써 5년차가 되어버렸습니다.</div>
                    <div class="blog-slider__text">
                        <ul class="list-txt list-st-none">
                        <li><b>2016.10 ~ 2017.04</b><br/>[NCS] UI/UX 웹표준기반 (스마트앱콘텐츠디자인) 실무과정 [그린컴퓨터아카데미]</li>
                        <li><b>2017.04 ~ 2017.09</b>웹 디자인, 웹 퍼블리싱 [(주)이프론트]</li>
                        <li><b>2017.10 ~ 2018.11</b>전단지 및 배너 홍보물 제작 [(주)스포애니 고척점]</li>
                        <li><b>2018.12 ~ 2019.10</b>웹 디자인, 웹 퍼블리싱 [(주)웨일즈소프트]</li>
                        <li><b>2019.01 ~ 2022.04</b>웹퍼블리싱 [(주)팔네트웍스]</li>
                        </ul>
                        <a href="#" class="blog-slider__button">READ MORE</a>
                    </div>
                    </div>
                </div>

                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src={mbti} alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    <span class="blog-slider__code">
                        제 포트폴리오를 보고 마음에 드셨다면, 연락 주세요!
                    </span>
                    <div class="blog-slider__title">
                        <a href="mailto:'test@test.com'">test@test.com</a><br/>
                        <a href="tel:'010-0000-0000'">010-0000-0000</a><br/>
                        <a href="https://github.com/jieunzzang/git.git" target="_blank">github</a>
                    </div>
                    <div class="blog-slider__text">

                    </div>
                    </div>
                </div>

                </div>
                <div class="blog-slider__pagination"></div>
            </div>
            </div>
        </section>

        <div>

        </div>
    </div>
  );
}

export default Portfolio;
