
import styles from './card-component.module.css'

// import components
import UserAvatar from '../user-avatar/user-avatar'


const CardComponent = (props) => {

    const { title, data, style, imageUrl, actionTitle } = props

    return (
        <div className={styles.cardContainer} style={...style}>
            <div className={styles.flexStart}>
                <UserAvatar imageUrl={imageUrl} style={{ width: '48px', height: '48px' }} />
                <div style={{ marginLeft: '12px' }}>
                    <div style={{ fontFamily: "Inter-SemiBold", color: "#101828", lineHeight: '24px' }}>{title}</div>
                    <div style={{ fontFamily: "Inter-Regular", color: "#475467", fontSize: '14px', lineHeight: '20px' }}>${data}</div>
                </div>
            </div>
            <div className={styles.button}>
                {actionTitle}
            </div>
        </div>
    )

}

export default CardComponent