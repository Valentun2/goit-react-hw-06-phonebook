import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/action';
export const ContactItem = props => {

  const dispatch = useDispatch();
  
  const onClick = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  return (
    <li className={styles.item}>
      <p>
        {props.name}:{props.phone}
      </p>
      <button id={props.id} name={props.name} type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
