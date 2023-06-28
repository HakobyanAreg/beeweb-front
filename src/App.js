import "./App.scss"
import {Table} from "./components/Table/Table";
import {useCallback, useEffect, useState} from "react";
import {Button} from "./components/Button/Button";
import api from "./api";
import {Dialog} from "./components/Dialog/Dialog";

function App() {

    const [tableData, setTableData] = useState(null)
    const [modalStatus, setModalStatus] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        api.get('getTableData').then(({data}) => {
            setTableData(data)
        }).catch(e => console.log(e))
    }, [])

    const handleClick = useCallback(() => {
        setModalStatus(true)
    }, [])

    const save = useCallback((e, formData) => {
        e.preventDefault()

        const isValidData = Object.values(formData).filter(value => value !== '');

        if (isValidData.length !== 4) {
            setError(true)
            return;
        }

        api.post('setTableData', formData).then(({data}) => {
            const _tableData = structuredClone(tableData);
            _tableData.push(data)
            setTableData(_tableData)
        }).catch(e => console.log(e))

        setModalStatus(false)
    }, [tableData])

    const close = useCallback(() => {
        setModalStatus(false)
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">
                    Table
                </h1>
            </header>

            <div className="content">
                {modalStatus &&
                <Dialog save={save} close={close} error={error}/>
                }
                <div className="add-data-wrapper">
                    <h2 className="button-title">
                        Add table data
                    </h2>
                    <Button name={'Add data'} theme={'primary'} handleClick={handleClick}/>
                </div>
                {!!tableData?.length &&
                <div className="table-wrapper">
                    <Table tableData={tableData}/>
                </div>
                }

            </div>
        </div>
    );
}

export default App;
