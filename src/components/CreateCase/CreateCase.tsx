import styles from './CreateCase.module.css';
import {
  Button,
  Modal,
  ModalBody,
  Label,
  Row,
  Col,
  Input,
  CustomInput,
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { FormField } from 'components';
import FormFieldRow from '../FormField/FormFieldRow';
import CheckBox from '../CheckBox/CheckBox';

import { ICreateCase } from './CreateCase.props.';
import { prependOnceListener } from 'process';
import logoLightSvg from 'assets/images/logo-light.svg';

const enum INITIAL_STATES {
  uid = '31MS0041-01-2021-000604-52',
  case_id = '2-493/2021',
  plaintiff = 'Истец',
  defendant = 'Ответчик',
  date = '25.11.2021',
  lastname = 'Иванова',
  name = 'Марина',
  surname = 'Ивановна',
  familyName = '',
  reg_address = 'г. Белгород, ул. Радости,  5-21',
  res_address = 'г. Белгород, ул. Радости,  5-21',
  type = 0,
  phone = '+ 7 000 000 0000',
  birthday = '25.11.1988',
  bank = 'БЕЛГОРОДСКОЕ ОТДЕЛЕНИЕ N8592...',
  company = 'Название компании',
  inn = '123456789123',
  ogrn = '123400',
  legal_address = 'г. Белгород, ул. Радости,  5-21',
  mailing_address = 'г. Белгород, ул. Радости,  5-21',
  kpp = '000000000',
  pc = '10318810007009063768',
  bic = '0890009083',
  kc = '10318810007009063768',
}

const CreateCase = ({ isOpen, closeModal }: ICreateCase) => {
  const closeCreateCase = () => {};

  return (
    <Modal centered isOpen={isOpen} toggle={closeModal}>
      <div onClick={closeModal} className='modal-closebtn'>
        <i className='fas fa-times' />
      </div>
      <div className='bg-primary bg-soft modal-header__narrow'>
        <div className='text-primary'>
          <h5 className='text-primary h3'>Создать дело</h5>
        </div>
        <div className='modal-logo-header'>
          <span className='logo-lg'>
            <img src={logoLightSvg} alt='' height='50' />
          </span>
        </div>
      </div>
      <Formik
        initialValues={{
          uid: '31MS0041-01-2021-000604-52',
          case_id: '2-493/2021',
          plaintiff: 'Истец',
          defendant: 'Ответчик',
          date: '25.11.2021',
          name: 'Марина',
          surname: 'Ивановна',
          familyName: 'Иванова',
          reg_address: 'г. Белгород, ул. Радости,  5-21',
          res_address: 'г. Белгород, ул. Радости,  5-21',
          phone: '+ 7 000 000 0000',
          birthday: '25.11.1988',
          bank: 'БЕЛГОРОДСКОЕ ОТДЕЛЕНИЕ N8592...',
          company: 'Название компании',
          inn: '123456789123',
          ogrn: '123400',
          legal_address: 'г. Белгород, ул. Радости,  5-21',
          mailing_address: 'г. Белгород, ул. Радости,  5-21',
          kpp: '000000000',
          pc: '10318810007009063768',
          bic: '0890009083',
          kc: '10318810007009063768',
        }}
        onSubmit={values => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <div className='modal-body '>
              <Row className='mb-4'>
                <Col>
                  {console.log(values)}

                  {/* <Input
                    type='checkbox'
                    className='me-2'
                    id='transcribation-diarization'

                    // onChange={onChangeStatusDiarization}
                  />
                  <Label htmlFor='diarization-time' className='mb-0' size='md'>
                    Почтовый адрес совпадает с юридическим
                  </Label> */}

                  <FormFieldRow
                    label='uid'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='case_id'
                    value={values.uid}
                    typeInput='case_id'
                  />
                  <br />
                  <br />
                  <CheckBox label='plaintiff' value={1} />
                  <FormFieldRow
                    label='familyName'
                    value={values.uid}
                    typeInput='string'
                  />

                  <FormFieldRow
                    label='name'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='surname'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='birthday'
                    value={values.uid}
                    typeInput='date'
                  />
                  <FormFieldRow
                    label='reg_address'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='res_address'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='phone'
                    value={values.uid}
                    typeInput='string'
                  />
                </Col>
                <Col>
                  <FormFieldRow
                    label='date'
                    value={values.uid}
                    typeInput='date'
                  />
                  <br />
                  <br />
                  <CheckBox label='defendant' value={1} />

                  <FormFieldRow
                    label='inn'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='ogrn'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='company'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='legal_address'
                    value={values.uid}
                    typeInput='string'
                  />
                  <CheckBox label='' value={1} />

                  <FormFieldRow
                    label='mailing_address'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='kpp'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='pc'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='bic'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='bank'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='kc'
                    value={values.uid}
                    typeInput='string'
                  />
                </Col>
              </Row>
              <div className='mt-5 modal-buttons-container'>
                <Button
                  type='button'
                  onClick={closeModal}
                  color='secondary'
                  data-dismiss='modal'
                >
                  Отмена
                </Button>
                <Button type='submit' color='primary'>
                  Создать
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateCase;
