import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Question } from "../../../../domain/question.model";


export default function CheckboxQuestion(props: { question: Question, onChange: any }) {

  return (
    <FormGroup>
      {props.question.options.map(option => (
        <FormControlLabel key={option.id}
                          control={<Checkbox
                                      checked={props.question.answers.includes(option.id)}
                                      name={option.id}
                                      onChange={(event) => props.onChange(event.target.name)}/>} label={option.label} />
      ))}
    </FormGroup>
  );
}