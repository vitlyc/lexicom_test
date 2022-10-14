import { Row, Input, Col } from 'reactstrap';
import { ICheckBoxTypes } from './CheckBoxTypes';
import { VALUE_FIELDS_FOR_FORM } from '../../constants/app_сonstants';
import styles from './CheckBox.module.css';

const CheckBox = ({ label = '', value, initialValues }: ICheckBoxTypes) => {
  return (
    <Row className={styles.paddingBottom}>
      <Col xs={6}>
        <h6>
          {label ? (
            <strong>{VALUE_FIELDS_FOR_FORM[label]}</strong>
          ) : (
            <strong></strong>
          )}
        </h6>
      </Col>
      <Col xs={1}>
        <Input
          type='checkbox'
          onChange={e => {
            const number = Number(e.target.checked);

            initialValues[value] = number;
          }}
        />
      </Col>
      <Col>
        <label>
          {!label
            ? `Почтовый адрес совпадает с юридическим`
            : `Юридическое лицо`}
        </label>
      </Col>
    </Row>
  );
};

export default CheckBox;
