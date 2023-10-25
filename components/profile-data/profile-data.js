
import styles from './profile-data.module.css'

const ProfileTable = ({ head, body }) => {

    return (
        <div className={styles.profileTable}>
            <div style={{ fontFamily: "Inter-Medium", color: '#667085' }}>{head}</div>
            <div style={{ fontFamily: "Inter-Regular", color: '#475467', marginTop: '8px' }}>{body}</div>
        </div>
    )
}

const ProfileData = (props) => {

    const { data } = props

    return (
        <div className={styles.profileDataContainer}>
            <ProfileTable head={"Gender"} body={data.gender} />
            <ProfileTable head={"DOB"} body={data.gender} />
            <ProfileTable head={"Marital Status"} body={data.maritalStatus} />
            <ProfileTable head={"Employment"} body={data.employmentStatus} />
        </div>
    )
}

export default ProfileData