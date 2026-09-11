export interface AnswerType {
  title: string;
  desc: string;
}

export interface QuestionType {
  key: string;
  title: string;
  answers: AnswerType[];
}

export interface SummaryType {
  preferences: string | null;
  beanType: string | null;
  quantity: string | null;
  grind: string | null;
  deliveries: string | null;
}
