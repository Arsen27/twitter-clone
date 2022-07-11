import { Container } from './DividerStyles';

export enum DividerTypes {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

type TDividerProps = {
  type?: DividerTypes;
  show?: boolean;
  margin?: string;
}

const BaseDivider = ({ type = DividerTypes.Horizontal, margin, show = true }: TDividerProps) => {
  return (
    <Container
      type={type}
      show={show}
      margin={margin}
    />
  );
};

export default BaseDivider;
