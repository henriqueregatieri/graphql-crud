import { IChangeElement } from '../../hooks/useForm';
import { Form } from '../styled/Form';
import { Button, InputButton } from '../styled/Button';
import { Field } from '../../types/Field';

export interface FormProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<IChangeElement>;
  formState: any;
  goToList: React.MouseEventHandler<HTMLButtonElement>;
  fields: Field[];
}

export const FormContent = ({
  handleSubmit,
  handleChange,
  formState,
  goToList,
  fields,
}: FormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field: Field, key: number) => {
        return (
          <div className="row" key={key}>
            <label>{field.name}:</label>
            <input
              className="text"
              name={field.slug}
              value={formState[field.slug]}
              onChange={handleChange}
            ></input>
          </div>
        );
      })}
      <div className="mt-20">
        <InputButton type="submit"></InputButton>
        <Button onClick={goToList}>Cancel</Button>
      </div>
    </Form>
  );
};
