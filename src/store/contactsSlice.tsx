import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Contact {
  id: string;
  name: string;
  username: string;
  phone: string;
}

const initialState: Contact[] = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.push(action.payload);
      },
      prepare: (contact: Omit<Contact, 'id'>) => ({
        payload: { ...contact, id: uuidv4() },
      }),
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
