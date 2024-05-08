import React from "react";
import { useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import Header from "../components/Header";
import ContactList from "../components/ContactList";

const ContactPage: React.FC = () => {
  const { contactList } = useSelector((state: RootState) => state.contact);
  const navigate = useNavigate();

  return (
    <>
      <Header text="Contact Page" />
      <div className="flex flex-col justify-center items-center my-12 gap-10 p-4">
        <button
          className="rounded-lg bg-[#4e73df] p-3 text-white"
          onClick={() => navigate("/create-contact")}
        >
          Create Contact
        </button>
        {contactList?.length > 0 ? (
          <ContactList contactList={contactList} />
        ) : (
          <div className="flex font-bold text-lg gap-6 border border-black p-8">
            <div>
              <MdCancel size={"4rem"} />
            </div>
            <div>
              <p>No Contact Found</p>
              <p>Please add contact from Create Contact Button</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactPage;
