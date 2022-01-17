import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONTROL_TYPE, Question } from '../domain/question.model';
import * as ExamData from '../resources/exam.json';

interface ExamState {
  currQuestionIdx: number,
  questionsOrder: string[],
  exam: { [key:string]: Question };
}

const initialState: ExamState = {
  currQuestionIdx: 0,
  questionsOrder: [ '1', '2' ],
  exam: ExamData as { [key:string]: Question }
}

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    reset(state) {
      state = initialState
    },
    previousQuestion(state) {
      state.currQuestionIdx--;
    },
    nextQuestion(state) {
      state.currQuestionIdx++;
    },
    answerQuestion(state, action: PayloadAction<{ questionId: string, option: string }>) {
      const question = state.exam[action.payload.questionId];
      switch (question.controlType) {
        case CONTROL_TYPE.RADIO:
          question.answers = [action.payload.option];
      }
    },
  }

});

export const { reset, nextQuestion, answerQuestion, previousQuestion } = examSlice.actions;
export default examSlice.reducer;