import { Question } from "../../../domain/question.model";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function QuestionComponent(props: { question: Question, onChange: any }) {
  const option = props.question.options.map(option => {
    return <FormControlLabel value={option.id} control={<Radio />} label={option.label} />
  });

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        { props.question.label }
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label={props.question.id}
          value={props.question.answers[0] || ''}
          name="radio-buttons-group"
          onChange={event => props.onChange(event.target.value)}
        >
          { option }
        </RadioGroup>
      </FormControl>
    </div>
  );
}