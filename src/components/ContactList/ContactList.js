import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

import { filterContactArr, getContacts } from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const contactName = useSelector(filterContactArr);

  const filterArr = contacts.filter(contact =>
    contact.payload.name
      .toLocaleLowerCase()
      .trim()
      .includes(contactName.toLocaleLowerCase().trim())
  );

  return (
    <ul>
      {filterArr.map(item => {
        return (
          <ContactItem
            name={item.payload.name}
            phone={item.payload.number}
            key={item.payload.id}
            id={item.payload.id}
          />
        );
      })}
    </ul>
  );
};
