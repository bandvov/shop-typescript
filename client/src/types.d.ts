interface IProps {
  background?: string;
  width?: string;
  minHeight?: string;
  display?: string;
  justify?: string;
  align?: string;
  borderRadius?: string;
  padding?: string;
  border?: string;
  outline?: string;
  height?: string;
  error?: boolean;
  direction?: string;
  helperText?: string;
  showHelperText?: boolean;
  placeholder?: string;
  fontSize?: string;
  margin?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactChild[] | React.ReactChild;
  onClick?: any;
  disabled?: boolean;
  name?: string;
  value?: string;
  type?: 'text' | 'submit' | 'checkbox' | undefined;
  checked?: boolean;
  position?: string;
  top?: string | number;
  left?: string | number;
  color?: string;
  active?: boolean;
  wrap?: string;
}
interface IUser {
  [key]?: string;
}
