import Carousel from 'react-bootstrap/Carousel'
import Slide01 from './img/Chiffres1_62833079e9.jpg'
import Slide02 from './img/gomycode1.jpg'
import Slide03 from './img/images.jfif'
import './slides.css'

function Slides() {
    return(
<Carousel className="caroussels">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide01}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide02}
      alt="second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Slide03}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)
}

export default Slides
