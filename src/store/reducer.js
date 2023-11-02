import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

export const contactReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      console.log(action.payload);
      state.contacts.push(action);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.contacts.findIndex(
        item => item.payload.id === action.payload.id
      );
      state.contacts.splice(index, 1);
      //  const test = state.contacts.filter(item => item.payload.id !== action.payload.id )
      //     state.contacts=[...p]
    })
    .addCase(filterContact, (state, action) => {
      state.filter = action.payload.name;
    });
});
