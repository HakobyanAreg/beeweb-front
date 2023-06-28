import './Table.scss';
import {TableHeader} from "./TableHeader/TableHeader";
import {TableRow} from "./TableRow/TableRow";
import {useCallback, useEffect, useState} from "react";

export const Table = ({tableData}) => {

    const [state, setState] = useState(null)
    const [delay, setDelay] = useState(null);

    useEffect(() => {
        setState(tableData)
    }, [tableData])


    const handleInputChange = useCallback((e, key) => {

        const { value } = e.target;

        if (delay) {
            clearTimeout(delay);
        }

        const timeout = setTimeout(() => {
            const _tableData = structuredClone(tableData);
            const _state = _tableData.filter(item => item[key].includes(value));

            setState(_state)

        }, 500);

        setDelay(timeout);
    }, [tableData, delay])

    return (
        <table className="table">
            <thead>
                <TableHeader handleInputChange={handleInputChange}/>
            </thead>
            <tbody>
                <TableRow tableData={state} />
            </tbody>
        </table>
    )
}
