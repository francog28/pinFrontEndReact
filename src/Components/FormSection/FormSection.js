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


const FormSection = () => {
    const [inputs, setInputs] = useState({});
   // const [textArea, setTextarea] = useState("");
    console.log(inputs)
   // console.log(textArea)
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    // const handleTextArea = (event) => {
     
    //   const name = event.target.name
    //   const value = event.target.value
    //   setTextarea (value);
    // }
  

    const saveFormData = async () => {
      const response = await fetch('https://backend-laravel-franco.herokuapp.com', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
        //, textArea
      });
      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`); 
      }
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await saveFormData ()
        alert("Su mensaje fue enviado. Nos comunicaremos con usted a la brevedad.");
        setInputs("")
        //setTextarea("")
      }
  
        catch (event) {
          alert(`Request failed: ${event.message}`);
        }
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
                                     value={inputs.name || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput    
                                    class="input-text"  
                                    type="email" required
                                    placeholder=""
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                    ></FormInput>
                                      <FormLabel htmlFor='for'>Phone</FormLabel>
                   <FormInput 
                                     class="input-text" 
                                     type="number" 
                                     placeholder=""
                                     name="phone"
                                     value={inputs.phone || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>


                   <FormLabel htmlFor='for'>Message</FormLabel>
                   <FormTextArea
                                     class="input-text"
                                     name="message" 
                                     id="" 
                                     cols="30" 
                                     rows="2"
                                     value={inputs.message || ""}
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