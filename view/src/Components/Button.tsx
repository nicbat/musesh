import "./component.css"
interface ButtonProps {
    text: string,
    onClick: React.MouseEventHandler<HTMLDivElement>;
}


function Button(props: any) {
    return (
        <div className="button" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

export default Button;