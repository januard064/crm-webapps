import React, { useEffect, useMemo, useState } from 'react'

import styles from './pagination-table.module.css'

import { getDateFormat } from '@/utils/function-utils'

// import component
import Pagination from './pagination'

let PageSize = 3


const TableBody = (props) => {

    const { data, onClickTableRow, isCheck, setIsCheck } = props

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    }

    return (

        <tr className={styles.tableBodyRow}>
            <td style={{ padding: '26px 12px 26px 24px' }}>
                <div className={styles.checkboxContainer} onClick={handleClick}>
                    <input id={data.id} type='checkbox' checked={isCheck.includes(data.id)} className={styles.checkbox} />
                </div>
            </td>
            <td onClick={onClickTableRow} style={{ width: '25%', fontFamily: "Inter-Medium", color: "#101828" }}>{data.name}</td>
            <td onClick={onClickTableRow} style={{ width: '15%' }}>{data.gender}</td>
            <td onClick={onClickTableRow} style={{ width: '15%' }}>{getDateFormat(data.dob)}</td>
            <td onClick={onClickTableRow} style={{ width: '20%' }}>{data.maritalStatus}</td>
            <td onClick={onClickTableRow} style={{ width: '20%' }}>{data.employmentStatus}</td>
        </tr>

    )
}


const PaginationTable = (props) => {

    const { data, onClickTableRow } = props

    const [currentPage, setCurrentPage] = useState(1)

    const [currentTableData, setCurrentTableData] = useState([])

    const [isCheckAll, setIsCheckAll] = useState(false);

    const [isCheck, setIsCheck] = useState([]);

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const currentData = data.slice(firstPageIndex, lastPageIndex);

        setCurrentTableData(currentData)

    }, [data, currentPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [data])

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(data.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td style={{ padding: '12px 12px 12px 24px' }}>
                            <div className={styles.checkboxContainer} onClick={handleSelectAll}>
                                <input type='checkbox' className={styles.checkbox} />
                            </div>
                        </td>
                        <td style={{ width: '25%' }}>Name</td>
                        <td style={{ width: '15%' }}>Gender</td>
                        <td style={{ width: '15%' }}>DOB</td>
                        <td style={{ width: '20%' }}>Martial Status</td>
                        <td style={{ width: '20%' }}>Employement</td>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map((dataRow, index) => (
                        <TableBody data={dataRow} onClickTableRow={onClickTableRow} isCheck={isCheck} setIsCheck={setIsCheck} />
                    ))}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default PaginationTable