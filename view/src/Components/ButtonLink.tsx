import { Link } from "react-router-dom";
import "./component.css"
interface ButtonProps {
    text: string,
    to: string;
}


function ButtonLink(props: any) {
    return (
        <Link className="button" to={props.to}>
            {props.text}
        </Link>
    )
}

export default ButtonLink;