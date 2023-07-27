import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorInfo } from '../ContactForm/ContactForm.styled';

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorInfo>{message}</ErrorInfo>}
        />
    );
};

export default FormError;