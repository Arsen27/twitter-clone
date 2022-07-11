import { Container } from './DividerStyles';

export enum DividerTypes {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

type TDividerProps = {
  type?: DividerTypes;
}

const BaseDivider = ({ type = DividerTypes.Horizontal }: TDividerProps) => {
  return (
    <Container type={type} />
  );
};

export default BaseDivider;
