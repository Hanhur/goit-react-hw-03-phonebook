import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import initialContacts from './contacts.json';

const notificationMassege = 'is already in contacts!';
const notificationOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
};

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() 
    {
        const savedContacts = localStorage.getItem('contacts');
        if (savedContacts !== null) 
        {
            const parsedContacts = JSON.parse(savedContacts);
            this.setState({ contacts: parsedContacts });
            return;
        }
        this.setState({ contacts: initialContacts });
    }

    componentDidUpdate(prevProps, prevState) 
    {
        if (this.state.contacts !== prevState.contacts) 
        {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

    addContact = newContact => {
        if (this.state.contacts.some(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase())) 
        {
            toast.error(
                `${newContact.name} ${notificationMassege}`,
                notificationOptions
            );
            return;
        }
        this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}));
    };

    deleteContact = contactId => {
        this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}));
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    render() 
    {
        const normalizeFilter = this.state.filter.toLocaleLowerCase();
        const visibleContacts = this.state.contacts
            .filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter))
            .sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));

        return (
            <Layout>
                <h1>Phonebook</h1>
                <ContactForm onSave={this.addContact} />

                <h2>Contacts</h2>
                <Filter value={this.state.filter} onSearch={this.changeFilter} />
                <ContactList items={visibleContacts} onDelete={this.deleteContact} />

                <ToastContainer />
                <GlobalStyle />
            </Layout>
        )
    }
}
