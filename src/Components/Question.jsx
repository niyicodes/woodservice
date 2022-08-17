import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
const Question = () => {
 const [formData, setFormData] = useState({
  fullName: '',
  phoneNumber: '',
  message: ''
 })

 function handleChange(e){
  const {name, value} = e.target;
  setFormData(prevData => {
   return{
    ...prevData,
    [name]: value
   }
  })
 }

 return (
  <Main>
   <h3>any question?</h3>
   <div className="anyques">
    <form>
     <input
      type="text" 
      name='fullName'
      onChange={handleChange}
      placeholder='Your name'
      value={formData.fullName}
     />
     <input 
      type="tel" 
      name="phoneNumber"
      onChange={handleChange}
      placeholder='Your telephone number'
      value={formData.phoneNumber}
     />
     <textarea
      name="message"
      cols="30" 
      rows="10"
      placeholder='Your question'
      onChange={handleChange}
      value={formData.message}
     />
     <Button btnName='Send' style={{backgroundColor: '#728BAD', color: 'white', padding:'.7rem 2rem', borderRadius:'.6rem', cursor: 'pointer', outline: 'none', border: 'none'}} onClick={(e) => e.preventDefault()} />
    </form>
    <div className="textmag">
     <p>
      Write to us and we would be sure to answer all your questions and give you a comprehensive consultation.
     </p>
     <img src="images/logo.png" alt="" />
    </div>
   </div>
  </Main>
 )
}

const Main = styled.main`
 margin: 3rem 4rem;
 color: whitesmoke;
 font-family: 'Chakra Petch', sans-serif;
 font-size: 2rem;

 h3{
  text-align: right;
  text-transform: capitalize;
  word-spacing: 1rem;
  letter-spacing: .5rem;
 }

 .anyques{
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 3rem;

  form{
   flex-direction: column;
   width: 90%;
   input, textarea{
    display: block;
    margin: 1rem 0;
    width: 90%;
    font-size: 1.4rem;
    padding: 1rem 1rem;
    background-color: transparent;
    border: 3px solid #728BAD;
    border-radius: 30px;
    outline: none;
    color: white;

    &::placeholder{
     color: #ddd4d4;
     font-size: 1.2rem;
     text-align: center;
    }
   }
  }
  .textmag{
   position: relative;
   font-size: 2rem;

   p{
    text-align: right;
    line-height: 1.4;
   }

   img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
   }
  }
 }
`
export default Question