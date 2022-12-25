import PropTypes from 'prop-types';

changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
};
  

export const Filter = ({ filter, onChange }) => {
    return (
    <label>
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