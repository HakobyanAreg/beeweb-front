import "./Select.scss"
import {forwardRef} from "react";

const options = ['active', 'pending', 'canceled']

export const Select = forwardRef(({name, defaultValue, handleInputChange, handleBlur}, ref) => {
  return (
      <div className="select-wrapper w-100">
          <select id={name} name={name} className="w-100" onChange={handleInputChange} ref={ref} onBlur={handleBlur} defaultValue={defaultValue || 'default'}>
              <option value="default" disabled>Select status</option>
              {options.map((option, index) => (
                  <option key={`${option}_${index}`} value={option}>{option}</option>
              ))}
          </select>
      </div>
  )
})
