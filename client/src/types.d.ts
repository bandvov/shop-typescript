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
  children?: React.ReactChildren | React.ReactChild;
  onClick?: any;
  disabled?: boolean;
  name?: string;
  value?: string;
  type?: 'text' | 'submit' | undefined;
}
interface IUser {
  [key]?: string;
}
