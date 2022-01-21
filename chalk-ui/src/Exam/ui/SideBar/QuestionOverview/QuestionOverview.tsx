import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectCurrentIndex, selectQuestions } from '../../../features/exam-selector';
import DoneIcon from '@mui/icons-material/Done';
import { setCurrentQuestion } from '../../../features/exam-slice';

export default function QuestionOverview() {
  const questions = useAppSelector(selectQuestions);
  const currIndex = useAppSelector(selectCurrentIndex);
  const dispatch = useAppDispatch()

  return (
    <List>
      {questions.map((question, index) => (
        <ListItem button
                  selected={currIndex == index}
                  key={question.label}
                  onClick={() => dispatch(setCurrentQuestion(index))}>
          <ListItemIcon>
            {!!question.answers.length && <DoneIcon />}
          </ListItemIcon>
          <ListItemText primary={'Question ' + question.id} />
        </ListItem>
      ))}
    </List>
  );
}