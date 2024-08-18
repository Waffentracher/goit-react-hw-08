// Файл /src/redux/contacts/selectors.js

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading; // Додаємо цю функцію
export const selectContactsError = (state) => state.contacts.error;
