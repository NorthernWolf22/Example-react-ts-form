import { type ButtonHTMLAttributes } from "react";
import { classList } from "react-classlist-helper";

type ButtonCompProps = {
    title: string;
    variant: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const ButtonComp = ({ type, title, className, variant, onClick } : ButtonCompProps) => {

    const classMap = {
        "button": true,
        [`button--${variant}`] : !!variant,
        [className ?? ""]: !!className
    }
    
    return(
        <button type={type} className={classList(classMap)} onClick={onClick}>
            <span className="button__label">{title}</span>
        </button>
    );
}

export default ButtonComp;