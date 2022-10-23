import Button from "./Button";
import "./component.css";
interface HeaderBarProps {
    text: string,
    buttontext?: string,
    buttonOnClick?: React.MouseEventHandler<HTMLDivElement>;
}

function HeaderBar(props: HeaderBarProps) { // if button information is not provided, button is not rendered
    return (
        <nav className="headerbar">
            <div className="headertext">
                {props.text}
            </div>
            {props.buttontext != undefined && props.buttonOnClick != undefined && <div className="headerbutton">
                <Button onClick={props.buttonOnClick} text={props.buttontext}/>
            </div> }               
        </nav>
    )
}

export default HeaderBar;