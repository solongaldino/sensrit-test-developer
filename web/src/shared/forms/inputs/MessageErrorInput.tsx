interface IProps {
  message: string;
}

export default function MessageErrorInput({ message }: IProps): JSX.Element {
  return <div className="invalid-feedback">{"* " + message}</div>;
}
