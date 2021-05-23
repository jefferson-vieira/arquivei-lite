import React, { useReducer, useRef } from 'react';
import Cards, { Focused } from 'react-credit-cards';

import Button from '../components/button';
import Header from '../components/header';
import Input from '../components/input';
import Layout from '../components/layout';

type State = {
  cnpj: string;
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focus: Focused;
};

type Action = {
  type: keyof State;
  payload: string;
};

function reducer(state: State, action: Action) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

const Checkout: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    cnpj: '',
    cvc: '',
    expiry: '',
    name: '',
    number: '',
    focus: 'number',
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: e.target.name as keyof State,
      payload: e.target.value,
    });
  };

  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: 'focus',
      payload: e.target.name,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = e.target as typeof e.target & HTMLFormElement;

    const data = Object.fromEntries(new FormData(form).entries());

    console.log(data);

    form.reset();
  };

  return (
    <Layout>
      <Header>Checkout</Header>
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <form onSubmit={handleSubmit}>
        <Input
          type="tel"
          name="cnpj"
          label="CNPJ"
          mask="99.999.999/9999-99"
          maskPlaceholder={null}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
        />
        <Input
          type="tel"
          name="number"
          label="Número do cartão"
          mask="9999 9999 9999 9999"
          maskPlaceholder={null}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
        />
        <Input
          type="text"
          name="name"
          label="Nome impresso no cartão"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          pattern="\p{L}+\s{1}\p{L}+[\p{L}\s]*"
        />
        <Input
          type="tel"
          name="expiry"
          label="Vencimento"
          mask="99/99"
          maskPlaceholder={null}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          pattern="\d\d/\d\d"
        />
        <Input
          type="tel"
          name="cvc"
          label="CVV"
          mask="9999"
          maskPlaceholder={null}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
          pattern="\d{3,4}"
        />
        <Button appearance="primary" type="submit">
          Pagar
        </Button>
      </form>
    </Layout>
  );
};

export default Checkout;
