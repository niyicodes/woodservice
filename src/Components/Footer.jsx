import React from 'react'
import styled from 'styled-components'
import {BiPhoneCall} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
const Footer = () => {
 return (
  <FooterArea>
   <div className="top">
    <img src='images/logo.png' alt="My logo" />
    <span><BiPhoneCall /> +234 905 8507 523.</span>
    <span><GoLocation /> Lagos State, Nigeria, West-Africa.</span>
   </div>
   <p>
    Design from Figma community, code by <a href="https://github.com/niyicodes/woodservice">Niyicodes</a>
   </p>
  </FooterArea>
 )
}

const FooterArea = styled.footer`
 display: flex;
 flex-direction: column;
 gap: 2rem;
 justify-content: space-between;
 align-items: center;
 color: white;
 font-size: 2rem;
 padding: 3rem 4rem;
 -webkit-box-shadow: 0px -4px 10px 2px #DEDEDE; 
 box-shadow: 0px -4px 10px 2px #DEDEDE;
 .top{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  justify-content: space-between;
  font-size: 1.5rem;
 }
`
export default Footer