import InputMask, { Props as InputMaskProps } from 'react-input-mask';

import { Input as InputStyled, Label } from './style';

type Props = {
  label: string;
  mask?: InputMaskProps['mask'];
} & Omit<InputMaskProps, 'mask'>;

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Label htmlFor={props.id}>
      {label}
      {props.mask ? (
        <InputStyled as={InputMask} {...props} mask={props.mask} />
      ) : (
        <InputStyled {...props} />
      )}
    </Label>
  );
};

export default Input;
