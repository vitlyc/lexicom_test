import { Col, Row, Input } from 'reactstrap';
import { Field } from 'formik';
import { ICheckBoxTypes } from './CheckBoxTypes';
import { VALUE_FIELDS_FOR_FORM } from '../../constants/app_сonstants';
import styles from './CheckBox.module.css';

const CheckBox = ({
  label = '',
  value,
  typeInput = 'text',
}: ICheckBoxTypes) => {
  const chooseChecked = value => {
    return (value = parseInt(value));
  };
  return (
    <Row xs='auto auto auto'>
      <h6>
        {label ? (
          <strong>{VALUE_FIELDS_FOR_FORM[label]}</strong>
        ) : (
          <strong></strong>
        )}
      </h6>

      <Input
        bsSize='sm'
        type='checkbox'
        // checked={false}
        name={`access`}
        id={`access`}
        onChange={f => f}
        value={1}
      />
      <label>
        {!label ? `Почтовый адрес совпадает с юридическим` : `Юридическое лицо`}
      </label>
    </Row>
  );
};

export default CheckBox;
