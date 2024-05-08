import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IFormState } from "./ContactForm";
import contactImg from "../assets/images/contact.jpg";
import { deleteContact } from "../store/slices/contactsSlice";

interface CardProps {
  key: string;
  contact: IFormState;
}

const Card: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="h-1/2" src={contactImg} alt="Sample Contact" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {props?.contact?.firstName} {props?.contact?.lastName}
          </div>
          <p className="text-gray-700 text-base">
            Status: {props?.contact?.status}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-col gap-3 justify-center items-center">
          <button
            className="bg-cyan-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(`/edit-contact/${props?.contact?.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(deleteContact(props?.contact?.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
