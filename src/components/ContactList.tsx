import React from "react";
import { contactListInitialState } from "../store/slices/contactsSlice";
import Card from "./Card";
import { IFormState } from "./ContactForm";

const ContactList: React.FC<contactListInitialState> = ({ contactList }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {contactList?.map((contact: IFormState) => {
          return <Card key={contact?.id} contact={contact} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
