import "./Input.scss"
import {forwardRef} from "react";

export const Input = forwardRef(({type, name, defaultValue, handleInputChange, handleBlur}, ref) => (
    <input id={name} className="w-100" type={type} name={name} onInput={(e) => handleInputChange(e, name)} defaultValue={defaultValue} ref={ref} onBlur={handleBlur}/>
))
