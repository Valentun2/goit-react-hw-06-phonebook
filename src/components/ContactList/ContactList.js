import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

import { filterContactArr, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts) ;

  const contactName = useSelector(filterContactArr) ;

  const filterArr = contacts.arrContact.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .trim()
      .includes(contactName.toLocaleLowerCase().trim())
  );

  return (
    <ul>
      {filterArr.map(item => {
        return (
          <ContactItem
            name={item.name}
            phone={item.number}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};
