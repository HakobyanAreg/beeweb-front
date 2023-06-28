import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Input} from "../../../Input/Input";
import {Select} from "../../../Select/Select";

const values = []

export const TableRowCell = ({id, rowCell, handleClick, editMode, edit}) => {

    const inputElement = useRef()

    const [inputData, setInputData] = useState({
        _id: null,
        updatedKey: null,
        updatedValue: null
    })

    useEffect(() => {

        if (editMode) {
            inputElement.current?.focus();
        }

    }, [editMode])

    const handleInputChange = (e, key, id) => {

        const value = {_id: id, updatedKey: key, updatedValue: e.target.value}

        setInputData(value)
    }

    const memoValue = useMemo(() => {


        if (!inputData.updatedValue) {
            return
        }

        const filteredValue = values.filter(value => value.id === inputData._id)

        if (!filteredValue.length) {
            const newValue = {
                id: null,
                name: null,
                description: null,
                date: null,
                status: null
            }

            newValue.id = inputData._id;
            newValue[inputData.updatedKey] = inputData.updatedValue;

            values.push(newValue)

        } else {

            const findValue = values.find(value => value.id === filteredValue[0].id)

            findValue.id = inputData._id;
            findValue[inputData.updatedKey] = inputData.updatedValue;

        }

        return values.filter(value => value.id === rowCell.id)

    }, [inputData, rowCell])


    const renderInput = useCallback((rowCell, key) => (
        <>{key === 'status' ?
            <Select ref={inputElement} name={key} defaultValue={editMode.value}
                    handleInputChange={(e) => handleInputChange(e, key, rowCell.id)}
                    onBlur={e => edit(e, key, rowCell.id)} handleBlur={e => edit(inputData)}/>
            :
            <Input ref={inputElement} type={key === 'date' ? 'date' : 'text'} name="description"
                   handleInputChange={(e) => handleInputChange(e, key, rowCell.id)} defaultValue={editMode.value}
                   handleBlur={e => edit(inputData)}/>
        }
        </>
    ), [edit, editMode, inputData])


    return (
        Object.keys(rowCell).map((key, index) => (
            <td onClick={(e) => handleClick(e, key, rowCell.id)} key={`${key}_${index}`}>
                {editMode && editMode[rowCell.id] === key ?
                    renderInput(rowCell, key)
                    :
                    key === 'id' ? id : !!memoValue && !!memoValue[0][key] ? memoValue[0][key] : rowCell[key]
                }
            </td>
        ))
    )
}
