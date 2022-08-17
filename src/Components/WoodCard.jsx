import React from 'react'
import styled from 'styled-components'

const WoodCard = ({image, name,advantages}) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <ul>
       <li>{advantages[0]}</li>
       <li>{advantages[1]}</li>
       <li>{advantages[2]}</li>
       <li>{advantages[3]}</li>
       <li>{advantages[4]}</li>
       <li>{advantages[5]}</li>
       <li>{advantages[6]}</li>
       <li>{advantages[7]}</li>
      </ul>
    </Card>
  )
}


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 400px;
  margin: 0 .5rem;
  
 
 h3{
  font-size: 2rem;
  padding: .5rem 0 1rem 0;
 }

 ul li{
   list-style: none;
   padding: 0.3rem 0;
   font-size: 1.2rem;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   color: #FFC099;
   letter-spacing: .1rem;
   text-transform: capitalize;
 }
 img{
   padding: 1rem 0;
   width: 100%;
   height: 50%
 }
  
 
`
export default WoodCard;