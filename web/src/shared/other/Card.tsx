import { Card as CardStrap, CardText, CardTitle } from "reactstrap";

interface IParams {
  title: string;
  value: string | number;
  colorClass: string;
  icon?: JSX.Element;
}

export default function Card({ title, value, colorClass, icon }: IParams) {
  const classValue = `${colorClass} bg-gradient text-white border-0`;
  return (
    <CardStrap className={classValue} body>
      <CardTitle className="m-0 h6">{title}</CardTitle>
      <CardText className="m-0">
        <h2> {icon && (icon)} {value}</h2>
      </CardText>
    </CardStrap>
  );
}
