import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectCurrentQuestion, selectIsFirstQuestion, selectIsLastQuestion } from '../../../features/exam-selector';
import { answerQuestion, nextQuestion, previousQuestion } from '../../../features/exam-slice';
import Question from '../../shared/Question/Question';

export default function QuestionContainer() {
  const question = useAppSelector(selectCurrentQuestion);
  const isLast = useAppSelector(selectIsLastQuestion);
  const isFirst = useAppSelector(selectIsFirstQuestion);

  const dispatch = useAppDispatch();

  const nextHandler = () =>  dispatch(nextQuestion());

  const previousHandler = () => dispatch(previousQuestion());

  const previousButton = !isFirst && <Button size="large" onClick={previousHandler}>Previous</Button>;

  const proceedButton = isLast ? <Button size="large">Submit</Button> :
                                 <Button size="large" onClick={nextHandler}>Next</Button>;

  const answerHandler = (answer: string) => {
    dispatch(answerQuestion({ questionId: question.id, option: answer }));
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Question question={question} onChange={answerHandler}/>
      </CardContent>
      <CardActions>
        {previousButton}
        {proceedButton}
      </CardActions>
    </Card>
  );
}