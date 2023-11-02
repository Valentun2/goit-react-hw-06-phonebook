import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ marginBottom: 10 }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
