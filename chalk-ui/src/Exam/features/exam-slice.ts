import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONTROL_TYPE, Question, QuestionOption } from '../domain/question.model';
import * as ExamData from '../resources/exam.json';

interface ExamState {
  currQuestionIdx: number,
  questionsOrder: string[],
  exam: { [key:string]: Question };
}

const initialState: ExamState = {
  currQuestionIdx: 0,
  questionsOrder: [ '1', '2', '3', '4' ],
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
      answerQuestion(state, action: PayloadAction<QuestionOption>) {
      const question = state.exam[action.payload.questionId];
      switch (question.controlType) {
        case CONTROL_TYPE.INPUT:
          question.options[0].label = action.payload.option;
          question.answers = action.payload.option ? ['0'] : [];
          break;
        case CONTROL_TYPE.CHECKBOX:
          const index = question.answers.indexOf(action.payload.option);
          index > -1 ?
            question.answers.splice(index, 1) :
            question.answers.push(action.payload.option);
          break;
        default:
          question.answers = [action.payload.option];
      }
    },
    setCurrentQuestion(state, action: PayloadAction<number>) {
      state.currQuestionIdx = action.payload;
    }
  }

});

export const { reset, nextQuestion, answerQuestion, previousQuestion, setCurrentQuestion } = examSlice.actions;
export default examSlice.reducer;