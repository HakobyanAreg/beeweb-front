import './Form.scss';
import {useState} from "react";
import {Button} from "../Button/Button";
import {Select} from "../Select/Select";
import {Input} from "../Input/Input";

export const Form = ({save, close}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        status: ''
    })

    const handleInputChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form className="form">
            <div className="form-inputs">
                <div className="input-wrapper w-100">
                    <label htmlFor="name">
                        Name
                    </label>
                    <Input type="text" name="name" handleInputChange={handleInputChange} />
                </div>
                <div className="input-wrapper w-100">
                    <label htmlFor="description">
                        Description
                    </label>
                    <Input type="text" name="description" handleInputChange={handleInputChange} />
                </div>
                <div className="input-wrapper w-40">
                    <label htmlFor="date">
                        Date
                    </label>
                    <Input type="date" name="date" handleInputChange={handleInputChange} />
                </div>
                <div className="input-wrapper w-40">
                    <label htmlFor="status">
                        Status
                    </label>
                    <Select name="status" handleInputChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-actions">
                <Button name={'Close'} theme={'danger'} handleClick={close}/>
                <Button name={'Save'} theme={'success'} handleClick={(e) => save(e, formData)}/>
            </div>
        </form>
    )
}
