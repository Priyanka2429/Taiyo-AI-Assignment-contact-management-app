import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact, updateContact } from "../store/slices/contactsSlice";
import { RootState } from "../store";
import Header from "./Header";

export interface IFormState {
  id: string;
  firstName: string | undefined;
  lastName: string | undefined;
  status: string | undefined;
}

export interface IFormError {
  errorText: string;
}

const CreateContactForm: React.FC = () => {
  const { id } = useParams();
  const { contactList } = useSelector((state: RootState) => state.contact);
  const [form, setForm] = useState<IFormState>({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    status: "active",
  });
  const [error, setError] = useState<IFormError>({
    errorText: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundContact = contactList.find((contact) => contact.id === id);
      if (!foundContact) {
        setError({
          errorText: `No user found with id ${id}`,
        });
      }
      setForm(foundContact);
    }
  }, [id, contactList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => {
      return { errorText: "" };
    });
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !form?.firstName?.trim().length ||
      !form?.lastName?.trim().length ||
      !form?.status?.trim().length
    ) {
      setError((prev) => {
        return { ...prev, errorText: "All text fields are required" };
      });
      return;
    }
    if (id) {
      dispatch(updateContact(form));
    } else {
      dispatch(addContact(form));
    }
    navigate("/");
  };

  return (
    <>
      <Header text="Contact Page" />
      <h1 className="flex flex-col justify-center items-center mt-6 text-4xl p-4">
        {id ? "Edit Contact Screen" : "Create Contact Screen"}
      </h1>
      <form
        className="flex flex-col justify-center items-center mt-10 gap-8"
        onSubmit={submitHandler}
      >
        <label
          htmlFor="firstName"
          className="flex justify-center items-center gap-3 mb-2 text-sm font-medium text-gray-900"
        >
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={form?.firstName}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
        <label
          htmlFor="lastName"
          className="flex justify-center items-center gap-3 mb-2 text-sm font-medium text-gray-900"
        >
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={form?.lastName}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
        <label
          htmlFor="status"
          className="flex justify-center items-center gap-3 mb-2 text-sm font-medium text-gray-900"
        >
          Status:
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="radio"
                value="active"
                name="status"
                checked={form?.status === "active" ? true : false}
                onChange={handleInputChange}
              />{" "}
              Active
            </div>
            <div>
              <input
                type="radio"
                value="inactive"
                name="status"
                checked={form?.status === "inactive" ? true : false}
                onChange={handleInputChange}
              />{" "}
              Inactive
            </div>
          </div>
        </label>
        {error?.errorText?.length > 0 && (
          <div className="text-red-600">{error?.errorText}</div>
        )}
        <button
          type="submit"
          className="border rounded-lg px-6 py-3 bg-blue-700 hover:bg-blue-400 dar:hover:text-white text-white"
        >
          {id ? "Edit Contact" : "Save Contact"}
        </button>
      </form>
    </>
  );
};

export default CreateContactForm;
