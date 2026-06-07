import { type InputHTMLAttributes } from "react";
import { classList } from "react-classlist-helper";

type SingleInputCompProps = {
    label: string;
    labelId: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SingleInputComp = ({ label, labelId, type, id, name, value, required, placeholder, className, onChange } : SingleInputCompProps) => {

    const classMap = {
        "input": true,
        [className ?? ""]: !!className
    }

    return (
        <>
            <label htmlFor={name} id={labelId}>{required ? "* " : ""} {label}</label>
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