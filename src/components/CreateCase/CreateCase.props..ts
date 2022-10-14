import { IJudicialCaseAdd } from 'store/judicialHearing/types';

export interface ICreateCase {
  isOpen: boolean;
  closeModal: () => void;
  // addJudicialCase: (data: IJudicialCaseAdd) => {};
}
