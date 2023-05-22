import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => 
    <div>
        <p>Find by name</p>
        <input type="text" value={value} onChange={onChange} />
    </div>

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}