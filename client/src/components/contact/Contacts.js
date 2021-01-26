import React, {Fragment, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';
// import {CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from "../layout/Spinner";
import AlertContext from '../../context/alert/alertContext';


import ContactItem from './ContactItem';


const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const alertContext = useContext(AlertContext);

    const {setAlert } = alertContext;
    const { contacts, filtered, getContacts, loading, error, clearErrorsContact } = contactContext;
  
    useEffect(() => {
      getContacts();
      // eslint-disable-next-line
    }, []);

    useEffect( () => {
        if(error){
            setAlert(error, 'danger');
        }
        clearErrorsContact();
    }, [error])
  
    if (contacts !== null && contacts.length === 0 && !loading) {
      return <h4>Please add a contact</h4>;
    }
  
    return (
        <Fragment>
            { contacts !== null && !loading ?  (                               
                filtered !== null ?
                    filtered.map( contact => <ContactItem key={contact.id} contact = {contact} />) 
                        : 
                    contacts.map( contact => <ContactItem id = {contact.id} contact = {contact}/>)  
                )
                : <Spinner/> 

            }
        </Fragment>
    )
}

export default Contacts
