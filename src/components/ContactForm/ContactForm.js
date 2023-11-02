import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'store/action';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const arr = {
      name: evt.target.name.value,
      number: evt.target.number.value,
    };

    dispatch(addContact(arr));
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" required pattern="^[a-zA-Z]+$" />
      </label>
      <label>
        Number
        <input type="tel" name="number" required pattern="^[ 0-9]+$" />
      </label>
      <button className={styles.formButton}>add contact</button>
    </form>
  );
};
