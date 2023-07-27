import React from 'react';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import FormError from '../FormError/FormError';
import {
    FormContainer,
    Label,
    Btn,
    Input,
} from './ContactForm.styled';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().min(8).required(),
});

const initialValues = {
    id: '',
    name: '',
    number: '',
};

export const ContactForm = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: 'id-' + nanoid(),
            name: values.name,
            number: values.number,
        };
        onSubmit(newContact);
        resetForm();
    };

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={schema}
        >
            <FormContainer autoComplete="off">
                <Label htmlFor="name">Name </Label>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <FormError name="name" />
                <Label htmlFor="number">Number</Label>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <FormError name="number" />
                <Btn type="submit">Add contact</Btn>
            </FormContainer>
        </Formik>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};