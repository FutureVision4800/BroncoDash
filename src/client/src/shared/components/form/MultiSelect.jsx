import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class MultiSelectField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })),
    ]).isRequired,
  };

  static defaultProps = {
    placeholder: '',
    options: [],
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const {
      value, name, placeholder, options,
    } = this.props;

    return (
      <Select
        multi
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        className="form__form-group-select"
        closeOnSelect={false}
        removeSelected={false}
        placeholder={placeholder}
      />
    );
  }
}

const renderMultiSelectField = props => (
  <div className="form__form-group-input-wrap">
    <MultiSelectField
      {...props.input}
      options={props.options}
    />
    {props.meta.touched && props.meta.error && <span className="form__form-group-error">{props.meta.error}</span>}
  </div>
);

renderMultiSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
};

renderMultiSelectField.defaultProps = {
  meta: null,
  options: [],
};

export default renderMultiSelectField;

