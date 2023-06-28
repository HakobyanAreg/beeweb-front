import {TableRowCell} from "./TableRowCell/TableRowCell";
import {useCallback, useState} from "react";
import api from "../../../api";

export const TableRow = ({tableData}) => {

    const [editMode, setEditMode] = useState(null)

    const handleClick = (e, key, id, elem) => {
        if (key === 'id') {
            return
        }

        setEditMode({
            [id]: key,
            value: e.target.innerText
        })
    }

    const edit = useCallback((data) => {
        try {
            api.post('updateTableData', data)
                .catch(e => console.log(e))
            setEditMode(null)
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        tableData?.map((rowCell, index) => (
            <tr key={rowCell.id}>
                <TableRowCell id={index + 1} key={`${rowCell.id}_${index}`} rowCell={rowCell} handleClick={handleClick} editMode={editMode} edit={edit}/>
            </tr>
        ))

    )
}
