import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '123-456-7890',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '456-123-7890',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '233-455-7890',
        type: 'professional'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  // eslint-disable-next-line no-unused-vars
 const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type:ADD_CONTACT, payload:contact });
  }

  //delete contact
  const deleteContact = id => {
    dispatch({ type:DELETE_CONTACT, payload:id });
  }


  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}>
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;