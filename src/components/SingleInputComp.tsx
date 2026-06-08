import { type InputHTMLAttributes } from "react";
import { classList } from "react-classlist-helper";

type SingleInputCompProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SingleInputComp = ({ label, type, id, name, value, required, placeholder, className, onChange } : SingleInputCompProps) => {

    const classMap = {
        "input": true,
        [className ?? ""]: !!className
    }

    return (
        <>
            <label htmlFor={id}>{required ? "* " : ""} {label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                className={classList(classMap)}
                onChange={onChange}
            ></input>
        </>
    );
}

export default SingleInputComp;