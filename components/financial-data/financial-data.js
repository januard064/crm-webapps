
import styles from './financial-data.module.css'

const FinancialRow = ({ head, body, isFirst, isLast }) => {

    return (
        <div className={styles.financialRow}
            style={{
                borderTop: ' 1px solid #EAECF0',
                borderRadius: isFirst ? '12px 12px 0px 0px' : isLast ? '0px 0px 12px 12px' : '',

                borderBottom: isLast ? '1px solid #EAECF0' : '',
            }}
        >
            <div style={{ fontFamily: "Inter-Medium", color: "#101828" }} className={styles.head}>
                {head}
            </div>
            <div style={{ fontFamily: "Inter-Regular", color: "#475467" }} className={styles.body}>
                ${body}
            </div>
        </div>
    )
}


const FinancialData = (props) => {

    const { data } = props


    const getRowTitle = (key) => {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }

    return (
        <div className={styles.financialDataContainer}>
            {
                Object.keys(data).map((key, i) => (
                    <FinancialRow head={getRowTitle(key)} body={data[key]} isFirst={i === 0} isLast={i === Object.keys(data).length - 1} />
                ))
            }
        </div>
    )
}

export default FinancialData