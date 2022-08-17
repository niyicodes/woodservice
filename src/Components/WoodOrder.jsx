import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const WoodOrder = () => {
 return (
  <Main>
   <div className="textpart">
    <h3>solid wood products</h3>
    <span>Oak, beech, ash from 1700 CZK per m3</span>
    <Button btnName='Order'/>
   </div>
   <div className="imgpart">
     <div className="img1">
      <img src="images/img1.png" alt="" />
     </div>
     <div className="img2">
      <img src="images/img2.png" alt="" />
     </div>
     <div className="img3">
      <img src="images/img3.png" alt="" />
     </div>
    </div>
  
  </Main>
 )
}


const Main = styled.main`
 display: flex;
 position: relative;
 background-color:#1E0C06;
 gap:2rem;
 width: 80%;
 height: 60vh;
 padding: 2rem;
 float: right;
 
 .textpart{
  display: flex;
  flex-direction: column;
  width: 50%;
  float: left;
  h3{
   text-transform: uppercase;
   font-family: 'Chakra Petch', sans-serif;
   font-size: 4rem;
   color: white;
   width: 50%;
  }
  span{
   color: #FFDBBB;
   font-size: 1.4rem;
   width:60%;
   padding: 1rem 0;
  }
  &::after{
   content: "";
   background-color: white;
   position: absolute;
   width: 5px;
   height: 90%;
   top: 1rem;
   left: 55%;
   display: block;
  }
 }

 .imgpart{
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  
  img{
   width: 55%;
  }
 }
`
export default WoodOrder