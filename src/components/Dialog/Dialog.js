import './Dialog.scss'
import {Form} from "../Form/Form";
import {Button} from "../Button/Button";
import {createPortal} from "react-dom";

export const Dialog = ({save, close, error}) => {
    return createPortal(
        <div className="dialog-wrapper">
            <div className="dialog">
                <div className="dialog-header">
                    <div className="title-wrapper">
                        {error ?
                            <span style={{color: '#dc3545'}}>
                                Please enter a valid data
                            </span>
                            :
                            <span>
                                Please add some data
                            </span>
                        }
                    </div>
                    <div className="close-wrapper">
                        <Button name={'X'} theme={'danger'} handleClick={close}/>
                    </div>
                </div>
                <div className="dialog-body">
                    <Form save={save} close={close}/>
                </div>
            </div>
        </div>,
        document.body
    )
}
