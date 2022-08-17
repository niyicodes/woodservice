import React from 'react'
import styled from 'styled-components'
import OurWood from '../OurWood'
import WoodCard from './WoodCard'
const WeWorkWith = () => {
 return (
  <Main>
   <h2>the wood we work with</h2>
   <div className="ourwood">
    {OurWood.map((wood) => {
     return (
      <WoodCard 
      key={wood.name}
      name={wood.name}
      image={wood.image}
      advantages={wood.advantages}

      />
     )
    })}
   </div>
  </Main>
 )
}


const Main = styled.main`
 align-items: center;
 text-align: center;
 padding: 2rem 0;
 margin: 2rem 4rem 4rem 4rem;
 h2{
  font-size: 3rem;
  font-family: 'Chakra Petch', sans-serif;
  text-transform: uppercase;
  color: white;
  text-align: center;
  align-self: center;
  
 }

 .ourwood{
  display: flex;
 }
`
export default WeWorkWith