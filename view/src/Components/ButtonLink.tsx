import { Link } from "react-router-dom";
import "./component.css"
interface ButtonProps {
    text: string,
    to: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}


function ButtonLink(props: any) {
    return (
        <Link className="button" to={props.to} onClick={props.onClick()}>
            {props.text}
        </Link>
    )
}

export default ButtonLink;