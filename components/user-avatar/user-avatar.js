
import Image from "next/image"

import Styles from './user-avatar.module.css'

import UserAvatarURL from '../images/user-avatar.png'


const UserAvatar = () => {

    return (
        <div className={Styles.imageContainer}>
            <Image className={Styles.image} src={UserAvatarURL} width={400} height={400} />
        </div>

    )
}

export default UserAvatar