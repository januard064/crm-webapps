
import styles from './chip-action.module.css'

import PlusCircleIcon from '../icons/plus-circle-icon'

const ChipAction = (props) => {

    const { title, onClick } = props

    return (
        <div className={styles.chipActionContainer} onClick={onClick}>
            <PlusCircleIcon />
            <div style={{ marginLeft: 4 }}>{title}</div>
        </div>
    )
}

export default ChipAction