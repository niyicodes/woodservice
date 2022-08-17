import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OurWork = () => {
 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  }
  },
  {
 breakpoint: 600,
 settings: {
   slidesToShow: 1,
   slidesToScroll: 1,
   initialSlide: 2
 }
  },
  {
  breakpoint: 480,
  settings: {
   slidesToShow: 1,
   slidesToScroll: 1
  }
}
  ]
 };
 return (
  <Main>
   <h3>our work</h3>
   <div className="slider">
    <Slider {...settings}>
     <div className="img">
      <img src="images/work1.jpg" alt='' />
     </div>
     <div className="img">
      <img src="images/work2.jpg" alt='' />
     </div>
     <div className="img">
      <img src="images/work3.jpg" alt='' />
     </div>
    </Slider>
   </div>
  </Main>
 )
}

const Main = styled.main`
 display: flex;
 flex-direction: column;
 justify-content: center;
 max-width: 100%;
 margin: 2rem 4rem;
 text-align: center;

 h3{
  width: 60%;
  text-decoration: overline;
  text-decoration-color: #FFC099;
  font-size: 3rem;
  letter-spacing: 10px;
  color: white;
  text-transform: uppercase;
 }

 .slider{
  width: 80%;
  margin: 2rem auto;

  img{
   align-self: center;
   width: 90%;
   margin: 1rem auto;
  }
 }
`
export default OurWork