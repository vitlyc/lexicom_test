import styles from './CreateCase.module.css';
import { Button, Modal, ModalBody } from 'reactstrap';
import { ICreateCase } from './CreateCase.props.';
import { prependOnceListener } from 'process';

const CreateCase = ({ isOpen, modalOpenHandler }: ICreateCase) => {
  const closeCreateCase = () => {
    modalOpenHandler && modalOpenHandler();
  };
  return (
    <div className={styles.create}>
      <h1>{isOpen && 'helllo'}</h1>

      <div className='create-case-form'></div>
      <div className='case-info'>
        <input type='date' />
      </div>
      <div className='applicant-info'></div>
      <div className='date-info'></div>
      <div className='defendant-info'></div>
      <Button
        color='primary'
        className='btn btn-primary mx-2 py-1.5'
        onClick={closeCreateCase}
      >
        Отмена
      </Button>
      <Button color='primary' outline className='mx-2  py-1.5'>
        Создать
      </Button>
    </div>
  );
};

export default CreateCase;
