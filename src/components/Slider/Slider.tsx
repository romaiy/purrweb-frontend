import { useRef, useState } from 'react';
import i1 from '../../assets/slider/i1.jpg';
import i2 from '../../assets/slider/i2.jpg';
import i3 from '../../assets/slider/i3.jpg';

import { IconArrowBadgeLeft, IconArrowBadgeRight  } from '@tabler/icons-react';


const Slider = () => {
    const images = [i1, i2, i3];
    
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [position, setPosition] = useState<number>(0);
    const [opacityFirst, setOpacityFirst] = useState<boolean>(false);
    const [opacityLast, setOpacityLast] = useState<boolean>(false);
    const sliderRef = useRef<HTMLUListElement>(null);

    const nextSlide = (direction: string) => {
        if (direction === 'next') {
            const nextSlideIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
            goToSlide(`${nextSlideIndex}`);
        } else {
            const nextSlideIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
            goToSlide(`-${nextSlideIndex}`);
        }
    };

    const goToSlide = (number: string) => {
        if (+number === currentSlide || isAnimating) return;
        setIsAnimating(true);
        const slider = sliderRef.current;
        let pos = position;
        var id = setInterval(frame, 0.01);

        function frame() { 
            if (currentSlide === 0 && number === '-2') {
                if (pos === -400) {
                    setPosition(800);
                    setOpacityFirst(false)
                    slider!.style.transform! = `translateX(-${800}px)`;
                    clearInterval(id);
                } else {
                    pos--;
                    if (pos === -1) setOpacityFirst(true)
                    slider!.style.transform! = `translateX(${-pos}px)`;
                }
            } else if (currentSlide === 2 && number === '0') {
                if (pos === 400*images.length) {
                    setPosition(0);
                    setOpacityLast(false)
                    slider!.style.transform! = `translateX(-${0}px)`;
                    clearInterval(id);
                } else {
                    pos++;
                    if (pos === 801) setOpacityLast(true); 
                    slider!.style.transform! = `translateX(-${pos}px)`;
                }
            } else {
            if (number === '-0') {
                if (pos === 0) {
                    setPosition(pos);
                    clearInterval(id);
                } else {
                    pos--;
                    slider!.style.transform! = `translateX(-${pos}px)`;
                }
            }else if (+number < 0) {
                if (pos === position+400*+number) {
                    setPosition(pos);
                    clearInterval(id);
                } else {
                    pos--;
                    slider!.style.transform! = `translateX(-${pos}px)`;
                }
            } else {
                if (pos === 400*+number) {
                    setPosition(pos)
                    clearInterval(id);
                } else {
                    pos++; 
                    slider!.style.transform! = `translateX(-${pos}px)`;
                }
            }}
        };

        setCurrentSlide(+number < 0 ? -+number : +number);
        setTimeout(() => {setIsAnimating(false)}, 2500)
    };

    return (
        <div className='wrapper'>
        <div className="slider">
            <div className='slider__wrapper'>
                <IconArrowBadgeLeft color='black' 
                    onClick={() => nextSlide('prev')} className='slider__left' stroke={2}
                />
                <ul className="slider__list" ref={sliderRef}>
                    <li style={opacityFirst ? {opacity: 1} : {}} className='slider__slide clone'>
                        <img src={images[images.length -1]}/>
                    </li>
                    {images.map((image, index) => (
                        <li 
                            key={image} 
                            className={`slider__slide ${index === currentSlide ? 'active' : ''}`}
                        ><img src={image}/>
                        </li>
                    ))}
                    <li style={opacityLast ? {opacity: 1} : {}} className='slider__slide clone'>
                        <img src={images[0]}/>
                    </li>
                </ul>
                <IconArrowBadgeRight color='black' 
                    onClick={() => nextSlide('next')} className='slider__right' stroke={2}
                />
            </div>
            <div className='slider__dots'>
                {images.map((dot, index) => (
                    <div 
                        style={index === currentSlide ? {background: 'black'} : {}} 
                        key={dot} 
                        className='slider__dot'
                        onClick={() => goToSlide(currentSlide > index ? `-${index}` : `${index}`)}
                    >
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Slider;