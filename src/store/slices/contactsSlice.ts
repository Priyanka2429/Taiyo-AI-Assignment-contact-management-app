import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormState } from '../../components/ContactForm'

export interface contactListInitialState {
  contactList: Array<any>;
}

const initialState: contactListInitialState = {
  contactList: []
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IFormState>) => {
      state.contactList = [...state.contactList, action.payload]
    },
    updateContact: (state, action: PayloadAction<IFormState>) => {
      state.contactList = state.contactList.map(contact => contact.id === action.payload.id ? action.payload : contact)
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contactList = state.contactList.filter(contact => contact.id !== action.payload)
    }
  }
})

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer