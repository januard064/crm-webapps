import React, { useEffect, useMemo, useState } from 'react'

import styles from './pagination-table.module.css'

import { getDateFormat } from '@/utils/function-utils'

// import component
import Pagination from './pagination'

let PageSize = 3

const TableHeader = () => {
    return (
        <div className={styles.tableHeader}>
            <div style={{ padding: '12px 12px 12px 24px' }}>
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' className={styles.checkbox} />
                </div>
            </div>
            <div style={{ width: '25%' }}>Name</div>
            <div style={{ width: '15%' }}>Gender</div>
            <div style={{ width: '15%' }}>DOB</div>
            <div style={{ width: '20%' }}>Martial Status</div>
            <div style={{ width: '20%' }}>Employement</div>
        </div>
    )
}


const PaginationTable = (props) => {

    const { data, onClickTableRow } = props

    const [currentPage, setCurrentPage] = useState(1)

    const [currentTableData, setCurrentTableData] = useState([])

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const currentData = data.slice(firstPageIndex, lastPageIndex);

        setCurrentTableData(currentData)

    }, [data, currentPage])

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage])

    console.log('currentTableData', currentTableData)

    return (
        <div className={styles.tableContainer}>
            <TableHeader />
            <table>
                <tbody>
                    {currentTableData.map((dataRow, index) => (
                        <tr key={index} className={styles.tableBodyRow}>
                            <td style={{ padding: '26px 12px 26px 24px' }}>
                                <div className={styles.checkboxContainer}>
                                    <input type='checkbox' className={styles.checkbox} />
                                </div>
                            </td>
                            <td onClick={onClickTableRow} style={{ width: '25%', fontFamily: "Inter-Medium", color: "#101828" }}>{dataRow.name}</td>
                            <td onClick={onClickTableRow} style={{ width: '15%' }}>{dataRow.gender}</td>
                            <td onClick={onClickTableRow} style={{ width: '15%' }}>{getDateFormat(dataRow.dob)}</td>
                            <td onClick={onClickTableRow} style={{ width: '20%' }}>{dataRow.maritalStatus}</td>
                            <td onClick={onClickTableRow} style={{ width: '20%' }}>{dataRow.employmentStatus}</td>
                        </tr>
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