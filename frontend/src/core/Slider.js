import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';


const imgsrc = [
    {
        "content": {
            "content1": "https://i.ibb.co/Z6bdZpJ/front-image2.jpg",
            "content2": "https://i.ibb.co/Z6bdZpJ/front-image2.jpg",
            "content3": "https://i.ibb.co/Z6bdZpJ/front-image2.jpg",
            "content4": "https://i.ibb.co/Z6bdZpJ/front-image2.jpg"
        }
    }

]

function Slider() {
    return (
        <div className="Slider">
              <Carousel autoplay={true} infiniteLoop={true} interval={1000} stopOnHover={false}>
                    <div className="image">
                        <img src={imgsrc[0].content.content1} alt=""></img>
                    </div>
                    <div className="image">
                        <img src={imgsrc[0].content.content2} alt=""></img>
                    </div>
                    <div className="image">
                        <img src={imgsrc[0].content.content3} alt=""></img>
                    </div>
                    <div className="image">
                        <img src={imgsrc[0].content.content4} alt=""></img>
                    </div>
            </Carousel>
           
        </div>
    );
}
export default Slider;