import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Home.scss'

const photos = [  
  {
    name: 'Photo 1',
    url: "https://www.tabletowo.pl/wp-content/uploads/2019/04/model-s-001.jpg"
  },
  {
    name: 'Photo 2',
    url: "https://img.wprost.pl/img/tesla-cybertruck/52/6a/547fb87fae7558d4557dedd2b445.jpeg"
  },
  {
    name: 'Photo 3',
    url: "https://a.allegroimg.com/s512/037b8d/f72d552a41e1a010e913c85ba4ea/TESLA-MODEL-S-5YJS-P85D-AWD-772-KM"
  },
]
class Home extends Component {
  render(){
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToshow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
      }
    return(
      <>
      <div className='Rozp'>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url }style={{width: "100vw", height:"40vh"}}></img>
              </div>
            )
          })}
        </Slider>
        <div className='logo_home'>
        <i className="fas fa-dog pitbull"> </i>
        </div>
      </div>
      </>
    )
  }
}

export default Home