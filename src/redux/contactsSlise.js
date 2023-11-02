import { createSlice, nanoid} from "@reduxjs/toolkit";

const contactsInitialState ={ arrContact:[]};


const contactsSlise = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContact : {
        reducer(state, action) {
         
          state.arrContact.push(action.payload);
        },
        prepare(text) {
          return {
            payload: {
             name:text.name,
             number:text.number,
              id: nanoid(),
            },
          };
        },
      },
    deleteContact(state, action) {
        const index = state.arrContact.findIndex(task => task.id === action.payload);
        state.arrContact.splice(index, 1);
      },
    },
  });
  
  export const { addContact,deleteContact } = contactsSlise.actions;
  export const contactsReducer = contactsSlise.reducer;