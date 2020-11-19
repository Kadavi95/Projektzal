import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../../sass/Home.scss'


const photos = [  
  {
    name: 'Photo 1',
    src: "https://magwet.pl/publish/system/article_images/images/000/000/072/large/Fotolia_195047487_Subscription_Monthly_M-min.jpg?1520864941"
  },
  {
    name: 'Photo 2',
    src: "https://www.publicdomainpictures.net/pictures/160000/velka/maine-coon-cat.jpg"
  },
  {
    name: 'Photo3',
    src: "https://i1.wp.com/readysetpuppy.com/wp-content/uploads/2019/09/The-Dos-and-Donts-of-Exercising-a-Young-German-Shepherd.jpg?fit=994%2C538&ssl=1&resize=1280%2C720"
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
                <img width="100%" src={photo.src} alt=''style={{width: "100vw", height:"40vh"}}></img>
              </div>
            )
          })}
        </Slider>
        <div className='logo_home'>
        <i className="fas fa-dog pitbull"> </i>
        </div>
        <a href="/appointment" className='test2'>Umów wizytę!</a>
     
      </div>
      </>
    )
  }
}
export default Home