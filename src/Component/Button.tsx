interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color }: Props) => {
  return (
    <div>
      <button
        className={"btn btn" + color}
        onClick={() => console.log("Taped")}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
