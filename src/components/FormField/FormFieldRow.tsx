import { Col, Row } from 'reactstrap';
import { Field } from 'formik';
import { IFieldFormProps } from './FormFieldTypes';
import { VALUE_FIELDS_FOR_FORM } from 'constants/app_сonstants';
import styles from './FromFieldRaw.module.css';

const FieldFormRow = ({
  label,
  value,
  typeInput = 'text',
}: IFieldFormProps) => {
  return (
    <Row xs='2' className={styles.paddingBottom}>
      <h6>
        <strong>{VALUE_FIELDS_FOR_FORM[label]}</strong>
      </h6>
      {typeInput === 'text' ? (
        value
      ) : (
        <Field name={label}>
          {({ field }) => (
            <div>
              <input
                className='form-control'
                id='example-date-input'
                type={typeInput}
                {...field}
                value={value}
              />
              {/* {console.log(field)} */}
            </div>
          )}
        </Field>
      )}
    </Row>
  );
};

export default FieldFormRow;
