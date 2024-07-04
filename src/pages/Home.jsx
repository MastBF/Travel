import React, { useEffect, useRef, useCallback } from 'react';
import '../assets/styles/Home.css';
import flag1 from '../assets/images/Reviews/armflag.png';
import flag2 from '../assets/images/Reviews/rusflag.png';
import flag3 from '../assets/images/Reviews/ukflag.png';
import logo from '../assets/images/logo.png';
import image1 from '../assets/images/Home/image1.jpg';
import image2 from '../assets/images/Home/image2.jpg';
import image3 from '../assets/images/Home/image3.jpg';
import image4 from '../assets/images/Home/image4.jpg';
import image5 from '../assets/images/Home/image5.jpg';
import image6 from '../assets/images/Home/image6.jpg';
import image7 from '../assets/images/Home/image7.jpg';
import image8 from '../assets/images/Home/image8.jpg';
import image9 from '../assets/images/Home/image9.jpg';

const MoniTravelApp = () => {
    const slideIndexRef = useRef(0);
    const slideIntervalRef = useRef(null);
    const timeoutIdRef = useRef(null);

    // Оборачиваем changeSlide в useCallback для стабильности между рендерами
    const changeSlide = useCallback((n) => {
        const showSlides = (n) => {
            const slides = document.getElementsByClassName("slide");
            const totalSlides = slides.length;
            let slideIndex = slideIndexRef.current;

            if (n >= totalSlides) {
                slideIndex = 0;
            } else if (n < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = n;
            }

            for (let i = 0; i < totalSlides; i++) {
                slides[i].classList.remove('open');
            }

            slides[slideIndex].classList.add('open');
            slideIndexRef.current = slideIndex;
        };

        showSlides(slideIndexRef.current + n);
        resetSlideInterval();
    }, []);

    const startSlideInterval = () => {
        slideIntervalRef.current = setInterval(() => {
            changeSlide(1);
        }, 3000);
    };

    const resetSlideInterval = () => {
        clearInterval(slideIntervalRef.current);
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
            startSlideInterval();
        }, 5000);
    };

    useEffect(() => {
        // Запускаем автоматическую смену слайдов и интервал при загрузке компонента
        const showSlides = (n) => {
            const slides = document.getElementsByClassName("slide");
            const totalSlides = slides.length;
            let slideIndex = slideIndexRef.current;

            if (n >= totalSlides) {
                slideIndex = 0;
            } else if (n < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = n;
            }

            for (let i = 0; i < totalSlides; i++) {
                slides[i].classList.remove('open');
            }

            slides[slideIndex].classList.add('open');
            slideIndexRef.current = slideIndex;
        };

        showSlides(slideIndexRef.current);
        startSlideInterval();

        // Очистка интервала при размонтировании компонента
        return () => {
            clearInterval(slideIntervalRef.current);
            clearTimeout(timeoutIdRef.current);
        };
    }, [changeSlide]); // Указываем changeSlide как зависимость, чтобы useEffect перезапускался при изменении

    return (
        <div className='home-page'>
            <header>
                <div className="language-select">
                    <img src={flag1} alt="Flag 1" />
                    <img src={flag2} alt="Flag 2" />
                    <img src={flag3} alt="Flag 3" />
                </div>
                <div className="logo">MONI TRAVEL</div>
                <div className='nav'>
                    <div className="menu-icon">
                        <i className="fa-solid fa-bars menubtn" id="menubtn"></i>
                    </div>
                    <div className="navbar">
                        <ul className="menu" id="menu">
                            <i className="fa-solid fa-xmark" id="closemenubtn"></i>
                            <li><a href="#" onClick={() => changeSlide(-1)}><i className="fas fa-home firstmenu"></i> Home</a></li>
                            <li><a href="#"><i className="fas fa-info-circle"></i> About us</a></li>
                            <li><a href="#"><i className="fas fa-concierge-bell"></i> Services</a></li>
                            <li><a href="#"><i className="fas fa-star"></i> Reviews</a></li>
                            <li><a href="#"><i className="fas fa-envelope"></i> Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className="logodiv">
                    <img src={logo} alt="Moni Travel Logo" className="logoPhoto" />
                </div>
                <section className="slideshow">
                    <div className="slideshow-container">
                        <button className="prev" id="prevbtn" onClick={() => changeSlide(-1)}>&#10094;</button>
                        <div className="slide">
                            <img src={image1} alt="Slide 1" />
                            <img src={image2} alt="Slide 2" />
                            <img src={image3} alt="Slide 3" />
                        </div>
                        <div className="slide">
                            <img src={image4} alt="Slide 4" />
                            <img src={image5} alt="Slide 5" />
                            <img src={image6} alt="Slide 6" />
                        </div>
                        <div className="slide">
                            <img src={image7} alt="Slide 7" />
                            <img src={image8} alt="Slide 8" />
                            <img src={image9} alt="Slide 9" />
                        </div>
                        <button className="next" id="nextbtn" onClick={() => changeSlide(1)}>&#10095;</button>
                    </div>
                </section>
                <div className="whitespacer"></div>
            </main>
        </div>
    );
};

export default MoniTravelApp;
