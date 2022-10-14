import { Button, Modal, Row, Col } from 'reactstrap';
import { Formik, Form } from 'formik';
import FormFieldRow from '../FormField/FormFieldRow';
import CheckBox from '../CheckBox/CheckBox';
import { ICreateCase } from './CreateCase.props.';
import logoLightSvg from 'assets/images/logo-light.svg';
import { addJudicialCase } from 'store/actions';

const CreateCase = ({ isOpen, closeModal }: ICreateCase) => {
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
          uid: '31MS0041-01-2021-000604-521',
          case_id: '2-493/2021',
          date: '25.11.1988',
          plaintiff: {
            birthday: '25.11.1988',
            lastname: 'Иванова',
            name: 'Марина',
            surname: 'Ивановна',
            phone: '+ 7 000 000 0000',
            reg_address: 'г. Белгород, ул. Радости,  5-21',
            res_address: 'г. Белгород, ул. Радости,  5-21',
            type: 0,
          },
          defendant: {
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
            type: 1,
          },
          start: 'string',
          end: 'string',
          area_id: 12,
          plaintiff_type: 1,
          defendant_type: 1,
        }}
        onSubmit={async values => {
          addJudicialCase(values);
          // closeModal();
          console.log(values.date);
          console.log(values.plaintiff.birthday);
        }}
      >
        {({ values }) => (
          <Form>
            {/* {console.log(values)} */}

            <div className='modal-body '>
              <Row className='mb-4'>
                <Col>
                  <FormFieldRow
                    label='uid'
                    value={values.uid}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='case_id'
                    value={values.case_id}
                    typeInput='case_id'
                  />
                  <br />
                  <br />
                  <CheckBox
                    label='plaintiff'
                    value={'plaintiff_type'}
                    initialValues={values}
                  />
                  <FormFieldRow
                    label='familyName'
                    value={values.plaintiff.lastname}
                    typeInput='string'
                  />

                  <FormFieldRow
                    label='name'
                    value={values.plaintiff.name}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='surname'
                    value={values.plaintiff.surname}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='birthday'
                    value={values.plaintiff.birthday}
                    typeInput='date'
                  />
                  <FormFieldRow
                    label='reg_address'
                    value={values.plaintiff.reg_address}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='res_address'
                    value={values.plaintiff.res_address}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='phone'
                    value={values.plaintiff.phone}
                    typeInput='string'
                  />
                </Col>

                <Col>
                  <FormFieldRow
                    label='date'
                    value={values.date}
                    typeInput='date'
                  />
                  <br />
                  <br />
                  <CheckBox
                    label='defendant'
                    value={'defendant_type'}
                    initialValues={values}
                  />

                  <FormFieldRow
                    label='inn'
                    value={values.defendant.inn}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='ogrn'
                    value={values.defendant.ogrn}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='company'
                    value={values.defendant.company}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='legal_address'
                    value={values.defendant.legal_address}
                    typeInput='string'
                  />
                  <CheckBox
                    label=''
                    value={'defendant_type'}
                    initialValues={values}
                  />

                  <FormFieldRow
                    label='mailing_address'
                    value={values.defendant.mailing_address}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='kpp'
                    value={values.defendant.kpp}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='pc'
                    value={values.defendant.pc}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='bic'
                    value={values.defendant.bic}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='bank'
                    value={values.defendant.bank}
                    typeInput='string'
                  />
                  <FormFieldRow
                    label='kc'
                    value={values.defendant.kc}
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
