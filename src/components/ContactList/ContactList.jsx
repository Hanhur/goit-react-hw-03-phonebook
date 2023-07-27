import PropTypes from 'prop-types';
import { ContainerList, Item, Btn } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
    <ContainerList>
        {contacts.map(contact => {
            return (
                <Item key={contact.id}>
                    <p>{contact.name}</p>
                    <span>{contact.number}</span>
                    <Btn type="submit" onClick={() => deleteContact(contact.id)}>Delete</Btn>
                </Item>
            );
        })}
    </ContainerList>
);

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};