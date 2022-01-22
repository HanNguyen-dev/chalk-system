import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Question } from "../../../../domain/question.model";


export default function CheckboxQuestion(props: { question: Question, onChange: any }) {

  return (
    <FormGroup>
      {props.question.options.map((option, index) => (
        <FormControlLabel key={option.id}
                          control={<Checkbox
                                      checked={props.question.answers.includes(String(index))}
                                      value={index}
                                      onChange={(event) => props.onChange(event.target.value)}/>} label={option.label} />
      ))}
    </FormGroup>
  );
}