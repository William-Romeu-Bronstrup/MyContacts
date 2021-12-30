import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  // input.addEventListener('change', function (event) {
  // });

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Nome"
          onChange={(event) => console.log(event.target.value)}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
