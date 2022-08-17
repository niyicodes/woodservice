import React from 'react'
import styled from 'styled-components'

const Button = ({btnName, style, onClick}) => {
 return (
  <Buttons style={style} onClick={onClick}>{btnName}</Buttons>
 )
}
// {backgroundColor: '#728BAD', color: 'white', padding:'.7rem 1.3rem', borderRadius:'.6rem'}

const Buttons = styled.button`
 :hover{
  transform: scale(1.2);
  font-size: 1.4rem;
  text-orientation: sideways-right;
 }
`
export default Button