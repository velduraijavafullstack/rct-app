interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-danger">{children}</div>;
};

export default Alert;
