import { RootState } from "../../app/store";

export const selectCurrentIndex = (state: RootState) => state.exam.currQuestionIdx;

export const selectCurrentQuestion = (state: RootState) => state.exam.exam[state.exam.questionsOrder[state.exam.currQuestionIdx]];

export const selectIsLastQuestion = (state: RootState) => state.exam.questionsOrder.length - 1 === state.exam.currQuestionIdx;

export const selectIsFirstQuestion = (state: RootState) => state.exam.currQuestionIdx === 0;

export const selectQuestions = (state: RootState) => state.exam.questionsOrder.map(questionId => state.exam.exam[questionId]);
