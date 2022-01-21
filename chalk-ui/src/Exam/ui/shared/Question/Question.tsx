import { CONTROL_TYPE, Question } from "../../../domain/question.model";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CheckboxQuestion from './CheckboxQuestion/CheckboxQuestion';
import TextField from "@mui/material/TextField";
import './Question.css';


export default function QuestionComponent(props: { question: Question, onChange: any }) {

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value);

  function renderQuestion() {
    let result;
    switch (props.question.controlType) {
      case CONTROL_TYPE.RADIO:
        result = (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={props.question.id}
            value={props.question.answers[0] || ''}
            name="radio-buttons-group"
            onChange={handler}
          >
            { props.question.options.map(option =>
                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.label} />) }
          </RadioGroup>
        </FormControl>);
        break;
      case CONTROL_TYPE.CHECKBOX:
        result = (
        <CheckboxQuestion
          question={props.question}
          onChange={(answer: string) => props.onChange(answer)}
        />);
        break;
      case CONTROL_TYPE.INPUT:
        result = (
          <div className={'input-box'}>
            <TextField id="outlined-basic"
                       label="Answer"
                       value={props.question.options[0].label}
                       variant="outlined" onChange={handler}/>
          </div>
        );
        break;
      default:

    }
    return result;
  }

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        { props.question.label }
      </Typography>
      {renderQuestion()}
    </div>
  );
}