import './TableHeaderCell.scss'
import {Input} from "../../../Input/Input";

export const TableHeaderCell = ({headerCell, handleInputChange}) => {
    return (
        <th>
            <div className="table-title-wrapper">
                <span className="title">
                    {headerCell.toUpperCase()}
                </span>
                <Input type="text" name={headerCell} handleInputChange={handleInputChange} />
            </div>

        </th>
    )
}
