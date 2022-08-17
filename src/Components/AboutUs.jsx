import React from 'react'
import styled from 'styled-components'


const AboutUs = () => {
  return (
    <Main>
     <div className="textpart">
      <h3>about us</h3>
      <p>
       BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
      </p>
     </div>
     <div className="imagespart">
      <img src="images/Oak.jpg" alt=""  className='img1'/>
      <img src="images/stairs.jpg" alt="" className='img2' />
      <img src="images/img3.png" alt=""  className='img3'/>
     </div>
    </Main>
  )
}


const Main = styled.main`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 background-color: #1E0C06;
 border-top-right-radius: 40px;
 border-bottom-right-radius: 40px;
 gap: 3rem;
 max-width: 100%;
 width: 90%;
 padding: 5rem 3rem;
 margin: 4rem 3rem 4rem 0;
 color: whitesmoke;
 font-family: 'Chakra Petch', sans-serif;
 font-size: 2rem;
 max-height: 100vh;
 

 .textpart{
  width: 50%;
  h3{
   text-transform: capitalize;
   text-decoration: overline;
   text-decoration-color: #FFDBBB;
   padding: 0 0 2rem 0;
  }

  p{
   text-align: justify;
   line-height: 1.5;
  }
 }

 .imagespart{
  position: relative;
  width: 50%;

  .img1{
   left: 3rem;
   top: 6rem;
   z-index: 1000;
  }

  .img2{
   left: 3rem;
   top: -4.5rem;
  }

  .img3{
   top: -2.5rem;
   right: 1rem;
   z-index: 500;
  }
  img{
   position: absolute;
   width: 300px;
   padding: 2rem 0;
   border-radius: 100%;
   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
   transform: skew(-1deg);
  }
 }
`
export default AboutUs