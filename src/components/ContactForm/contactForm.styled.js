import styled from "styled-components";
import { Form as FormikForm, Field as FormilField, ErrorMessage as ErrorMessageFormik } from 'formik';

export const Form = styled(FormikForm)`
width: 300px;
height: 200px;
padding: 50px;
maegin-right: 20px;
border: 1px solid black;
margin: 0 auto;
background: lime;
display: flex;
flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 0 auto;
`;

export const Field = styled(FormilField)`
width: 200px;
`

export const ErrorMessage = styled(ErrorMessageFormik)`
font-size: 14px;
color: red;
`
