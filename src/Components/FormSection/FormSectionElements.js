import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
display:flex;
align-items:center;
height:100vh;
padding-top: 100px;
background: linear-gradient(90deg, #f2f4f1 75%, #dce1da 25%);
justify-content: space-evenly;

@media screen and (max-width:780px){
    justify-content:center;
}
`;

export const Wrapper = styled.div`
position:relative;
margin-left: 5rem;
margin-right: 5rem;
`


export const ImgWrap = styled.div`



@media screen and (max-width:950px){
display:none;
}

`;

export const Img = styled.img`

width: 40vw;
align-self: flex-end;

`;

export const FormContainer = styled.div`
min-width:600px;
min-height:400px;
background-color:transparent;
margin-bottom:37px;


@media screen and (max-width:780px){
    min-width:350px;
    min-height:600px;

}

`
export const FormWrapper = styled.div`

margin-top:0px;
display: grid;
background:transparent;
box-sizing:border-box;


`

export const Form = styled.form`
background:transparent;
max-width: 600px;
max-height:400px;
width: 100%;
display: grid;
padding: 10px 5px;
border-radius: 4px;

@media screen and (max-width:780px){
    min-width:350px;
    min-height:600px;

}

@media screen and (max-width:400px){
    padding: 32px 32px;
}
`



export const FormH1 = styled.h1`
font-family: "Poppins";
font-weight: 600;
`

export const OrangeTitle = styled.span`
display: block;
color:#E0752F;
`

export const FormLabel = styled.label`
margin-bottom:3px;
font-size:0.8rem;
font-weight:500;
color: #5F6368;
`

export const FormInput = styled.input`
padding: 5px 5px;
margin-bottom: 15px;
border:none;
border-radius: 4px;
background:transparent;
border-bottom: solid 2px #DCE1DA;
outline:none;
`

export const FormButton = styled.button`
background:#E0752F;
margin-top:20px;
margin-bottom:10px;
padding:16px 0;
border: none;
border-radius: 25px;
font-size:0.8rem;
color: #FFFFFF;
cursor:pointer;
width: 7.2rem;
`

export const FormTextArea = styled.textarea`

border:none;
outline:none;
border-bottom: solid 2px #DCE1DA;
border-radius: 4px;
background:transparent;

`