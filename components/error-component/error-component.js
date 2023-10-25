
import { useRouter } from 'next/router'

import styles from './error-component.module.css'

// import icon
import WarningIcon from '../icons/warning-icon'

const ErrorComponent = (props) => {

    const router = useRouter()

    const { title } = props

    const handleRefreshPage = () => {
        router.reload()
    }

    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorInfo}>
                <div className={styles.justifyCenter}>
                    <div className={styles.warningContainer}>
                        <WarningIcon />
                    </div>
                </div>
                <div className={styles.errorTitle}>
                    {title}
                </div>
                <div className={styles.errorSubtitle}>
                    Something went wrong that we didn’t anticipate.
                </div>
                <div className={styles.actionSection}>
                    <div className={styles.actionButtom} onClick={handleRefreshPage}>
                        Retry
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent