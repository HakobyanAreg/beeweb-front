import {TableHeaderCell} from "./TableHeaderCell/TableHeaderCell";
const tableCols = ['id', 'name', 'description', 'date', 'status']

export const TableHeader = ({handleInputChange}) => {

    return (
        <tr>
            {
                tableCols.map((headerCell, index) => (
                    <TableHeaderCell key={`${headerCell}_${index}`} headerCell={headerCell} handleInputChange={handleInputChange}/>
                ))
            }
        </tr>
    )
}
