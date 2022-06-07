import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { 
  Container,
  ImgWrap, 
  Img, 
  FormContainer, 
  Form, 
  Wrapper,
  FormH1,
  FormLabel,
  FormInput,
  FormButton, 
  FormWrapper, 
  OrangeTitle, 
  FormTextArea 
} from './FormSectionElements'
import ContactBgImage from "../../Assets/Images/contact-image-hq.jpg";


function FormSection() {
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showAlert, setShowAlert] = useState(false)

    const handleChange = function (event) {
      setShowAlert(false)
      const property = event.target.name
      const value = event.target.value

      setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
      event.preventDefault()
      axios({
        url: 'https://backend-laravel-franco.herokuapp.com/api/contacto',
        method: 'POST',
        data: userInput
      }).then( result => {
        setShowAlert(true)
        setUserInput({name: "", email: "", phone: "", message: ""})
      })
      .catch( error => console.log(error))
    }


  return (
    <Container id='contact'>
        <Wrapper>
                <FormH1>
                    Get in touch <br />
                    <OrangeTitle>
                        We are hiring!
                    </OrangeTitle>
                </FormH1>
            <FormContainer>
                <Form name="Form completo" onSubmit={handleSubmit} method="POST">

                   <FormWrapper>

                   <FormLabel htmlFor='for'>Name</FormLabel>
                   <FormInput 
                                     class="input-text" 
                                     type="text" required
                                     placeholder=""
                                     name="name"
                                     value={userInput.name || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput    
                                    class="input-text"  
                                    type="email" required
                                    placeholder=""
                                    name="email"
                                    value={userInput.email || ""}
                                    onChange={handleChange}
                    ></FormInput>
                                      <FormLabel htmlFor='for'>Phone</FormLabel>
                   <FormInput 
                                     class="input-text" 
                                     type="number" 
                                     placeholder=""
                                     name="phone"
                                     value={userInput.phone || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>


                   <FormLabel htmlFor='for'>Message</FormLabel>
                   <FormTextArea
                                     class="input-text"
                                     name="message" 
                                     id="" 
                                     cols="30" 
                                     rows="2"
                                     value={userInput.message || ""}
                                     onChange={handleChange}
                   
                   
                   
                   ></FormTextArea>
                   <FormButton type='submit'>Send</FormButton>
                   </FormWrapper>
                </Form>
            </FormContainer>
        </Wrapper>
        <ImgWrap>
            <Img src={ContactBgImage}/>
        </ImgWrap>
   </Container>
  )
}

export default FormSection