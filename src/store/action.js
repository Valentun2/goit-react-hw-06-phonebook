import { createAction, nanoid } from "@reduxjs/toolkit";


export const addContact = createAction("contact/AddContact", ({name, number})=>{
    return{ payload:{
        id:nanoid(),
        name,
        number,
    }}
});


export const deleteContact = createAction("contact/DeleteContact", (id)=>{
    
    return{ payload:{
        id
    }}
});

export const filterContact = createAction('filter/filterContact',(name)=>{
    return {
        payload:{
            name
        }
    }
})
