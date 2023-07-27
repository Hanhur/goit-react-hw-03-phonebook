import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
    color: #0b118f;
    padding: 15px 10px;
    text-align: center;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    display: block;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Input = styled(Field)`
    margin-bottom: 10px;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    border: none;
`;

export const Btn = styled.button`
  padding: 5px 20px;
  font-weight: 700;
  font-size: 18px;
  color: rgb(44 127 146);
  border-radius: 5px;
  border: none;
  background-color: rgba(150, 248, 230, 0.8);
  box-shadow: 0px 0px 1px 3px rgba(146, 207, 235, 0.75);
  cursor: pointer;
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }
`;

export const ErrorInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(233, 238, 213);
  background-color: rgb(113, 147, 243);
  padding: 10px 20px;
  border-radius: 5px;
`;