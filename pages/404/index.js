import { useRouter } from 'next/router';

import styles from './404.module.css'

// import icons
import ArrowLeft from '@/components/icons/arrow-left';

const Custom404 = () => {

    const router = useRouter()

    const handleGoBack =  () => {
        router.back()
    }

    const handleGoHome = () =>{
        router.push('/')
    }


    return (
        <div className={styles.container}>
            <div>
                <div className={styles.errorInfo}>404 error</div>
                <div className={styles.title}>We can’t find that page</div>
                <div className={styles.subTitle}>Sorry, the page you are looking for doesn't exist or has been moved.</div>

                <div className={styles.actionSection}>
                    <div className={styles.backButton} onClick={handleGoBack}>
                        <div className={styles.flexCenter} style={{ marginRight: '8px' }} >
                            <ArrowLeft />
                        </div>
                        <div>Go back</div>
                    </div>

                    <div className={styles.homeButton} onClick={handleGoHome} >
                        <div>Take me home</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Custom404