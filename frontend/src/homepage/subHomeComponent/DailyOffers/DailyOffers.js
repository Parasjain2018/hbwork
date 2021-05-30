import React from 'react';
import './DailyOffers.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const imgsrc = [
  {
    "content": {
      "content1": "https://i.ibb.co/4WgYv84/sample.jpg",
      "content2": "https://i.ibb.co/4WgYv84/sample.jpg",
      "content3": "https://i.ibb.co/4WgYv84/sample.jpg"
    }
  }

]

function Offers(props) {
  return (
    <div className="Daily-offers">
      <div className="daily-offers-text" style={{ fontWeight: 'bold' }}>
        <h1><b>DAILY OFFERS</b></h1>
      </div>
      <div className="Slider-offer">
        <div className="Sub-slider" style={{ margin: '2% 0 2%' }}>
          <Carousel responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            infinite={true}
            centerMode={false}
          >
            <img className="offer-round-image" src={imgsrc[0].content.content1} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content2} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content3} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content1} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content2} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content3} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content1} alt=""></img>
            <img className="offer-round-image" src={imgsrc[0].content.content2} alt=""></img>
          </Carousel>
        </div>
      </div>
    </div>

  );
}
export default Offers;

