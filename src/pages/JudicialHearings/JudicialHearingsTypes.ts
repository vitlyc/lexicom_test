import { RouteComponentProps } from 'react-router-dom';

export interface IJudicialHearingsProps extends RouteComponentProps {
  caseNumber: string;
  getListHearings: () => {};
}
