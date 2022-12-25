import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import clsx from 'clsx'
import css from './ContactList.module.css';


export const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={clsx}>
      {contacts.map(contact => {
        return (
          <div  key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onClick: PropTypes.func.isRequired
}