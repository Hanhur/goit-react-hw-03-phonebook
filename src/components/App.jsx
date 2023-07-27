import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title } from './App.styled';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleFormSubmit = newContact => {

        const сontactValue = newContact.name.toLowerCase();
        const duplicateСontact = this.state.contacts.find(
            contact => contact.name.toLowerCase() === сontactValue
        );

        duplicateСontact
            ? alert(`${newContact.name} is already in contacts.`)
            : this.setState(({ contacts }) => ({
                contacts: [newContact, ...contacts],
            }));
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }));
    };

    onChange = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    findContact = () => {
        const { filter, contacts } = this.state;
        const filterValue = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterValue)
        );
    };

    render() 
    {
        const contactsList = this.findContact();
        return (
            <Container>
                <Title>Phonebook</Title>
                <ContactForm onSubmit={this.handleFormSubmit} />

                <Title>Contacts</Title>
                <Filter onChange={this.onChange} value={this.state.filter} />

                <ContactList
                    contacts={contactsList}
                    deleteContact={this.deleteContact}
                    onChange={this.onChange}
                />
            </Container>
        );
    }
}