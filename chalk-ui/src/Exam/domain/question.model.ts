export interface Question {
  id: string;
  label: string;
  options: Option[];
  controlType: CONTROL_TYPE;
  answers: string[];
}

export interface Option {
  id: string;
  label: string;
}

export interface QuestionOption {
  questionId: string;
  option: string;
}

export enum CONTROL_TYPE {
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  INPUT = 'INPUT',
}