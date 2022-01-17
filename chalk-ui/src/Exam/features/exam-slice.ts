import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../domain/question.model';
import * as ExamData from '../resources/exam.json';

interface ExamState {
  currentQuestion: string,
  exam: { [key:string]: Question };
}

const initialState: ExamState = {
  currentQuestion: '1',
  exam: ExamData as { [key:string]: Question }
}

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    reset(state) {
      state = initialState
    },
  }

});

export const { reset } = examSlice.actions;
export default examSlice.reducer;