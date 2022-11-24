import '../css/gallery.css';
import {useState, useRef} from 'react';
import arrowForward from '../assets/images/arrow-forward.svg'
export default function Gallery() {
    const [slideshowToggled, setSlideshowToggled] = useState<boolean>(false);
    const [activeImg, setActiveImg] = useState<number>(0);
    const img = useRef<HTMLImageElement>(null);
    const images = [
        {
            image: 'https://picsum.photos/300/300',
        },
        {
            image: 'https://picsum.photos/600/300',
        },
        {
            image: 'https://picsum.photos/700/300',
        },
        {
            image: 'https://picsum.photos/450/550',
        },
        {
            image: 'https://picsum.photos/250/300',
        },
        {
            image: 'https://picsum.photos/200/550',
        },
        {
            image: 'https://picsum.photos/400/400',
        },
        {
            image: 'https://picsum.photos/300/350',
        },
        {
            image: 'https://picsum.photos/200/150',
        },
        {
            image: 'https://picsum.photos/380/350',
        },
        {
            image: 'https://picsum.photos/200/400',
        },
    ];
    const toggleSlideshow = (e: any) => {
        setSlideshowToggled(!slideshowToggled);
        const img = images.findIndex((item) => item.image === e.target.src);
        triggerAnimation()
        setActiveImg(img);
    };
    const prevImg = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        triggerAnimation();
        setActiveImg(activeImg - 1 < 0 ? images.length - 1 : activeImg - 1);
    };
    const nextImg = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        triggerAnimation();

        setActiveImg(activeImg + 1 >= images.length ? 0 : activeImg + 1);
    };
    const triggerAnimation = () => {
        img.current?.classList.remove('fade-in-out');
        setTimeout(() => {
            img.current?.classList.add('fade-in-out');
        }, 1000);
    };
    return (
        <div className="gallery-container">
            {slideshowToggled ? (
                <div
                    className="slideshow-container"
                    onClick={() => setSlideshowToggled(false)}>
                    <div
                        className="img-cont"
                        onClick={(e) => e.stopPropagation()}>
                        <img
                            ref={img}
                            className="current-img"
                            src={images[activeImg].image}
                            alt="Img alt text"
                        />
                    </div>
                    <div className="buttons">
                        <button className='prev-btn' onClick={prevImg}><img src={arrowForward} style={{transform:'rotate(180deg)'}} alt="Back arrow" /></button>
                        <button className='next-btn' onClick={nextImg}><img src={arrowForward} alt="Back arrow" /></button>
                    </div>
                </div>
            ) : null}
            {images.map((img, index) => {
                return (
                    <div onClick={toggleSlideshow} className="img-container">
                                                                    

                        <img loading="lazy" src={img.image} key={index} style={{animation: `fade-in 0.5s linear forwards ${index * 0.3}s`}} /> 
                    </div>
                );
            })}
        </div>
    );
}
