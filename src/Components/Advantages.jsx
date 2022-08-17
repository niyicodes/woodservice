import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Advantages = () => {
 return (
  <Main>
   <h1>Advantages <br /> working with us</h1>
   <div className="displayarea">
    <img src="images/stairs.jpg" alt="" />
    <ul>
     <li>In-house carpentry production</li>
     <li>We only treat wood with environmentally friendly and safe products</li>
     <li>Prices from the manufacturer, no extra charges</li>
    </ul>
   </div>
   <Button btnName='Receive a consultation' style={{fontSize:'1.3rem',padding: '.7rem 2.3rem', borderRadius: '15px', backgroundColor: '#728BAD', color: 'white', outline:'none', border:'none', cursor:'pointer', textAlign: 'center'}}/>
  </Main>
 )
}
const Main = styled.main`
 align-content: center;
 text-align: center;
 color: white;
 font-size: 2rem;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 margin:4rem;

 h1{
  font-family: 'Chakra Petch', sans-serif;
  font-size: 4rem;
  font-weight: 700;
 }

 .displayarea{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  margin: 2rem 4rem;

  img{
   border-radius:15px;
   width: 50%;
  }

  ul{
   width: 50%;
   justify-content: center;
   margin: auto 0;
   text-align: left;
   li{
    list-style: none;
    line-height: 3;
    font-size: 1.5rem;
    padding-left: .5rem;
    &::marker {
     content: '⇒';
     color: goldenrod;
    }
   }
  }
 }


`
export default Advantages