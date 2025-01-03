import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: true,
    };

    return(
        <>
        <div className="home_container">
            <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="/images/image.jpg" className="slide_img" alt="이미지"/>
                </div>
                <div>
                    <img src="/images/image.jpg" className="slide_img" alt="이미지"/>
                </div>
                <div>
                    <img src="/images/image.jpg" className="slide_img" alt="이미지"/>
                </div>
                <div>
                    <img src="/images/image.jpg" className="slide_img" alt="이미지"/>
                </div>
            </Slider>
            </div>
                </div>
        </>
    )

}
export default Home;
