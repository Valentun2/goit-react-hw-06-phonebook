
export const getContacts = state => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts.contacts))
    return state.contacts.contacts;}

export const filterContactArr = state => {  return state.contacts.filter};
