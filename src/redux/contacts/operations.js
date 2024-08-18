import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://connections-api.goit.global/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk("contacts/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return { id };
});

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (contact) => {
    const response = await axios.patch(`${API_URL}/${contact.id}`, contact);
    return response.data;
  }
);
export const selectContactsLoading = (state) => state.contacts.loading;
// Файл /src/redux/contacts/selectors.js

export const selectContacts = (state) => state.contacts.items;

export const selectContactsError = (state) => state.contacts.error;
