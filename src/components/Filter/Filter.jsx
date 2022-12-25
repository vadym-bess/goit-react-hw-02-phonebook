import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx'
  

export const Filter = ({ filter, onChange }) => {
    return (<label>
                  Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={onChange} />
            </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};